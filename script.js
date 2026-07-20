const ingredients = [];

const communityPosts = [];

const partnerPosts = [];

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
const partnerList = document.querySelector("#partnerList");
const partnerSearch = document.querySelector("#partnerSearch");
const partnerWriteButtons = [...document.querySelectorAll("[data-partner-write-type]")];
const partnerWriteForm = document.querySelector("#partnerWriteForm");
const partnerWriteCancel = document.querySelector("#partnerWriteCancel");
const partnerWriteMessage = document.querySelector("#partnerWriteMessage");
const partnerFormTitle = document.querySelector("#partnerFormTitle");
const partnerFormGuide = document.querySelector("#partnerFormGuide");
const partnerDescLabel = document.querySelector("#partnerDescLabel");
const partnerPostTitle = document.querySelector("#partnerPostTitle");
const partnerPostAuthor = document.querySelector("#partnerPostAuthor");
const partnerPostCompany = document.querySelector("#partnerPostCompany");
const partnerPostMode = document.querySelector("#partnerPostMode");
const partnerPostTrade = document.querySelector("#partnerPostTrade");
const partnerPostBusiness = document.querySelector("#partnerPostBusiness");
const partnerPostDesc = document.querySelector("#partnerPostDesc");
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
  memo: "푸드소싱 기본 관리자 계정",
  isAdmin: true,
  joinedAt: "2026-07-16T00:00:00.000Z",
};
const messageThreadList = document.querySelector("#messageThreadList");
const messageConversation = document.querySelector("#messageConversation");
const messageComposer = document.querySelector("#messageComposer");
const messageAlarmButtons = [...document.querySelectorAll("[data-message-link]")];
const ingredientRegisterForm = document.querySelector("#ingredientRegisterForm");
const csvIngredientUpload = document.querySelector("#csvIngredientUpload");
const csvTemplateDownload = document.querySelector("#csvTemplateDownload");
const csvUploadMessage = document.querySelector("#csvUploadMessage");
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
const myIngredientsPanel = document.querySelector("#my-ingredients");
const mypageReturnButton = document.querySelector("#mypageReturnButton");
const adminLayout = document.querySelector("#adminLayout");
const adminAuthRequired = document.querySelector("#adminAuthRequired");
const adminStatGrid = document.querySelector("#adminStatGrid");
const adminMemberSearch = document.querySelector("#adminMemberSearch");
const adminMemberTable = document.querySelector("#adminMemberTable");
const adminVisitList = document.querySelector("#adminVisitList");
const adminIngredientList = document.querySelector("#adminIngredientList");
const adminCommunityList = document.querySelector("#adminCommunityList");
const adminMessageList = document.querySelector("#adminMessageList");
const adminExportDataButton = document.querySelector("#adminExportData");
const adminImportDataInput = document.querySelector("#adminImportData");
const adminBackupMessage = document.querySelector("#adminBackupMessage");
const authLinks = [...document.querySelectorAll(".auth-link")];
const logoutLinks = [...document.querySelectorAll("[data-logout-link]")];
const authOnlyLinks = [...document.querySelectorAll(".auth-only")];
const guestOnlyLinks = [...document.querySelectorAll(".guest-only")];
const adminOnlyLinks = [...document.querySelectorAll(".admin-only-link")];
const myIngredientsLinks = [...document.querySelectorAll(".my-ingredients-link")];
let activeIngredientId = "";
let activeCommunityPostId = "";
let activePartnerPostId = "";
let activeRegisteredIngredientId = "";
let activeMessagePartner = "";
let ingredientCurrentPage = 1;
let ingredientPageSize = 10;
let communityCurrentPage = 1;
let communityPageSize = 10;
let partnerCurrentPage = 1;
let partnerPageSize = 10;
let remoteRegisteredIngredients = [];
let remoteCommunityPosts = [];
let remotePartnerPosts = [];
const supabaseClient = window.foodSourcingSupabase || null;

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

function bindVisibilityChoiceRadios(root = document) {
  root.querySelectorAll(".visibility-choice label").forEach((label) => {
    label.addEventListener("click", () => {
      const input = label.querySelector("input[type='radio']");
      if (!input) return;
      input.checked = true;
      input.dispatchEvent(new Event("change", { bubbles: true }));
    });
  });
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
  if (item.manufacturerVisibility === "private" && !isAdminMember()) {
    return "비공개";
  }
  return item.manufacturer || "확인 필요";
}

function canRequestSample(item) {
  const sample = String(item.sample || "").trim();
  const response = String(item.response || "").trim();
  return sample !== "불가" && response !== "견적 문의 가능";
}

function getSampleRequestButton(item) {
  return canRequestSample(item)
    ? '<button class="sample-button" type="button" data-inquiry-type="샘플 요청">샘플 요청</button>'
    : "";
}

function getInquirySubjectText(inquiryType) {
  return inquiryType === "견적 문의" ? "견적 문의가" : `${inquiryType}이`;
}

function getPaginationState(items, currentPage, pageSize) {
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const page = Math.min(Math.max(1, currentPage), totalPages);
  const start = (page - 1) * pageSize;
  return {
    page,
    totalPages,
    items: items.slice(start, start + pageSize),
  };
}

function getPaginationControls(scope, page, totalPages, pageSize) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  return `
    <div class="pagination-bar" data-pagination-scope="${scope}">
      <div class="page-size-toggle" aria-label="보기 개수">
        ${[10, 50]
          .map(
            (size) => `
              <button class="${pageSize === size ? "active" : ""}" type="button" data-page-size="${size}">
                ${size}개씩 보기
              </button>
            `
          )
          .join("")}
      </div>
      <div class="page-number-list" aria-label="페이지">
        ${pages
          .map(
            (pageNumber) => `
              <button class="${pageNumber === page ? "active" : ""}" type="button" data-page-number="${pageNumber}" aria-label="${pageNumber}페이지">
                ${pageNumber}
              </button>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderCards(items) {
  if (!grid) return;

  if (!items.length) {
    grid.innerHTML = '<div class="empty-state">조건에 맞는 원료가 없습니다. 검색어 또는 필터를 줄여보세요.</div>';
    return;
  }

  const pagination = getPaginationState(items, ingredientCurrentPage, ingredientPageSize);
  ingredientCurrentPage = pagination.page;

  grid.innerHTML = pagination.items
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
          <span class="ingredient-lead-time">리드타임 : ${item.leadTime || "확인 필요"}</span>
          <div class="card-actions">
            ${getSampleRequestButton(item)}
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
        <span>제조국</span>
        <span>리드타임</span>
        <span>문의</span>
        <span>즐겨찾기</span>
      </div>
    `
  );
  grid.insertAdjacentHTML("beforeend", getPaginationControls("ingredients", ingredientCurrentPage, pagination.totalPages, ingredientPageSize));
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
      <span class="ingredient-lead-time">리드타임 : ${item.leadTime || "확인 필요"}</span>
      <div class="card-actions">
        ${getSampleRequestButton(item)}
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
      <span>제조국</span>
      <span>리드타임</span>
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
            <span>${item.origin || "제조국 확인 필요"}</span>
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
            <a href="${website || "#"}" target="_blank" rel="noreferrer">${website || "확인 필요"}</a>
          </div>
          <div>
            <span>공급사 이메일</span>
            <a href="mailto:${email}">${email}</a>
          </div>
          <div>
            <span>제조사</span>
            <strong>${manufacturerText}</strong>
            ${manufacturerNote}
          </div>
          <div>
            <span>제조국</span>
            <strong>${item.origin || "확인 필요"}</strong>
          </div>
        </div>
        <div class="detail-actions">
          <button class="outline-button" type="button" data-message-recipient="${escapeHtml(supplier.contact || supplier.email || supplier.name || "")}">쪽지 보내기</button>
          ${getSampleRequestButton(item)}
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

function setIngredientPageSize(size) {
  ingredientPageSize = Number(size) === 50 ? 50 : 10;
  ingredientCurrentPage = 1;
  updateGrid();
}

function setIngredientPage(page) {
  ingredientCurrentPage = Number(page) || 1;
  updateGrid();
}

function getCountryFlagCode(origin) {
  const normalized = (origin || "").trim().toLowerCase();
  const compact = normalized
    .replace(/\s+/g, " ")
    .replace(/산$/, "")
    .replace(/산 원료$/, "")
    .trim();
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
  return countryMap[normalized] || countryMap[compact] || "";
}

function normalizeRegisteredIngredient(item) {
  const tags = [item.category, item.cert, item.sample, item.response, item.use].filter(Boolean);
  const origin = item.origin || "확인 필요";
  return {
    id: item.id,
    name: item.name,
    englishName: item.englishName || "English Name",
    desc: item.use || item.desc || `${item.name} 등록 원료입니다. 상세 정보는 등록 회원에게 문의하세요.`,
    type: item.category || "등록 원료",
    origin,
    originFlagCode: item.originFlagCode || getCountryFlagCode(origin),
    manufacturer: item.manufacturer || "",
    manufacturerVisibility: item.manufacturerVisibility || "public",
    leadTime: item.leadTime || "",
    sample: item.sample || "",
    response: item.response || "",
    tags: tags.length ? tags : [item.category || "등록 원료"],
    supplier: {
      name: item.company || item.ownerName || "등록 회원",
      website: normalizeWebsite(item.companyWebsite || item.website),
      email: item.ownerEmail || "확인 필요",
      contact: item.ownerName || "등록 회원",
      spec: item.moq || "규격 확인 필요",
    },
  };
}

function getIngredientIdentity(item) {
  return [
    item.name,
    item.englishName,
    item.ownerEmail,
    item.company,
    item.manufacturer,
  ]
    .map((value) => String(value || "").trim().toLowerCase())
    .join("|");
}

function getVisibleIngredients() {
  const registered = [...remoteRegisteredIngredients, ...getAllRegisteredIngredientsByMember()]
    .filter((item, index, items) => {
      const identity = getIngredientIdentity(item);
      return items.findIndex((next) => next.id === item.id || getIngredientIdentity(next) === identity) === index;
    })
    .map(normalizeRegisteredIngredient);
  return [...registered, ...ingredients];
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

function normalizeEmail(value) {
  return String(value || "").trim().toLowerCase();
}

function normalizePassword(value) {
  return String(value || "").trim();
}

function normalizeNickname(value) {
  return String(value || "").trim().toLowerCase();
}

function normalizeWebsite(value) {
  const website = String(value || "").trim();
  if (!website) return "";
  if (/^(https?:)?\/\//i.test(website) || /^mailto:/i.test(website)) return website;
  return `https://${website}`;
}

