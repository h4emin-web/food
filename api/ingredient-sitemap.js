const { fetchSupabase } = require("./_supabase");

function escapeXml(value = "") {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

module.exports = async function handler(req, res) {
  try {
    const response = await fetchSupabase("ingredients?select=id,updated_at,created_at&order=created_at.desc&limit=5000");
    if (!response.ok) throw new Error(`Supabase ${response.status}`);
    const items = await response.json();
    const urls = items.map((item) => {
      const modified = item.updated_at || item.created_at;
      return `<url><loc>https://www.foodingredients.help/ingredients/${escapeXml(item.id)}</loc>${modified ? `<lastmod>${escapeXml(new Date(modified).toISOString())}</lastmod>` : ""}<changefreq>weekly</changefreq><priority>0.8</priority></url>`;
    }).join("");
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=86400");
    return res.end(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`);
  } catch {
    res.statusCode = 503;
    res.setHeader("Retry-After", "60");
    return res.end("Temporarily unavailable");
  }
};
