(function () {
  const form = document.querySelector("#sourcingRequestForm");
  const list = document.querySelector("#sourcingRequestList");
  const message = document.querySelector("#sourcingRequestMessage");
  const key = () => {
    const member = typeof getCurrentMember === "function" ? getCurrentMember() : null;
    return member?.email ? `foodsourceSourcingRequests:${String(member.email).toLowerCase()}` : "";
  };
  const getItems = () => { try { return JSON.parse(localStorage.getItem(key()) || "[]"); } catch { return []; } };
  const esc = (value) => String(value || "").replace(/[&<>"']/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[char]));
  function render() {
    if (!list) return;
    if (!key()) { list.innerHTML = '<p class="empty-state">로그인 후 나의 소싱 현황을 확인할 수 있습니다.</p>'; return; }
    const items = getItems();
    list.innerHTML = items.length ? items.map((item) => `<article class="sourcing-request-item"><div><span class="sector-label">${esc(item.sector)}</span><strong>${esc(item.name)}</strong></div><p>필요 수량: ${esc(item.quantity || "확인 필요")} · 샘플: ${esc(item.sampleQuantity || "확인 필요")}</p><p>필요 서류: ${esc(item.documents || "없음")}</p><p>${esc(item.note || "추가 요청사항 없음")}</p><label><span>진행 현황 피드백</span><textarea data-feedback-id="${esc(item.id)}" rows="3">${esc(item.feedback || "")}</textarea></label><button class="outline-button" type="button" data-save-feedback="${esc(item.id)}">피드백 저장</button></article>`).join("") : '<p class="empty-state">등록한 소싱요청이 없습니다.</p>';
  }
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!key()) { window.location.href = "login.html?redirect=sourcing-request.html"; return; }
    const item = { id: crypto.randomUUID(), sector: document.querySelector("#sourcingSector").value, name: document.querySelector("#sourcingName").value.trim(), quantity: document.querySelector("#sourcingQuantity").value.trim(), sampleQuantity: document.querySelector("#sourcingSampleQuantity").value.trim(), documents: document.querySelector("#sourcingDocuments").value.trim(), note: document.querySelector("#sourcingNote").value.trim(), feedback: "", createdAt: new Date().toISOString() };
    localStorage.setItem(key(), JSON.stringify([item, ...getItems()]));
    form.reset(); message.textContent = "소싱요청이 등록되었습니다."; message.className = "form-message success"; render();
  });
  list?.addEventListener("click", (event) => { const button = event.target.closest("[data-save-feedback]"); if (!button) return; const id = button.dataset.saveFeedback; const field = list.querySelector(`[data-feedback-id="${CSS.escape(id)}"]`); const items = getItems().map((item) => item.id === id ? { ...item, feedback: field?.value || "" } : item); localStorage.setItem(key(), JSON.stringify(items)); button.textContent = "저장됨"; setTimeout(() => { button.textContent = "피드백 저장"; }, 1200); });
  render();
}());
