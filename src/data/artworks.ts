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
  galleryImages?: string[];
  color: string; // placeholder bg color
  available: boolean;
  edition: string; // e.g. "1/1"
}

export const artworks: Artwork[] = [
  {
    id: "tincture-magic-strawberry",
    title: "tincture-magic-strawberry",
    category: "bottle",
    description: {
      en: "",
      ru: "",
      fr: "",
    },
    price: "",
    dimensions: "",
    year: 2026,
    image: "/artworks/tincture-magic-strawberry/cover.jpg",
    galleryImages: [
      "/artworks/tincture-magic-strawberry/cover.jpg",
      "/artworks/tincture-magic-strawberry/view-1.jpg",
      "/artworks/tincture-magic-strawberry/view-2.jpg",
      "/artworks/tincture-magic-strawberry/view-3.jpg",
      "/artworks/tincture-magic-strawberry/view-4.png",
    ],
    color: "#ff5f87",
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
    id: "gin-andy-warhol",
    title: "gin-andy-warhol",
    category: "bottle",
    description: {
      en: "",
      ru: "",
      fr: "",
    },
    price: "",
    dimensions: "",
    year: 2026,
    image: "/artworks/gin-andy-warhol.jpg",
    color: "#cfd0d4",
    available: true,
    edition: "1/1",
  },
  {
    id: "liqueur-black-monro",
    title: "liqueur-black-monro",
    category: "bottle",
    description: {
      en: "",
      ru: "",
      fr: "",
    },
    price: "",
    dimensions: "",
    year: 2026,
    image: "/artworks/liqueur-black-monro.jpg",
    color: "#0f0f10",
    available: true,
    edition: "1/1",
  },
  {
    id: "rom-stevie-wonder",
    title: "rom-stevie-wonder",
    category: "bottle",
    description: {
      en: "",
      ru: "",
      fr: "",
    },
    price: "",
    dimensions: "",
    year: 2026,
    image: "/artworks/rom-stevie-wonder.jpg",
    color: "#8c5d1f",
    available: true,
    edition: "1/1",
  },
  {
    id: "tequila-marlene-dietrich",
    title: "tequila-marlene-dietrich",
    category: "bottle",
    description: {
      en: "",
      ru: "",
      fr: "",
    },
    price: "",
    dimensions: "",
    year: 2026,
    image: "/artworks/tequila-marlene-dietrich.jpg",
    color: "#d7d8dd",
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
    id: "eyemeter-panel",
    title: "Eyemeter",
    category: "panel",
    description: {
      en: "A loud, defiant collision of imagery, texture, and mood, where glamour tears apart, beauty slips into distortion, and meaning is not explained but felt. This work does not ask permission. It hits like an overdriven guitar and stays inside you like a song you cannot shake.",
      ru: "Громкое, дерзкое столкновение образов, фактур и настроения — где гламур разрывается на части, красота уходит в искажение, а смысл не объясняют, его чувствуют. Эта работа не спрашивает разрешения — она бьёт, как перегруженный звук гитары, и остаётся внутри, как песня, от которой не избавиться.",
      fr: "Une collision sonore et insolente d'images, de textures et d'humeur, où le glamour se déchire, la beauté glisse vers la distortion, et le sens ne s'explique pas, il se ressent. Cette œuvre ne demande pas la permission. Elle frappe comme une guitare saturée et reste en vous comme une chanson impossible à quitter."
    },
    price: "540 €",
    dimensions: "90 × 70 cm",
    year: 2026,
    image: "/artworks/eyemeter-panel.jpg",
    color: "#d6c9b7",
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
    id: "glam-skull-panel",
    title: "Glam Skull",
    category: "objects",
    description: {
      en: "Beautiful things die too, but they do it with taste. Flooded in neon and assembled like an illusion, this skull mocks the ideal, luxury, and the obsession with looking alive. It does not hide decay. It stages it. Empty beauty you still cannot look away from.",
      ru: "Красивые вещи тоже умирают — но делают это со вкусом. Залитый неоном и собранный как иллюзия, этот череп высмеивает идеал, роскошь и одержимость выглядеть живым. Он не скрывает распад — он его демонстрирует. Пустая красота, от которой всё равно невозможно оторваться.",
      fr: "Les belles choses meurent aussi, mais elles le font avec goût. Inondé de néon et construit comme une illusion, ce crâne se moque de l'idéal, du luxe et de l'obsession de paraître vivant. Il ne cache pas la décomposition, il la met en scène. Une beauté vide dont il reste pourtant impossible de détourner le regard."
    },
    price: "490 €",
    dimensions: "68 × 48 cm",
    year: 2026,
    image: "/artworks/glam-skull-panel.jpg",
    color: "#f06aa7",
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
  const available = artworks.filter((a) => a.available);
  const featuredIds = ["tincture-magic-strawberry", "eyemeter-panel", "glam-skull-panel"];
  const prioritized = featuredIds
    .map((id) => available.find((artwork) => artwork.id === id))
    .filter((artwork): artwork is Artwork => Boolean(artwork));
  const remaining = available.filter((artwork) => !featuredIds.includes(artwork.id));

  return [...prioritized, ...remaining].slice(0, 5);
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
