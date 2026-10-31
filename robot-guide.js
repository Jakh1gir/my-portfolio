(() => {
  "use strict";

  // Decorative guide with one accessible button. The site keeps native anchor navigation.
  const main = document.querySelector("main");
  if (!main || document.getElementById("jakhon-robot")) return;

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

  // v2: surface-aware positioning. Layout is measured, never altered.
  const button = robot.querySelector("button");
  const bubble = robot.querySelector(".jakhon-robot__bubble");
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const reduced = () => motion.matches;
  const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
  const bounds = () => ({ w: robot.offsetWidth || 74, h: robot.offsetHeight || 104 });
  const headerEdge = () => {
    const header = document.querySelector(".site-header");
    if (!header) return 8;
    const r = header.getBoundingClientRect();
    return r.top < 4 ? Math.max(8, r.bottom + 8) : 8;
  };

  // Each attachment has a real target element, a surface (ledge/side) and an
  // offset derived from getBoundingClientRect(). No absolute magic coordinates.
  const anchorsSelector = [
    "main h1", "main h2", "main h3",
    "main .section-label", "main .project-card", "main .service",
    "main .price-card", "main .upcoming-card", "main .related-card",
    "main .masterworks-item", "main .lab-tab", "main .roadmap-card",
    "main .steps li", "main .search-paths a", "main .faq-list details",
    "main .article-section", "main .article-section li",
    "main .feature-card", "main .intro-actions", "main .section-head-inline"
  ].join(",");
  const protectedSelector = [
    "main h1", "main h2", "main h3", "main p", "main li",
    "main a", "main button", "main input", "main textarea", "main select",
    "main .section-label", "main .price-value", "main .price-label",
    "main .project-top", "main .project-type",
    "main summary", "main label", "main .project-status",
    "header a", "header button", "header select", "footer a",
    "main [role='button']", "main [contenteditable='true']"
  ].join(",");

  let anchors = [];
  let current = null; // { element, side, kind, x, y }
  let x = -200, y = -200;
  let flight = 0, flightToken = 0;
  let scrollFrame = 0, scrollTimeout = 0, navTimeout = 0;
  let hoverTimeout = 0, actionTimeout = 0, bubbleTimeout = 0, idleTimeout = 0;
  let requested = null, lastFlight = -10000, lastInteraction = performance.now();
  let lastSelected = null, obstacleCache = [], obstacleAt = -10000;

  const isTyping = target => target instanceof Element &&
    !!target.closest("input,textarea,select,[contenteditable='true']");
  function modalOpen() {
    return document.body.classList.contains("menu-open") ||
      !!document.querySelector('dialog[open], [aria-modal="true"]:not([hidden])') ||
      isTyping(document.activeElement) ||
      !!(window.getSelection && window.getSelection()?.toString().trim());
  }
  function visible(el, rect) {
    if (!el || !el.isConnected || el.closest("[hidden], [inert]")) return false;
    if (!el.getClientRects().length) return false;
    const r = rect || el.getBoundingClientRect();
    return r.width > 9 && r.height > 7 && r.bottom > headerEdge() + 4 &&
      r.top < innerHeight - 12 && r.right > 0 && r.left < innerWidth;
  }
  function blockedRect(r) {
    const pad = 7;
    return { l:r.left-pad, t:r.top-pad, r:r.right+pad, b:r.bottom+pad };
  }
  function collectObstacles(force=false) {
    const now=performance.now();
    if(!force && now-obstacleAt<90) return obstacleCache;
    obstacleAt=now;
    const out=[];
    const range=document.createRange();
    const textContainers=/^(H1|H2|H3|P|LI|LABEL|SUMMARY|A|SMALL)$/;
    for(const el of document.querySelectorAll(protectedSelector)) {
      if(el.closest("[hidden], [inert]") || !el.getClientRects().length)continue;
      // Actual rendered text line rectangles, not the full width of a block <p>.
      // This makes the mascot aware of glyph occupied space and nearby whitespace.
      let rects=el.getClientRects();
      if(textContainers.test(el.tagName)){
        try {
          range.selectNodeContents(el);
          const lines=range.getClientRects();
          if(lines.length)rects=lines;
        }catch{ /* Keep element bounds if Range cannot measure it. */ }
      }
      for(const r of rects){
        if(r.width<3||r.height<3||r.bottom<headerEdge()||
           r.top>innerHeight||r.right<0||r.left>innerWidth)continue;
        out.push(blockedRect(r));
      }
    }
    range.detach?.();
    obstacleCache=out;
    return out;
  }
  function overlaps(a, b) {
    return a.l < b.r && a.r > b.l && a.t < b.b && a.b > b.t;
  }
  function spaceFree(point, obstacles) {
    if (!point) return false;
    const {w, h} = bounds();
    if (point.x < 7 || point.y < headerEdge() ||
        point.x + w > innerWidth - 7 || point.y + h > innerHeight - 10) return false;
    // Exclude the entire opaque robot, not merely its feet, from text and controls.
    const box = {l:point.x+4, t:point.y+3, r:point.x+w-4, b:point.y+h-6};
    return !obstacles.some(rect => overlaps(box, rect));
  }
  function pointsOnSurface(el) {
    const r = el.getBoundingClientRect(), {w,h} = bounds();
    if (!visible(el,r)) return [];
    const vertical = clamp(r.top + Math.min(18, r.height * .2), headerEdge()+2, innerHeight-h-10);
    const points = [
      {x:r.right - w*.82,y:r.top-h+7,side:"ledge",kind:"perched"},
      {x:r.left - w*.18,y:r.top-h+7,side:"ledge",kind:"perched"},
      {x:r.right + 10,y:vertical,side:"right",kind:"clinging"},
      {x:r.left - w - 10,y:vertical,side:"left",kind:"clinging"}
    ];
    if (r.height > 75) {
      points.push(
        {x:r.right+9,y:r.bottom-h-8,side:"right",kind:"clinging"},
        {x:r.left-w-9,y:r.bottom-h-8,side:"left",kind:"clinging"}
      );
    }
    if (innerWidth < 820) {
      // Narrow layouts: use the space after text, not on top of the heading.
      points.push(
        {x:innerWidth-w-9,y:r.bottom+12,side:"below",kind:"perched"},
        {x:8,y:r.bottom+12,side:"below",kind:"perched"}
      );
    }
    return points.map(p=>({...p,element:el}));
  }
  function chooseAnchor(preferred, {nearby=false}={}) {
    if (modalOpen()) return null;
    const obstacles = collectObstacles();
    const candidates = [];
    const allowed = anchors.filter(el => visible(el));
    if (preferred && visible(preferred) && !allowed.includes(preferred)) allowed.unshift(preferred);
    const referenceY = clamp(innerHeight*.43, 170, 440);
    for (const el of allowed) {
      const r = el.getBoundingClientRect();
      const isPreferred = !!preferred && (el===preferred || preferred.contains?.(el));
      if (nearby && current && Math.abs(r.top-current.element.getBoundingClientRect().top)>innerHeight*.42) continue;
      for (const candidate of pointsOnSurface(el)) {
        if (!spaceFree(candidate, obstacles)) continue;
        // Priority: explicitly requested element, nearby visual focal point,
        // real top edges (contact with the surface), minimal distance to robot.
        const centerY = candidate.y+bounds().h/2;
        const travel = Math.hypot(candidate.x-x, candidate.y-y);
        let score = Math.abs(centerY-referenceY)*.65+travel*.11;
        if (candidate.side==="ledge") score -= 34;
        if (isPreferred) score -= 395;
        if (current?.element===el) score -= 48;
        if (current?.element===el && current.side===candidate.side) score -= 45;
        if (lastSelected===el && nearby) score += 60;
        if (el.matches("h1,h2,h3")) score -= 28;
        candidates.push({...candidate,score});
      }
    }
    candidates.sort((a,b)=>a.score-b.score);
    return candidates[0] || null;
  }
  function dock() {
    const {w,h}=bounds(), obstacles=collectObstacles();
    const docks=[
      {x:innerWidth-w-12,y:innerHeight-h-13,side:"dock",kind:"docked"},
      {x:9,y:innerHeight-h-13,side:"dock",kind:"docked"},
      {x:innerWidth-w-12,y:headerEdge()+13,side:"dock",kind:"docked"},
      {x:9,y:headerEdge()+13,side:"dock",kind:"docked"}
    ];
    return docks.find(p=>spaceFree(p,obstacles))||null;
  }
  function setPosition(px,py) {
    x=px;y=py;
    robot.style.transform="translate3d("+px.toFixed(1)+"px,"+py.toFixed(1)+"px,0)";
  }
  function show(yes) {
    robot.classList.toggle("is-hidden", !yes);
    button.tabIndex = yes ? 0 : -1;
    button.setAttribute("aria-hidden", String(!yes));
  }
  function pose(point) {
    robot.classList.toggle("is-perched", point?.kind==="perched");
    robot.classList.toggle("is-clinging", point?.kind==="clinging");
    robot.classList.toggle("is-docked", point?.kind==="docked");
    robot.classList.toggle("is-facing-left", point?.side==="left");
    robot.dataset.anchorSide=point?.side||"none";
  }
  function resetFlight() {
    flightToken++;
    if (flight) cancelAnimationFrame(flight);
    flight=0;
    robot.classList.remove("is-flying","is-landing","is-bouncing");
  }
  function anchorTo(point, animate=false) {
    if (!point) {
      resetFlight();
      current=null;show(false);return;
    }
    if (modalOpen()) {resetFlight();show(false);return;}
    const same = current?.element===point.element && current?.side===point.side &&
                 Math.hypot(point.x-x,point.y-y)<15;
    if (same) {current=point;pose(point);show(true);return;}
    const prior=current?.element;
    current=point;
    lastSelected=prior;
    if (reduced()) {
      resetFlight();setPosition(point.x,point.y);pose(point);show(true);return;
    }
    const dx=point.x-x,dy=point.y-y,dist=Math.hypot(dx,dy);
    if (!animate || dist<20 || dist>innerHeight*1.5) {
      resetFlight();setPosition(point.x,point.y);pose(point);show(true);return;
    }
    resetFlight();
    const token=flightToken;
    const start=performance.now(), startX=x,startY=y;
    const duration=clamp(290+dist*.53,390,880);
    const height=clamp(23+dist*.13,28,94);
    const railMode=dist>250; // travel near screen margins, not across a paragraph
    const railX = dx>=0 ? Math.min(innerWidth-bounds().w-9,Math.max(startX,point.x)+24) :
                           Math.max(9,Math.min(startX,point.x)-24);
    robot.classList.remove("is-perched","is-clinging","is-docked");
    robot.classList.add("is-flying");
    robot.classList.remove("is-inspecting","is-napping","is-waving","is-balancing");
    show(true);
    // Flight passes over content briefly. It is translucent and unclickable.
    function tick(now) {
      if(token!==flightToken) return;
      const t=clamp((now-start)/duration,0,1);
      const ease=t*t*(3-2*t);
      let xx=startX+(point.x-startX)*ease;
      let yy=startY+(point.y-startY)*ease-Math.sin(Math.PI*t)*height;
      if (railMode) {
        const corner=Math.sin(Math.PI*t)**2;
        xx=xx*(1-corner*.66)+railX*(corner*.66);
      }
      setPosition(xx,yy);
      if(t<1)flight=requestAnimationFrame(tick);
      else {
        flight=0;setPosition(point.x,point.y);pose(point);
        robot.classList.remove("is-flying");
        robot.classList.add("is-landing");
        setTimeout(()=>robot.classList.remove("is-landing"),420);
        lastFlight=performance.now();
      }
    }
    flight=requestAnimationFrame(tick);
  }
  function refreshAnchors() {
    anchors=Array.from(new Set(document.querySelectorAll(anchorsSelector)));
  }
  function settle(preferred, animate=false) {
    if (modalOpen()) {resetFlight();show(false);return;}
    refreshAnchors();
    const selected=chooseAnchor(preferred)||chooseAnchor()||dock();
    anchorTo(selected,animate);
  }
  function followSurface() {
    scrollFrame=0;
    if (!current || flight) return;
    if (modalOpen()) {show(false);return;}
    const surface=current.element;
    if (!surface) {
      const candidate=dock();if(candidate)anchorTo(candidate,false);else show(false);
      return;
    }
    // Stick to the same edge as the page scrolls; calculate its new geometry.
    const next=pointsOnSurface(surface).find(p=>p.side===current.side && Math.abs(p.x-current.x)<2)||
               pointsOnSurface(surface).find(p=>p.side===current.side);
    if (!next || !spaceFree(next,collectObstacles())) {show(false);return;}
    current=next;
    setPosition(next.x,next.y);
    pose(next);
    show(true);
  }
  function scheduleScroll() {
    robot.classList.add("is-scrolling");
    if (!scrollFrame) scrollFrame=requestAnimationFrame(followSurface);
    clearTimeout(scrollTimeout);
    scrollTimeout=setTimeout(()=>{
      scrollTimeout=0;
      robot.classList.remove("is-scrolling");
      if (requested) {
        const target=requested;requested=null;
        clearTimeout(navTimeout);
        settle(target,true);
      } else settle(null,performance.now()-lastFlight>1200);
    },230);
  }
  function navigateTo(target) {
    if(!target)return;
    lastInteraction=performance.now();
    requested=target;
    clearTimeout(navTimeout);
    navTimeout=setTimeout(()=>{
      if(!requested)return;
      const next=requested;requested=null;
      settle(next,true);
    },1200);
  }
  function closestAnchor(target) {
    if (!(target instanceof Element) || target.closest("dialog,footer")) return null;
    if (isTyping(target)) return null;
    return target.closest(".project-card,.service,.price-card,.related-card,.upcoming-card,.masterworks-item,.lab-tab,.roadmap-card,.section-label,h1,h2,h3,.article-section") ||
      (target.matches("a,button") && target.closest("main") ? target : null);
  }
  // Hover fixation: select a safe outer edge after a short dwell, never chase
  // each mousemove. Keyboard focus gets the same surface-aware treatment.
  document.addEventListener("pointerover",ev=>{
    if (ev.pointerType==="touch" || reduced() || modalOpen()) return;
    const el=closestAnchor(ev.target);
    if (!el || el===current?.element) return;
    clearTimeout(hoverTimeout);
    hoverTimeout=setTimeout(()=>{
      if(performance.now()-lastFlight<550 || modalOpen())return;
      const point=chooseAnchor(el);
      if(point?.element===el)anchorTo(point,true);
    },360);
  },{passive:true});
  document.addEventListener("pointerout",()=>clearTimeout(hoverTimeout),{passive:true});
  document.addEventListener("focusin",ev=>{
    if(isTyping(ev.target)){show(false);return;}
    const el=closestAnchor(ev.target);
    if(el&&!reduced()&&!modalOpen()){
      const point=chooseAnchor(el);
      if(point?.element===el)anchorTo(point,true);
    }
  });
  document.addEventListener("focusout",()=>setTimeout(()=>settle(null,false),200));
  document.addEventListener("click",ev=>{
    if(!(ev.target instanceof Element))return;
    const link=ev.target.closest('a[href^="#"]');
    if(link&&!link.closest(".skip-link")){
      let id;
      try {id=decodeURIComponent((link.getAttribute("href")||"").slice(1));}catch{return;}
      if(id)navigateTo(id==="top"? document.querySelector(".hero")||main : document.getElementById(id));
    }
  });
  window.addEventListener("scroll",scheduleScroll,{passive:true});
  window.addEventListener("scrollend",()=>{
    robot.classList.remove("is-scrolling");
    if(requested){const target=requested;requested=null;clearTimeout(navTimeout);settle(target,true);}
    else settle(null,false);
  },{passive:true});
  window.addEventListener("hashchange",scheduleScroll);
  window.addEventListener("resize",()=>{
    resetFlight();refreshAnchors();settle(current?.element,false);
  },{passive:true});
  document.addEventListener("visibilitychange",()=>{
    if(document.hidden){resetFlight();clearTimeout(idleTimeout);}
    else {settle(null,false);scheduleIdle();}
  });
  document.addEventListener("selectionchange",()=>{
    // Selection remains readable, and the mascot cannot steal drag events.
    if(window.getSelection?.()?.toString().trim())show(false);
    else if(!modalOpen())scheduleScroll();
  });

  function language() {
    const value=(document.documentElement.lang||"ru").toLowerCase();
    return value.startsWith("uz")?"uz":value.startsWith("en")?"en":"ru";
  }
  function localized() {
    const labels={
      ru:["Поздороваться с роботом","Нажми на меня",["Привет!","Я рядом!","Прыжок!","Смотрю!"]],
      en:["Say hello to the robot","Tap me",["Hello!","I'm here!","Boing!","Looking!"]],
      uz:["Robot bilan salomlashing","Meni bosing",["Salom!","Men shu yerdaman!","Sakradim!","Ko'ryapman!"]]
    };
    const tr=labels[language()];
    button.setAttribute("aria-label",tr[0]);
    button.title=tr[1];
    return tr[2];
  }
  let clicks=0;
  function react(name,duration=850) {
    clearTimeout(actionTimeout);
    robot.classList.remove("is-inspecting","is-waving","is-napping","is-bouncing","is-balancing");
    void robot.offsetWidth;
    robot.classList.add(name);
    actionTimeout=setTimeout(()=>robot.classList.remove(name),duration);
  }
  function showBubble(message) {
    bubble.textContent=message;
    // Only show the speech bubble if it also fits into unoccupied space.
    const pt={x,y};
    const {w}=bounds();
    const obstacles=collectObstacles();
    const isRight=x<innerWidth/2;
    const bx=isRight?x+w+5:x-135;
    const bubbleRect={l:bx,t:y,r:bx+130,b:y+45};
    const safe=bx>=4 && bx+130<innerWidth-4 &&
      !obstacles.some(r=>overlaps(bubbleRect,r));
    bubble.classList.toggle("on-right",isRight);
    bubble.classList.toggle("is-visible",safe);
    clearTimeout(bubbleTimeout);
    bubbleTimeout=setTimeout(()=>bubble.classList.remove("is-visible"),1450);
  }
  button.addEventListener("click",ev=>{
    ev.stopPropagation();
    lastInteraction=performance.now();
    const phrases=localized();
    showBubble(phrases[clicks++%phrases.length]);
    if(!reduced())react(clicks%3===0?"is-bouncing":"is-waving",900);
    scheduleIdle();
  });
  document.getElementById("site-language-select")?.addEventListener("change",localized);
  motion.addEventListener?.("change",()=>{resetFlight();settle(null,false);scheduleIdle();});

  // Periodic micro-interactions: a head scan, a short balance, or an occasional
  // small hop to a nearby safe surface. Never continuously wander over text.
  function scheduleIdle() {
    clearTimeout(idleTimeout);
    if(reduced()||document.hidden)return;
    idleTimeout=setTimeout(()=>{
      if(modalOpen()||flight||!current){scheduleIdle();return;}
      if(performance.now()-lastInteraction<3800){scheduleIdle();return;}
      const cycle=(Math.floor(performance.now()/5300)%5);
      if(cycle===0)react("is-inspecting",1700);
      else if(cycle===1)react("is-balancing",1300);
      else if(cycle===2)react("is-napping",2200);
      else if(cycle===3){
        const near=chooseAnchor(null,{nearby:true});
        if(near&&near.element!==current.element &&
           Math.hypot(near.x-x,near.y-y)<260)anchorTo(near,true);
        else react("is-inspecting",1100);
      }else react("is-waving",800);
      scheduleIdle();
    },6900+Math.floor(Math.random()*2200));
  }

  // Start on a measured safe surface or hide if the viewport has no free space.
  refreshAnchors();
  settle(null,false);
  robot.classList.add("is-ready");
  localized();
  scheduleIdle();
  if(location.hash.length>1) setTimeout(()=>settle(document.getElementById(decodeURIComponent(location.hash.slice(1))),false),500);
})();
