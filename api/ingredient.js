const { fetchSupabase } = require("./_supabase");

const SITE_URL = "https://www.foodingredients.help";

function escapeHtml(value = "") {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function jsonLd(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function renderPage(item) {
  const name = item.name || "식품 원료";
  const englishName = item.english_name || "";
  const canonical = `${SITE_URL}/ingredients/${encodeURIComponent(item.id)}`;
  const title = `${name} 식품원료 소싱·중개 | 푸드소싱`;
  const description = [
    `${name}${englishName ? `(${englishName})` : ""} 식품원료 정보`,
    item.origin ? `제조국 ${item.origin}` : "",
    item.company ? `공급사 ${item.company}` : "",
    item.description || "샘플 요청과 견적 문의가 가능한 식품 원료입니다.",
  ].filter(Boolean).join(" · ").slice(0, 155);
  const schema = {
    "@context": "https://schema.org", "@type": "Product", name,
    alternateName: englishName || undefined,
    description: item.description || description,
    category: item.category || "식품 원료",
    countryOfOrigin: item.origin ? { "@type": "Country", name: item.origin } : undefined,
    manufacturer: item.manufacturer_visibility !== "private" && item.manufacturer ? { "@type": "Organization", name: item.manufacturer } : undefined,
    brand: item.company ? { "@type": "Organization", name: item.company } : undefined,
    url: canonical,
  };
  return `<!doctype html><html lang="ko"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(title)}</title><meta name="description" content="${escapeHtml(description)}">
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1"><link rel="canonical" href="${canonical}">
<meta property="og:type" content="product"><meta property="og:site_name" content="푸드소싱"><meta property="og:title" content="${escapeHtml(title)}"><meta property="og:description" content="${escapeHtml(description)}"><meta property="og:url" content="${canonical}">
<meta name="twitter:card" content="summary"><meta name="twitter:title" content="${escapeHtml(title)}"><meta name="twitter:description" content="${escapeHtml(description)}">
<link rel="icon" href="/favicon.ico"><link rel="stylesheet" href="/styles.css"><script type="application/ld+json">${jsonLd(schema)}</script>
</head><body><header class="site-header"><a class="brand" href="/index.html" aria-label="푸드소싱 홈"><span class="brand-mark">F</span><span>푸드소싱</span></a>
<nav class="main-nav" aria-label="주요 메뉴"><a href="/index.html#ingredients">원료 찾기</a><a href="/community.html">원료문의</a><a href="/partners.html">협력업체 찾기</a><a href="/intro.html">소개</a></nav></header>
<main class="seo-ingredient-page"><nav class="seo-breadcrumb" aria-label="경로"><a href="/index.html">홈</a><span>›</span><a href="/index.html#ingredients">원료 찾기</a><span>›</span><strong>${escapeHtml(name)}</strong></nav>
<article class="seo-ingredient-card"><p class="eyebrow">식품 원료 상세정보</p><h1>${escapeHtml(name)}${englishName ? ` <small>${escapeHtml(englishName)}</small>` : ""}</h1>
<p class="seo-ingredient-description">${escapeHtml(item.description || `${name}의 식품원료 소싱 및 중개 정보입니다.`)}</p>
<dl class="seo-ingredient-facts"><div><dt>공급사</dt><dd>${escapeHtml(item.company || "문의 필요")}</dd></div><div><dt>제조사</dt><dd>${escapeHtml(item.manufacturer_visibility === "private" ? "비공개" : item.manufacturer || "문의 필요")}</dd></div><div><dt>제조국</dt><dd>${escapeHtml(item.origin || "문의 필요")}</dd></div><div><dt>분류</dt><dd>${escapeHtml(item.category || "식품 원료")}</dd></div><div><dt>사용 용도</dt><dd>${escapeHtml(item.use || "문의 필요")}</dd></div><div><dt>인증</dt><dd>${escapeHtml(item.cert || "문의 필요")}</dd></div><div><dt>MOQ</dt><dd>${escapeHtml(item.moq || "문의 필요")}</dd></div><div><dt>리드타임</dt><dd>${escapeHtml(item.lead_time || "문의 필요")}</dd></div></dl>
<div class="seo-ingredient-actions"><a class="primary-button" href="/index.html?search=${encodeURIComponent(name)}#ingredients">원료 목록에서 보기</a><a class="outline-button" href="/community.html">원료 문의하기</a></div></article></main>
<footer class="site-footer"><div><strong>푸드소싱</strong><p>식품 원료 탐색, 샘플, 견적을 돕는 B2B 플랫폼</p></div></footer></body></html>`;
}

module.exports = async function handler(req, res) {
  const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;
  if (!id || !/^[0-9a-f-]{36}$/i.test(id)) {
    res.statusCode = 404; res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.end("<!doctype html><html lang=\"ko\"><title>원료를 찾을 수 없습니다</title><meta name=\"robots\" content=\"noindex\"><h1>원료를 찾을 수 없습니다.</h1></html>");
  }
  try {
    const response = await fetchSupabase(`ingredients?select=*&id=eq.${encodeURIComponent(id)}&limit=1`);
    if (!response.ok) throw new Error(`Supabase ${response.status}`);
    const [item] = await response.json();
    if (!item) {
      res.statusCode = 404; res.setHeader("Content-Type", "text/html; charset=utf-8");
      return res.end("<!doctype html><html lang=\"ko\"><title>원료를 찾을 수 없습니다</title><meta name=\"robots\" content=\"noindex\"><h1>원료를 찾을 수 없습니다.</h1></html>");
    }
    res.statusCode = 200; res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=86400");
    return res.end(renderPage(item));
  } catch {
    res.statusCode = 503; res.setHeader("Retry-After", "60"); return res.end("Temporarily unavailable");
  }
};
