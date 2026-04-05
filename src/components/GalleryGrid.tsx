"use client";

import ArtworkCard from "./ArtworkCard";
import type { Artwork } from "@/data/artworks";

interface Props {
  artworks: Artwork[];
  title?: string;
  subtitle?: string;
}

export default function GalleryGrid({ artworks, title, subtitle }: Props) {
  return (
    <section className="bg-black pt-3 pb-6 md:pt-4 md:pb-8">
      {(title || subtitle) && (
        <div className="max-w-7xl mx-auto px-6 mb-6 md:mb-8">
          {subtitle && (
            <p className="text-[#FF2D7B] text-[10px] md:text-xs tracking-[0.5em] uppercase mb-3">
              {subtitle}
            </p>
          )}
          {title && (
            <h2 className="text-white text-3xl md:text-5xl font-black tracking-tight uppercase">
              {title}
            </h2>
          )}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {artworks.map((artwork, i) => (
            <ArtworkCard
              key={artwork.id}
              artwork={artwork}
              priority={i < 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
