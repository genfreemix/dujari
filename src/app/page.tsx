"use client";

import HeroSection from "@/components/HeroSection";
import GalleryGrid from "@/components/GalleryGrid";
import ArtistBlock from "@/components/ArtistBlock";
import ContactCTASection from "@/components/ContactCTASection";
import { getFeatured } from "@/data/artworks";
import { useT } from "@/i18n";
import Link from "next/link";

export default function HomePage() {
  const t = useT();
  const featured = getFeatured();

  return (
    <>
      <HeroSection />

      <GalleryGrid
        artworks={featured}
        title={t("home.featured_title")}
        subtitle={t("home.featured_subtitle")}
      />

      <ContactCTASection />

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
