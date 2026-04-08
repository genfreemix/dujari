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
  const categoryLabel = t(`artwork.${artwork.category}`);

  return (
    <Link
      href={`/artwork/${artwork.id}`}
      className={`group relative block transition-transform duration-[350ms] ease-out hover:scale-[1.03] ${className ?? ""}`.trim()}
    >
      {/* Image */}
      <div
        className={`aspect-[5/6] w-full relative overflow-hidden ${imageClassName ?? ""}`.trim()}
      >
        {artwork.image ? (
          <img
            src={artwork.image}
            alt={artwork.title}
            className="absolute inset-0 block h-full w-full object-contain"
            style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.35)" }}
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

      {/* Hover overlay — gradient from bottom */}
      <div className="absolute inset-0 flex items-end pointer-events-none">
        <div className="w-full px-4 pt-16 pb-4 md:px-5 md:pb-5 bg-gradient-to-t from-black/70 via-black/20 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          <p className="text-[#FF2D7B] text-[9px] tracking-[0.35em] uppercase mb-1">
            {categoryLabel} · {artwork.edition}
          </p>
          <h3 className="text-white text-sm md:text-base font-bold tracking-wide uppercase leading-tight">
            {artwork.title}
          </h3>
          {artwork.price && (
            <p className="text-white/50 text-xs mt-1">{artwork.price}</p>
          )}
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
