const ingredients = [
  {
    id: "pea-protein-isolate",
    name: "완두 단백 분리물",
    englishName: "Pea Protein Isolate",
    desc: "대체육, 단백질 음료, 베이커리용 단백 원료",
    origin: "캐나다",
    originFlagCode: "ca",
    type: "단백 원료",
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=900&q=80",
    badge: "응답 빠름",
    tags: ["대체식품", "HACCP", "국내재고", "소량샘플"],
    supplier: {
      name: "그린프로틴코리아",
      website: "https://example.com/green-protein",
      email: "sales@greenprotein.co.kr",
      contact: "원료영업팀",
      spec: "Protein 80%, 20kg bag",
    },
  },
  {
    id: "collagen-peptide",
    name: "저분자 콜라겐 펩타이드",
    englishName: "Hydrolyzed Collagen Peptide",
    desc: "음료와 젤리에 쓰기 좋은 건강기능 콘셉트 원료",
    origin: "프랑스",
    originFlagCode: "fr",
    type: "기능성 원료",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80",
    badge: "인기",
    tags: ["건강기능", "FSSC22000", "빠른견적", "소량샘플"],
    supplier: {
      name: "뉴트라소스",
      website: "https://example.com/nutrasource",
      email: "contact@nutrasource.co.kr",
      contact: "기능성원료팀",
      spec: "Average MW 2,000Da 이하, 10kg carton",
    },
  },
  {
    id: "allulose-syrup",
    name: "알룰로스 시럽",
    englishName: "Allulose Syrup",
    desc: "저당 제품 개발에 쓰이는 감미 원료",
    origin: "국내",
    originFlagCode: "kr",
    type: "감미 원료",
    image: "https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?auto=format&fit=crop&w=900&q=80",
    badge: "저당",
    tags: ["음료", "HACCP", "국내재고", "빠른견적"],
    supplier: {
      name: "스위트랩",
      website: "https://example.com/sweetlab",
      email: "sales@sweetlab.co.kr",
      contact: "감미소재팀",
      spec: "70 Brix, 25kg pail",
    },
  },
  {
    id: "beet-red-color",
    name: "비트 레드 천연 색소",
    englishName: "Beet Red Color",
    desc: "젤리, 음료, 디저트용 식물 유래 색소",
    origin: "네덜란드",
    originFlagCode: "nl",
    type: "색소 원료",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80",
    badge: "클린라벨",
    tags: ["음료", "베이커리", "유기농", "소량샘플"],
    supplier: {
      name: "컬러네이처",
      website: "https://example.com/colornature",
      email: "info@colornature.co.kr",
      contact: "천연색소팀",
      spec: "Powder, 5kg carton",
    },
  },
  {
    id: "oat-beta-glucan",
    name: "귀리 베타글루칸",
    englishName: "Oat Beta-Glucan",
    desc: "시리얼, 쉐이크, 건강 스낵용 식이섬유 원료",
    origin: "핀란드",
    originFlagCode: "fi",
    type: "식이섬유",
    image: "https://images.unsplash.com/photo-1614961233913-a5113a4a34ed?auto=format&fit=crop&w=900&q=80",
    badge: "기능성",
    tags: ["건강기능", "FSSC22000", "할랄", "빠른견적"],
    supplier: {
      name: "오트바이오",
      website: "https://example.com/oatbio",
      email: "hello@oatbio.co.kr",
      contact: "해외소싱팀",
      spec: "Beta-glucan 70%, 15kg box",
    },
  },
  {
    id: "strawberry-flavor-base",
    name: "천연 딸기향 베이스",
    englishName: "Natural Strawberry Flavor Base",
    desc: "유제품, 음료, 베이커리용 향료 베이스",
    origin: "국내",
    originFlagCode: "kr",
    type: "향료 원료",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=900&q=80",
    badge: "커스텀",
    tags: ["음료", "베이커리", "HACCP", "국내재고"],
    supplier: {
      name: "플레이버웍스",
      website: "https://example.com/flavorworks",
      email: "rnd@flavorworks.co.kr",
      contact: "향료개발팀",
      spec: "Liquid base, 10kg can",
    },
  },
];

const communityPosts = [
  {
    id: "pea-protein-80",
    category: "원료 문의",
    title: "완두 단백 80% 원료 문의",
    desc: "대체육 시제품용으로 20kg 샘플 테스트 예정입니다. HACCP 또는 FSSC 자료가 필요합니다.",
    author: "HMR개발팀",
    date: "방금 전",
    comments: 8,
    views: 142,
  },
  {
    id: "allulose-brix",
    category: "규격 문의",
    title: "알룰로스 시럽 Brix 규격 문의",
    desc: "음료 적용용으로 70 Brix 전후 규격을 찾고 있습니다. 점도와 후미 차이가 궁금합니다.",
    author: "음료R&D",
    date: "18분 전",
    comments: 5,
    views: 96,
  },
  {
    id: "clean-label-strawberry",
    category: "원료 문의",
    title: "클린라벨 딸기향 원료 문의",
    desc: "요거트 베이스에 넣을 예정입니다. 산미가 강하지 않고 표시사항이 간단한 원료를 찾습니다.",
    author: "브랜드PM",
    date: "1시간 전",
    comments: 12,
    views: 221,
  },
  {
    id: "organic-cocoa",
    category: "인증 문의",
    title: "유기농 표시 가능한 코코아 분말 문의",
    desc: "수입 원료를 소분 제품에 적용하려고 합니다. 원산지 증명과 유기 인증서 조건을 확인하고 싶습니다.",
    author: "품질관리자",
    date: "2시간 전",
    comments: 4,
    views: 188,
  },
  {
    id: "frozen-mango-dice",
    category: "수입 문의",
    title: "냉동 망고 다이스 10mm 원료 문의",
    desc: "디저트 토핑용으로 월 300kg 정도 예상합니다. 당도 규격과 해동 후 드립 손실 자료가 필요합니다.",
    author: "디저트제조",
    date: "3시간 전",
    comments: 6,
    views: 174,
  },
];

