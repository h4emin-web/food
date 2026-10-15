create table if not exists public.sourcing_requests (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  sector text not null check (sector in ('식품', '제약', '화장품')),
  ingredient_name text not null,
  quantity text not null default '',
  sample_quantity text not null default '',
  required_documents text not null default '',
  note text not null default '',
  status text not null default '접수',
  feedback text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.sourcing_requests enable row level security;
drop policy if exists "sourcing_requests_owner_only" on public.sourcing_requests;
create policy "sourcing_requests_owner_only" on public.sourcing_requests for all using (owner_id = auth.uid()) with check (owner_id = auth.uid());
grant select, insert, update, delete on public.sourcing_requests to authenticated;
