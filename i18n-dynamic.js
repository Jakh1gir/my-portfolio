window.JakhonDictionary = window.JakhonDictionary || {};
for (const line of "Открыть кейс|||View case|||Loyihani ochish\nПоказано:|||Showing:|||Ko'rsatildi:\nТекст скопирован. Вставьте его в сообщение Telegram.|||Copied. Paste the text into your Telegram message.|||Nusxalandi. Matnni Telegram xabariga joylang.\nНе удалось скопировать автоматически. Разрешите доступ к буферу обмена или скопируйте вручную.|||Automatic copying failed. Allow clipboard access or copy the text manually.|||Avtomatik nusxalab bo'lmadi. Buferga ruxsat bering yoki matnni qo'lda nusxalang.\nВведите имя и описание задачи.|||Enter your name and project description.|||Ismingiz va vazifa tavsifini kiriting.\nОткройте t.me/JakhonUZ и отправьте заявку.|||Open t.me/JakhonUZ and send your request.|||t.me/JakhonUZ ni ochib, buyurtmani yuboring.\nОткройте t.me/JakhonUZ и передайте бриф.|||Open t.me/JakhonUZ and send your brief.|||t.me/JakhonUZ ni ochib, topshiriqni yuboring.\nНачало|||Start|||Boshlanish\nГлавный экран · Манифест|||Homepage · Manifesto|||Bosh sahifa · Manifest\nДевять лет в энергетике|||Nine years in energy|||Energetikada to'qqiz yil\nИнтерактивная инженерия|||Interactive engineering|||Interaktiv muhandislik\nАСУ ТП · Данные · Local AI|||Industrial Control · Data · Local AI|||ASU TP · Ma'lumotlar · Mahalliy AI\nКомпетенции и специализации|||Skills and specializations|||Ko'nikmalar va ixtisoslar\nИзбранные системы|||Featured systems|||Tanlangan tizimlar\nJ1Calc · Local_DB · Smart Home Edge|||J1Calc · Local_DB · Smart Home Edge|||J1Calc · Local_DB · Smart Home Edge\n11 проектов, поиск и фильтры|||11 projects, search and filters|||11 loyiha, qidiruv va filtrlar\nПрофессиональный путь|||Career journey|||Kasbiy yo'l\nВЧ-связь → АСУ ТП|||HF communications → Industrial control|||Yuqori chastotali aloqa → ASU TP\nСтоимость услуг|||Service pricing|||Xizmat narxlari\nОриентировочный прайс|||Indicative pricing|||Taxminiy narxlar\nТелефон · Telegram · Instagram|||Phone · Telegram · Instagram|||Telefon · Telegram · Instagram\nRunway · Видеокалькулятор|||Runway · Video calculator|||Runway · Video kalkulyator\nAI · Новости · Интеграции|||AI · News · Integrations|||AI · Yangiliklar · Integratsiya\nОткрыть GitHub|||Open GitHub|||GitHubni ochish\nПубличные репозитории|||Public repositories|||Ochiq repozitoriylar\nНичего не найдено. Попробуйте другой запрос.|||Nothing found. Try another search.|||Hech narsa topilmadi. Boshqa so'rovni kiriting.\nЗаявка на AI-видео — JakhonUZ AI Production|||AI video request — JakhonUZ AI Production|||AI video buyurtmasi — JakhonUZ AI Production\nТариф|||Plan|||Tarif\nДлительность|||Duration|||Davomiylik\nСтавка|||Rate|||Narx\nСтоимость видео|||Video price|||Video narxi\nПредоплата за генерацию|||Generation deposit|||Generatsiya uchun oldindan to'lov\nОстаток|||Balance|||Qoldiq\nДополнительно|||Add-ons|||Qo'shimcha\nне выбрано|||none selected|||tanlanmagan\nстоимость отдельно|||priced separately|||narx alohida\nПрошу уточнить сроки и условия работы.|||Please confirm timing and terms.|||Muddatlar va shartlarni aniqlashtirib bering.\nНовая заявка / JAKHON|||New project request / JAKHON|||Yangi buyurtma / JAKHON\nКонтакт|||Contact|||Aloqa\nОписание задачи|||Project description|||Vazifa tavsifi\nПредварительный расчёт AI-видео|||Preliminary AI video estimate|||AI videoning dastlabki hisobi\nСекунда|||Second|||Soniya\nСекунды|||Seconds|||Soniyalar".trim().split("\n")) {
 const parts = line.split("|||");
 if (parts.length !== 3) continue;
 window.JakhonDictionary[parts[0]]={en:parts[1],uz:parts[2]};
}