function normalizeMember(member) {
  const normalized = {
    ...member,
    email: normalizeEmail(member?.email),
    password: normalizePassword(member?.password),
    name: String(member?.name || "").trim(),
    phone: String(member?.phone || "").trim(),
    nickname: String(member?.nickname || member?.name || "").trim(),
    company: String(member?.company || "").trim(),
    companyWebsite: normalizeWebsite(member?.companyWebsite),
  };
  return normalized;
}

function getMembers() {
  try {
    return (JSON.parse(localStorage.getItem("foodsourceMembers")) || []).map(normalizeMember);
  } catch {
    return [];
  }
}

function setMembers(members) {
  localStorage.setItem("foodsourceMembers", JSON.stringify(members.map(normalizeMember)));
}

function isNicknameTakenLocally(nickname, excludeEmail = "") {
  const target = normalizeNickname(nickname);
  const email = normalizeEmail(excludeEmail);
  if (!target) return false;
  return getMembers().some((member) => {
    const memberEmail = normalizeEmail(member.email);
    const memberNickname = normalizeNickname(member.nickname || member.name);
    return memberNickname === target && memberEmail !== email;
  });
}

function ensureDefaultAdminMember() {
  const members = getMembers();
  const adminEmail = normalizeEmail(defaultAdminMember.email);
  const existing = members.find((member) => normalizeEmail(member.email) === adminEmail);
  const nextAdmin = existing
    ? {
        ...existing,
        ...defaultAdminMember,
        joinedAt: existing.joinedAt || defaultAdminMember.joinedAt,
      }
    : defaultAdminMember;
  const nextMembers = existing
    ? members.map((member) => (normalizeEmail(member.email) === adminEmail ? nextAdmin : member))
    : [...members, nextAdmin];
  setMembers(nextMembers);

  const current = getCurrentMember();
  if (normalizeEmail(current?.email) === adminEmail) {
    setCurrentMember(nextAdmin);
  }
}

function getCurrentMember() {
  try {
    const stored = localStorage.getItem("foodsourceCurrentMember");
    return stored ? normalizeMember(JSON.parse(stored)) : null;
  } catch {
    return null;
  }
}

function isAdminMember(member = getCurrentMember()) {
  if (!member) return false;
  const email = normalizeEmail(member.email);
  return email === "foden_@naver.com";
}

function getDisplayName(member = getCurrentMember()) {
  return member?.nickname || member?.name || "";
}

function setCurrentMember(member) {
  const normalizedMember = normalizeMember({ ...member, nickname: member.nickname || member.name });
  localStorage.setItem("foodsourceCurrentMember", JSON.stringify(normalizedMember));
}

function mapSupabaseUserToMember(user) {
  const meta = user?.user_metadata || {};
  return normalizeMember({
    name: meta.name || meta.full_name || "",
    nickname: meta.nickname || meta.name || "",
    email: user?.email || "",
    phone: meta.phone || "",
    password: "",
    company: meta.company || "",
    companyWebsite: meta.companyWebsite || meta.company_website || "",
    role: meta.role || "식품 개발",
    interest: meta.interest || "",
    memo: meta.memo || "",
    isAdmin: normalizeEmail(user?.email) === "foden_@naver.com",
    joinedAt: user?.created_at || new Date().toISOString(),
  });
}

async function saveSupabaseProfile(userId, member) {
  if (!supabaseClient || !userId) return { ok: false, skipped: true };
  const { data, error } = await supabaseClient.from("profiles").upsert({
    id: userId,
    email: member.email,
    name: member.name,
    nickname: member.nickname || member.name,
    phone: member.phone,
    company: member.company,
    company_website: member.companyWebsite,
    role: member.role || "식품 개발",
    is_admin: member.email === "foden_@naver.com",
    updated_at: new Date().toISOString(),
  }).select().single();
  if (error) return { ok: false, error };
  return { ok: true, profile: data };
}

function mapSupabaseProfileToMember(profile, fallbackUser = null) {
  const fallback = fallbackUser ? mapSupabaseUserToMember(fallbackUser) : {};
  return normalizeMember({
    ...fallback,
    name: profile?.name || fallback.name || "",
    nickname: profile?.nickname || fallback.nickname || profile?.name || "",
    email: profile?.email || fallback.email || "",
    phone: profile?.phone || fallback.phone || "",
    password: "",
    company: profile?.company || fallback.company || "",
    companyWebsite: profile?.company_website || fallback.companyWebsite || "",
    role: profile?.role || fallback.role || "식품 개발",
    interest: profile?.interest || fallback.interest || "",
    memo: profile?.memo || fallback.memo || "",
    isAdmin: Boolean(profile?.is_admin) || normalizeEmail(profile?.email || fallback.email) === "foden_@naver.com",
    joinedAt: profile?.created_at || fallback.joinedAt || new Date().toISOString(),
  });
}

async function getSupabaseProfileMember(user) {
  if (!supabaseClient || !user?.id) return null;
  try {
    const { data, error } = await supabaseClient
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();
    if (error || !data) return mapSupabaseUserToMember(user);
    return mapSupabaseProfileToMember(data, user);
  } catch {
    return mapSupabaseUserToMember(user);
  }
}

async function signUpWithSupabase(member, password) {
  if (!supabaseClient) return { ok: false, skipped: true };
  const { data, error } = await supabaseClient.auth.signUp({
    email: member.email,
    password,
    options: {
      data: {
        name: member.name,
        nickname: member.nickname,
        phone: member.phone,
        company: member.company,
        companyWebsite: member.companyWebsite,
        role: member.role,
      },
    },
  });
  if (error) return { ok: false, error };
  const profileResult = await saveSupabaseProfile(data.user?.id, member);
  if (!profileResult.ok && !profileResult.skipped) {
    return { ok: false, error: profileResult.error };
  }
  return { ok: true, user: data.user };
}

async function isNicknameTakenInSupabase(nickname) {
  if (!supabaseClient) return false;
  const normalizedNickname = String(nickname || "").trim();
  if (!normalizedNickname) return false;
  try {
    const { data, error } = await supabaseClient.rpc("nickname_exists", {
      check_nickname: normalizedNickname,
    });
    if (error) return false;
    return Boolean(data);
  } catch {
    return false;
  }
}

async function signInWithSupabase(email, password) {
  if (!supabaseClient) return { ok: false, skipped: true };
  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) return { ok: false, error };
  return { ok: true, user: data.user };
}

async function restoreSupabaseSession() {
  if (!supabaseClient) return;
  try {
    const { data, error } = await supabaseClient.auth.getSession();
    if (error || !data?.session?.user) return;
    const member = await getSupabaseProfileMember(data.session.user);
    if (!member?.email) return;
    updateStoredMember(member);
    setCurrentMember(member);
    updateAuthLinks();
    updateRegisterAccess();
    updateMypageAccess();
    updateAdminAccess();
    renderFavorites();
    renderMyIngredients();
  } catch {
    // A failed session restore should not block the page.
  }
}

