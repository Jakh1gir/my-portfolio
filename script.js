const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

document.addEventListener("DOMContentLoaded", () => {
  initSkillsTicker();
  initTypedText();
  initModalControls();
});

function initSkillsTicker() {
  const track = document.querySelector(".skill-items");
  const items = Array.from(document.querySelectorAll(".skill-item"));

  if (!track || items.length === 0 || reduceMotion) {
    return;
  }

  track.append(...items.map((item) => item.cloneNode(true)));

  let position = 0;
  let paused = false;
  const speed = 0.35;

  track.closest(".skill-list")?.addEventListener("mouseenter", () => {
    paused = true;
  });

  track.closest(".skill-list")?.addEventListener("mouseleave", () => {
    paused = false;
  });

  function animate() {
    const firstItem = track.firstElementChild;

    if (!paused && firstItem) {
      position -= speed;
      const itemWidth = firstItem.getBoundingClientRect().width + 12;

      if (Math.abs(position) >= itemWidth) {
        position += itemWidth;
        track.appendChild(firstItem);
      }

      track.style.transform = `translateX(${position}px)`;
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

function initTypedText() {
  const element = document.querySelector(".typed-text");

  if (!element) {
    return;
  }

  const messages = [
    "АСУ ТП: от сигнала датчика до логики управления",
    "C++ и Python для прикладных инженерных задач",
    "Надёжность системы начинается с понятной логики",
  ];

  if (reduceMotion) {
    element.textContent = messages[0];
    return;
  }

  let messageIndex = 0;
  let characterIndex = 0;
  let deleting = false;

  function type() {
    const message = messages[messageIndex];

    if (!deleting) {
      characterIndex += 1;
      element.textContent = message.slice(0, characterIndex);

      if (characterIndex === message.length) {
        deleting = true;
        window.setTimeout(type, 1800);
        return;
      }
    } else {
      characterIndex -= 1;
      element.textContent = message.slice(0, characterIndex);

      if (characterIndex === 0) {
        deleting = false;
        messageIndex = (messageIndex + 1) % messages.length;
      }
    }

    window.setTimeout(type, deleting ? 28 : 48);
  }

  type();
}

function initModalControls() {
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-hidden", "true");

    const close = modal.querySelector(".close");
    if (close) {
      close.setAttribute("role", "button");
      close.setAttribute("tabindex", "0");
      close.setAttribute("aria-label", "Закрыть окно");
      close.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          closeModal(modal.id);
        }
      });
    }
  });

  window.addEventListener("click", (event) => {
    if (event.target.classList?.contains("modal")) {
      closeModal(event.target.id);
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    const openModalElement = Array.from(
      document.querySelectorAll(".modal"),
    ).find((modal) => modal.style.display === "block");

    if (openModalElement) {
      closeModal(openModalElement.id);
    }
  });
}

function showDescription() {
  // Карточки всегда показывают описание; функция сохранена для старой разметки.
}

function hideDescription() {
  // Карточки всегда показывают описание; функция сохранена для старой разметки.
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);

  if (!modal) {
    return;
  }

  modal.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modal.querySelector(".close")?.focus();
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);

  if (!modal) {
    return;
  }

  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}
