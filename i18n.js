/* JAKHON localized UX — RU / EN / Uzbek Latin.
   Local, offline-first translation without APIs or remote services. */
(() => {
  "use strict";

  const dictionary = window.JakhonDictionary || {};
  const languages = new Set(["ru", "en", "uz"]);
  const select = document.getElementById("site-language-select");
  const sourceTexts = new WeakMap();
  const sourceAttributes = new WeakMap();
  const localizedAttrs = ["aria-label", "title", "placeholder", "alt"];
  const skipElements = new Set(["SCRIPT", "STYLE", "NOSCRIPT"]);
  const queried = new URL(window.location.href);
  const supplied = queried.searchParams.get("lang");
  let preferred = "ru";
  try { preferred = localStorage.getItem("jakhon-language") || "ru"; } catch (_) {}
  let current = languages.has(supplied) ? supplied : languages.has(preferred) ? preferred : "ru";

  function translate(raw, locale=current) {
    if (locale === "ru" || typeof raw !== "string") return raw;
    const match = /^(\s*)([\s\S]*?)(\s*)$/.exec(raw);
    if (!match) return raw;
    const key = match[2];
    if (!key) return raw;
    const word = dictionary[key]?.[locale];
    if (word !== undefined) return match[1] + word + match[3];

    // Strings constructed by application logic.
    let m = key.match(/^Показано:\s*(\d+)\s*\/\s*(\d+)$/);
    if (m) return match[1] + (locale === "en" ? "Showing: " : "Ko'rsatildi: ") + m[1] + " / " + m[2] + match[3];
    m = key.match(/^(\d+)\s+лет$/);
    if (m) return match[1] + m[1] + (locale === "en" ? " years" : " yil") + match[3];
    return raw;
  }

  function variants(raw) {
    return [raw,translate(raw,"en"),translate(raw,"uz")];
  }

  function translateNode(node) {
    if (!node || !node.parentElement || skipElements.has(node.parentElement.tagName)) return;
    const value = node.nodeValue;
    let original = sourceTexts.get(node);
    if (original === undefined || !variants(original).includes(value)) {
      original = value;
      sourceTexts.set(node,original);
    }
    const next = translate(original,current);
    if (value !== next) node.nodeValue = next;
  }

  function translateAttribute(element, name) {
    const value = element.getAttribute(name);
    if (value == null || !value.trim()) return;
    let base = sourceAttributes.get(element);
    if (!base) {
      base = Object.create(null);
      sourceAttributes.set(element,base);
    }
    let original = base[name];
    if (original === undefined || !variants(original).includes(value)) {
      original = value;
      base[name] = original;
    }
    const next = translate(original,current);
    if (value !== next) element.setAttribute(name,next);
  }

  function translateElement(element) {
    if (!(element instanceof Element)) return;
    if (skipElements.has(element.tagName)) return;
    for (const name of localizedAttrs) {
      if (element.hasAttribute(name)) translateAttribute(element,name);
    }
    if (element.tagName === "META" && (element.name === "description" || element.getAttribute("property")?.startsWith("og:"))) {
      if (element.hasAttribute("content")) translateAttribute(element,"content");
    }
    if (element.tagName === "INPUT" && /^(submit|button|reset)$/i.test(element.type)) {
      if (element.hasAttribute("value")) translateAttribute(element,"value");
    }
  }

  function translateTree(node) {
    if (!node) return;
    if (node.nodeType === Node.TEXT_NODE) {
      translateNode(node);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE && node.nodeType !== Node.DOCUMENT_NODE) return;
    if (node instanceof Element) translateElement(node);
    if (node instanceof Element && skipElements.has(node.tagName)) return;
    const walk = document.createTreeWalker(node,NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    let item;
    while ((item=walk.nextNode())) {
      if (item.nodeType === Node.TEXT_NODE) translateNode(item);
      else translateElement(item);
    }
  }

  function updateDocument() {
    document.documentElement.lang = current;
    if (select) select.value=current;
    document.querySelectorAll(".site-language").forEach(el=>{
      el.dataset.locale=current;
    });
    const ogLocale=document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute("content",current==="en"?"en_US":current==="uz"?"uz_UZ":"ru_RU");
    translateTree(document);
  }

  function selectLanguage(locale, updateUrl=true) {
    if (!languages.has(locale)) return;
    current=locale;
    try{localStorage.setItem("jakhon-language",locale);}catch(_){}
    if(updateUrl){
      const url=new URL(location.href);
      if(locale==="ru")url.searchParams.delete("lang");else url.searchParams.set("lang",locale);
      history.replaceState(history.state,"",url.pathname+url.search+url.hash);
    }
    updateDocument();
    document.dispatchEvent(new CustomEvent("jakhon:languagechange",{detail:{language:locale}}));
  }

  // Expose localization for form output and interactive scene scripts.
  window.JakhonI18n=Object.freeze({
    translate:(text)=>translate(String(text)),
    get current(){return current;},
    setLanguage:selectLanguage
  });

  if (select) select.addEventListener("change",event=>selectLanguage(event.target.value));

  // Translate content generated by project filters, menus, modals and sliders.
  const observer=new MutationObserver(mutations=>{
    for(const change of mutations){
      if(change.type==="characterData")translateNode(change.target);
      else if(change.type==="attributes")translateAttribute(change.target,change.attributeName);
      else if(change.type==="childList"){
        change.addedNodes.forEach(translateTree);
      }
    }
  });
  observer.observe(document.documentElement,{
    subtree:true,childList:true,characterData:true,attributes:true,
    attributeFilter:["aria-label","title","placeholder","alt","content","value"]
  });

  updateDocument();
  // The query parameter is authoritative when a shared localized URL is opened.
  // Language is persisted across internal navigation through localStorage.
  if (supplied && !languages.has(supplied)) {
    try { const u=new URL(location.href);u.searchParams.delete("lang");history.replaceState(history.state,"",u.pathname+u.search+u.hash); } catch(_){}
  }
})();