const fallbackNewsItems = [
  {
    id: "2026-07-06-food-dye-pledges",
    title: "FDA가 합성 식용색소 감축 약속 추적표를 공개",
    source: "FDA",
    sourceLabel: "REGULATION",
    category: "식품첨가물",
    publishedAt: "2026-07-06",
    summary: "미국 FDA가 식품업계의 석유계 합성 식용색소 감축 계획을 정리한 추적표를 공개했습니다. 천연 색소와 클린라벨 원료 수요를 확인할 수 있는 흐름입니다.",
    url: "https://www.fda.gov/food/color-additives-information-consumers/tracking-food-industry-pledges-remove-petroleum-based-food-dyes",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "2026-07-06-functional-ingredients-market",
    title: "기능성 식품 원료 시장, 2034년까지 성장 전망",
    source: "Fortune Business Insights",
    sourceLabel: "MARKET",
    category: "기능성 원료",
    publishedAt: "2026-07-06",
    summary: "기능성 식품 원료 시장은 단백질, 식이섬유, 프로바이오틱스, 천연 기능성 소재 중심으로 확대될 전망입니다.",
    url: "https://www.fortunebusinessinsights.com/industry-reports/functional-food-ingredients-market-100224",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "2026-07-06-food-ingredient-safety",
    title: "식품 원료 안전성 검토와 GRAS 제도 이슈 재부각",
    source: "The Guardian",
    sourceLabel: "SAFETY",
    category: "원료 안전성",
    publishedAt: "2026-07-06",
    summary: "미국 식품 원료 안전성 검토와 GRAS 제도에 대한 논의가 이어지고 있습니다. 신규 원료 도입 시 안전성 자료 확인이 중요해지고 있습니다.",
    url: "https://www.theguardian.com/us-news/2026/mar/07/fda-food-product-safety-checks-substances",
    image: "https://images.unsplash.com/photo-1581093458791-9d15482442f6?auto=format&fit=crop&w=900&q=80",
  },
];

const grid = document.querySelector("#ingredientGrid");
const favoriteGrid = document.querySelector("#favoriteGrid");
const searchInput = document.querySelector("#heroSearch");
const filterInputs = [...document.querySelectorAll(".filter-panel input")];
const resetButton = document.querySelector("#resetFilters");
const communityList = document.querySelector("#communityList");
const communitySearch = document.querySelector("#communitySearch");
const newsGrid = document.querySelector("#newsGrid");
const ingredientRegisterForm = document.querySelector("#ingredientRegisterForm");
const registerLayout = document.querySelector("#registerLayout");
const registerAuthRequired = document.querySelector("#registerAuthRequired");
const signupForm = document.querySelector("#signupForm");
const loginForm = document.querySelector("#loginForm");
const mypageForm = document.querySelector("#mypageForm");
const mypageLayout = document.querySelector("#mypageLayout");
const mypageAuthRequired = document.querySelector("#mypageAuthRequired");
const myIngredientList = document.querySelector("#myIngredientList");
const myIngredientSearch = document.querySelector("#myIngredientSearch");
const myIngredientDetailForm = document.querySelector("#myIngredientDetailForm");
const authLinks = [...document.querySelectorAll(".auth-link")];
const logoutLinks = [...document.querySelectorAll("[data-logout-link]")];
const authOnlyLinks = [...document.querySelectorAll(".auth-only")];
const guestOnlyLinks = [...document.querySelectorAll(".guest-only")];
let activeIngredientId = "";
let activeCommunityPostId = "";
let activeRegisteredIngredientId = "";

function getFavoriteKey() {
  const member = getCurrentMember();
  return member ? `foodsourceFavorites:${member.email}` : "";
}

function getFavoriteIngredients() {
  const key = getFavoriteKey();
  if (!key) return [];

  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}

function setFavoriteIngredients(items) {
  const key = getFavoriteKey();
  if (!key) return;
  localStorage.setItem(key, JSON.stringify(items));
}

function isFavoriteIngredient(ingredientId) {
  return getFavoriteIngredients().includes(ingredientId);
}

function toggleFavoriteIngredient(ingredientId) {
  if (!getCurrentMember()) {
    window.location.href = "login.html";
    return;
  }

  const favorites = getFavoriteIngredients();
  const nextFavorites = favorites.includes(ingredientId)
    ? favorites.filter((id) => id !== ingredientId)
    : [...favorites, ingredientId];
  setFavoriteIngredients(nextFavorites);
  updateGrid();
  renderFavorites();
}

