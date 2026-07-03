const ingredients = [
  {
    name: "완두 단백 분리물",
    englishName: "Pea Protein Isolate",
    desc: "대체육, 단백질 음료, 베이커리용 단백 원료",
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=900&q=80",
    badge: "응답 빠름",
    tags: ["대체식품", "HACCP", "국내재고", "소량샘플"],
  },
  {
    name: "저분자 콜라겐 펩타이드",
    englishName: "Hydrolyzed Collagen Peptide",
    desc: "음료와 젤리에 쓰기 좋은 건강기능 콘셉트 원료",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80",
    badge: "인기",
    tags: ["건강기능", "FSSC22000", "빠른견적", "소량샘플"],
  },
  {
    name: "알룰로스 시럽",
    englishName: "Allulose Syrup",
    desc: "저당 제품 개발에 쓰이는 감미 원료",
    image: "https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?auto=format&fit=crop&w=900&q=80",
    badge: "저당",
    tags: ["음료", "HACCP", "국내재고", "빠른견적"],
  },
  {
    name: "비트 레드 천연 색소",
    englishName: "Beet Red Color",
    desc: "젤리, 음료, 디저트용 식물 유래 색소",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80",
    badge: "클린라벨",
    tags: ["음료", "베이커리", "유기농", "소량샘플"],
  },
  {
    name: "귀리 베타글루칸",
    englishName: "Oat Beta-Glucan",
    desc: "시리얼, 쉐이크, 건강 스낵용 식이섬유 원료",
    image: "https://images.unsplash.com/photo-1614961233913-a5113a4a34ed?auto=format&fit=crop&w=900&q=80",
    badge: "기능성",
    tags: ["건강기능", "FSSC22000", "할랄", "빠른견적"],
  },
  {
    name: "천연 딸기향 베이스",
    englishName: "Natural Strawberry Flavor Base",
    desc: "유제품, 음료, 베이커리용 향료 베이스",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=900&q=80",
    badge: "커스텀",
    tags: ["음료", "베이커리", "HACCP", "국내재고"],
  },
];

const communityPosts = [
  {
    category: "원료 요청",
    title: "국내 재고 있는 완두 단백 80% 원료 찾습니다",
    desc: "대체육 시제품용으로 20kg 샘플 먼저 테스트 예정입니다. HACCP 또는 FSSC 자료가 있으면 좋겠습니다.",
    author: "HMR개발팀",
    date: "방금 전",
    comments: 8,
    views: 142,
  },
  {
    category: "규격 질문",
    title: "알룰로스 시럽 Brix 규격 비교해보신 분 있나요?",
    desc: "음료 적용 시 점도와 후미 차이가 궁금합니다. 국내산과 수입산 적용 경험을 공유받고 싶습니다.",
    author: "음료R&D",
    date: "18분 전",
    comments: 5,
    views: 96,
  },
  {
    category: "거래처 추천",
    title: "천연 딸기향 커스텀 잘하는 향료사 추천 부탁드립니다",
    desc: "요거트 베이스에 넣을 예정이고 산미가 강하지 않은 방향을 찾고 있습니다. MOQ 낮은 곳이면 더 좋습니다.",
    author: "브랜드PM",
    date: "1시간 전",
    comments: 12,
    views: 221,
  },
  {
    category: "법규·인증",
    title: "유기농 표시 가능한 코코아 분말 수입 서류 체크리스트",
    desc: "수입 원료를 소분 제품에 적용하려고 합니다. 원산지 증명, 유기 인증서 외에 확인해야 할 자료가 있을까요?",
    author: "품질관리자",
    date: "2시간 전",
    comments: 4,
    views: 188,
  },
  {
    category: "원료 요청",
    title: "냉동 망고 다이스 10mm, B2B 납품 가능한 업체 찾습니다",
    desc: "디저트 토핑용으로 월 300kg 정도 예상합니다. 당도 규격과 해동 후 드립 손실 자료가 필요합니다.",
    author: "디저트제조",
    date: "오늘",
    comments: 6,
    views: 174,
  },
];

