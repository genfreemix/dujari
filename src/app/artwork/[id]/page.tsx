"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { getArtwork, getAdjacentArtworks } from "@/data/artworks";
import Link from "next/link";
import { useI18n } from "@/i18n";

type LocalizedDetail = {
  en: string;
  ru: string;
  fr: string;
};

type PhysicalSpecs = {
  materials?: LocalizedDetail;
  technique?: LocalizedDetail;
  base?: LocalizedDetail;
  status?: LocalizedDetail;
};

const physicalSpecsByCategory: Partial<Record<"bottle" | "objects", PhysicalSpecs>> = {
  bottle: {
    materials: {
      en: "acrylic, glass, mixed media",
      ru: "акрил, стекло, смешанная техника",
      fr: "acrylique, verre, technique mixte",
    },
    technique: {
      en: "hand-painted, artist reworked object",
      ru: "ручная роспись, авторская переработка объекта",
      fr: "peinture à la main, relecture d'auteur de l'objet",
    },
    base: {
      en: "reworked bottle, 0.7 l",
      ru: "переработанная бутылка, 0.7 л",
      fr: "bouteille retravaillée, 0.7 l",
    },
    status: {
      en: "collectible object",
      ru: "коллекционный объект",
      fr: "objet de collection",
    },
  },
  objects: {
    technique: {
      en: "hand-painted, artist reworked object",
      ru: "ручная роспись, авторская переработка объекта",
      fr: "peinture à la main, relecture d'auteur de l'objet",
    },
    status: {
      en: "collectible object",
      ru: "коллекционный объект",
      fr: "objet de collection",
    },
  },
} as const;

export default function ArtworkPage() {
  const params = useParams();
  const artworkId = params.id as string;

  return <ArtworkPageContent key={artworkId} artworkId={artworkId} />;
}