for (const line of "Поиск раздела, проекта, направления...|||Search sections, projects, expertise...|||Bo'lim, loyiha yoki yo'nalishni qidirish...\nРезультаты навигации|||Navigation results|||Navigatsiya natijalari\nLanguage / Til / Язык|||Language|||Til".split("\n")) { const parts=line.split("|||"); if(parts.length===3) window.JakhonDictionary[parts[0]]={en:parts[1],uz:parts[2]}; }

/* GitHub-verified portfolio strings, 2026-11-09. */
Object.assign(window.JakhonDictionary, {
  "Данные проектов сверены с GitHub:": {
    "en": "Project information checked against GitHub:",
    "uz": "Loyihalar ma’lumotlari GitHub bilan tekshirildi:"
  },
  ". Версия исходников не означает подтверждённый публичный релиз.": {
    "en": ". A source version does not mean a confirmed public release.",
    "uz": ". Manba kodi versiyasi tasdiqlangan ommaviy reliz degani emas."
  },
  "Версия исходников не означает подтверждённый публичный релиз.": {
    "en": "A source version does not mean a confirmed public release.",
    "uz": "Manba kodi versiyasi tasdiqlangan ommaviy reliz degani emas."
  },
  "Последний коммит:": {
    "en": "Last commit:",
    "uz": "So‘nggi commit:"
  },
  "Бета · v0.8.8": {
    "en": "Beta · v0.8.8",
    "uz": "Beta · v0.8.8"
  },
  "Бета · 1.8.0-beta.1": {
    "en": "Beta · v1.8.0b1",
    "uz": "Beta · v1.8.0b1"
  },
  "Прототип · v0.3.0": {
    "en": "Prototype · v0.3.0",
    "uz": "Prototip · v0.3.0"
  },
  "Core · v0.5.0 beta": {
    "en": "Core · v0.5.0 beta",
    "uz": "Core · v0.5.0 beta"
  },
  "Исходники · v1.3.3": {
    "en": "Source · v1.3.3",
    "uz": "Manba · v1.3.3"
  },
  "Версия исходников:": {
    "en": "Source version:",
    "uz": "Manba kodi versiyasi:"
  },
  "Офлайн-инструментарий Android для инженеров: 57 расчётных сценариев в версии 0.8.8, архив результатов и 11 языков. Бета-развитие продолжается.": {
    "en": "Offline Android engineering toolkit: 57 calculation workflows in v0.8.8, a results archive and 11 languages. Beta development continues.",
    "uz": "Android uchun oflayn muhandislik vositasi: 0.8.8 versiyada 57 ta hisoblash jarayoni, natijalar arxivi va 11 til. Beta rivojlanishi davom etmoqda."
  },
  "Local-first система для инженерных данных: SQLite, LAN API, права доступа, аудит, Excel и реестр оборудования KKS. Код 1.8.0-beta.1; установщик ещё требует приёмки.": {
    "en": "Local-first engineering data platform with SQLite, LAN API, access control, audit, Excel and a KKS equipment register. Version 1.8.0-beta.1 source; installer acceptance is pending.",
    "uz": "SQLite, LAN API, kirish nazorati, audit, Excel va KKS uskunalar reyestriga ega lokal muhandislik ma’lumot tizimi. Kod 1.8.0-beta.1; o‘rnatma hali sinovdan o‘tishi kerak."
  },
  "Программный прототип умного дома 0.3.0: Flutter-приложение, Orange Pi, MQTT и ESP32. Есть деморежим и синхронизация; готовый физический комплект не заявлен.": {
    "en": "Smart-home software prototype 0.3.0 with Flutter, Orange Pi, MQTT and ESP32. Demo and synchronization are available; no finished physical kit is claimed.",
    "uz": "Flutter, Orange Pi, MQTT va ESP32 asosidagi aqlli uy dasturiy prototipi 0.3.0. Demo va sinxronlash mavjud; tayyor apparat majmuasi e’lon qilinmagan."
  },
  "Core 0.5.0-beta.1 обрабатывает инженерные запросы и KKS, связывая Local_DB, Visual Pack и локальные AI-модели. Единая сборка DB AI Core пока не подтверждена.": {
    "en": "Core 0.5.0-beta.1 handles engineering queries and KKS while integrating Local_DB, Visual Pack and local AI models. An accepted all-in-one DB AI Core build is not yet confirmed.",
    "uz": "Core 0.5.0-beta.1 muhandislik so‘rovlari va KKS bilan ishlaydi, Local_DB, Visual Pack hamda mahalliy AI modellarini bog‘laydi. Yagona DB AI Core yig‘ilmasi hali tasdiqlanmagan."
  },
  "Модуль OCR/PDF/DXF и поиска KKS на схемах, код 1.3.3. Установщик Windows — кандидат; сквозная проверка установки ещё не подтверждена.": {
    "en": "OCR/PDF/DXF module for KKS searches on drawings, source version 1.3.3. Windows installer is a candidate; end-to-end validation remains unconfirmed.",
    "uz": "Chizmalardagi KKS qidiruvi uchun OCR/PDF/DXF moduli, kod 1.3.3. Windows o‘rnatmasi nomzod, yakuniy tekshiruv hali tasdiqlanmagan."
  }
});

