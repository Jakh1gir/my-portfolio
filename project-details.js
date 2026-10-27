/* JAKHON — project dossiers with honest milestones; RU/EN/UZ. */
(() => {
"use strict";
const L=(ru,en,uz)=>({ru,en,uz});
const S=(stage,ru,en,uz)=>({stage,label:L(ru,en,uz)});
const D=(title,area,status,summary,why,features,steps,stack,release=null,url=null)=>({title,area,status,summary,why,features,steps,stack,release,url});
const projects={
j1calc:D("J1Calc","ANDROID / OFFLINE","beta",
L("Мобильный калькулятор для Android. Идея проекта — собрать полезные вычисления и вспомогательные инструменты в одном понятном приложении, которым можно пользоваться без постоянного доступа к интернету.","An offline-first Android calculator that brings practical calculations and small utilities into one easy-to-use app.","Android uchun internetga doimiy ulanmasdan ishlaydigan, foydali hisob-kitob va kichik vositalarni birlashtiruvchi kalkulyator."),
L("Быстро выполнить расчёт с телефона и сохранить результат для дальнейшей работы.","Calculate quickly on a phone and save results for later.","Telefonda tez hisoblash va natijani keyinroq ishlatish uchun saqlash."),
[L("Расчёты и дополнительные инструменты","Calculations and utilities","Hisob-kitoblar va qo'shimcha vositalar"),L("Сохранение результатов","Saved results","Natijalarni saqlash"),L("Работа без обязательного облака","No mandatory cloud access","Majburiy bulutsiz ishlash"),L("Удобный Android-интерфейс","Clear Android interface","Qulay Android interfeysi")],
[S("now","Бета-версия с 5 сентября 2026","Beta available since September 5, 2026","Beta 2026-yil 5-sentabrdan"),S("next","Исправление замечаний и улучшение интерфейса","Fix feedback issues and refine UI","Kamchiliklarni tuzatish va interfeysni yaxshilash"),S("next","Новые инструменты и расширение возможностей","Expand available tools and features","Yangi vositalar va funksiyalarni kengaytirish")],
["Android","Kotlin","Offline-first"],L("Бета · 05.09.2026","Beta · Sep 5, 2026","Beta · 05.09.2026")),
localdb:D("Local_DB Universal","DESKTOP / LOCAL DATA","beta",
L("Программа для локального хранения и организации записей, документов и связанных данных. В центре проекта — поиск, история изменений, работа с таблицами и удобное управление информацией.","A desktop-oriented app for keeping records and documents locally, with search, change history and spreadsheet exchange.","Yozuv va hujjatlarni mahalliy saqlash va tartiblash dasturi. Qidiruv, o'zgarishlar tarixi va jadvallar bilan ishlashga yo'naltirilgan."),
L("Свести разрозненные записи в единую систему, которая остаётся под контролем пользователя.","Bring scattered records together while keeping data under the user's control.","Tarqoq yozuvlarni foydalanuvchi nazoratidagi yagona tizimga jamlash."),
[L("Карточки записей и документов","Record and document cards","Yozuv va hujjat kartalari"),L("Поиск, фильтры и сроки","Search, filters, date tracking","Qidiruv, filtr va muddatlar"),L("Экспорт и обмен с Excel","Excel exchange and export","Excel eksport va almashinuvi"),L("История изменений","Change history","O'zgarishlar tarixi")],
[S("now","Рабочая бета-версия, разработка продолжается","Working beta, development continues","Ishlaydigan beta, rivojlantirish davom etmoqda"),S("next","Отладка поиска и сценариев работы с данными","Improve data workflows and search","Ma'lumot jarayonlari va qidiruvni yaxshilash"),S("next","Проверка импорта, экспорта и стабильности","Test import/export and stability","Import, eksport va barqarorlikni tekshirish"),S("target","Плановая дата релиза — 15 декабря 2026","Target release — December 15, 2026","Rejali reliz — 2026-yil 15-dekabr")],
["Python","SQLite","Excel","Local-first"],L("План · 15.12.2026","Target · Dec 15, 2026","Reja · 15.12.2026")),
smarthome:D("Smart Home Edge","IOT / SMART HOME","design",
L("Проект умного дома с локальным сервером и управлением со смартфона. Сейчас продумываются программная архитектура, мобильный интерфейс и электронные компоненты. Готового комплекта пока нет.","A phone-controlled smart home concept with a local server. The app, system architecture and electronic components are being designed; no finished kit is available yet.","Telefon orqali boshqariladigan, mahalliy serverga ega aqlli uy loyihasi. Ilova, arxitektura va elektron qismlar loyihalanmoqda; tayyor to'plam hali yo'q."),
L("Управлять освещением, климатом и домашними сценариями через собственное приложение.","Control lights, climate and home scenes from an app.","Yoritish, iqlim va uy ssenariylarini ilova orqali boshqarish."),
[L("Локальное управление","Local control","Mahalliy boshqaruv"),L("Мобильный интерфейс","Mobile interface","Mobil interfeys"),L("Связь устройств через MQTT","Device messaging via MQTT","MQTT orqali qurilmalar aloqasi"),L("Проектирование электроники","Electronics design","Elektronika loyihasi")],
[S("now","Стадия проектирования","Design stage","Loyihalash bosqichi"),S("next","Прототип электронных модулей","Prototype electronic modules","Elektron modullar prototipi"),S("next","Базовый мобильный интерфейс и локальный сервер","Build app and local server","Ilova va mahalliy server"),S("target","Тестирование общего прототипа; дата не объявлена","Integrated prototype tests; no release date announced","Umumiy prototip sinovlari; reliz sanasi belgilanmagan")],
["ESP32","Orange Pi","MQTT","Flutter"]),
aicore:D("DB AI Core","LOCAL AI / DOCUMENTS","beta",
L("Локальный AI-помощник для поиска и работы с документами. Направление ориентировано на вопросы по загруженным материалам и просмотр источников, на основании которых готовится ответ.","A local AI assistant for searching and working with documents, built around answering questions from supplied materials and reviewing sources.","Hujjatlar bilan ishlash va qidirish uchun mahalliy AI yordamchi. Yuklangan materiallar asosida javob topish va manbalarni ko'rishga yo'naltirilgan."),
L("Находить информацию в собственных файлах, не перебирая документы вручную.","Find answers in your files without manually reviewing every document.","Har bir hujjatni qo'lda ko'rmasdan fayllardan ma'lumot topish."),
[L("Поиск по локальным документам","Local document search","Mahalliy hujjatlardan qidiruv"),L("Ответы по найденным материалам","Answers grounded in materials","Materiallar asosidagi javoblar"),L("Интеграция с базой данных","Database integration","Ma'lumotlar bazasi bilan integratsiya"),L("Дальнейшее улучшение точности","Accuracy improvements","Aniqlikni yaxshilash")],
[S("now","Бета работает, направление развивается","Working beta, further development ongoing","Beta ishlaydi, rivojlantirish davom etmoqda"),S("next","Связь с Local_DB и Visual Pack","Connect Local_DB and Visual Pack","Local_DB va Visual Pack bilan bog'lash"),S("next","Тестирование поиска, ответов и источников","Test retrieval, answers and sources","Qidiruv, javob va manbalarni sinash"),S("target","Плановая дата релиза — 30 декабря 2026","Target release — December 30, 2026","Rejali reliz — 2026-yil 30-dekabr")],
["Local AI","RAG","Python","API"],L("План · 30.12.2026","Target · Dec 30, 2026","Reja · 30.12.2026")),
visual:D("Visual Pack","OCR / DOCUMENTS","beta",
L("Приложение для распознавания текста на изображениях и работы с PDF. Предполагается извлекать данные из документов и находить нужные фрагменты без долгого ручного просмотра.","An OCR and PDF-processing app for extracting text and finding useful information within files and images.","Rasm va PDFlardan matnni tanish, ma'lumot ajratish va kerakli qismlarni topish uchun ilova."),
L("Сократить время поиска информации в изображениях и документах.","Spend less time finding information in documents and images.","Hujjat va rasmlardan ma'lumot topishga ketadigan vaqtni qisqartirish."),
[L("Распознавание текста (OCR)","Text recognition (OCR)","Matnni tanish (OCR)"),L("Обработка PDF и изображений","PDF and image processing","PDF va rasmni qayta ishlash"),L("Поиск и извлечение фрагментов","Search and extraction","Qidiruv va ma'lumot ajratish"),L("Подготовка данных для локального AI","Prepare data for local AI","Mahalliy AI uchun ma'lumot tayyorlash")],
[S("now","Рабочая бета-версия, разработка продолжается","Working beta, development continues","Ishlaydigan beta, rivojlantirish davom etmoqda"),S("next","Улучшение распознавания и обработки файлов","Improve recognition and document handling","Tanish va fayl ishlovini yaxshilash"),S("next","Тестирование поиска и интерфейса","Test search and interface","Qidiruv va interfeysni sinash"),S("target","Плановая дата релиза — 5 декабря 2026","Target release — December 5, 2026","Rejali reliz — 2026-yil 5-dekabr")],
["Python","OpenCV","OCR","PDF"],L("План · 05.12.2026","Target · Dec 5, 2026","Reja · 05.12.2026")),
gourmet:D("Gourmet Bot «Гурман»","TELEGRAM / FOODTECH","beta",
L("Гастрономический Telegram-бот с собственным пользовательским сценарием. Проект впервые проходил бета-тестирование 5 марта 2025 года; публичный запуск планируется на начало 2027 года.","A food-focused Telegram bot with its own user flow. Beta testing dates back to March 5, 2025, with a public launch planned for early 2027.","Gastronomiya yo'nalishidagi Telegram bot. Beta sinov 2025-yil 5-martdan; ommaviy ishga tushirish 2027-yil boshiga rejalashtirilgan."),
L("Сделать взаимодействие с гастрономическим сервисом проще прямо в Telegram.","Make a food-oriented service easier to use directly in Telegram.","Telegram ichida gastronomik xizmatdan foydalanishni osonlashtirish."),
[L("Интерактивный сценарий общения","Interactive bot flow","Interaktiv bot ssenariysi"),L("Удобная навигация по функциям","Easy feature navigation","Funksiyalarda qulay navigatsiya"),L("Подготовка серверной части","Backend preparation","Server qismini tayyorlash")],
[S("now","Бета с 5 марта 2025","Beta since March 5, 2025","Beta 2025-yil 5-martdan"),S("next","Доработка сценариев и подготовка запуска","Refine flows and prepare launch","Ssenariylarni yaxshilash va ishga tushirishga tayyorlash"),S("target","Публичный запуск запланирован на начало 2027","Public launch planned for early 2027","Ommaviy ishga tushirish 2027-yil boshiga rejalashtirilgan")],
["Telegram Bot API","Backend"],L("План · начало 2027","Target · early 2027","Reja · 2027-yil boshi"),"studio.html#bots"),
aichat:D("AI Chat Bot","TELEGRAM / AI","development",
L("Telegram-помощник, который сможет принимать вопросы, обращаться к подключённым AI-компонентам и помогать с повторяющимися запросами. Направление находится в разработке.","A Telegram assistant being developed to handle user questions, connect to AI components and help with recurring requests.","Savollarga javob berish, AI komponentlarga ulanish va takroriy so'rovlarga yordam berish uchun ishlab chiqilayotgan Telegram yordamchi."),
L("Открывать нужные AI-функции непосредственно в привычном мессенджере.","Make useful AI functions accessible through a familiar messenger.","AI imkoniyatlarini odatiy messenjerning o'zida ishlatish."),
[L("Обработка пользовательских сообщений","Message handling","Xabarlarni qayta ishlash"),L("Подключение AI-моделей и сервисов","AI model/service integration","AI model va xizmatlarga ulanish"),L("Защита от ошибочных ответов и лимиты","Safeguards and usage limits","Xato javoblardan himoya va limitlar")],
[S("now","Разработка концепции и функций","Features and concept in development","Konsept va funksiyalar ishlab chiqilmoqda"),S("next","Подключение AI и обработка диалогов","Connect AI and implement conversations","AI va suhbatlarni ulash"),S("next","Тестирование пользовательских сценариев","Test user scenarios","Foydalanish ssenariylarini sinash"),S("target","Дата публичного релиза пока не объявлена","Public release date not announced","Ommaviy reliz sanasi hali belgilanmagan")],
["Python","Telegram Bot API","AI"]),
publisher:D("News Publisher Bot","CONTENT / TELEGRAM","development",
L("Направление Telegram-ботов для автоматизации публикаций. Планируются поиск материалов, проверка источников, преобразование найденного текста в нужный формат и размещение в каналах. Серверная инфраструктура ещё готовится.","Telegram content-publishing automation: source discovery, review, formatting and channel posting. The server infrastructure is still being prepared.","Telegram kontentini avtomatik chiqarish: manba topish, tekshirish, formatlash va kanalda e'lon qilish. Server infratuzilmasi tayyorlanmoqda."),
L("Сделать регулярные публикации более управляемыми и менее трудоёмкими.","Make regular publishing more manageable and less repetitive.","Muntazam kontent chiqarishni osonroq va boshqariladigan qilish."),
[L("Поиск через RSS и API","Discover content via RSS/API","RSS va API orqali kontent topish"),L("Фильтрация и проверка перед публикацией","Filter and review before posting","E'lon oldidan filtrlash va tekshirish"),L("Форматирование для разных каналов","Channel-specific formatting","Har bir kanal uchun formatlash"),L("Планирование публикаций","Scheduled posting","Rejalashtirilgan e'lonlar")],
[S("now","Подготовка сервера и схемы работы","Server and workflow preparation","Server va ish jarayonini tayyorlash"),S("next","Поиск контента и правила фильтрации","Content discovery and filtering rules","Kontent qidirish va filtrlash qoidalari"),S("next","Модуль проверки, форматирования и публикации","Review, formatting and posting modules","Tekshirish, formatlash va e'lon modullari"),S("target","Тестовые каналы; даты запуска не утверждены","Pilot channels; release dates not set","Sinov kanallari; ishga tushirish sanasi belgilanmagan")],
["RSS","API","Telegram","Scheduler"]),
automation:D("Telegram Automation","BOTS / UTILITIES","planned",
L("Идеи небольших Telegram-ботов для уведомлений, поиска информации и повторяющихся действий. Это отдельное направление, которое будет развиваться по мере готовности инфраструктуры.","A planned family of small Telegram bots for notifications, information lookup and recurring tasks, to be developed as infrastructure becomes available.","Bildirishnoma, qidiruv va takroriy vazifalar uchun rejalashtirilgan Telegram botlar yo'nalishi."),
L("Автоматизировать простые повседневные действия без сложного интерфейса.","Automate everyday repetitive tasks without a complex interface.","Oddiy takroriy ishlarni murakkab interfeyssiz avtomatlashtirish."),
[L("Уведомления по событиям","Event notifications","Hodisalar haqida bildirishnomalar"),L("Поиск и подбор информации","Information lookup","Ma'lumot qidirish"),L("Периодические задачи","Recurring workflows","Davriy vazifalar")],
[S("now","Идеи и сценарии использования","Ideas and use cases","G'oyalar va foydalanish ssenariylari"),S("next","Общая основа для нескольких ботов","Shared bot infrastructure","Bir nechta bot uchun umumiy asos"),S("next","Прототипы и тестирование","Build and test prototypes","Prototip va sinovlar"),S("target","Сроки отдельных ботов будут объявлены позже","Individual bot dates will be announced later","Har bir bot sanasi keyin e'lon qilinadi")],
["Telegram Bot API","Automation"]),
motion:D("JakhonUZ AI Production","AI VIDEO / CREATIVE","active",
L("Направление по созданию видеоконтента с помощью Runway и дополнительных AI-инструментов: короткие ролики, реклама, анимация и концепции мультфильмов. На отдельной странице можно рассчитать ориентировочную стоимость генерации.","An AI-assisted video offering using Runway and other tools for short clips, commercials, animation and cartoon concepts, with a pricing calculator.","Runway va boshqa AI vositalari yordamida qisqa roliklar, reklama, animatsiya va multfilm g'oyalari. Alohida sahifada narx kalkulyatori bor."),
L("Помочь превратить идею в видеоролик для сайта, соцсетей или презентации.","Turn an idea into video for a site, social platforms or a presentation.","G'oyani sayt, ijtimoiy tarmoq yoki taqdimot uchun videoga aylantirish."),
[L("AI-генерация сцен и роликов","AI scene and clip generation","AI sahna va video generatsiyasi"),L("Анимация и motion-дизайн","Animation and motion design","Animatsiya va motion dizayn"),L("Форматы для социальных сетей","Social media formats","Ijtimoiy tarmoqlar formatlari"),L("Калькулятор стоимости","Pricing calculator","Narx kalkulyatori")],
[S("now","Услуги и тарифы представлены на сайте","Services and rates are listed on the site","Xizmatlar va tariflar saytda berilgan"),S("next","Развитие шаблонов, стилей и процесса согласования","Improve templates, styles and delivery workflow","Shablon, uslub va ish jarayonini yaxshilash")],
["Runway","AI Motion","Video"],null,"studio.html#motion"),
family:D("Приложение для мам и малышей","MOBILE / FAMILY","planned",
L("Концепция единого мобильного приложения для Android и iPhone: отслеживание цикла, информационные материалы о беременности, колыбельные для малышей и справочная энциклопедия для семьи. Это план, не выпущенный продукт.","A planned Android/iPhone app combining cycle tracking, pregnancy reference information, lullabies and a family encyclopedia. Not a released product.","Android va iPhone uchun rejalashtirilgan ilova: hayz sikli kuzatuvi, homiladorlik ma'lumotlari, allalar va oilaviy ensiklopediya. Hali tayyor mahsulot emas."),
L("Собрать семейные информационные и бытовые функции в одном удобном интерфейсе.","Bring family-focused information and everyday tools into one accessible interface.","Oila uchun ma'lumot va kundalik vositalarni bir qulay interfeysga jamlash."),
[L("Личный календарь цикла","Personal cycle calendar","Shaxsiy sikl taqvimi"),L("Информационный раздел беременности","Pregnancy reference section","Homiladorlik ma'lumotlari"),L("Колыбельные и детские материалы","Lullabies and baby content","Allalar va bolalar kontenti"),L("Энциклопедия для родителей","Parent encyclopedia","Ota-onalar ensiklopediyasi")],
[S("now","Этап идеи и состава функций","Concept and feature planning","G'oya va funksiyalarni rejalashtirish"),S("next","Проектирование структуры и приватности","Plan structure and privacy","Tuzilma va maxfiylikni rejalashtirish"),S("next","Прототип интерфейса и проверка контента","UI prototype and content review","Interfeys prototipi va kontentni tekshirish"),S("target","Срок выпуска пока не определён","Release date not yet set","Reliz sanasi hali aniqlanmagan")],
["Android","iOS","Mobile UX"]),
marketplace:D("B2B-маркетплейс","WEB / MARKETPLACE","planned",
L("План онлайн-площадки, которая объединит каталог товаров и услуг, поставщиков, производителей, специалистов и заказчиков. Основной продукт — программная платформа для поиска и взаимодействия сторон.","A planned marketplace platform connecting buyers, suppliers, manufacturers and specialists, with searchable listings and business profiles.","Xaridor, yetkazib beruvchi, ishlab chiqaruvchi va mutaxassislarni birlashtiruvchi, qidiruv va profilga ega rejalashtirilgan marketpleys."),
L("Помочь заказчикам находить предложения и исполнителей через единый каталог.","Help clients discover suppliers and specialists in one catalog.","Buyurtmachilarga bitta katalog orqali taklif va ijrochilarni topishga yordam berish."),
[L("Каталог товаров и услуг","Product and service listings","Tovar va xizmatlar katalogi"),L("Профили компаний и специалистов","Company and specialist profiles","Kompaniya va mutaxassis profillari"),L("Поиск и фильтры","Search and filters","Qidiruv va filtrlar"),L("Заявки и связь участников","Requests and participant contact","So'rov va ishtirokchilar aloqasi")],
[S("now","Планирование бизнес-логики и ролей","Plan roles and business flows","Rollar va biznes jarayonlarini rejalashtirish"),S("next","Прототип каталога и пользовательских кабинетов","Prototype catalog and dashboards","Katalog va kabinet prototipi"),S("next","MVP: поиск, карточки и заявки","MVP: search, listings and requests","MVP: qidiruv, kartalar va so'rovlar"),S("target","Публичная дата запуска не определена","No public launch date yet","Ommaviy ishga tushirish sanasi yo'q")],
["Web","Marketplace","API"]),
games:D("Мобильные игры","MOBILE / GAMEDEV","planned",
L("Будущее направление — разработка небольших мобильных игр. Начало изучения идей, механик и подготовки прототипов планируется на конец 2027 года; конкретные игры ещё не представлены.","Future mobile game projects. Exploring concepts, mechanics and early prototypes is planned for late 2027; no individual game has been announced.","Kelajakdagi mobil o'yin loyihalari. G'oya va prototiplar ustidagi ishni 2027-yil oxirida boshlash rejalashtirilgan; alohida o'yin hali e'lon qilinmagan."),
L("Попробовать интерактивные игровые идеи и постепенно собрать первый работающий прототип.","Explore interactive game ideas and gradually make a first playable prototype.","Interaktiv o'yin g'oyalarini sinab, birinchi o'ynaladigan prototipni yaratish."),
[L("Выбор жанра и механики","Choose genres and mechanics","Janr va mexanikani tanlash"),L("Игровой прототип","Playable prototype","O'ynaladigan prototip"),L("Тестирование и улучшение","Testing and iteration","Sinov va takomillashtirish")],
[S("now","Направление запланировано","Future direction planned","Kelajakdagi yo'nalish rejalashtirilgan"),S("target","Старт подготовки — конец 2027 года","Preparation starts — late 2027","Tayyorgarlik boshlanishi — 2027-yil oxiri"),S("next","После старта: прототип и первые тесты","Later: prototype and initial tests","Keyin: prototip va dastlabki sinovlar")],
["Mobile","Game design"])
};
const statusLabels={
beta:L("Работает в бета-режиме","Working beta","Ishlaydigan beta"),
design:L("Проектирование","Design stage","Loyihalash"),
development:L("В разработке","In development","Ishlab chiqilmoqda"),
planned:L("Идея / план","Concept / planned","G'oya / reja"),
active:L("Доступна услуга","Service available","Xizmat mavjud")
};
const ui={
why:L("Зачем нужен","Purpose","Maqsadi"),
what:L("Возможности","Features","Imkoniyatlar"),
road:L("План развития","Development roadmap","Rivojlanish xaritasi"),
stack:L("Технологии","Technology","Texnologiyalar"),
state:L("Состояние проекта","Project status","Loyiha holati"),
release:L("Ориентир по срокам","Schedule","Muddat"),
stageNow:L("Текущий этап","Current stage","Joriy bosqich"),
stageNext:L("Следующий этап","Next stage","Keyingi bosqich"),
stageTarget:L("План / цель","Plan / target","Reja / maqsad"),
notice:L("Пункты дорожной карты — направления работ, а не подтверждённый процент готовности. Плановые даты могут меняться.","Roadmap steps describe plans, not verified completion percentages. Target dates may change.","Bosqichlar reja bo'lib, tasdiqlangan tayyorlik foizlari emas. Sana o'zgarishi mumkin."),
contact:L("Обсудить проект","Discuss this project","Loyihani muhokama qilish"),
studio:L("Открыть страницу сервиса","Open service page","Xizmat sahifasini ochish"),
close:L("Закрыть подробности","Close details","Tafsilotlarni yopish"),
intro:L("Подробное описание проекта","Project details","Loyiha haqida batafsil"),
expand:L("Подробнее и roadmap","Details & roadmap","Tafsilotlar va rivojlanish rejasi")
};
const dlg=document.getElementById("project-detail-dialog");
if(!dlg)return;
const content=document.getElementById("pd-content");
const closeButton=dlg.querySelector(".pd-close");
const locale=()=>["ru","en","uz"].includes(window.JakhonI18n?.current)?window.JakhonI18n.current:"ru";
const local=(value,lang=locale())=>typeof value==="string"?value:value?.[lang]||value?.ru||"";
const node=(tag,cls,text)=>{const el=document.createElement(tag);if(cls)el.className=cls;if(text!==undefined)el.textContent=text;return el;};
let currentId=null,openingTrigger=null;
function row(title,element,cls=""){
 const section=node("section","pd-section "+cls);section.append(node("h3","pd-section-title",title),element);return section;
}
function render(id){
 const item=projects[id];if(!item)return;
 const lang=locale();content.replaceChildren();dlg.dataset.status=item.status;
 const top=node("div","pd-heading");
 const eyebrow=node("div","pd-overline",item.area);
 const title=node("h2","pd-name",item.title);title.id="pd-title";
 const status=node("span","pd-status",local(statusLabels[item.status],lang));
 const release=item.release?node("span","pd-release",local(item.release,lang)):null;
 const stats=node("div","pd-badges");stats.append(status);if(release)stats.append(release);
 top.append(eyebrow,title,stats);
 const summary=node("p","pd-intro",local(item.summary,lang));summary.id="pd-intro";
 content.append(top,summary);
 const overview=node("div","pd-columns");
 overview.append(row(local(ui.why,lang),node("p","pd-body-text",local(item.why,lang))));
 const list=node("ul","pd-features");
 item.features.forEach(x=>list.append(node("li","",local(x,lang))));
 overview.append(row(local(ui.what,lang),list));content.append(overview);
 const timeline=node("ol","pd-steps");
 item.steps.forEach((s,i)=>{
  const li=node("li","pd-step "+s.stage);
  const mark=node("span","pd-step-index",String(i+1).padStart(2,"0"));
  const copy=node("div","pd-step-copy");copy.append(node("small","pd-step-kind",local(ui["stage"+s.stage[0].toUpperCase()+s.stage.slice(1)]||ui.stageNext,lang)),node("span","pd-step-title",local(s.label,lang)));
  li.append(mark,copy);timeline.append(li);
 });
 content.append(row(local(ui.road,lang),timeline,"pd-roadmap"));
 const tech=node("div","pd-tags");item.stack.forEach(x=>tech.append(node("span","",x)));content.append(row(local(ui.stack,lang),tech));
 content.append(node("p","pd-notice",local(ui.notice,lang)));
 const actions=node("div","pd-actions");
 const contact=node("a","pd-contact",local(ui.contact,lang));contact.href="https://t.me/JakhonUZ";contact.target="_blank";contact.rel="noopener noreferrer";actions.append(contact);
 if(item.url){const more=node("a","pd-service",local(ui.studio,lang));more.href=item.url;actions.append(more);}
 content.append(actions);
 closeButton.setAttribute("aria-label",local(ui.close,lang));
 dlg.scrollTop=0;content.scrollTop=0;
}
function open(id,trigger){
 if(!Object.prototype.hasOwnProperty.call(projects,id))return;
 openingTrigger=trigger||document.activeElement;currentId=id;render(id);
 if(!dlg.open){if(typeof dlg.showModal==="function")dlg.showModal();else dlg.setAttribute("open","");}
 closeButton.focus();
}
function close(){if(typeof dlg.close==="function"&&dlg.open)dlg.close();else dlg.removeAttribute("open");if(openingTrigger?.isConnected)openingTrigger.focus();}
closeButton.addEventListener("click",close);
dlg.addEventListener("click",e=>{if(e.target===dlg)close();});
dlg.addEventListener("close",()=>{if(openingTrigger?.isConnected)openingTrigger.focus();});
document.addEventListener("jakhon:languagechange",()=>{if(dlg.open&&currentId)render(currentId);});
const all=[...document.querySelectorAll(".project-card[data-project],.upcoming-card[data-project]")];
for(const card of all){
 const id=card.dataset.project;if(!projects[id])continue;
 const title=card.querySelector("h3,h4")?.textContent?.trim()||projects[id].title;
 const button=node("button","pd-open",local(ui.expand));button.type="button";button.setAttribute("aria-label",local(ui.expand)+" — "+title);
 card.append(button);
 const activate=e=>{if(e){e.preventDefault();e.stopPropagation();}open(id,button);};
 button.addEventListener("click",activate);
 card.addEventListener("click",event=>{if(event.target.closest("a,button")&&event.target!==button){event.preventDefault();event.stopPropagation();open(id,button);return;} if(event.target!==button)open(id,button);});
 card.addEventListener("keydown",event=>{if(event.target!==card)return;if(event.key==="Enter"||event.key===" "){event.preventDefault();open(id,card);}});
 card.tabIndex=0;
 card.setAttribute("aria-label",title+" — "+local(ui.expand));
}
document.addEventListener("jakhon:languagechange",()=>{
 for(const card of all){const b=card.querySelector(".pd-open");if(!b)continue;b.textContent=local(ui.expand);b.setAttribute("aria-label",local(ui.expand)+" — "+(card.querySelector("h3,h4")?.textContent?.trim()||""));}
});

const masterworks=document.querySelector?.("[data-masterworks]");
const masterworkButton=masterworks?.querySelector(".mw-detail");
if(masterworkButton){
 const changeCaption=()=>{masterworkButton.textContent=local(ui.expand)+" ↗";};
 changeCaption();
 masterworkButton.addEventListener("click",()=>{
  const active=masterworks.querySelector(".masterworks-item.is-selected");
  const map={calc:"j1calc",database:"localdb",edge:"smarthome"};
  if(active&&map[active.dataset.work])open(map[active.dataset.work],masterworkButton);
 });
 document.addEventListener("jakhon:languagechange",changeCaption);
}
window.JakhonProjectDetails=Object.freeze({open:(id)=>open(id,document.activeElement),ids:Object.keys(projects)});
})();