function renderCards(items) {
  if (!grid) return;

  if (!items.length) {
    grid.innerHTML = '<div class="empty-state">조건에 맞는 원료가 없습니다. 검색어 또는 필터를 줄여보세요.</div>';
    return;
  }

  grid.innerHTML = items
    .map(
      (item) => `
        <article class="ingredient-card" role="button" tabindex="0" data-ingredient-id="${item.id}">
          <div class="ingredient-name">
            <h3>${item.name} <span>(${item.englishName})</span></h3>
          </div>
          <p class="ingredient-desc">${item.desc}</p>
          <span class="ingredient-type">${item.type || "원료"}</span>
          <span class="ingredient-origin">
            ${item.origin || "확인 필요"}
            ${
              item.originFlagCode
                ? `<img class="origin-flag" src="https://flagcdn.com/w40/${item.originFlagCode}.png" alt="${item.origin} 국기" loading="lazy" />`
                : ""
            }
          </span>
          <div class="card-actions">
            <button class="sample-button" type="button">샘플 요청</button>
            <button class="quote-button" type="button">견적 문의</button>
          </div>
          <button
            class="favorite-button ${isFavoriteIngredient(item.id) ? "active" : ""}"
            type="button"
            data-favorite-id="${item.id}"
            aria-label="${item.name} 즐겨찾기"
            aria-pressed="${isFavoriteIngredient(item.id)}"
          >★</button>
        </article>
        ${activeIngredientId === item.id ? getIngredientDetailMarkup(item) : ""}
      `
    )
    .join("");

  grid.insertAdjacentHTML(
    "afterbegin",
    `
      <div class="ingredient-board-head" aria-hidden="true">
        <span>원료명</span>
        <span>설명</span>
        <span>분류</span>
        <span>원산지</span>
        <span>문의</span>
        <span>즐겨찾기</span>
      </div>
    `
  );
}

function getIngredientCardMarkup(item) {
  return `
    <article class="ingredient-card" role="button" tabindex="0" data-ingredient-id="${item.id}">
      <div class="ingredient-name">
        <h3>${item.name} <span>(${item.englishName})</span></h3>
      </div>
      <p class="ingredient-desc">${item.desc}</p>
      <span class="ingredient-type">${item.type || "원료"}</span>
      <span class="ingredient-origin">
        ${item.origin || "확인 필요"}
        ${
          item.originFlagCode
            ? `<img class="origin-flag" src="https://flagcdn.com/w40/${item.originFlagCode}.png" alt="${item.origin} 국기" loading="lazy" />`
            : ""
        }
      </span>
      <div class="card-actions">
        <button class="sample-button" type="button">샘플 요청</button>
        <button class="quote-button" type="button">견적 문의</button>
      </div>
      <button
        class="favorite-button ${isFavoriteIngredient(item.id) ? "active" : ""}"
        type="button"
        data-favorite-id="${item.id}"
        aria-label="${item.name} 즐겨찾기"
        aria-pressed="${isFavoriteIngredient(item.id)}"
      >★</button>
    </article>
    ${activeIngredientId === item.id ? getIngredientDetailMarkup(item) : ""}
  `;
}

function renderIngredientBoard(target, items, emptyMessage) {
  if (!target) return;

  if (!items.length) {
    target.innerHTML = `<div class="empty-state">${emptyMessage}</div>`;
    return;
  }

  target.innerHTML = `
    <div class="ingredient-board-head" aria-hidden="true">
      <span>원료명</span>
      <span>설명</span>
      <span>분류</span>
      <span>원산지</span>
      <span>문의</span>
      <span>즐겨찾기</span>
    </div>
    ${items.map((item) => getIngredientCardMarkup(item)).join("")}
  `;
}

function renderFavorites() {
  if (!favoriteGrid) return;

  if (!getCurrentMember()) {
    favoriteGrid.innerHTML = `
      <div class="empty-state favorites-login-state">
        로그인하면 내 즐겨찾기를 모아볼 수 있습니다.
        <a class="primary-button" href="login.html">로그인</a>
      </div>
    `;
    return;
  }

  const favoriteIds = getFavoriteIngredients();
  const favoriteItems = ingredients.filter((item) => favoriteIds.includes(item.id));
  renderIngredientBoard(favoriteGrid, favoriteItems, "아직 즐겨찾기한 원료가 없습니다.");
}

function getIngredientDetailMarkup(item) {
  const supplier = item.supplier || {};
  const website = supplier.website || "#";
  const email = supplier.email || "확인 필요";

  return `
    <section class="ingredient-detail" data-detail-ingredient-id="${item.id}" aria-label="${item.name} 상세">
      <article class="detail-post ingredient-detail-card">
        <div class="detail-head">
          <h2>${item.name} <span>(${item.englishName})</span></h2>
          <div class="detail-meta">
            <span>${item.type || "원료"}</span>
            <span>${item.origin || "원산지 확인 필요"}</span>
            <span>${supplier.spec || "규격 확인 필요"}</span>
          </div>
        </div>
        <p>${item.desc}</p>
        <div class="supplier-detail-grid">
          <div>
            <span>공급사</span>
            <strong>${supplier.name || "확인 필요"}</strong>
          </div>
          <div>
            <span>공급사 홈페이지</span>
            <a href="${website}" target="_blank" rel="noreferrer">${website}</a>
          </div>
          <div>
            <span>공급사 이메일</span>
            <a href="mailto:${email}">${email}</a>
          </div>
          <div>
            <span>담당</span>
            <strong>${supplier.contact || "확인 필요"}</strong>
          </div>
        </div>
      </article>
    </section>
  `;
}

function createClickRipple(event) {
  if (event.button && event.button !== 0) return;

  const ripple = document.createElement("span");
  ripple.className = "page-ripple";
  ripple.style.left = `${event.clientX}px`;
  ripple.style.top = `${event.clientY}px`;
  document.body.appendChild(ripple);

  window.setTimeout(() => {
    ripple.remove();
  }, 900);
}

function openIngredientDetail(ingredientId) {
  activeIngredientId = activeIngredientId === ingredientId ? "" : ingredientId;
  updateGrid();
  renderFavorites();
}

