"use client";

import HeroSection from "@/components/HeroSection";
import GalleryGrid from "@/components/GalleryGrid";
import ArtistBlock from "@/components/ArtistBlock";
import InquiryButton from "@/components/InquiryButton";
import { getFeatured } from "@/data/artworks";
import { useT } from "@/i18n";
import Link from "next/link";

export default function HomePage() {
  const t = useT();
  const featured = getFeatured();
  const disciplines = [
    {
      title: t("home.discipline_visual_title"),
      text: t("home.discipline_visual_text"),
    },
    {
      title: t("home.discipline_music_title"),
      text: t("home.discipline_music_text"),
    },
    {
      title: t("home.discipline_poetry_title"),
      text: t("home.discipline_poetry_text"),
    },
  ];

  return (
    <>
      <HeroSection />

      <section className="relative overflow-hidden border-t border-white/5 bg-black py-8 md:py-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,45,123,0.09),transparent_30%),radial-gradient(circle_at_85%_100%,rgba(255,230,0,0.06),transparent_28%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="mb-5 text-[10px] md:text-xs tracking-[0.45em] uppercase text-white/28">
            {t("home.disciplines_label")}
          </p>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
            {disciplines.map((discipline) => (
              <div
                key={discipline.title}
                className="relative overflow-hidden border border-white/8 bg-white/[0.02] px-5 py-5 backdrop-blur-sm"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#FF2D7B] via-white/25 to-transparent" />
                <h2 className="mb-2 text-sm md:text-base font-black tracking-[0.22em] uppercase text-white">
                  {discipline.title}
                </h2>
                <p className="max-w-xs text-sm leading-relaxed text-white/44">
                  {discipline.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GalleryGrid
        artworks={featured}
        title={t("home.featured_title")}
        subtitle={t("home.featured_subtitle")}
      />

      <section className="bg-black py-16 md:py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight uppercase mb-4">
            {t("home.unique_title")}
          </h2>
          <p className="text-white/40 text-sm md:text-base mb-8 max-w-lg mx-auto">
            {t("home.unique_text")}
          </p>
          <InquiryButton className="justify-center" />
        </div>
      </section>

      <ArtistBlock />

      <section className="bg-black py-20 md:py-28 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#FF2D7B] text-xs tracking-[0.5em] uppercase mb-4">
            {t("home.collection_label")}
          </p>
          <h2 className="text-white text-3xl md:text-5xl font-black tracking-tight uppercase mb-8">
            {t("home.see_all")}
          </h2>
          <Link
            href="/gallery"
            className="inline-block bg-[#FF2D7B] text-white text-xs tracking-[0.3em] uppercase px-10 py-4 hover:bg-[#e0256b] transition-colors duration-200"
          >
            {t("home.view_gallery")}
          </Link>
        </div>
      </section>
    </>
  );
}
