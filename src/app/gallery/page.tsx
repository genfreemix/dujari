"use client";

import { useState } from "react";
import ArtworkCard from "@/components/ArtworkCard";
import GalleryGrid from "@/components/GalleryGrid";
import { artworks, getByCategory } from "@/data/artworks";
import { useT } from "@/i18n";

type Filter = "all" | "bottle" | "panel";

export default function GalleryPage() {
  const t = useT();
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = filter === "all" ? artworks : getByCategory(filter);
  const firstFoldArtworks = filtered.slice(0, 4);
  const remainingArtworks = filtered.slice(4);

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t("gallery.filter_all") },
    { key: "bottle", label: t("gallery.filter_bottles") },
    { key: "panel", label: t("gallery.filter_panels") },
  ];

  return (
    <div className="bg-black pt-16 md:pt-20">
      <div className="xl:min-h-[calc(100vh-5rem)] xl:flex xl:flex-col">
        <section className="bg-black pt-6 md:pt-8 pb-0">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-[#FF2D7B] text-[10px] md:text-xs tracking-[0.5em] uppercase mb-3">
              {t("gallery.subtitle")}
            </p>
            <h1 className="text-white text-2xl md:text-4xl font-black tracking-tight uppercase mb-4">
              {t("gallery.title")}
            </h1>

            <div className="flex gap-3">
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

        <section className="hidden xl:flex flex-1 bg-black pt-10 pb-8">
          <div className="max-w-7xl mx-auto px-6 w-full h-full">
            <div className="grid h-full grid-cols-4 gap-4 items-end">
              {firstFoldArtworks.map((artwork, i) => (
                <ArtworkCard
                  key={artwork.id}
                  artwork={artwork}
                  priority={i < 4}
                  className="h-full"
                  imageClassName="h-full aspect-auto"
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="xl:hidden">
        <GalleryGrid artworks={filtered} />
      </div>

      {remainingArtworks.length > 0 && (
        <div className="hidden xl:block">
          <GalleryGrid artworks={remainingArtworks} />
        </div>
      )}
    </div>
  );
}
