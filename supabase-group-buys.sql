-- 공동구매 (group buy): one buyer asks for an ingredient, the admin sets the
-- MOQ, and other buyers pledge quantities until the MOQ is met.
--
-- Buyers must stay anonymous to each other. That shapes the whole file:
--   * the board reads public.group_buys_public, a view that exposes totals
--     but no identity. The base table's select policy is owner-or-admin.
--   * a pledge row (group_buy_orders) is readable only by its own buyer and
--     by admins, so nobody can map a quantity back to a company.
--   * group_buy_quantities() returns the bare list of quantities for the
--     progress breakdown — numbers only, no ids, no order by buyer.
--
-- Run once in the Supabase SQL editor. Safe to re-run. It touches no
-- existing table: it adds its own two, and creates public.is_admin() only
-- if that function is missing.

-- The policies below call public.is_admin(). If it is missing this creates
-- the safe version — admin comes from the profiles.is_admin flag alone.
-- It never replaces an existing one: an is_admin() that still trusts
-- profiles.email is a takeover risk (any member can claim that address), and
-- fixing it is supabase-admin-check.sql's job, not this file's.
do $$
begin
  if exists (
    select 1 from pg_proc p join pg_namespace n on n.oid = p.pronamespace
    where n.nspname = 'public' and p.proname = 'is_admin' and p.prosrc ilike '%@%'
  ) then
    raise exception 'run supabase-admin-check.sql first (is_admin() still trusts an email address)';
  end if;
end $$;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public, auth
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and is_admin = true
  );
$$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated;

-- ---------------------------------------------------------------- tables

