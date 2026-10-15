-- Stop admin takeover via profiles.email.
--
-- Problem: is_admin() treats profiles.email = 'foden_@naver.com' as admin, and
-- profiles_update_own / profiles_insert_own never check email. Any member can
-- set their own profiles.email to that address (blocked today only by the
-- unique constraint, i.e. only while the real admin's profile row holds it).
--
-- Fix: decide admin from the is_admin flag alone, and pin profiles.email to
-- the signed-in user's auth email so it cannot be spoofed.

-- 1. Make sure the real admin keeps access before dropping the email rule.
--    auth.users.email cannot be changed by members.
update public.profiles p
set is_admin = true
from auth.users u
where p.id = u.id
  and lower(u.email) = 'foden_@naver.com';
-- Expect exactly 1 row updated. If 0, the admin has no profile row yet:
-- STOP and create it before running step 2, or the admin loses access.

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
with check (id = auth.uid() and is_admin = false and lower(email) = lower(auth.email()));

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own" on public.profiles
for insert with check (id = auth.uid() and is_admin = false and lower(email) = lower(auth.email()));

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
-- Step 1 (is_admin = true on the admin row) can stay; it matches the old rule.
