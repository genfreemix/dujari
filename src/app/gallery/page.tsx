"use client";

import { useState } from "react";
import GalleryGrid from "@/components/GalleryGrid";
import { artworks, type ArtworkCategory } from "@/data/artworks";
import { useT } from "@/i18n";

type Filter = "all" | ArtworkCategory;

export default function GalleryPage() {
  const t = useT();
  const [filter, setFilter] = useState<Filter>("all");
  const containerClassName = "mx-auto w-full max-w-[1500px] px-6 xl:pl-8 xl:pr-4";

  const filtered = filter === "all"
    ? artworks
    : artworks.filter((artwork) => artwork.category === filter);

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t("gallery.filter_all") },
    { key: "bottle", label: t("gallery.filter_bottles") },
    { key: "panel", label: t("gallery.filter_panels") },
    { key: "objects", label: t("gallery.filter_objects") },
    { key: "pictures", label: t("gallery.filter_pictures") },
    { key: "posters", label: t("gallery.filter_posters") },
    { key: "books", label: t("gallery.filter_books") },
    { key: "merch", label: t("gallery.filter_merch") },
  ];
  const activeFilterLabel = filters.find((item) => item.key === filter)?.label ?? t("gallery.filter_all");

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#0A0A0A] pt-16 md:pt-20">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at 25% 60%, #FF2D7B18 0%, transparent 45%), radial-gradient(ellipse at 75% 20%, #FFE60010 0%, transparent 40%), radial-gradient(ellipse at 50% 100%, #1a0010 0%, transparent 60%)",
        }}
      />

      <section className="relative z-10 pt-6 md:pt-8 pb-0">
        <div className={containerClassName}>
          <p className="text-[#FF5C96] text-[11px] md:text-xs font-medium tracking-[0.38em] uppercase mb-3 [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]">
            {t("gallery.subtitle")}
          </p>
          <h1 className="text-white text-2xl md:text-4xl font-black tracking-tight uppercase mb-4">
            {t("gallery.title")}
          </h1>

          <div className="flex flex-wrap gap-3 xl:grid xl:grid-cols-8 xl:gap-3">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`text-[10px] tracking-[0.22em] uppercase px-4 py-2.5 border transition-all duration-200 cursor-pointer xl:w-full xl:text-center ${
                  filter === f.key
                    ? "border-[#FF2D7B]/60 text-[#FF2D7B] bg-white/[0.03]"
                    : "border-white/12 text-white/35 bg-transparent hover:border-white/25 hover:text-white/60"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {filtered.length > 0 ? (
        <GalleryGrid
          artworks={filtered}
          surfaceClassName="bg-transparent"
          sectionClassName="pt-16 md:pt-20"
          containerClassName={containerClassName}
          imageClassName="xl:h-[min(48.5vh,36.5rem)] xl:aspect-auto"
        />
      ) : (
        <section className="relative z-10 pt-16 md:pt-20 pb-12 md:pb-16">
          <div className={`${containerClassName} border border-white/10 bg-black/28 backdrop-blur-[2px] px-6 py-10 md:px-10 md:py-14`}>
            <p className="text-[#FF2D7B] text-[10px] md:text-xs tracking-[0.5em] uppercase mb-3">
              {activeFilterLabel}
            </p>
            <h2 className="text-white text-2xl md:text-4xl font-black tracking-tight uppercase mb-3">
              {t("gallery.empty_title")}
            </h2>
            <p className="max-w-2xl text-white/45 text-sm md:text-base leading-relaxed">
              {t("gallery.empty_text")}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
