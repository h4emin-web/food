-- Sourcing requests: members submit, admins read them in the 쪽지함 and reply.
-- Run once in the Supabase SQL editor. Safe to re-run.

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
