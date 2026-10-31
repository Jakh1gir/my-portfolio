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
    "<defs>",
    "<linearGradient id=\"jr-enamel\" x1=\".1\" y1=\"0\" x2=\".9\" y2=\"1\"><stop stop-color=\"#f9ffff\"/><stop offset=\".55\" stop-color=\"#dceef4\"/><stop offset=\"1\" stop-color=\"#a9d0df\"/></linearGradient>",
    "<linearGradient id=\"jr-body\" x1=\".1\" y1=\"0\" x2=\".9\" y2=\"1\"><stop stop-color=\"#c6e6ed\"/><stop offset=\".5\" stop-color=\"#88b4c9\"/><stop offset=\"1\" stop-color=\"#416f8b\"/></linearGradient>",
    "<linearGradient id=\"jr-face\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop stop-color=\"#16384e\"/><stop offset=\"1\" stop-color=\"#071e30\"/></linearGradient>",
    "<radialGradient id=\"jr-glow\"><stop stop-color=\"#edfff9\"/><stop offset=\".45\" stop-color=\"#82ffe0\"/><stop offset=\"1\" stop-color=\"#39bfca\"/></radialGradient>",
    "<linearGradient id=\"jr-jet\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop stop-color=\"#c3fff6\"/><stop offset=\"1\" stop-color=\"#49c5fd\" stop-opacity=\"0\"/></linearGradient>",
    "<linearGradient id=\"jr-edge\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\"><stop stop-color=\"#ebffff\" stop-opacity=\".82\"/><stop offset=\".46\" stop-color=\"#aacbd6\" stop-opacity=\".12\"/><stop offset=\"1\" stop-color=\"#426f88\" stop-opacity=\".65\"/></linearGradient>",
    "</defs>",
    "<ellipse class=\"jr-shadow\" cx=\"37\" cy=\"92\" rx=\"19\" ry=\"2.8\" fill=\"#00131d\" opacity=\".27\"/>",
    "<g class=\"jr-thruster\" opacity=\"0\"><path d=\"M29 81 Q22 94 27 96 Q35 93 37 82Z\" fill=\"url(#jr-jet)\"/><path d=\"M45 81 Q52 94 47 96 Q39 93 37 82Z\" fill=\"url(#jr-jet)\"/></g>",
    "<g class=\"jr-leg jr-leg-left\"><rect x=\"23\" y=\"78\" width=\"10\" height=\"12\" rx=\"5\" fill=\"url(#jr-body)\"/><rect x=\"20.5\" y=\"86\" width=\"15\" height=\"5\" rx=\"2.5\" fill=\"#ccebf1\" stroke=\"#79afc6\" stroke-width=\".8\"/></g>",
    "<g class=\"jr-leg jr-leg-right\"><rect x=\"41\" y=\"78\" width=\"10\" height=\"12\" rx=\"5\" fill=\"url(#jr-body)\"/><rect x=\"38.5\" y=\"86\" width=\"15\" height=\"5\" rx=\"2.5\" fill=\"#ccebf1\" stroke=\"#79afc6\" stroke-width=\".8\"/></g>",
    "<g class=\"jr-arm jr-arm-left\"><rect x=\"9\" y=\"57\" width=\"11\" height=\"19\" rx=\"5.5\" fill=\"url(#jr-body)\" stroke=\"#a1d0dd\" stroke-width=\"1\"/><circle cx=\"14\" cy=\"75\" r=\"4.2\" fill=\"url(#jr-enamel)\"/></g>",
    "<g class=\"jr-arm jr-arm-right\"><rect x=\"54\" y=\"57\" width=\"11\" height=\"19\" rx=\"5.5\" fill=\"url(#jr-body)\" stroke=\"#a1d0dd\" stroke-width=\"1\"/><circle cx=\"60\" cy=\"75\" r=\"4.2\" fill=\"url(#jr-enamel)\"/></g>",
    "<rect x=\"19\" y=\"52\" width=\"36\" height=\"32\" rx=\"14\" fill=\"url(#jr-enamel)\" stroke=\"#acd7e0\" stroke-width=\"1.2\"/>",
    "<path d=\"M44 55q11 5 7 21q-2 6-9 7q7-12 2-28z\" fill=\"#356780\" opacity=\".25\"/>",
    "<rect x=\"26\" y=\"60\" width=\"22\" height=\"16\" rx=\"8\" fill=\"url(#jr-face)\" stroke=\"#83c9ce\" stroke-width=\".8\"/>",
    "<circle cx=\"37\" cy=\"68\" r=\"5\" fill=\"#12445c\" stroke=\"#56d5ca\" stroke-width=\"1\"/><circle class=\"jr-led\" cx=\"37\" cy=\"68\" r=\"3\" fill=\"url(#jr-glow)\"/>",
    "<g class=\"jr-head\">",
    "<g class=\"jr-antenna\"><path d=\"M37 16V8\" stroke=\"#b9d8e3\" stroke-width=\"3\" stroke-linecap=\"round\"/><circle cx=\"37\" cy=\"6.5\" r=\"3.3\" fill=\"url(#jr-glow)\" stroke=\"#deffff\" stroke-width=\".8\"/></g>",
    "<rect x=\"3.7\" y=\"33\" width=\"8\" height=\"16\" rx=\"4\" fill=\"url(#jr-body)\" stroke=\"#87bdc6\" stroke-width=\".8\"/><rect x=\"62.3\" y=\"33\" width=\"8\" height=\"16\" rx=\"4\" fill=\"url(#jr-body)\" stroke=\"#87bdc6\" stroke-width=\".8\"/>",
    "<rect x=\"7\" y=\"13\" width=\"60\" height=\"49\" rx=\"21\" fill=\"url(#jr-enamel)\" stroke=\"#d3f2f7\" stroke-width=\"1.2\"/>",
    "<path d=\"M55 18q13 12 8 31q-4 9-13 11q10-12 6-26z\" fill=\"url(#jr-edge)\" opacity=\".61\"/>",
    "<path d=\"M13 29q0-12 13-14\" fill=\"none\" stroke=\"#ffffff\" opacity=\".68\" stroke-width=\"2.1\" stroke-linecap=\"round\"/>",
    "<path d=\"M13 24q10-10 26-9\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" opacity=\".9\"/>",
    "<rect x=\"13\" y=\"23\" width=\"48\" height=\"29\" rx=\"14.5\" fill=\"url(#jr-face)\" stroke=\"#41838f\" stroke-width=\".9\"/>",
    "<path d=\"M21 27h29\" stroke=\"#a5fcf0\" stroke-opacity=\".14\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
    "<g class=\"jr-eye jr-eye-left\"><rect x=\"23\" y=\"32\" width=\"7.5\" height=\"10.5\" rx=\"3.75\" fill=\"#78f7db\"/><ellipse class=\"jr-iris\" cx=\"25.5\" cy=\"34.5\" rx=\"1.2\" ry=\"1.6\" fill=\"#f8ffff\"/></g>",
    "<g class=\"jr-eye jr-eye-right\"><rect x=\"43.5\" y=\"32\" width=\"7.5\" height=\"10.5\" rx=\"3.75\" fill=\"#78f7db\"/><ellipse class=\"jr-iris\" cx=\"46\" cy=\"34.5\" rx=\"1.2\" ry=\"1.6\" fill=\"#f8ffff\"/></g>",
    "<path d=\"M32.5 45q4.5 3.5 9 0\" fill=\"none\" stroke=\"#75f4d8\" stroke-width=\"1.55\" stroke-linecap=\"round\"/>",
    "</g>",
    "<g class=\"jr-stars\" opacity=\"0\"><circle cx=\"5\" cy=\"13\" r=\"1.4\" fill=\"#91fff1\"/><circle cx=\"70\" cy=\"20\" r=\"2\" fill=\"#91fff1\"/></g>",
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
  const bounds = () => ({ w: robot.offsetWidth || (innerWidth <= 820 ? 30 : 37), h: robot.offsetHeight || (innerWidth <= 820 ? 44 : 52) });
  const headerEdge = () => {
    const header = document.querySelector(".site-header");
    if (!header) return 8;
    const r = header.getBoundingClientRect();
    return r.top < 4 ? Math.max(8, r.bottom + 8) : 8;
  };

  // Each attachment has a real target element, a surface (ledge/side) and an
  // offset derived from getBoundingClientRect(). No absolute magic coordinates.
  // Only visual panels and controls can support the mascot.
  const anchorsSelector = [
    "main .project-card", "main .service", "main .price-card",
    "main .release-card", "main .upcoming-card", "main .related-card",
    "main .search-paths-grid a", "main .direction-card",
    "main .roadmap-card", "main .feature-card", "main .studio-card",
    "main .bot-studio-card", "main .motion-plan", "main .lab-shell",
    "main .lab-node", "main .hero-persona", "main .hero-visual",
    "main .developer-photo-card", "main .masterworks-item",
    "main .faq-list details", "main .card", "main .btn",
    "main .eyebrow", "main .tag", "main .chip", "main button"
  ].join(",");
  const protectedSelector = [
    "main h1", "main h2", "main h3", "main p", "main li",
    "main a", "main button", "main input", "main textarea", "main select",
    "main .section-label", "main .price-value", "main .price-label",
    "main .project-top", "main .project-type", "main .contact-form", "main .faq-list",
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
  let lastSelected = null, obstacleCache = [], obstacleAt = -10000, obstacleScrollAt = 0;
  let lastScroll = -10000, lastAnchorCheck = -10000, scrollVelocity = 0, lastScrollY = window.scrollY || 0;
  let tracking = false, teleportPending = null;
  let patrolTarget=null,patrolTargetAt=0,patrolLastTick=0,patrolLastCheck=0;
  let patrolLeg=null,patrolSequence=0;
  let vanishTimer = 0, appearTimer = 0, teleportTimer = 0, teleportToken = 0;
  let suppressClickUntil = 0;
  const drag = {
    pointerId: null, armed: false, active: false, timer: 0, frame: 0,
    startX: 0, startY: 0, grabX: 0, grabY: 0,
    clientX: 0, clientY: 0, targetX: 0, targetY: 0, lastTime: 0,
    pointerType: ""
  };
  const relocating = () => robot.classList.contains("is-teleport-out");
  const dragging = () => drag.armed || drag.active;

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
  // Cache in document space: scrolling only translates rectangles. Avoid
  // measuring hundreds of Range glyph boxes on every animation frame.
  function collectObstacles(force=false) {
    const now=performance.now();
    const sy=window.scrollY||0, delta=sy-obstacleScrollAt;
    if(!force && obstacleCache.length && now-obstacleAt<150 &&
       Math.abs(delta)<Math.min(160,innerHeight*.18)) {
      if(delta===0)return obstacleCache;
      return obstacleCache.map(r=>r.fixed?r:{
        l:r.l,t:r.t-delta,r:r.r,b:r.b-delta,fixed:false
      });
    }
    obstacleAt=now;
    obstacleScrollAt=sy;
    const out=[],range=document.createRange();
    const textContainers=/^(H1|H2|H3|P|LI|LABEL|SUMMARY|A|SMALL)$/;
    for(const el of document.querySelectorAll(protectedSelector)){
      if(el.closest("[hidden], [inert]")||!el.getClientRects().length)continue;
      // The panel itself is a landing surface, not an obstruction. Its child
      // headings, paragraphs and controls remain in the obstacle map.
      if(el.matches(anchorsSelector) && isPhysicalSurface(el))continue;
      let rects=el.getClientRects();
      if(textContainers.test(el.tagName)){
        try{
          range.selectNodeContents(el);
          const lines=range.getClientRects();
          if(lines.length)rects=lines;
        }catch{/* Fall back to the element rectangle. */}
      }
      const fixed=!!el.closest("header") ||
        window.getComputedStyle?.(el)?.position==="fixed";
      for(const r of rects){
        if(r.width<3||r.height<3||r.bottom<headerEdge()||
           r.top>innerHeight||r.right<0||r.left>innerWidth)continue;
        out.push({...blockedRect(r),fixed});
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
  function isPhysicalSurface(el) {
    if(!visible(el) || el.closest("dialog,[aria-modal='true']"))return false;
    const r=el.getBoundingClientRect(),{w}=bounds();
    if(r.width<Math.max(48,w*1.35) || r.height<19)return false;
    const cs=window.getComputedStyle?.(el);
    if(!cs)return false;
    const bg=(cs.backgroundColor||"").replace(/\s/g,"").toLowerCase();
    const solid=!!bg && bg!=="transparent" && bg!=="rgba(0,0,0,0)" &&
      bg!=="#0000" && bg!=="#00000000";
    const gradient=!!cs.backgroundImage && cs.backgroundImage!=="none";
    const bc=(cs.borderTopColor||"").replace(/\s/g,"").toLowerCase();
    const border=cs.borderTopStyle!=="none" && cs.borderTopStyle!=="hidden" &&
      parseFloat(cs.borderTopWidth||"0")>=0.5 && bc!=="transparent" &&
      bc!=="rgba(0,0,0,0)";
    const shadow=!!cs.boxShadow && cs.boxShadow!=="none";
    return solid||gradient||border||shadow;
  }
  function pointsOnSurface(el) {
    if(!isPhysicalSurface(el))return [];
    const r=el.getBoundingClientRect(),{w}=bounds();
    // Soles occupy y≈90/96 of the SVG, rather than the wrapper's bottom.
    const top=r.top-w*1.205;
    const left=Math.max(r.left+7,8);
    const right=Math.min(r.right-w-7,innerWidth-w-8);
    if(right<left)return [];
    const xs=[r.left+Math.min(18,r.width*.2)-w*.5,
      r.left+r.width*.5-w*.5,
      r.right-Math.min(18,r.width*.2)-w*.5];
    return xs.map((xx,slot)=>({
      x:clamp(xx,left,right),y:top,side:"ledge",
      slot,kind:"perched",element:el
    }));
  }
  function chooseAnchor(preferred=null,{nearby=false,exclude=null}={}) {
    if(modalOpen())return null;
    const obstacles=collectObstacles(),candidates=[];
    const allowed=anchors.filter(el=>el!==exclude && isPhysicalSurface(el));
    if(preferred && preferred!==exclude && isPhysicalSurface(preferred) &&
       !allowed.includes(preferred))allowed.unshift(preferred);
    const reference=clamp(innerHeight*.56,headerEdge()+115,innerHeight-100);
    for(const el of allowed) {
      const r=el.getBoundingClientRect();
      if(nearby&&current?.element &&
         Math.abs(r.top-current.element.getBoundingClientRect().top)>innerHeight*.45)continue;
      const preferredMatch=el===preferred || !!preferred?.contains?.(el);
      for(const point of pointsOnSurface(el)){
        if(!spaceFree(point,obstacles))continue;
        let score=Math.abs(point.y-reference)*.55 +
          Math.hypot(point.x-x,point.y-y)*.09;
        if(preferredMatch)score-=260;
        if(current?.element===el && current.slot===point.slot)score-=95;
        if(r.top<headerEdge()+65)score+=75;
        if(point.y>innerHeight-bounds().h-65)score+=55;
        candidates.push({...point,score});
      }
    }
    candidates.sort((a,b)=>a.score-b.score);
    return candidates[0]||null;
  }
  function setPosition(px,py) {
    x=px;y=py;
    robot.style.transform="translate3d("+px.toFixed(1)+"px,"+py.toFixed(1)+"px,0)";
  }
  function show(yes) {
    if (yes) {
      clearTimeout(vanishTimer);
      const returning = robot.classList.contains("is-hidden") ||
                        robot.classList.contains("is-teleport-out");
      robot.classList.remove("is-hidden", "is-teleport-out");
      if (returning && !reduced() && !drag.active) {
        robot.classList.remove("is-teleport-in");
        void robot.offsetWidth;
        robot.classList.add("is-teleport-in");
        clearTimeout(appearTimer);
        appearTimer = setTimeout(() => robot.classList.remove("is-teleport-in"), 420);
      }
    } else if (!robot.classList.contains("is-hidden") && !relocating()) {
      clearTimeout(appearTimer);
      robot.classList.remove("is-teleport-in");
      if (reduced() || !robot.classList.contains("is-ready")) {
        robot.classList.add("is-hidden");
      } else {
        robot.classList.add("is-teleport-out");
        clearTimeout(vanishTimer);
        vanishTimer = setTimeout(() => {
          if (robot.classList.contains("is-teleport-out")) {
            robot.classList.add("is-hidden");
            robot.classList.remove("is-teleport-out");
          }
        }, 230);
      }
    }
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
    flight = 0;
    robot.classList.remove("is-flying","is-patrolling","is-takeoff",
      "is-cruising","is-descending","is-landing","is-bouncing");
  }
  // Recalculate a flight target on every frame. A DOM element moves while the
  // browser smoothly scrolls; a frozen destination causes the observed stutter.
  function livePoint(point) {
    if(!point?.element||!isPhysicalSurface(point.element))return null;
    return pointsOnSurface(point.element).find(p=>p.slot===point.slot)||null;
  }
  const smooth = t => {
    const v=clamp(t,0,1);
    return v*v*(3-2*v);
  };
  function setFlightStage(stage) {
    const names=["is-takeoff","is-cruising","is-descending"];
    for(const name of names)robot.classList.toggle(name,name==="is-"+stage);
    robot.dataset.flightPhase=stage;
  }
  function setFlightAttitude(dx,dy,phase,dt=16) {
    const v=clamp(16/Math.max(dt,10),.5,1.3);
    const yaw=clamp(dx*v*.37,-17,17);
    const roll=clamp(dx*v*.24,-11,11);
    const pitch=phase==="takeoff"?-15:phase==="descending"?9:
      clamp(-dy*v*.25,-10,10);
    robot.style.setProperty("--jr-yaw",yaw.toFixed(1)+"deg");
    robot.style.setProperty("--jr-roll",roll.toFixed(1)+"deg");
    robot.style.setProperty("--jr-pitch",pitch.toFixed(1)+"deg");
  }
  function flightPoint(start,end,t,lift) {
    // Three continuous stages:
    // 0-.22: straight powered vertical take-off;
    // .22-.78: traverse the X axis with an arched change in altitude;
    // .78-1: vertical descent onto the actual surface.
    if(t<=.22){
      const u=smooth(t/.22);
      return {x:start.x,y:start.y-lift*u,stage:"takeoff"};
    }
    if(t<.78){
      const u=smooth((t-.22)/.56);
      return {
        x:start.x+(end.x-start.x)*u,
        y:(start.y-lift)+(end.y-start.y)*u-
          Math.sin(Math.PI*u)*Math.min(24,12+Math.abs(end.x-start.x)*.045),
        stage:"cruising"
      };
    }
    const u=smooth((t-.78)/.22);
    return {x:end.x,y:end.y-lift*(1-u),stage:"descending"};
  }
  function routeClear(start,end,lift,obstacles=collectObstacles()) {
    for(let i=1;i<27;i++){
      const p=flightPoint(start,end,i/27,lift);
      if(!spaceFree(p,obstacles))return false;
    }
    return true;
  }
  function freeFlightPosition(obstacles=collectObstacles(),different=false) {
    const {w,h}=bounds(),ceiling=headerEdge()+14;
    const xs=[10,innerWidth-w-10,
      Math.round(innerWidth*.18),Math.round(innerWidth*.82-w),
      Math.round(innerWidth*.5-w*.5)];
    const ys=[.25,.39,.55,.7,.8].map(t=>clamp(innerHeight*t,
      ceiling,Math.max(ceiling,innerHeight-h-12)));
    const options=[];
    const start={x,y};
    for(const xx of xs)for(const yy of ys){
      const dest={x:clamp(xx,8,innerWidth-w-8),y:yy};
      if(!spaceFree(dest,obstacles))continue;
      const distance=Math.hypot(dest.x-x,dest.y-y);
      const dx=Math.abs(dest.x-x),dy=Math.abs(dest.y-y);
      const preferX=patrolSequence%2===0;
      const directionPenalty=!different?0:preferX
        ? (dx<Math.min(120,innerWidth*.16)?300:0)
        : (dy<Math.min(110,innerHeight*.18)?300:0);
      const travel=different && distance<Math.min(95,innerWidth*.2)
        ? 450:0;
      let blocked=0;
      // Patrol routes must avoid text for the *whole* journey, not just at
      // their endpoints. Keep this cheap and only sample candidate routes.
      if(different && x>=0) {
        for(let i=1;i<=12;i++){
          const t=i/13;
          const px=x+(dest.x-x)*smooth(t);
          const py=y+(dest.y-y)*smooth(t)-
            Math.sin(Math.PI*t)*Math.min(22,Math.abs(dest.x-x)*.06);
          if(!spaceFree({x:px,y:py},obstacles)){blocked=10000;break;}
        }
      }
      options.push({...dest,score:distance*.08+travel+blocked+directionPenalty});
    }
    options.sort((a,b)=>a.score-b.score);
    return options.find(p=>p.score<10000)||null;
  }
  function startFreeFlight() {
    if(dragging()||modalOpen()){show(false);return;}
    if(robot.classList.contains("is-patrolling") && flight)return;
    resetFlight();
    current=null;pose(null);
    robot.classList.remove("is-landing","is-docked","is-perched","is-clinging");
    const safe=freeFlightPosition(collectObstacles(true));
    if(!safe){show(false);return;}
    robot.classList.add("is-flying","is-patrolling");
    patrolLeg=null;patrolTarget=safe;
    patrolLastTick=performance.now();patrolLastCheck=0;
    const token=flightToken;
    const initialize=()=>{
      if(token!==flightToken||dragging())return;
      if(reduced()){
        setPosition(safe.x,safe.y);
        resetFlight();
        show(true);
        return;
      }
      show(true);
      const tick=now=>{
        if(token!==flightToken||dragging()||modalOpen()||document.hidden){
          flight=0;return;
        }
        if(now-patrolLastCheck>760){
          patrolLastCheck=now;
          const support=chooseAnchor();
          if(support){
            flight=0;
            anchorTo(support,true);
            return;
          }
        }
        const obstacles=collectObstacles();
        if(!patrolLeg || now>=patrolLeg.endTime ||
           !spaceFree(patrolLeg.to,obstacles)){
          // Each leg carries the robot through both axes on a smooth
          // arced trajectory, with no exponential asymptote/frozen hovering.
          const next=freeFlightPosition(obstacles,true);
          if(next){
            const dist=Math.hypot(next.x-x,next.y-y);
            if(dist>12){
              const duration=clamp(820+dist*2.6,1050,2600);
              patrolLeg={from:{x,y},to:next,startTime:now,
                endTime:now+duration,duration};
              patrolSequence++;
              setFlightStage("cruising");
            }else patrolLeg=null;
          }else patrolLeg=null;
          patrolTarget=next;
          patrolTargetAt=now;
        }
        if(patrolLeg){
          const t=clamp((now-patrolLeg.startTime)/patrolLeg.duration,0,1);
          const u=smooth(t);
          const arc=Math.sin(Math.PI*u)*Math.min(22,
            Math.abs(patrolLeg.to.x-patrolLeg.from.x)*.065+5);
          const dest={
            x:patrolLeg.from.x+(patrolLeg.to.x-patrolLeg.from.x)*u,
            y:patrolLeg.from.y+(patrolLeg.to.y-patrolLeg.from.y)*u-arc
          };
          if(spaceFree(dest,obstacles)){
            const dt=clamp(now-patrolLastTick,8,46);
            setFlightAttitude(dest.x-x,dest.y-y,"cruising",dt);
            setPosition(dest.x,dest.y);
          }else{
            patrolLeg=null;
          }
        } else {
          // No safe corridor: remain in a quiet hovering flight posture,
          // not a fake standing pose, and retry when content moves.
          setFlightAttitude(0,0,"cruising");
        }
        patrolLastTick=now;
        flight=requestAnimationFrame(tick);
      };
      flight=requestAnimationFrame(tick);
    };
    if(x<0 || !spaceFree({x,y},collectObstacles())){
      show(false);
      setTimeout(()=>{
        if(token!==flightToken)return;
        setPosition(safe.x,safe.y);
        initialize();
      },reduced()?0:245);
    }else initialize();
  }
  function teleportTo(point) {
    resetFlight();
    // Once the portal opens, let it finish instead of restarting it on
    // each new scroll event. Only the pending landing location is replaced.
    if(relocating()){
      teleportPending=point;
      return;
    }
    clearTimeout(teleportTimer);
    const token=++teleportToken;
    teleportPending=point;
    if(!point){startFreeFlight();return;}
    if(reduced()||!robot.classList.contains("is-ready")||
       robot.classList.contains("is-hidden")){
      setPosition(point.x,point.y);pose(point);show(true);return;
    }
    show(false);
    teleportTimer=setTimeout(()=>{
      if(token!==teleportToken || dragging())return;
      const preferred=teleportPending;
      teleportPending=null;
      const landing=(preferred && livePoint(preferred))||
        chooseAnchor();
      if(!landing){startFreeFlight();return;}
      current=landing;
      setPosition(landing.x,landing.y);
      pose(landing);
      show(true);
      lastFlight=performance.now();
    },250);
  }
  function pathSafe(point) {
    const dist=Math.hypot(point.x-x,point.y-y);
    const lift=clamp(21+dist*.084,25,64);
    return routeClear({x,y},point,lift);
  }
  function anchorTo(point,animate=false){
    if(dragging())return;
    if(!point){startFreeFlight();return;}
    if(modalOpen()){resetFlight();show(false);return;}
    const previous=current;
    const same=previous?.element===point.element&&previous?.slot===point.slot;
    if(same && !flight && !relocating() && !robot.classList.contains("is-patrolling")){
      current=point;setPosition(point.x,point.y);pose(point);show(true);
      return;
    }
    current=point;
    lastSelected=previous?.element||null;
    const dist=Math.hypot(point.x-x,point.y-y);
    if(reduced()||!robot.classList.contains("is-ready")){
      resetFlight();setPosition(point.x,point.y);pose(point);show(true);
      return;
    }
    if(robot.classList.contains("is-hidden")||relocating()||
       dist>Math.min(1050,innerWidth*.91) || !pathSafe(point)){
      teleportTo(point);return;
    }
    if(dist<13){
      resetFlight();setPosition(point.x,point.y);pose(point);show(true);
      return;
    }
    resetFlight();
    clearTimeout(teleportTimer);
    ++teleportToken;
    const token=flightToken,started=performance.now();
    const startY=y,fromX=x,initialScroll=window.scrollY||0;
    const duration=clamp(720+dist*1.35,820,1560);
    const lift=clamp(21+dist*.084,25,64);
    let target=point,previousX=x,previousY=y,previousTime=started;
    robot.classList.remove("is-perched","is-clinging","is-docked",
      "is-inspecting","is-napping","is-waving","is-balancing","is-landing",
      "is-patrolling");
    robot.classList.add("is-flying");
    setFlightStage("takeoff");
    show(true);
    function tick(now){
      if(token!==flightToken||drag.active)return;
      const t=clamp((now-started)/duration,0,1);
      const live=livePoint(target);
      if(live&&spaceFree(live,collectObstacles()))target=live;
      else {
        const alternate=chooseAnchor(null,{exclude:target.element});
        if(alternate){target=alternate;current=alternate;}
        else {startFreeFlight();return;}
      }
      // Start point scrolls with the document; the landing point is measured
      // live. Smooth-scroll must not leave a phantom starting position.
      const source={x:fromX,y:startY-((window.scrollY||0)-initialScroll)};
      const destination={x:target.x,y:target.y};
      const curve=flightPoint(source,destination,t,lift);
      const dt=clamp(now-previousTime,8,46);
      previousTime=now;
      setFlightStage(curve.stage);
      setFlightAttitude(curve.x-previousX,curve.y-previousY,curve.stage,dt);
      setPosition(curve.x,curve.y);
      previousX=curve.x;previousY=curve.y;
      if(t<1)flight=requestAnimationFrame(tick);
      else {
        flight=0;
        const final=livePoint(target)||target;
        current=final;setPosition(final.x,final.y);pose(final);
        robot.classList.remove("is-flying","is-takeoff",
          "is-cruising","is-descending");
        robot.style.setProperty("--jr-pitch","-7deg");
        robot.style.setProperty("--jr-roll","0deg");
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
  function settle(preferred=null,animate=true){
    if(dragging())return;
    if(relocating())return;
    if(modalOpen()){resetFlight();show(false);return;}
    if(!anchors.length)refreshAnchors();
    const target=(preferred&&visible(preferred)?chooseAnchor(preferred):null)||
      chooseAnchor();
    if(!target){anchorTo(null);return;}
    if(flight && current?.element===target.element && !robot.classList.contains("is-patrolling"))return;
    anchorTo(target,animate);
  }
  function followSurface(now) {
    scrollFrame=0;
    if(dragging())return;
    if(modalOpen()){resetFlight();show(false);return;}
    if(relocating())return; // let the 250ms portal animation finish
    if(!anchors.length)refreshAnchors();
    const moving=now-lastScroll<340;
    // The aircraft follows the *same world object* at every scroll frame.
    if(flight && robot.classList.contains("is-patrolling")){
      const ground=chooseAnchor(requested&&visible(requested)?requested:null);
      if(ground)anchorTo(ground,true);
      return;
    }
    if(flight)return; // its flight frame calculates the dynamic DOM target
    const attached=livePoint(current);
    const rects=collectObstacles();
    const grounded=attached&&spaceFree(attached,rects);
    const yMid=attached?attached.y+bounds().h*.5:-1000;
    const healthy=grounded&&yMid>headerEdge()+90&&yMid<innerHeight-90;
    // Only compare anchors periodically to avoid selecting a new object
    // each time a few pixels of scroll take place.
    if(now-lastAnchorCheck>115 || !grounded){
      lastAnchorCheck=now;
      const preferred=requested && visible(requested)?requested:null;
      const selected=chooseAnchor(preferred) ;
      if(selected && (!current ||
        selected.element!==current.element||selected.slot!==current.slot)){
        if(!healthy || selected.score+38<(current?.score??9999) ||
           (preferred&&selected.element===preferred)){
          anchorTo(selected,true);
          return;
        }
      }
      if(!grounded){
        anchorTo(selected||null,true);return;
      }
    }
    if(grounded){
      current={...attached,score:current.score};
      setPosition(attached.x,attached.y);
      pose(attached);
      show(true);
    }else if(!moving){
      settle(null,true);
    }
  }
  function scheduleScroll(){
    if(dragging())return;
    lastScroll=performance.now();
    const cy=window.scrollY||0;
    scrollVelocity=cy-lastScrollY;lastScrollY=cy;
    // Cached text boxes follow scrollY without forcing a layout read.
    clearTimeout(idleTimeout);
    if(!scrollFrame)scrollFrame=requestAnimationFrame(followSurface);
    clearTimeout(scrollTimeout);
    scrollTimeout=setTimeout(()=>{
      scrollTimeout=0;
      if(requested && visible(requested)){
        const target=requested;requested=null;
        settle(target,true);
      }else {
        requested=null;
        settle(null,true);
      }
      scheduleIdle();
    },290);
  }
  function navigateTo(target){
    if(!target||dragging())return;
    requested=target;
    lastInteraction=performance.now();
    // Browser owns smooth scrolling; don't teleport to a target off screen.
    // As each surface enters the viewport, the robot follows its actual edge.
    if(visible(target))settle(target,true);
  }
  function closestAnchor(target) {
    if (!(target instanceof Element) || target.closest("dialog,footer")) return null;
    if (isTyping(target)) return null;
    return target.closest(".project-card,.service,.price-card,.related-card,.upcoming-card,.release-card,.search-paths-grid a,.hero-persona,.hero-visual,.masterworks-item,.lab-tab,.roadmap-card,.direction-card,.studio-card,.section-label,h1,h2,h3,.article-section") ||
      (target.matches("a,button") && target.closest("main") ? target : null);
  }
  // Hover fixation: select a safe outer edge after a short dwell, never chase
  // each mousemove. Keyboard focus gets the same surface-aware treatment.
  document.addEventListener("pointerover",ev=>{
    if (ev.pointerType==="touch" || reduced() || modalOpen() || dragging() || flight || relocating() || performance.now()-lastScroll<900) return;
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
    if(el&&!reduced()&&!modalOpen()&&!dragging()&&performance.now()-lastScroll>650){
      const point=chooseAnchor(el);
      if(point?.element===el)anchorTo(point,true);
    }
  });
  document.addEventListener("focusout",()=>setTimeout(()=>{if(!dragging())settle(null,false)},200));
  document.addEventListener("click",ev=>{
    obstacleAt=-10000; // cards, filters and accordions may change layout
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
    if(dragging())return;
    clearTimeout(scrollTimeout);scrollTimeout=0;
    if(requested&&visible(requested)){
      const el=requested;requested=null;settle(el,true);
    }else {requested=null;settle(null,true);}
  },{passive:true});
  window.addEventListener("hashchange",scheduleScroll);
  window.addEventListener("resize",()=>{
    if(dragging())return;
    resetFlight();refreshAnchors();obstacleAt=-10000;
    settle(current?.element,true);
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
      ru:["Поздороваться с роботом","Нажми на меня",["Привет!","Я рядом!","Взлетаю!","Смотрю!"]],
      en:["Say hello to the robot","Tap me",["Hello!","I'm here!","Taking off!","Looking!"]],
      uz:["Robot bilan salomlashing","Meni bosing",["Salom!","Men shu yerdaman!","Uchyapman!","Ko'ryapman!"]]
    };
    const tr=labels[language()];
    button.setAttribute("aria-label",tr[0]);
    button.title=tr[1];
    return tr[2];
  }
  let clicks=0;
  function safeBounce() {
    const {w,h}=bounds();
    const box={l:x-7,t:y-32,r:x+w+7,b:y+h-6};
    return !collectObstacles(true).some(rect=>overlaps(box,rect));
  }
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
  // Pointer Events: hold and drag using the same logic for mouse, touch and pen.
  // Pointer capture means the robot stays in your hand even when you move fast.
  function dragTick(now) {
    drag.frame=0;
    if (!drag.active) return;
    const dt=clamp(now-(drag.lastTime||now-16),8,45);
    drag.lastTime=now;
    const smooth=1-Math.exp(-dt/48);
    setPosition(x+(drag.targetX-x)*smooth,y+(drag.targetY-y)*smooth);
    if(Math.abs(x-drag.targetX)+Math.abs(y-drag.targetY)>.35)
      drag.frame=requestAnimationFrame(dragTick);
  }
  function moveDragTarget() {
    const {w,h}=bounds();
    drag.targetX=clamp(drag.clientX-drag.grabX,6,Math.max(6,innerWidth-w-6));
    drag.targetY=clamp(drag.clientY-drag.grabY,headerEdge()+4,
      Math.max(headerEdge()+4,innerHeight-h-8));
    if(!drag.frame)drag.frame=requestAnimationFrame(dragTick);
  }
  function startDrag() {
    if(!drag.armed || drag.active)return;
    clearTimeout(drag.timer);
    resetFlight();
    clearTimeout(teleportTimer);
    ++teleportToken;
    clearTimeout(vanishTimer);
    clearTimeout(appearTimer);
    drag.active=true;
    current=null;
    lastInteraction=performance.now();
    robot.classList.remove("is-teleport-out","is-teleport-in","is-hidden","is-patrolling",
      "is-flying","is-napping","is-waving","is-landing","is-scrolling",
      "is-perched","is-clinging","is-docked");
    robot.classList.add("is-grabbed","is-dragging");
    button.tabIndex=0;
    button.setAttribute("aria-hidden","false");
    bubble.classList.remove("is-visible");
    drag.lastTime=performance.now();
    moveDragTarget();
  }
  button.addEventListener("pointerdown",ev=>{
    if(dragging()||relocating()||robot.classList.contains("is-hidden")||
       (robot.classList.contains("is-flying")&&!robot.classList.contains("is-patrolling"))||(!ev.isPrimary)||
       (ev.pointerType==="mouse"&&ev.button!==0))return;
    drag.armed=true;
    drag.active=false;
    drag.pointerId=ev.pointerId;
    drag.pointerType=ev.pointerType;
    drag.startX=drag.clientX=ev.clientX;
    drag.startY=drag.clientY=ev.clientY;
    drag.grabX=ev.clientX-x;
    drag.grabY=ev.clientY-y;
    clearTimeout(idleTimeout);
    clearTimeout(hoverTimeout);
    clearTimeout(drag.timer);
    drag.timer=setTimeout(startDrag,ev.pointerType==="touch"?180:190);
    try{button.setPointerCapture(ev.pointerId)}catch{}
  });
  button.addEventListener("pointermove",ev=>{
    if(!drag.armed||ev.pointerId!==drag.pointerId)return;
    drag.clientX=ev.clientX;drag.clientY=ev.clientY;
    const distance=Math.hypot(ev.clientX-drag.startX,ev.clientY-drag.startY);
    if(!drag.active && drag.pointerType!=="touch" && distance>7)startDrag();
    if(drag.active){ev.preventDefault();moveDragTarget();}
    else if(distance>15 && drag.pointerType==="touch"){
      // A scroll gesture started before the long-press: do not steal it.
      clearTimeout(drag.timer);drag.armed=false;
      try{button.releasePointerCapture(ev.pointerId)}catch{}
      scheduleIdle();
    }
  });
  function dropRobot(ev, cancelled=false) {
    if(!drag.armed && !drag.active)return;
    if(ev?.pointerId!=null && ev.pointerId!==drag.pointerId)return;
    clearTimeout(drag.timer);
    const wasDragged=drag.active;
    drag.armed=false;
    drag.active=false;
    if(drag.frame)cancelAnimationFrame(drag.frame);
    drag.frame=0;
    robot.classList.remove("is-grabbed","is-dragging");
    try{if(drag.pointerId!=null && button.hasPointerCapture?.(drag.pointerId))
      button.releasePointerCapture(drag.pointerId)}catch{}
    drag.pointerId=null;
    if(wasDragged){
      suppressClickUntil=performance.now()+450;
      lastInteraction=performance.now();
      refreshAnchors();
      let nearest=null,closest=Infinity;
      const px=ev?.clientX??drag.clientX,py=ev?.clientY??drag.clientY;
      // Magnetic snap uses actual nearby surfaces, not arbitrary coordinates.
      for(const el of anchors){
        if(!visible(el))continue;
        const r=el.getBoundingClientRect();
        const distance=Math.hypot(
          px-clamp(px,r.left,r.right),py-clamp(py,r.top,r.bottom));
        if(distance<closest){closest=distance;nearest=el;}
      }
      const target=chooseAnchor(nearest)||chooseAnchor();
      if(target)anchorTo(target,!cancelled);
      else anchorTo(null);
    }
    scheduleIdle();
  }
  button.addEventListener("pointerup",ev=>dropRobot(ev));
  button.addEventListener("pointercancel",ev=>dropRobot(ev,true));
  button.addEventListener("lostpointercapture",ev=>{
    if(drag.armed||drag.active)dropRobot(ev,true);
  });
  window.addEventListener("blur",()=>dropRobot(null,true));

  button.addEventListener("click",ev=>{
    ev.stopPropagation();
    if(drag.active || performance.now()<suppressClickUntil) return;
    lastInteraction=performance.now();
    const phrases=localized();
    showBubble(phrases[clicks++%phrases.length]);
    if(!reduced())react(clicks%3===0&&safeBounce()?"is-bouncing":"is-waving",900);
    scheduleIdle();
  });
  document.getElementById("site-language-select")?.addEventListener("change",localized);
  motion.addEventListener?.("change",()=>{resetFlight();settle(null,true);scheduleIdle();});

  // Periodic micro-interactions: a head scan, a short balance, or an occasional
  // small hop to a nearby safe surface. Never continuously wander over text.
  function scheduleIdle() {
    clearTimeout(idleTimeout);
    if(reduced()||document.hidden)return;
    idleTimeout=setTimeout(()=>{
      if(modalOpen()||flight||dragging()||relocating()||!current||performance.now()-lastScroll<1200){scheduleIdle();return;}
      if(performance.now()-lastInteraction<3800){scheduleIdle();return;}
      const cycle=(Math.floor(performance.now()/5300)%5);
      if(cycle===0)react("is-inspecting",1700);
      else if(cycle===1)react("is-balancing",1300);
      else if(cycle===2)react("is-napping",2200);
      else if(cycle===3){
        // No autonomous relocation while someone reads the page.
        react("is-inspecting",1450);
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