function getFilteredItems() {
  if (!searchInput) return ingredients;

  const query = searchInput.value.trim().toLowerCase();
  const checked = filterInputs.filter((input) => input.checked).map((input) => input.value);

  return ingredients.filter((item) => {
    const matchesQuery =
      !query ||
      item.name.toLowerCase().includes(query) ||
      item.englishName.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query) ||
      item.tags.some((tag) => tag.toLowerCase().includes(query));

    const matchesFilters = checked.every((tag) => item.tags.includes(tag));
    return matchesQuery && matchesFilters;
  });
}

function updateGrid() {
  renderCards(getFilteredItems());
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#39;",
    };
    return entities[char];
  });
}

function getMembers() {
  try {
    return JSON.parse(localStorage.getItem("foodsourceMembers")) || [];
  } catch {
    return [];
  }
}

function getCurrentMember() {
  try {
    return JSON.parse(localStorage.getItem("foodsourceCurrentMember"));
  } catch {
    return null;
  }
}

function setCurrentMember(member) {
  localStorage.setItem("foodsourceCurrentMember", JSON.stringify(member));
}

function updateStoredMember(member) {
  const members = getMembers();
  const exists = members.some((item) => item.email === member.email);
  const nextMembers = exists
    ? members.map((item) => (item.email === member.email ? member : item))
    : [...members, member];
  localStorage.setItem("foodsourceMembers", JSON.stringify(nextMembers));
  setCurrentMember(member);
}

function logoutCurrentMember() {
  localStorage.removeItem("foodsourceCurrentMember");
  updateAuthLinks();
  updateRegisterAccess();
  updateMypageAccess();
  if (grid) updateGrid();
  renderFavorites();
}

function updateAuthLinks() {
  const member = getCurrentMember();
  authOnlyLinks.forEach((link) => {
    link.hidden = !member;
  });
  guestOnlyLinks.forEach((link) => {
    link.hidden = Boolean(member);
  });

  authLinks.forEach((link) => {
    if (member) {
      link.textContent = `${member.name}님`;
      link.href = "mypage.html";
    } else {
      link.textContent = "회원가입";
      link.href = "signup.html";
    }
  });
}
function updateRegisterAccess() {
  if (!registerLayout || !registerAuthRequired) return;

  const member = getCurrentMember();
  registerLayout.hidden = !member;
  registerAuthRequired.hidden = Boolean(member);
}

function updateMypageAccess() {
  if (!mypageLayout || !mypageAuthRequired) return;

  const member = getCurrentMember();
  mypageLayout.hidden = !member;
  mypageAuthRequired.hidden = Boolean(member);
}

function getRegisteredIngredientKey() {
  const member = getCurrentMember();
  return member ? `foodsourceRegisteredIngredients:${member.email}` : "";
}

function getRegisteredIngredients() {
  const key = getRegisteredIngredientKey();
  if (!key) return [];

  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}

function setRegisteredIngredients(items) {
  const key = getRegisteredIngredientKey();
  if (!key) return;
  localStorage.setItem(key, JSON.stringify(items));
}

function saveRegisteredIngredient(item) {
  const key = getRegisteredIngredientKey();
  if (!key) return;
  const items = getRegisteredIngredients();
  localStorage.setItem(key, JSON.stringify([item, ...items]));
}

function getFilteredRegisteredIngredients() {
  const items = getRegisteredIngredients();
  const query = myIngredientSearch ? myIngredientSearch.value.trim().toLowerCase() : "";
  if (!query) return items;

  return items.filter((item) => {
    return (
      item.name.toLowerCase().includes(query) ||
      (item.englishName || "").toLowerCase().includes(query) ||
      (item.category || "").toLowerCase().includes(query)
    );
  });
}

function renderMyIngredients() {
  if (!myIngredientList) return;

  const items = getFilteredRegisteredIngredients();
  if (!items.length) {
    myIngredientList.innerHTML = '<p class="empty-mini">검색된 원료가 없습니다.</p>';
    return;
  }

  myIngredientList.innerHTML = items
    .map(
      (item) => `
        <article class="my-ingredient-item ${activeRegisteredIngredientId === item.id ? "active" : ""}" role="button" tabindex="0" data-my-ingredient-id="${item.id}">
          <strong>${escapeHtml(item.name)}</strong>
          <span>${escapeHtml(item.englishName || "영문명 없음")}</span>
          <p>${escapeHtml(item.category || "분류 없음")} · ${escapeHtml(item.createdAtText || "")}</p>
        </article>
      `
    )
    .join("");
}

function getRegisteredIngredientById(id) {
  return getRegisteredIngredients().find((item) => item.id === id);
}

function updateRegisteredIngredient(id, nextItem) {
  const items = getRegisteredIngredients();
  setRegisteredIngredients(items.map((item) => (item.id === id ? { ...item, ...nextItem } : item)));
}

function deleteRegisteredIngredient(id) {
  const items = getRegisteredIngredients();
  setRegisteredIngredients(items.filter((item) => item.id !== id));
}

function renderNewsCards(items) {
  if (!newsGrid) return;

  if (!items.length) {
    newsGrid.innerHTML = '<p class="empty-mini">아직 등록된 뉴스가 없습니다.</p>';
    return;
  }

  newsGrid.innerHTML = items
    .slice(0, 21)
    .map(
      (item) => `
        <article class="news-card">
          <a href="${item.url}" target="_blank" rel="noreferrer">
            <img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy" />
            <div class="news-card-body">
              <div class="news-tags">
                <span>${escapeHtml(item.sourceLabel || item.category || "NEWS")}</span>
                <span>${escapeHtml(item.source || "Food Source")}</span>
              </div>
              <time datetime="${escapeHtml(item.publishedAt || "")}">${formatNewsDate(item.publishedAt)}</time>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.summary || "")}</p>
              <strong>Read More</strong>
            </div>
          </a>
        </article>
      `
    )
    .join("");
}

