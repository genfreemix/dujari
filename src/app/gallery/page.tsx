"use client";

import { useState } from "react";
import GalleryGrid from "@/components/GalleryGrid";
import { artworks, getByCategory } from "@/data/artworks";
import { useT } from "@/i18n";

type Filter = "all" | "bottle" | "panel";

export default function GalleryPage() {
  const t = useT();
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = filter === "all" ? artworks : getByCategory(filter);

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t("gallery.filter_all") },
    { key: "bottle", label: t("gallery.filter_bottles") },
    { key: "panel", label: t("gallery.filter_panels") },
  ];

  return (
    <div className="pt-16 md:pt-[72px]">
      <section className="bg-black pt-3 md:pt-4 pb-0">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#FF2D7B] text-[10px] md:text-xs tracking-[0.5em] uppercase mb-1">
            {t("gallery.subtitle")}
          </p>
          <h1 className="text-white text-2xl md:text-4xl font-black tracking-tight uppercase mb-2">
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

      <GalleryGrid artworks={filtered} />
    </div>
  );
}