async function getSupabaseUserId() {
  if (!supabaseClient) return "";
  try {
    const { data } = await supabaseClient.auth.getSession();
    return data?.session?.user?.id || "";
  } catch {
    return "";
  }
}

function mapIngredientRow(row) {
  const createdAt = row.created_at || new Date().toISOString();
  return {
    id: row.id,
    name: row.name || "",
    englishName: row.english_name || "",
    origin: row.origin || "",
    originFlagCode: row.origin_flag_code || getCountryFlagCode(row.origin || ""),
    manufacturer: row.manufacturer || "",
    manufacturerVisibility: row.manufacturer_visibility || "public",
    category: row.category || "",
    use: row.use || "",
    cert: row.cert || "",
    moq: row.moq || "",
    leadTime: row.lead_time || "",
    sample: row.sample || "가능",
    response: row.response || "샘플·견적 모두 가능",
    desc: row.description || "",
    company: row.company || "",
    companyWebsite: row.company_website || "",
    ownerName: row.owner_name || "",
    ownerEmail: row.owner_email || "",
    createdAt,
    createdAtText: new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date(createdAt)),
  };
}

function mapCommunityRow(row) {
  return {
    id: row.id,
    category: "원료 문의",
    title: row.title || "",
    desc: row.description || "",
    author: row.author || "",
    date: formatRelativeDate(row.created_at),
    comments: 0,
    views: Number(row.views || 0),
    createdAt: row.created_at || new Date().toISOString(),
  };
}

function mapPartnerRow(row) {
  return {
    id: row.id,
    postType: row.post_type || "inquiry",
    mode: row.mode || "OEM",
    trade: row.trade || "구매",
    title: row.title || "",
    company: row.company || "",
    business: row.business || "",
    desc: row.description || "",
    author: row.author || "",
    date: formatRelativeDate(row.created_at),
    views: Number(row.views || 0),
    createdAt: row.created_at || new Date().toISOString(),
  };
}

async function loadSupabaseBoardData() {
  if (!supabaseClient) return;
  try {
    const [ingredientsResult, communityResult, partnerResult] = await Promise.all([
      supabaseClient.from("ingredients").select("*").order("created_at", { ascending: false }).limit(500),
      supabaseClient.from("community_posts").select("*").order("created_at", { ascending: false }).limit(500),
      supabaseClient.from("partner_posts").select("*").order("created_at", { ascending: false }).limit(500),
    ]);
    if (!ingredientsResult.error) remoteRegisteredIngredients = (ingredientsResult.data || []).map(mapIngredientRow);
    if (!communityResult.error) remoteCommunityPosts = (communityResult.data || []).map(mapCommunityRow);
    if (!partnerResult.error) remotePartnerPosts = (partnerResult.data || []).map(mapPartnerRow);
    updateGrid();
    updateCommunityPosts();
    updatePartnerPosts();
  } catch {
    // Local data remains available if Supabase tables are not ready yet.
  }
}

async function saveIngredientToSupabase(item) {
  if (!supabaseClient) return;
  const ownerId = await getSupabaseUserId();
  if (!ownerId) return;
  const { data, error } = await supabaseClient
    .from("ingredients")
    .insert({
      owner_id: ownerId,
      owner_email: item.ownerEmail || "",
      owner_name: item.ownerName || "",
      company: item.company || "",
      company_website: normalizeWebsite(item.companyWebsite || ""),
      name: item.name,
      english_name: item.englishName || "",
      origin: item.origin || "",
      origin_flag_code: item.originFlagCode || getCountryFlagCode(item.origin || ""),
      manufacturer: item.manufacturer || "",
      manufacturer_visibility: item.manufacturerVisibility || "public",
      category: item.category || "",
      use: item.use || "",
      cert: item.cert || "",
      moq: item.moq || "",
      lead_time: item.leadTime || "",
      sample: item.sample || "가능",
      response: item.response || "샘플·견적 모두 가능",
      description: item.desc || "",
    })
    .select()
    .single();
  if (!error && data) {
    remoteRegisteredIngredients = [mapIngredientRow(data), ...remoteRegisteredIngredients.filter((next) => next.id !== data.id)];
  }
}

async function saveCommunityPostToSupabase(post) {
  if (!supabaseClient) return;
  const ownerId = await getSupabaseUserId();
  if (!ownerId) return;
  const { data, error } = await supabaseClient
    .from("community_posts")
    .insert({
      owner_id: ownerId,
      author: post.author || "",
      title: post.title,
      description: post.desc || "",
      views: Number(post.views || 0),
    })
    .select()
    .single();
  if (!error && data) {
    remoteCommunityPosts = [mapCommunityRow(data), ...remoteCommunityPosts.filter((next) => next.id !== data.id)];
  }
}

async function savePartnerPostToSupabase(post) {
  if (!supabaseClient) return;
  const ownerId = await getSupabaseUserId();
  if (!ownerId) return;
  const { data, error } = await supabaseClient
    .from("partner_posts")
    .insert({
      owner_id: ownerId,
      post_type: post.postType || "inquiry",
      mode: post.mode || "OEM",
      trade: post.trade || "구매",
      title: post.title,
      company: post.company || "",
      business: post.business || "",
      description: post.desc || "",
      author: post.author || "",
      views: Number(post.views || 0),
    })
    .select()
    .single();
  if (!error && data) {
    remotePartnerPosts = [mapPartnerRow(data), ...remotePartnerPosts.filter((next) => next.id !== data.id)];
  }
}

function getMigratedBoardItemIds() {
  try {
    return JSON.parse(localStorage.getItem("foodsourceMigratedBoardItems") || "[]");
  } catch {
    return [];
  }
}

function setMigratedBoardItemIds(ids) {
  localStorage.setItem("foodsourceMigratedBoardItems", JSON.stringify([...new Set(ids)]));
}

function isIngredientAlreadyRemote(item) {
  const identity = getIngredientIdentity(item);
  return remoteRegisteredIngredients.some((remoteItem) => getIngredientIdentity(remoteItem) === identity);
}

function isCommunityPostAlreadyRemote(post) {
  const identity = `${post.title || ""}|${post.author || ""}|${post.desc || ""}`.toLowerCase();
  return remoteCommunityPosts.some((remotePost) => `${remotePost.title || ""}|${remotePost.author || ""}|${remotePost.desc || ""}`.toLowerCase() === identity);
}

async function syncLocalBoardsToSupabase() {
  if (!supabaseClient || !getCurrentMember()) return;
  const migratedIds = new Set(getMigratedBoardItemIds());
  const nextMigratedIds = new Set(migratedIds);

  const localIngredients = getRegisteredIngredients().filter((item) => item.id && !migratedIds.has(`ingredient:${item.id}`));
  for (const item of localIngredients) {
    if (!isIngredientAlreadyRemote(item)) {
      await saveIngredientToSupabase(item);
    }
    nextMigratedIds.add(`ingredient:${item.id}`);
  }

  const localCommunityPosts = getSavedCommunityPosts().filter((post) => post.id && !migratedIds.has(`community:${post.id}`));
  for (const post of localCommunityPosts) {
    if (!isCommunityPostAlreadyRemote(post)) {
      await saveCommunityPostToSupabase(post);
    }
    nextMigratedIds.add(`community:${post.id}`);
  }

  setMigratedBoardItemIds([...nextMigratedIds]);
}

async function initializeSupabaseBoards() {
  await restoreSupabaseSession();
  await loadSupabaseBoardData();
  await syncLocalBoardsToSupabase();
  await loadSupabaseBoardData();
}

