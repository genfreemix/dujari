"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

export type Locale = "en" | "ru" | "fr";

const STORAGE_KEY = "site_lang";
const SUPPORTED: Locale[] = ["en", "ru", "fr"];

function detectLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && SUPPORTED.includes(saved as Locale)) return saved as Locale;
  const browserLang = navigator.language?.toLowerCase() ?? "";
  if (browserLang.startsWith("ru")) return "ru";
  if (browserLang.startsWith("fr")) return "fr";
  return "en";
}

interface I18nContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export function useT() {
  return useI18n().t;
}

const translations: Record<Locale, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.gallery": "Gallery",
    "nav.artist": "Artist",
    "nav.contact": "Contact",

    // Hero
    "hero.tagline": "Collectible Pop-Art",
    "hero.line1": "You take",
    "hero.line2_cant": "the feeling",
    "hero.line2_ignore": "",
    "hero.sub": "Blood of emotion becomes light",
    "hero.disciplines_line": "Visual art, music and poetry",
    "hero.cta_collection": "View Works",
    "hero.cta_artist": "About",
    "hero.micro": "Original works · 1/1 · only one",
    "hero.scroll": "Scroll",

    // Gallery
    "gallery.subtitle": "Collection 001 — Origins",
    "gallery.title": "Gallery",
    "gallery.filter_all": "All",
    "gallery.filter_bottles": "Bottles",
    "gallery.filter_panels": "Panels",
    "gallery.filter_objects": "Objects",
    "gallery.filter_pictures": "Pictures",
    "gallery.filter_posters": "Posters",
    "gallery.filter_books": "Books",
    "gallery.filter_merch": "Merch",
    "gallery.empty_title": "This drop is coming soon",
    "gallery.empty_text": "This category is reserved for the next DUJARI releases. The format is defined, the pieces are on the way.",

    // Artwork card
    "artwork.bottle": "Art Bottle",
    "artwork.panel": "Art Panel",
    "artwork.objects": "Art Object",
    "artwork.pictures": "Art Picture",
    "artwork.posters": "Art Poster",
    "artwork.books": "Art Book",
    "artwork.merch": "Art Merch",
    "artwork.sold": "Sold",

    // Artwork detail
    "artwork.back": "← Back to Gallery",
    "artwork.price": "Price",
    "artwork.dimensions": "Dimensions",
    "artwork.edition": "Edition",
    "artwork.year": "Year",
    "artwork.materials": "Materials",
    "artwork.technique": "Technique",
    "artwork.base": "Base",
    "artwork.size": "Size",
    "artwork.status": "Status",
    "artwork.status_collectible_object": "collectible object",
    "artwork.original_meta": "Original · 1/1 · No edition",
    "artwork.scarcity": "⚡ Only 1 available — This is a unique original",
    "artwork.claimed": "This piece has been claimed",
    "artwork.inquire": "Inquire",

    // Home
    "home.featured_title": "Selected Works",
    "home.featured_subtitle": "Collection 001 — Origins",
    "home.disciplines_label": "Creative Fields",
    "home.discipline_visual_title": "Visual Artist",
    "home.discipline_visual_text": "Collectible bottles, painted objects, and visual statements shaped as one-off works.",
    "home.discipline_music_title": "Singer / Songwriter",
    "home.discipline_music_text": "Voice, lyrics, and performance extend the same DUJARI universe beyond the canvas.",
    "home.discipline_poetry_title": "Poet",
    "home.discipline_poetry_text": "Short-form text and poetic fragments build the emotional language behind the image.",
    "home.unique_title": "Every piece is 1/1",
    "home.unique_text": "No prints. No reproductions. Once it's claimed, it's gone forever. Don't wait — request your piece now.",
    "home.collection_label": "The Collection",
    "home.see_all": "See everything",
    "home.view_gallery": "View Full Gallery",

    // Artist block
    "artist_block.label": "The Artist",
    "artist_block.bio1": "I give objects a voice.",
    "artist_block.bio2": "1/1.\nNo copies.\nForever.",
    "artist_block.cta": "Story",
    "artist_block.cta_path": "PATH",
    "path.coming_soon": "Coming soon",

    // Artist page
    "artist.quote": "Doomed objects come alive.",
    "artist.story_title": "The Story",
    "artist.story1": "DUJARI emerged from the collision of street culture and gallery ambition. Growing up surrounded by graffiti, vinyl records, and the raw energy of underground music — the artist developed a visual language that refuses to be categorized.",
    "artist.story2": 'The bottles started as a provocation: "Why does art need a canvas?" Taking iconic bottles — the ones you\'d find in any bar, any city — and transforming them into unrepeatable objects. Pop-art meets punk. Gallery meets garage.',
    "artist.story3": "The panels followed naturally. Larger canvases for the same raw energy. Textures that demand touch. Colors that refuse to whisper.",
    "artist.fields_label": "Creative Fields",
    "artist.fields_title": "One voice across three forms",
    "artist.field_visual_title": "Visual Art",
    "artist.field_visual_text": "Collectible bottles, painted objects, and visual statements built as singular works with the same raw DUJARI energy.",
    "artist.field_music_title": "Music",
    "artist.field_music_text": "Voice, songwriting, and performance carry the same tension, glamour, and rebellion beyond the physical object.",
    "artist.field_poetry_title": "Poetry",
    "artist.field_poetry_text": "Fragments, lyrics, and short-form writing reveal the intimate emotional layer that lives underneath the image.",
    "artist.philosophy": "Philosophy",
    "artist.phil1_title": "1/1 Only",
    "artist.phil1_text": "Every piece is a unique original. No editions, no prints, no reproductions. When it's gone, it's gone.",
    "artist.phil2_title": "Object as Art",
    "artist.phil2_text": "A bottle isn't just a bottle. It's a sculptural canvas. It's pop culture archaeology. It's collectible.",
    "artist.phil3_title": "Raw & Real",
    "artist.phil3_text": "No digital assistance. No templates. Every stroke is intentional. Every imperfection is a feature.",
    "artist.cta_title": "Want to own a DUJARI?",
    "artist.cta_text": "Reach out directly. No middlemen. No algorithms. Just art and conversation.",
    "artist.back_gallery": "← View the Collection",

    // Contact
    "contact.label": "Get in Touch",
    "contact.title": "Let's talk art",
    "contact.text": "Interested in a piece? Have a question? Want to commission something unique? Reach out directly — no forms, no queues, just a conversation.",
    "contact.email": "Email",
    "contact.whatsapp": "WhatsApp",
    "contact.instagram": "Instagram",
    "contact.location": "Location",
    "contact.location_value": "France / Europe",
    "contact.how_title": "How it works",
    "contact.step1_title": "How to buy",
    "contact.step1_text_start": "Write directly via ",
    "contact.step1_text_middle": " or ",
    "contact.step1_text_end": ". We'll confirm availability, agree on the details, and arrange delivery. No forms — just a conversation.",
    "contact.step2_title": "Viewing in person",
    "contact.step2_text": "Available by appointment. Contact us to arrange a visit.",
    "contact.step3_title": "Shipping",
    "contact.step3_text": "We ship worldwide. Secure packaging and insured delivery.",
    "contact.step4_title": "Custom commission",
    "contact.step4_text": "We can discuss your idea and create a unique piece. Write to us — we'll find a solution.",
    "contact.view_works": "View works",

    // Inquiry
    "inquiry.whatsapp": "WhatsApp",
    "inquiry.telegram": "Telegram",
    "inquiry.email": "Email",
    "inquiry.call": "Call",

    // Poetry
    "nav.poetry": "Poetry",
    "poetry.label": "Words",
    "poetry.title": "POETRY",
    "poetry.back": "← Back",
    "poetry.date": "19.03.2026",
    "poetry.poem1": "Deliberately accepting\nThe whole greasy world\nWith its melting winter,\nI embrace you.\nHopeless April\nOpens every floodgate…\nToo much is already lost—\nBelieve the poet.\nSomewhere the trendy\nAbuses flicker by…\nWith dry eyes,\nCracks without windows,\nI'll open freely a road\nFor the living.\nDoors since night unlocked—\nMy cocoon has dissolved.",
    "poetry.poem2": "Naked truth —\nDreams have grown bitter.\nNow every night\nNot sleeping, but fearing…\nThe Almighty,\nGrief, love gone cold.\nWe're simply so afraid\nTo admit the absurd.\nWe must.\nAnd no ellipsis — just the fuss…\nHow I want this spring\nTo clear my head.\nTo wait\nAnd with satiety\nBelieve in dreams,\nCreate permanently,\nLive in a hurry!",
    "poetry.poem3": "Shame and disgrace,\nDust is everywhere.\nWe boldly sweep out\nCorpses from the dwelling!\nHumus, remnants of dark\nAnd food,\nNot for the mind.\nLet's leave the wind in our heads —\nWhat beauty!\nWhat a balance —\nI breathe, can't get enough.\nI scatter\nHandfuls of light behind me,\nAll the gloom of the past\nI exchange for a rainbow…",
    "poetry.poem4": "To die and be reborn,\nStanding…\nAfter noon — a modest breakfast:\nCoffee, soy…\nI need nothing more.\nIn the windows — mummers,\nSticky masks,\nAnd gasps, sighs…\nTo die and be reborn,\nKnowing.\nThe truth lies on the left side —\nCome alive, no need to wash it down…",
    "poetry.poem5": "Calm tones,\nCold calculation, illusory.\nIn an unimaginable plot\nSomeone weaves nets barefoot —\nVulnerable…\nIt draws behind us, behind itself\nVictories, wounds,\nAnd through and through —\nIntricate lassos,\nRiddles of death and fate.\nFlight is normal.\nOn the shelves — kilograms of books,\nBreaking down to the bone —\nFatal…",

    // Footer
    "footer.tagline": "Collectible pop-art objects. Each piece is unique. Each piece is a statement.",
    "footer.explore": "Explore",
    "footer.get_in_touch": "Get in touch",
    "footer.rights": "All rights reserved.",
    "footer.no_repro": "Every piece is 1/1. No reproductions.",
    "footer.originals": "Original works · 1/1",
    "footer.one_of_one": "Every piece is 1/1",
  },

  ru: {
    "nav.home": "Главная",
    "nav.gallery": "Галерея",
    "nav.artist": "Художник",
    "nav.contact": "Контакт",

    "hero.tagline": "Коллекционный поп-арт",
    "hero.line1": "Ты забираешь",
    "hero.line2_cant": "состояние",
    "hero.line2_ignore": "",
    "hero.sub": "Кровь эмоций становится светом",
    "hero.disciplines_line": "Визуальное искусство, музыка и поэзия",
    "hero.cta_collection": "Смотреть работы",
    "hero.cta_artist": "Об авторе",
    "hero.micro": "Оригинальные работы · 1/1 · без повторов",
    "hero.scroll": "Листайте",

    "gallery.subtitle": "Коллекция 001 — Начало",
    "gallery.title": "Галерея",
    "gallery.filter_all": "Все",
    "gallery.filter_bottles": "Бутылки",
    "gallery.filter_panels": "Панели",
    "gallery.filter_objects": "Объекты",
    "gallery.filter_pictures": "Картины",
    "gallery.filter_posters": "Постеры",
    "gallery.filter_books": "Books",
    "gallery.filter_merch": "Мерч",
    "gallery.empty_title": "Этот дроп скоро появится",
    "gallery.empty_text": "Эта категория уже зарезервирована под следующие релизы DUJARI. Формат определён, работы в подготовке.",

    "artwork.bottle": "Арт-бутылка",
    "artwork.panel": "Арт-панель",
    "artwork.objects": "Арт-объект",
    "artwork.pictures": "Арт-картина",
    "artwork.posters": "Арт-постер",
    "artwork.books": "Арт-книга",
    "artwork.merch": "Арт-мерч",
    "artwork.sold": "Продано",

    "artwork.back": "← Назад в галерею",
    "artwork.price": "Цена",
    "artwork.dimensions": "Размеры",
    "artwork.edition": "Тираж",
    "artwork.year": "Год",
    "artwork.materials": "Материалы",
    "artwork.technique": "Техника",
    "artwork.base": "Основа",
    "artwork.size": "Размер",
    "artwork.status": "Статус",
    "artwork.status_collectible_object": "коллекционный объект",
    "artwork.original_meta": "Original · 1/1 · No edition",
    "artwork.scarcity": "⚡ Только 1 экземпляр — это уникальный оригинал",
    "artwork.claimed": "Эта работа уже нашла владельца",
    "artwork.inquire": "Запрос",

    "home.featured_title": "Актуально сейчас",
    "home.featured_subtitle": "Коллекция 001 — Начало",
    "home.disciplines_label": "Творческие направления",
    "home.discipline_visual_title": "Визуальный артист",
    "home.discipline_visual_text": "Коллекционные бутылки, расписанные объекты и визуальные высказывания в формате уникальных работ.",
    "home.discipline_music_title": "Певица / Автор песен",
    "home.discipline_music_text": "Голос, тексты и сцена продолжают тот же мир DUJARI уже за пределами визуального объекта.",
    "home.discipline_poetry_title": "Поэтесса",
    "home.discipline_poetry_text": "Короткие тексты и поэтические фрагменты собирают эмоциональный слой, который стоит за образом.",
    "home.unique_title": "Каждая работа — 1/1",
    "home.unique_text": "Никаких принтов. Никаких копий. Когда работа продана — она исчезает навсегда. Не ждите — оставьте запрос сейчас.",
    "home.collection_label": "Коллекция",
    "home.see_all": "Смотреть всё",
    "home.view_gallery": "Открыть галерею",

    "artist_block.label": "Художник",
    "artist_block.bio1": "Даю объектам голос.",
    "artist_block.bio2": "1/1.\nБез копий.\nНавсегда.",
    "artist_block.cta": "История",
    "artist_block.cta_path": "ПУТЬ",
    "path.coming_soon": "Скоро",

    "artist.quote": "Обречённые объекты оживают.",
    "artist.story_title": "История",
    "artist.story1": "DUJARI возник на стыке уличной культуры и галерейных амбиций. Граффити, виниловые пластинки, сырая энергия андерграундной музыки — всё это сформировало визуальный язык, который отказывается быть категоризированным.",
    "artist.story2": "Бутылки начались как провокация: «Зачем искусству холст?» Брать культовые бутылки — те самые, что в каждом баре, в каждом городе — и превращать их в неповторимые объекты. Поп-арт встречает панк. Галерея встречает гараж.",
    "artist.story3": "Панели пришли естественно. Больше поверхности для той же сырой энергии. Текстуры, которые требуют прикосновения. Цвета, которые отказываются шептать.",
    "artist.fields_label": "Творческие направления",
    "artist.fields_title": "Один голос в трёх формах",
    "artist.field_visual_title": "Визуальное искусство",
    "artist.field_visual_text": "Коллекционные бутылки, расписанные объекты и визуальные жесты, собранные в уникальные работы с той самой сырой энергией DUJARI.",
    "artist.field_music_title": "Музыка",
    "artist.field_music_text": "Голос, авторская песня и сцена продолжают то же напряжение, ту же чувственность и тот же вызов уже за пределами физического объекта.",
    "artist.field_poetry_title": "Поэзия",
    "artist.field_poetry_text": "Фрагменты, тексты и короткая поэтическая форма открывают интимный эмоциональный слой, который живёт под изображением.",
    "artist.philosophy": "Философия",
    "artist.phil1_title": "Только 1/1",
    "artist.phil1_text": "Каждая работа — уникальный оригинал. Никаких тиражей, принтов, копий. Когда ушла — ушла.",
    "artist.phil2_title": "Объект как искусство",
    "artist.phil2_text": "Бутылка — это не просто бутылка. Это скульптурный холст. Это археология поп-культуры. Это коллекционная ценность.",
    "artist.phil3_title": "Сырое и настоящее",
    "artist.phil3_text": "Никакой цифровой помощи. Никаких шаблонов. Каждый мазок — осознанный. Каждое несовершенство — фича.",
    "artist.cta_title": "Хотите DUJARI?",
    "artist.cta_text": "Пишите напрямую. Без посредников. Без алгоритмов. Только искусство и разговор.",
    "artist.back_gallery": "← Смотреть коллекцию",

    "contact.label": "Связаться",
    "contact.title": "Поговорим\nоб искусстве",
    "contact.text": "Заинтересовала работа? Есть вопрос? Хотите заказать что-то уникальное? Пишите напрямую — без форм, без очередей, только разговор.",
    "contact.email": "Почта",
    "contact.whatsapp": "WhatsApp",
    "contact.instagram": "Instagram",
    "contact.location": "Локация",
    "contact.location_value": "Франция / Европа",
    "contact.how_title": "Как это работает",
    "contact.step1_title": "Как купить работу",
    "contact.step1_text_start": "Напишите напрямую в ",
    "contact.step1_text_middle": " или ",
    "contact.step1_text_end": ". Мы подтвердим наличие, согласуем детали и организуем доставку. Никаких форм — только диалог.",
    "contact.step2_title": "Можно увидеть работу лично",
    "contact.step2_text": "Да — по предварительной договорённости. Свяжитесь с нами, чтобы согласовать просмотр.",
    "contact.step3_title": "Доставка",
    "contact.step3_text": "Отправляем по всему миру. Надёжная упаковка и застрахованная доставка.",
    "contact.step4_title": "Работа на заказ",
    "contact.step4_text": "Можно обсудить идею и создать уникальную работу. Напишите — мы предложим решение.",
    "contact.view_works": "Смотреть работы",

    "inquiry.whatsapp": "WhatsApp",
    "inquiry.telegram": "Telegram",
    "inquiry.email": "Написать",
    "inquiry.call": "Позвонить",

    // Poetry
    "nav.poetry": "Поэзия",
    "poetry.label": "Слова",
    "poetry.title": "ПОЭЗИЯ",
    "poetry.back": "← Назад",
    "poetry.date": "19.03.2026",
    "poetry.poem1": "Нарочито приняв\nВесь засаленный мир\nС оплывшей зимой,\nОбнимаю тебя.\nБезысходный апрель\nОткрывает все шлюзы…\nСлишком всё безвозвратно —\nПоэту поверь.\nНовомодные где-то\nМелькают абьюзы…\nГлазами сухими,\nЩелями без окон,\nБезвозмездно открою дорогу\nЖивому.\nДвери с ночи не заперты —\nРастворился мой кокон…",
    "poetry.poem2": "Голая правда —\nОзлобились сны.\nТеперь каждой ночью\nНе спать, а бояться…\nВсевышнего,\nГоря, остывшей любви.\nНам просто так страшно\nВ нелепом признаться.\nНадо.\nИ нет многоточия — есть суета…\nТак хочется этой весной\nПохмелиться.\nЖдать\nИ пресыщенно\nВерить мечтам,\nТворить перманентно,\nЖить торопиться!",
    "poetry.poem3": "Стыд и срам,\nВезде пылища.\nВыгребаем смело\nТрупы из жилища!\nПерегной, остатки тьмы\nИ пищи,\nТой, не для ума.\nОставим ветер в голове —\nКакая красотища!\nКакой баланс —\nДышу, не надышусь.\nРоняю\nПригоршни света за собой,\nВесь морок прошлого\nНа радугу сменяю…",
    "poetry.poem4": "Умирать и воскресать,\nСтоя…\nПополудни — завтрак скромный:\nКофе, соя…\nИ не надо больше мне.\nВ окнах — скоморохи,\nМаски липкие,\nДа ахи, вздохи…\nУмирать и воскресать,\nЗная.\nИстина под левым боком —\nОживай, не запивая…",
    "poetry.poem5": "Спокойные тона,\nРасчёт холодный, мнимый.\nВ немыслимом сюжете\nКто-то вяжет сети босиком —\nРанимый…\nВлечёт за нами, за собой\nПобеды, раны,\nДа вдоль и поперёк —\nВитиеватые арканы,\nЗагадки смерти и судьбы.\nПолёт нормальный.\nНа полках — килограммы книг,\nРазбор по косточкам —\nФатальный…",

    "footer.tagline": "Коллекционные поп-арт объекты. Каждая работа уникальна. Каждая — заявление.",
    "footer.explore": "Навигация",
    "footer.get_in_touch": "Связаться",
    "footer.rights": "Все права защищены.",
    "footer.no_repro": "Каждая работа — 1/1. Никаких копий.",
    "footer.originals": "Оригинальные работы · 1/1",
    "footer.one_of_one": "Каждая работа — 1/1",
  },

  fr: {
    "nav.home": "Accueil",
    "nav.gallery": "Galerie",
    "nav.artist": "Artiste",
    "nav.contact": "Contact",

    "hero.tagline": "Pop-Art de collection",
    "hero.line1": "Tu emportes",
    "hero.line2_cant": "l'état",
    "hero.line2_ignore": "",
    "hero.sub": "Le sang des émotions devient lumière",
    "hero.disciplines_line": "Art visuel, musique et poésie",
    "hero.cta_collection": "Voir les œuvres",
    "hero.cta_artist": "L'auteure",
    "hero.micro": "Pièce unique · 1/1 · originale",
    "hero.scroll": "Défiler",

    "gallery.subtitle": "Collection 001 — Origines",
    "gallery.title": "Galerie",
    "gallery.filter_all": "Tout",
    "gallery.filter_bottles": "Bouteilles",
    "gallery.filter_panels": "Panneaux",
    "gallery.filter_objects": "Objets",
    "gallery.filter_pictures": "Tableaux",
    "gallery.filter_posters": "Posters",
    "gallery.filter_books": "Books",
    "gallery.filter_merch": "Merch",
    "gallery.empty_title": "Cette collection arrive bientôt",
    "gallery.empty_text": "Cette catégorie est déjà réservée aux prochaines sorties DUJARI. Le format est défini, les pièces sont en préparation.",

    "artwork.bottle": "Bouteille d'art",
    "artwork.panel": "Panneau d'art",
    "artwork.objects": "Objet d'art",
    "artwork.pictures": "Tableau d'art",
    "artwork.posters": "Poster d'art",
    "artwork.books": "Livre d'art",
    "artwork.merch": "Merch d'art",
    "artwork.sold": "Vendu",

    "artwork.back": "← Retour à la galerie",
    "artwork.price": "Prix",
    "artwork.dimensions": "Dimensions",
    "artwork.edition": "Édition",
    "artwork.year": "Année",
    "artwork.materials": "Matériaux",
    "artwork.technique": "Technique",
    "artwork.base": "Base",
    "artwork.size": "Taille",
    "artwork.status": "Statut",
    "artwork.status_collectible_object": "objet de collection",
    "artwork.original_meta": "Original · 1/1 · Sans édition",
    "artwork.scarcity": "⚡ 1 seul exemplaire — C'est un original unique",
    "artwork.claimed": "Cette pièce a trouvé son propriétaire",
    "artwork.inquire": "Demande",

    "home.featured_title": "Œuvres sélectionnées",
    "home.featured_subtitle": "Collection 001 — Origines",
    "home.disciplines_label": "Territoires créatifs",
    "home.discipline_visual_title": "Artiste visuelle",
    "home.discipline_visual_text": "Bouteilles de collection, objets peints et prises de parole visuelles façonnées en pièces uniques.",
    "home.discipline_music_title": "Chanteuse / Auteure",
    "home.discipline_music_text": "La voix, l'écriture et la scène prolongent le même univers DUJARI au-delà de l'image.",
    "home.discipline_poetry_title": "Poétesse",
    "home.discipline_poetry_text": "Textes courts et fragments poétiques composent la couche émotionnelle derrière chaque image.",
    "home.unique_title": "Chaque pièce est 1/1",
    "home.unique_text": "Pas de prints. Pas de reproductions. Une fois acquise, elle disparaît pour toujours. N'attendez pas — faites votre demande maintenant.",
    "home.collection_label": "La Collection",
    "home.see_all": "Tout voir",
    "home.view_gallery": "Voir toute la galerie",

    "artist_block.label": "L'Artiste",
    "artist_block.bio1": "Je donne une voix aux objets.",
    "artist_block.bio2": "1/1.\nSans copies.\nPour toujours.",
    "artist_block.cta": "Histoire",
    "artist_block.cta_path": "PARCOURS",
    "path.coming_soon": "Bientôt",

    "artist.quote": "Des objets condamnés reviennent à la vie.",
    "artist.story_title": "L'Histoire",
    "artist.story1": "DUJARI est né de la collision entre la culture de rue et l'ambition des galeries. Graffitis, vinyles, énergie brute de la musique underground — l'artiste a développé un langage visuel qui refuse d'être catégorisé.",
    "artist.story2": "Les bouteilles ont commencé comme une provocation : «Pourquoi l'art a-t-il besoin d'une toile ?» Prendre des bouteilles iconiques — celles qu'on trouve dans chaque bar, chaque ville — et les transformer en objets uniques. Le pop-art rencontre le punk. La galerie rencontre le garage.",
    "artist.story3": "Les panneaux sont venus naturellement. Plus de surface pour la même énergie brute. Des textures qui exigent le toucher. Des couleurs qui refusent de chuchoter.",
    "artist.fields_label": "Territoires créatifs",
    "artist.fields_title": "Une seule voix, trois formes",
    "artist.field_visual_title": "Art visuel",
    "artist.field_visual_text": "Bouteilles de collection, objets peints et prises de parole visuelles façonnés en pièces uniques avec la même énergie brute signée DUJARI.",
    "artist.field_music_title": "Musique",
    "artist.field_music_text": "La voix, l'écriture de chansons et la scène prolongent la même tension, la même sensualité et la même insoumission au-delà de l'objet.",
    "artist.field_poetry_title": "Poésie",
    "artist.field_poetry_text": "Fragments, paroles et formes brèves révèlent la couche émotionnelle intime qui existe sous l'image.",
    "artist.philosophy": "Philosophie",
    "artist.phil1_title": "1/1 uniquement",
    "artist.phil1_text": "Chaque pièce est un original unique. Pas d'éditions, pas de prints, pas de reproductions. Quand c'est parti, c'est parti.",
    "artist.phil2_title": "L'objet comme art",
    "artist.phil2_text": "Une bouteille n'est pas qu'une bouteille. C'est une toile sculpturale. C'est de l'archéologie pop. C'est collectionnable.",
    "artist.phil3_title": "Brut & authentique",
    "artist.phil3_text": "Pas d'assistance numérique. Pas de templates. Chaque trait est intentionnel. Chaque imperfection est un atout.",
    "artist.cta_title": "Envie d'un DUJARI ?",
    "artist.cta_text": "Contactez-nous directement. Pas d'intermédiaires. Pas d'algorithmes. Juste l'art et la conversation.",
    "artist.back_gallery": "← Voir la collection",

    "contact.label": "Nous contacter",
    "contact.title": "Parlons d'art",
    "contact.text": "Une pièce vous intéresse ? Une question ? Vous voulez commander quelque chose d'unique ? Écrivez-nous directement — pas de formulaires, pas de files d'attente, juste une conversation.",
    "contact.email": "E-mail",
    "contact.whatsapp": "WhatsApp",
    "contact.instagram": "Instagram",
    "contact.location": "Localisation",
    "contact.location_value": "France / Europe",
    "contact.how_title": "Comment ça marche",
    "contact.step1_title": "Comment acheter",
    "contact.step1_text_start": "Écrivez directement via ",
    "contact.step1_text_middle": " ou ",
    "contact.step1_text_end": ". Nous confirmerons la disponibilité, discuterons des détails et organiserons la livraison. Pas de formulaires — juste une conversation.",
    "contact.step2_title": "Voir l'œuvre en personne",
    "contact.step2_text": "Possible sur rendez-vous. Contactez-nous pour organiser une visite.",
    "contact.step3_title": "Livraison",
    "contact.step3_text": "Nous expédions dans le monde entier. Emballage sécurisé et livraison assurée.",
    "contact.step4_title": "Commande sur mesure",
    "contact.step4_text": "Nous pouvons discuter de votre idée et créer une pièce unique. Écrivez-nous — nous trouverons une solution.",
    "contact.view_works": "Voir les œuvres",

    "inquiry.whatsapp": "WhatsApp",
    "inquiry.telegram": "Telegram",
    "inquiry.email": "E-mail",
    "inquiry.call": "Appeler",

    // Poetry
    "nav.poetry": "Poésie",
    "poetry.label": "Mots",
    "poetry.title": "POÉSIE",
    "poetry.back": "← Retour",
    "poetry.date": "19.03.2026",
    "poetry.poem1": "En acceptant délibérément\nTout le monde graisseux\nAvec son hiver qui fond,\nJe t'embrasse.\nL'avril sans issue\nOuvre toutes les écluses…\nTrop de choses sont à jamais perdues —\nCrois le poète.\nQuelque part les abus\nÀ la mode scintillent…\nLes yeux secs,\nFissures sans fenêtres,\nGratuitement j'ouvrirai la route\nAu vivant.\nLes portes non verrouillées depuis la nuit —\nMon cocon s'est dissous.",
    "poetry.poem2": "La vérité nue —\nLes rêves sont devenus hostiles.\nMaintenant chaque nuit\nNon pas dormir, mais avoir peur…\nDu Tout-Puissant,\nDu malheur, de l’amour refroidi.\nNous avons si peur\nD’admettre l’absurde.\nIl le faut.\nPas de points de suspension — juste l’agitation…\nOn voudrait tant ce printemps\nSe désalterer.\nAttendre\nEt avec satiété\nCroire aux rêves,\nCréer en permanence,\nVivre en se pressant!",
    "poetry.poem3": "Honte et vergogne,\nLa poussière est partout.\nNous balayons hardiment\nLes cadavres du logis !\nHumus, restes d'obscurité\nEt de nourriture,\nCelle qui n'est pas pour l'esprit.\nLaissons le vent dans nos têtes —\nQuelle splendeur !\nQuel équilibre —\nJe respire, sans jamais m'en lasser.\nJe sème\nDes poignées de lumière derrière moi,\nToute la brume du passé\nJe l'échange contre un arc-en-ciel…",
    "poetry.poem4": "Mourir et ressusciter,\nDebout…\nAprès-midi — un petit-déjeuner sobre :\nCafé, soja…\nIl ne m’en faut pas plus.\nAux fenêtres — des bouffons,\nDes masques collants,\nEt des soupirs, des ah…\nMourir et ressusciter,\nEn sachant.\nLa vérité sous le côté gauche —\nReviens à la vie, sans rincer…",
    "poetry.poem5": "Tons calmes,\nCalcul froid, illusoire.\nDans une intrigue inconcevable\nQuelqu’un tisse des filets pieds nus —\nVulnérable…\nIl entraîne derrière nous, derrière lui\nVictoires, blessures,\nEt en tous sens —\nDes lassos tortueaux,\nÉnigmes de la mort et du destin.\nLe vol est normal.\nSur les étagères — des kilos de livres,\nDécomposition jusqu’à l’os —\nFatale…",
    "footer.tagline": "Objets pop-art de collection. Chaque pièce est unique. Chaque pièce est une déclaration.",
    "footer.explore": "Explorer",
    "footer.get_in_touch": "Nous contacter",
    "footer.rights": "Tous droits réservés.",
    "footer.no_repro": "Chaque pièce est 1/1. Pas de reproductions.",
    "footer.originals": "Œuvres originales · 1/1",
    "footer.one_of_one": "Chaque pièce est 1/1",
  },
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [fade, setFade] = useState(false);

  // On mount: detect locale from localStorage or browser
  useEffect(() => {
    setLocaleState(detectLocale());
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setFade(true);
    setTimeout(() => {
      setLocaleState(l);
      localStorage.setItem(STORAGE_KEY, l);
      setFade(false);
    }, 150);
  }, []);

  const t = useCallback(
    (key: string) => {
      return translations[locale]?.[key] ?? translations.en[key] ?? key;
    },
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      <div
        className="transition-opacity duration-150"
        style={{ opacity: fade ? 0 : 1 }}
      >
        {children}
      </div>
    </I18nContext.Provider>
  );
}
