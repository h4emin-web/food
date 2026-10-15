// Sourcing request board. Layout and interactions mirror the 원료문의 board:
// sector tabs, search, a toggled write form, and rows that expand to details.
// Storage is still this browser's localStorage only; requests do not reach
// the server yet (pending the sourcing_requests table decision). Progress
// feedback is shown read-only - it is meant to come from the operator.
(function () {
  const form = document.querySelector("#sourcingRequestForm");
  const list = document.querySelector("#sourcingRequestList");
  const message = document.querySelector("#sourcingRequestMessage");
  const writeButton = document.querySelector("#sourcingWriteButton");
  const cancelButton = document.querySelector("#sourcingWriteCancel");
  const searchInput = document.querySelector("#sourcingSearch");
  const sectorSelect = document.querySelector("#sourcingSector");
  const sectorTabs = [...document.querySelectorAll("[data-sourcing-sector]")];
  let activeSector = "전체";
  let openId = "";

  const getMember = () => (typeof getCurrentMember === "function" ? getCurrentMember() : null);
  const key = () => {
    const member = getMember();
    return member?.email ? `foodsourceSourcingRequests:${String(member.email).toLowerCase()}` : "";
  };
  const getItems = () => {
    try {
      return JSON.parse(localStorage.getItem(key()) || "[]");
    } catch {
      return [];
    }
  };
  const esc = (value) =>
    String(value || "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char]));
  const sectorClass = (sector) => (["식품", "제약", "화장품"].includes(sector) ? `sector-${sector}` : "sector-식품");
  const formatDate = (value) => {
    try {
      return new Intl.DateTimeFormat("ko-KR", { month: "2-digit", day: "2-digit" }).format(new Date(value));
    } catch {
      return "";
    }
  };

  function detailMarkup(item) {
    return `
      <section class="community-detail sourcing-request-detail" aria-label="${esc(item.name)} 상세">
        <article class="detail-post">
          <div class="detail-head">
            <h2>${esc(item.name)}</h2>
            <div class="detail-meta">
              <span>${esc(item.sector)}</span>
              <span>${esc(formatDate(item.createdAt))}</span>
            </div>
          </div>
          <div class="partner-detail-meta">
            <span>필요 수량</span><strong>${esc(item.quantity || "-")}</strong>
            <span>필요 샘플 수량</span><strong>${esc(item.sampleQuantity || "-")}</strong>
            <span>필요 서류</span><strong>${esc(item.documents || "-")}</strong>
          </div>
          <p>${esc(item.note || "추가 요청사항 없음")}</p>
        </article>
        <section class="comment-panel" aria-label="진행 현황">
          <div class="comment-title"><h3>진행 현황</h3></div>
          <p class="comment-empty">${esc(item.feedback || "접수되었습니다. 진행 상황이 있으면 이곳에 안내됩니다.")}</p>
        </section>
      </section>`;
  }

  function render() {
    if (!list) return;
    if (!key()) {
      list.innerHTML = '<div class="empty-state">로그인 후 나의 소싱요청을 확인할 수 있습니다.</div>';
      return;
    }
    const query = (searchInput?.value || "").trim().toLowerCase();
    const items = getItems().filter((item) => {
      const matchesSector = activeSector === "전체" || item.sector === activeSector;
      const text = [item.name, item.quantity, item.documents, item.note].join(" ").toLowerCase();
      return matchesSector && (!query || text.includes(query));
    });
    if (!items.length) {
      list.innerHTML = '<div class="empty-state">조건에 맞는 소싱요청이 없습니다.</div>';
      return;
    }
    list.innerHTML = items
      .map(
        (item) => `
        <article class="community-post" role="button" tabindex="0" data-sourcing-id="${esc(item.id)}">
          <span class="sector-label ${sectorClass(item.sector)}">${esc(item.sector)}</span>
          <h3>${esc(item.name)}</h3>
          <span class="post-author">${item.feedback ? "답변 있음" : "접수"}</span>
          <span class="post-date">${esc(formatDate(item.createdAt))}</span>
          <div class="post-stats"><span>수량 ${esc(item.quantity || "-")}</span></div>
        </article>
        ${openId === item.id ? detailMarkup(item) : ""}`
      )
      .join("");
  }

  sectorTabs.forEach((tab) =>
    tab.addEventListener("click", () => {
      activeSector = tab.dataset.sourcingSector || "전체";
      sectorTabs.forEach((other) => other.classList.toggle("active", other === tab));
      render();
    })
  );

  searchInput?.addEventListener("input", render);

  const toggleRow = (row) => {
    const id = row?.dataset.sourcingId;
    if (!id) return;
    openId = openId === id ? "" : id;
    render();
  };
  list?.addEventListener("click", (event) => toggleRow(event.target.closest("[data-sourcing-id]")));
  list?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const row = event.target.closest("[data-sourcing-id]");
    if (!row) return;
    event.preventDefault();
    toggleRow(row);
  });

  writeButton?.addEventListener("click", () => {
    if (!getMember()) {
      window.location.href = "login.html";
      return;
    }
    form.hidden = !form.hidden;
    if (sectorSelect) sectorSelect.value = activeSector === "전체" ? "식품" : activeSector;
    if (!form.hidden) document.querySelector("#sourcingName")?.focus();
  });

  cancelButton?.addEventListener("click", () => {
    form.reset();
    form.hidden = true;
    if (message) message.textContent = "";
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!key()) {
      window.location.href = "login.html";
      return;
    }
    const value = (id) => document.querySelector(id)?.value.trim() || "";
    const item = {
      id: crypto.randomUUID(),
      sector: sectorSelect?.value || "식품",
      name: value("#sourcingName"),
      quantity: value("#sourcingQuantity"),
      sampleQuantity: value("#sourcingSampleQuantity"),
      documents: value("#sourcingDocuments"),
      note: value("#sourcingNote"),
      feedback: "",
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem(key(), JSON.stringify([item, ...getItems()]));
    form.reset();
    form.hidden = true;
    if (message) message.textContent = "";
    render();
  });

  if (window.lucide) window.lucide.createIcons();
  render();
})();