function getLocalVisitorId() {
  const key = "foodsourceVisitorId";
  let visitorId = localStorage.getItem(key);
  if (!visitorId) {
    visitorId = `local-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    localStorage.setItem(key, visitorId);
  }
  return visitorId;
}

async function getVisitorIpKey() {
  try {
    const response = await fetch("https://api.ipify.org?format=json", { cache: "no-store" });
    if (!response.ok) throw new Error("ip");
    const data = await response.json();
    return data.ip ? `ip-${data.ip}` : getLocalVisitorId();
  } catch {
    return getLocalVisitorId();
  }
}

async function trackVisit() {
  const today = new Date().toISOString().slice(0, 10);
  const path = window.location.pathname.split("/").pop() || "index.html";
  const visitorKey = await getVisitorIpKey();
  let visits = {};
  try {
    visits = JSON.parse(localStorage.getItem("foodsourceVisits")) || {};
  } catch {
    visits = {};
  }

  visits[today] = visits[today] || { count: 0, pages: {}, ips: [] };
  visits[today].ips = Array.isArray(visits[today].ips) ? visits[today].ips : [];
  const alreadyCountedToday = visits[today].ips.includes(visitorKey);
  if (!alreadyCountedToday) {
    visits[today].ips.push(visitorKey);
    visits[today].count = visits[today].ips.length;
  }
  visits[today].pages[path] = visits[today].pages[path] || [];
  if (Array.isArray(visits[today].pages[path])) {
    if (!visits[today].pages[path].includes(visitorKey)) visits[today].pages[path].push(visitorKey);
  } else {
    visits[today].pages[path] = [visitorKey];
  }
  localStorage.setItem("foodsourceVisits", JSON.stringify(visits));
  renderAdminStats();
  renderAdminVisits();
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
  saveCommunityPostToSupabase(post).then(() => updateCommunityPosts()).catch(() => {});
}

function incrementCommunityPostViews(postId) {
  let updated = false;
  const savedPosts = getSavedCommunityPosts().map((post) => {
    if (post.id !== postId) return post;
    updated = true;
    return { ...post, views: Number(post.views || 0) + 1 };
  });
  if (updated) {
    setSavedCommunityPosts(savedPosts);
    return;
  }

  const defaultPost = communityPosts.find((post) => post.id === postId);
  if (defaultPost) {
    defaultPost.views = Number(defaultPost.views || 0) + 1;
  }
}

function getPartnerPostKey() {
  return "foodsourcePartnerPosts";
}

function getSavedPartnerPosts() {
  try {
    return JSON.parse(localStorage.getItem(getPartnerPostKey())) || [];
  } catch {
    return [];
  }
}

function setSavedPartnerPosts(items) {
  localStorage.setItem(getPartnerPostKey(), JSON.stringify(items));
}

function savePartnerPost(post) {
  setSavedPartnerPosts([post, ...getSavedPartnerPosts()]);
  savePartnerPostToSupabase(post).then(() => updatePartnerPosts()).catch(() => {});
}

function incrementPartnerPostViews(postId) {
  let updated = false;
  const savedPosts = getSavedPartnerPosts().map((post) => {
    if (post.id !== postId) return post;
    updated = true;
    return { ...post, views: Number(post.views || 0) + 1 };
  });
  if (updated) {
    setSavedPartnerPosts(savedPosts);
    return;
  }

  const defaultPost = partnerPosts.find((post) => post.id === postId);
  if (defaultPost) {
    defaultPost.views = Number(defaultPost.views || 0) + 1;
  }
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
  setMembers(nextMembers);
  setCurrentMember(member);
}

async function logoutCurrentMember() {
  if (supabaseClient) {
    try {
      await supabaseClient.auth.signOut();
    } catch {
      // Local logout should still complete if Supabase is temporarily unavailable.
    }
  }
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
  saveIngredientToSupabase(item).then(() => updateGrid()).catch(() => {});
}

function saveRegisteredIngredients(items) {
  const key = getRegisteredIngredientKey();
  if (!key || !items.length) return;
  localStorage.setItem(key, JSON.stringify([...items, ...getRegisteredIngredients()]));
  Promise.all(items.map((item) => saveIngredientToSupabase(item))).then(() => updateGrid()).catch(() => {});
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
    senderPhone: member.phone || "",
    senderWebsite: member.companyWebsite || "",
  };

  saveMessageToCurrentUser({
    id: `sent-${Date.now()}`,
    partner: recipientLabel,
    partnerCompany: recipient?.company || "",
    partnerEmail: recipient?.email || "",
    partnerPhone: recipient?.phone || "",
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
      partnerPhone: member.phone || "",
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
  const senderPhone = member.phone || "";
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
    `연락처: ${senderPhone || "확인 필요"}`,
    "",
    `원료: ${ingredient.name} (${ingredient.englishName})`,
    `제조사/공급사: ${maker}`,
    "원하면 이 대화창에서 바로 답장할 수 있습니다.",
  ].join("\n");

  saveMessageToCurrentUser({
    id: `sent-inquiry-${Date.now()}`,
    partner: recipientLabel,
    partnerCompany: recipient.company || "",
    partnerEmail: recipient.email || "",
    partnerPhone: recipient.phone || "",
    partnerWebsite: recipient.companyWebsite || "",
    sender: senderLabel,
    senderCompany,
    senderEmail,
    senderPhone,
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
    partnerPhone: senderPhone,
    partnerWebsite: senderWebsite,
    sender: senderLabel,
    senderCompany,
    senderEmail,
    senderPhone,
    senderWebsite,
    body,
    direction: "received",
    read: false,
    createdAt,
    inquiryType,
    ingredientId,
  });
  updateAuthLinks();
  alert(`${getInquirySubjectText(inquiryType)} 쪽지로 전달되었습니다.`);
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
  const phone = source.partnerPhone || source.senderPhone || "";
  return { company, email, phone };
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

function formatRelativeDate(value) {
  try {
    const diff = Date.now() - new Date(value).getTime();
    if (Number.isNaN(diff) || diff < 60000) return "방금 전";
    if (diff < 3600000) return `${Math.floor(diff / 60000)}분 전`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}시간 전`;
    return new Intl.DateTimeFormat("ko-KR", {
      month: "2-digit",
      day: "2-digit",
    }).format(new Date(value));
  } catch {
    return "방금 전";
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
          const metaText = [partnerMeta.company, partnerMeta.email, partnerMeta.phone].filter(Boolean).join(" · ");
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
          const text = [meta.company, meta.email, meta.phone].filter(Boolean).join(" · ");
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
    partnerPhone: recipient?.phone || "",
    partnerWebsite: recipient?.companyWebsite || "",
    sender: senderLabel,
    senderCompany: member.company || "",
    senderEmail: member.email || "",
    senderPhone: member.phone || "",
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
      partnerPhone: member.phone || "",
      partnerWebsite: member.companyWebsite || "",
      sender: senderLabel,
      senderCompany: member.company || "",
      senderEmail: member.email || "",
      senderPhone: member.phone || "",
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
  const members = getMembers();
  const memberMap = new Map(members.map((member) => [normalizeEmail(member.email), member]));
  const ingredientEmails = new Set(members.map((member) => normalizeEmail(member.email)).filter(Boolean));

  for (let index = 0; index < localStorage.length; index += 1) {
    const key = localStorage.key(index);
    if (!key || !key.startsWith("foodsourceRegisteredIngredients:")) continue;
    const email = normalizeEmail(key.replace("foodsourceRegisteredIngredients:", ""));
    if (email) ingredientEmails.add(email);
  }

  return [...ingredientEmails].flatMap((email) => {
    const member = memberMap.get(email) || {
      email,
      name: email,
      nickname: email,
      company: "",
      companyWebsite: "",
    };
    const items = getRegisteredIngredientsByEmail(email);
    return items.map((item) => ({
      ...item,
      ownerName: getDisplayName(member),
      ownerEmail: email,
      company: item.company || member.company || "",
      companyWebsite: item.companyWebsite || member.companyWebsite || "",
    }));
  });
}

function getRegisteredIngredientsByEmail(email) {
  if (!email) return [];
  try {
    return JSON.parse(localStorage.getItem(`foodsourceRegisteredIngredients:${email}`)) || [];
  } catch {
    return [];
  }
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
  renderAdminCommunityPosts();
  renderAdminMessages();
}

function renderAdminStats() {
  if (!adminStatGrid) return;

  const members = getMembers();
  const ingredients = getAllRegisteredIngredientsByMember();
  const messages = getAllMessagesByMember();
  const communityItems = getSavedCommunityPosts();
  const visits = getVisitStats();
  const totalVisits = Object.values(visits).reduce((sum, day) => sum + (day.ips?.length || day.count || 0), 0);

  const stats = [
    ["오늘 접속", `${getTodayVisitCount()}명`],
    ["누적 접속", `${totalVisits}명`],
    ["회원", `${members.length}명`],
    ["등록 원료", `${ingredients.length}개`],
    ["원료문의", `${communityItems.length}개`],
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
    const registeredItems = getRegisteredIngredientsByEmail(member.email);
    const registeredText = registeredItems
      .map((item) =>
        [
          item.company,
          item.companyWebsite,
          item.name,
          item.englishName,
          item.manufacturer,
          item.origin,
          item.category,
        ]
          .filter(Boolean)
          .join(" ")
      )
      .join(" ");
    const text = `${member.name} ${member.nickname || ""} ${member.email} ${member.company || ""} ${member.companyWebsite || ""} ${member.phone || ""} ${registeredText}`.toLowerCase();
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
            .map(([page, value]) => [page, Array.isArray(value) ? value.length : value])
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(([page, count]) => `${page} ${count}`)
            .join(" · ");
          return `
            <article class="admin-list-row">
              <strong>${day}</strong>
              <span>${visits[day].ips?.length || visits[day].count || 0}명</span>
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
                <div class="admin-row-actions">
                  <button class="admin-small-button danger-button" type="button" data-admin-delete-ingredient="${escapeHtml(item.id)}" data-admin-delete-ingredient-owner="${escapeHtml(item.ownerEmail)}">삭제</button>
                </div>
              </article>
            `;
          }
        )
        .join("")
    : '<p class="empty-mini">등록된 원료가 없습니다.</p>';
}

