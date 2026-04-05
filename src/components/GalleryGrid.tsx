"use client";

import ArtworkCard from "./ArtworkCard";
import type { Artwork } from "@/data/artworks";

interface Props {
  artworks: Artwork[];
  title?: string;
  subtitle?: string;
  containerClassName?: string;
  sectionClassName?: string;
  gridClassName?: string;
  cardClassName?: string;
  imageClassName?: string;
}

export default function GalleryGrid({
  artworks,
  title,
  subtitle,
  containerClassName,
  sectionClassName,
  gridClassName,
  cardClassName,
  imageClassName,
}: Props) {
  const resolvedContainerClassName = containerClassName ?? "max-w-7xl mx-auto px-6";

  return (
    <section className={`bg-black pt-10 pb-6 md:pt-12 md:pb-8 ${sectionClassName ?? ""}`.trim()}>
      {(title || subtitle) && (
        <div className={`${resolvedContainerClassName} mb-6 md:mb-8`.trim()}>
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

      <div className={resolvedContainerClassName}>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-10 md:gap-x-4 md:gap-y-12 ${gridClassName ?? ""}`.trim()}>
          {artworks.map((artwork, i) => (
            <ArtworkCard
              key={artwork.id}
              artwork={artwork}
              priority={i < 3}
              className={cardClassName}
              imageClassName={imageClassName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