function formatNewsDate(value) {
  if (!value) return "";
  try {
    return new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(value));
  } catch {
    return value;
  }
}

async function loadNewsCards() {
  if (!newsGrid) return;

  try {
    const response = await fetch("news-data.json", { cache: "no-store" });
    if (!response.ok) throw new Error("news-data.json");
    const items = await response.json();
    renderNewsCards(items);
  } catch {
    renderNewsCards(fallbackNewsItems);
  }
}

function getCommunityComments() {
  try {
    return JSON.parse(localStorage.getItem("foodsourceCommunityComments")) || {};
  } catch {
    return {};
  }
}

function getPostComments(postId) {
  return getCommunityComments()[postId] || [];
}

function savePostComment(postId, comment) {
  const comments = getCommunityComments();
  comments[postId] = [...(comments[postId] || []), comment];
  localStorage.setItem("foodsourceCommunityComments", JSON.stringify(comments));
}

function formatCommentDate(value) {
  try {
    return new Intl.DateTimeFormat("ko-KR", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(value));
  } catch {
    return "방금 전";
  }
}

function renderCommunityPosts(posts) {
  if (!communityList) return;

  if (!posts.length) {
    communityList.innerHTML = '<div class="empty-state">조건에 맞는 게시글이 없습니다.</div>';
    return;
  }

  communityList.innerHTML = posts
    .map(
      (post) => `
        <article class="community-post" role="button" tabindex="0" data-post-id="${post.id}">
          <h3>${post.title}</h3>
          <span class="post-author">${post.author}</span>
          <span class="post-date">${post.date}</span>
          <span class="post-status">문의 접수</span>
          <div class="post-stats" aria-label="게시글 반응">
            <span><i data-lucide="message-circle"></i>${getPostComments(post.id).length}</span>
            <span><i data-lucide="eye"></i>${post.views}</span>
          </div>
        </article>
        ${activeCommunityPostId === post.id ? getCommunityDetailMarkup(post) : ""}
      `
    )
    .join("");

  communityList.insertAdjacentHTML(
    "afterbegin",
    `
      <div class="community-board-head" aria-hidden="true">
        <span>제목</span>
        <span>작성자</span>
        <span>등록일</span>
        <span>상태</span>
        <span>반응</span>
      </div>
    `
  );

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function getCommunityDetailMarkup(post) {
  const comments = getPostComments(post.id);
  const member = getCurrentMember();
  const defaultName = member?.name || "";
  const commentsMarkup = comments.length
    ? comments
        .map(
          (comment) => `
            <article class="comment-item">
              <div>
                <strong>${escapeHtml(comment.author)}</strong>
                <span>${formatCommentDate(comment.createdAt)}</span>
              </div>
              <p>${escapeHtml(comment.body)}</p>
            </article>
          `
        )
        .join("")
    : '<p class="comment-empty">아직 댓글이 없습니다.</p>';

  return `
    <section class="community-detail" data-detail-post-id="${post.id}" aria-label="${post.title} 상세">
      <article class="detail-post">
        <div class="detail-head">
          <h2>${post.title}</h2>
          <div class="detail-meta">
            <span>${post.author}</span>
            <span>${post.date}</span>
            <span>조회 ${post.views}</span>
            <span>댓글 ${comments.length}</span>
          </div>
        </div>
        <p>${post.desc}</p>
      </article>
      <section class="comment-panel" aria-label="댓글">
        <div class="comment-title">
          <h3>댓글</h3>
          <span>${comments.length}개</span>
        </div>
        <div class="comment-list">${commentsMarkup}</div>
        <form class="comment-form" data-comment-form data-post-id="${post.id}">
          <input name="author" type="text" placeholder="이름" value="${escapeHtml(defaultName)}" required />
          <textarea name="body" placeholder="댓글을 입력하세요" required></textarea>
          <button class="primary-button" type="submit">댓글 등록</button>
        </form>
      </section>
    </section>
  `;
}

function openCommunityDetail(postId) {
  activeCommunityPostId = activeCommunityPostId === postId ? "" : postId;
  updateCommunityPosts();
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function updateCommunityPosts() {
  if (!communitySearch) return;

  const query = communitySearch.value.trim().toLowerCase();
  const posts = communityPosts.filter((post) => {
    return (
      !query ||
      post.title.toLowerCase().includes(query) ||
      post.desc.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query)
    );
  });

  renderCommunityPosts(posts);
}

if (grid && searchInput) {
  document.querySelector(".search-panel").addEventListener("submit", (event) => {
    event.preventDefault();
    updateGrid();
  });

  grid.addEventListener("click", (event) => {
    if (event.target.closest(".ingredient-detail")) return;
    const favoriteButton = event.target.closest("[data-favorite-id]");
    if (favoriteButton) {
      event.stopPropagation();
      toggleFavoriteIngredient(favoriteButton.dataset.favoriteId);
      return;
    }
    if (event.target.closest("button")) return;
    const ingredient = event.target.closest(".ingredient-card");
    if (!ingredient) return;
    openIngredientDetail(ingredient.dataset.ingredientId);
  });

  grid.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const ingredient = event.target.closest(".ingredient-card");
    if (!ingredient) return;
    event.preventDefault();
    openIngredientDetail(ingredient.dataset.ingredientId);
  });

  searchInput.addEventListener("input", updateGrid);
  filterInputs.forEach((input) => input.addEventListener("change", updateGrid));

  resetButton.addEventListener("click", () => {
    filterInputs.forEach((input) => {
      input.checked = false;
    });
    searchInput.value = "";
    updateGrid();
  });

}