function renderAdminCommunityPosts() {
  if (!adminCommunityList) return;

  const posts = getSavedCommunityPosts();
  adminCommunityList.innerHTML = posts.length
    ? posts
        .map(
          (post) => `
            <article class="admin-list-row">
              <strong>${escapeHtml(post.title || "제목 없음")}</strong>
              <span>${escapeHtml(post.author || "-")} · ${formatNewsDate(post.createdAt)}</span>
              <p>${escapeHtml(post.desc || "")}</p>
              <div class="admin-row-actions">
                <button class="admin-small-button danger-button" type="button" data-admin-delete-community="${escapeHtml(post.id)}">삭제</button>
              </div>
            </article>
          `
        )
        .join("")
    : '<p class="empty-mini">회원이 등록한 원료문의 글이 없습니다.</p>';
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
  setMembers(members);
  localStorage.removeItem(`foodsourceFavorites:${email}`);
  localStorage.removeItem(`foodsourceMessages:${email}`);
  localStorage.removeItem(`foodsourceRegisteredIngredients:${email}`);
  if (current?.email === email) {
    localStorage.removeItem("foodsourceCurrentMember");
  }
  updateAuthLinks();
  renderAdminPage();
}

function deleteAdminIngredient(ownerEmail, ingredientId) {
  if (!ownerEmail || !ingredientId) return;
  const key = `foodsourceRegisteredIngredients:${ownerEmail}`;
  const items = getRegisteredIngredientsByEmail(ownerEmail).filter((item) => item.id !== ingredientId);
  localStorage.setItem(key, JSON.stringify(items));
  renderAdminPage();
}

function deleteAdminCommunityPost(postId) {
  if (!postId) return;
  setSavedCommunityPosts(getSavedCommunityPosts().filter((post) => post.id !== postId));
  const comments = getCommunityComments();
  delete comments[postId];
  localStorage.setItem("foodsourceCommunityComments", JSON.stringify(comments));
  renderAdminPage();
}

function setAdminBackupMessage(message, type = "") {
  if (!adminBackupMessage) return;
  adminBackupMessage.textContent = message;
  adminBackupMessage.className = `form-message ${type}`.trim();
}

function getFoodSourceStorageSnapshot() {
  const data = {};
  for (let index = 0; index < localStorage.length; index += 1) {
    const key = localStorage.key(index);
    if (!key || !key.startsWith("foodsource")) continue;
    data[key] = localStorage.getItem(key);
  }
  return {
    exportedAt: new Date().toISOString(),
    origin: window.location.origin,
    data,
  };
}

