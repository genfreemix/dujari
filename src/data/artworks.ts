export type ArtworkCategory = "bottle" | "panel" | "objects" | "pictures" | "posters" | "books" | "merch";

export interface Artwork {
  id: string;
  title: string;
  category: ArtworkCategory;
  description: { en: string; ru: string; fr: string };
  price: string;
  dimensions: string;
  year: number;
  image: string;
  color: string; // placeholder bg color
  available: boolean;
  edition: string; // e.g. "1/1"
}

export const artworks: Artwork[] = [
  {
    id: "neon-rebellion",
    title: "Whiskey Big Hand",
    category: "bottle",
    description: {
      en: "Whiskey Big Hand is not a bottle.\nIt's a punch of nostalgia, audacity, and meta-noise.\n\nThe image of the past is not preserved here — it breaks, flows, and reassembles in another reality.\n\nPaint is not applied — it layers and erupts outward.\nColor doesn't decorate — it overwhelms.\nRoses don't complement — they invade.\n\nThis isn't about beauty.\nIt's about tension. About overload. About a presence impossible to ignore.\n\nThe form here is unstable — a metaphysical charm, frozen in an object.\n\nEvery angle — a new shift.\nA new conflict. A new meaning.\n\n1 of 1.\nOriginal. No repeats.",
      ru: "Whiskey Big Hand — это не бутылка.\nЭто удар ностальгии, дерзости и мета-шума.\n\nОбраз из прошлого здесь не сохраняется —\nон ломается, течёт и собирается заново в другой реальности.\n\nКраска не наносится — она наслаивается и выходит наружу.\nЦвет не украшает — он давит.\nРозы не дополняют — они захватывают.\n\nЭто не про красиво.\nЭто про напряжение. Про перегруз. Про присутствие, которое невозможно игнорировать.\n\nФорма здесь нестабильна — это метафизический шарм, застывший в объекте.\n\nКаждый ракурс — новый сдвиг.\nНовый конфликт. Новый смысл.\n\n1 из 1.\nОригинал. Без повторов.",
      fr: "Whiskey Big Hand n'est pas une bouteille.\nC'est un coup de nostalgie, d'audace et de méta-bruit.\n\nL'image du passé n'est pas préservée ici — elle se brise, coule et se réassemble dans une autre réalité.\n\nLa peinture n'est pas appliquée — elle se superpose et jaillit.\nLa couleur ne décore pas — elle écrase.\nLes roses ne complètent pas — elles envahissent.\n\nCe n'est pas une question de beauté.\nC'est une question de tension. De surcharge. D'une présence impossible à ignorer.\n\nLa forme ici est instable — un charme métaphysique, figé dans un objet.\n\nChaque angle — un nouveau décalage.\nUn nouveau conflit. Un nouveau sens.\n\n1 sur 1.\nOriginal. Sans répétitions."
    },
    price: "350 €",
    dimensions: "30 × 10 cm",
    year: 2025,
    image: "/artworks/whiskey-big-hand.jpg",
    color: "#FF2D7B",
    available: true,
    edition: "1/1",
  },
  {
    id: "whiskey-gun-and-roses",
    title: "Whiskey Gun and Roses",
    category: "bottle",
    description: {
      en: "Whiskey Gun and Roses is not a bottle.\nIt's the tension between aggression and seduction.\n\nThe gun here isn't about weapons.\nIt's a gesture. Pressure. Control.\n\nThe roses aren't about beauty.\nThey crawl outward, spreading, seizing space.\n\nThe gloss breaks.\nColor behaves unstably.\nThe surface doesn't hold — it pulses.\n\nThis is an object where the conflict is never resolved.\nIt stays inside — in the layers, in the form, in the feeling.\n\nMeta-noise here isn't background —\nit becomes the body of the work.\n\nEvery angle — a new point of tension.\nA new balance between attraction and threat.\n\nOriginal. No repeats.",
      ru: "Whiskey Gun and Roses — это не бутылка.\nЭто напряжение между агрессией и соблазном!\n\nПистолет здесь — не про оружие.\nЭто жест. Давление. Контроль.\n\nРозы — не про красоту.\nОни лезут наружу, расползаются, перехватывают пространство.\n\nГлянец ломается.\nЦвет ведёт себя нестабильно.\nПоверхность не держится — она пульсирует.\n\nЭто объект, в котором конфликт не решается.\nОн остаётся внутри — в слоях, в форме, в ощущении.\n\nМета-шум здесь не фон —\nон становится телом работы.\n\nКаждый ракурс — новая точка напряжения.\nНовый баланс между притяжением и угрозой.\n\nОригинал. Без повторов.",
      fr: "Whiskey Gun and Roses n'est pas une bouteille.\nC'est la tension entre agression et séduction.\n\nLe pistolet ici n'est pas une arme.\nC'est un geste. Une pression. Un contrôle.\n\nLes roses ne sont pas une question de beauté.\nElles rampent, se répandent, s'emparent de l'espace.\n\nLe vernis se brise.\nLa couleur se comporte de manière instable.\nLa surface ne tient pas — elle pulse.\n\nC'est un objet où le conflit ne se résout jamais.\nIl reste à l'intérieur — dans les couches, dans la forme, dans la sensation.\n\nLe méta-bruit ici n'est pas un fond —\nil devient le corps de l'œuvre.\n\nChaque angle — un nouveau point de tension.\nUn nouvel équilibre entre attraction et menace.\n\nOriginal. Sans répétitions."
    },
    price: "350 €",
    dimensions: "30 × 10 cm",
    year: 2025,
    image: "/artworks/whiskey-gun-and-roses.jpg",
    color: "#8B0000",
    available: true,
    edition: "1/1",
  },
  {
    id: "rum-yoko-and-john",
    title: "Rum Yoko and John",
    category: "bottle",
    description: {
      en: "This is not just an image.\nIt is a moment that was never meant to remain.\n\nTwo faces from the past - recognizable, nearly iconic - lose their untouchability here.\n\nThey are not looking at each other, but through each other.\nAs if they already know how this ends.\n\nColor enters that moment without permission.\nRoses appear not as a symbol of love - but as a trace. As a distortion. As an error inside memory.\n\nThe black-and-white past cannot withstand the pressure.\nIt starts to melt, crack, and let meta-noise through.\n\nThis is not about romance.\nIt is about memory that has already changed.\n\nAbout an image that no longer belongs to the original.",
      ru: "Это не просто образ.\nЭто момент, который не должен был остаться.\n\nДва лица из прошлого — узнаваемые, почти культовые —\nздесь теряют свою неприкосновенность.\n\nОни смотрят не друг на друга, а сквозь.\nКак будто уже знают, чем всё закончится.\n\nЦвет вмешивается в этот момент без разрешения.\nРозы появляются не как символ любви —\nа как след. Как искажение. Как ошибка в воспоминании.\n\nЧёрно-белое прошлое не выдерживает давления.\nОно начинает течь, трескаться, пропускать мета-шум.\n\nЭто не про романтику.\nЭто про память, которая уже изменилась.\n\nПро образ, который больше не принадлежит оригиналу.",
      fr: "Ce n'est pas simplement une image.\nC'est un instant qui n'aurait pas dû rester.\n\nDeux visages du passé - reconnaissables, presque cultes - perdent ici leur intouchabilité.\n\nIls ne se regardent pas, ils se traversent du regard.\nComme s'ils savaient déjà comment tout cela finit.\n\nLa couleur s'immisce dans ce moment sans permission.\nLes roses n'apparaissent pas comme symbole d'amour - mais comme une trace. Comme une distorsion. Comme une erreur dans le souvenir.\n\nLe passé en noir et blanc ne résiste pas à la pression.\nIl commence à couler, à se fissurer, à laisser passer le méta-bruit.\n\nCe n'est pas une histoire de romantisme.\nC'est une mémoire qui a déjà changé.\n\nUne image qui n'appartient plus à l'original.",
    },
    price: "350 €",
    dimensions: "30 × 10 cm",
    year: 2025,
    image: "/artworks/rum-yoko-and-john.jpg",
    color: "#2E7BEA",
    available: true,
    edition: "1/1",
  },
  {
    id: "vodka-picasso",
    title: "Vodka Picasso",
    category: "bottle",
    description: {
      en: "Cubist fragments meet street-art energy. Every angle reveals a new face — just like the best conversations at 3 AM.",
      ru: "Кубистические фрагменты встречают энергию стрит-арта. Каждый ракурс открывает новое лицо — как лучшие разговоры в 3 часа ночи.",
      fr: "Fragments cubistes rencontrent l'énergie du street-art. Chaque angle révèle un nouveau visage — comme les meilleures conversations à 3h du matin."
    },
    price: "280 €",
    dimensions: "35 × 12 cm",
    year: 2025,
    image: "/artworks/vodka-picasso.jpg",
    color: "#FFE600",
    available: true,
    edition: "1/1",
  },
  {
    id: "golden-noise",
    title: "Golden Noise",
    category: "bottle",
    description: {
      en: "Gold leaf explosions on dark glass. Static turned into visual poetry. The kind of noise you want to keep forever.",
      ru: "Взрывы золотой фольги на тёмном стекле. Статика, превращённая в визуальную поэзию. Тот самый шум, который хочется сохранить навсегда.",
      fr: "Explosions de feuille d'or sur verre sombre. Le bruit statique transformé en poésie visuelle. Le genre de bruit qu'on veut garder pour toujours."
    },
    price: "420 €",
    dimensions: "32 × 10 cm",
    year: 2026,
    image: "/artworks/golden-noise.jpg",
    color: "#D4AF37",
    available: true,
    edition: "1/1",
  },
  {
    id: "concrete-dreams",
    title: "Concrete Dreams",
    category: "panel",
    description: {
      en: "Raw textures meet precise geometry. A wall panel that transforms any space into a gallery. Brutalist beauty at its finest.",
      ru: "Сырые текстуры встречают точную геометрию. Настенная панель, которая превращает любое пространство в галерею. Брутальная красота в лучшем виде.",
      fr: "Textures brutes rencontrent géométrie précise. Un panneau mural qui transforme n'importe quel espace en galerie. La beauté brutaliste à son meilleur."
    },
    price: "480 €",
    dimensions: "80 × 60 cm",
    year: 2025,
    image: "/artworks/concrete-dreams.jpg",
    color: "#3D3D3D",
    available: true,
    edition: "1/1",
  },
  {
    id: "pop-riot",
    title: "Pop Riot",
    category: "panel",
    description: {
      en: "Screaming colors on a calm canvas. Icons of pop culture deconstructed and reassembled with rock'n'roll attitude.",
      ru: "Кричащие цвета на спокойном холсте. Иконы поп-культуры, деконструированные и собранные заново с рок-н-ролльным отношением.",
      fr: "Des couleurs hurlantes sur une toile calme. Icônes de la culture pop déconstruites et réassemblées avec une attitude rock'n'roll."
    },
    price: "520 €",
    dimensions: "100 × 70 cm",
    year: 2026,
    image: "/artworks/pop-riot.jpg",
    color: "#FF2D7B",
    available: true,
    edition: "1/1",
  },
  {
    id: "midnight-jack",
    title: "Midnight Jack",
    category: "bottle",
    description: {
      en: "Dark as a backstage at midnight. Jack Daniel's silhouette reimagined through pop-art lens. Collectors only.",
      ru: "Тёмный, как закулисье в полночь. Силуэт Jack Daniel's, переосмысленный через призму поп-арта. Только для коллекционеров.",
      fr: "Sombre comme les coulisses à minuit. La silhouette de Jack Daniel's réimaginée à travers le prisme pop-art. Réservé aux collectionneurs."
    },
    price: "300 €",
    dimensions: "28 × 10 cm",
    year: 2025,
    image: "/artworks/midnight-jack.jpg",
    color: "#1A1A2E",
    available: false,
    edition: "1/1",
  },
  {
    id: "urban-pulse",
    title: "Urban Pulse",
    category: "panel",
    description: {
      en: "The heartbeat of the city captured in acrylic. Layers of spray paint and brushwork create depth that demands a second look.",
      ru: "Пульс города, схваченный в акриле. Слои аэрозольной краски и кисти создают глубину, которая требует второго взгляда.",
      fr: "Le battement de cœur de la ville capturé en acrylique. Des couches de peinture en spray et de coups de pinceau créent une profondeur qui exige un second regard."
    },
    price: "450 €",
    dimensions: "90 × 60 cm",
    year: 2026,
    image: "/artworks/urban-pulse.jpg",
    color: "#6C2BD9",
    available: true,
    edition: "1/1",
  },
  {
    id: "cherry-bomb",
    title: "Cherry Bomb",
    category: "bottle",
    description: {
      en: "Sweet on the outside, explosive within. A cherry-red explosion that captures the energy of the first guitar riff at a live show.",
      ru: "Сладкая снаружи, взрывная внутри. Вишнёво-красный взрыв, захватывающий энергию первого гитарного риффа на живом концерте.",
      fr: "Douce à l'extérieur, explosive à l'intérieur. Une explosion rouge cerise qui capture l'énergie du premier riff de guitare d'un concert live."
    },
    price: "320 €",
    dimensions: "30 × 10 cm",
    year: 2026,
    image: "/artworks/cherry-bomb.jpg",
    color: "#DC143C",
    available: true,
    edition: "1/1",
  },
];

export function getArtwork(id: string): Artwork | undefined {
  return artworks.find((a) => a.id === id);
}

export function getFeatured(): Artwork[] {
  return artworks.filter((a) => a.available).slice(0, 5);
}

export function getByCategory(category: ArtworkCategory): Artwork[] {
  return artworks.filter((a) => a.category === category);
}

export function getAdjacentArtworks(id: string): { prev: Artwork | null; next: Artwork | null } {
  const idx = artworks.findIndex((a) => a.id === id);
  return {
    prev: idx > 0 ? artworks[idx - 1] : null,
    next: idx < artworks.length - 1 ? artworks[idx + 1] : null,
  };
}
