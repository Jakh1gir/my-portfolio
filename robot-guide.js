(() => {
  "use strict";

  // Decorative guide with one accessible button. The site keeps native anchor navigation.
  const main = document.querySelector("main");
  if (!main || document.getElementById("jakhon-robot")) return;

  const robot = document.createElement("div");
  robot.id = "jakhon-robot";
  robot.className = "jakhon-robot jakhon-robot--aero";
  robot.innerHTML = [
    '<button class="jakhon-robot__button" type="button" aria-label="Поздороваться с Aero Orb" title="Нажми на Aero Orb">',
    "<svg class=\"jakhon-robot__art\" viewBox=\"0 0 74 96\" aria-hidden=\"true\" focusable=\"false\" xmlns=\"http://www.w3.org/2000/svg\">",
    "<defs>",
    "<radialGradient id=\"aero-shell\" cx=\".25\" cy=\".14\" r=\".96\">",
    "<stop offset=\"0\" stop-color=\"#ffffff\"/><stop offset=\".36\" stop-color=\"#e3ffff\"/>",
    "<stop offset=\".68\" stop-color=\"#a6d7e0\"/><stop offset=\"1\" stop-color=\"#467e9b\"/>",
    "</radialGradient>",
    "<linearGradient id=\"aero-edge\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">",
    "<stop stop-color=\"#fff\" stop-opacity=\".9\"/><stop offset=\".46\" stop-color=\"#adf0ed\" stop-opacity=\".12\"/>",
    "<stop offset=\"1\" stop-color=\"#25546a\" stop-opacity=\".66\"/>",
    "</linearGradient>",
    "<linearGradient id=\"aero-visor\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">",
    "<stop stop-color=\"#133e53\"/><stop offset=\".65\" stop-color=\"#092334\"/><stop offset=\"1\" stop-color=\"#061826\"/>",
    "</linearGradient>",
    "<radialGradient id=\"aero-eye\"><stop stop-color=\"#e7fff9\"/><stop offset=\".35\" stop-color=\"#8dffe7\"/><stop offset=\"1\" stop-color=\"#36c9b6\"/></radialGradient>",
    "<linearGradient id=\"aero-jet\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">",
    "<stop stop-color=\"#e5fff9\"/><stop offset=\".38\" stop-color=\"#7afae1\"/>",
    "<stop offset=\"1\" stop-color=\"#27c3ed\" stop-opacity=\"0\"/>",
    "</linearGradient>",
    "<filter id=\"aero-soft\"><feGaussianBlur stdDeviation=\"1.1\"/></filter>",
    "</defs>",
    "<ellipse class=\"jr-shadow\" cx=\"37\" cy=\"91\" rx=\"20\" ry=\"2.2\" fill=\"#001926\" opacity=\".24\"/>",
    "<g class=\"jr-thruster\">",
    "<path d=\"M25 74 Q19 86 23 96 Q30 90 33 76Z\" fill=\"url(#aero-jet)\"/>",
    "<path d=\"M49 74 Q55 86 51 96 Q44 90 41 76Z\" fill=\"url(#aero-jet)\"/>",
    "<ellipse cx=\"37\" cy=\"86\" rx=\"18\" ry=\"5\" fill=\"#54fff0\" opacity=\".4\" filter=\"url(#aero-soft)\"/>",
    "</g>",
    "<g class=\"jr-leg jr-leg-left\">",
    "<path d=\"M28 68 L25 88\" stroke=\"#9ecdd9\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>",
    "<path d=\"M21 90 Q25 88 32 90\" stroke=\"#dffeff\" stroke-width=\"3.1\" stroke-linecap=\"round\" fill=\"none\"/>",
    "</g>",
    "<g class=\"jr-leg jr-leg-right\">",
    "<path d=\"M46 68 L49 88\" stroke=\"#9ecdd9\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>",
    "<path d=\"M42 90 Q49 88 53 90\" stroke=\"#dffeff\" stroke-width=\"3.1\" stroke-linecap=\"round\" fill=\"none\"/>",
    "</g>",
    "<g class=\"jr-arm jr-arm-left\">",
    "<path d=\"M12 43 L3 43\" stroke=\"#6ca5b2\" stroke-width=\"4.8\" stroke-linecap=\"round\"/>",
    "<circle cx=\"7\" cy=\"43\" r=\"3.1\" fill=\"#28586a\" stroke=\"#9ae9e6\" stroke-width=\"1\"/>",
    "<g class=\"jr-rotor jr-rotor-left\">",
    "<ellipse cx=\"7\" cy=\"40\" rx=\"8\" ry=\"2\" fill=\"#88ffff\" opacity=\".45\"/>",
    "<path d=\"M1 40 H13\" stroke=\"#9bffef\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
    "</g>",
    "</g>",
    "<g class=\"jr-arm jr-arm-right\">",
    "<path d=\"M62 43 L71 43\" stroke=\"#6ca5b2\" stroke-width=\"4.8\" stroke-linecap=\"round\"/>",
    "<circle cx=\"67\" cy=\"43\" r=\"3.1\" fill=\"#28586a\" stroke=\"#9ae9e6\" stroke-width=\"1\"/>",
    "<g class=\"jr-rotor jr-rotor-right\">",
    "<ellipse cx=\"67\" cy=\"40\" rx=\"8\" ry=\"2\" fill=\"#88ffff\" opacity=\".45\"/>",
    "<path d=\"M61 40 H73\" stroke=\"#9bffef\" stroke-width=\"2\" stroke-linecap=\"round\"/>",
    "</g>",
    "</g>",
    "<g class=\"jr-head\">",
    "<circle class=\"jr-hull\" cx=\"37\" cy=\"42\" r=\"29\" fill=\"url(#aero-shell)\" stroke=\"#e1ffff\" stroke-width=\"1.2\"/>",
    "<path d=\"M51 18 C66 29 67 53 52 64 Q64 45 51 18Z\" fill=\"url(#aero-edge)\" opacity=\".7\"/>",
    "<path d=\"M18 30 Q25 17 40 16\" fill=\"none\" stroke=\"#fff\" stroke-opacity=\".78\" stroke-width=\"2.6\" stroke-linecap=\"round\"/>",
    "<path d=\"M17 54 Q25 67 46 67\" fill=\"none\" stroke=\"#75d6dc\" stroke-opacity=\".3\" stroke-width=\".9\"/>",
    "<rect x=\"14\" y=\"30\" width=\"46\" height=\"28\" rx=\"13\" fill=\"url(#aero-visor)\" stroke=\"#50a4ad\" stroke-width=\"1\"/>",
    "<path d=\"M22 33 H49\" stroke=\"#adfff2\" stroke-opacity=\".2\" stroke-width=\"1.4\" stroke-linecap=\"round\"/>",
    "<g class=\"jr-eye jr-eye-left\">",
    "<rect x=\"23\" y=\"37\" width=\"8.2\" height=\"12\" rx=\"4.1\" fill=\"url(#aero-eye)\"/>",
    "<circle class=\"jr-iris\" cx=\"25.5\" cy=\"39.5\" r=\"1.6\" fill=\"#f9ffff\"/>",
    "</g>",
    "<g class=\"jr-eye jr-eye-right\">",
    "<rect x=\"43\" y=\"37\" width=\"8.2\" height=\"12\" rx=\"4.1\" fill=\"url(#aero-eye)\"/>",
    "<circle class=\"jr-iris\" cx=\"45.5\" cy=\"39.5\" r=\"1.6\" fill=\"#f9ffff\"/>",
    "</g>",
    "<path class=\"jr-smile\" d=\"M32 52 Q37 56 42 52\" fill=\"none\" stroke=\"#65eedc\" stroke-width=\"1.35\" stroke-linecap=\"round\"/>",
    "</g>",
    "<g class=\"jr-antenna\"><circle class=\"jr-led\" cx=\"37\" cy=\"10\" r=\"2.3\" fill=\"#94ffe8\" stroke=\"#e8ffff\" stroke-width=\".65\"/></g>",
    "<g class=\"jr-stars\"><circle cx=\"12\" cy=\"16\" r=\"1.7\" fill=\"#9cffee\"/><circle cx=\"63\" cy=\"18\" r=\"1.25\" fill=\"#a9fff0\"/></g>",
    "</svg>",
    '</button>',
    '<div class="jakhon-robot__bubble" aria-hidden="true"></div>'
  ].join("");
  document.body.append(robot);

  // Aero Orb: preserve landing geometry and velocity-aware navigation.
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
  // A single velocity-bearing flight state survives every target change.
  // All visible relocation uses continuous velocity-controlled motion.
  let air=null,patrolSequence=0;
  let suppressClickUntil = 0;
  const drag = {
    pointerId: null, armed: false, active: false, timer: 0, frame: 0,
    startX: 0, startY: 0, grabX: 0, grabY: 0,
    clientX: 0, clientY: 0, targetX: 0, targetY: 0, lastTime: 0,
    pointerType: ""
  };
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
    robot.classList.toggle("is-hidden",!yes);
    button.tabIndex=yes?0:-1;
    button.setAttribute("aria-hidden",String(!yes));
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
    if(flight)cancelAnimationFrame(flight);
    flight=0;air=null;
    robot.classList.remove("is-flying","is-patrolling","is-takeoff",
      "is-cruising","is-descending","is-flight-fast","is-flight-braking",
      "is-landing","is-bouncing");
    robot.style.setProperty("--jr-speed","0");
    robot.style.setProperty("--jr-yaw","0deg");
    robot.style.setProperty("--jr-roll","0deg");
    robot.style.setProperty("--jr-pitch","-7deg");
    robot.dataset.flightDirection="idle";
    robot.dataset.flightPhase="rest";
  }
  const smooth=t=>{
    const a=clamp(t,0,1);return a*a*(3-2*a);
  };
  function setFlightStage(stage) {
    for(const name of ["takeoff","cruising","descending"])
      robot.classList.toggle("is-"+name,stage===name);
    robot.dataset.flightPhase=stage;
  }
  function setFlightAttitude(vx,vy,phase) {
    const speed=Math.hypot(vx,vy);
    const yaw=clamp(vx/21,-19,19);
    const roll=clamp(vx/30,-13,13);
    const pitch=phase==="takeoff"?-13:phase==="descending"?10:
      clamp(-vy/20,-11,11);
    robot.style.setProperty("--jr-yaw",yaw.toFixed(1)+"deg");
    robot.style.setProperty("--jr-roll",roll.toFixed(1)+"deg");
    robot.style.setProperty("--jr-pitch",pitch.toFixed(1)+"deg");
    robot.style.setProperty("--jr-speed",(clamp(speed/390,0,1)).toFixed(3));
    robot.style.setProperty("--jr-jet-period",
      (speed>265?".13":speed>130?".21":".37")+"s");
    robot.classList.toggle("is-flight-fast",speed>240);
    robot.classList.toggle("is-flight-braking",speed<70 && phase!=="takeoff");
    robot.dataset.flightDirection=Math.abs(vx)>Math.abs(vy)*1.2?
      (vx>0?"right":"left"):(vy>0?"down":"up");
  }
  function segmentFree(from,to,obstacles=collectObstacles()) {
    const d=Math.hypot(to.x-from.x,to.y-from.y);
    if(d<.5)return true;
    const n=Math.ceil(d/13);
    for(let i=1;i<=n;i++){
      const t=i/n;
      if(!spaceFree({x:from.x+(to.x-from.x)*t,
        y:from.y+(to.y-from.y)*t},obstacles))return false;
    }
    return true;
  }
  // Grid route search happens only when the direct route is blocked.
  // Each grid cell is a safe full-robot footprint, not just an empty point.
  function planRoute(from,to,obstacles=collectObstacles()) {
    if(segmentFree(from,to,obstacles))return [to];
    const {w,h}=bounds(),left=8,top=headerEdge()+5;
    const maxX=innerWidth-w-8,maxY=innerHeight-h-10;
    if(maxX<left||maxY<top)return null;
    const gap=clamp(Math.min(innerWidth,innerHeight)/13,38,64);
    const xs=[],ys=[];
    for(let v=left;v<maxX;v+=gap)xs.push(v);
    xs.push(maxX);
    for(let v=top;v<maxY;v+=gap)ys.push(v);
    ys.push(maxY);
    const columns=xs.length,rows=ys.length;
    const cells=Array.from({length:columns*rows},(_,i)=>{
      const ix=i%columns,iy=Math.floor(i/columns);
      const p={x:xs[ix],y:ys[iy]};
      return {...p,free:spaceFree(p,obstacles),i,ix,iy};
    });
    const startSeeds=[],finishSeeds=new Set();
    const radius=gap*3.25;
    for(const node of cells){
      if(!node.free)continue;
      if(Math.hypot(node.x-from.x,node.y-from.y)<radius &&
         segmentFree(from,node,obstacles))startSeeds.push(node.i);
      if(Math.hypot(node.x-to.x,node.y-to.y)<radius &&
         segmentFree(node,to,obstacles))finishSeeds.add(node.i);
    }
    if(!startSeeds.length||!finishSeeds.size)return null;
    const dist=new Float64Array(cells.length).fill(Infinity);
    const parent=new Int32Array(cells.length).fill(-1);
    const visited=new Uint8Array(cells.length);
    const open=[];
    for(const id of startSeeds) {
      dist[id]=Math.hypot(cells[id].x-from.x,cells[id].y-from.y);
      open.push(id);
    }
    let reached=-1;
    const dirs=[[0,1],[0,-1],[1,0],[-1,0],[1,1],[1,-1],[-1,1],[-1,-1]];
    let attempts=0;
    while(open.length&&attempts++<cells.length){
      let best=0,score=Infinity;
      for(let i=0;i<open.length;i++){
        const n=cells[open[i]];
        const f=dist[n.i]+Math.hypot(n.x-to.x,n.y-to.y);
        if(f<score){score=f;best=i;}
      }
      const id=open.splice(best,1)[0];
      if(visited[id])continue;
      visited[id]=1;
      if(finishSeeds.has(id)){reached=id;break;}
      const node=cells[id];
      for(const [dx,dy] of dirs){
        const ix=node.ix+dx,iy=node.iy+dy;
        if(ix<0||iy<0||ix>=columns||iy>=rows)continue;
        const ni=iy*columns+ix,next=cells[ni];
        if(!next.free||visited[ni])continue;
        if(!segmentFree(node,next,obstacles))continue;
        const nd=dist[id]+Math.hypot(next.x-node.x,next.y-node.y);
        if(nd>=dist[ni])continue;
        dist[ni]=nd;parent[ni]=id;
        open.push(ni);
      }
    }
    if(reached<0)return null;
    const raw=[];
    for(let id=reached;id>=0;id=parent[id])raw.push(cells[id]);
    raw.reverse();raw.push(to);
    // String-pull across visible unobstructed corridors for smooth turns.
    const waypoints=[];
    let base=from,i=0;
    while(i<raw.length){
      let last=i;
      for(let j=i+1;j<raw.length;j++){
        if(segmentFree(base,raw[j],obstacles))last=j;
        else break;
      }
      const selected=raw[last];
      waypoints.push({x:selected.x,y:selected.y});
      base=selected;i=last+1;
    }
    return waypoints;
  }
  function livePoint(point) {
    if(!point?.element||!isPhysicalSurface(point.element))return null;
    return pointsOnSurface(point.element).find(p=>p.slot===point.slot)||null;
  }
  // The same continuous motion engine drives landing and free patrol.
  function flightTick(now,token){
    if(token!==flightToken||!air||dragging()||document.hidden)return;
    if(modalOpen()){resetFlight();show(false);return;}
    const state=air;
    const dt=clamp((now-state.last)/1000,.008,.045);
    state.last=now;
    const obstacles=collectObstacles();
    let destination=null;
    if(state.mode==="landing"){
      const live=livePoint(state.target);
      if(live && spaceFree(live,obstacles)){
        state.target=live;current=live;
      }else{
        const alternative=chooseAnchor(null,{exclude:state.target?.element});
        if(alternative){state.target=alternative;current=alternative;}
        else {state.mode="patrol";state.stage="cruising";current=null;
          robot.classList.add("is-patrolling");}
      }
    }
    if(state.mode==="landing"){
      const target=state.target;
      if(state.stage==="takeoff"){
        destination={x:state.takeoffX,y:state.takeoffY};
        if(Math.hypot(destination.x-x,destination.y-y)<3){
          state.stage="cruising";state.path=[];state.plannedAt=0;state.plannedGoal=null;
        }
      }
      if(state.stage==="cruising"){
        const approach={x:target.x,y:target.y-27};
        const good=spaceFree(approach,obstacles);
        destination=good?approach:target;
        if(Math.hypot(destination.x-x,destination.y-y)<8 &&
           Math.hypot(state.vx,state.vy)<70){
          state.stage="descending";state.path=[];
        }
      }
      if(state.stage==="descending")destination={x:target.x,y:target.y};
    }else{
      robot.classList.add("is-patrolling");
      state.stage="cruising";
      if(now-state.lastSupportCheck>820){
        state.lastSupportCheck=now;
        const found=chooseAnchor(requested&&visible(requested)?requested:null);
        if(found){anchorTo(found,true);return;}
      }
      if(!state.patrolGoal || Math.hypot(x-state.patrolGoal.x,
          y-state.patrolGoal.y)<8 || !spaceFree(state.patrolGoal,obstacles)){
        if(now>state.nextPatrol){
          patrolSequence++;
          state.patrolGoal=freeFlightPosition(obstacles,true);
          state.nextPatrol=now+2400;
          state.path=[];
        }
      }
      destination=state.patrolGoal || {x,y};
    }
    if(state.mode==="landing"&&state.stage==="descending" &&
       Math.hypot(destination.x-x,destination.y-y)<2.3 &&
       Math.hypot(state.vx,state.vy)<38){
      const landed=livePoint(state.target)||state.target;
      resetFlight();current=landed;
      setPosition(landed.x,landed.y);pose(landed);show(true);
      robot.dataset.flightPhase="rest";
      robot.dataset.flightDirection="idle";
      robot.style.setProperty("--jr-speed","0");
      robot.classList.add("is-landing");
      setTimeout(()=>robot.classList.remove("is-landing"),420);
      lastFlight=now;
      return;
    }
    const direct=segmentFree({x,y},destination,obstacles);
    if(direct){
      state.path=[];
    }else if((!state.path.length || !spaceFree(state.path[0],obstacles) ||
      (state.plannedGoal&&Math.hypot(destination.x-state.plannedGoal.x,
      destination.y-state.plannedGoal.y)>75)) && now>=state.retryAt){
      const route=planRoute({x,y},destination,obstacles);
      state.path=route||[];
      state.plannedAt=now;
      state.plannedGoal={x:destination.x,y:destination.y};
      if(!route)state.retryAt=now+390;
    }
    if(!direct&&!state.path.length&&now<state.retryAt){
      // Wait for the next bounded path search instead of repeatedly pushing
      // into the same obstacle and postponing replanning on every frame.
      state.vx*=.76;state.vy*=.76;
      setFlightStage(state.stage);
      setFlightAttitude(state.vx,state.vy,state.stage);
      flight=requestAnimationFrame(t=>flightTick(t,token));
      return;
    }
    let course=destination;
    while(state.path.length && Math.hypot(x-state.path[0].x,
        y-state.path[0].y)<Math.max(9,Math.hypot(state.vx,state.vy)*dt*.9)){
      state.path.shift();
    }
    if(state.path.length)course=state.path[0];
    // Vector acceleration with braking-distance control; heading and engine
    // strength are derived from actual velocity (not progress through a timer).
    const dx=course.x-x,dy=course.y-y,d=Math.hypot(dx,dy);
    const acceleration=state.stage==="descending"?510:680;
    const brake=state.stage==="descending"?550:660;
    const topSpeed=innerWidth<820?240:415;
    const speedLimit=Math.min(topSpeed,Math.sqrt(2*brake*d));
    const wantedX=d>0.01?dx/d*speedLimit:0;
    const wantedY=d>0.01?dy/d*speedLimit:0;
    let ax=wantedX-state.vx,ay=wantedY-state.vy;
    const magnitude=Math.hypot(ax,ay);
    const maxChange=acceleration*dt;
    if(magnitude>maxChange){ax*=maxChange/magnitude;ay*=maxChange/magnitude;}
    let vx=state.vx+ax,vy=state.vy+ay;
    const next={x:x+vx*dt,y:y+vy*dt};
    if(segmentFree({x,y},next,obstacles)){
      state.vx=vx;state.vy=vy;
      setPosition(next.x,next.y);
    }else{
      // A newly moving text block invalidated the corridor. Stop thrusting
      // into it: keep the robot visible and revise the route.
      state.vx*=.65;state.vy*=.65;
      state.path=[];state.plannedAt=0;state.plannedGoal=null;
      state.retryAt=now+220;
      if(!spaceFree({x,y},obstacles)){
        // Existing position is temporarily covered by moving content.
        // Do not snap elsewhere; wait for a free corridor.
        state.vx=0;state.vy=0;
      }
    }
    setFlightStage(state.stage);
    setFlightAttitude(state.vx,state.vy,state.stage);
    flight=requestAnimationFrame(t=>flightTick(t,token));
  }
  function beginAir(mode,target=null){
    if(dragging())return;
    if(reduced()){
      resetFlight();
      if(target){current=target;setPosition(target.x,target.y);pose(target);show(true);}
      else {
        const safe=freeFlightPosition(collectObstacles());
        if(safe&&x<0)setPosition(safe.x,safe.y);
        if(safe)show(true);else show(false);
      }
      return;
    }
    if(x<0){
      // Initial mount only: position while the robot is not yet visible.
      const seed=target||freeFlightPosition(collectObstacles());
      if(!seed){show(false);return;}
      setPosition(seed.x,seed.y);
    }
    if(air){
      air.mode=mode;
      air.target=target;
      air.stage=mode==="landing"?"cruising":"cruising";
      air.path=[];air.plannedAt=0;air.plannedGoal=null;
      air.patrolGoal=null;
      robot.classList.toggle("is-patrolling",mode==="patrol");
      // Keep current velocity, location and the running RAF.
      show(true);return;
    }
    const support=current;
    const lift=Math.min(41,innerWidth<820?24:34);
    const upper={x,y:y-lift};
    const canLift=support && spaceFree(upper,collectObstacles()) &&
      segmentFree({x,y},upper);
    air={
      mode,target,stage:canLift?"takeoff":"cruising",
      takeoffX:x,takeoffY:upper.y,vx:0,vy:0,
      last:performance.now(),path:[],plannedAt:0,plannedGoal:null,retryAt:0,
      patrolGoal:null,nextPatrol:0,lastSupportCheck:0
    };
    robot.classList.remove("is-perched","is-clinging","is-docked",
      "is-landing","is-napping","is-balancing");
    robot.classList.add("is-flying");
    robot.classList.toggle("is-patrolling",mode==="patrol");
    setFlightStage(air.stage);show(true);
    const token=flightToken;
    flight=requestAnimationFrame(t=>flightTick(t,token));
  }
  function freeFlightPosition(obstacles=collectObstacles(),different=false) {
    const {w,h}=bounds();
    const xs=[9,innerWidth-w-9,innerWidth*.2,innerWidth*.8-w,
      innerWidth*.5-w*.5];
    const ys=[.25,.40,.57,.73].map(v=>clamp(innerHeight*v,
      headerEdge()+7,innerHeight-h-10));
    const options=[];
    for(const px of xs)for(const py of ys){
      const pt={x:clamp(px,8,innerWidth-w-8),y:py};
      if(!spaceFree(pt,obstacles))continue;
      const distance=Math.hypot(pt.x-x,pt.y-y);
      const favorX=patrolSequence%2===0;
      const directionalPenalty=different ?
        (favorX&&Math.abs(pt.x-x)<innerWidth*.2?180:0)+
        (!favorX&&Math.abs(pt.y-y)<innerHeight*.16?180:0):0;
      options.push({...pt,score:distance*.08+directionalPenalty+
        (different&&distance<65?300:0)});
    }
    options.sort((a,b)=>a.score-b.score);
    return options[0]||null;
  }
  function startFreeFlight(){
    if(dragging())return;
    if(air?.mode==="patrol")return;
    current=null;
    beginAir("patrol");
  }
  function anchorTo(point,animate=true){
    if(dragging())return;
    if(!point){startFreeFlight();return;}
    if(modalOpen()){resetFlight();show(false);return;}
    const same=current?.element===point.element&&current?.slot===point.slot;
    if(same&&!air){
      current=point;setPosition(point.x,point.y);pose(point);show(true);
      return;
    }
    if(air?.mode==="landing" && same) {
      air.target=point;
      return;
    }
    current=point;
    lastSelected=point.element;
    if(!robot.classList.contains("is-ready")||reduced()){
      resetFlight();setPosition(point.x,point.y);pose(point);show(true);
    }else beginAir("landing",point);
  }
  function refreshAnchors() {
    anchors=Array.from(new Set(document.querySelectorAll(anchorsSelector)));
  }
  function settle(preferred=null,animate=true){
    if(dragging())return;
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
    // Browser owns smooth scrolling; follow a target as it enters view.
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
    if (ev.pointerType==="touch" || reduced() || modalOpen() || dragging() || flight || performance.now()-lastScroll<900) return;
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
      ru:["Поздороваться с Aero Orb","Нажми на Aero Orb",["Привет!","Я на связи!","Взлетаю!","Смотрю!"]],
      en:["Say hello to Aero Orb","Tap Aero Orb",["Hello!","I'm flying!","Taking off!","Looking!"]],
      uz:["Aero Orb bilan salomlashing","Aero Orb ni bosing",["Salom!","Men uchyapman!","Uchyapman!","Ko'ryapman!"]]
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
    drag.active=true;
    current=null;
    lastInteraction=performance.now();
    robot.classList.remove("is-hidden","is-patrolling",
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
    if(dragging()||robot.classList.contains("is-hidden")||
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
      if(modalOpen()||flight||dragging()||!current||performance.now()-lastScroll<1200){scheduleIdle();return;}
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