function downloadAdminDataBackup() {
  const snapshot = getFoodSourceStorageSnapshot();
  const blob = new Blob([JSON.stringify(snapshot, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `foodsourcing-backup-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
  setAdminBackupMessage("백업 파일을 만들었습니다.", "success");
}

function parseBackupValue(value) {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

function mergeArrayById(currentValue, incomingValue) {
  const current = Array.isArray(currentValue) ? currentValue : [];
  const incoming = Array.isArray(incomingValue) ? incomingValue : [];
  const map = new Map(current.map((item) => [item?.id || JSON.stringify(item), item]));
  incoming.forEach((item) => {
    map.set(item?.id || JSON.stringify(item), item);
  });
  return [...map.values()];
}

function mergeObjectArrays(currentValue, incomingValue) {
  const current = currentValue && typeof currentValue === "object" && !Array.isArray(currentValue) ? currentValue : {};
  const incoming = incomingValue && typeof incomingValue === "object" && !Array.isArray(incomingValue) ? incomingValue : {};
  const next = { ...current };
  Object.entries(incoming).forEach(([key, value]) => {
    next[key] = mergeArrayById(next[key], value);
  });
  return next;
}

function importAdminDataBackup(snapshot) {
  const data = snapshot?.data && typeof snapshot.data === "object" ? snapshot.data : snapshot;
  if (!data || typeof data !== "object") throw new Error("invalid-backup");

  let importedCount = 0;
  Object.entries(data).forEach(([key, rawValue]) => {
    if (!key.startsWith("foodsource")) return;
    const incoming = parseBackupValue(rawValue);
    const current = parseBackupValue(localStorage.getItem(key));
    let nextValue = incoming;

    if (key === "foodsourceCommunityComments") {
      nextValue = mergeObjectArrays(current, incoming);
    } else if (Array.isArray(current) || Array.isArray(incoming)) {
      nextValue = mergeArrayById(current, incoming);
    }

    localStorage.setItem(key, typeof nextValue === "string" ? nextValue : JSON.stringify(nextValue));
    importedCount += 1;
  });

  ensureDefaultAdminMember();
  updateAuthLinks();
  updateGrid();
  updateCommunityPosts();
  updatePartnerPosts();
  renderAdminPage();
  return importedCount;
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
          <div class="news-card-body">
            <div class="news-tags">
              <span>${escapeHtml(item.sourceLabel || item.category || "NEWS")}</span>
              <span>${escapeHtml(item.source || "Food Sourcing")}</span>
            </div>
            <time datetime="${escapeHtml(item.publishedAt || "")}">${formatNewsDate(item.publishedAt)}</time>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.summary || "")}</p>
          </div>
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

  const pagination = getPaginationState(posts, communityCurrentPage, communityPageSize);
  communityCurrentPage = pagination.page;

  communityList.innerHTML = pagination.items
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
  communityList.insertAdjacentHTML("beforeend", getPaginationControls("community", communityCurrentPage, pagination.totalPages, communityPageSize));

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
  const shouldOpen = activeCommunityPostId !== postId;
  activeCommunityPostId = shouldOpen ? postId : "";
  if (shouldOpen) incrementCommunityPostViews(postId);
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

function setCommunityPageSize(size) {
  communityPageSize = Number(size) === 50 ? 50 : 10;
  communityCurrentPage = 1;
  updateCommunityPosts();
}

function setCommunityPage(page) {
  communityCurrentPage = Number(page) || 1;
  updateCommunityPosts();
}

function getVisibleCommunityPosts() {
  return [...remoteCommunityPosts, ...getSavedCommunityPosts(), ...communityPosts].filter(
    (post, index, posts) => {
      const identity = `${post.title || ""}|${post.author || ""}|${post.desc || ""}`.toLowerCase();
      return posts.findIndex((next) => next.id === post.id || `${next.title || ""}|${next.author || ""}|${next.desc || ""}`.toLowerCase() === identity) === index;
    }
  );
}

function getVisiblePartnerPosts() {
  return [...remotePartnerPosts, ...getSavedPartnerPosts(), ...partnerPosts].filter(
    (post, index, posts) => {
      const identity = `${post.title || ""}|${post.author || ""}|${post.company || ""}|${post.desc || ""}`.toLowerCase();
      return posts.findIndex((next) => next.id === post.id || `${next.title || ""}|${next.author || ""}|${next.company || ""}|${next.desc || ""}`.toLowerCase() === identity) === index;
    }
  );
}

function getPartnerPostTypeLabel(type) {
  return type === "register" ? "등록" : "문의";
}

function renderPartnerPosts(posts) {
  if (!partnerList) return;

  if (!posts.length) {
    partnerList.innerHTML = '<div class="empty-state">조건에 맞는 협력업체 글이 없습니다.</div>';
    return;
  }

  const pagination = getPaginationState(posts, partnerCurrentPage, partnerPageSize);
  partnerCurrentPage = pagination.page;

  partnerList.innerHTML = pagination.items
    .map(
      (post) => `
        <article class="partner-post" role="button" tabindex="0" data-partner-post-id="${post.id}">
          <div class="partner-post-main">
            <div class="partner-post-title">
              <span class="partner-badge mode">${escapeHtml(post.mode || "OEM")}</span>
              <span class="partner-badge trade ${post.trade === "판매" ? "sale" : "buy"}">${escapeHtml(post.trade || "구매")}</span>
              <h3>${escapeHtml(post.title)}</h3>
            </div>
            <div class="partner-meta">
              <span>기업명 : ${escapeHtml(post.company || "확인 필요")}</span>
              <span>신청자업종 : ${escapeHtml(post.business || "확인 필요")}</span>
            </div>
          </div>
        </article>
        ${activePartnerPostId === post.id ? getPartnerDetailMarkup(post) : ""}
      `
    )
    .join("");

  partnerList.insertAdjacentHTML("beforeend", getPaginationControls("partners", partnerCurrentPage, pagination.totalPages, partnerPageSize));
}

function getPartnerDetailMarkup(post) {
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
    <section class="community-detail partner-detail" data-detail-partner-id="${post.id}" aria-label="${escapeHtml(post.title)} 상세">
      <article class="detail-post">
        <div class="detail-head">
          <h2>${escapeHtml(post.title)}</h2>
          <div class="detail-meta">
            <span>${getPartnerPostTypeLabel(post.postType)}</span>
            <span>${escapeHtml(post.mode || "OEM")}</span>
            <span>${escapeHtml(post.trade || "구매")}</span>
            <button class="message-user-button detail-author" type="button" data-message-user="${escapeHtml(post.author)}">${escapeHtml(post.author)}</button>
            <span>조회 ${Number(post.views || 0)}</span>
            <span>댓글 ${comments.length}</span>
          </div>
        </div>
        <div class="partner-detail-meta">
          <span>기업명</span><strong>${escapeHtml(post.company || "확인 필요")}</strong>
          <span>신청자업종</span><strong>${escapeHtml(post.business || "확인 필요")}</strong>
        </div>
        <p>${escapeHtml(post.desc || "")}</p>
        <div class="detail-actions">
          <button class="outline-button" type="button" data-message-user="${escapeHtml(post.author)}">쪽지 보내기</button>
        </div>
      </article>
      <section class="comment-panel" aria-label="댓글">
        <div class="comment-title">
          <h3>댓글</h3>
          <span>${comments.length}개</span>
        </div>
        <div class="comment-list">${commentsMarkup}</div>
        <form class="comment-form" data-partner-comment-form data-post-id="${post.id}">
          <input name="author" type="text" placeholder="닉네임" value="${escapeHtml(defaultName)}" ${member ? "readonly" : ""} required />
          <textarea name="body" placeholder="댓글을 입력하세요" required></textarea>
          <button class="primary-button" type="submit">댓글 등록</button>
        </form>
      </section>
    </section>
  `;
}

function openPartnerDetail(postId) {
  const shouldOpen = activePartnerPostId !== postId;
  activePartnerPostId = shouldOpen ? postId : "";
  if (shouldOpen) incrementPartnerPostViews(postId);
  updatePartnerPosts();
}

function updatePartnerPosts() {
  if (!partnerSearch) return;

  const query = partnerSearch.value.trim().toLowerCase();
  const posts = getVisiblePartnerPosts().filter((post) => {
    return (
      !query ||
      post.title.toLowerCase().includes(query) ||
      (post.desc || "").toLowerCase().includes(query) ||
      (post.company || "").toLowerCase().includes(query) ||
      (post.business || "").toLowerCase().includes(query) ||
      getPartnerPostTypeLabel(post.postType).toLowerCase().includes(query) ||
      (post.mode || "").toLowerCase().includes(query) ||
      (post.trade || "").toLowerCase().includes(query)
    );
  });

  renderPartnerPosts(posts);
}

function setPartnerPageSize(size) {
  partnerPageSize = Number(size) === 50 ? 50 : 10;
  partnerCurrentPage = 1;
  updatePartnerPosts();
}

function setPartnerPage(page) {
  partnerCurrentPage = Number(page) || 1;
  updatePartnerPosts();
}

function setPartnerWriteType(type) {
  if (!partnerWriteForm) return;
  const isRegister = type === "register";
  partnerWriteForm.dataset.partnerFormType = isRegister ? "register" : "inquiry";
  if (partnerFormTitle) partnerFormTitle.textContent = isRegister ? "협력사 등록" : "협력사 문의";
  if (partnerFormGuide) {
    partnerFormGuide.textContent = isRegister
      ? "우리 회사가 제공 가능한 OEM, ODM 협력 내용을 등록하세요."
      : "필요한 OEM, ODM 협력사를 찾는 문의 내용을 입력하세요.";
  }
  if (partnerDescLabel) partnerDescLabel.textContent = isRegister ? "제공 가능 내용" : "문의 내용";
  if (partnerPostTitle) {
    partnerPostTitle.placeholder = isRegister
      ? "즙 제조 ODM 협력사로 등록합니다"
      : "닭가슴살 OEM 업체를 찾습니다";
  }
  if (partnerPostCompany) {
    partnerPostCompany.placeholder = isRegister ? "등록 기업명" : "문의 기업명";
  }
  if (partnerPostBusiness) {
    partnerPostBusiness.placeholder = isRegister ? "제조, OEM, ODM, 유통" : "제조, 유통, 브랜드";
  }
  if (partnerPostDesc) {
    partnerPostDesc.placeholder = isRegister
      ? "제공 가능한 제품군, 생산 설비, 최소 수량, 인증, 협력 조건을 입력하세요"
      : "필요한 제품, 생산 규모, 원하는 협력 조건을 입력하세요";
  }
}

if (grid && searchInput) {
  document.querySelector(".search-panel").addEventListener("submit", (event) => {
    event.preventDefault();
    updateGrid();
  });

  grid.addEventListener("click", (event) => {
    const pageSizeButton = event.target.closest("[data-pagination-scope='ingredients'] [data-page-size]");
    if (pageSizeButton) {
      event.stopPropagation();
      setIngredientPageSize(pageSizeButton.dataset.pageSize);
      return;
    }
    const pageButton = event.target.closest("[data-pagination-scope='ingredients'] [data-page-number]");
    if (pageButton) {
      event.stopPropagation();
      setIngredientPage(pageButton.dataset.pageNumber);
      return;
    }
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

  searchInput.addEventListener("input", () => {
    ingredientCurrentPage = 1;
    updateGrid();
  });
  filterInputs.forEach((input) =>
    input.addEventListener("change", () => {
      ingredientCurrentPage = 1;
      updateGrid();
    })
  );

  resetButton.addEventListener("click", () => {
    filterInputs.forEach((input) => {
      input.checked = false;
    });
    searchInput.value = "";
    ingredientCurrentPage = 1;
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
    const pageSizeButton = event.target.closest("[data-pagination-scope='community'] [data-page-size]");
    if (pageSizeButton) {
      event.stopPropagation();
      setCommunityPageSize(pageSizeButton.dataset.pageSize);
      return;
    }
    const pageButton = event.target.closest("[data-pagination-scope='community'] [data-page-number]");
    if (pageButton) {
      event.stopPropagation();
      setCommunityPage(pageButton.dataset.pageNumber);
      return;
    }
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

  communitySearch.addEventListener("input", () => {
    communityCurrentPage = 1;
    updateCommunityPosts();
  });
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
    communityCurrentPage = 1;
    updateCommunityPosts();
  });
}

if (partnerList && partnerSearch) {
  partnerList.addEventListener("click", (event) => {
    const pageSizeButton = event.target.closest("[data-pagination-scope='partners'] [data-page-size]");
    if (pageSizeButton) {
      event.stopPropagation();
      setPartnerPageSize(pageSizeButton.dataset.pageSize);
      return;
    }
    const pageButton = event.target.closest("[data-pagination-scope='partners'] [data-page-number]");
    if (pageButton) {
      event.stopPropagation();
      setPartnerPage(pageButton.dataset.pageNumber);
      return;
    }
    const messageUser = event.target.closest("[data-message-user]");
    if (messageUser) {
      event.preventDefault();
      event.stopPropagation();
      openMessageComposer(messageUser.dataset.messageUser);
      return;
    }

    if (event.target.closest(".partner-detail")) return;
    const post = event.target.closest(".partner-post");
    if (!post) return;
    openPartnerDetail(post.dataset.partnerPostId);
  });

  partnerList.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const post = event.target.closest(".partner-post");
    if (!post) return;
    event.preventDefault();
    openPartnerDetail(post.dataset.partnerPostId);
  });

  partnerList.addEventListener("submit", (event) => {
    const form = event.target.closest("[data-partner-comment-form]");
    if (!form) return;

    event.preventDefault();
    const member = getCurrentMember();
    if (!member) {
      window.location.href = "login.html";
      return;
    }
    const postId = form.dataset.postId;
    const author = form.elements.author.value.trim();
    const body = form.elements.body.value.trim();

    if (!author || !body) return;

    savePostComment(postId, {
      author,
      body,
      createdAt: new Date().toISOString(),
    });
    activePartnerPostId = postId;
    updatePartnerPosts();
  });

  partnerSearch.addEventListener("input", () => {
    partnerCurrentPage = 1;
    updatePartnerPosts();
  });
}

if (partnerWriteButtons.length && partnerWriteForm) {
  partnerWriteButtons.forEach((button) => button.addEventListener("click", () => {
    const member = getCurrentMember();
    if (!member) {
      window.location.href = "login.html";
      return;
    }

    const type = button.dataset.partnerWriteType || "inquiry";
    const shouldOpen = partnerWriteForm.hidden || partnerWriteForm.dataset.partnerFormType !== type;
    setPartnerWriteType(type);
    partnerWriteForm.hidden = !shouldOpen;
    partnerPostAuthor.value = getDisplayName(member);
    partnerPostCompany.value = member.company || "";
    if (!partnerWriteForm.hidden) {
      partnerPostTitle.focus();
    }
  }));
}

if (partnerWriteCancel && partnerWriteForm) {
  partnerWriteCancel.addEventListener("click", () => {
    partnerWriteForm.reset();
    partnerWriteForm.hidden = true;
    if (partnerWriteMessage) partnerWriteMessage.textContent = "";
  });
}

if (partnerWriteForm) {
  partnerWriteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const member = getCurrentMember();
    if (!member) {
      window.location.href = "login.html";
      return;
    }

    const title = partnerPostTitle.value.trim();
    const company = partnerPostCompany.value.trim();
    const desc = partnerPostDesc.value.trim();
    if (!title || !company || !desc) return;

    savePartnerPost({
      id: `partner-${Date.now()}`,
      postType: partnerWriteForm.dataset.partnerFormType || "inquiry",
      mode: partnerPostMode.value,
      trade: partnerPostTrade.value,
      title,
      company,
      business: partnerPostBusiness.value.trim() || "확인 필요",
      desc,
      author: getDisplayName(member),
      date: "방금 전",
      views: 0,
      createdAt: new Date().toISOString(),
    });
    partnerWriteForm.reset();
    partnerWriteForm.hidden = true;
    if (partnerWriteMessage) partnerWriteMessage.textContent = "";
    activePartnerPostId = "";
    partnerCurrentPage = 1;
    updatePartnerPosts();
  });
}

if (suggestionForm) {
  suggestionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const body = suggestionForm.querySelector("#suggestionBody").value.trim();

    if (!body) return;

    const mailBody = [
      body,
      "",
      `보낸 페이지: ${window.location.href}`,
    ]
      .filter((line) => line !== "")
      .join("\n");
    const mailto = `mailto:foden_@naver.com?subject=${encodeURIComponent("[푸드소싱 건의사항]")}&body=${encodeURIComponent(mailBody)}`;

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

if (adminIngredientList) {
  adminIngredientList.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-admin-delete-ingredient]");
    if (!deleteButton) return;

    const ingredientId = deleteButton.dataset.adminDeleteIngredient;
    const ownerEmail = deleteButton.dataset.adminDeleteIngredientOwner;
    if (confirm("이 원료 등록글을 삭제할까요?")) {
      deleteAdminIngredient(ownerEmail, ingredientId);
    }
  });
}

