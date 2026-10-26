/* JAKHON: honest countdown to planned dates, not an automatic release announcement. */
(() => {
  "use strict";
  const timers=[...document.querySelectorAll("[data-countdown]")];
  if(!timers.length)return;

  const translations={
    ru:{remaining:days=>days+" "+(days%10===1&&days%100!==11?"день":days%10>=2&&days%10<=4&&(days%100<12||days%100>14)?"дня":"дней")+" до цели",today:"Целевая дата — сегодня",passed:"Плановая дата прошла · статус релиза проверяется",invalid:"Дата не задана"},
    en:{remaining:days=>days+" "+(days===1?"day":"days")+" to target",today:"Target date is today",passed:"Target date passed · release not yet confirmed",invalid:"No date set"},
    uz:{remaining:days=> "Maqsadli sanagacha "+days+" kun",today:"Maqsadli sana — bugun",passed:"Rejalashtirilgan sana o'tdi · reliz tasdiqlanmagan",invalid:"Sana ko'rsatilmagan"}
  };
  // Days are calculated by calendar in Tashkent (UTC+05), not by the visitor's timezone.
  const partsFormat=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Tashkent",year:"numeric",month:"2-digit",day:"2-digit"});
  function tashkentToday(){
    const parts=partsFormat.formatToParts(new Date());
    const lookup=Object.fromEntries(parts.map(p=>[p.type,p.value]));
    return Date.UTC(Number(lookup.year),Number(lookup.month)-1,Number(lookup.day));
  }
  function currentLocale(){const lang=document.documentElement.lang;return Object.prototype.hasOwnProperty.call(translations,lang)?lang:"ru"}
  function update(){
    const today=tashkentToday();
    const labels=translations[currentLocale()];
    timers.forEach(el=>{
      const source=el.dataset.countdown||"";
      const m=/^(\d{4})-(\d{2})-(\d{2})$/.exec(source);
      if(!m){el.textContent=labels.invalid;return}
      const target=Date.UTC(+m[1],+m[2]-1,+m[3]);
      const count=Math.round((target-today)/86400000);
      el.textContent=count>0?labels.remaining(count):count===0?labels.today:labels.passed;
      el.dataset.passed=String(count<0);
      el.setAttribute("aria-label",el.textContent);
      if(count<0)el.title=labels.passed;
    });
  }
  update();
  document.addEventListener("jakhon:languagechange",update);
  document.addEventListener("visibilitychange",()=>{if(!document.hidden)update()});
  setInterval(()=>{if(!document.hidden)update()},15*60*1000);
})();