if (favoriteGrid) {
  favoriteGrid.addEventListener("click", (event) => {
    if (event.target.closest(".ingredient-detail")) return;
    const favoriteButton = event.target.closest("[data-favorite-id]");
    if (favoriteButton) {
      event.stopPropagation();
      toggleFavoriteIngredient(favoriteButton.dataset.favoriteId);
      return;
    }
    if (event.target.closest("button")) return;
    const ingredient = event.target.closest(".ingredient-card");
    if (!ingredient) return;
    openIngredientDetail(ingredient.dataset.ingredientId);
  });

  favoriteGrid.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const ingredient = event.target.closest(".ingredient-card");
    if (!ingredient) return;
    event.preventDefault();
    openIngredientDetail(ingredient.dataset.ingredientId);
  });
}

if (communityList && communitySearch) {
  communityList.addEventListener("click", (event) => {
    if (event.target.closest(".community-detail")) return;
    const post = event.target.closest(".community-post");
    if (!post) return;
    openCommunityDetail(post.dataset.postId);
  });

  communityList.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const post = event.target.closest(".community-post");
    if (!post) return;
    event.preventDefault();
    openCommunityDetail(post.dataset.postId);
  });

  communityList.addEventListener("submit", (event) => {
    const form = event.target.closest("[data-comment-form]");
    if (!form) return;

    event.preventDefault();
    const postId = form.dataset.postId;
    const author = form.elements.author.value.trim();
    const body = form.elements.body.value.trim();

    if (!author || !body) return;

    savePostComment(postId, {
      author,
      body,
      createdAt: new Date().toISOString(),
    });
    activeCommunityPostId = postId;
    updateCommunityPosts();
  });

  communitySearch.addEventListener("input", updateCommunityPosts);
}

logoutLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (!getCurrentMember()) return;

    event.preventDefault();
    logoutCurrentMember();
    window.location.href = "index.html";
  });
});

if (ingredientRegisterForm) {
  const registerFields = {
    name: document.querySelector("#registerName"),
    englishName: document.querySelector("#registerEnglishName"),
    category: document.querySelector("#registerCategory"),
    use: document.querySelector("#registerUse"),
    cert: document.querySelector("#registerCert"),
    moq: document.querySelector("#registerMoq"),
    sample: document.querySelector("#registerSample"),
    response: document.querySelector("#registerResponse"),
    desc: document.querySelector("#registerDesc"),
  };

  const preview = {
    category: document.querySelector("#previewCategory"),
    name: document.querySelector("#previewName"),
    englishName: document.querySelector("#previewEnglishName"),
    desc: document.querySelector("#previewDesc"),
    tags: document.querySelector("#previewTags"),
  };
  const registerMessage = document.querySelector("#registerMessage");

  function setRegisterMessage(message, type = "") {
    if (!registerMessage) return;
    registerMessage.textContent = message;
    registerMessage.className = `form-message ${type}`.trim();
  }

  function updateRegisterPreview() {
    const name = registerFields.name.value.trim();
    const englishName = registerFields.englishName.value.trim();
    const category = registerFields.category.value.trim();
    const use = registerFields.use.value.trim();
    const cert = registerFields.cert.value.trim();
    const moq = registerFields.moq.value.trim();
    const sample = registerFields.sample.value.trim();
    const response = registerFields.response.value.trim();
    const desc = registerFields.desc.value.trim();
    const tags = [cert, moq, sample, response, use].filter(Boolean).slice(0, 4);

    preview.category.textContent = category || "카테고리";
    preview.name.textContent = name || "원료명";
    preview.englishName.textContent = englishName || "English Name";
    preview.desc.textContent = desc || "입력한 원료 설명이 여기에 표시됩니다.";
    preview.tags.innerHTML = (tags.length ? tags : ["인증", "MOQ", "샘플"])
      .map((tag) => `<span>${escapeHtml(tag)}</span>`)
      .join("");
  }

  ingredientRegisterForm.addEventListener("input", updateRegisterPreview);
  ingredientRegisterForm.addEventListener("change", updateRegisterPreview);
  ingredientRegisterForm.addEventListener("reset", () => {
    setRegisterMessage("", "");
    window.setTimeout(updateRegisterPreview, 0);
  });
  ingredientRegisterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    updateRegisterPreview();
    const item = {
      id: `registered-${Date.now()}`,
      name: registerFields.name.value.trim(),
      englishName: registerFields.englishName.value.trim(),
      category: registerFields.category.value.trim(),
      use: registerFields.use.value.trim(),
      cert: registerFields.cert.value.trim(),
      moq: registerFields.moq.value.trim(),
      sample: registerFields.sample.value.trim(),
      response: registerFields.response.value.trim(),
      desc: registerFields.desc.value.trim(),
      createdAt: new Date().toISOString(),
      createdAtText: new Intl.DateTimeFormat("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(new Date()),
    };

    if (!item.name || !item.englishName || !item.category) {
      setRegisterMessage("원료명, 영문명, 카테고리를 입력해주세요.", "error");
      return;
    }

    saveRegisteredIngredient(item);
    ingredientRegisterForm.reset();
    setRegisterMessage("원료가 등록되었습니다. 마이페이지에서 수정하거나 삭제할 수 있습니다.", "success");
    window.setTimeout(updateRegisterPreview, 0);
  });

  updateRegisterPreview();
}

