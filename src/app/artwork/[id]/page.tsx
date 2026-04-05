"use client";

import { useParams } from "next/navigation";
import { getArtwork } from "@/data/artworks";
import InquiryButton from "@/components/InquiryButton";
import Link from "next/link";
import { useI18n } from "@/i18n";

export default function ArtworkPage() {
  const params = useParams();
  const { locale, t } = useI18n();
  const artwork = getArtwork(params.id as string);

  if (!artwork) {
    return (
      <div className="pt-40 text-center text-white/40">Artwork not found</div>
    );
  }

  const description = artwork.description[locale] || artwork.description.en;
  const categoryLabel = artwork.category === "bottle" ? t("artwork.bottle") : t("artwork.panel");

  return (
    <div className="pt-20 md:pt-24 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <Link
          href="/gallery"
          className="text-white/40 text-xs tracking-[0.25em] uppercase hover:text-white/70 transition-colors mb-8 inline-block"
        >
          {t("artwork.back")}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 mt-8">
          {/* Image */}
          <div
            className="aspect-[3/4] w-full relative overflow-hidden"
            style={{ backgroundColor: artwork.color }}
          >
            {artwork.image ? (
              <img
                src={artwork.image}
                alt={artwork.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/15 text-[100px] md:text-[160px] font-black uppercase select-none leading-none">
                  {artwork.title.charAt(0)}
                </span>
              </div>
            )}

            <div className="absolute top-6 left-6 flex gap-3">
              <span className="bg-black/80 text-white/80 text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 border border-white/10">
                {artwork.edition}
              </span>
              <span className="bg-black/80 text-white/80 text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 border border-white/10">
                {categoryLabel}
              </span>
            </div>

            {!artwork.available && (
              <div className="absolute top-6 right-6 bg-[#FF2D7B]/90 text-white text-[10px] tracking-[0.3em] uppercase px-4 py-2">
                {t("artwork.sold")}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <p className="text-[#FF2D7B] text-[10px] md:text-xs tracking-[0.5em] uppercase mb-3">
              {categoryLabel} · {artwork.year}
            </p>

            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase mb-6">
              {artwork.title}
            </h1>

            <div className="text-white/50 text-sm md:text-base leading-relaxed mb-8 max-w-lg whitespace-pre-line">
              {description}
            </div>

            <div className="border-t border-white/10 pt-6 mb-8 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-white/40">{t("artwork.price")}</span>
                <span className="text-white font-bold">{artwork.price}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/40">{t("artwork.dimensions")}</span>
                <span className="text-white/70">{artwork.dimensions}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/40">{t("artwork.edition")}</span>
                <span className="text-white/70">{artwork.edition}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/40">{t("artwork.year")}</span>
                <span className="text-white/70">{artwork.year}</span>
              </div>
            </div>

            {artwork.available && (
              <div className="bg-white/5 border border-white/10 px-4 py-3 mb-8">
                <p className="text-[#FF2D7B] text-xs tracking-wider uppercase font-medium">
                  {t("artwork.scarcity")}
                </p>
              </div>
            )}

            {artwork.available ? (
              <InquiryButton artworkTitle={artwork.title} />
            ) : (
              <div className="border border-white/10 px-6 py-4 text-center">
                <p className="text-white/40 text-xs tracking-[0.25em] uppercase">
                  {t("artwork.claimed")}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
