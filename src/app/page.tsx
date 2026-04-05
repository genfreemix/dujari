import HeroSection from "@/components/HeroSection";
import GalleryGrid from "@/components/GalleryGrid";
import ArtistBlock from "@/components/ArtistBlock";
import InquiryButton from "@/components/InquiryButton";
import { getFeatured } from "@/data/artworks";
import Link from "next/link";

export default function HomePage() {
  const featured = getFeatured();

  return (
    <>
      <HeroSection />

      {/* Featured works */}
      <GalleryGrid
        artworks={featured}
        title="Selected Works"
        subtitle="Collection 001 — Origins"
      />

      {/* CTA banner */}
      <section className="bg-black py-16 md:py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight uppercase mb-4">
            Every piece is 1/1
          </h2>
          <p className="text-white/40 text-sm md:text-base mb-8 max-w-lg mx-auto">
            No prints. No reproductions. Once it&apos;s claimed, it&apos;s gone forever.
            Don&apos;t wait — request your piece now.
          </p>
          <InquiryButton className="justify-center" />
        </div>
      </section>

      {/* Artist block */}
      <ArtistBlock />

      {/* Final CTA */}
      <section className="bg-black py-20 md:py-28 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#FF2D7B] text-xs tracking-[0.5em] uppercase mb-4">
            The Collection
          </p>
          <h2 className="text-white text-3xl md:text-5xl font-black tracking-tight uppercase mb-8">
            See everything
          </h2>
          <Link
            href="/gallery"
            className="inline-block bg-[#FF2D7B] text-white text-xs tracking-[0.3em] uppercase px-10 py-4 hover:bg-[#e0256b] transition-colors duration-200"
          >
            View Full Gallery
          </Link>
        </div>
      </section>
    </>
  );
}
