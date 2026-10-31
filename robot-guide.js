(() => {
  "use strict";

  // Decorative guide with one accessible button. The site keeps native anchor navigation.
  const main = document.querySelector("main");
  if (!main || document.getElementById("jakhon-robot")) return;

  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const robot = document.createElement("div");
  robot.id = "jakhon-robot";
  robot.className = "jakhon-robot";
  robot.innerHTML = [
    '<button class="jakhon-robot__button" type="button" aria-label="Поздороваться с роботом" title="Нажми на меня">',
    '<svg class="jakhon-robot__art" viewBox="0 0 74 96" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">',
    '<defs>',
      '<linearGradient id="jr-metal" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f2fcff"/><stop offset=".4" stop-color="#b7d5e3"/><stop offset=".8" stop-color="#739caf"/><stop offset="1" stop-color="#e2f4f7"/></linearGradient>',
      '<linearGradient id="jr-shell" x1="0" y1="0" x2=".8" y2="1"><stop stop-color="#ecfaff"/><stop offset=".54" stop-color="#91b4c9"/><stop offset="1" stop-color="#395e79"/></linearGradient>',
      '<linearGradient id="jr-face" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#10243b"/><stop offset="1" stop-color="#061323"/></linearGradient>',
      '<radialGradient id="jr-glow"><stop stop-color="#c4fff3"/><stop offset=".5" stop-color="#52e8d2"/><stop offset="1" stop-color="#148c91"/></radialGradient>',
    '</defs>',
    '<ellipse class="jr-shadow" cx="37" cy="92" rx="22" ry="3.5" fill="#03131a"/>',
    '<g class="jr-leg jr-leg-left"><rect x="23" y="74" width="9" height="12" rx="4" fill="#6c91a6" stroke="#d8eaf1" stroke-width="1"/><path d="M20 85q-1-4 4-4h8q5 0 5 5v3H20z" fill="url(#jr-metal)" stroke="#426e86" stroke-width="1.2"/></g>',
    '<g class="jr-leg jr-leg-right"><rect x="43" y="74" width="9" height="12" rx="4" fill="#6c91a6" stroke="#d8eaf1" stroke-width="1"/><path d="M40 85q-1-4 4-4h8q5 0 5 5v3H40z" fill="url(#jr-metal)" stroke="#426e86" stroke-width="1.2"/></g>',
    '<g class="jr-arm jr-arm-left"><rect x="9" y="57" width="10" height="19" rx="5" transform="rotate(16 14 60)" fill="url(#jr-metal)" stroke="#48738c" stroke-width="1.3"/><circle cx="10" cy="75" r="5" fill="#b9e4ea" stroke="#4f8f9e" stroke-width="1.3"/></g>',
    '<g class="jr-arm jr-arm-right"><rect x="54" y="57" width="10" height="19" rx="5" transform="rotate(-16 59 60)" fill="url(#jr-metal)" stroke="#48738c" stroke-width="1.3"/><circle cx="64" cy="75" r="5" fill="#b9e4ea" stroke="#4f8f9e" stroke-width="1.3"/></g>',
    '<rect x="18" y="51" width="38" height="31" rx="14" fill="url(#jr-shell)" stroke="#daf7ff" stroke-width="1.4"/>',
    '<path d="M22 63q15-7 30 0v12q-15 9-30 0z" fill="#143248" opacity=".93"/>',
    '<circle cx="37" cy="69" r="6" fill="#1e6470" stroke="#83ebdd" stroke-width="1.3"/>',
    '<circle class="jr-led" cx="37" cy="69" r="3.7" fill="url(#jr-glow)"/>',
    '<path d="M24 79q13 7 26 0" fill="none" stroke="#d4f7f5" opacity=".7" stroke-width="1.2"/>',
    '<g class="jr-head">',
      '<g class="jr-antenna"><path d="M37 17V8" stroke="#a9d5e4" stroke-width="3.3" stroke-linecap="round"/><circle cx="37" cy="6" r="4" fill="url(#jr-glow)" stroke="#cffefa" stroke-width="1.2"/></g>',
      '<rect x="4.5" y="34" width="9" height="15" rx="4.5" fill="#7c9eaf" stroke="#c1e1e8"/>',
      '<rect x="60.5" y="34" width="9" height="15" rx="4.5" fill="#7c9eaf" stroke="#c1e1e8"/>',
      '<rect x="9" y="15" width="56" height="44" rx="20" fill="url(#jr-metal)" stroke="#ecfcff" stroke-width="1.4"/>',
      '<path d="M14 29q8-13 20-12" fill="none" stroke="white" stroke-opacity=".86" stroke-width="2.5" stroke-linecap="round"/>',
      '<rect x="15" y="26" width="44" height="25" rx="12" fill="url(#jr-face)" stroke="#4e7f91" stroke-width="1.2"/>',
      '<rect x="19" y="29" width="36" height="3" rx="1.5" fill="#d6fcff" opacity=".12"/>',
      '<g class="jr-eye jr-eye-left"><ellipse cx="27" cy="38" rx="4.2" ry="5.7" fill="#73f7df"/><ellipse cx="25.5" cy="36.5" rx="1.4" ry="2" fill="#efffff"/></g>',
      '<g class="jr-eye jr-eye-right"><ellipse cx="47" cy="38" rx="4.2" ry="5.7" fill="#73f7df"/><ellipse cx="45.5" cy="36.5" rx="1.4" ry="2" fill="#efffff"/></g>',
      '<path d="M32 45q5 5 10 0" fill="none" stroke="#9cffe8" stroke-width="1.8" stroke-linecap="round"/>',
      '<circle cx="13" cy="46" r="2" fill="#f9b3c1" opacity=".78"/>',
      '<circle cx="61" cy="46" r="2" fill="#f9b3c1" opacity=".78"/>',
    '</g>',
    '</svg>',
    '</button>',
    '<div class="jakhon-robot__bubble" aria-hidden="true"></div>'
  ].join("");
  document.body.append(robot);

  const button = robot.querySelector("button");
  const bubble = robot.querySelector(".jakhon-robot__bubble");
  const waypoints = Array.from(new Set(document.querySelectorAll("main > section, main section[id]")))
    .filter(section => section.querySelector("h1,h2"));
  if (!waypoints.length && main.querySelector("h1,h2")) waypoints.push(main);
  const position = { x: 0, y: 0 };
  let frame = 0;
  let scrollTimer = 0;
  let navTimer = 0;
  let bubbleTimer = 0;
  let pendingTarget = null;
  let currentTarget = null;
  let lastMove = 0;

  const clamp = (value, low, high) => Math.max(low, Math.min(high, value));
  const headerBottom = () => document.querySelector(".site-header")?.getBoundingClientRect().bottom || 0;
  const dimensions = () => ({ width: robot.getBoundingClientRect().width || 74, height: robot.getBoundingClientRect().height || 96 });

  function positionAt(x, y) {
    position.x = x;
    position.y = y;
    robot.style.transform = "translate3d(" + x.toFixed(1) + "px," + y.toFixed(1) + "px,0)";
  }

  function homePosition() {
    const size = dimensions();
    return { x: innerWidth - size.width - 17, y: innerHeight - size.height - 32 };
  }

  function headingFor(element) {
    if (!element) return document.querySelector("#hero-title");
    if (element.id === "top") return document.querySelector("#hero-title");
    if (element.matches("h1,h2")) return element;
    return element.querySelector("h1,h2") || element;
  }

  function headingPosition(element) {
    const heading = headingFor(element);
    if (!heading || !heading.isConnected) return homePosition();
    const r = heading.getBoundingClientRect();
    const size = dimensions();
    const minY = Math.max(14, headerBottom() + 10);
    let x;
    if (innerWidth <= 820) {
      x = innerWidth - size.width - 12; // Avoid covering narrow mobile headings.
    } else {
      // Measure the actual text lines, not the full block box of a heading.
      const range = document.createRange();
      range.selectNodeContents(heading);
      const rects = Array.from(range.getClientRects()).filter(b => b.width > 5 && b.height > 5);
      range.detach?.();
      const top = rects.length ? Math.min(...rects.map(b => b.top)) : r.top;
      const firstLine = rects.filter(b => Math.abs(b.top - top) < 12);
      const right = firstLine.length ? Math.max(...firstLine.map(b => b.right)) : r.right;
      x = right + 13;
      if (x > innerWidth - size.width - 15) x = r.left - size.width - 12;
      x = clamp(x, 12, innerWidth - size.width - 12);
    }
    const y = clamp(r.top - size.height * .38, minY, innerHeight - size.height - 14);
    return { x, y };
  }

  function linkPosition(link) {
    const r = link.getBoundingClientRect();
    const size = dimensions();
    return {
      x: clamp(r.right - size.width / 2, 10, innerWidth - size.width - 10),
      y: clamp(r.bottom + 7, headerBottom() + 6, innerHeight - size.height - 10)
    };
  }

  function clearFlight() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    robot.classList.remove("is-flying", "is-landing", "is-facing-left");
  }

  function hopTo(point, quick = false) {
    if (!point || motion.matches) return;
    clearFlight();
    const fromX = position.x, fromY = position.y;
    const dx = point.x - fromX, dy = point.y - fromY;
    const distance = Math.hypot(dx, dy);
    if (distance < 16) return;
    const duration = quick ? clamp(330 + distance * .26, 360, 570) : clamp(460 + distance * .36, 480, 920);
    const height = clamp(28 + distance * .16, 36, 115);
    const started = performance.now();
    robot.classList.add("is-flying");
    if (dx < -5) robot.classList.add("is-facing-left");

    function draw(now) {
      const t = clamp((now - started) / duration, 0, 1);
      const travel = t * t * (3 - 2 * t);
      const bounce = Math.sin(t * Math.PI) * height;
      positionAt(fromX + dx * travel, fromY + dy * travel - bounce);
      if (t < 1) {
        frame = requestAnimationFrame(draw);
      } else {
        frame = 0;
        positionAt(point.x, point.y);
        robot.classList.remove("is-flying", "is-facing-left");
        robot.classList.add("is-landing");
        window.setTimeout(() => robot.classList.remove("is-landing"), 430);
      }
    }
    frame = requestAnimationFrame(draw);
    lastMove = performance.now();
  }

  function placeBy(element, animated = true) {
    if (!element || motion.matches) return;
    currentTarget = element;
    const point = headingPosition(element);
    if (animated) hopTo(point);
    else {
      clearFlight();
      positionAt(point.x, point.y);
    }
  }

  function activeSection() {
    const marker = clamp(innerHeight * .38, 170, 360);
    let chosen = null;
    for (const section of waypoints) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= marker && rect.bottom > headerBottom() + 15) chosen = section;
    }
    if (!chosen) chosen = waypoints.find(section => section.getBoundingClientRect().bottom > marker);
    return chosen || waypoints[waypoints.length - 1];
  }

  function finishNavigation() {
    if (!pendingTarget) return;
    const target = pendingTarget;
    pendingTarget = null;
    if (navTimer) clearTimeout(navTimer);
    navTimer = 0;
    if (!motion.matches) placeBy(target);
  }

  function settleAfterScroll() {
    if (scrollTimer) clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout(() => {
      scrollTimer = 0;
      if (pendingTarget) finishNavigation();
      else if (!motion.matches && performance.now() - lastMove > 620) {
        const next = activeSection();
        if (next && next !== currentTarget) placeBy(next);
      }
    }, 185);
  }

  document.addEventListener("click", event => {
    if (!(event.target instanceof Element)) return;
    const link = event.target.closest('a[href^="#"]');
    if (!link || link.closest(".skip-link")) return;
    const hash = link.getAttribute("href");
    if (!hash || hash.length < 2) return;
    let id;
    try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
    const target = id === "top" ? document.querySelector(".hero") : document.getElementById(id);
    if (!target) return;
    pendingTarget = target;
    clearTimeout(navTimer);
    if (!motion.matches && link.closest(".site-header") && innerWidth > 820) {
      hopTo(linkPosition(link), true);
    }
    // Keep the browser's native hash navigation, focus handling, and smooth scroll.
    navTimer = window.setTimeout(finishNavigation, 1050);
  });

  window.addEventListener("scroll", settleAfterScroll, { passive: true });
  window.addEventListener("scrollend", () => {
    if (pendingTarget) finishNavigation();
  }, { passive: true });
  window.addEventListener("hashchange", () => {
    if (!pendingTarget) settleAfterScroll();
  });
  window.addEventListener("resize", () => {
    if (motion.matches) positionAt(homePosition().x, homePosition().y);
    else if (currentTarget) placeBy(currentTarget, false);
    else positionAt(homePosition().x, homePosition().y);
  }, { passive: true });

  function language() {
    const value = (document.documentElement.lang || "ru").toLowerCase();
    return value.startsWith("uz") ? "uz" : value.startsWith("en") ? "en" : "ru";
  }
  function localizeButton() {
    const lang = language();
    const labels = {
      ru: ["Поздороваться с роботом", "Нажми на меня", "Привет!"],
      en: ["Say hello to the robot", "Tap me", "Hello!"],
      uz: ["Robot bilan salomlashing", "Meni bosing", "Salom!"]
    };
    const words = labels[lang];
    button.setAttribute("aria-label", words[0]);
    button.title = words[1];
    return words[2];
  }

  button.addEventListener("click", event => {
    event.stopPropagation();
    const greeting = localizeButton();
    bubble.textContent = greeting;
    bubble.classList.add("is-visible");
    if (!motion.matches) {
      robot.classList.remove("is-excited", "is-landing");
      // Re-trigger the reaction on every click.
      void robot.offsetWidth;
      robot.classList.add("is-excited");
      window.setTimeout(() => robot.classList.remove("is-excited"), 740);
    }
    clearTimeout(bubbleTimer);
    bubbleTimer = window.setTimeout(() => bubble.classList.remove("is-visible"), 1700);
  });

  const langSelector = document.getElementById("site-language-select");
  langSelector?.addEventListener("change", () => window.setTimeout(localizeButton, 0));
  motion.addEventListener?.("change", () => {
    clearFlight();
    if (motion.matches) positionAt(homePosition().x, homePosition().y);
    else placeBy(activeSection(), false);
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && frame) {
      clearFlight();
      if (currentTarget && !motion.matches) placeBy(currentTarget, false);
    }
  });

  localizeButton();
  const start = motion.matches ? homePosition() : headingPosition(activeSection());
  positionAt(start.x, start.y);
  currentTarget = activeSection();
  robot.classList.add("is-ready");
  if (location.hash.length > 1) window.setTimeout(settleAfterScroll, 500);
})();