create table if not exists public.group_buys (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  sector text not null check (sector in ('식품', '제약', '화장품')),
  ingredient_name text not null check (char_length(ingredient_name) between 1 and 200),
  spec text not null default '' check (char_length(spec) <= 200),
  -- The maker the requester asked for. Blank means "no preference", and the
  -- admin fills assigned_manufacturer in instead. Buyers who dislike the
  -- assigned maker can withdraw while the 모집 is still open.
  manufacturer text not null default '' check (char_length(manufacturer) <= 200),
  assigned_manufacturer text not null default '' check (char_length(assigned_manufacturer) <= 200),
  unit text not null default 'kg' check (char_length(unit) between 1 and 20),
  note text not null default '' check (char_length(note) <= 4000),
  -- What the requester themselves wants. It cannot become a pledge yet (there
  -- is no MOQ to pledge against), so it is held here and turned into their
  -- group_buy_orders row the moment an admin opens the 모집.
  owner_quantity numeric(14, 3) not null default 0 check (owner_quantity >= 0),
  -- 0 until an admin sets it; the board shows 모집중 only once it is > 0.
  moq numeric(14, 3) not null default 0 check (moq >= 0),
  unit_price_note text not null default '' check (char_length(unit_price_note) <= 200),
  deadline date,
  status text not null default '요청'
    check (status in ('요청', '모집중', '달성', '진행', '완료', '취소')),
  admin_note text not null default '' check (char_length(admin_note) <= 4000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.group_buy_orders (
  id uuid primary key default gen_random_uuid(),
  group_buy_id uuid not null references public.group_buys(id) on delete cascade,
  buyer_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  quantity numeric(14, 3) not null check (quantity > 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (group_buy_id, buyer_id)
);

create index if not exists group_buys_status_created_idx
  on public.group_buys (status, created_at desc);
create index if not exists group_buy_orders_group_idx
  on public.group_buy_orders (group_buy_id);
create index if not exists group_buy_orders_buyer_idx
  on public.group_buy_orders (buyer_id);

-- ------------------------------------------------------------- the board

-- No security_invoker, so the view runs as its owner and can aggregate rows
-- the reader is not allowed to see one by one. Only non-identifying columns
-- are listed; adding owner_id here would undo the anonymity.
create or replace view public.group_buys_public as
select
  g.id,
  g.sector,
  g.ingredient_name,
  g.spec,
  g.manufacturer,
  g.assigned_manufacturer,
  g.unit,
  g.note,
  g.moq,
  g.unit_price_note,
  g.deadline,
  g.status,
  g.admin_note,
  g.created_at,
  g.updated_at,
  coalesce(o.total, 0)::numeric(14, 3) as pledged_total,
  coalesce(o.buyers, 0)::integer as buyer_count,
  (g.owner_id = auth.uid()) as is_mine,
  exists (
    select 1 from public.group_buy_orders b
    where b.group_buy_id = g.id and b.buyer_id = auth.uid()
  ) as has_joined,
  (
    select b.quantity from public.group_buy_orders b
    where b.group_buy_id = g.id and b.buyer_id = auth.uid()
  ) as my_quantity
from public.group_buys g
left join (
  select group_buy_id, sum(quantity) as total, count(*) as buyers
  from public.group_buy_orders
  group by group_buy_id
) o on o.group_buy_id = g.id;

-- Quantities only: the progress breakdown shows "구매자 A · 300kg" without
-- ever learning who A is. Ordered by size so the order does not hint at who
-- joined when.
create or replace function public.group_buy_quantities(target uuid)
returns table (quantity numeric)
language sql
stable
security definer
set search_path = public
as $$
  select o.quantity
  from public.group_buy_orders o
  where o.group_buy_id = target
  order by o.quantity desc, o.id;
$$;

-- Used by the pledge policies below. A buyer cannot read other people's
-- group_buys rows, so the check has to run as definer.
create or replace function public.group_buy_is_open(target uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.group_buys
    where id = target and moq > 0 and status in ('모집중', '달성')
  );
$$;

-- ----------------------------------------------------------- write rules

-- Requester identity, status, MOQ and the admin reply are server-set: a
-- member cannot open a request that is already 모집중, or pre-fill an MOQ.
create or replace function public.group_buys_before_insert()
returns trigger
language plpgsql
security definer
set search_path = public, auth
as $$
begin
  new.owner_id := auth.uid();
  new.status := '요청';
  new.moq := 0;
  new.assigned_manufacturer := '';
  new.unit_price_note := '';
  new.admin_note := '';
  new.deadline := null;
  new.created_at := now();
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists group_buys_before_insert on public.group_buys;
create trigger group_buys_before_insert
before insert on public.group_buys
for each row execute function public.group_buys_before_insert();

-- Admin edits only the MOQ, deadline, status and notes; the request body
-- stays exactly as the member submitted it.
create or replace function public.group_buys_before_update()
returns trigger
language plpgsql
as $$
begin
  new.id := old.id;
  new.owner_id := old.owner_id;
  new.sector := old.sector;
  new.ingredient_name := old.ingredient_name;
  new.spec := old.spec;
  -- The maker the requester asked for is part of the request body; only
  -- assigned_manufacturer is the admin's to set.
  new.manufacturer := old.manufacturer;
  new.unit := old.unit;
  new.note := old.note;
  new.owner_quantity := old.owner_quantity;
  new.created_at := old.created_at;
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists group_buys_before_update on public.group_buys;
create trigger group_buys_before_update
before update on public.group_buys
for each row execute function public.group_buys_before_update();

-- Opening the 모집 enrols the requester with the quantity they asked for, so
-- the person who started the group buy does not have to join their own.
create or replace function public.group_buys_enrol_owner()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.status = '모집중' and old.status = '요청' and new.owner_quantity > 0 then
    insert into public.group_buy_orders (group_buy_id, buyer_id, quantity)
    values (new.id, new.owner_id, new.owner_quantity)
    on conflict (group_buy_id, buyer_id) do nothing;
  end if;
  return null;
end;
$$;

drop trigger if exists group_buys_enrol_owner on public.group_buys;
create trigger group_buys_enrol_owner
after update on public.group_buys
for each row execute function public.group_buys_enrol_owner();

-- 모집중 flips to 달성 the moment the pledges reach the MOQ, and back if a
-- pledge is lowered or withdrawn. Once an admin moves it on to 진행/완료/취소
-- the status is theirs, so this leaves it alone.
create or replace function public.group_buys_sync_status()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  gid uuid;
  target numeric;
  state text;
  total numeric;
begin
  gid := coalesce(new.group_buy_id, old.group_buy_id);
  select moq, status into target, state from public.group_buys where id = gid;
  if target is null or target <= 0 then
    return null;
  end if;
  select coalesce(sum(quantity), 0) into total
  from public.group_buy_orders where group_buy_id = gid;
  if state = '모집중' and total >= target then
    update public.group_buys set status = '달성' where id = gid;
  elsif state = '달성' and total < target then
    update public.group_buys set status = '모집중' where id = gid;
  end if;
  return null;
end;
$$;

drop trigger if exists group_buy_orders_sync_status on public.group_buy_orders;
create trigger group_buy_orders_sync_status
after insert or update or delete on public.group_buy_orders
for each row execute function public.group_buys_sync_status();

create or replace function public.group_buy_orders_before_write()
returns trigger
language plpgsql
security definer
set search_path = public, auth
as $$
begin
  -- Not auth.uid(): group_buys_enrol_owner() inserts on the requester's
  -- behalf while the admin is the caller. A forged buyer_id from a client is
  -- rejected by the RLS insert policy instead.
  new.buyer_id := coalesce(old.buyer_id, new.buyer_id);
  new.group_buy_id := coalesce(old.group_buy_id, new.group_buy_id);
  new.created_at := coalesce(old.created_at, now());
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists group_buy_orders_before_write on public.group_buy_orders;
create trigger group_buy_orders_before_write
before insert or update on public.group_buy_orders
for each row execute function public.group_buy_orders_before_write();

-- ------------------------------------------------------------------- RLS

alter table public.group_buys enable row level security;
alter table public.group_buy_orders enable row level security;

drop policy if exists "group_buys_select" on public.group_buys;
drop policy if exists "group_buys_insert" on public.group_buys;
drop policy if exists "group_buys_update_admin" on public.group_buys;
drop policy if exists "group_buys_delete" on public.group_buys;

-- Everyone reads the board through group_buys_public; the base table keeps
-- owner_id, so direct reads are owner-or-admin only.
create policy "group_buys_select" on public.group_buys
for select using (owner_id = auth.uid() or public.is_admin());

create policy "group_buys_insert" on public.group_buys
for insert with check (
  owner_id = auth.uid() and status = '요청' and moq = 0 and assigned_manufacturer = ''
);

create policy "group_buys_update_admin" on public.group_buys
for update using (public.is_admin()) with check (public.is_admin());

-- The requester can withdraw only while nobody has been asked to join yet.
create policy "group_buys_delete" on public.group_buys
for delete using ((owner_id = auth.uid() and status = '요청') or public.is_admin());

drop policy if exists "group_buy_orders_select" on public.group_buy_orders;
drop policy if exists "group_buy_orders_insert" on public.group_buy_orders;
drop policy if exists "group_buy_orders_update" on public.group_buy_orders;
drop policy if exists "group_buy_orders_delete" on public.group_buy_orders;

-- This is the anonymity rule: a buyer sees only their own pledge.
create policy "group_buy_orders_select" on public.group_buy_orders
for select using (buyer_id = auth.uid() or public.is_admin());

create policy "group_buy_orders_insert" on public.group_buy_orders
for insert with check (buyer_id = auth.uid() and public.group_buy_is_open(group_buy_id));

create policy "group_buy_orders_update" on public.group_buy_orders
for update using (buyer_id = auth.uid() and public.group_buy_is_open(group_buy_id))
with check (buyer_id = auth.uid());

create policy "group_buy_orders_delete" on public.group_buy_orders
for delete using ((buyer_id = auth.uid() and public.group_buy_is_open(group_buy_id)) or public.is_admin());

-- ---------------------------------------------------------------- grants

revoke all on public.group_buys from anon;
revoke all on public.group_buy_orders from anon;
revoke all on public.group_buys_public from anon;

grant select, insert, delete on public.group_buys to authenticated;
grant update on public.group_buys to authenticated; -- narrowed by RLS to admins
grant select, insert, update, delete on public.group_buy_orders to authenticated;
grant select on public.group_buys_public to authenticated;
grant execute on function public.group_buy_quantities(uuid) to authenticated;
grant execute on function public.group_buy_is_open(uuid) to authenticated;

-- Check, signed in as two different members:
--   member A: insert a 공동구매 request        -> status 요청
--   admin:    set moq = 1000, status = 모집중
--   member B: insert a pledge of 400          -> still 모집중
--   member A: insert a pledge of 600          -> flips to 달성
--   member B: select * from public.group_buy_orders;  -- only their own row
--
-- Rollback:
--   drop view if exists public.group_buys_public;
--   drop table if exists public.group_buy_orders;
--   drop table if exists public.group_buys;
--   drop function if exists public.group_buy_quantities(uuid);
--   drop function if exists public.group_buy_is_open(uuid);
--   drop function if exists public.group_buys_before_insert();
--   drop function if exists public.group_buys_before_update();
--   drop function if exists public.group_buys_sync_status();
--   drop function if exists public.group_buys_enrol_owner();
--   drop function if exists public.group_buy_orders_before_write();
