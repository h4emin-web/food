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
const communityWriteButton = document.querySelector("#communityWriteButton");
const communityWriteForm = document.querySelector("#communityWriteForm");
const communityWriteCancel = document.querySelector("#communityWriteCancel");
const communityWriteMessage = document.querySelector("#communityWriteMessage");
const communityPostTitle = document.querySelector("#communityPostTitle");
const communityPostAuthor = document.querySelector("#communityPostAuthor");
const communityPostDesc = document.querySelector("#communityPostDesc");
const suggestionForm = document.querySelector("#suggestionForm");
const suggestionMessage = document.querySelector("#suggestionMessage");
const newsGrid = document.querySelector("#newsGrid");
const newsPrevButton = document.querySelector("[data-news-prev]");
const newsNextButton = document.querySelector("[data-news-next]");

const defaultAdminMember = {
  name: "하임",
  nickname: "관리자",
  email: "foden_@naver.com",
  phone: "",
  password: "goals7523@",
  company: "Haim company",
  companyWebsite: "",
  role: "관리자",
  interest: "식품 원료",
  memo: "푸드소스 기본 관리자 계정",
  isAdmin: true,
  joinedAt: "2026-07-16T00:00:00.000Z",
};
const messageThreadList = document.querySelector("#messageThreadList");
const messageConversation = document.querySelector("#messageConversation");
const messageComposer = document.querySelector("#messageComposer");
const messageAlarmButtons = [...document.querySelectorAll("[data-message-link]")];
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
const adminLayout = document.querySelector("#adminLayout");
const adminAuthRequired = document.querySelector("#adminAuthRequired");
const adminStatGrid = document.querySelector("#adminStatGrid");
const adminMemberSearch = document.querySelector("#adminMemberSearch");
const adminMemberTable = document.querySelector("#adminMemberTable");
const adminVisitList = document.querySelector("#adminVisitList");
const adminIngredientList = document.querySelector("#adminIngredientList");
const adminMessageList = document.querySelector("#adminMessageList");
const authLinks = [...document.querySelectorAll(".auth-link")];
const logoutLinks = [...document.querySelectorAll("[data-logout-link]")];
const authOnlyLinks = [...document.querySelectorAll(".auth-only")];
const guestOnlyLinks = [...document.querySelectorAll(".guest-only")];
const adminOnlyLinks = [...document.querySelectorAll(".admin-only-link")];
const myIngredientsLinks = [...document.querySelectorAll(".my-ingredients-link")];
let activeIngredientId = "";
let activeCommunityPostId = "";
let activeRegisteredIngredientId = "";
let activeMessagePartner = "";

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

function getIngredientManufacturerText(item) {
  const supplier = item.supplier || {};
  if (item.manufacturerVisibility === "private" && !isAdminMember()) {
    return "비공개";
  }
  return item.manufacturer || supplier.name || "확인 필요";
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
          <span class="ingredient-type">${item.type || "원료"}</span>
          <p class="ingredient-desc">${item.desc}</p>
          <span class="ingredient-manufacturer">${getIngredientManufacturerText(item)}</span>
          <span class="ingredient-origin">
            ${item.origin || "확인 필요"}
            ${
              item.originFlagCode
                ? `<img class="origin-flag" src="https://flagcdn.com/w40/${item.originFlagCode}.png" alt="${item.origin} 국기" loading="lazy" />`
                : ""
            }
          </span>
          <div class="card-actions">
            <button class="sample-button" type="button" data-inquiry-type="샘플 요청">샘플 요청</button>
            <button class="quote-button" type="button" data-inquiry-type="견적 문의">견적 문의</button>
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
        <span>분류</span>
        <span>설명</span>
        <span>제조사</span>
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
      <span class="ingredient-type">${item.type || "원료"}</span>
      <p class="ingredient-desc">${item.desc}</p>
      <span class="ingredient-manufacturer">${getIngredientManufacturerText(item)}</span>
      <span class="ingredient-origin">
        ${item.origin || "확인 필요"}
        ${
          item.originFlagCode
            ? `<img class="origin-flag" src="https://flagcdn.com/w40/${item.originFlagCode}.png" alt="${item.origin} 국기" loading="lazy" />`
            : ""
        }
      </span>
      <div class="card-actions">
        <button class="sample-button" type="button" data-inquiry-type="샘플 요청">샘플 요청</button>
        <button class="quote-button" type="button" data-inquiry-type="견적 문의">견적 문의</button>
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
      <span>분류</span>
      <span>설명</span>
      <span>제조사</span>
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
  const favoriteItems = getVisibleIngredients().filter((item) => favoriteIds.includes(item.id));
  renderIngredientBoard(favoriteGrid, favoriteItems, "아직 즐겨찾기한 원료가 없습니다.");
}