if (adminCommunityList) {
  adminCommunityList.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-admin-delete-community]");
    if (!deleteButton) return;

    if (confirm("이 원료문의 게시글과 댓글을 삭제할까요?")) {
      deleteAdminCommunityPost(deleteButton.dataset.adminDeleteCommunity);
    }
  });
}

if (adminExportDataButton) {
  adminExportDataButton.addEventListener("click", downloadAdminDataBackup);
}

if (adminImportDataInput) {
  adminImportDataInput.addEventListener("change", async () => {
    const file = adminImportDataInput.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const snapshot = JSON.parse(text);
      const count = importAdminDataBackup(snapshot);
      setAdminBackupMessage(`${count}개 데이터 묶음을 가져왔습니다. 원료찾기와 원료문의에서 확인해주세요.`, "success");
    } catch {
      setAdminBackupMessage("백업 파일을 가져오지 못했습니다. JSON 파일을 확인해주세요.", "error");
    } finally {
      adminImportDataInput.value = "";
    }
  });
}

logoutLinks.forEach((link) => {
  link.addEventListener("click", async (event) => {
    if (!getCurrentMember()) return;

    event.preventDefault();
    await logoutCurrentMember();
    window.location.href = "index.html";
  });
});

if (ingredientRegisterForm) {
  const registerFields = {
    name: document.querySelector("#registerName"),
    englishName: document.querySelector("#registerEnglishName"),
    company: document.querySelector("#registerCompany"),
    origin: document.querySelector("#registerOrigin"),
    manufacturer: document.querySelector("#registerManufacturer"),
    manufacturerVisibility: document.querySelectorAll("[name='registerManufacturerVisibility']"),
    category: document.querySelector("#registerCategory"),
    use: document.querySelector("#registerUse"),
    cert: document.querySelector("#registerCert"),
    moq: document.querySelector("#registerMoq"),
    leadTime: document.querySelector("#registerLeadTime"),
    sample: document.querySelector("#registerSample"),
    response: document.querySelector("#registerResponse"),
    desc: document.querySelector("#registerDesc"),
  };

  const registerMessage = document.querySelector("#registerMessage");

  function setRegisterMessage(message, type = "") {
    if (!registerMessage) return;
    registerMessage.textContent = message;
    registerMessage.className = `form-message ${type}`.trim();
  }

  function setCsvUploadMessage(message, type = "") {
    if (!csvUploadMessage) return;
    csvUploadMessage.textContent = message;
    csvUploadMessage.className = `form-message ${type}`.trim();
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

  function syncRegisterCompany() {
    const member = getCurrentMember();
    if (registerFields.company) {
      registerFields.company.value = member?.company || "";
    }
  }

  function parseCsv(text) {
    const rows = [];
    let row = [];
    let field = "";
    let inQuotes = false;

    for (let index = 0; index < text.length; index += 1) {
      const char = text[index];
      const next = text[index + 1];

      if (char === "\"" && inQuotes && next === "\"") {
        field += "\"";
        index += 1;
      } else if (char === "\"") {
        inQuotes = !inQuotes;
      } else if (char === "," && !inQuotes) {
        row.push(field.trim());
        field = "";
      } else if ((char === "\n" || char === "\r") && !inQuotes) {
        if (char === "\r" && next === "\n") index += 1;
        row.push(field.trim());
        if (row.some((value) => value !== "")) rows.push(row);
        row = [];
        field = "";
      } else {
        field += char;
      }
    }

    row.push(field.trim());
    if (row.some((value) => value !== "")) rows.push(row);
    return rows;
  }

  function normalizeCsvHeader(value) {
    return String(value || "").replace(/^\uFEFF/, "").replace(/\s+/g, "").toLowerCase();
  }

  function getCsvValue(row, headers, names) {
    for (const name of names) {
      const index = headers.indexOf(normalizeCsvHeader(name));
      if (index >= 0) return row[index] || "";
    }
    return "";
  }

  function normalizeCsvChoice(value, allowed, fallback) {
    const text = String(value || "").trim();
    return allowed.includes(text) ? text : fallback;
  }

  function normalizeManufacturerVisibility(value) {
    const text = String(value || "").trim().toLowerCase();
    if (text === "비공개" || text === "private") return "private";
    return "public";
  }

  function buildCsvIngredient(row, headers, member, index) {
    const origin = getCsvValue(row, headers, ["제조국", "원산지", "origin"]);
    const category = getCsvValue(row, headers, ["카테고리", "분류", "category"]);
    const now = new Date();
    return {
      id: `registered-csv-${Date.now()}-${index}`,
      name: getCsvValue(row, headers, ["원료명", "name"]),
      englishName: getCsvValue(row, headers, ["영문명", "englishName", "english"]),
      origin,
      originFlagCode: getCountryFlagCode(origin),
      manufacturer: getCsvValue(row, headers, ["제조사", "manufacturer"]),
      manufacturerVisibility: normalizeManufacturerVisibility(getCsvValue(row, headers, ["제조사공개여부", "제조사공개", "manufacturerVisibility"])),
      category,
      use: getCsvValue(row, headers, ["사용용도", "용도", "use"]),
      cert: getCsvValue(row, headers, ["인증", "cert"]),
      moq: getCsvValue(row, headers, ["MOQ", "moq"]),
      leadTime: getCsvValue(row, headers, ["리드타임", "leadTime"]),
      sample: normalizeCsvChoice(getCsvValue(row, headers, ["샘플제공", "샘플", "sample"]), ["가능", "협의", "불가"], "가능"),
      response: normalizeCsvChoice(getCsvValue(row, headers, ["응답방식", "response"]), ["샘플 요청 가능", "견적 문의 가능", "샘플·견적 모두 가능"], "샘플·견적 모두 가능"),
      desc: getCsvValue(row, headers, ["원료설명", "설명", "desc"]),
      company: member?.company || "",
      companyWebsite: member?.companyWebsite || "",
      ownerName: getDisplayName(member),
      ownerEmail: member?.email || "",
      createdAt: now.toISOString(),
      createdAtText: new Intl.DateTimeFormat("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(now),
    };
  }

  function downloadCsvTemplate() {
    const headers = ["원료명", "영문명", "제조국", "제조사", "제조사공개여부", "카테고리", "사용용도", "인증", "MOQ", "리드타임", "샘플제공", "응답방식", "원료설명"];
    const sample = ["알룰로스 시럽", "Allulose Syrup", "국내", "hubei", "공개", "기타", "음료, 저당 제품", "HACCP", "20kg", "즉시", "가능", "샘플·견적 모두 가능", "저당 제품 개발용 식품 원료"];
    const csv = `\uFEFF${headers.join(",")}\n${sample.map((value) => `"${String(value).replace(/"/g, "\"\"")}"`).join(",")}\n`;
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "food-sourcing-ingredients-template.csv";
    link.click();
    URL.revokeObjectURL(url);
  }

  ingredientRegisterForm.addEventListener("input", syncRegisterCompany);
  ingredientRegisterForm.addEventListener("change", syncRegisterCompany);
  ingredientRegisterForm.addEventListener("reset", () => {
    setRegisterMessage("", "");
    window.setTimeout(syncRegisterCompany, 0);
  });

  if (csvTemplateDownload) {
    csvTemplateDownload.addEventListener("click", downloadCsvTemplate);
  }

  if (csvIngredientUpload) {
    csvIngredientUpload.addEventListener("change", async () => {
      const member = getCurrentMember();
      const file = csvIngredientUpload.files?.[0];
      if (!member) {
        window.location.href = "login.html";
        return;
      }
      if (!file) return;
      if (!member.company) {
        setCsvUploadMessage("내정보에 회사명을 먼저 입력해주세요.", "error");
        csvIngredientUpload.value = "";
        return;
      }

      try {
        const text = await file.text();
        const rows = parseCsv(text);
        if (rows.length < 2) {
          setCsvUploadMessage("CSV에 헤더와 원료 데이터를 입력해주세요.", "error");
          return;
        }

        const headers = rows[0].map(normalizeCsvHeader);
        const items = rows
          .slice(1)
          .map((row, index) => buildCsvIngredient(row, headers, member, index))
          .filter((item) => item.name && item.englishName && item.origin && item.category && item.company);

        if (!items.length) {
          setCsvUploadMessage("등록 가능한 행이 없습니다. 원료명, 영문명, 제조국, 카테고리를 확인해주세요.", "error");
          return;
        }

        saveRegisteredIngredients(items);
        updateAuthLinks();
        setCsvUploadMessage(`${items.length}개 원료가 등록되었습니다. 원료찾기와 마이페이지에서 확인할 수 있습니다.`, "success");
      } catch {
        setCsvUploadMessage("CSV 파일을 읽지 못했습니다. 파일 형식을 확인해주세요.", "error");
      } finally {
        csvIngredientUpload.value = "";
      }
    });
  }

  ingredientRegisterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    syncRegisterCompany();
    const member = getCurrentMember();
    const companyName = member?.company || "";
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
      leadTime: registerFields.leadTime.value.trim(),
      sample: registerFields.sample.value.trim(),
      response: registerFields.response.value.trim(),
      desc: registerFields.desc.value.trim(),
      company: companyName,
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

    if (!item.name || !item.englishName || !item.origin || !item.category || !item.company) {
      setRegisterMessage("원료명, 영문명, 제조국, 카테고리와 내정보의 회사명이 필요합니다.", "error");
      return;
    }

    saveRegisteredIngredient(item);
    updateAuthLinks();
    ingredientRegisterForm.reset();
    setRegisterMessage("원료가 등록되었습니다. 원료찾기와 마이페이지에서 확인할 수 있습니다.", "success");
    window.setTimeout(syncRegisterCompany, 0);
  });

  syncRegisterCompany();
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

  signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const password = normalizePassword(signupFields.password.value);
    const confirm = normalizePassword(signupFields.confirm.value);
    const member = {
      name: signupFields.name.value.trim(),
      email: normalizeEmail(signupFields.email.value),
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
    if (members.some((item) => normalizeEmail(item.email) === member.email)) {
      setSignupMessage("이미 가입된 이메일입니다.", "error");
      return;
    }

    if (isNicknameTakenLocally(member.nickname, member.email) || (await isNicknameTakenInSupabase(member.nickname))) {
      setSignupMessage("이미 사용 중인 닉네임입니다.", "error");
      signupFields.nickname.focus();
      return;
    }

    const remoteSignup = await signUpWithSupabase(member, password);
    if (remoteSignup.skipped) {
      setSignupMessage("서버 연결을 확인한 뒤 다시 시도해주세요.", "error");
      return;
    }
    const remoteErrorMessage = String(remoteSignup.error?.message || "");
    const isRateLimited = remoteErrorMessage.toLowerCase().includes("rate limit");
    if (!remoteSignup.ok && remoteSignup.error) {
      if (isRateLimited) {
        setSignupMessage("요청이 많아 잠시 제한되었습니다. 잠시 후 다시 시도해주세요.", "error");
        return;
      }
      if (remoteErrorMessage.includes("public.profiles") || remoteErrorMessage.toLowerCase().includes("schema cache")) {
        setSignupMessage("서버 회원 테이블 설정이 필요합니다. 관리자에게 문의해주세요.", "error");
        return;
      }
      setSignupMessage(`Supabase 가입 오류: ${remoteSignup.error.message}`, "error");
      return;
    }

    members.push(member);
    setMembers(members);
    setCurrentMember(member);
    signupForm.reset();
    setSignupMessage("회원가입이 완료되었습니다.", "success");
    updateAuthLinks();
  });

  signupForm.addEventListener("reset", () => {
    window.setTimeout(() => setSignupMessage("", ""), 0);
  });

  signupFields.nickname.addEventListener("input", () => {
    const nickname = signupFields.nickname.value.trim();
    if (nickname && isNicknameTakenLocally(nickname, signupFields.email.value)) {
      setSignupMessage("이미 사용 중인 닉네임입니다.", "error");
      return;
    }
    if (signupMessage.textContent.includes("닉네임")) {
      setSignupMessage("", "");
    }
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
    leadTime: document.querySelector("#myIngredientLeadTime"),
    sample: document.querySelector("#myIngredientSample"),
    response: document.querySelector("#myIngredientResponse"),
    desc: document.querySelector("#myIngredientDesc"),
  };
  const myIngredientMessage = document.querySelector("#myIngredientMessage");
  const deleteMyIngredientButton = document.querySelector("#deleteMyIngredient");

  function setMyIngredientsFocus(focused) {
    if (!mypageLayout) return;
    mypageLayout.classList.toggle("ingredients-focus", focused);
    if (mypageReturnButton) mypageReturnButton.hidden = !focused;
  }

  function openMyIngredientsFocus() {
    setMyIngredientsFocus(true);
    if (window.location.hash !== "#my-ingredients") {
      history.replaceState(null, "", `${window.location.pathname}#my-ingredients`);
    }
    myIngredientsPanel?.scrollIntoView({ block: "start" });
  }

  function closeMyIngredientsFocus() {
    setMyIngredientsFocus(false);
    if (window.location.hash === "#my-ingredients") {
      history.replaceState(null, "", window.location.pathname);
    }
  }

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
    myIngredientFields.leadTime.value = item.leadTime || "";
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

  if (myIngredientsPanel) {
    myIngredientsPanel.addEventListener("click", (event) => {
      if (event.target.closest("input, select, textarea, button, [data-my-ingredient-id], .my-ingredient-detail")) return;
      openMyIngredientsFocus();
    });

    myIngredientsPanel.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      if (event.target.closest("input, select, textarea, button, [data-my-ingredient-id], .my-ingredient-detail")) return;
      event.preventDefault();
      openMyIngredientsFocus();
    });
  }

  if (mypageReturnButton) {
    mypageReturnButton.addEventListener("click", (event) => {
      event.stopPropagation();
      closeMyIngredientsFocus();
      mypageForm.scrollIntoView({ block: "start" });
    });
  }

  window.addEventListener("hashchange", () => {
    setMyIngredientsFocus(window.location.hash === "#my-ingredients");
  });

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
        leadTime: myIngredientFields.leadTime.value.trim(),
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
  setMyIngredientsFocus(window.location.hash === "#my-ingredients");
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

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = normalizeEmail(loginFields.email.value);
    const password = normalizePassword(loginFields.password.value);
    const remoteLogin = await signInWithSupabase(email, password);
    let member = null;

    if (remoteLogin.ok && remoteLogin.user) {
      const localMember = getMembers().find((item) => normalizeEmail(item.email) === email);
      const remoteMember = await getSupabaseProfileMember(remoteLogin.user);
      member = normalizeMember({
        ...localMember,
        ...remoteMember,
        email,
        password: localMember?.password || "",
      });
      updateStoredMember(member);
    } else {
      member = getMembers().find((item) => normalizeEmail(item.email) === email && normalizePassword(item.password) === password);
    }

    if (!member) {
      const remoteMessage = remoteLogin.error?.message ? ` (${remoteLogin.error.message})` : "";
      setLoginMessage(`이메일 또는 비밀번호를 확인해주세요.${remoteMessage}`, "error");
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

bindVisibilityChoiceRadios();
document.addEventListener("click", createClickRipple, true);
trackVisit();
ensureDefaultAdminMember();
initializeSupabaseBoards();
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
updatePartnerPosts();
loadNewsCards();
renderMessagesPage();
renderAdminPage();
