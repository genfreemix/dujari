"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export type Locale = "en" | "ru" | "fr";

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
    "hero.line1": "Art you",
    "hero.line2_cant": "can't",
    "hero.line2_ignore": "ignore",
    "hero.sub": "Hand-painted bottles & panels. Each piece is unique. Each piece is a statement.",
    "hero.cta_collection": "View Collection",
    "hero.cta_artist": "Meet the Artist",
    "hero.scroll": "Scroll",

    // Gallery
    "gallery.subtitle": "Collection 001 — Origins",
    "gallery.title": "Gallery",
    "gallery.filter_all": "All",
    "gallery.filter_bottles": "Art Bottles",
    "gallery.filter_panels": "Panels",
    "gallery.filter_pictures": "Pictures",
    "gallery.filter_posters": "Posters",
    "gallery.filter_merch": "Merch",
    "gallery.empty_title": "This drop is coming soon",
    "gallery.empty_text": "This category is reserved for the next DUJARI releases. The format is defined, the pieces are on the way.",

    // Artwork card
    "artwork.bottle": "Art Bottle",
    "artwork.panel": "Art Panel",
    "artwork.sold": "Sold",

    // Artwork detail
    "artwork.back": "← Back to Gallery",
    "artwork.price": "Price",
    "artwork.dimensions": "Dimensions",
    "artwork.edition": "Edition",
    "artwork.year": "Year",
    "artwork.scarcity": "⚡ Only 1 available — This is a unique original",
    "artwork.claimed": "This piece has been claimed",

    // Home
    "home.featured_title": "Selected Works",
    "home.featured_subtitle": "Collection 001 — Origins",
    "home.unique_title": "Every piece is 1/1",
    "home.unique_text": "No prints. No reproductions. Once it's claimed, it's gone forever. Don't wait — request your piece now.",
    "home.collection_label": "The Collection",
    "home.see_all": "See everything",
    "home.view_gallery": "View Full Gallery",

    // Artist block
    "artist_block.label": "The Artist",
    "artist_block.bio1": "Born from the collision of street culture and gallery ambition. DUJARI turns everyday objects into collectible art — bottles that tell stories, panels that scream silence.",
    "artist_block.bio2": "Each piece is hand-painted. Each piece is 1/1. No prints. No reproductions. When it's gone, it's gone.",
    "artist_block.cta": "Full Story",

    // Artist page
    "artist.quote": '"I don\'t paint bottles. I give them a voice."',
    "artist.story_title": "The Story",
    "artist.story1": "DUJARI emerged from the collision of street culture and gallery ambition. Growing up surrounded by graffiti, vinyl records, and the raw energy of underground music — the artist developed a visual language that refuses to be categorized.",
    "artist.story2": 'The bottles started as a provocation: "Why does art need a canvas?" Taking iconic bottles — the ones you\'d find in any bar, any city — and transforming them into unrepeatable objects. Pop-art meets punk. Gallery meets garage.',
    "artist.story3": "The panels followed naturally. Larger canvases for the same raw energy. Textures that demand touch. Colors that refuse to whisper.",
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
    "contact.q1": "How do I buy a piece?",
    "contact.a1": "Send a request via WhatsApp or email. We'll confirm availability, arrange payment, and ship worldwide.",
    "contact.q2": "Can I see a piece in person?",
    "contact.a2": "Yes — by appointment. Contact us to arrange a viewing.",
    "contact.q3": "Do you ship internationally?",
    "contact.a3": "Yes. Secure packaging, insured shipping, worldwide delivery.",
    "contact.q4": "Can I commission a custom piece?",
    "contact.a4": "Absolutely. Tell us your vision — we'll make it happen.",

    // Inquiry
    "inquiry.whatsapp": "WhatsApp",
    "inquiry.telegram": "Telegram",
    "inquiry.email": "Email",
    "inquiry.call": "Call",

    // Footer
    "footer.tagline": "Collectible pop-art objects. Each piece is unique. Each piece is a statement.",
    "footer.explore": "Explore",
    "footer.get_in_touch": "Get in touch",
    "footer.rights": "All rights reserved.",
    "footer.no_repro": "Every piece is 1/1. No reproductions.",
  },

  ru: {
    "nav.home": "Главная",
    "nav.gallery": "Галерея",
    "nav.artist": "Художник",
    "nav.contact": "Контакт",

    "hero.tagline": "Коллекционный поп-арт",
    "hero.line1": "Искусство,",
    "hero.line2_cant": "которое",
    "hero.line2_ignore": "невозможно игнорировать",
    "hero.sub": "Бутылки и панели, расписанные вручную. Каждая работа уникальна. Каждая — заявление.",
    "hero.cta_collection": "Смотреть коллекцию",
    "hero.cta_artist": "Об артисте",
    "hero.scroll": "Листайте",

    "gallery.subtitle": "Коллекция 001 — Начало",
    "gallery.title": "Галерея",
    "gallery.filter_all": "Все",
    "gallery.filter_bottles": "Арт-бутылки",
    "gallery.filter_panels": "Панели",
    "gallery.filter_pictures": "Картины",
    "gallery.filter_posters": "Постеры",
    "gallery.filter_merch": "Мерч",
    "gallery.empty_title": "Этот дроп скоро появится",
    "gallery.empty_text": "Эта категория уже зарезервирована под следующие релизы DUJARI. Формат определён, работы в подготовке.",

    "artwork.bottle": "Арт-бутылка",
    "artwork.panel": "Арт-панель",
    "artwork.sold": "Продано",

    "artwork.back": "← Назад в галерею",
    "artwork.price": "Цена",
    "artwork.dimensions": "Размеры",
    "artwork.edition": "Тираж",
    "artwork.year": "Год",
    "artwork.scarcity": "⚡ Только 1 экземпляр — это уникальный оригинал",
    "artwork.claimed": "Эта работа уже нашла владельца",

    "home.featured_title": "Избранные работы",
    "home.featured_subtitle": "Коллекция 001 — Начало",
    "home.unique_title": "Каждая работа — 1/1",
    "home.unique_text": "Никаких принтов. Никаких копий. Когда работа продана — она исчезает навсегда. Не ждите — оставьте запрос сейчас.",
    "home.collection_label": "Коллекция",
    "home.see_all": "Смотреть всё",
    "home.view_gallery": "Открыть галерею",

    "artist_block.label": "Художник",
    "artist_block.bio1": "Рождён на стыке уличной культуры и галерейных амбиций. DUJARI превращает обыденные объекты в коллекционное искусство — бутылки, которые рассказывают истории, панели, которые кричат тишиной.",
    "artist_block.bio2": "Каждая работа расписана вручную. Каждая — 1/1. Никаких принтов. Никаких копий. Когда ушла — ушла.",
    "artist_block.cta": "Полная история",

    "artist.quote": '«Я не расписываю бутылки. Я даю им голос.»',
    "artist.story_title": "История",
    "artist.story1": "DUJARI возник на стыке уличной культуры и галерейных амбиций. Граффити, виниловые пластинки, сырая энергия андерграундной музыки — всё это сформировало визуальный язык, который отказывается быть категоризированным.",
    "artist.story2": "Бутылки начались как провокация: «Зачем искусству холст?» Брать культовые бутылки — те самые, что в каждом баре, в каждом городе — и превращать их в неповторимые объекты. Поп-арт встречает панк. Галерея встречает гараж.",
    "artist.story3": "Панели пришли естественно. Больше поверхности для той же сырой энергии. Текстуры, которые требуют прикосновения. Цвета, которые отказываются шептать.",
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
    "contact.title": "Поговорим об искусстве",
    "contact.text": "Заинтересовала работа? Есть вопрос? Хотите заказать что-то уникальное? Пишите напрямую — без форм, без очередей, только разговор.",
    "contact.email": "Почта",
    "contact.whatsapp": "WhatsApp",
    "contact.instagram": "Instagram",
    "contact.location": "Локация",
    "contact.location_value": "Франция / Европа",
    "contact.how_title": "Как это работает",
    "contact.q1": "Как купить работу?",
    "contact.a1": "Отправьте запрос через WhatsApp или email. Мы подтвердим наличие, согласуем оплату и отправим в любую точку мира.",
    "contact.q2": "Можно увидеть работу лично?",
    "contact.a2": "Да — по предварительной записи. Свяжитесь с нами для организации просмотра.",
    "contact.q3": "Вы отправляете за рубеж?",
    "contact.a3": "Да. Надёжная упаковка, застрахованная доставка, по всему миру.",
    "contact.q4": "Можно заказать работу на заказ?",
    "contact.a4": "Конечно. Расскажите о вашей идее — мы реализуем.",

    "inquiry.whatsapp": "WhatsApp",
    "inquiry.telegram": "Telegram",
    "inquiry.email": "Написать",
    "inquiry.call": "Позвонить",

    "footer.tagline": "Коллекционные поп-арт объекты. Каждая работа уникальна. Каждая — заявление.",
    "footer.explore": "Навигация",
    "footer.get_in_touch": "Связаться",
    "footer.rights": "Все права защищены.",
    "footer.no_repro": "Каждая работа — 1/1. Никаких копий.",
  },

  fr: {
    "nav.home": "Accueil",
    "nav.gallery": "Galerie",
    "nav.artist": "Artiste",
    "nav.contact": "Contact",

    "hero.tagline": "Pop-Art de collection",
    "hero.line1": "L'art que",
    "hero.line2_cant": "vous ne pouvez",
    "hero.line2_ignore": "pas ignorer",
    "hero.sub": "Bouteilles & panneaux peints à la main. Chaque pièce est unique. Chaque pièce est une déclaration.",
    "hero.cta_collection": "Voir la collection",
    "hero.cta_artist": "L'artiste",
    "hero.scroll": "Défiler",

    "gallery.subtitle": "Collection 001 — Origines",
    "gallery.title": "Galerie",
    "gallery.filter_all": "Tout",
    "gallery.filter_bottles": "Bouteilles d'art",
    "gallery.filter_panels": "Panneaux",
    "gallery.filter_pictures": "Tableaux",
    "gallery.filter_posters": "Posters",
    "gallery.filter_merch": "Merch",
    "gallery.empty_title": "Cette collection arrive bientôt",
    "gallery.empty_text": "Cette catégorie est déjà réservée aux prochaines sorties DUJARI. Le format est défini, les pièces sont en préparation.",

    "artwork.bottle": "Bouteille d'art",
    "artwork.panel": "Panneau d'art",
    "artwork.sold": "Vendu",

    "artwork.back": "← Retour à la galerie",
    "artwork.price": "Prix",
    "artwork.dimensions": "Dimensions",
    "artwork.edition": "Édition",
    "artwork.year": "Année",
    "artwork.scarcity": "⚡ 1 seul exemplaire — C'est un original unique",
    "artwork.claimed": "Cette pièce a trouvé son propriétaire",

    "home.featured_title": "Œuvres sélectionnées",
    "home.featured_subtitle": "Collection 001 — Origines",
    "home.unique_title": "Chaque pièce est 1/1",
    "home.unique_text": "Pas de prints. Pas de reproductions. Une fois acquise, elle disparaît pour toujours. N'attendez pas — faites votre demande maintenant.",
    "home.collection_label": "La Collection",
    "home.see_all": "Tout voir",
    "home.view_gallery": "Voir toute la galerie",

    "artist_block.label": "L'Artiste",
    "artist_block.bio1": "Né de la collision entre la culture de rue et l'ambition des galeries. DUJARI transforme les objets du quotidien en art de collection — des bouteilles qui racontent des histoires, des panneaux qui crient le silence.",
    "artist_block.bio2": "Chaque pièce est peinte à la main. Chaque pièce est 1/1. Pas de prints. Pas de reproductions. Quand c'est parti, c'est parti.",
    "artist_block.cta": "Histoire complète",

    "artist.quote": "«Je ne peins pas des bouteilles. Je leur donne une voix.»",
    "artist.story_title": "L'Histoire",
    "artist.story1": "DUJARI est né de la collision entre la culture de rue et l'ambition des galeries. Graffitis, vinyles, énergie brute de la musique underground — l'artiste a développé un langage visuel qui refuse d'être catégorisé.",
    "artist.story2": "Les bouteilles ont commencé comme une provocation : «Pourquoi l'art a-t-il besoin d'une toile ?» Prendre des bouteilles iconiques — celles qu'on trouve dans chaque bar, chaque ville — et les transformer en objets uniques. Le pop-art rencontre le punk. La galerie rencontre le garage.",
    "artist.story3": "Les panneaux sont venus naturellement. Plus de surface pour la même énergie brute. Des textures qui exigent le toucher. Des couleurs qui refusent de chuchoter.",
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
    "contact.q1": "Comment acheter une pièce ?",
    "contact.a1": "Envoyez une demande via WhatsApp ou e-mail. Nous confirmerons la disponibilité, organiserons le paiement et expédierons dans le monde entier.",
    "contact.q2": "Puis-je voir une pièce en personne ?",
    "contact.a2": "Oui — sur rendez-vous. Contactez-nous pour organiser une visite.",
    "contact.q3": "Livrez-vous à l'international ?",
    "contact.a3": "Oui. Emballage sécurisé, expédition assurée, livraison mondiale.",
    "contact.q4": "Puis-je commander une pièce sur mesure ?",
    "contact.a4": "Absolument. Parlez-nous de votre vision — nous la réaliserons.",

    "inquiry.whatsapp": "WhatsApp",
    "inquiry.telegram": "Telegram",
    "inquiry.email": "E-mail",
    "inquiry.call": "Appeler",

    "footer.tagline": "Objets pop-art de collection. Chaque pièce est unique. Chaque pièce est une déclaration.",
    "footer.explore": "Explorer",
    "footer.get_in_touch": "Nous contacter",
    "footer.rights": "Tous droits réservés.",
    "footer.no_repro": "Chaque pièce est 1/1. Pas de reproductions.",
  },
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const t = useCallback(
    (key: string) => {
      return translations[locale]?.[key] ?? translations.en[key] ?? key;
    },
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}
