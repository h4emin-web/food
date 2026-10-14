-- Hide private manufacturers from the public API.
--
-- Run in three steps, in this order:
--   A. (this file, section A)  create the view  -- additive, safe to run any time
--   B. deploy the site code that reads from ingredients_public
--   C. (this file, section C)  revoke direct reads of ingredients.manufacturer
-- Running C before B is deployed breaks the ingredient list and detail pages.

-- ============================================================
-- A. Public read view
-- ============================================================
-- Not security_invoker: after step C, anon/authenticated can no longer read
-- ingredients.manufacturer, so an invoker view could not read it either.
-- Running as the view owner bypasses RLS, which exposes nothing extra here
-- because the only select policy on ingredients is "using (true)".
create or replace view public.ingredients_public as
select
  i.id,
  i.owner_id,
  i.owner_email,
  i.owner_name,
  i.company,
  i.company_website,
  i.name,
  i.english_name,
  i.origin,
  i.origin_flag_code,
  case
    when i.manufacturer_visibility = 'private'
      and i.owner_id is distinct from ctx.uid
      and not ctx.admin
    then ''
    else i.manufacturer
  end as manufacturer,
  i.manufacturer_visibility,
  i.sector,
  i.category,
  i.use,
  i.cert,
  i.moq,
  i.lead_time,
  i.sample,
  i.response,
  i.description,
  i.created_at,
  i.updated_at
from public.ingredients i
cross join (select auth.uid() as uid, public.is_admin() as admin) ctx;

grant select on public.ingredients_public to anon, authenticated;

-- Check after A:
--   select manufacturer_visibility, count(*) filter (where manufacturer <> '') as shown
--   from public.ingredients_public group by 1;
--   -- run as anon (API): private rows must show 0

-- ============================================================
-- C. Revoke direct reads of manufacturer (only after B is live)
-- ============================================================
-- A column-level revoke has no effect while a table-level SELECT grant exists,
-- so drop the table grant and re-grant every column except manufacturer.
-- INSERT/UPDATE/DELETE grants are untouched.
revoke select on public.ingredients from anon, authenticated;
grant select (
  id, owner_id, owner_email, owner_name, company, company_website, name,
  english_name, origin, origin_flag_code, manufacturer_visibility, sector,
  category, use, cert, moq, lead_time, sample, response, description,
  created_at, updated_at
) on public.ingredients to anon, authenticated;

-- Check after C (via API with the anon key):
--   GET /rest/v1/ingredients?select=manufacturer&limit=1   -> 401/403 permission denied
--   GET /rest/v1/ingredients?select=*&limit=1               -> permission denied
--   GET /rest/v1/ingredients_public?select=id&limit=1       -> 200

-- ============================================================
-- Rollback
-- ============================================================
-- Undo C:
--   grant select on public.ingredients to anon, authenticated;
-- Undo A (only after the site no longer reads ingredients_public):
--   drop view if exists public.ingredients_public;