function ArtworkPageContent({ artworkId }: { artworkId: string }) {
  const { locale, t } = useI18n();
  const artwork = getArtwork(artworkId);

  const galleryImages = artwork?.galleryImages?.length
    ? artwork.galleryImages
    : artwork
    ? [artwork.image]
    : [];

  const [activeIndex, setActiveIndex] = useState(0);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  if (!artwork) {
    return (
      <div className="pt-40 text-center text-white/40">Artwork not found</div>
    );
  }

  const { prev, next } = getAdjacentArtworks(artworkId);
  const description = artwork.description[locale] || artwork.description.en;
  const categoryLabel = t(`artwork.${artwork.category}`);
  const activeImage = galleryImages[activeIndex] ?? artwork.image;
  const hasSlider = galleryImages.length > 1;
  const isWallPiece = ["panel", "pictures", "posters"].includes(artwork.category);
  const fallbackSpecs =
    artwork.category === "bottle" || artwork.category === "objects"
      ? physicalSpecsByCategory[artwork.category]
      : undefined;
  const detailSpecs = {
    materials: artwork.detailSpecs?.materials?.[locale] ?? fallbackSpecs?.materials?.[locale],
    technique: artwork.detailSpecs?.technique?.[locale] ?? fallbackSpecs?.technique?.[locale],
    base: artwork.detailSpecs?.base?.[locale] ?? fallbackSpecs?.base?.[locale],
    status:
      artwork.detailSpecs?.status?.[locale] ??
      fallbackSpecs?.status?.[locale] ??
      t("artwork.status_collectible_object"),
  };
  const specRows = [
    { label: t("artwork.materials"), value: detailSpecs.materials },
    { label: t("artwork.technique"), value: detailSpecs.technique },
    { label: t("artwork.base"), value: detailSpecs.base },
  ].filter((row) => Boolean(row.value));
  const primarySpecRows = specRows.filter((row) => row.label === t("artwork.materials"));
  const secondarySpecRows = specRows.filter((row) => row.label !== t("artwork.materials"));

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
          className="hidden lg:flex items-center justify-center w-10 shrink-0 text-white/0 hover:text-white/45 transition-colors"
          title={prev ? prev.title : t("artwork.back")}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>

        {/* Main content */}
        <div className="flex-1 max-w-6xl mx-auto px-6 md:px-10 py-6 md:py-8">
          <div
            className={`grid gap-10 md:gap-14 lg:gap-16 ${
              isWallPiece
                ? "items-stretch grid-cols-1 lg:grid-cols-[1.3fr_1fr]"
                : "items-start grid-cols-1 lg:grid-cols-[1.4fr_1fr]"
            }`}
          >

            {/* Left: object */}
            <div className="lg:flex lg:flex-col lg:justify-center lg:h-[calc(100vh-9rem)]">
              {/* Image — no container, object floats */}
              <div className="relative">
                {activeImage && (
                  <img
                    src={activeImage}
                    alt={artwork.title}
                    className="w-full h-auto object-contain max-h-[calc(100vh-12rem)]"
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

                {/* Back button — bottom-left of photo */}
                <Link
                  href="/gallery"
                  className="absolute bottom-3 left-0 inline-flex items-center gap-1.5 text-white/25 text-[10px] tracking-[0.22em] uppercase hover:text-white/55 transition-colors"
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                  {t("artwork.back")}
                </Link>

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


            </div>

            {/* Right: scene */}
            {isWallPiece ? (
              /* ── WALL PIECE: text-dominant, facts pushed to bottom ── */
              <div className="flex flex-col h-full max-w-[520px]">

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
              /* ── PHYSICAL OBJECT (bottle/object): closed vertical module ── */
              <div className="flex flex-col max-w-[380px] pt-1 lg:sticky lg:top-28 self-start">

                {/* TOP: meta + title + description + specs */}
                <div>
                  <p className="text-[#FF2D7B] text-[10px] tracking-[0.52em] uppercase mb-4">
                    {categoryLabel} · {artwork.year}
                  </p>
                  <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-black tracking-tight uppercase leading-none mb-4">
                    {artwork.title}
                  </h1>

                  {description && (
                    <p className="max-w-[286px] text-white/40 text-sm leading-[1.52] line-clamp-4">
                      {description}
                    </p>
                  )}

                  <div className="mt-5">
                    <div className="h-px w-8 bg-white/8" />
                    <div className="mt-4 space-y-3">
                      {primarySpecRows.length > 0 && (
                        <div className="space-y-1.5 text-[11px] leading-[1.35] text-white/34 max-w-[336px]">
                          {primarySpecRows.map((row) => (
                            <p key={row.label}>
                              <span className="text-white/62 font-medium">{row.label}:</span>{" "}
                              {row.value}
                            </p>
                          ))}
                        </div>
                      )}
                      <div className="space-y-1.5 text-[11px] leading-[1.35] text-white/34 max-w-[336px]">
                        {artwork.dimensions && (
                          <p>
                            <span className="text-white/62 font-medium">{t("artwork.size")}:</span>{" "}
                            {artwork.dimensions}
                          </p>
                        )}
                        <p>
                          <span className="text-white/62 font-medium">{t("artwork.status")}:</span>{" "}
                          {detailSpecs.status}
                        </p>
                      </div>
                      {secondarySpecRows.length > 0 && (
                        <div className="space-y-1 text-[10px] leading-[1.28] text-white/24 max-w-[336px]">
                          {secondarySpecRows.map((row) => (
                            <p key={row.label}>
                              <span className="text-white/42 font-medium">{row.label}:</span>{" "}
                              {row.value}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* BOTTOM CTA: price + 1/1 + contact */}
                <div className="mt-6">
                  <div className="flex items-end gap-2 mb-1">
                    {artwork.price && (
                      <p className="text-white text-[2rem] leading-none font-bold tracking-tight">{artwork.price}</p>
                    )}
                    {artwork.edition && (
                      <p className="pb-0.5 text-white/45 text-[12px] tracking-[0.14em] uppercase">{artwork.edition}</p>
                    )}
                  </div>
                  <p className="text-white/20 text-[10px] tracking-[0.18em] uppercase leading-[1.2] mb-3">
                    {artwork.available ? t("artwork.original_meta") : t("artwork.claimed")}
                  </p>
                  {artwork.available && (
                    <div className="flex flex-col gap-1.5">
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                        className="border border-white/12 text-white/55 text-[11px] tracking-[0.24em] uppercase px-6 py-3 hover:border-white/28 hover:text-white/85 transition-all duration-200"
                      >WhatsApp</a>
                      <a href={telegramUrl} target="_blank" rel="noopener noreferrer"
                        className="border border-white/12 text-white/55 text-[11px] tracking-[0.24em] uppercase px-6 py-3 hover:border-white/28 hover:text-white/85 transition-all duration-200"
                      >Telegram</a>
                    </div>
                  )}
                </div>

                {/* Mobile prev/next */}
                <div className="flex justify-between mt-8 lg:hidden">
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
          className="hidden lg:flex items-center justify-center w-10 shrink-0 text-white/0 hover:text-white/45 transition-colors"
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

