"use client";

import Link from "next/link";
import type { Artwork } from "@/data/artworks";
import { useI18n } from "@/i18n";

interface Props {
  artwork: Artwork;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}

export default function ArtworkCard({ artwork, priority, className, imageClassName }: Props) {
  const { t } = useI18n();
  const isSold = !artwork.available;
  const categoryLabel = artwork.category === "bottle" ? t("artwork.bottle") : t("artwork.panel");

  return (
    <Link
      href={`/artwork/${artwork.id}`}
      className={`group relative block overflow-hidden bg-neutral-900 ring-1 ring-white/15 shadow-lg shadow-black/60 ${className ?? ""}`.trim()}
    >
      {/* Image */}
      <div
        className={`aspect-[5/6] w-full relative ${imageClassName ?? ""}`.trim()}
        style={{ backgroundColor: artwork.color }}
      >
        {artwork.image ? (
          <img
            src={artwork.image}
            alt={artwork.title}
            className="absolute inset-0 block h-full w-full scale-[1.01] object-contain"
            loading={priority ? "eager" : "lazy"}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/20 text-6xl md:text-7xl font-black uppercase select-none">
              {artwork.title.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-end">
        <div className="w-full p-4 md:p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <p className="text-[#FF2D7B] text-[10px] tracking-[0.3em] uppercase mb-1">
            {categoryLabel} · {artwork.edition}
          </p>
          <h3 className="text-white text-lg md:text-xl font-bold tracking-wide uppercase">
            {artwork.title}
          </h3>
          <p className="text-white/60 text-sm mt-1">{artwork.price}</p>
        </div>
      </div>

      {/* Sold badge */}
      {isSold && (
        <div className="absolute top-4 right-4 bg-black/80 text-white/60 text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 border border-white/10">
          {t("artwork.sold")}
        </div>
      )}
    </Link>
  );
}
