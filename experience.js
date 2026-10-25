/* JAKHON Experience Engine — no external packages and no network requests. */
(() => {
  "use strict";

  const root = document.documentElement;
  const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  let explicitMotionOff = false;
  try { explicitMotionOff = localStorage.getItem("jakhon-motion-disabled") === "1"; } catch (_) {}
  const isReduced = () => reducedQuery.matches || explicitMotionOff;
  root.classList.add("js-motion");
  if (explicitMotionOff) root.classList.add("motion-off");

  const progress = document.createElement("div");
  progress.className = "page-progress";
  progress.setAttribute("aria-hidden", "true");
  document.body.prepend(progress);

  const motionButton = document.createElement("button");
  motionButton.type = "button";
  motionButton.className = "motion-control";
  motionButton.setAttribute("aria-label", "Переключить анимации сайта");
  motionButton.innerHTML = '<span aria-hidden="true">✳</span><b></b>';
  const motionButtonLabel = motionButton.querySelector("b");
  const refreshMotionLabel = () => {
    const on = !isReduced();
    motionButtonLabel.textContent = on ? "АНИМАЦИЯ ВКЛ" : "АНИМАЦИЯ ВЫКЛ";
    motionButton.setAttribute("aria-pressed", String(on));
  };
  motionButton.addEventListener("click", () => {
    explicitMotionOff = !explicitMotionOff;
    root.classList.toggle("motion-off", explicitMotionOff);
    try { localStorage.setItem("jakhon-motion-disabled", explicitMotionOff ? "1" : "0"); } catch (_) {}
    if (explicitMotionOff) {
      document.querySelectorAll(".reveal").forEach(node => node.classList.add("is-visible"));
      const graphic = document.querySelector(".hero-visual");
      graphic?.style.setProperty("--tilt-x", "0deg");
      graphic?.style.setProperty("--tilt-y", "0deg");
    }
    refreshMotionLabel();
  });
  refreshMotionLabel();
  if (!reducedQuery.matches) document.body.appendChild(motionButton);
  if (typeof reducedQuery.addEventListener === "function") {
    reducedQuery.addEventListener("change", () => {
      refreshMotionLabel();
      motionButton.hidden = reducedQuery.matches;
    });
  }

  let scrollPending = false;
  const header = document.querySelector(".site-header");
  const refreshScroll = () => {
    const total = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const ratio = Math.max(0, Math.min(1, window.scrollY / total));
    progress.style.transform = "scaleX(" + ratio + ")";
    header?.classList.toggle("is-scrolled", window.scrollY > 35);
    scrollPending = false;
  };
  window.addEventListener("scroll", () => {
    if (!scrollPending) {
      scrollPending = true;
      requestAnimationFrame(refreshScroll);
    }
  }, { passive: true });
  window.addEventListener("resize", () => {
    if (!scrollPending) {
      scrollPending = true;
      requestAnimationFrame(refreshScroll);
    }
  }, { passive: true });
  refreshScroll();

  // Section reveals are progressive enhancement only; all content stays
  // visible for no-JS browsers and for reduced-motion users.
  const revealTargets = document.querySelectorAll([
    ".about-grid > *", ".services-section .section-head-inline > *",
    ".services-grid .service", ".projects-section .section-head-inline > *",
    ".projects-grid .project-card", ".career-layout > *",
    ".career-steps > div", ".hf-strip", ".approach-grid > *",
    ".steps li", ".pricing-grid .price-card", ".price-list-panel",
    ".faq-grid > *", ".contact-section h2", ".contact-grid .contact-item",
    ".lab-intro > *", ".lab-shell", ".studio-hero-grid > *",
    ".motion-plans .motion-plan", ".motion-calc", ".bot-studio-card",
    ".studio-career-timeline article", ".hf-panel", ".quote-form",
    ".includes-grid > div", ".studio-teaser .teaser-layout > *"
  ].join(","));
  revealTargets.forEach((node, index) => {
    node.classList.add("reveal");
    node.style.setProperty("--reveal-delay", String((index % 4) * 75) + "ms");
  });
  if (!isReduced() && "IntersectionObserver" in window) {
    const revealer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -28px 0px", threshold: 0.08 });
    revealTargets.forEach(node => revealer.observe(node));
  } else {
    revealTargets.forEach(node => node.classList.add("is-visible"));
  }

  // Viewport-aware navigation: never overrides click/keyboard behavior.
  if ("IntersectionObserver" in window) {
    const links = new Map(
      [...document.querySelectorAll('.site-nav a[href^="#"]')]
        .map(link => [link.getAttribute("href").slice(1), link])
    );
    const sections = [...links.keys()].map(id => document.getElementById(id)).filter(Boolean);
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach((link, id) => link.classList.toggle("is-current", id === entry.target.id));
      });
    }, { rootMargin: "-30% 0px -60% 0px", threshold: 0 });
    sections.forEach(section => sectionObserver.observe(section));
  }

  // Count the user's actual nine years of energy-sector experience.
  const counter = document.querySelector(".count-up[data-count]");
  if (counter && !isReduced() && "IntersectionObserver" in window) {
    let counted = false;
    const countObserver = new IntersectionObserver(entries => {
      if (counted || !entries[0]?.isIntersecting) return;
      counted = true;
      countObserver.disconnect();
      const value = Math.max(0, Number(counter.dataset.count) || 9);
      const started = performance.now();
      const duration = 950;
      const animate = now => {
        if (isReduced()) { counter.textContent = value + " лет"; return; }
        const t = Math.min(1, (now - started) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        counter.textContent = Math.min(value, Math.ceil(eased * value)) + " лет";
        if (t < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, { threshold: 0.4 });
    countObserver.observe(counter);
  }

  // Mouse spotlight and restrained physical feedback: desktop only.
  const hero = document.querySelector(".hero");
  const heroGraphic = document.querySelector(".hero-visual");
  if (finePointer.matches) {
    let pointerRaf = false;
    let lastPointer = null;
    hero?.addEventListener("pointermove", event => {
      if (isReduced()) return;
      lastPointer = { x: event.clientX, y: event.clientY };
      if (pointerRaf) return;
      pointerRaf = true;
      requestAnimationFrame(() => {
        pointerRaf = false;
        if (!hero || !lastPointer) return;
        const rect = hero.getBoundingClientRect();
        hero.style.setProperty("--cursor-x", (lastPointer.x - rect.left) + "px");
        hero.style.setProperty("--cursor-y", (lastPointer.y - rect.top) + "px");
      });
    }, { passive: true });
    heroGraphic?.addEventListener("pointermove", event => {
      if (isReduced()) return;
      const rect = heroGraphic.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      heroGraphic.style.setProperty("--tilt-x", (-y * 3.5).toFixed(2) + "deg");
      heroGraphic.style.setProperty("--tilt-y", (x * 5.5).toFixed(2) + "deg");
    }, { passive: true });
    heroGraphic?.addEventListener("pointerleave", () => {
      heroGraphic.style.setProperty("--tilt-x", "0deg");
      heroGraphic.style.setProperty("--tilt-y", "0deg");
    });

    document.querySelectorAll(".project-card, .service, .price-card, .bot-studio-card").forEach(card => {
      if (card.matches(".project-card")) card.classList.add("is-tiltable");
      card.addEventListener("pointermove", event => {
        if (isReduced()) return;
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        card.style.setProperty("--spot-x", (x * 100).toFixed(1) + "%");
        card.style.setProperty("--spot-y", (y * 100).toFixed(1) + "%");
        if (card.matches(".project-card")) {
          card.style.setProperty("--card-ry", ((x - .5) * 3).toFixed(2) + "deg");
          card.style.setProperty("--card-rx", ((.5 - y) * 3).toFixed(2) + "deg");
        }
      }, { passive: true });
      card.addEventListener("pointerleave", () => {
        card.style.removeProperty("--card-rx");
        card.style.removeProperty("--card-ry");
      });
    });
  }

  // A transparent example topology, not actual equipment monitoring.
  const scenarios = Object.freeze({
    plc: {
      label: "CONTROL SYSTEM / SIMULATION",
      title: "Управление начинается на уровне контроллера",
      description: "Полевой сигнал поступает в ПЛК. Логика работает локально, а оператор получает состояние через HMI и SCADA.",
      nodes: [["INPUT","FIELD","Датчики / I/O"],["LOGIC","PLC","Control Engine"],["OUTPUT","HMI","Operator View"]],
      path: "M0 80 L75 80 L75 57 L140 57 L140 75 L215 75 L215 40 L275 40 L275 54 L360 54 L360 19 L440 19 L440 54 L515 54 L515 35 L610 35 L610 65 L700 65",
      logs: ["01 · INPUT REGISTERED","02 · LOGIC EXECUTED","03 · STATE VISUALIZED"]
    },
    data: {
      label: "DATA INTEGRATION / SIMULATION",
      title: "Данные превращаются в управляемую систему",
      description: "Локальная база хранит записи и историю изменений. API предоставляет структурированные данные интерфейсу без публикации файлов БД в сеть.",
      nodes: [["SOURCE","ASSETS","KKS / Events"],["STORAGE","LOCAL DB","Audit / API"],["VIEW","DESKTOP","Search / Export"]],
      path: "M0 61 L80 61 L95 41 L155 41 L165 70 L235 70 L250 35 L310 35 L325 58 L410 58 L430 18 L490 18 L512 42 L580 42 L610 65 L700 65",
      logs: ["01 · INPUT VALIDATED","02 · VERSION STORED","03 · VIEW UPDATED"]
    },
    ai: {
      label: "DOCUMENT INTELLIGENCE / CONCEPT",
      title: "AI помогает найти источник, а не подменяет его",
      description: "Документы анализируются локально. Извлечение текста, поиск фрагментов и ответы модели разделены, чтобы можно было проверять первоисточник.",
      nodes: [["SOURCE","DOCS","PDF / DXF"],["INDEX","VISUAL","OCR / Search"],["ASSIST","AI CORE","Grounded Q&A"]],
      path: "M0 75 L55 75 L95 62 L145 62 L190 22 L230 22 L275 55 L335 55 L370 32 L415 32 L455 72 L510 72 L570 36 L615 36 L670 53 L700 53",
      logs: ["01 · DOCUMENT READ","02 · SOURCES INDEXED","03 · ANSWER REVIEWED"]
    }
  });
  const lab = document.querySelector("[data-lab]");
  if (lab) {
    const sceneButtons = [...lab.querySelectorAll("[data-scene]")];
    const sceneNames = Object.keys(scenarios);
    const els = {
      tag: document.getElementById("lab-scene-tag"),
      sequence: document.getElementById("lab-sequence"),
      title: document.getElementById("lab-output-title"),
      text: document.getElementById("lab-output-text"),
      wave: document.getElementById("lab-wave-path"),
      nodes: [...lab.querySelectorAll(".lab-node")],
      logs: [1,2,3].map(i => document.getElementById("lab-log-" + i))
    };
    sceneButtons.forEach(button => button.addEventListener("click", () => {
      const id = button.dataset.scene;
      const scene = scenarios[id];
      if (!scene) return;
      sceneButtons.forEach(item => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      if (els.tag) els.tag.textContent = scene.label;
      if (els.sequence) els.sequence.textContent = "SCENE 0" + (sceneNames.indexOf(id) + 1) + " / 03";
      if (els.title) els.title.textContent = scene.title;
      if (els.text) els.text.textContent = scene.description;
      if (els.wave) els.wave.setAttribute("d", scene.path);
      els.nodes.forEach((node, index) => {
        const item = scene.nodes[index];
        if (!item) return;
        const badge = node.querySelector("span");
        const heading = node.querySelector("strong");
        const detail = node.querySelector("small");
        if (badge) badge.textContent = item[0];
        if (heading) heading.textContent = item[1];
        if (detail) detail.textContent = item[2];
      });
      els.logs.forEach((item,index) => { if (item) item.textContent = scene.logs[index]; });
      if (!isReduced()) {
        lab.classList.remove("is-switching");
        // Restart only the diagram's own CSS path animation.
        void lab.offsetWidth;
        lab.classList.add("is-switching");
      }
    }));
  }

  // Expand project dossiers without leaving the page.
  const dialog = document.getElementById("case-dialog");
  if (dialog && typeof dialog.showModal === "function") {
    const title = document.getElementById("case-dialog-title");
    const category = document.getElementById("case-dialog-category");
    const description = document.getElementById("case-dialog-description");
    const tags = document.getElementById("case-dialog-tags");
    document.querySelectorAll(".project-card").forEach(card => {
      const info = card.querySelector(".project-info");
      const bottom = info?.querySelector(".project-bottom");
      if (!info || !bottom) return;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "project-more";
      button.textContent = "Открыть кейс";
      button.setAttribute("aria-haspopup", "dialog");
      bottom.before(button);
      button.addEventListener("click", () => {
        if (title) title.textContent = card.querySelector("h3")?.textContent.trim() || "Проект";
        if (category) category.textContent = (card.querySelector(".project-type")?.textContent.trim() || "PROJECT") + " / " + (card.querySelector(".project-status")?.textContent.trim() || "Информация");
        if (description) description.textContent = info.querySelector("p")?.textContent.trim() || "Описание уточняется.";
        if (tags) {
          tags.replaceChildren();
          info.querySelectorAll(".pills span").forEach(item => {
            const tag = document.createElement("span");
            tag.textContent = item.textContent.trim();
            tags.appendChild(tag);
          });
        }
        dialog.showModal();
      });
    });
    dialog.querySelector(".case-dialog-close")?.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", event => {
      if (event.target === dialog) dialog.close();
    });
  }

  // AI Studio retains its existing pricing engine; animate only display updates.
  if (!isReduced()) {
    const fields = document.querySelectorAll("#video-duration, .motion-plan, .motion-extras input");
    const prices = ["video-total","video-deposit","video-remainder"]
      .map(id => document.getElementById(id)).filter(Boolean);
    fields.forEach(field => field.addEventListener("input", () => {
      prices.forEach(el => {
        if (typeof el.animate !== "function") return;
        el.animate([{transform:"scale(.94)",opacity:.65},{transform:"scale(1)",opacity:1}],{duration:290,easing:"cubic-bezier(.16,1,.3,1)"});
      });
    }, { passive: true }));
    document.querySelectorAll(".motion-plan").forEach(field => field.addEventListener("click", () => {
      prices.forEach(el => {
        if (typeof el.animate === "function") el.animate([{transform:"translateY(5px)",opacity:.6},{transform:"translateY(0)",opacity:1}],{duration:320,easing:"ease-out"});
      });
    }));
  }
})();