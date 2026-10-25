(() => {
  "use strict";
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.getElementById("site-menu");
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  function setMenuOpen(open) {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
    navigation.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
  }
  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true"));
    navigation.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setMenuOpen(false)));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
        setMenuOpen(false);
        menuButton.focus();
      }
    });
    document.addEventListener("click", event => {
      if (menuButton.getAttribute("aria-expanded") === "true" && !navigation.contains(event.target) && !menuButton.contains(event.target)) setMenuOpen(false);
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1050) setMenuOpen(false);
    });
  }

  const filterButtons = Array.from(document.querySelectorAll(".filter-btn[data-filter]"));
  const projectCards = Array.from(document.querySelectorAll(".project-card[data-category]"));
  const search = document.getElementById("project-search");
  const count = document.getElementById("results-count");
  const empty = document.getElementById("project-empty");
  const reset = document.getElementById("reset-project-filters");
  let selectedFilter = "all";

  function applyFilters() {
    const query = (search?.value || "").trim().toLocaleLowerCase("ru-RU");
    let visible = 0;
    projectCards.forEach(card => {
      const inCategory = selectedFilter === "all" || (card.dataset.category || "").split(/\s+/).includes(selectedFilter);
      const matchesText = !query || card.textContent.toLocaleLowerCase("ru-RU").includes(query);
      card.hidden = !(inCategory && matchesText);
      if (!card.hidden) visible++;
    });
    filterButtons.forEach(button => {
      const active = button.dataset.filter === selectedFilter;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    if (count) count.textContent = "Показано: " + visible + " / " + projectCards.length;
    if (empty) empty.hidden = visible !== 0;
  }

  filterButtons.forEach(button => button.addEventListener("click", () => {
    selectedFilter = button.dataset.filter;
    applyFilters();
  }));
  search?.addEventListener("input", applyFilters);
  reset?.addEventListener("click", () => {
    selectedFilter = "all";
    if (search) search.value = "";
    applyFilters();
    search?.focus();
  });
  if (projectCards.length) {
    applyFilters();
    document.addEventListener("keydown", event => {
      const target = event.target;
      const typing = target instanceof HTMLElement && (["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName) || target.isContentEditable);
      if (event.key === "/" && !typing && search) {
        event.preventDefault();
        search.focus();
      }
      if (event.key === "Escape" && target === search && search.value) {
        search.value = "";
        applyFilters();
      }
    });
  }
})();