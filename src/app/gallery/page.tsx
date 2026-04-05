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
    { key: "pictures", label: t("gallery.filter_pictures") },
    { key: "posters", label: t("gallery.filter_posters") },
    { key: "merch", label: t("gallery.filter_merch") },
  ];
  const activeFilterLabel = filters.find((item) => item.key === filter)?.label ?? t("gallery.filter_all");

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-black pt-16 md:pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45"
        style={{ backgroundImage: "url('/gallery/gallery-background.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,45,123,0.12),transparent_38%),linear-gradient(180deg,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.82)_100%)]" />

      <section className="relative z-10 pt-6 md:pt-8 pb-0">
        <div className={containerClassName}>
          <p className="text-[#FF2D7B] text-[10px] md:text-xs tracking-[0.5em] uppercase mb-3">
            {t("gallery.subtitle")}
          </p>
          <h1 className="text-white text-2xl md:text-4xl font-black tracking-tight uppercase mb-4">
            {t("gallery.title")}
          </h1>

          <div className="flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`text-xs tracking-[0.25em] uppercase px-4 py-2 border transition-all duration-200 cursor-pointer ${
                  filter === f.key
                    ? "border-[#FF2D7B] text-[#FF2D7B]"
                    : "border-white/10 text-white/40 hover:text-white/70 hover:border-white/30"
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
          <div className={`${containerClassName} border border-white/10 bg-black/45 backdrop-blur-[2px] px-6 py-10 md:px-10 md:py-14`}>
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
