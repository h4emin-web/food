-- 원료 데이터 정리용 미리보기 SQL입니다.
-- 먼저 SELECT 결과를 확인한 뒤, 삭제가 필요할 때만 별도로 실행하세요.

-- 1) 빈값처럼 저장된 리드타임 현황
select lead_time, count(*)
from public.ingredients
where lower(trim(coalesce(lead_time, ''))) in ('확인 필요', '문의 필요', '-')
group by lead_time
order by count(*) desc;

-- 2) 완전히 같은 원료 후보 현황
select
  lower(trim(coalesce(name, ''))) as normalized_name,
  lower(trim(coalesce(english_name, ''))) as normalized_english_name,
  lower(trim(coalesce(company, ''))) as normalized_company,
  lower(trim(coalesce(sector, ''))) as normalized_sector,
  count(*) as duplicate_count
from public.ingredients
group by 1, 2, 3, 4
having count(*) > 1
order by duplicate_count desc;

-- 3) 리드타임 표시값만 정리할 때 사용하는 안전한 UPDATE
-- update public.ingredients
-- set lead_time = null, updated_at = now()
-- where lower(trim(coalesce(lead_time, ''))) in ('확인 필요', '문의 필요', '-');

-- 중복 삭제는 원료명·영문명·공급사·분야·제조사·제조국을 사람이 확인한 뒤
-- 연결표를 만든 후에만 실행하세요. 자동 삭제하지 않습니다.
