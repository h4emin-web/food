// 공동구매 board. A member asks for an ingredient they cannot order alone,
// an admin sets the MOQ, and other members pledge quantities until it is met.
//
// Buyers are anonymous to each other by construction: the board reads the
// group_buys_public view (totals, no identity) and the breakdown comes from
// the group_buy_quantities() function, which returns bare numbers. Nothing
// here ever has another buyer's id to leak — see supabase-group-buys.sql.
(function () {
  const list = document.querySelector("#groupBuyList");
  if (!list) return;

  const form = document.querySelector("#groupBuyForm");
  const message = document.querySelector("#groupBuyMessage");
  const writeButton = document.querySelector("#groupBuyWriteButton");
  const cancelButton = document.querySelector("#groupBuyWriteCancel");
  const searchInput = document.querySelector("#groupBuySearch");
  const sectorSelect = document.querySelector("#groupBuySector");
  const sectorTabs = [...document.querySelectorAll("[data-group-buy-sector]")];

  const COLUMNS =
    "id,sector,ingredient_name,spec,manufacturer,assigned_manufacturer,unit,note,moq,unit_price_note,deadline,status,admin_note,created_at,pledged_total,buyer_count,is_mine,has_joined,my_quantity";
  const SECTORS = ["식품", "제약", "화장품"];
  const OPEN_STATUSES = ["모집중", "달성"];

  let activeSector = "전체";
  let openId = "";
  let items = [];
  let breakdown = { id: "", quantities: null };
  let loadState = "loading"; // loading | ready | signed-out | unavailable

  const client = typeof supabaseClient !== "undefined" ? supabaseClient : null;
  const getMember = () => (typeof getCurrentMember === "function" ? getCurrentMember() : null);
  const esc = (value) =>
    String(value == null ? "" : value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char]));
  const sectorClass = (sector) => (SECTORS.includes(sector) ? `sector-${sector}` : "sector-식품");
  const num = (value) => {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  };
  const fmt = (value) => new Intl.NumberFormat("ko-KR", { maximumFractionDigits: 3 }).format(num(value));
  const formatDate = (value) => {
    if (!value) return "";
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
  const percent = (item) => {
    const target = num(item.moq);
    if (target <= 0) return 0;
    return Math.min(100, Math.round((num(item.pledged_total) / target) * 100));
  };
  const isOpen = (item) => OPEN_STATUSES.includes(item.status) && num(item.moq) > 0;

  async function load() {
    if (!getMember() || !client) {
      loadState = "signed-out";
      return render();
    }
    const userId = typeof getSupabaseUserId === "function" ? await getSupabaseUserId() : "";
    if (!userId) {
      loadState = "signed-out";
      return render();
    }
    const { data, error } = await client
      .from("group_buys_public")
      .select(COLUMNS)
      .order("created_at", { ascending: false });
    if (error) {
      loadState = "unavailable";
      return render();
    }
    items = data || [];
    loadState = "ready";
    render();
  }

  // Quantities only, so the breakdown can show "구매자 A · 300kg" without the
  // page ever holding an id that says who A is.
  async function loadBreakdown(id) {
    breakdown = { id, quantities: null };
    render();
    const { data, error } = await client.rpc("group_buy_quantities", { target: id });
    if (breakdown.id !== id) return;
    breakdown = { id, quantities: error ? [] : (data || []).map((row) => num(row.quantity)) };
    render();
  }

  function progressMarkup(item) {
    const target = num(item.moq);
    if (target <= 0) {
      return '<p class="gb-progress-pending">Allingre가 최소 주문수량(MOQ)을 확인하고 있습니다. 지정되면 모집이 시작됩니다.</p>';
    }
    const done = percent(item);
    return `
      <div class="gb-progress">
        <div class="gb-progress-track"><span style="width: ${done}%"></span></div>
        <div class="gb-progress-meta">
          <strong>${esc(fmt(item.pledged_total))} / ${esc(fmt(target))}${esc(item.unit)}</strong>
          <span>${done}% · 참여 ${esc(item.buyer_count)}명</span>
        </div>
      </div>`;
  }

  // Three cases: the requester named a maker, Allingre assigned one, or it is
  // still being sourced. An assigned maker is flagged, because it is the one
  // a buyer did not choose and may want to withdraw over.
  function makerMarkup(item) {
    if (item.assigned_manufacturer) {
      return `${esc(item.assigned_manufacturer)} <em class="gb-maker-tag">Allingre 지정</em>`;
    }
    if (item.manufacturer) return `${esc(item.manufacturer)} <em class="gb-maker-tag">요청자 지정</em>`;
    return "Allingre가 확인 중";
  }

  function breakdownMarkup(item) {
    if (breakdown.id !== item.id) return "";
    if (breakdown.quantities === null) {
      return '<p class="comment-empty">참여 현황을 불러오고 있습니다...</p>';
    }
    if (!breakdown.quantities.length) {
      return '<p class="comment-empty">아직 참여한 구매자가 없습니다. 첫 번째로 수량을 등록해보세요.</p>';
    }
    const top = Math.max(...breakdown.quantities);
    return `
      <ul class="gb-breakdown">
        ${breakdown.quantities
          .map(
            (quantity, index) => `
          <li>
            <span class="gb-breakdown-name">구매자 ${esc(String.fromCharCode(65 + (index % 26)))}</span>
            <span class="gb-breakdown-bar"><i style="width: ${top > 0 ? Math.round((quantity / top) * 100) : 0}%"></i></span>
            <strong>${esc(fmt(quantity))}${esc(item.unit)}</strong>
          </li>`
          )
          .join("")}
      </ul>`;
  }

  function joinMarkup(item) {
    if (!isOpen(item)) {
      return `<p class="comment-empty">${esc(
        item.status === "요청" ? "MOQ가 지정되면 참여할 수 있습니다." : "이 공동구매는 모집이 끝났습니다."
      )}</p>`;
    }
    const joined = item.has_joined;
    return `
      <form class="gb-join-form" data-group-buy-join="${esc(item.id)}">
        <label>
          <span>${joined ? "내 수량 변경" : "참여 수량"} (${esc(item.unit)})</span>
          <input name="quantity" type="number" min="0.001" step="0.001" value="${joined ? esc(num(item.my_quantity)) : ""}" placeholder="예: 300" required />
        </label>
        <div class="form-actions">
          ${joined ? '<button class="outline-button danger-button" type="button" data-group-buy-leave>참여 취소</button>' : ""}
          <button class="primary-button" type="submit">${joined ? "수량 저장" : "공동구매 참여"}</button>
        </div>
        <p class="gb-join-note">${esc(
          item.assigned_manufacturer
            ? "제조사는 Allingre가 지정했습니다. 마음에 들지 않으면 모집 중 언제든 참여를 취소할 수 있습니다."
            : "제조사가 확정되면 이곳에 표시됩니다. 지정된 제조사가 마음에 들지 않으면 모집 중 언제든 참여를 취소할 수 있습니다."
        )}</p>
        <p class="form-message" aria-live="polite"></p>
      </form>`;
  }

  function detailMarkup(item) {
    return `
      <section class="community-detail gb-detail" aria-label="${esc(item.ingredient_name)} 공동구매 상세">
        <article class="detail-post">
          <div class="detail-head">
            <h2>${esc(item.ingredient_name)}</h2>
            <div class="detail-meta">
              <span>${esc(item.sector)}</span>
              <span>${esc(formatDate(item.created_at))}</span>
              <span class="gb-status gb-status-${esc(item.status)}">${esc(item.status)}</span>
            </div>
          </div>
          ${progressMarkup(item)}
          <div class="partner-detail-meta">
            <span>규격 · 등급</span><strong>${esc(item.spec || "-")}</strong>
            <span>제조사</span><strong>${makerMarkup(item)}</strong>
            <span>최소 주문수량</span><strong>${num(item.moq) > 0 ? `${esc(fmt(item.moq))}${esc(item.unit)}` : "지정 전"}</strong>
            <span>예상 단가</span><strong>${esc(item.unit_price_note || "확인 중")}</strong>
            <span>모집 마감</span><strong>${esc(formatDate(item.deadline) || "미정")}</strong>
          </div>
          <p>${esc(item.note || "추가 내용 없음")}</p>
          ${item.admin_note ? `<p class="gb-admin-note">${esc(item.admin_note)}</p>` : ""}
        </article>
        <section class="comment-panel" aria-label="참여 현황">
          <div class="comment-title"><h3>참여 현황</h3><span>구매자는 서로 익명입니다</span></div>
          <p class="gb-privacy-note">참여한 구매자끼리는 서로의 이름 · 회사 · 연락처를 알 수 없습니다. 아래에는 수량만 익명으로 표시됩니다.</p>
          ${breakdownMarkup(item)}
          ${joinMarkup(item)}
        </section>
      </section>`;
  }

  function render() {
    if (loadState === "loading") {
      list.innerHTML = '<div class="empty-state">공동구매를 불러오고 있습니다...</div>';
      return;
    }
    if (loadState === "signed-out") {
      list.innerHTML = '<div class="empty-state">로그인 후 공동구매에 참여할 수 있습니다. <a href="login.html">로그인</a></div>';
      return;
    }
    if (loadState === "unavailable") {
      list.innerHTML = '<div class="empty-state">공동구매를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.</div>';
      return;
    }
    const query = (searchInput?.value || "").trim().toLowerCase();
    const visible = items.filter((item) => {
      const matchesSector = activeSector === "전체" || item.sector === activeSector;
      const text = [item.ingredient_name, item.spec, item.note].join(" ").toLowerCase();
      return matchesSector && (!query || text.includes(query));
    });
    if (!visible.length) {
      list.innerHTML = '<div class="empty-state">조건에 맞는 공동구매가 없습니다.</div>';
      return;
    }
    list.innerHTML = visible
      .map(
        (item) => `
        <article class="community-post gb-row" role="button" tabindex="0" data-group-buy-id="${esc(item.id)}">
          <span class="sector-label ${sectorClass(item.sector)}">${esc(item.sector)}</span>
          <h3>${esc(item.ingredient_name)}${item.has_joined ? '<em class="gb-joined-flag">참여중</em>' : ""}</h3>
          <span class="post-author gb-status gb-status-${esc(item.status)}">${esc(item.status)}</span>
          <span class="post-date">${esc(formatDate(item.created_at))}</span>
          <div class="post-stats">
            <span>${num(item.moq) > 0 ? `${esc(fmt(item.pledged_total))} / ${esc(fmt(item.moq))}${esc(item.unit)} · ${percent(item)}%` : "MOQ 지정 전"}</span>
            <span>참여 ${esc(item.buyer_count)}명</span>
          </div>
        </article>
        ${openId === item.id ? detailMarkup(item) : ""}`
      )
      .join("");
    if (window.lucide) window.lucide.createIcons();
  }

  // ---------- board interactions ----------

  sectorTabs.forEach((tab) =>
    tab.addEventListener("click", () => {
      activeSector = tab.dataset.groupBuySector || "전체";
      sectorTabs.forEach((other) => other.classList.toggle("active", other === tab));
      render();
    })
  );

  searchInput?.addEventListener("input", render);

  const toggleRow = (row) => {
    const id = row?.dataset.groupBuyId;
    if (!id) return;
    if (openId === id) {
      openId = "";
      breakdown = { id: "", quantities: null };
      render();
      return;
    }
    openId = id;
    loadBreakdown(id);
  };

  list.addEventListener("click", (event) => {
    if (event.target.closest(".gb-detail")) return;
    toggleRow(event.target.closest("[data-group-buy-id]"));
  });
  list.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const row = event.target.closest("[data-group-buy-id]");
    if (!row || event.target.closest(".gb-detail")) return;
    event.preventDefault();
    toggleRow(row);
  });

  // ---------- joining ----------

  async function refresh(id) {
    const { data } = await client.from("group_buys_public").select(COLUMNS).eq("id", id).single();
    if (data) items = items.map((item) => (item.id === id ? data : item));
    await loadBreakdown(id);
  }

  list.addEventListener("submit", async (event) => {
    const joinForm = event.target.closest("[data-group-buy-join]");
    if (!joinForm) return;
    event.preventDefault();
    const id = joinForm.dataset.groupBuyJoin;
    const submit = joinForm.querySelector("[type='submit']");
    const note = joinForm.querySelector(".form-message");
    if (submit.disabled) return;
    const quantity = Number(joinForm.elements.quantity.value);
    if (!Number.isFinite(quantity) || quantity <= 0) {
      note.textContent = "수량을 입력해주세요.";
      note.className = "form-message error";
      return;
    }
    submit.disabled = true;
    // buyer_id comes from the database trigger, never from here.
    const { error } = await client
      .from("group_buy_orders")
      .upsert({ group_buy_id: id, quantity }, { onConflict: "group_buy_id,buyer_id" });
    submit.disabled = false;
    if (error) {
      note.textContent = "저장하지 못했습니다. 모집이 끝났는지 확인해주세요.";
      note.className = "form-message error";
      return;
    }
    await refresh(id);
  });

  list.addEventListener("click", async (event) => {
    const leave = event.target.closest("[data-group-buy-leave]");
    if (!leave) return;
    const id = leave.closest("[data-group-buy-join]")?.dataset.groupBuyJoin;
    if (!id || !window.confirm("공동구매 참여를 취소할까요?")) return;
    leave.disabled = true;
    // Scoped to this buyer on purpose: an admin's delete policy covers every
    // pledge on the group buy, so an unscoped delete would wipe them all.
    const userId = typeof getSupabaseUserId === "function" ? await getSupabaseUserId() : "";
    if (!userId) {
      leave.disabled = false;
      return;
    }
    const { error } = await client
      .from("group_buy_orders")
      .delete()
      .eq("group_buy_id", id)
      .eq("buyer_id", userId);
    leave.disabled = false;
    if (error) return;
    await refresh(id);
  });

  // ---------- creating a request ----------

  writeButton?.addEventListener("click", () => {
    if (!getMember()) {
      window.location.href = "login.html";
      return;
    }
    form.hidden = !form.hidden;
    if (sectorSelect) sectorSelect.value = activeSector === "전체" ? "식품" : activeSector;
    if (!form.hidden) document.querySelector("#groupBuyName")?.focus();
  });

  cancelButton?.addEventListener("click", () => {
    form.reset();
    form.hidden = true;
    setMessage("");
  });

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const submit = form.querySelector("[type='submit']");
    if (submit?.disabled) return;
    const userId = getMember() && client && typeof getSupabaseUserId === "function" ? await getSupabaseUserId() : "";
    if (!userId) {
      setMessage("로그인이 만료되었습니다. 로그인 페이지로 이동합니다.", "error");
      window.setTimeout(() => {
        window.location.href = "login.html";
      }, 1200);
      return;
    }
    const value = (id) => document.querySelector(id)?.value.trim() || "";
    const quantity = Number(value("#groupBuyQuantity"));
    const payload = {
      sector: sectorSelect?.value || "식품",
      ingredient_name: value("#groupBuyName"),
      spec: value("#groupBuySpec"),
      // Blank is fine: an admin then fills in assigned_manufacturer.
      manufacturer: value("#groupBuyManufacturer"),
      unit: document.querySelector("#groupBuyUnit")?.value || "kg",
      note: value("#groupBuyNote"),
      // Becomes this member's pledge automatically once an admin sets the MOQ.
      owner_quantity: quantity,
    };
    if (!payload.ingredient_name) {
      setMessage("원료명을 입력해주세요.", "error");
      return;
    }
    if (!Number.isFinite(quantity) || quantity <= 0) {
      setMessage("필요한 수량을 입력해주세요.", "error");
      return;
    }
    if (submit) submit.disabled = true;
    try {
      // Status and MOQ are set by the database; this only sends the request.
      const { data, error } = await client.from("group_buys").insert(payload).select("id").single();
      if (error || !data) {
        setMessage("공동구매 요청을 등록하지 못했습니다. 입력한 내용은 그대로 남아 있습니다.", "error");
        return;
      }
      form.reset();
      form.hidden = true;
      setMessage("요청이 접수되었습니다. Allingre가 최소 주문수량을 확인한 뒤 모집이 시작됩니다.", "success");
      await load();
    } finally {
      if (submit) submit.disabled = false;
    }
  });

  render();
  load();
})();
