import fs from "node:fs/promises";

const DATA_FILE = new URL("../news-data.json", import.meta.url);
const ONE_DAY = 24 * 60 * 60 * 1000;
const now = new Date();
const cutoff = new Date(now.getTime() - 7 * ONE_DAY);

const feeds = [
  "https://news.google.com/rss/search?q=%EC%8B%9D%ED%92%88%20%EC%9B%90%EB%A3%8C%20OR%20%EA%B8%B0%EB%8A%A5%EC%84%B1%20%EC%9B%90%EB%A3%8C&hl=ko&gl=KR&ceid=KR:ko",
  "https://news.google.com/rss/search?q=food%20ingredients%20OR%20functional%20food%20ingredients&hl=en-US&gl=US&ceid=US:en",
];

const fallbackImages = [
  "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1581093458791-9d15482442f6?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=900&q=80",
];

function decodeXml(value = "") {
  return value
    .replace(/<!\[CDATA\[(.*?)\]\]>/gs, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function pick(text, tag) {
  const match = text.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match ? decodeXml(match[1]) : "";
}

function pickAttribute(text, tag, attribute) {
  const match = text.match(new RegExp(`<${tag}[^>]*\\s${attribute}=["']([^"']+)["'][^>]*>`, "i"));
  return match ? decodeXml(match[1]) : "";
}

function pickRssImage(item) {
  return (
    pickAttribute(item, "media:content", "url") ||
    pickAttribute(item, "media:thumbnail", "url") ||
    pickAttribute(item, "enclosure", "url")
  );
}

function pickMetaImage(html) {
  const patterns = [
    /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["'][^>]*>/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["'][^>]*>/i,
    /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["'][^>]*>/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']twitter:image["'][^>]*>/i,
  ];
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match) return decodeXml(match[1]);
  }
  return "";
}

async function pickArticleImage(url) {
  try {
    const response = await fetch(url, {
      signal: AbortSignal.timeout(5000),
      headers: {
        "user-agent": "FoodSourceNewsBot/1.0 (+https://food-omega-virid-62.vercel.app)",
      },
    });
    if (!response.ok) return "";
    const html = await response.text();
    return pickMetaImage(html);
  } catch {
    return "";
  }
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/https?:\/\//g, "")
    .replace(/[^a-z0-9가-힣]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70);
}

function normalizeSource(title) {
  const parts = title.split(" - ");
  return parts.length > 1 ? parts.at(-1).trim() : "Food Sourcing News";
}

function summarize(title) {
  return `${title.replace(/\s+-\s+.+$/, "")} 관련 소식입니다. 식품 원료 소싱, 제품 개발, 인증과 표시 기준을 확인할 때 참고할 수 있습니다.`;
}

async function readExisting() {
  try {
    return JSON.parse(await fs.readFile(DATA_FILE, "utf8"));
  } catch {
    return [];
  }
}

async function fetchFeed(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "FoodSourceNewsBot/1.0 (+https://food-omega-virid-62.vercel.app)",
    },
  });
  if (!response.ok) return [];
  const xml = await response.text();
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)].map((match) => {
    const item = match[1];
    const title = pick(item, "title");
    const link = pick(item, "link");
    const pubDate = pick(item, "pubDate");
    const image = pickRssImage(item);
    const publishedAt = pubDate ? new Date(pubDate) : now;
    return { title, link, image, publishedAt };
  });
}

function isFallbackImage(image = "") {
  return !image || fallbackImages.includes(image);
}

const existing = (await readExisting()).filter((item) => {
  const date = new Date(item.publishedAt || item.collectedAt || now);
  const title = `${item.title || ""} ${item.category || ""}`.toLowerCase();
  return date >= cutoff && !/(화장품|cosmetic|pharma|제약|의약품)/i.test(title);
});

for (const item of existing) {
  if (isFallbackImage(item.image) && item.url) {
    item.image = (await pickArticleImage(item.url)) || item.image || fallbackImages[0];
  }
}

const seen = new Set(existing.map((item) => item.url || item.link || item.title));
const fresh = [];

for (const feed of feeds) {
  const items = await fetchFeed(feed);
  for (const item of items) {
    if (!item.title || !item.link || seen.has(item.link)) continue;
    const title = item.title.replace(/\s+-\s+.+$/, "");
    const lower = title.toLowerCase();
    if (!/(원료|식품|ingredient|additive|protein|functional|color|sweetener)/i.test(lower)) continue;
    if (/(화장품|cosmetic|pharma|제약|의약품)/i.test(lower)) continue;

    const index = fresh.length % fallbackImages.length;
    const image = item.image || (await pickArticleImage(item.link)) || fallbackImages[index];
    fresh.push({
      id: `${now.toISOString().slice(0, 10)}-${slugify(title)}`,
      title,
      source: normalizeSource(item.title),
      sourceLabel: lower.includes("regulation") || lower.includes("fda") ? "REGULATION" : "NEWS",
      category: lower.includes("protein") || title.includes("단백") ? "단백 원료" : "식품 원료",
      publishedAt: now.toISOString().slice(0, 10),
      collectedAt: now.toISOString(),
      summary: summarize(title),
      url: item.link,
      image,
    });
    seen.add(item.link);
    if (fresh.length >= 3) break;
  }
  if (fresh.length >= 3) break;
}

const merged = [...fresh, ...existing].slice(0, 21);
await fs.writeFile(DATA_FILE, `${JSON.stringify(merged, null, 2)}\n`, "utf8");
console.log(`news-data.json updated: ${fresh.length} new, ${merged.length} total`);