function getIngredientDetailMarkup(item) {
  const supplier = item.supplier || {};
  const website = supplier.website || "";
  const email = supplier.email || "확인 필요";
  const manufacturerVisibility = item.manufacturerVisibility || "public";
  const canViewManufacturer = manufacturerVisibility !== "private" || isAdminMember();
  const isPrivateForAdmin = manufacturerVisibility === "private" && isAdminMember();
  const isManufacturerPublic = canViewManufacturer;
  const manufacturerText = isManufacturerPublic ? item.manufacturer || "확인 필요" : "비공개";
  const manufacturerNote = isPrivateForAdmin
    ? '<small class="private-manufacturer-note">관리자에게만 표시됩니다.</small>'
    : isManufacturerPublic
      ? ""
      : '<small class="private-manufacturer-note">비공개 시 제조국만 노출됩니다.</small>';

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
            <span>제조국</span>
            <strong>${item.origin || "확인 필요"}</strong>
          </div>
          <div>
            <span>제조사</span>
            <strong>${manufacturerText}</strong>
            ${manufacturerNote}
          </div>
          <div>
            <span>공급사</span>
            <strong>${supplier.name || "확인 필요"}</strong>
          </div>
          <div>
            <span>공급사 홈페이지</span>
            <a href="${website || "#"}" target="_blank" rel="noreferrer">${website || "확인 필요"}</a>
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
        <div class="detail-actions">
          <button class="outline-button" type="button" data-message-recipient="${escapeHtml(supplier.contact || supplier.email || supplier.name || "")}">쪽지 보내기</button>
          <button class="sample-button" type="button" data-inquiry-type="샘플 요청">샘플 요청</button>
          <button class="quote-button" type="button" data-inquiry-type="견적 문의">견적 문의</button>
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
  const visibleIngredients = getVisibleIngredients();
  if (!searchInput) return visibleIngredients;

  const query = searchInput.value.trim().toLowerCase();
  const checked = filterInputs.filter((input) => input.checked).map((input) => input.value);

  return visibleIngredients.filter((item) => {
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

function getCountryFlagCode(origin) {
  const normalized = (origin || "").trim().toLowerCase();
  const countryMap = {
    "국내": "kr",
    "한국": "kr",
    "대한민국": "kr",
    "korea": "kr",
    "south korea": "kr",
    "캐나다": "ca",
    "canada": "ca",
    "미국": "us",
    "usa": "us",
    "united states": "us",
    "프랑스": "fr",
    "france": "fr",
    "네덜란드": "nl",
    "netherlands": "nl",
    "핀란드": "fi",
    "finland": "fi",
    "중국": "cn",
    "china": "cn",
    "일본": "jp",
    "japan": "jp",
    "독일": "de",
    "germany": "de",
    "이탈리아": "it",
    "italy": "it",
    "스페인": "es",
    "spain": "es",
    "호주": "au",
    "australia": "au",
    "뉴질랜드": "nz",
    "new zealand": "nz",
    "태국": "th",
    "thailand": "th",
    "베트남": "vn",
    "vietnam": "vn",
    "인도": "in",
    "india": "in",
  };
  return countryMap[normalized] || "";
}

function normalizeRegisteredIngredient(item) {
  const tags = [item.category, item.cert, item.sample, item.response, item.use].filter(Boolean);
  const origin = item.origin || "확인 필요";
  return {
    id: item.id,
    name: item.name,
    englishName: item.englishName || "English Name",
    desc: item.desc || `${item.name} 등록 원료입니다. 상세 정보는 등록 회원에게 문의하세요.`,
    type: item.category || "등록 원료",
    origin,
    originFlagCode: item.originFlagCode || getCountryFlagCode(origin),
    manufacturer: item.manufacturer || "",
    manufacturerVisibility: item.manufacturerVisibility || "public",
    tags: tags.length ? tags : [item.category || "등록 원료"],
    supplier: {
      name: item.company || item.ownerName || "등록 회원",
      website: item.companyWebsite || item.website || "#",
      email: item.ownerEmail || "확인 필요",
      contact: item.ownerName || "등록 회원",
      spec: item.moq || "규격 확인 필요",
    },
  };
}

function getVisibleIngredients() {
  return [...getAllRegisteredIngredientsByMember().map(normalizeRegisteredIngredient), ...ingredients];
}

function getVisibleIngredientById(id) {
  return getVisibleIngredients().find((item) => item.id === id);
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

function ensureDefaultAdminMember() {
  const members = getMembers();
  const adminEmail = defaultAdminMember.email.toLowerCase();
  const existing = members.find((member) => (member.email || "").toLowerCase() === adminEmail);
  const nextAdmin = existing
    ? {
        ...existing,
        ...defaultAdminMember,
        joinedAt: existing.joinedAt || defaultAdminMember.joinedAt,
      }
    : defaultAdminMember;
  const nextMembers = existing
    ? members.map((member) => ((member.email || "").toLowerCase() === adminEmail ? nextAdmin : member))
    : [...members, nextAdmin];
  localStorage.setItem("foodsourceMembers", JSON.stringify(nextMembers));

  const current = getCurrentMember();
  if ((current?.email || "").toLowerCase() === adminEmail) {
    setCurrentMember(nextAdmin);
  }
}

function getCurrentMember() {
  try {
    return JSON.parse(localStorage.getItem("foodsourceCurrentMember"));
  } catch {
    return null;
  }
}

function isAdminMember(member = getCurrentMember()) {
  if (!member) return false;
  const email = (member.email || "").toLowerCase();
  return email === "foden_@naver.com" || member.name === "하임" || member.role === "관리자" || member.isAdmin;
}

function getDisplayName(member = getCurrentMember()) {
  return member?.nickname || member?.name || "";
}

function setCurrentMember(member) {
  const normalizedMember = { ...member, nickname: member.nickname || member.name };
  localStorage.setItem("foodsourceCurrentMember", JSON.stringify(normalizedMember));
}

function trackVisit() {
  const today = new Date().toISOString().slice(0, 10);
  const path = window.location.pathname.split("/").pop() || "index.html";
  let visits = {};
  try {
    visits = JSON.parse(localStorage.getItem("foodsourceVisits")) || {};
  } catch {
    visits = {};
  }

  visits[today] = visits[today] || { count: 0, pages: {} };
  visits[today].count += 1;
  visits[today].pages[path] = (visits[today].pages[path] || 0) + 1;
  localStorage.setItem("foodsourceVisits", JSON.stringify(visits));
}

function getVisitStats() {
  try {
    return JSON.parse(localStorage.getItem("foodsourceVisits")) || {};
  } catch {
    return {};
  }
}

function getMemberKey(member = getCurrentMember()) {
  return member ? member.email || member.name : "";
}

function getMessageKey(member = getCurrentMember()) {
  const key = getMemberKey(member);
  return key ? `foodsourceMessages:${key}` : "";
}

function getMessages(member = getCurrentMember()) {
  const key = getMessageKey(member);
  if (!key) return [];

  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}

function setMessages(items, member = getCurrentMember()) {
  const key = getMessageKey(member);
  if (!key) return;
  localStorage.setItem(key, JSON.stringify(items));
}

function getDismissedMessageAlertKey(member = getCurrentMember()) {
  const key = getMemberKey(member);
  return key ? `foodsourceDismissedMessageAlerts:${key}` : "";
}

function getDismissedMessageAlertIds() {
  const key = getDismissedMessageAlertKey();
  if (!key) return [];
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}

function setDismissedMessageAlertIds(ids) {
  const key = getDismissedMessageAlertKey();
  if (!key) return;
  localStorage.setItem(key, JSON.stringify(ids));
}

function saveMessageToCurrentUser(message) {
  const messages = getMessages();
  setMessages([message, ...messages]);
}

function saveMessageToMember(member, message) {
  const messages = getMessages(member);
  setMessages([message, ...messages], member);
}

function findMessageRecipient(partnerName) {
  const target = (partnerName || "").trim().toLowerCase();
  if (!target) return null;
  return getMembers().find((member) => {
    return [member.nickname, member.name, member.email]
      .filter(Boolean)
      .some((value) => String(value).trim().toLowerCase() === target);
  });
}

function getCommunityPostKey() {
  return "foodsourceCommunityPosts";
}

function getSavedCommunityPosts() {
  try {
    return JSON.parse(localStorage.getItem(getCommunityPostKey())) || [];
  } catch {
    return [];
  }
}

function setSavedCommunityPosts(items) {
  localStorage.setItem(getCommunityPostKey(), JSON.stringify(items));
}

function saveCommunityPost(post) {
  setSavedCommunityPosts([post, ...getSavedCommunityPosts()]);
}

function hasUnreadMessages() {
  return getUnreadMessageCount() > 0;
}

function getUnreadReceivedMessages() {
  return getMessages().filter((message) => !message.read && message.direction === "received");
}

function getUnreadMessageCount() {
  const dismissed = new Set(getDismissedMessageAlertIds());
  return getUnreadReceivedMessages().filter((message) => !dismissed.has(message.id)).length;
}

function markMessageBellSeen() {
  const unreadIds = getUnreadReceivedMessages().map((message) => message.id);
  if (!unreadIds.length) return;
  setDismissedMessageAlertIds([...new Set([...getDismissedMessageAlertIds(), ...unreadIds])]);
  updateAuthLinks();
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
  const hasMyIngredients = member ? getRegisteredIngredients().length > 0 : false;
  authOnlyLinks.forEach((link) => {
    link.hidden = !member;
  });
  myIngredientsLinks.forEach((link) => {
    link.hidden = !hasMyIngredients;
  });
  guestOnlyLinks.forEach((link) => {
    link.hidden = Boolean(member);
  });
  adminOnlyLinks.forEach((link) => {
    link.hidden = !isAdminMember(member);
  });

  authLinks.forEach((link) => {
    if (member) {
      link.textContent = `${getDisplayName(member)}님`;
      link.href = "mypage.html";
    } else {
      link.textContent = "회원가입";
      link.href = "signup.html";
    }
  });

  messageAlarmButtons.forEach((button) => {
    const unreadCount = member ? getUnreadMessageCount() : 0;
    button.hidden = !member;
    button.classList.toggle("has-unread", unreadCount > 0);
    if (unreadCount > 0) {
      button.dataset.unreadCount = unreadCount > 99 ? "99+" : String(unreadCount);
      button.setAttribute("aria-label", `받은 쪽지 ${unreadCount}개`);
    } else {
      delete button.dataset.unreadCount;
      button.setAttribute("aria-label", "받은 쪽지");
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

function updateAdminAccess() {
  if (!adminLayout || !adminAuthRequired) return;

  const allowed = isAdminMember();
  adminLayout.hidden = !allowed;
  adminAuthRequired.hidden = allowed;
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
      (item.category || "").toLowerCase().includes(query) ||
      (item.origin || "").toLowerCase().includes(query) ||
      (item.manufacturer || "").toLowerCase().includes(query)
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

function openMessageComposer(partnerName) {
  const member = getCurrentMember();
  if (!member) {
    window.location.href = "login.html";
    return;
  }

  showMessageModal(partnerName);
}

function showMessageModal(partnerName) {
  document.querySelector(".message-modal-backdrop")?.remove();
  const modal = document.createElement("div");
  modal.className = "message-modal-backdrop";
  modal.innerHTML = `
    <section class="message-modal" role="dialog" aria-modal="true" aria-label="쪽지 보내기">
      <div class="message-modal-head">
        <div>
          <p class="eyebrow">쪽지 보내기</p>
          <h2>${escapeHtml(partnerName)}</h2>
        </div>
        <button class="icon-button" type="button" data-close-message-modal aria-label="닫기">
          <i data-lucide="x"></i>
        </button>
      </div>
      <form data-message-modal-form>
        <textarea name="body" placeholder="쪽지 내용을 입력하세요" required></textarea>
        <div class="form-actions">
          <button class="outline-button" type="button" data-close-message-modal>취소</button>
          <button class="primary-button" type="submit">보내기</button>
        </div>
      </form>
    </section>
  `;
  document.body.appendChild(modal);
  if (window.lucide) window.lucide.createIcons();
  modal.querySelector("textarea").focus();

  modal.addEventListener("click", (event) => {
    if (event.target === modal || event.target.closest("[data-close-message-modal]")) {
      modal.remove();
    }
  });

  modal.querySelector("[data-message-modal-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    const text = event.target.elements.body.value.trim();
    if (!text) return;
    createMessageThread(partnerName, text);
    modal.remove();
    window.location.href = "messages.html";
  });
}

function createMessageThread(partnerName, text) {
  const member = getCurrentMember();
  if (!member) return;

  const createdAt = new Date().toISOString();
  const recipient = findMessageRecipient(partnerName);
  const recipientLabel = recipient ? getDisplayName(recipient) : partnerName;
  const senderLabel = getDisplayName(member);
  const senderMeta = {
    senderCompany: member.company || "",
    senderEmail: member.email || "",
    senderWebsite: member.companyWebsite || "",
  };

  saveMessageToCurrentUser({
    id: `sent-${Date.now()}`,
    partner: recipientLabel,
    partnerCompany: recipient?.company || "",
    partnerEmail: recipient?.email || "",
    partnerWebsite: recipient?.companyWebsite || "",
    sender: senderLabel,
    body: text.trim(),
    direction: "sent",
    read: true,
    createdAt,
    ...senderMeta,
  });

  if (recipient) {
    saveMessageToMember(recipient, {
      id: `received-${Date.now()}`,
      partner: senderLabel,
      partnerCompany: member.company || "",
      partnerEmail: member.email || "",
      partnerWebsite: member.companyWebsite || "",
      sender: senderLabel,
      body: text.trim(),
      direction: "received",
      read: false,
      createdAt,
      ...senderMeta,
    });
  }
  updateAuthLinks();
}

function sendIngredientInquiry(ingredientId, inquiryType) {
  const member = getCurrentMember();
  if (!member) {
    window.location.href = "login.html";
    return;
  }

  const ingredient = getVisibleIngredientById(ingredientId);
  if (!ingredient) return;

  const supplier = ingredient.supplier || {};
  const recipient =
    findMessageRecipient(supplier.email) ||
    findMessageRecipient(supplier.contact) ||
    findMessageRecipient(supplier.name) ||
    findMessageRecipient(defaultAdminMember.email);
  if (!recipient) return;

  const createdAt = new Date().toISOString();
  const senderLabel = getDisplayName(member);
  const recipientLabel = getDisplayName(recipient);
  const senderCompany = member.company || "회사명 확인 필요";
  const senderEmail = member.email || "";
  const senderWebsite = member.companyWebsite || "";
  const maker =
    ingredient.manufacturerVisibility === "private"
      ? `${ingredient.origin || "제조국 확인 필요"} 제조사 비공개`
      : ingredient.manufacturer || supplier.name || "제조사 확인 필요";
  const body = [
    `${senderCompany}의 ${senderLabel}님이 ${inquiryType}을 보냈습니다.`,
    `회사명: ${senderCompany}`,
    `담당자: ${senderLabel}`,
    `이메일: ${senderEmail || "확인 필요"}`,
    `회사 홈페이지: ${senderWebsite || "확인 필요"}`,
    `원료: ${ingredient.name} (${ingredient.englishName})`,
    `제조사/공급사: ${maker}`,
    "원하면 이 대화창에서 바로 답장할 수 있습니다.",
  ].join("\n");

  saveMessageToCurrentUser({
    id: `sent-inquiry-${Date.now()}`,
    partner: recipientLabel,
    partnerCompany: recipient.company || "",
    partnerEmail: recipient.email || "",
    partnerWebsite: recipient.companyWebsite || "",
    sender: senderLabel,
    senderCompany,
    senderEmail,
    senderWebsite,
    body,
    direction: "sent",
    read: true,
    createdAt,
  });
  saveMessageToMember(recipient, {
    id: `received-inquiry-${Date.now()}`,
    partner: senderLabel,
    partnerCompany: senderCompany,
    partnerEmail: senderEmail,
    partnerWebsite: senderWebsite,
    sender: senderLabel,
    senderCompany,
    senderEmail,
    senderWebsite,
    body,
    direction: "received",
    read: false,
    createdAt,
    inquiryType,
    ingredientId,
  });
  updateAuthLinks();
  alert(`${inquiryType}이 쪽지로 전달되었습니다.`);
}

function groupMessagesByPartner(messages) {
  return messages.reduce((groups, message) => {
    const partner = message.partner || message.sender || "알 수 없음";
    groups[partner] = groups[partner] || [];
    groups[partner].push(message);
    return groups;
  }, {});
}

function getThreadPartnerMeta(thread) {
  const received = thread.find((message) => message.direction === "received" && (message.partnerCompany || message.senderCompany));
  const sent = thread.find((message) => message.direction === "sent" && message.partnerCompany);
  const source = received || sent || thread[0] || {};
  const company = source.partnerCompany || source.senderCompany || "";
  const email = source.partnerEmail || source.senderEmail || "";
  const website = source.partnerWebsite || source.senderWebsite || "";
  return { company, email, website };
}

function getMessagePreview(body) {
  return String(body || "").split("\n").find(Boolean) || "";
}

function formatMessageDate(value) {
  try {
    return new Intl.DateTimeFormat("ko-KR", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(value));
  } catch {
    return "";
  }
}

function renderMessagesPage() {
  if (!messageThreadList || !messageConversation) return;

  const member = getCurrentMember();
  if (!member) {
    messageThreadList.innerHTML = '<p class="empty-mini">로그인 후 받은 쪽지를 볼 수 있습니다.</p>';
    messageConversation.innerHTML = '<a class="primary-button" href="login.html">로그인</a>';
    if (messageComposer) messageComposer.hidden = true;
    return;
  }

  let messages = getMessages();
  if (activeMessagePartner) {
    const nextMessages = messages.map((message) =>
      (message.partner || message.sender) === activeMessagePartner ? { ...message, read: true } : message
    );
    if (JSON.stringify(nextMessages) !== JSON.stringify(messages)) {
      setMessages(nextMessages);
      messages = nextMessages;
      updateAuthLinks();
    }
  }
  const groups = groupMessagesByPartner(messages);
  const partners = Object.keys(groups);
  if (activeMessagePartner && !groups[activeMessagePartner]) {
    activeMessagePartner = "";
  }

  messageThreadList.innerHTML = partners.length
    ? partners
        .map((partner) => {
          const thread = groups[partner];
          const unreadCount = thread.filter((message) => !message.read && message.direction === "received").length;
          const latest = thread[0];
          const partnerMeta = getThreadPartnerMeta(thread);
          const metaText = [partnerMeta.company, partnerMeta.email].filter(Boolean).join(" · ");
          return `
            <button class="message-thread ${activeMessagePartner === partner ? "active" : ""} ${unreadCount ? "unread" : ""}" type="button" data-message-thread="${escapeHtml(partner)}" ${unreadCount ? `data-thread-unread="${unreadCount > 99 ? "99+" : unreadCount}"` : ""}>
              <strong>${escapeHtml(partner)}</strong>
              ${metaText ? `<em class="message-thread-meta">${escapeHtml(metaText)}</em>` : ""}
              <span>${escapeHtml(getMessagePreview(latest.body))}</span>
            </button>
          `;
        })
        .join("")
    : '<p class="empty-mini">받은 쪽지가 없습니다.</p>';

  renderActiveConversation();
}

function renderActiveConversation() {
  if (!messageConversation) return;

  const messages = getMessages();
  const thread = messages
    .filter((message) => (message.partner || message.sender) === activeMessagePartner)
    .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  if (!activeMessagePartner || !thread.length) {
    messageConversation.innerHTML = '<p class="empty-mini">대화를 선택하세요.</p>';
    if (messageComposer) messageComposer.hidden = true;
    return;
  }

  messageConversation.innerHTML = `
    <div class="message-conversation-head">
      <div>
        <h2>${escapeHtml(activeMessagePartner)}</h2>
        ${(() => {
          const meta = getThreadPartnerMeta(thread);
          const text = [meta.company, meta.email, meta.website].filter(Boolean).join(" · ");
          return text ? `<p>${escapeHtml(text)}</p>` : "";
        })()}
      </div>
      <span>답장으로 대화 시작</span>
    </div>
    <div class="message-bubbles">
      ${thread
        .map(
          (message) => `
            <article class="message-bubble ${message.direction === "sent" ? "sent" : "received"}">
              <p>${escapeHtml(message.body)}</p>
              <span>${formatMessageDate(message.createdAt)}</span>
            </article>
          `
        )
        .join("")}
    </div>
  `;
  if (messageComposer) messageComposer.hidden = false;
}

function sendThreadMessage(body) {
  const member = getCurrentMember();
  if (!member || !activeMessagePartner || !body.trim()) return;

  const createdAt = new Date().toISOString();
  const recipient = findMessageRecipient(activeMessagePartner);
  const senderLabel = getDisplayName(member);
  const messageBody = body.trim();
  saveMessageToCurrentUser({
    id: `sent-${Date.now()}`,
    partner: activeMessagePartner,
    partnerCompany: recipient?.company || "",
    partnerEmail: recipient?.email || "",
    partnerWebsite: recipient?.companyWebsite || "",
    sender: senderLabel,
    senderCompany: member.company || "",
    senderEmail: member.email || "",
    senderWebsite: member.companyWebsite || "",
    body: messageBody,
    direction: "sent",
    read: true,
    createdAt,
  });
  if (recipient) {
    saveMessageToMember(recipient, {
      id: `received-${Date.now()}`,
      partner: senderLabel,
      partnerCompany: member.company || "",
      partnerEmail: member.email || "",
      partnerWebsite: member.companyWebsite || "",
      sender: senderLabel,
      senderCompany: member.company || "",
      senderEmail: member.email || "",
      senderWebsite: member.companyWebsite || "",
      body: messageBody,
      direction: "received",
      read: false,
      createdAt,
    });
  }
  renderMessagesPage();
}

function getAllRegisteredIngredientsByMember() {
  return getMembers().flatMap((member) => {
    const key = `foodsourceRegisteredIngredients:${member.email}`;
    let items = [];
    try {
      items = JSON.parse(localStorage.getItem(key)) || [];
    } catch {
      items = [];
    }
    return items.map((item) => ({
      ...item,
      ownerName: getDisplayName(member),
      ownerEmail: member.email,
      company: item.company || member.company || "",
      companyWebsite: item.companyWebsite || member.companyWebsite || "",
    }));
  });
}

function getAllMessagesByMember() {
  return getMembers().flatMap((member) => {
    let items = [];
    try {
      items = JSON.parse(localStorage.getItem(`foodsourceMessages:${member.email}`)) || [];
    } catch {
      items = [];
    }
    return items.map((item) => ({ ...item, ownerName: getDisplayName(member), ownerEmail: member.email }));
  });
}

function getTodayVisitCount() {
  const today = new Date().toISOString().slice(0, 10);
  return getVisitStats()[today]?.count || 0;
}

function renderAdminPage() {
  if (!adminLayout) return;
  updateAdminAccess();
  if (!isAdminMember()) return;

  renderAdminStats();
  renderAdminMembers();
  renderAdminVisits();
  renderAdminIngredients();
  renderAdminMessages();
}

function renderAdminStats() {
  if (!adminStatGrid) return;

  const members = getMembers();
  const ingredients = getAllRegisteredIngredientsByMember();
  const messages = getAllMessagesByMember();
  const visits = getVisitStats();
  const totalVisits = Object.values(visits).reduce((sum, day) => sum + (day.count || 0), 0);

  const stats = [
    ["오늘 접속", `${getTodayVisitCount()}회`],
    ["누적 접속", `${totalVisits}회`],
    ["회원", `${members.length}명`],
    ["등록 원료", `${ingredients.length}개`],
    ["쪽지", `${messages.length}개`],
  ];

  adminStatGrid.innerHTML = stats
    .map(
      ([label, value]) => `
        <article class="admin-stat-card">
          <span>${label}</span>
          <strong>${value}</strong>
        </article>
      `
    )
    .join("");
}

function renderAdminMembers() {
  if (!adminMemberTable) return;

  const query = adminMemberSearch ? adminMemberSearch.value.trim().toLowerCase() : "";
  const members = getMembers().filter((member) => {
    const text = `${member.name} ${member.nickname || ""} ${member.email} ${member.company || ""} ${member.companyWebsite || ""} ${member.phone || ""}`.toLowerCase();
    return !query || text.includes(query);
  });

  adminMemberTable.innerHTML = members.length
    ? members
        .map(
          (member) => `
            <tr>
              <td><strong>${escapeHtml(getDisplayName(member))}</strong><span>${escapeHtml(member.name)} · ${escapeHtml(member.email)}</span></td>
              <td>${escapeHtml(member.phone || "-")}</td>
              <td>${escapeHtml(member.company || "-")}<span>${escapeHtml([member.companyWebsite, member.role].filter(Boolean).join(" · "))}</span></td>
              <td>${member.joinedAt ? formatNewsDate(member.joinedAt) : "-"}</td>
              <td>
                <button class="admin-small-button" type="button" data-admin-login="${escapeHtml(member.email)}">보기</button>
                <button class="admin-small-button danger-button" type="button" data-admin-delete="${escapeHtml(member.email)}">삭제</button>
              </td>
            </tr>
          `
        )
        .join("")
    : '<tr><td colspan="5">회원 정보가 없습니다.</td></tr>';
}

function renderAdminVisits() {
  if (!adminVisitList) return;

  const visits = getVisitStats();
  const days = Object.keys(visits).sort().reverse().slice(0, 14);
  adminVisitList.innerHTML = days.length
    ? days
        .map((day) => {
          const pages = Object.entries(visits[day].pages || {})
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(([page, count]) => `${page} ${count}`)
            .join(" · ");
          return `
            <article class="admin-list-row">
              <strong>${day}</strong>
              <span>${visits[day].count || 0}회</span>
              <p>${escapeHtml(pages || "페이지 기록 없음")}</p>
            </article>
          `;
        })
        .join("")
    : '<p class="empty-mini">아직 접속 기록이 없습니다.</p>';
}

function renderAdminIngredients() {
  if (!adminIngredientList) return;

  const ingredients = getAllRegisteredIngredientsByMember();
  adminIngredientList.innerHTML = ingredients.length
    ? ingredients
        .map(
          (item) => {
            const visibilityLabel = item.manufacturerVisibility === "private" ? "비공개" : "공개";
            return `
              <article class="admin-list-row">
                <strong>${escapeHtml(item.name || "원료명 없음")}</strong>
                <span>${escapeHtml(item.ownerName)} · ${escapeHtml(item.ownerEmail)}</span>
                <p>${escapeHtml(item.category || "분류 없음")} / ${escapeHtml(item.englishName || "영문명 없음")}</p>
                <p>제조국: ${escapeHtml(item.origin || "확인 필요")} / 제조사: ${escapeHtml(item.manufacturer || "확인 필요")} / ${visibilityLabel}</p>
              </article>
            `;
          }
        )
        .join("")
    : '<p class="empty-mini">등록된 원료가 없습니다.</p>';
}

function renderAdminMessages() {
  if (!adminMessageList) return;

  const messages = getAllMessagesByMember();
  adminMessageList.innerHTML = messages.length
    ? messages
        .slice(0, 30)
        .map(
          (message) => `
            <article class="admin-list-row">
              <strong>${escapeHtml(message.ownerName)} ↔ ${escapeHtml(message.partner || message.sender || "-")}</strong>
              <span>${formatMessageDate(message.createdAt)}</span>
              <p>${escapeHtml(message.body || "")}</p>
            </article>
          `
        )
        .join("")
    : '<p class="empty-mini">쪽지 기록이 없습니다.</p>';
}

function deleteAdminMember(email) {
  const current = getCurrentMember();
  const members = getMembers().filter((member) => member.email !== email);
  localStorage.setItem("foodsourceMembers", JSON.stringify(members));
  localStorage.removeItem(`foodsourceFavorites:${email}`);
  localStorage.removeItem(`foodsourceMessages:${email}`);
  localStorage.removeItem(`foodsourceRegisteredIngredients:${email}`);
  if (current?.email === email) {
    localStorage.removeItem("foodsourceCurrentMember");
  }
  updateAuthLinks();
  renderAdminPage();
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

  if (window.lucide) {
    window.lucide.createIcons();
  }
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

function scrollNewsCarousel(direction) {
  if (!newsGrid) return;
  const card = newsGrid.querySelector(".news-card");
  const distance = card ? card.getBoundingClientRect().width + 22 : newsGrid.clientWidth * 0.8;
  newsGrid.scrollBy({
    left: direction * distance,
    behavior: "smooth",
  });
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
          <button class="post-author message-user-button" type="button" data-message-user="${escapeHtml(post.author)}">${post.author}</button>
          <span class="post-date">${post.date}</span>
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
  const defaultName = getDisplayName(member);
  const commentsMarkup = comments.length
    ? comments
        .map(
          (comment) => `
            <article class="comment-item">
              <div>
                <button class="message-user-button comment-author" type="button" data-message-user="${escapeHtml(comment.author)}">${escapeHtml(comment.author)}</button>
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
            <button class="message-user-button detail-author" type="button" data-message-user="${escapeHtml(post.author)}">${post.author}</button>
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
          <input name="author" type="text" placeholder="닉네임" value="${escapeHtml(defaultName)}" ${member ? "readonly" : ""} required />
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
  const posts = getVisibleCommunityPosts().filter((post) => {
    return (
      !query ||
      post.title.toLowerCase().includes(query) ||
      post.desc.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query)
    );
  });

  renderCommunityPosts(posts);
}

function getVisibleCommunityPosts() {
  return [...getSavedCommunityPosts(), ...communityPosts];
}

if (grid && searchInput) {
  document.querySelector(".search-panel").addEventListener("submit", (event) => {
    event.preventDefault();
    updateGrid();
  });

  grid.addEventListener("click", (event) => {
    const inquiryButton = event.target.closest("[data-inquiry-type]");
    if (inquiryButton) {
      event.stopPropagation();
      const detail = inquiryButton.closest(".ingredient-detail");
      const ingredient = inquiryButton.closest(".ingredient-card");
      if (detail) sendIngredientInquiry(detail.dataset.detailIngredientId, inquiryButton.dataset.inquiryType);
      if (ingredient) sendIngredientInquiry(ingredient.dataset.ingredientId, inquiryButton.dataset.inquiryType);
      return;
    }
    const messageRecipientButton = event.target.closest("[data-message-recipient]");
    if (messageRecipientButton) {
      event.stopPropagation();
      openMessageComposer(messageRecipientButton.dataset.messageRecipient);
      return;
    }
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
    const inquiryButton = event.target.closest("[data-inquiry-type]");
    if (inquiryButton) {
      event.stopPropagation();
      const detail = inquiryButton.closest(".ingredient-detail");
      const ingredient = inquiryButton.closest(".ingredient-card");
      if (detail) sendIngredientInquiry(detail.dataset.detailIngredientId, inquiryButton.dataset.inquiryType);
      if (ingredient) sendIngredientInquiry(ingredient.dataset.ingredientId, inquiryButton.dataset.inquiryType);
      return;
    }
    const messageRecipientButton = event.target.closest("[data-message-recipient]");
    if (messageRecipientButton) {
      event.stopPropagation();
      openMessageComposer(messageRecipientButton.dataset.messageRecipient);
      return;
    }
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
    const messageUser = event.target.closest("[data-message-user]");
    if (messageUser) {
      event.preventDefault();
      event.stopPropagation();
      openMessageComposer(messageUser.dataset.messageUser);
      return;
    }

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

if (communityWriteButton && communityWriteForm) {
  communityWriteButton.addEventListener("click", () => {
    const member = getCurrentMember();
    if (!member) {
      window.location.href = "login.html";
      return;
    }

    communityWriteForm.hidden = !communityWriteForm.hidden;
    communityPostAuthor.value = getDisplayName(member);
    if (!communityWriteForm.hidden) {
      communityPostTitle.focus();
    }
  });
}

if (communityWriteCancel && communityWriteForm) {
  communityWriteCancel.addEventListener("click", () => {
    communityWriteForm.reset();
    communityWriteForm.hidden = true;
    if (communityWriteMessage) communityWriteMessage.textContent = "";
  });
}

if (communityWriteForm) {
  communityWriteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const member = getCurrentMember();
    if (!member) {
      window.location.href = "login.html";
      return;
    }

    const title = communityPostTitle.value.trim();
    const desc = communityPostDesc.value.trim();
    if (!title || !desc) return;

    saveCommunityPost({
      id: `community-${Date.now()}`,
      category: "원료 문의",
      title,
      desc,
      author: getDisplayName(member),
      date: "방금 전",
      comments: 0,
      views: 0,
      createdAt: new Date().toISOString(),
    });
    communityWriteForm.reset();
    communityWriteForm.hidden = true;
    if (communityWriteMessage) communityWriteMessage.textContent = "";
    activeCommunityPostId = "";
    updateCommunityPosts();
  });
}

if (suggestionForm) {
  suggestionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = suggestionForm.querySelector("#suggestionName").value.trim();
    const email = suggestionForm.querySelector("#suggestionEmail").value.trim();
    const subject = suggestionForm.querySelector("#suggestionSubject").value.trim();
    const body = suggestionForm.querySelector("#suggestionBody").value.trim();

    if (!name || !subject || !body) return;

    const mailBody = [
      `작성자: ${name}`,
      email ? `답변 이메일: ${email}` : "",
      "",
      body,
      "",
      `보낸 페이지: ${window.location.href}`,
    ]
      .filter((line) => line !== "")
      .join("\n");
    const mailto = `mailto:foden_@naver.com?subject=${encodeURIComponent(`[푸드소스 건의사항] ${subject}`)}&body=${encodeURIComponent(mailBody)}`;

    if (suggestionMessage) {
      suggestionMessage.textContent = "메일 앱을 열고 있습니다. 메일 앱에서 전송 버튼을 눌러주세요.";
      suggestionMessage.className = "form-message success";
    }
    window.location.href = mailto;
  });
}

if (newsPrevButton) {
  newsPrevButton.addEventListener("click", () => scrollNewsCarousel(-1));
}

if (newsNextButton) {
  newsNextButton.addEventListener("click", () => scrollNewsCarousel(1));
}

messageAlarmButtons.forEach((button) => {
  button.addEventListener("click", () => {
    markMessageBellSeen();
  });
});

if (messageThreadList) {
  messageThreadList.addEventListener("click", (event) => {
    const thread = event.target.closest("[data-message-thread]");
    if (!thread) return;
    activeMessagePartner = thread.dataset.messageThread;
    renderMessagesPage();
  });
}

if (messageComposer) {
  messageComposer.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = messageComposer.elements.body;
    sendThreadMessage(input.value);
    input.value = "";
  });
}

if (adminMemberSearch) {
  adminMemberSearch.addEventListener("input", renderAdminMembers);
}

if (adminMemberTable) {
  adminMemberTable.addEventListener("click", (event) => {
    const viewButton = event.target.closest("[data-admin-login]");
    const deleteButton = event.target.closest("[data-admin-delete]");

    if (viewButton) {
      const member = getMembers().find((item) => item.email === viewButton.dataset.adminLogin);
      if (!member) return;
      alert(
        [
          `이름: ${member.name}`,
          `닉네임: ${member.nickname || member.name || "-"}`,
          `이메일: ${member.email}`,
          `전화번호: ${member.phone || "-"}`,
          `회사명: ${member.company || "-"}`,
          `회사 홈페이지: ${member.companyWebsite || "-"}`,
          `담당 업무: ${member.role || "-"}`,
          `관심 원료: ${member.interest || "-"}`,
          `메모: ${member.memo || "-"}`,
        ].join("\n")
      );
    }

    if (deleteButton) {
      const email = deleteButton.dataset.adminDelete;
      if (confirm(`${email} 회원과 관련 데이터를 삭제할까요?`)) {
        deleteAdminMember(email);
      }
    }
  });
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
    origin: document.querySelector("#registerOrigin"),
    manufacturer: document.querySelector("#registerManufacturer"),
    manufacturerVisibility: document.querySelectorAll("[name='registerManufacturerVisibility']"),
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

  function getSelectedRegisterCategory() {
    const selected = registerFields.category.selectedOptions[0];
    return selected && selected.value ? selected.textContent.trim() : "";
  }

  function getSelectedManufacturerVisibility() {
    return (
      Array.from(registerFields.manufacturerVisibility).find((input) => input.checked)?.value ||
      "public"
    );
  }

  function updateRegisterPreview() {
    const name = registerFields.name.value.trim();
    const englishName = registerFields.englishName.value.trim();
    const origin = registerFields.origin.value.trim();
    const manufacturer = registerFields.manufacturer.value.trim();
    const manufacturerVisibility = getSelectedManufacturerVisibility();
    const category = getSelectedRegisterCategory();
    const use = registerFields.use.value.trim();
    const cert = registerFields.cert.value.trim();
    const moq = registerFields.moq.value.trim();
    const sample = registerFields.sample.value.trim();
    const response = registerFields.response.value.trim();
    const desc = registerFields.desc.value.trim();
    const visibleManufacturer = manufacturerVisibility === "private" ? "제조사 비공개" : manufacturer;
    const tags = [origin, visibleManufacturer, cert, moq, sample, response, use].filter(Boolean).slice(0, 4);

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
    const member = getCurrentMember();
    const item = {
      id: `registered-${Date.now()}`,
      name: registerFields.name.value.trim(),
      englishName: registerFields.englishName.value.trim(),
      origin: registerFields.origin.value.trim(),
      originFlagCode: getCountryFlagCode(registerFields.origin.value.trim()),
      manufacturer: registerFields.manufacturer.value.trim(),
      manufacturerVisibility: getSelectedManufacturerVisibility(),
      category: getSelectedRegisterCategory(),
      use: registerFields.use.value.trim(),
      cert: registerFields.cert.value.trim(),
      moq: registerFields.moq.value.trim(),
      sample: registerFields.sample.value.trim(),
      response: registerFields.response.value.trim(),
      desc: registerFields.desc.value.trim(),
      company: member?.company || "",
      companyWebsite: member?.companyWebsite || "",
      ownerName: getDisplayName(member),
      ownerEmail: member?.email || "",
      createdAt: new Date().toISOString(),
      createdAtText: new Intl.DateTimeFormat("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(new Date()),
    };

    if (!item.name || !item.englishName || !item.origin || !item.category) {
      setRegisterMessage("원료명, 영문명, 제조국, 카테고리를 입력해주세요.", "error");
      return;
    }

    saveRegisteredIngredient(item);
    updateAuthLinks();
    ingredientRegisterForm.reset();
    setRegisterMessage("원료가 등록되었습니다. 원료찾기와 마이페이지에서 확인할 수 있습니다.", "success");
    window.setTimeout(updateRegisterPreview, 0);
  });

  updateRegisterPreview();
}

if (signupForm) {
  const signupFields = {
    name: document.querySelector("#signupName"),
    email: document.querySelector("#signupEmail"),
    phone: document.querySelector("#signupPhone"),
    nickname: document.querySelector("#signupNickname"),
    password: document.querySelector("#signupPassword"),
    confirm: document.querySelector("#signupPasswordConfirm"),
    company: document.querySelector("#signupCompany"),
    companyWebsite: document.querySelector("#signupCompanyWebsite"),
    role: document.querySelector("#signupRole"),
    terms: document.querySelector("#signupTerms"),
  };
  const signupMessage = document.querySelector("#signupMessage");

  function setSignupMessage(message, type = "") {
    signupMessage.textContent = message;
    signupMessage.className = `form-message ${type}`.trim();
  }

  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const password = signupFields.password.value;
    const confirm = signupFields.confirm.value;
    const member = {
      name: signupFields.name.value.trim(),
      email: signupFields.email.value.trim().toLowerCase(),
      phone: signupFields.phone.value.trim(),
      nickname: signupFields.nickname.value.trim(),
      company: signupFields.company.value.trim(),
      companyWebsite: signupFields.companyWebsite.value.trim(),
      role: signupFields.role.value,
      password,
      joinedAt: new Date().toISOString(),
    };

    if (!member.name || !member.email || !member.phone || !member.nickname || !member.company || !password || !confirm) {
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
    updateAuthLinks();
  });

  signupForm.addEventListener("reset", () => {
    window.setTimeout(() => setSignupMessage("", ""), 0);
  });

  updateAuthLinks();
}

if (mypageForm) {
  const mypageFields = {
    name: document.querySelector("#mypageName"),
    email: document.querySelector("#mypageEmail"),
    phone: document.querySelector("#mypagePhone"),
    nickname: document.querySelector("#mypageNickname"),
    company: document.querySelector("#mypageCompany"),
    companyWebsite: document.querySelector("#mypageCompanyWebsite"),
    role: document.querySelector("#mypageRole"),
    interest: document.querySelector("#mypageInterest"),
    memo: document.querySelector("#mypageMemo"),
  };
  const mypageMessage = document.querySelector("#mypageMessage");
  const myIngredientFields = {
    name: document.querySelector("#myIngredientName"),
    englishName: document.querySelector("#myIngredientEnglishName"),
    origin: document.querySelector("#myIngredientOrigin"),
    manufacturer: document.querySelector("#myIngredientManufacturer"),
    manufacturerVisibility: document.querySelectorAll("[name='myIngredientManufacturerVisibility']"),
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
    mypageFields.nickname.value = member.nickname || member.name || "";
    mypageFields.company.value = member.company || "";
    mypageFields.companyWebsite.value = member.companyWebsite || "";
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

  function setMyIngredientManufacturerVisibility(value) {
    Array.from(myIngredientFields.manufacturerVisibility).forEach((input) => {
      input.checked = input.value === (value || "public");
    });
  }

  function getMyIngredientManufacturerVisibility() {
    return (
      Array.from(myIngredientFields.manufacturerVisibility).find((input) => input.checked)?.value ||
      "public"
    );
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
    myIngredientFields.origin.value = item.origin || "";
    myIngredientFields.manufacturer.value = item.manufacturer || "";
    setMyIngredientManufacturerVisibility(item.manufacturerVisibility || "public");
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
      nickname: mypageFields.nickname.value.trim(),
      company: mypageFields.company.value.trim(),
      companyWebsite: mypageFields.companyWebsite.value.trim(),
      role: mypageFields.role.value,
      interest: mypageFields.interest.value.trim(),
      memo: mypageFields.memo.value.trim(),
      updatedAt: new Date().toISOString(),
    };

    if (!updatedMember.name || !updatedMember.phone || !updatedMember.nickname || !updatedMember.company) {
      setMypageMessage("이름, 전화번호, 닉네임, 회사명을 입력해주세요.", "error");
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
        origin: myIngredientFields.origin.value.trim(),
        originFlagCode: getCountryFlagCode(myIngredientFields.origin.value.trim()),
        manufacturer: myIngredientFields.manufacturer.value.trim(),
        manufacturerVisibility: getMyIngredientManufacturerVisibility(),
        category: myIngredientFields.category.value.trim(),
        use: myIngredientFields.use.value.trim(),
        cert: myIngredientFields.cert.value.trim(),
        moq: myIngredientFields.moq.value.trim(),
        sample: myIngredientFields.sample.value.trim(),
        response: myIngredientFields.response.value.trim(),
        desc: myIngredientFields.desc.value.trim(),
        updatedAt: new Date().toISOString(),
      };

      if (!item.name || !item.englishName || !item.origin || !item.category) {
        setMyIngredientMessage("원료명, 영문명, 제조국, 카테고리를 입력해주세요.", "error");
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
      updateAuthLinks();
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
trackVisit();
ensureDefaultAdminMember();
updateAuthLinks();
updateRegisterAccess();
updateMypageAccess();
updateAdminAccess();
if (searchInput) {
  const initialSearchQuery = new URLSearchParams(window.location.search).get("search");
  if (initialSearchQuery) {
    searchInput.value = initialSearchQuery;
  }
}
updateGrid();
renderFavorites();
renderMyIngredients();
updateCommunityPosts();
loadNewsCards();
renderMessagesPage();
renderAdminPage();
