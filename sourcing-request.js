// Sourcing request board. Layout and interactions mirror the 원료문의 board:
// sector tabs, search, a toggled write form, and rows that expand to details.
// Requests are stored in Supabase (sourcing_requests) so the admin sees them
// in the 쪽지함 "소싱요청" tab and replies there; the reply shows here as the
// request's progress (read-only for the requester).
(function () {
  const form = document.querySelector("#sourcingRequestForm");
  const list = document.querySelector("#sourcingRequestList");
  const message = document.querySelector("#sourcingRequestMessage");
  const writeButton = document.querySelector("#sourcingWriteButton");
  const cancelButton = document.querySelector("#sourcingWriteCancel");
  const searchInput = document.querySelector("#sourcingSearch");
  const sectorSelect = document.querySelector("#sourcingSector");
  const sectorTabs = [...document.querySelectorAll("[data-sourcing-sector]")];
  const COLUMNS = "id,sector,ingredient_name,quantity,sample_quantity,required_documents,note,status,feedback,created_at";
  const LEGACY_PREFIX = "foodsourceSourcingRequests:";

  let activeSector = "전체";
  let openId = "";
  let items = [];
  let loadState = "loading"; // loading | ready | signed-out | unavailable

  const client = typeof supabaseClient !== "undefined" ? supabaseClient : null;
  const getMember = () => (typeof getCurrentMember === "function" ? getCurrentMember() : null);
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
  const setMessage = (text, type = "") => {
    if (!message) return;
    message.textContent = text;
    message.className = `form-message${type ? ` ${type}` : ""}`;
  };

  async function getUserId() {
    return typeof getSupabaseUserId === "function" ? getSupabaseUserId() : "";
  }

  const toRow = (item) => ({
    sector: ["식품", "제약", "화장품"].includes(item.sector) ? item.sector : "식품",
    ingredient_name: String(item.name || "").trim().slice(0, 200),
    quantity: String(item.quantity || "").slice(0, 200),
    sample_quantity: String(item.sampleQuantity || "").slice(0, 200),
    required_documents: String(item.documents || "").slice(0, 500),
    note: String(item.note || "").slice(0, 4000),
  });

  // Requests saved before this change lived only in this browser; upload them
  // one by one. Items that fail stay in the browser for the next visit, and a
  // short-lived lock keeps two open tabs from uploading the same items.
  async function uploadLegacyRequests() {
    const member = getMember();
    const legacyKey = member?.email ? `${LEGACY_PREFIX}${String(member.email).toLowerCase()}` : "";
    if (!legacyKey) return;
    const lockKey = `${legacyKey}:uploading`;
    const lockedAt = Number(localStorage.getItem(lockKey) || 0);
    if (Date.now() - lockedAt < 60000) return;
    let legacy = [];
    try {
      legacy = JSON.parse(localStorage.getItem(legacyKey) || "[]");
    } catch {
      legacy = [];
    }
    if (!Array.isArray(legacy) || !legacy.length) return;
    localStorage.setItem(lockKey, String(Date.now()));
    try {
      const remaining = [];
      for (const item of legacy) {
        const row = item ? toRow(item) : null;
        if (!row || !row.ingredient_name) continue;
        const { error } = await client.from("sourcing_requests").insert(row);
        if (error) remaining.push(item);
      }
      if (remaining.length) localStorage.setItem(legacyKey, JSON.stringify(remaining));
      else localStorage.removeItem(legacyKey);
    } finally {
      localStorage.removeItem(lockKey);
    }
  }

  async function load() {
    if (!getMember()) {
      loadState = "signed-out";
      return render();
    }
    const userId = client ? await getUserId() : "";
    if (!userId) {
      loadState = "signed-out";
      return render();
    }
    await uploadLegacyRequests().catch(() => {});
    const { data, error } = await client
      .from("sourcing_requests")
      .select(COLUMNS)
      .eq("owner_id", userId)
      .order("created_at", { ascending: false });
    if (error) {
      loadState = "unavailable";
      return render();
    }
    items = data || [];
    loadState = "ready";
    render();
  }

  function detailMarkup(item) {
    return `
      <section class="community-detail sourcing-request-detail" aria-label="${esc(item.ingredient_name)} 상세">
        <article class="detail-post">
          <div class="detail-head">
            <h2>${esc(item.ingredient_name)}</h2>
            <div class="detail-meta">
              <span>${esc(item.sector)}</span>
              <span>${esc(formatDate(item.created_at))}</span>
              <span>${esc(item.status)}</span>
            </div>
          </div>
          <div class="partner-detail-meta">
            <span>필요 수량</span><strong>${esc(item.quantity || "-")}</strong>
            <span>필요 샘플 수량</span><strong>${esc(item.sample_quantity || "-")}</strong>
            <span>필요 서류</span><strong>${esc(item.required_documents || "-")}</strong>
          </div>
          <p>${esc(item.note || "추가 요청사항 없음")}</p>
        </article>
        <section class="comment-panel" aria-label="진행 현황">
          <div class="comment-title"><h3>진행 현황</h3><span>${esc(item.status)}</span></div>
          <p class="comment-empty">${esc(item.feedback || "접수되었습니다. 관리자가 확인하면 이곳에 안내됩니다.")}</p>
        </section>
      </section>`;
  }

  function render() {
    if (!list) return;
    if (loadState === "loading") {
      list.innerHTML = '<div class="empty-state">소싱요청을 불러오고 있습니다...</div>';
      return;
    }
    if (loadState === "signed-out") {
      list.innerHTML = '<div class="empty-state">로그인 후 나의 소싱요청을 확인할 수 있습니다.</div>';
      return;
    }
    if (loadState === "unavailable") {
      list.innerHTML = '<div class="empty-state">소싱요청을 불러오지 못했습니다. 잠시 후 다시 시도해주세요.</div>';
      return;
    }
    const query = (searchInput?.value || "").trim().toLowerCase();
    const visible = items.filter((item) => {
      const matchesSector = activeSector === "전체" || item.sector === activeSector;
      const text = [item.ingredient_name, item.quantity, item.required_documents, item.note].join(" ").toLowerCase();
      return matchesSector && (!query || text.includes(query));
    });
    if (!visible.length) {
      list.innerHTML = '<div class="empty-state">조건에 맞는 소싱요청이 없습니다.</div>';
      return;
    }
    list.innerHTML = visible
      .map(
        (item) => `
        <article class="community-post" role="button" tabindex="0" data-sourcing-id="${esc(item.id)}">
          <span class="sector-label ${sectorClass(item.sector)}">${esc(item.sector)}</span>
          <h3>${esc(item.ingredient_name)}</h3>
          <span class="post-author">${esc(item.feedback ? "답변 있음" : item.status)}</span>
          <span class="post-date">${esc(formatDate(item.created_at))}</span>
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
    setMessage("");
  });

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const submitButton = form.querySelector("[type='submit']");
    if (submitButton?.disabled) return;
    const member = getMember();
    const userId = member && client ? await getUserId() : "";
    if (!userId) {
      setMessage("로그인이 필요합니다. 다시 로그인한 뒤 등록해주세요.", "error");
      return;
    }
    const value = (id) => document.querySelector(id)?.value.trim() || "";
    // Requester identity, status and reply are filled in by the database.
    const payload = {
      sector: sectorSelect?.value || "식품",
      ingredient_name: value("#sourcingName"),
      quantity: value("#sourcingQuantity"),
      sample_quantity: value("#sourcingSampleQuantity"),
      required_documents: value("#sourcingDocuments"),
      note: value("#sourcingNote"),
    };
    if (!payload.ingredient_name) {
      setMessage("원료명을 입력해주세요.", "error");
      return;
    }
    if (submitButton) submitButton.disabled = true;
    try {
      const { data, error } = await client.from("sourcing_requests").insert(payload).select(COLUMNS).single();
      if (error || !data) {
        setMessage("소싱요청을 등록하지 못했습니다. 잠시 후 다시 시도해주세요. 입력한 내용은 그대로 남아 있습니다.", "error");
        return;
      }
      items = [data, ...items];
      loadState = "ready";
      form.reset();
      form.hidden = true;
      setMessage("");
      render();
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });

  if (window.lucide) window.lucide.createIcons();
  render();
  load();
})();
