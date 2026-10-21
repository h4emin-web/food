// Admin 쪽지함: a "소싱요청" tab that lists every sourcing request and lets
// the admin set its status and reply. The reply is what the requester sees as
// progress on the 원료 소싱요청 page. Access is enforced by RLS
// (supabase-sourcing-requests.sql); the tab is only shown to admins.
(function () {
  const tabs = document.querySelector(".message-view-tabs");
  const layout = document.querySelector(".messages-layout");
  const client = typeof supabaseClient !== "undefined" ? supabaseClient : null;
  const isAdmin = typeof isAdminMember === "function" && isAdminMember();
  if (!tabs || !layout || !client || !isAdmin) return;

  const STATUSES = ["접수", "확인 중", "공급사 확인", "완료"];
  const COLUMNS = "id,owner_email,owner_name,sector,ingredient_name,quantity,sample_quantity,required_documents,note,status,feedback,created_at";
  const esc = (value) =>
    String(value || "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char]));
  const formatDate = (value) => {
    try {
      return new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(new Date(value));
    } catch {
      return "";
    }
  };

  const tab = document.createElement("button");
  tab.type = "button";
  tab.dataset.sourcingAdminTab = "";
  tab.textContent = "소싱요청";
  tabs.appendChild(tab);

  const panel = document.createElement("section");
  panel.className = "sourcing-admin-panel";
  panel.setAttribute("aria-label", "소싱요청 관리");
  panel.hidden = true;
  layout.after(panel);

  let items = [];

  function setTabLabel() {
    const pending = items.filter((item) => item.status === "접수").length;
    tab.textContent = pending ? `소싱요청 (${pending})` : "소싱요청";
  }

  function render() {
    if (!items.length) {
      panel.innerHTML = '<div class="empty-state">접수된 소싱요청이 없습니다.</div>';
      return;
    }
    panel.innerHTML = items
      .map(
        (item) => `
        <article class="sourcing-admin-item" data-request-id="${esc(item.id)}">
          <header>
            <span class="sector-label sector-${esc(item.sector)}">${esc(item.sector)}</span>
            <strong>${esc(item.ingredient_name)}</strong>
            <span class="sourcing-admin-date">${esc(formatDate(item.created_at))}</span>
          </header>
          <p class="sourcing-admin-requester">${esc(item.owner_name || "회원")} · ${esc(item.owner_email || "")}</p>
          <dl>
            <div><dt>필요 수량</dt><dd>${esc(item.quantity || "-")}</dd></div>
            <div><dt>필요 샘플 수량</dt><dd>${esc(item.sample_quantity || "-")}</dd></div>
            <div><dt>필요 서류</dt><dd>${esc(item.required_documents || "-")}</dd></div>
          </dl>
          <p class="sourcing-admin-note">${esc(item.note || "추가 요청사항 없음")}</p>
          <form class="sourcing-admin-reply" data-request-form="${esc(item.id)}">
            <label>
              <span>진행 상태</span>
              <select name="status">
                ${STATUSES.map((status) => `<option value="${status}"${status === item.status ? " selected" : ""}>${status}</option>`).join("")}
              </select>
            </label>
            <label>
              <span>요청자에게 보낼 답변</span>
              <textarea name="feedback" rows="3" maxlength="4000" placeholder="진행 상황을 입력하세요">${esc(item.feedback)}</textarea>
            </label>
            <div class="form-actions">
              <button class="primary-button" type="submit">답변 저장</button>
            </div>
            <p class="form-message" aria-live="polite"></p>
          </form>
        </article>`
      )
      .join("");
  }

  async function load() {
    panel.innerHTML = '<div class="empty-state">소싱요청을 불러오고 있습니다...</div>';
    const { data, error } = await client.from("sourcing_requests").select(COLUMNS).order("created_at", { ascending: false });
    if (error) {
      panel.innerHTML = '<div class="empty-state">소싱요청을 불러오지 못했습니다.</div>';
      return;
    }
    items = data || [];
    setTabLabel();
    render();
  }

  // Two admin tabs share this bar (소싱요청, 공동구매). Opening one hides the
  // other's panel and the inbox; only the 쪽지 filters bring the inbox back,
  // so the two tabs cannot fight over layout.hidden on the same click.
  function show(on) {
    if (on) {
      document.querySelectorAll(".sourcing-admin-panel").forEach((other) => {
        if (other !== panel) other.hidden = true;
      });
      tabs.querySelectorAll("button").forEach((button) => button.classList.remove("active"));
      layout.hidden = true;
    }
    panel.hidden = !on;
    tab.classList.toggle("active", on);
  }

  tab.addEventListener("click", () => {
    show(true);
    load();
  });

  tabs.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (button && button !== tab) show(false);
  });

  // The existing 쪽지 tabs switch the regular inbox back on.
  tabs.querySelectorAll("[data-message-filter]").forEach((button) =>
    button.addEventListener("click", () => {
      document.querySelectorAll(".sourcing-admin-panel").forEach((other) => {
        other.hidden = true;
      });
      layout.hidden = false;
    })
  );

  panel.addEventListener("submit", async (event) => {
    const formEl = event.target.closest("[data-request-form]");
    if (!formEl) return;
    event.preventDefault();
    const id = formEl.dataset.requestForm;
    const submit = formEl.querySelector("[type='submit']");
    const note = formEl.querySelector(".form-message");
    if (submit.disabled) return;
    submit.disabled = true;
    const status = formEl.elements.status.value;
    const feedback = formEl.elements.feedback.value.trim();
    const { error } = await client
      .from("sourcing_requests")
      .update({ status, feedback })
      .eq("id", id);
    submit.disabled = false;
    if (error) {
      note.textContent = "저장하지 못했습니다.";
      note.className = "form-message error";
      return;
    }
    items = items.map((item) => (item.id === id ? { ...item, status, feedback } : item));
    setTabLabel();
    note.textContent = "저장되었습니다. 요청자 화면에 표시됩니다.";
    note.className = "form-message success";
  });

  // Count pending requests for the tab label without opening it.
  client
    .from("sourcing_requests")
    .select("id,status")
    .eq("status", "접수")
    .then(({ data }) => {
      if (!data) return;
      const pending = data.length;
      tab.textContent = pending ? `소싱요청 (${pending})` : "소싱요청";
    });

  if (new URLSearchParams(window.location.search).get("view") === "sourcing") {
    show(true);
    load();
  }
})();
