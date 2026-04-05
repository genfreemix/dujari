export interface Artwork {
  id: string;
  title: string;
  category: "bottle" | "panel";
  description: string;
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
    title: "Neon Rebellion",
    category: "bottle",
    description:
      "A burst of electric defiance on vintage glass. Layers of neon splashes collide with bold black strokes — a bottle that refuses to stay on the shelf.",
    price: "350 €",
    dimensions: "30 × 10 cm",
    year: 2025,
    image: "/artworks/neon-rebellion.jpg",
    color: "#FF2D7B",
    available: true,
    edition: "1/1",
  },
  {
    id: "vodka-picasso",
    title: "Vodka Picasso",
    category: "bottle",
    description:
      "Cubist fragments meet street-art energy. Every angle reveals a new face — just like the best conversations at 3 AM.",
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
    description:
      "Gold leaf explosions on dark glass. Static turned into visual poetry. The kind of noise you want to keep forever.",
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
    description:
      "Raw textures meet precise geometry. A wall panel that transforms any space into a gallery. Brutalist beauty at its finest.",
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
    description:
      "Screaming colors on a calm canvas. Icons of pop culture deconstructed and reassembled with rock'n'roll attitude.",
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
    description:
      "Dark as a backstage at midnight. Jack Daniel's silhouette reimagined through pop-art lens. Collectors only.",
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
    description:
      "The heartbeat of the city captured in acrylic. Layers of spray paint and brushwork create depth that demands a second look.",
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
    description:
      "Sweet on the outside, explosive within. A cherry-red explosion that captures the energy of the first guitar riff at a live show.",
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

export function getByCategory(category: "bottle" | "panel"): Artwork[] {
  return artworks.filter((a) => a.category === category);
}
