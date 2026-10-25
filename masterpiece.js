/* JAKHON 2026 / Masterpiece Engine.
   Everything runs in-browser. No trackers, WebGL, frameworks, or external requests. */
(() => {
  "use strict";

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const prefersQuiet = () => motionQuery.matches || document.documentElement.classList.contains("motion-off");
  const $ = (selector, context=document) => context.querySelector(selector);
  const $$ = (selector, context=document) => [...context.querySelectorAll(selector)];

  // 01: Atmospheric signal field. Abstract generative art, not telemetry.
  const canvas = $("#network-canvas");
  const hero = $(".masterpiece-hero");
  if (canvas && hero) {
    const context = canvas.getContext("2d", { alpha: true });
    if (context) {
      const desktopPointer = window.matchMedia("(hover: hover) and (pointer: fine)");
      let width = 1, height = 1, pixelRatio = 1, nodes = [];
      let isOnScreen = true, drawing = false, frameId = 0, lastPaint = 0;
      let pointer = { x: -9999, y: -9999, active: false };
      let seed = 137;
      const random = () => {
        seed = (seed * 1664525 + 1013904223) >>> 0;
        return seed / 4294967296;
      };
      function resize() {
        const bounds = hero.getBoundingClientRect();
        width = Math.max(1, Math.floor(bounds.width));
        height = Math.max(1, Math.floor(bounds.height));
        pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
        canvas.width = Math.ceil(width * pixelRatio);
        canvas.height = Math.ceil(height * pixelRatio);
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        seed = 137;
        const count = width < 600 ? 23 : width < 1000 ? 36 : 58;
        nodes = Array.from({ length: count }, () => ({
          x: random() * width,
          y: random() * height,
          vx: (random() - .5) * .29,
          vy: (random() - .5) * .29,
          size: .7 + random() * 1.35,
          phase: random() * Math.PI * 2,
          glow: random() > .78
        }));
      }
      function draw(time) {
        frameId = 0;
        if (prefersQuiet() || !isOnScreen || document.hidden) {
          drawing = false;
          context.clearRect(0,0,width,height);
          return;
        }
        drawing = true;
        if (time - lastPaint < 32) {
          frameId = requestAnimationFrame(draw);
          return;
        }
        lastPaint = time;
        context.clearRect(0,0,width,height);
        const distanceLimit = width < 600 ? 95 : 145;
        const distanceSquared = distanceLimit * distanceLimit;
        const rightFocus = width > 800 ? width * .54 : width * .5;
        nodes.forEach(node => {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < -10) node.x = width + 10;
          if (node.x > width + 10) node.x = -10;
          if (node.y < -10) node.y = height + 10;
          if (node.y > height + 10) node.y = -10;
        });
        for (let i = 0; i < nodes.length; i++) {
          const a = nodes[i];
          for (let j = i + 1; j < nodes.length; j++) {
            const b = nodes[j];
            const dx = a.x - b.x, dy = a.y - b.y, d2 = dx*dx + dy*dy;
            if (d2 > distanceSquared) continue;
            const midpointX = (a.x + b.x) / 2;
            const baseAlpha = .105 * (1 - d2 / distanceSquared) * (.3 + .7 * midpointX / Math.max(1,width));
            const nearPointer = pointer.active && (pointer.x - midpointX)**2 + (pointer.y - (a.y+b.y)/2)**2 < 180*180;
            context.beginPath();
            context.strokeStyle = nearPointer ? "rgba(174,255,203," + Math.min(.42,baseAlpha*3.1) + ")" : "rgba(111,214,202," + baseAlpha + ")";
            context.lineWidth = nearPointer ? 1.1 : .62;
            context.moveTo(a.x,a.y);
            context.lineTo(b.x,b.y);
            context.stroke();
          }
          const focus = Math.max(.25, Math.min(1, .45 + .5 * a.x / Math.max(1,width)));
          const pulse = .72 + .28 * Math.sin(time * .0016 + a.phase);
          const radius = a.size * pulse;
          context.beginPath();
          context.arc(a.x,a.y,radius,0,2*Math.PI);
          context.fillStyle = "rgba(166,250,222," + (.18*focus + (a.glow ? .23 : .04)) + ")";
          context.fill();
          if (a.glow && Math.abs(a.x - rightFocus) < width*.42) {
            context.beginPath();
            context.arc(a.x,a.y,4.4,0,2*Math.PI);
            context.fillStyle = "rgba(91,231,204,.027)";
            context.fill();
          }
        }
        if (pointer.active) {
          const g = context.createRadialGradient(pointer.x,pointer.y,0,pointer.x,pointer.y,150);
          g.addColorStop(0,"rgba(108,240,200,.055)");
          g.addColorStop(1,"rgba(108,240,200,0)");
          context.fillStyle = g;
          context.fillRect(pointer.x-150,pointer.y-150,300,300);
        }
        frameId = requestAnimationFrame(draw);
      }
      function wake() {
        if (drawing || frameId || prefersQuiet() || !isOnScreen || document.hidden) return;
        frameId = requestAnimationFrame(draw);
      }
      function pause() {
        cancelAnimationFrame(frameId);
        frameId = 0;
        drawing = false;
        context.clearRect(0,0,width,height);
      }
      const resizeDebounced = (() => {
        let pending = false;
        return () => {
          if (pending) return;
          pending = true;
          requestAnimationFrame(() => { pending = false; resize(); wake(); });
        };
      })();
      resize();
      wake();
      if ("ResizeObserver" in window) new ResizeObserver(resizeDebounced).observe(hero);
      else window.addEventListener("resize", resizeDebounced,{passive:true});
      document.addEventListener("visibilitychange", () => document.hidden ? pause() : wake());
      motionQuery.addEventListener?.("change", () => prefersQuiet() ? pause() : wake());
      const classWatcher = new MutationObserver(() => prefersQuiet() ? pause() : wake());
      classWatcher.observe(document.documentElement,{attributes:true,attributeFilter:["class"]});
      if ("IntersectionObserver" in window) {
        new IntersectionObserver(entries => {
          isOnScreen = entries[0]?.isIntersecting ?? false;
          if (!isOnScreen) pause(); else wake();
        },{rootMargin:"100px"}).observe(hero);
      }
      if (desktopPointer.matches) {
        hero.addEventListener("pointermove", event => {
          const rect = hero.getBoundingClientRect();
          pointer.x = event.clientX - rect.left;
          pointer.y = event.clientY - rect.top;
          pointer.active = true;
        },{passive:true});
        hero.addEventListener("pointerleave", () => {pointer.active = false;});
      }
    }
  }

  // 02: Three editorial project worlds. Visual representations, not screenshots.
  const workRoot = $("[data-masterworks]");
  if (workRoot) {
    const buttons = $$(".masterworks-item[data-work]",workRoot);
    const panels = $$(".masterworks-scene[data-work-scene]",workRoot);
    const descriptions = Object.freeze({
      calc: {
        label:"INTERACTIVE CONCEPT / J1CALC",
        category:"ENGINEERING / ANDROID",
        headline:"Инструменты, которые работают даже без интернета.",
        description:"Инженерные расчёты, измерительные цепи и протоколы в офлайн-приложении для практической работы."
      },
      database: {
        label:"INTERACTIVE CONCEPT / LOCAL_DB",
        category:"DATA PLATFORM / ON-PREMISE",
        headline:"Данные остаются под вашим контролем.",
        description:"Локальная инженерная база с аудитом изменений, гибкими полями, поиском и обменом Excel."
      },
      edge: {
        label:"REFERENCE ARCHITECTURE / PROTOTYPE",
        category:"C++20 / MQTT / ESP32",
        headline:"Управление продолжает работать локально.",
        description:"Прототип локальной архитектуры умного дома: ESP32, сервер Orange Pi и мобильное приложение Flutter."
      }
    });
    const label = $("#mw-live-label");
    const counter = $("#mw-index");
    const category = $("#mw-category");
    const heading = $("#mw-headline");
    const description = $("#mw-description");
    function showWork(id, focus=false) {
      if (!Object.prototype.hasOwnProperty.call(descriptions,id)) return;
      const work = descriptions[id];
      buttons.forEach((button,index) => {
        const active = button.dataset.work === id;
        button.classList.toggle("is-selected",active);
        button.setAttribute("aria-pressed",String(active));
        if (active && counter) counter.textContent=String(index+1);
        if (active && focus) button.focus();
      });
      panels.forEach(panel=>{
        const active = panel.dataset.workScene===id;
        panel.hidden=!active;
        panel.classList.toggle("is-selected",active);
      });
      if (label) label.textContent=work.label;
      if (category) category.textContent=work.category;
      if (heading) heading.textContent=work.headline;
      if (description) description.textContent=work.description;
    }
    buttons.forEach((button,index)=>{
      button.addEventListener("click",()=>showWork(button.dataset.work));
      button.addEventListener("keydown",event=>{
        let next=index;
        if (event.key==="ArrowDown"||event.key==="ArrowRight") next=(index+1)%buttons.length;
        else if (event.key==="ArrowUp"||event.key==="ArrowLeft") next=(index+buttons.length-1)%buttons.length;
        else if (event.key==="Home") next=0;
        else if (event.key==="End") next=buttons.length-1;
        else return;
        event.preventDefault();
        showWork(buttons[next].dataset.work,true);
      });
    });
  }

  // 03: Keyboard-first wayfinder. Handles only local navigation.
  const command = $("#masterpiece-command");
  if (command && typeof command.showModal === "function") {
    const search = $("#command-input",command);
    const list = $("#command-list",command);
    const categories = [
      ["Начало","#top","Главный экран · Манифест"],
      ["Обо мне","#about","Девять лет в энергетике"],
      ["Интерактивная инженерия","#lab","АСУ ТП · Данные · Local AI"],
      ["Направления","#services","Компетенции и специализации"],
      ["Избранные системы","#masterworks","J1Calc · Local_DB · Smart Home Edge"],
      ["Все проекты","#projects","11 проектов, поиск и фильтры"],
      ["Профессиональный путь","#career","ВЧ-связь → АСУ ТП"],
      ["Стоимость услуг","#pricing","Ориентировочный прайс"],
      ["Контакты","#contacts","Телефон · Telegram · Instagram"],
      ["AI Motion Studio","studio.html#motion","Runway · Видеокалькулятор"],
      ["Telegram-боты","studio.html#bots","AI · Новости · Интеграции"],
      ["Открыть GitHub","https://github.com/Jakh1gir","Публичные репозитории"]
    ];
    const projects = $$(".project-card").map(card=>{
      const name=$("h3",card)?.textContent?.trim();
      return name ? [name,"#projects",$(".project-type",card)?.textContent?.trim() || "Проект",true] : null;
    }).filter(Boolean);
    const allItems = [...categories,...projects];
    let filtered = [];
    let activeIndex = 0;
    let previouslyFocused = null;
    function navigate(item){
      command.close();
      const url=item[1];
      if (url.startsWith("#")) {
        const target=$(url);
        if (item[3]) {
          const filter=$(".filter-btn[data-filter=all]");
          filter?.click();
          const input=$("#project-search");
          if (input) {
            input.value=item[0];
            input.dispatchEvent(new Event("input",{bubbles:true}));
          }
        }
        target?.scrollIntoView({behavior:prefersQuiet()?"instant":"smooth",block:"start"});
      } else if (url.startsWith("https://")) {
        window.open(url,"_blank","noopener,noreferrer");
      } else {
        window.location.assign(url);
      }
    }
    function render(query=""){
      const q=query.trim().toLocaleLowerCase("ru-RU");
      filtered=allItems.filter(item=>(item[0]+" "+item[2]).toLocaleLowerCase("ru-RU").includes(q)).slice(0,12);
      activeIndex=0;
      list.replaceChildren();
      if (!filtered.length) {
        const empty=document.createElement("p");
        empty.className="command-empty";
        empty.textContent="Ничего не найдено. Попробуйте другой запрос.";
        list.append(empty);
        return;
      }
      filtered.forEach((item,index)=>{
        const button=document.createElement("button");
        button.type="button";
        button.className="command-option"+(index===0?" is-highlighted":"");
        button.setAttribute("role","option");
        button.setAttribute("aria-selected",String(index===0));
        const left=document.createElement("span");
        const title=document.createElement("strong");
        const description=document.createElement("small");
        title.textContent=item[0];
        description.textContent=item[2];
        const arrow=document.createElement("i");
        arrow.setAttribute("aria-hidden","true");
        arrow.textContent="↗";
        left.append(title,description);
        button.append(left,arrow);
        button.addEventListener("mouseenter",()=>highlight(index));
        button.addEventListener("click",()=>navigate(item));
        list.append(button);
      });
    }
    function highlight(index){
      activeIndex=index;
      $$(".command-option",list).forEach((el,i)=>{
        const selected=i===index;
        el.classList.toggle("is-highlighted",selected);
        el.setAttribute("aria-selected",String(selected));
      });
    }
    function open(){
      if(command.open)return;
      previouslyFocused=document.activeElement;
      if (search) search.value="";
      render();
      command.showModal();
      search?.focus();
    }
    function close(){
      command.close();
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    }
    $("[data-command-open]").forEach(button=>button.addEventListener("click",()=>{
      const menu=$(".menu-toggle");
      if (menu?.getAttribute("aria-expanded")==="true") menu.click();
      open();
    }));
    $(".command-close",command)?.addEventListener("click",close);
    command.addEventListener("click",event=>{if(event.target===command)close()});
    search?.addEventListener("input",()=>render(search.value));
    search?.addEventListener("keydown",event=>{
      if(event.key==="ArrowDown"||event.key==="ArrowUp"){
        event.preventDefault();
        if(!filtered.length)return;
        highlight((activeIndex+(event.key==="ArrowDown"?1:-1)+filtered.length)%filtered.length);
        const button=$$(".command-option",list)[activeIndex];
        button?.scrollIntoView({block:"nearest"});
      }else if(event.key==="Enter"){
        event.preventDefault();
        if(filtered[activeIndex])navigate(filtered[activeIndex]);
      }
    });
    document.addEventListener("keydown",event=>{
      if ((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==="k"){
        event.preventDefault();
        command.open?close():open();
      }
    });
    command.addEventListener("close",()=>{
      if(previouslyFocused instanceof HTMLElement&&!previouslyFocused.contains(document.activeElement))previouslyFocused.focus();
    });
  }
})();