if (signupForm) {
  const signupFields = {
    name: document.querySelector("#signupName"),
    email: document.querySelector("#signupEmail"),
    phone: document.querySelector("#signupPhone"),
    password: document.querySelector("#signupPassword"),
    confirm: document.querySelector("#signupPasswordConfirm"),
    company: document.querySelector("#signupCompany"),
    role: document.querySelector("#signupRole"),
    terms: document.querySelector("#signupTerms"),
  };
  const signupMessage = document.querySelector("#signupMessage");
  const memberStatusTitle = document.querySelector("#memberStatusTitle");
  const memberStatusText = document.querySelector("#memberStatusText");
  const memberCard = document.querySelector("#memberCard");
  const memberName = document.querySelector("#memberName");
  const memberEmail = document.querySelector("#memberEmail");
  const memberCompany = document.querySelector("#memberCompany");
  const logoutButton = document.querySelector("#logoutButton");

  function setSignupMessage(message, type = "") {
    signupMessage.textContent = message;
    signupMessage.className = `form-message ${type}`.trim();
  }

  function renderMemberStatus() {
    if (!memberStatusTitle || !memberStatusText || !memberCard || !logoutButton) {
      updateAuthLinks();
      return;
    }

    const member = getCurrentMember();
    if (!member) {
      memberStatusTitle.textContent = "아직 가입 전입니다";
      memberStatusText.textContent = "회원가입을 완료하면 이 브라우저에 회원 정보가 저장됩니다.";
      memberCard.hidden = true;
      logoutButton.hidden = true;
      updateAuthLinks();
      return;
    }

    memberStatusTitle.textContent = "가입 완료";
    memberStatusText.textContent = "현재 브라우저에 아래 회원 정보가 저장되어 있습니다.";
    memberName.textContent = member.name;
    memberEmail.textContent = member.email;
    memberCompany.textContent = [member.company, member.role].filter(Boolean).join(" · ") || "회사 정보 없음";
    memberCard.hidden = false;
    logoutButton.hidden = false;
    updateAuthLinks();
  }

  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const password = signupFields.password.value;
    const confirm = signupFields.confirm.value;
    const member = {
      name: signupFields.name.value.trim(),
      email: signupFields.email.value.trim().toLowerCase(),
      phone: signupFields.phone.value.trim(),
      company: signupFields.company.value.trim(),
      role: signupFields.role.value,
      password,
      joinedAt: new Date().toISOString(),
    };

    if (!member.name || !member.email || !member.phone || !member.company || !password || !confirm) {
      setSignupMessage("필수 항목을 입력해주세요.", "error");
      return;
    }

    if (password.length < 6) {
      setSignupMessage("비밀번호는 6자 이상이어야 합니다.", "error");
      return;
    }

    if (password !== confirm) {
      setSignupMessage("비밀번호가 일치하지 않습니다.", "error");
      return;
    }

    if (!signupFields.terms.checked) {
      setSignupMessage("약관 동의가 필요합니다.", "error");
      return;
    }

    const members = getMembers();
    if (members.some((item) => item.email === member.email)) {
      setSignupMessage("이미 가입된 이메일입니다.", "error");
      return;
    }

    members.push(member);
    localStorage.setItem("foodsourceMembers", JSON.stringify(members));
    setCurrentMember(member);
    signupForm.reset();
    setSignupMessage("회원가입이 완료되었습니다.", "success");
    renderMemberStatus();
  });

  signupForm.addEventListener("reset", () => {
    window.setTimeout(() => setSignupMessage("", ""), 0);
  });

  logoutButton.addEventListener("click", () => {
    logoutCurrentMember();
    setSignupMessage("가입 상태를 지웠습니다. 저장된 회원 목록은 유지됩니다.", "success");
    renderMemberStatus();
  });

  renderMemberStatus();
}