/* KIPSHOP.UZ localization — project details and temporary preview. */
Object.assign(window.JakhonDictionary, {
  "B2B / Web": {
    "en": "B2B / Web",
    "uz": "B2B / Veb"
  },
  "Frontend MVP · прототип": {
    "en": "Frontend MVP · prototype",
    "uz": "Frontend MVP · prototip"
  },
  "INDUSTRIAL MARKETPLACE": {
    "en": "INDUSTRIAL MARKETPLACE",
    "uz": "SANOAT MARKETPLEYSI"
  },
  "КАТАЛОГ": {
    "en": "CATALOG",
    "uz": "KATALOG"
  },
  "ИНЖЕНЕРИЯ": {
    "en": "ENGINEERING",
    "uz": "MUHANDISLIK"
  },
  "B2B / КИПИА / АСУ ТП": {
    "en": "B2B / I&C / AUTOMATION",
    "uz": "B2B / KIPiA / ASU TP"
  },
  "Промышленный B2B-маркетплейс в разработке: каталог оборудования, сравнение характеристик, локальные черновики RFQ и инженерные симуляции. Продажи и серверные заказы пока не запущены.": {
    "en": "Industrial B2B marketplace in development: equipment catalog, product comparison, local RFQ drafts and engineering simulations. Live sales and server orders are not yet available.",
    "uz": "Ishlab chiqilayotgan sanoat B2B platformasi: uskunalar katalogi, solishtirish, lokal RFQ qoralamalari va muhandislik simulyatsiyalari. Haqiqiy savdo va server buyurtmalari hali ishga tushmagan."
  },
  "Подробнее о проекте KIPSHOP.UZ ↗": {
    "en": "KIPSHOP.UZ project details ↗",
    "uz": "KIPSHOP.UZ loyihasi haqida ↗"
  },
  "Временная ссылка": {
    "en": "Temporary preview",
    "uz": "Vaqtinchalik havola"
  },
  "MVP · ТОРГОВЫЙ ЗАПУСК В ПЛАНЕ": {
    "en": "MVP · COMMERCIAL LAUNCH PLANNED",
    "uz": "MVP · TIJORIY ISHGA TUSHIRISH REJADA"
  },
  "KIPSHOP.UZ — промышленный B2B": {
    "en": "KIPSHOP.UZ — industrial B2B",
    "uz": "KIPSHOP.UZ — sanoat B2B"
  },
  "Frontend MVP каталога КИПиА и АСУ ТП уже разрабатывается. Полноценные заказы, поставщики и серверная обработка RFQ требуют запуска и проверки.": {
    "en": "Frontend MVP for instrumentation and automation catalog is in development. Real orders, suppliers and server-side RFQ handling still require deployment and validation.",
    "uz": "KIPiA va ASU TP katalogining frontend MVP versiyasi ishlab chiqilmoqda. Haqiqiy buyurtmalar, yetkazib beruvchilar va server RFQ jarayoni hali ishga tushirilishi hamda tekshirilishi kerak."
  },
  "Временный просмотр: kipshop.vercel.app ↗": {
    "en": "Temporary preview: kipshop.vercel.app ↗",
    "uz": "Vaqtinchalik ko‘rish: kipshop.vercel.app ↗"
  }
});

