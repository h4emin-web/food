const { fetchSupabase } = require("./_supabase");

const COLUMNS = "id,name,english_name,origin,origin_flag_code,manufacturer,manufacturer_visibility,sector,category,company,company_website,lead_time,sample,response,description,created_at,updated_at";

module.exports = async function handler(req, res) {
  const q = String(req.query.q || "").trim();
  const sector = String(req.query.sector || "").trim();
  const page = Math.max(1, Number.parseInt(req.query.page || "1", 10) || 1);
  const limit = Math.min(50, Math.max(10, Number.parseInt(req.query.limit || "20", 10) || 20));
  const from = (page - 1) * limit;
  const filters = [];
  if (q) {
    const safe = q.replace(/[,()]/g, " ").trim();
    if (safe) filters.push(`or=(name.ilike.*${encodeURIComponent(safe)}*,english_name.ilike.*${encodeURIComponent(safe)}*,description.ilike.*${encodeURIComponent(safe)}*)`);
  }
  if (sector && ["식품", "제약", "화장품"].includes(sector)) filters.push(`sector=eq.${encodeURIComponent(sector)}`);
  const query = `ingredients_public?select=${COLUMNS}${filters.length ? `&${filters.join("&")}` : ""}&order=created_at.desc&limit=${limit}&offset=${from}`;
  try {
    const response = await fetchSupabase(query);
    const body = await response.text();
    res.statusCode = response.status;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Cache-Control", "public, s-maxage=30, stale-while-revalidate=300");
    return res.end(body);
  } catch {
    res.statusCode = 503;
    return res.end(JSON.stringify({ error: "temporarily_unavailable" }));
  }
};
