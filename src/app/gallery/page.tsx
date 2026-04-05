"use client";

import { useState } from "react";
import GalleryGrid from "@/components/GalleryGrid";
import { artworks, getByCategory } from "@/data/artworks";

type Filter = "all" | "bottle" | "panel";

export default function GalleryPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all"
      ? artworks
      : getByCategory(filter);

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "All" },
    { key: "bottle", label: "Art Bottles" },
    { key: "panel", label: "Panels" },
  ];

  return (
    <div className="pt-20 md:pt-24">
      {/* Header */}
      <section className="bg-black py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#FF2D7B] text-[10px] md:text-xs tracking-[0.5em] uppercase mb-3">
            Collection 001 — Origins
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight uppercase mb-8">
            Gallery
          </h1>

          {/* Filters */}
          <div className="flex gap-4">
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
