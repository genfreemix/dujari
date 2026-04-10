"use client";

import HeroSection from "@/components/HeroSection";
import GalleryGrid from "@/components/GalleryGrid";
import ArtistBlock from "@/components/ArtistBlock";
import ContactCTASection from "@/components/ContactCTASection";
import { getFeatured } from "@/data/artworks";
import { useT } from "@/i18n";

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
    </>
  );
}
