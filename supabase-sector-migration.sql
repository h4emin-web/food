-- Add sector fields for integrated food/pharma/cosmetics ingredient boards.
-- Run once in the Supabase SQL Editor for project vkmafqwfgzhminlrclxp.

alter table public.ingredients
  add column if not exists sector text not null default '식품';

alter table public.community_posts
  add column if not exists sector text not null default '식품';

update public.ingredients
set sector = '식품'
where sector is null or trim(sector) = '';

update public.community_posts
set sector = '식품'
where sector is null or trim(sector) = '';