const grid = document.querySelector("#ingredientGrid");
const searchInput = document.querySelector("#heroSearch");
const filterInputs = [...document.querySelectorAll(".filter-panel input")];
const resetButton = document.querySelector("#resetFilters");
const quickTags = [...document.querySelectorAll(".quick-tags button")];
const communityList = document.querySelector("#communityList");
const communitySearch = document.querySelector("#communitySearch");
const communityTabs = [...document.querySelectorAll("[data-community-tab]")];
const communityWriteForm = document.querySelector("#communityWrite");
const communityTitle = document.querySelector("#communityTitle");
const communityBody = document.querySelector("#communityBody");
const communityCategory = document.querySelector("#communityCategory");
const focusCommunityWrite = document.querySelector("#focusCommunityWrite");
let activeCommunityTab = "전체";

function renderCards(items) {
  if (!grid) return;

  if (!items.length) {
    grid.innerHTML = '<div class="empty-state">조건에 맞는 원료가 없습니다. 검색어 또는 필터를 줄여보세요.</div>';
    return;
  }

  grid.innerHTML = items
    .map(
      (item) => `
        <article class="ingredient-card">
          <div class="card-body">
            <span class="badge">${item.badge}</span>
            <h3>${item.name}</h3>
            <span class="english-name">${item.englishName}</span>
            <p>${item.desc}</p>
            <div class="meta-row">
              ${item.tags.slice(0, 3).map((tag) => `<span>${tag}</span>`).join("")}
            </div>
            <div class="card-actions">
              <div class="card-buttons">
                <button class="sample-button" type="button">샘플 요청</button>
                <button class="quote-button" type="button">견적 문의</button>
              </div>
            </div>
          </div>
        </article>
      `
    )
    .join("");
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

function renderCommunityPosts(posts) {
  if (!communityList) return;

  if (!posts.length) {
    communityList.innerHTML = '<div class="empty-state">조건에 맞는 게시글이 없습니다.</div>';
    return;
  }

  communityList.innerHTML = posts
    .map(
      (post) => `
        <article class="community-post">
          <div>
            <span class="post-category">${post.category}</span>
            <h3>${post.title}</h3>
            <p>${post.desc}</p>
            <div class="post-meta">
              <span>${post.author}</span>
              <span>${post.date}</span>
              <span>답변 대기 중</span>
            </div>
          </div>
          <div class="post-stats" aria-label="게시글 반응">
            <span><i data-lucide="message-circle"></i>${post.comments}</span>
            <span><i data-lucide="eye"></i>${post.views}</span>
          </div>
        </article>
      `
    )
    .join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function updateCommunityPosts() {
  if (!communitySearch) return;

  const query = communitySearch.value.trim().toLowerCase();
  const posts = communityPosts.filter((post) => {
    const matchesTab = activeCommunityTab === "전체" || post.category === activeCommunityTab;
    const matchesQuery =
      !query ||
      post.title.toLowerCase().includes(query) ||
      post.desc.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query);

    return matchesTab && matchesQuery;
  });

  renderCommunityPosts(posts);
}

if (grid && searchInput) {
  document.querySelector(".search-panel").addEventListener("submit", (event) => {
    event.preventDefault();
    updateGrid();
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

  quickTags.forEach((button) => {
    button.addEventListener("click", () => {
      searchInput.value = button.textContent.trim();
      updateGrid();
    });
  });
}

document.querySelectorAll(".category").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".category").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});

if (communityList && communitySearch) {
  communityTabs.forEach((button) => {
    button.addEventListener("click", () => {
      activeCommunityTab = button.dataset.communityTab;
      communityTabs.forEach((tab) => tab.classList.remove("active"));
      button.classList.add("active");
      updateCommunityPosts();
    });
  });

  communitySearch.addEventListener("input", updateCommunityPosts);

  document.querySelectorAll(".hot-keywords button").forEach((button) => {
    button.addEventListener("click", () => {
      communitySearch.value = button.textContent.trim();
      updateCommunityPosts();
    });
  });

  focusCommunityWrite.addEventListener("click", () => {
    communityTitle.focus();
  });

  communityWriteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = communityTitle.value.trim();
    const desc = communityBody.value.trim();
    if (!title) {
      communityTitle.focus();
      return;
    }

    communityPosts.unshift({
      category: communityCategory.value,
      title,
    desc: desc || "조건을 더 입력하면 실무자가 빠르게 답변할 수 있습니다.",
      author: "나",
      date: "지금",
      comments: 0,
      views: 1,
    });

    activeCommunityTab = "전체";
    communityTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.communityTab === "전체"));
    communitySearch.value = "";
    communityWriteForm.reset();
    updateCommunityPosts();
  });
}

if (window.lucide) {
  window.lucide.createIcons();
}

renderCards(ingredients);
renderCommunityPosts(communityPosts);
