"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getArtwork, getAdjacentArtworks } from "@/data/artworks";
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

  const { prev, next } = getAdjacentArtworks(params.id as string);

  const description = artwork.description[locale] || artwork.description.en;
  const categoryLabel = artwork.category === "bottle" ? t("artwork.bottle") : t("artwork.panel");
  const galleryImages = artwork.galleryImages?.length ? artwork.galleryImages : [artwork.image];
  const [activeImage, setActiveImage] = useState(galleryImages[0]);

  useEffect(() => {
    setActiveImage(galleryImages[0]);
  }, [artwork.id, galleryImages]);

  return (
    <div className="pt-16 md:pt-[72px] bg-black min-h-screen">
      <div className="flex items-stretch min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-72px)]">

        {/* Left arrow: prev artwork or gallery */}
        <Link
          href={prev ? `/artwork/${prev.id}` : "/gallery"}
          className="hidden lg:flex items-center justify-center w-12 shrink-0 text-white/20 hover:text-white/60 hover:bg-white/5 transition-all"
          title={prev ? prev.title : t("artwork.back")}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>

        {/* Main content */}
        <div className="flex-1 max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-start">
            {/* Image */}
            <div className="relative">
              <div
                className="w-full relative overflow-hidden"
                style={{ backgroundColor: artwork.color, maxHeight: "calc(100vh - 6rem)" }}
              >
                {activeImage ? (
                  <img
                    src={activeImage}
                    alt={artwork.title}
                    className="w-full h-auto max-h-[calc(100vh-6rem)] object-contain"
                  />
                ) : (
                  <div className="aspect-[3/4] flex items-center justify-center">
                    <span className="text-white/15 text-[100px] md:text-[160px] font-black uppercase select-none leading-none">
                      {artwork.title.charAt(0)}
                    </span>
                  </div>
                )}

                {!artwork.available && (
                  <div className="absolute top-4 right-4 bg-[#FF2D7B]/90 text-white text-[10px] tracking-[0.3em] uppercase px-3 py-1.5">
                    {t("artwork.sold")}
                  </div>
                )}
              </div>

              {galleryImages.length > 1 && (
                <div className="mt-3 grid grid-cols-5 gap-2">
                  {galleryImages.map((imageSrc, index) => {
                    const isActive = imageSrc === activeImage;

                    return (
                      <button
                        key={imageSrc}
                        type="button"
                        onClick={() => setActiveImage(imageSrc)}
                        className={`relative aspect-square overflow-hidden border transition-colors ${
                          isActive ? "border-[#FF2D7B]" : "border-white/10 hover:border-white/30"
                        }`}
                        aria-label={`View image ${index + 1} of ${galleryImages.length}`}
                      >
                        <img
                          src={imageSrc}
                          alt={`${artwork.title} view ${index + 1}`}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Back to gallery - bottom left under photo */}
              <Link
                href="/gallery"
                className="mt-2 inline-flex items-center gap-1.5 text-white/30 text-[10px] tracking-[0.2em] uppercase hover:text-white/60 transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                {t("artwork.back")}
              </Link>
            </div>

            {/* Details */}
            <div className="flex flex-col justify-start lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto">
              <p className="text-[#FF2D7B] text-[10px] md:text-xs tracking-[0.5em] uppercase mb-1.5">
                {categoryLabel} · {artwork.year}
              </p>

              <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight uppercase mb-2">
                {artwork.title}
              </h1>

              <div className="text-white/50 text-sm leading-relaxed mb-3 max-w-lg">
                {description}
              </div>

              <div className="border-t border-white/10 pt-2.5 mb-3 space-y-1">
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
                <div className="bg-white/5 border border-white/10 px-3 py-1.5 mb-3">
                  <p className="text-[#FF2D7B] text-xs tracking-wider uppercase font-medium">
                    {t("artwork.scarcity")}
                  </p>
                </div>
              )}

              {artwork.available ? (
                <InquiryButton artworkTitle={artwork.title} />
              ) : (
                <div className="border border-white/10 px-6 py-3 text-center">
                  <p className="text-white/40 text-xs tracking-[0.25em] uppercase">
                    {t("artwork.claimed")}
                  </p>
                </div>
              )}

              {/* Mobile prev/next */}
              <div className="flex justify-between mt-4 lg:hidden">
                <Link
                  href={prev ? `/artwork/${prev.id}` : "/gallery"}
                  className="text-white/30 text-xs tracking-[0.15em] uppercase hover:text-white/60 transition-colors flex items-center gap-1"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                  {prev ? prev.title.slice(0, 15) : t("artwork.back")}
                </Link>
                {next && (
                  <Link
                    href={`/artwork/${next.id}`}
                    className="text-white/30 text-xs tracking-[0.15em] uppercase hover:text-white/60 transition-colors flex items-center gap-1"
                  >
                    {next.title.slice(0, 15)}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right arrow: next artwork */}
        {next ? (
          <Link
            href={`/artwork/${next.id}`}
            className="hidden lg:flex items-center justify-center w-12 shrink-0 text-white/20 hover:text-white/60 hover:bg-white/5 transition-all"
            title={next.title}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </Link>
        ) : (
          <div className="hidden lg:block w-12 shrink-0" />
        )}
      </div>
    </div>
  );
}
