"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getArtwork, getAdjacentArtworks } from "@/data/artworks";
import Link from "next/link";
import { useI18n } from "@/i18n";

export default function ArtworkPage() {
  const params = useParams();
  const { locale, t } = useI18n();
  const artwork = getArtwork(params.id as string);

  const galleryImages = artwork?.galleryImages?.length
    ? artwork.galleryImages
    : artwork
    ? [artwork.image]
    : [];

  const [activeIndex, setActiveIndex] = useState(0);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  useEffect(() => {
    setActiveIndex(0);
    setInquiryOpen(false);
  }, [params.id]);

  if (!artwork) {
    return (
      <div className="pt-40 text-center text-white/40">Artwork not found</div>
    );
  }

  const { prev, next } = getAdjacentArtworks(params.id as string);
  const description = artwork.description[locale] || artwork.description.en;
  const categoryLabel = t(`artwork.${artwork.category}`);
  const activeImage = galleryImages[activeIndex] ?? artwork.image;
  const hasSlider = galleryImages.length > 1;
  const isWallPiece = ["panel", "pictures", "posters"].includes(artwork.category);

  const whatsappText = `Hi! I'm interested in "${artwork.title}" from DUJARI.`;
  const whatsappUrl = `https://wa.me/33600000000?text=${encodeURIComponent(whatsappText)}`;
  const telegramUrl = `https://t.me/dujari`;
  const mailUrl = `mailto:hello@dujari.art?subject=${encodeURIComponent(`Inquiry about "${artwork.title}"`)}`;

  return (
    <div
      className="min-h-screen pt-16 md:pt-20"
      style={{
        background:
          "radial-gradient(ellipse at 20% 40%, #FF2D7B0C 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, #FFE6000A 0%, transparent 45%), #0A0A0A",
      }}
    >
      <div className="flex items-stretch min-h-[calc(100vh-5rem)]">

        {/* Desktop: prev arrow */}
        <Link
          href={prev ? `/artwork/${prev.id}` : "/gallery"}
          className="hidden lg:flex items-center justify-center w-10 shrink-0 text-white/15 hover:text-white/45 transition-colors"
          title={prev ? prev.title : t("artwork.back")}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>

        {/* Main content */}
        <div className="flex-1 max-w-6xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <div
            className={`grid items-start gap-16 md:gap-20 lg:gap-28 ${
              isWallPiece
                ? "grid-cols-1 lg:grid-cols-[1.3fr_1fr]"
                : "grid-cols-1 lg:grid-cols-[1.4fr_1fr]"
            }`}
          >

            {/* Left: object */}
            <div>
              {/* Image — no container, object floats */}
              <div className="relative">
                {activeImage && (
                  <img
                    src={activeImage}
                    alt={artwork.title}
                    className="w-full h-auto object-contain max-h-[78vh]"
                    style={{
                      boxShadow:
                        "0 40px 100px rgba(0,0,0,0.65), 0 10px 32px rgba(0,0,0,0.4)",
                    }}
                  />
                )}

                {/* Sold overlay */}
                {!artwork.available && (
                  <div className="absolute top-4 right-4">
                    <span className="text-white/35 text-[10px] tracking-[0.35em] uppercase">
                      {t("artwork.sold")}
                    </span>
                  </div>
                )}

                {/* Slider: side arrows */}
                {hasSlider && (
                  <>
                    <button
                      onClick={() =>
                        setActiveIndex((i) =>
                          i === 0 ? galleryImages.length - 1 : i - 1
                        )
                      }
                      className="absolute -left-5 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center text-white/25 hover:text-white/65 transition-colors"
                      aria-label="Previous image"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    <button
                      onClick={() =>
                        setActiveIndex((i) =>
                          i === galleryImages.length - 1 ? 0 : i + 1
                        )
                      }
                      className="absolute -right-5 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center text-white/25 hover:text-white/65 transition-colors"
                      aria-label="Next image"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Slider dots */}
              {hasSlider && (
                <div className="mt-5 flex justify-center gap-2">
                  {galleryImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`h-px rounded-none transition-all duration-300 ${
                        i === activeIndex
                          ? "w-8 bg-white/50"
                          : "w-4 bg-white/18 hover:bg-white/35"
                      }`}
                      aria-label={`Image ${i + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Back link */}
              <Link
                href="/gallery"
                className="mt-10 inline-flex items-center gap-2 text-white/22 text-[10px] tracking-[0.28em] uppercase hover:text-white/50 transition-colors"
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                {t("artwork.back")}
              </Link>
            </div>

            {/* Right: scene */}
            {isWallPiece ? (
              /* ── WALL PIECE: text-dominant, facts pushed to bottom ── */
              <div className="flex flex-col lg:min-h-[70vh] max-w-[520px]">

                <div>
                  <p className="text-[#FF2D7B] text-[10px] tracking-[0.52em] uppercase mb-6">
                    {categoryLabel} · {artwork.year}
                  </p>
                  <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-none mb-10">
                    {artwork.title}
                  </h1>
                  {description && (
                    <p className="text-white/50 text-sm md:text-base leading-[1.75] max-w-[440px]">
                      {description}
                    </p>
                  )}
                </div>

                <div className="mt-auto pt-14">
                  <div className="mb-8 space-y-3">
                    {artwork.price && (
                      <p className="text-white text-2xl font-bold tracking-tight">{artwork.price}</p>
                    )}
                    {artwork.dimensions && (
                      <p className="text-white/45 text-sm tracking-wide">{artwork.dimensions}</p>
                    )}
                    {artwork.edition && (
                      <p className="text-white/30 text-xs tracking-[0.22em] uppercase">{artwork.edition}</p>
                    )}
                  </div>
                  <p className="text-white/22 text-[11px] tracking-[0.28em] uppercase mb-8">
                    {artwork.available ? "One original. No edition." : t("artwork.claimed")}
                  </p>
                  {artwork.available && (
                    !inquiryOpen ? (
                      <button onClick={() => setInquiryOpen(true)}
                        className="text-white/38 text-[11px] tracking-[0.32em] uppercase hover:text-white/70 transition-colors text-left"
                      >{t("artwork.inquire")} →</button>
                    ) : (
                      <div className="flex gap-8">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-white/38 text-[11px] tracking-[0.22em] uppercase hover:text-white/70 transition-colors">WhatsApp</a>
                        <a href={telegramUrl} target="_blank" rel="noopener noreferrer" className="text-white/38 text-[11px] tracking-[0.22em] uppercase hover:text-white/70 transition-colors">Telegram</a>
                        <a href={mailUrl} className="text-white/38 text-[11px] tracking-[0.22em] uppercase hover:text-white/70 transition-colors">Email</a>
                      </div>
                    )
                  )}
                </div>

                {/* Mobile prev/next */}
                <div className="flex justify-between mt-14 lg:hidden">
                  <Link href={prev ? `/artwork/${prev.id}` : "/gallery"}
                    className="text-white/22 text-[10px] tracking-[0.18em] uppercase hover:text-white/50 transition-colors flex items-center gap-1.5"
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                    {prev ? prev.title.slice(0, 14) : t("artwork.back")}
                  </Link>
                  {next && (
                    <Link href={`/artwork/${next.id}`}
                      className="text-white/22 text-[10px] tracking-[0.18em] uppercase hover:text-white/50 transition-colors flex items-center gap-1.5"
                    >
                      {next.title.slice(0, 14)}
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                    </Link>
                  )}
                </div>
              </div>

            ) : (
              /* ── PHYSICAL OBJECT (bottle/object): object-first, label-like right column ── */
              <div className="flex flex-col max-w-[380px] pt-4">

                {/* Meta + title — compact */}
                <p className="text-[#FF2D7B] text-[10px] tracking-[0.52em] uppercase mb-4">
                  {categoryLabel} · {artwork.year}
                </p>
                <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight uppercase leading-none mb-6">
                  {artwork.title}
                </h1>

                {/* Brief description — capped at ~4 lines / 60 words */}
                {description && (
                  <p className="text-white/40 text-sm leading-[1.65] mb-8 max-w-[300px] line-clamp-4">
                    {description}
                  </p>
                )}

                {/* Thin divider */}
                <div className="w-8 h-px bg-white/10 mb-8" />

                {/* Facts — close, compact */}
                <div className="space-y-2.5 mb-6">
                  {artwork.price && (
                    <p className="text-white text-xl font-bold tracking-tight">{artwork.price}</p>
                  )}
                  {artwork.dimensions && (
                    <p className="text-white/40 text-xs tracking-wide">{artwork.dimensions}</p>
                  )}
                  {artwork.edition && (
                    <p className="text-white/25 text-[10px] tracking-[0.22em] uppercase">{artwork.edition}</p>
                  )}
                </div>

                {/* Availability */}
                <p className="text-white/20 text-[10px] tracking-[0.28em] uppercase mb-8">
                  {artwork.available ? "One original. No edition." : t("artwork.claimed")}
                </p>

                {/* CTA — bordered, present */}
                {artwork.available && (
                  !inquiryOpen ? (
                    <button
                      onClick={() => setInquiryOpen(true)}
                      className="self-start border border-white/20 text-white/75 text-xs tracking-[0.32em] uppercase px-8 py-4 hover:border-white/45 hover:text-white transition-all duration-200"
                    >
                      {t("artwork.inquire")}
                    </button>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                        className="border border-white/12 text-white/55 text-[11px] tracking-[0.28em] uppercase px-6 py-3.5 hover:border-white/28 hover:text-white/85 transition-all duration-200"
                      >WhatsApp</a>
                      <a href={telegramUrl} target="_blank" rel="noopener noreferrer"
                        className="border border-white/12 text-white/55 text-[11px] tracking-[0.28em] uppercase px-6 py-3.5 hover:border-white/28 hover:text-white/85 transition-all duration-200"
                      >Telegram</a>
                      <a href={mailUrl}
                        className="border border-white/12 text-white/55 text-[11px] tracking-[0.28em] uppercase px-6 py-3.5 hover:border-white/28 hover:text-white/85 transition-all duration-200"
                      >Email</a>
                    </div>
                  )
                )}

                {/* Mobile prev/next */}
                <div className="flex justify-between mt-14 lg:hidden">
                  <Link href={prev ? `/artwork/${prev.id}` : "/gallery"}
                    className="text-white/22 text-[10px] tracking-[0.18em] uppercase hover:text-white/50 transition-colors flex items-center gap-1.5"
                  >
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                    {prev ? prev.title.slice(0, 14) : t("artwork.back")}
                  </Link>
                  {next && (
                    <Link href={`/artwork/${next.id}`}
                      className="text-white/22 text-[10px] tracking-[0.18em] uppercase hover:text-white/50 transition-colors flex items-center gap-1.5"
                    >
                      {next.title.slice(0, 14)}
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop: next arrow */}
        <Link
          href={next ? `/artwork/${next.id}` : "/gallery"}
          className="hidden lg:flex items-center justify-center w-10 shrink-0 text-white/15 hover:text-white/45 transition-colors"
          title={next ? next.title : t("artwork.back")}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