if (mypageForm) {
  const mypageFields = {
    name: document.querySelector("#mypageName"),
    email: document.querySelector("#mypageEmail"),
    phone: document.querySelector("#mypagePhone"),
    company: document.querySelector("#mypageCompany"),
    role: document.querySelector("#mypageRole"),
    interest: document.querySelector("#mypageInterest"),
    memo: document.querySelector("#mypageMemo"),
  };
  const mypageMessage = document.querySelector("#mypageMessage");
  const myIngredientFields = {
    name: document.querySelector("#myIngredientName"),
    englishName: document.querySelector("#myIngredientEnglishName"),
    category: document.querySelector("#myIngredientCategory"),
    use: document.querySelector("#myIngredientUse"),
    cert: document.querySelector("#myIngredientCert"),
    moq: document.querySelector("#myIngredientMoq"),
    sample: document.querySelector("#myIngredientSample"),
    response: document.querySelector("#myIngredientResponse"),
    desc: document.querySelector("#myIngredientDesc"),
  };
  const myIngredientMessage = document.querySelector("#myIngredientMessage");
  const deleteMyIngredientButton = document.querySelector("#deleteMyIngredient");

  function setMypageMessage(message, type = "") {
    mypageMessage.textContent = message;
    mypageMessage.className = `form-message ${type}`.trim();
  }

  function renderMypage() {
    const member = getCurrentMember();
    updateMypageAccess();
    if (!member) return;

    mypageFields.name.value = member.name || "";
    mypageFields.email.value = member.email || "";
    mypageFields.phone.value = member.phone || "";
    mypageFields.company.value = member.company || "";
    mypageFields.role.value = member.role || "식품 개발";
    mypageFields.interest.value = member.interest || "";
    mypageFields.memo.value = member.memo || "";
    renderMyIngredients();
    renderMyIngredientDetail();
  }

  function setMyIngredientMessage(message, type = "") {
    if (!myIngredientMessage) return;
    myIngredientMessage.textContent = message;
    myIngredientMessage.className = `form-message ${type}`.trim();
  }

  function renderMyIngredientDetail() {
    if (!myIngredientDetailForm) return;

    const item = getRegisteredIngredientById(activeRegisteredIngredientId);
    if (!item) {
      myIngredientDetailForm.hidden = true;
      setMyIngredientMessage("", "");
      return;
    }

    myIngredientDetailForm.hidden = false;
    myIngredientFields.name.value = item.name || "";
    myIngredientFields.englishName.value = item.englishName || "";
    myIngredientFields.category.value = item.category || "";
    myIngredientFields.use.value = item.use || "";
    myIngredientFields.cert.value = item.cert || "";
    myIngredientFields.moq.value = item.moq || "";
    myIngredientFields.sample.value = item.sample || "가능";
    myIngredientFields.response.value = item.response || "샘플 요청 가능";
    myIngredientFields.desc.value = item.desc || "";
  }

  mypageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const member = getCurrentMember();
    if (!member) return;

    const updatedMember = {
      ...member,
      name: mypageFields.name.value.trim(),
      phone: mypageFields.phone.value.trim(),
      company: mypageFields.company.value.trim(),
      role: mypageFields.role.value,
      interest: mypageFields.interest.value.trim(),
      memo: mypageFields.memo.value.trim(),
      updatedAt: new Date().toISOString(),
    };

    if (!updatedMember.name || !updatedMember.phone || !updatedMember.company) {
      setMypageMessage("이름, 전화번호, 회사명을 입력해주세요.", "error");
      return;
    }

    updateStoredMember(updatedMember);
    updateAuthLinks();
    setMypageMessage("내 정보가 저장되었습니다.", "success");
  });

  if (myIngredientSearch) {
    myIngredientSearch.addEventListener("input", () => {
      renderMyIngredients();
    });
  }

  if (myIngredientList) {
    myIngredientList.addEventListener("click", (event) => {
      const item = event.target.closest("[data-my-ingredient-id]");
      if (!item) return;
      activeRegisteredIngredientId = item.dataset.myIngredientId;
      renderMyIngredients();
      renderMyIngredientDetail();
    });

    myIngredientList.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const item = event.target.closest("[data-my-ingredient-id]");
      if (!item) return;
      event.preventDefault();
      activeRegisteredIngredientId = item.dataset.myIngredientId;
      renderMyIngredients();
      renderMyIngredientDetail();
    });
  }

  if (myIngredientDetailForm) {
    myIngredientDetailForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!activeRegisteredIngredientId) return;

      const item = {
        name: myIngredientFields.name.value.trim(),
        englishName: myIngredientFields.englishName.value.trim(),
        category: myIngredientFields.category.value.trim(),
        use: myIngredientFields.use.value.trim(),
        cert: myIngredientFields.cert.value.trim(),
        moq: myIngredientFields.moq.value.trim(),
        sample: myIngredientFields.sample.value.trim(),
        response: myIngredientFields.response.value.trim(),
        desc: myIngredientFields.desc.value.trim(),
        updatedAt: new Date().toISOString(),
      };

      if (!item.name || !item.englishName || !item.category) {
        setMyIngredientMessage("원료명, 영문명, 카테고리를 입력해주세요.", "error");
        return;
      }

      updateRegisteredIngredient(activeRegisteredIngredientId, item);
      renderMyIngredients();
      renderMyIngredientDetail();
      setMyIngredientMessage("원료 정보가 수정되었습니다.", "success");
    });
  }

  if (deleteMyIngredientButton) {
    deleteMyIngredientButton.addEventListener("click", () => {
      if (!activeRegisteredIngredientId) return;
      deleteRegisteredIngredient(activeRegisteredIngredientId);
      activeRegisteredIngredientId = "";
      renderMyIngredients();
      renderMyIngredientDetail();
    });
  }

  renderMypage();
}

if (loginForm) {
  const loginFields = {
    email: document.querySelector("#loginEmail"),
    password: document.querySelector("#loginPassword"),
  };
  const loginMessage = document.querySelector("#loginMessage");

  function setLoginMessage(message, type = "") {
    loginMessage.textContent = message;
    loginMessage.className = `form-message ${type}`.trim();
  }

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = loginFields.email.value.trim().toLowerCase();
    const password = loginFields.password.value;
    const member = getMembers().find((item) => item.email === email && item.password === password);

    if (!member) {
      setLoginMessage("이메일 또는 비밀번호를 확인해주세요.", "error");
      return;
    }

    setCurrentMember(member);
    setLoginMessage("로그인되었습니다.", "success");
    updateAuthLinks();
    window.setTimeout(() => {
      window.location.href = "index.html";
    }, 500);
  });
}

if (window.lucide) {
  window.lucide.createIcons();
}

document.addEventListener("click", createClickRipple, true);
updateAuthLinks();
updateRegisterAccess();
updateMypageAccess();
if (searchInput) {
  const initialSearchQuery = new URLSearchParams(window.location.search).get("search");
  if (initialSearchQuery) {
    searchInput.value = initialSearchQuery;
  }
}
renderCards(ingredients);
renderFavorites();
renderMyIngredients();
renderCommunityPosts(communityPosts);
loadNewsCards();
