const ingredients = [
  {
    name: "완두 단백 분리물",
    englishName: "Pea Protein Isolate",
    desc: "대체육, 단백질 음료, 베이커리용 단백 원료",
    origin: "캐나다",
    originFlagCode: "ca",
    type: "단백 원료",
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=900&q=80",
    badge: "응답 빠름",
    tags: ["대체식품", "HACCP", "국내재고", "소량샘플"],
  },
  {
    name: "저분자 콜라겐 펩타이드",
    englishName: "Hydrolyzed Collagen Peptide",
    desc: "음료와 젤리에 쓰기 좋은 건강기능 콘셉트 원료",
    origin: "프랑스",
    originFlagCode: "fr",
    type: "기능성 원료",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80",
    badge: "인기",
    tags: ["건강기능", "FSSC22000", "빠른견적", "소량샘플"],
  },
  {
    name: "알룰로스 시럽",
    englishName: "Allulose Syrup",
    desc: "저당 제품 개발에 쓰이는 감미 원료",
    origin: "국내",
    originFlagCode: "kr",
    type: "감미 원료",
    image: "https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?auto=format&fit=crop&w=900&q=80",
    badge: "저당",
    tags: ["음료", "HACCP", "국내재고", "빠른견적"],
  },
  {
    name: "비트 레드 천연 색소",
    englishName: "Beet Red Color",
    desc: "젤리, 음료, 디저트용 식물 유래 색소",
    origin: "네덜란드",
    originFlagCode: "nl",
    type: "색소 원료",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80",
    badge: "클린라벨",
    tags: ["음료", "베이커리", "유기농", "소량샘플"],
  },
  {
    name: "귀리 베타글루칸",
    englishName: "Oat Beta-Glucan",
    desc: "시리얼, 쉐이크, 건강 스낵용 식이섬유 원료",
    origin: "핀란드",
    originFlagCode: "fi",
    type: "식이섬유",
    image: "https://images.unsplash.com/photo-1614961233913-a5113a4a34ed?auto=format&fit=crop&w=900&q=80",
    badge: "기능성",
    tags: ["건강기능", "FSSC22000", "할랄", "빠른견적"],
  },
  {
    name: "천연 딸기향 베이스",
    englishName: "Natural Strawberry Flavor Base",
    desc: "유제품, 음료, 베이커리용 향료 베이스",
    origin: "국내",
    originFlagCode: "kr",
    type: "향료 원료",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=900&q=80",
    badge: "커스텀",
    tags: ["음료", "베이커리", "HACCP", "국내재고"],
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

const grid = document.querySelector("#ingredientGrid");
const searchInput = document.querySelector("#heroSearch");
const filterInputs = [...document.querySelectorAll(".filter-panel input")];
const resetButton = document.querySelector("#resetFilters");
const communityList = document.querySelector("#communityList");
const communitySearch = document.querySelector("#communitySearch");
const ingredientRegisterForm = document.querySelector("#ingredientRegisterForm");
const registerLayout = document.querySelector("#registerLayout");
const registerAuthRequired = document.querySelector("#registerAuthRequired");
const signupForm = document.querySelector("#signupForm");
const loginForm = document.querySelector("#loginForm");
const authLinks = [...document.querySelectorAll(".auth-link")];
const authOnlyLinks = [...document.querySelectorAll(".auth-only")];
const guestOnlyLinks = [...document.querySelectorAll(".guest-only")];
let activeCommunityPostId = "";

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
        </article>
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
      </div>
    `
  );
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
      link.href = "signup.html";
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
    window.setTimeout(updateRegisterPreview, 0);
  });
  ingredientRegisterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    updateRegisterPreview();
  });

  updateRegisterPreview();
}

if (signupForm) {
  const signupFields = {
    name: document.querySelector("#signupName"),
    email: document.querySelector("#signupEmail"),
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
      company: signupFields.company.value.trim(),
      role: signupFields.role.value,
      password,
      joinedAt: new Date().toISOString(),
    };

    if (!member.name || !member.email || !password || !confirm) {
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
    localStorage.removeItem("foodsourceCurrentMember");
    setSignupMessage("가입 상태를 지웠습니다. 저장된 회원 목록은 유지됩니다.", "success");
    renderMemberStatus();
  });

  renderMemberStatus();
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

updateAuthLinks();
updateRegisterAccess();
renderCards(ingredients);
renderCommunityPosts(communityPosts);
