(() => {
  "use strict";

  const rates = Object.freeze({
    ultra: { label: "Ultra", price: 3.5, generation: 1.4 },
    high: { label: "High", price: 2.5, generation: 1.0 },
    medium: { label: "Medium", price: 1.5, generation: 0.6 },
    low: { label: "Low", price: 0.8, generation: 0.4 }
  });

  const planButtons = Array.from(document.querySelectorAll(".motion-plan[data-plan]"));
  const durationInput = document.getElementById("video-duration");
  const durationValue = document.getElementById("duration-value");
  const total = document.getElementById("video-total");
  const deposit = document.getElementById("video-deposit");
  const remainder = document.getElementById("video-remainder");
  const selectedLabel = document.getElementById("selected-plan");
  const copyStatus = document.getElementById("copy-status");
  const extraInputs = Array.from(document.querySelectorAll(".motion-extras input[type=checkbox]"));
  let selectedPlan = "ultra";

  const dollars = amount => "$" + amount.toFixed(2);
  function getDuration() {
    if (!durationInput) return 20;
    return Math.min(120, Math.max(5, Number(durationInput.value) || 20));
  }
  function getExtras() {
    return extraInputs.filter(input => input.checked).map(input => input.value);
  }
  function calculations() {
    const plan = rates[selectedPlan];
    const seconds = getDuration();
    const cost = plan.price * seconds;
    const generation = plan.generation * seconds;
    return { plan, seconds, cost, generation, outstanding: cost - generation, extras: getExtras() };
  }

  function render() {
    const { plan, seconds, cost, generation, outstanding } = calculations();
    if (durationValue) durationValue.textContent = String(seconds);
    if (selectedLabel) selectedLabel.textContent = plan.label.toUpperCase();
    if (total) total.textContent = dollars(cost);
    if (deposit) deposit.textContent = dollars(generation);
    if (remainder) remainder.textContent = dollars(outstanding);
    planButtons.forEach(button => {
      const active = button.dataset.plan === selectedPlan;
      button.classList.toggle("is-selected", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function motionMessage() {
    const { plan, seconds, cost, generation, outstanding, extras } = calculations();
    return [
      "Заявка на AI-видео — JakhonUZ AI Production",
      "Тариф: " + plan.label,
      "Длительность: " + seconds + " сек",
      "Ставка: " + dollars(plan.price) + " / сек",
      "Стоимость видео: " + dollars(cost),
      "Предоплата за генерацию: " + dollars(generation),
      "Остаток: " + dollars(outstanding),
      "Дополнительно: " + (extras.length ? extras.join(", ") + " (стоимость отдельно)" : "не выбрано"),
      "Прошу уточнить сроки и условия работы."
    ].join("\n");
  }
  async function copyText(value) {
    if (!navigator.clipboard?.writeText) return false;
    try {
      await navigator.clipboard.writeText(value);
      return true;
    } catch (_) {
      return false;
    }
  }
  function showCopyResult(success, node) {
    if (node) node.textContent = success
      ? "Текст скопирован. Вставьте его в сообщение Telegram."
      : "Не удалось скопировать автоматически. Разрешите доступ к буферу обмена или скопируйте вручную.";
  }
  planButtons.forEach(button => button.addEventListener("click", () => {
    if (!Object.prototype.hasOwnProperty.call(rates, button.dataset.plan)) return;
    selectedPlan = button.dataset.plan;
    render();
  }));
  durationInput?.addEventListener("input", render);
  extraInputs.forEach(input => input.addEventListener("change", render));
  document.getElementById("motion-copy")?.addEventListener("click", async () => {
    showCopyResult(await copyText(motionMessage()), copyStatus);
  });
  document.getElementById("motion-order")?.addEventListener("click", () => {
    // Open immediately during the user gesture to avoid popup blocking.
    const tab = window.open("https://t.me/JakhonUZ", "_blank", "noopener,noreferrer");
    const message = motionMessage();
    copyText(message).then(ok => showCopyResult(ok, copyStatus));
    if (!tab && copyStatus) copyStatus.textContent = "Откройте t.me/JakhonUZ и отправьте заявку. " + message;
  });
  render();

  const form = document.getElementById("quote-form");
  const quoteStatus = document.getElementById("quote-status");
  function briefText() {
    const type = document.getElementById("quote-type")?.value.trim() || "";
    const name = document.getElementById("quote-name")?.value.trim() || "";
    const description = document.getElementById("quote-description")?.value.trim() || "";
    return [
      "Новая заявка / JAKHON",
      "Направление: " + type,
      "Контакт: " + name,
      "Описание задачи: " + description,
      type === "AI Motion / Runway" ? "\nПредварительный расчёт AI-видео:\n" + motionMessage() : ""
    ].filter(Boolean).join("\n");
  }
  document.getElementById("quote-copy")?.addEventListener("click", async () => {
    const text = briefText();
    if (!document.getElementById("quote-name")?.value.trim() || !document.getElementById("quote-description")?.value.trim()) {
      if (quoteStatus) quoteStatus.textContent = "Введите имя и описание задачи.";
      return;
    }
    showCopyResult(await copyText(text), quoteStatus);
  });
  form?.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const tab = window.open("https://t.me/JakhonUZ", "_blank", "noopener,noreferrer");
    const message = briefText();
    copyText(message).then(ok => showCopyResult(ok, quoteStatus));
    if (!tab && quoteStatus) quoteStatus.textContent = "Откройте t.me/JakhonUZ и передайте бриф. " + message;
  });
})();