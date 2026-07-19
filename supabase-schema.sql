-- Run this in Supabase SQL Editor after creating the project.
-- It prepares the tables needed to move 푸드소싱 from browser localStorage to Supabase.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  name text not null default '',
  nickname text not null default '',
  phone text not null default '',
  company text not null default '',
  company_website text not null default '',
  role text not null default '',
  interest text not null default '',
  memo text not null default '',
  is_admin boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists profiles_nickname_unique
  on public.profiles (lower(nickname))
  where nickname <> '';

create or replace function public.nickname_exists(check_nickname text)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where lower(nickname) = lower(trim(check_nickname))
      and nickname <> ''
  );
$$;

grant execute on function public.nickname_exists(text) to anon, authenticated;

create table if not exists public.ingredients (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references auth.users(id) on delete cascade,
  owner_email text not null default '',
  owner_name text not null default '',
  company text not null default '',
  company_website text not null default '',
  name text not null,
  english_name text not null default '',
  origin text not null default '',
  origin_flag_code text not null default '',
  manufacturer text not null default '',
  manufacturer_visibility text not null default 'public',
  category text not null default '',
  use text not null default '',
  cert text not null default '',
  moq text not null default '',
  lead_time text not null default '',
  sample text not null default '가능',
  response text not null default '샘플·견적 모두 가능',
  description text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.community_posts (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references auth.users(id) on delete set null,
  author text not null default '',
  title text not null,
  description text not null default '',
  views integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.partner_posts (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references auth.users(id) on delete set null,
  post_type text not null default 'inquiry',
  mode text not null default 'OEM',
  trade text not null default '구매',
  title text not null,
  company text not null default '',
  business text not null default '',
  description text not null default '',
  author text not null default '',
  views integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  post_scope text not null,
  post_id uuid not null,
  owner_id uuid references auth.users(id) on delete set null,
  author text not null default '',
  body text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references auth.users(id) on delete cascade,
  partner text not null default '',
  body text not null,
  direction text not null default 'received',
  read boolean not null default false,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.favorites (
  user_id uuid references auth.users(id) on delete cascade,
  ingredient_id uuid not null,
  created_at timestamptz not null default now(),
  primary key (user_id, ingredient_id)
);

create table if not exists public.daily_visits (
  visit_date date not null,
  ip_hash text not null,
  page text not null default '',
  created_at timestamptz not null default now(),
  primary key (visit_date, ip_hash, page)
);

alter table public.profiles enable row level security;
alter table public.ingredients enable row level security;
alter table public.community_posts enable row level security;
alter table public.partner_posts enable row level security;
alter table public.comments enable row level security;
alter table public.messages enable row level security;
alter table public.favorites enable row level security;
alter table public.daily_visits enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
stable
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and (is_admin = true or email = 'foden_@naver.com')
  );
$$;

drop policy if exists "profiles_select_own_or_admin" on public.profiles;
create policy "profiles_select_own_or_admin" on public.profiles
for select using (id = auth.uid() or public.is_admin());

drop policy if exists "profiles_update_own_or_admin" on public.profiles;
create policy "profiles_update_own_or_admin" on public.profiles
for update using (id = auth.uid() or public.is_admin())
with check (id = auth.uid() or public.is_admin());

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own" on public.profiles
for insert with check (id = auth.uid());

drop policy if exists "ingredients_select_all" on public.ingredients;
create policy "ingredients_select_all" on public.ingredients
for select using (true);

drop policy if exists "ingredients_modify_owner_or_admin" on public.ingredients;
create policy "ingredients_modify_owner_or_admin" on public.ingredients
for all using (owner_id = auth.uid() or public.is_admin())
with check (owner_id = auth.uid() or public.is_admin());

drop policy if exists "community_select_all" on public.community_posts;
create policy "community_select_all" on public.community_posts
for select using (true);

drop policy if exists "community_modify_owner_or_admin" on public.community_posts;
create policy "community_modify_owner_or_admin" on public.community_posts
for all using (owner_id = auth.uid() or public.is_admin())
with check (owner_id = auth.uid() or public.is_admin());

drop policy if exists "partner_select_all" on public.partner_posts;
create policy "partner_select_all" on public.partner_posts
for select using (true);

drop policy if exists "partner_modify_owner_or_admin" on public.partner_posts;
create policy "partner_modify_owner_or_admin" on public.partner_posts
for all using (owner_id = auth.uid() or public.is_admin())
with check (owner_id = auth.uid() or public.is_admin());

drop policy if exists "comments_select_all" on public.comments;
create policy "comments_select_all" on public.comments
for select using (true);

drop policy if exists "comments_modify_owner_or_admin" on public.comments;
create policy "comments_modify_owner_or_admin" on public.comments
for all using (owner_id = auth.uid() or public.is_admin())
with check (owner_id = auth.uid() or public.is_admin());

drop policy if exists "messages_owner_only" on public.messages;
create policy "messages_owner_only" on public.messages
for all using (owner_id = auth.uid() or public.is_admin())
with check (owner_id = auth.uid() or public.is_admin());

drop policy if exists "favorites_owner_only" on public.favorites;
create policy "favorites_owner_only" on public.favorites
for all using (user_id = auth.uid())
with check (user_id = auth.uid());

drop policy if exists "daily_visits_insert_anyone" on public.daily_visits;
create policy "daily_visits_insert_anyone" on public.daily_visits
for insert with check (true);

drop policy if exists "daily_visits_admin_select" on public.daily_visits;
create policy "daily_visits_admin_select" on public.daily_visits
for select using (public.is_admin());
