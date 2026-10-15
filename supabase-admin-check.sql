-- Stop admin takeover via profiles.email.
--
-- Problem: is_admin() treats profiles.email = 'foden_@naver.com' as admin, and
-- profiles_update_own / profiles_insert_own never check email. Any member can
-- set their own profiles.email to that address (blocked today only by the
-- unique constraint, i.e. only while the real admin's profile row holds it).
--
-- Fix: decide admin from the is_admin flag alone, and pin profiles.email to
-- the signed-in user's auth email so it cannot be spoofed.
--
-- Runs as one transaction: if any step fails, nothing is changed.

-- Pre-check (read-only, counts only). Rows here would fail the new email
-- check on their next profile save; step 0 below aligns them.
--   select count(*) from public.profiles p join auth.users u on u.id = p.id
--   where lower(p.email) <> lower(u.email);

begin;

-- 0. Align profiles.email with the auth email (the source of truth).
update public.profiles p
set email = u.email
from auth.users u
where p.id = u.id
  and lower(p.email) <> lower(u.email);

-- 1. Make sure the real admin keeps access before dropping the email rule.
--    auth.users.email cannot be changed by members. Aborts unless exactly
--    one profile matches.
do $$
declare
  n int;
begin
  update public.profiles p
  set is_admin = true
  from auth.users u
  where p.id = u.id
    and lower(u.email) = 'foden_@naver.com';
  get diagnostics n = row_count;
  if n <> 1 then
    raise exception 'admin profile rows = %, aborting', n;
  end if;
end $$;

-- 2. Admin = is_admin flag only.
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public, auth
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and is_admin = true
  );
$$;

-- 3. Members can only store their own auth email.
drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own" on public.profiles
for update
using (id = auth.uid())
with check (id = auth.uid() and is_admin = false and lower(email) = lower(auth.jwt() ->> 'email'));

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own" on public.profiles
for insert with check (id = auth.uid() and is_admin = false and lower(email) = lower(auth.jwt() ->> 'email'));

commit;

-- Check: as a normal member,
--   update profiles set email = 'foden_@naver.com' where id = auth.uid();  -> rejected by policy

-- ============================================================
-- Rollback
-- ============================================================
-- Restore the previous function and policies:
--   create or replace function public.is_admin() returns boolean language sql stable
--   security definer set search_path = public, auth as $$
--     select exists (select 1 from public.profiles where id = auth.uid()
--       and (is_admin = true or email = 'foden_@naver.com'));
--   $$;
--   drop policy if exists "profiles_update_own" on public.profiles;
--   create policy "profiles_update_own" on public.profiles for update
--     using (id = auth.uid()) with check (id = auth.uid() and is_admin = false);
--   drop policy if exists "profiles_insert_own" on public.profiles;
--   create policy "profiles_insert_own" on public.profiles for insert
--     with check (id = auth.uid() and is_admin = false);
-- Steps 0 and 1 can stay: aligned emails and the admin flag match the old rules.