/* Featured KIPSHOP.UZ translations — RU/EN/UZ. */
Object.assign(window.JakhonDictionary, {
  "Закреплённый проект KIPSHOP.UZ": {
    "en": "Featured project KIPSHOP.UZ",
    "uz": "Tanlangan loyiha KIPSHOP.UZ"
  },
  "ЗАКРЕПЛЁННЫЙ ПРОЕКТ": {
    "en": "FEATURED PROJECT",
    "uz": "TANLANGAN LOYIHA"
  },
  "В разработке · Frontend MVP": {
    "en": "In development · Frontend MVP",
    "uz": "Ishlab chiqilmoqda · Frontend MVP"
  },
  "Промышленная B2B-платформа для подбора оборудования КИПиА и АСУ ТП. Реализованы прототип каталога, сравнение товаров, локальные RFQ-черновики и учебные инженерные симуляции. Коммерческие заказы и серверные операции ещё проходят подготовку.": {
    "en": "An industrial B2B platform for sourcing instrumentation and automation equipment. The prototype includes a catalog, product comparison, local RFQ drafts and educational engineering simulations. Commercial orders and live backend workflows are still in preparation.",
    "uz": "KIPiA va ASU TP uskunalarini tanlash uchun sanoat B2B platformasi. Prototipda katalog, mahsulotlarni solishtirish, lokal RFQ qoralamalari va o‘quv muhandislik simulyatsiyalari mavjud. Tijoriy buyurtmalar hamda server jarayonlari hali tayyorlanmoqda."
  },
  "Открыть временный сайт ↗": {
    "en": "Open temporary website ↗",
    "uz": "Vaqtinchalik saytni ochish ↗"
  },
  "Описание и статус проекта ↗": {
    "en": "Project details and status ↗",
    "uz": "Loyiha tavsifi va holati ↗"
  },
  "Временный адрес:": {
    "en": "Temporary URL:",
    "uz": "Vaqtinchalik manzil:"
  },
  "НАПРАВЛЕНИЙ": {
    "en": "DIVISIONS",
    "uz": "YO‘NALISH"
  },
  "КАТЕГОРИЙ": {
    "en": "CATEGORIES",
    "uz": "TOIFA"
  },
  "ТИПОВ": {
    "en": "TYPES",
    "uz": "TUR"
  },
  "КЛАССИФИКАТОР, НЕ НАЛИЧИЕ НА СКЛАДЕ": {
    "en": "TAXONOMY, NOT STOCK AVAILABILITY",
    "uz": "TASNIFLAGICH, OMBOR QOLDIG‘I EMAS"
  }
});
