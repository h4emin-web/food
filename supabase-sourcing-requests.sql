-- Sourcing requests: members submit, admins read them in the 쪽지함 and reply.
-- Run once in the Supabase SQL editor. Safe to re-run.
--
-- ORDER: run supabase-admin-check.sql FIRST. These policies trust
-- public.is_admin(); the old version also treated profiles.email =
-- 'foden_@naver.com' as admin, which any member could claim. The guard below
-- stops this script if that old rule is still live.

do $$
begin
  if exists (
    select 1 from pg_proc p join pg_namespace n on n.oid = p.pronamespace
    where n.nspname = 'public' and p.proname = 'is_admin' and p.prosrc ilike '%foden_@naver.com%'
  ) then
    raise exception 'run supabase-admin-check.sql first (is_admin() still trusts profiles.email)';
  end if;
end $$;

create table if not exists public.sourcing_requests (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  owner_email text not null default '' check (char_length(owner_email) <= 320),
  owner_name text not null default '' check (char_length(owner_name) <= 100),
  sector text not null check (sector in ('식품', '제약', '화장품')),
  ingredient_name text not null check (char_length(ingredient_name) between 1 and 200),
  quantity text not null default '' check (char_length(quantity) <= 200),
  sample_quantity text not null default '' check (char_length(sample_quantity) <= 200),
  required_documents text not null default '' check (char_length(required_documents) <= 500),
  note text not null default '' check (char_length(note) <= 4000),
  status text not null default '접수' check (status in ('접수', '확인 중', '공급사 확인', '완료')),
  feedback text not null default '' check (char_length(feedback) <= 4000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Earlier draft of this file had no owner_email/owner_name defaults; add them if missing.
alter table public.sourcing_requests add column if not exists owner_email text not null default '';
alter table public.sourcing_requests add column if not exists owner_name text not null default '';
alter table public.sourcing_requests alter column owner_id set default auth.uid();

-- Requester identity, status and reply are set by the server, never taken
-- from the client: a member cannot file a request under someone else's
-- email or pre-fill an admin reply.
create or replace function public.sourcing_requests_before_insert()
returns trigger
language plpgsql
security definer
set search_path = public, auth
as $$
begin
  new.owner_id := auth.uid();
  new.owner_email := coalesce(auth.jwt() ->> 'email', '');
  new.owner_name := coalesce(
    (select coalesce(nullif(p.nickname, ''), p.name) from public.profiles p where p.id = auth.uid()),
    ''
  );
  new.status := '접수';
  new.feedback := '';
  new.created_at := now();
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists sourcing_requests_before_insert on public.sourcing_requests;
create trigger sourcing_requests_before_insert
before insert on public.sourcing_requests
for each row execute function public.sourcing_requests_before_insert();

-- Admin replies only change status/feedback; ownership and the request
-- body stay exactly as submitted, and updated_at comes from the server clock.
create or replace function public.sourcing_requests_before_update()
returns trigger
language plpgsql
as $$
begin
  new.id := old.id;
  new.owner_id := old.owner_id;
  new.owner_email := old.owner_email;
  new.owner_name := old.owner_name;
  new.sector := old.sector;
  new.ingredient_name := old.ingredient_name;
  new.quantity := old.quantity;
  new.sample_quantity := old.sample_quantity;
  new.required_documents := old.required_documents;
  new.note := old.note;
  new.created_at := old.created_at;
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists sourcing_requests_before_update on public.sourcing_requests;
create trigger sourcing_requests_before_update
before update on public.sourcing_requests
for each row execute function public.sourcing_requests_before_update();

create index if not exists sourcing_requests_owner_created_idx
  on public.sourcing_requests (owner_id, created_at desc);

alter table public.sourcing_requests enable row level security;

drop policy if exists "sourcing_requests_owner_only" on public.sourcing_requests;
drop policy if exists "sourcing_requests_select" on public.sourcing_requests;
drop policy if exists "sourcing_requests_insert" on public.sourcing_requests;
drop policy if exists "sourcing_requests_update_admin" on public.sourcing_requests;
drop policy if exists "sourcing_requests_delete" on public.sourcing_requests;

-- Requesters see their own requests; admins see all of them.
create policy "sourcing_requests_select" on public.sourcing_requests
for select using (owner_id = auth.uid() or public.is_admin());

-- Requesters create requests for themselves only, always starting as 접수
-- with no admin reply.
create policy "sourcing_requests_insert" on public.sourcing_requests
for insert with check (owner_id = auth.uid() and status = '접수' and feedback = '');

-- Only admins change status and reply.
create policy "sourcing_requests_update_admin" on public.sourcing_requests
for update using (public.is_admin()) with check (public.is_admin());

create policy "sourcing_requests_delete" on public.sourcing_requests
for delete using (owner_id = auth.uid() or public.is_admin());

revoke all on public.sourcing_requests from anon;
grant select, insert, update, delete on public.sourcing_requests to authenticated;

-- Check (as a normal member via the site): submit a request, then
--   select count(*) from public.sourcing_requests;  -- as admin: all rows
-- Rollback:
--   drop table if exists public.sourcing_requests;
--   drop function if exists public.sourcing_requests_before_insert();
--   drop function if exists public.sourcing_requests_before_update();
