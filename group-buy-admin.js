// Admin 쪽지함: a "공동구매" tab where the admin sets the MOQ that opens a
// 모집, moves the status along, and — unlike the buyers — sees who joined.
// Access is enforced by RLS (supabase-group-buys.sql); the tab only renders
// for admins.
(function () {
  const tabs = document.querySelector(".message-view-tabs");
  const layout = document.querySelector(".messages-layout");
  const client = typeof supabaseClient !== "undefined" ? supabaseClient : null;
  const isAdmin = typeof isAdminMember === "function" && isAdminMember();
  if (!tabs || !layout || !client || !isAdmin) return;

  const STATUSES = ["요청", "모집중", "달성", "진행", "완료", "취소"];
  const COLUMNS =
    "id,owner_id,sector,ingredient_name,spec,unit,note,owner_quantity,moq,unit_price_note,deadline,status,admin_note,created_at";

  const esc = (value) =>
    String(value == null ? "" : value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char]));
  const num = (value) => {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  };
  const fmt = (value) => new Intl.NumberFormat("ko-KR", { maximumFractionDigits: 3 }).format(num(value));
  const formatDate = (value) => {
    if (!value) return "";
    try {
      return new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date(value));
    } catch {
      return "";
    }
  };

  const tab = document.createElement("button");
  tab.type = "button";
  tab.textContent = "공동구매";
  tabs.appendChild(tab);

  const panel = document.createElement("section");
  panel.className = "sourcing-admin-panel";
  panel.setAttribute("aria-label", "공동구매 관리");
  panel.hidden = true;
  layout.after(panel);

  let items = [];
  let orders = {}; // group_buy_id -> [{ quantity, who }]

  function setTabLabel() {
    const pending = items.filter((item) => item.status === "요청").length;
    tab.textContent = pending ? `공동구매 (${pending})` : "공동구매";
  }

  function totalFor(id) {
    return (orders[id] || []).reduce((sum, order) => sum + num(order.quantity), 0);
  }

  function render() {
    if (!items.length) {
      panel.innerHTML = '<div class="empty-state">접수된 공동구매 요청이 없습니다.</div>';
      return;
    }
    panel.innerHTML = items
      .map((item) => {
        const joined = orders[item.id] || [];
        const total = totalFor(item.id);
        const target = num(item.moq);
        const done = target > 0 ? Math.min(100, Math.round((total / target) * 100)) : 0;
        return `
        <article class="sourcing-admin-item" data-group-buy-id="${esc(item.id)}">
          <header>
            <span class="sector-label sector-${esc(item.sector)}">${esc(item.sector)}</span>
            <strong>${esc(item.ingredient_name)}</strong>
            <span class="sourcing-admin-date">${esc(formatDate(item.created_at))}</span>
          </header>
          <p class="sourcing-admin-requester">요청자 ${esc(item.ownerLabel || "회원")} · 희망 ${esc(fmt(item.owner_quantity))}${esc(item.unit)}</p>
          <dl>
            <div><dt>규격 · 등급</dt><dd>${esc(item.spec || "-")}</dd></div>
            <div><dt>모집 현황</dt><dd>${target > 0 ? `${esc(fmt(total))} / ${esc(fmt(target))}${esc(item.unit)} (${done}%)` : "MOQ 지정 전"}</dd></div>
            <div><dt>참여</dt><dd>${joined.length}명</dd></div>
          </dl>
          <p class="sourcing-admin-note">${esc(item.note || "추가 내용 없음")}</p>
          ${
            joined.length
              ? `<ul class="gb-admin-buyers">${joined
                  .map((order) => `<li><span>${esc(order.who)}</span><strong>${esc(fmt(order.quantity))}${esc(item.unit)}</strong></li>`)
                  .join("")}</ul>`
              : ""
          }
          <form class="sourcing-admin-reply" data-group-buy-form="${esc(item.id)}">
            <label>
              <span>최소 주문수량 (MOQ, ${esc(item.unit)})</span>
              <input name="moq" type="number" min="0" step="0.001" value="${target > 0 ? esc(target) : ""}" placeholder="예: 1000" />
            </label>
            <label>
              <span>예상 단가 안내</span>
              <input name="unit_price_note" type="text" maxlength="200" value="${esc(item.unit_price_note)}" placeholder="예: 달성 시 kg당 12,000원 예상" />
            </label>
            <label>
              <span>모집 마감일</span>
              <input name="deadline" type="date" value="${esc(item.deadline || "")}" />
            </label>
            <label>
              <span>진행 상태</span>
              <select name="status">
                ${STATUSES.map((status) => `<option value="${status}"${status === item.status ? " selected" : ""}>${status}</option>`).join("")}
              </select>
            </label>
            <label>
              <span>참여자에게 보여줄 안내</span>
              <textarea name="admin_note" rows="3" maxlength="4000" placeholder="진행 상황을 입력하세요">${esc(item.admin_note)}</textarea>
            </label>
            <div class="form-actions">
              <button class="primary-button" type="submit">저장</button>
            </div>
            <p class="form-message" aria-live="polite"></p>
          </form>
        </article>`;
      })
      .join("");
  }

  // Names are resolved here and only here — the buyer-facing board never
  // loads them.
  async function attachNames() {
    const ids = new Set();
    items.forEach((item) => ids.add(item.owner_id));
    Object.values(orders).forEach((list) => list.forEach((order) => ids.add(order.buyer_id)));
    if (!ids.size) return;
    const { data } = await client.from("profiles").select("id,name,nickname,email,company").in("id", [...ids]);
    const byId = Object.fromEntries((data || []).map((row) => [row.id, row]));
    const label = (id) => {
      const profile = byId[id];
      if (!profile) return "회원";
      return [profile.nickname || profile.name || "회원", profile.company, profile.email].filter(Boolean).join(" · ");
    };
    items.forEach((item) => {
      item.ownerLabel = label(item.owner_id);
    });
    Object.values(orders).forEach((list) => list.forEach((order) => {
      order.who = label(order.buyer_id);
    }));
  }

  async function load() {
    panel.innerHTML = '<div class="empty-state">공동구매를 불러오고 있습니다...</div>';
    const [buys, pledges] = await Promise.all([
      client.from("group_buys").select(COLUMNS).order("created_at", { ascending: false }),
      client.from("group_buy_orders").select("group_buy_id,buyer_id,quantity").order("quantity", { ascending: false }),
    ]);
    if (buys.error) {
      panel.innerHTML = '<div class="empty-state">공동구매를 불러오지 못했습니다.</div>';
      return;
    }
    items = buys.data || [];
    orders = {};
    (pledges.data || []).forEach((order) => {
      (orders[order.group_buy_id] ||= []).push(order);
    });
    await attachNames();
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

  panel.addEventListener("submit", async (event) => {
    const formEl = event.target.closest("[data-group-buy-form]");
    if (!formEl) return;
    event.preventDefault();
    const id = formEl.dataset.groupBuyForm;
    const submit = formEl.querySelector("[type='submit']");
    const note = formEl.querySelector(".form-message");
    if (submit.disabled) return;
    const moq = Number(formEl.elements.moq.value || 0);
    if (!Number.isFinite(moq) || moq < 0) {
      note.textContent = "MOQ를 숫자로 입력해주세요.";
      note.className = "form-message error";
      return;
    }
    const status = formEl.elements.status.value;
    if (status !== "요청" && moq <= 0) {
      note.textContent = "모집을 시작하려면 MOQ를 먼저 지정해주세요.";
      note.className = "form-message error";
      return;
    }
    submit.disabled = true;
    const { error } = await client
      .from("group_buys")
      .update({
        moq,
        status,
        unit_price_note: formEl.elements.unit_price_note.value.trim(),
        deadline: formEl.elements.deadline.value || null,
        admin_note: formEl.elements.admin_note.value.trim(),
      })
      .eq("id", id);
    submit.disabled = false;
    if (error) {
      note.textContent = "저장하지 못했습니다.";
      note.className = "form-message error";
      return;
    }
    // The database may move 모집중 straight to 달성, and opening a 모집 enrols
    // the requester, so the whole tab is reloaded rather than patched.
    await load();
  });

  client
    .from("group_buys")
    .select("id,status")
    .eq("status", "요청")
    .then(({ data }) => {
      if (!data) return;
      tab.textContent = data.length ? `공동구매 (${data.length})` : "공동구매";
    });

  if (new URLSearchParams(window.location.search).get("view") === "group-buy") {
    show(true);
    load();
  }
})();
