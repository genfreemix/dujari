"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/i18n";

export default function ArtistBlock() {
  const t = useT();

  return (
    <section id="artist" className="scroll-mt-16 md:scroll-mt-20 bg-black py-20 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div className="relative aspect-[4/5] bg-neutral-900 overflow-hidden self-start">
          <Image
            src="/artist/dujari-artist-portrait.jpg"
            alt="Portrait of Dujari"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
        </div>

        <div className="md:pt-14 lg:pt-16">
          <p className="text-[#FF2D7B] text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4">
            {t("artist_block.label")}
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-black tracking-tight uppercase mb-6">
            DUJARI
          </h2>
          <p className="text-white/50 text-sm md:text-base leading-relaxed mb-4">
            {t("artist_block.bio1")}
          </p>
          <p className="text-white/50 text-sm md:text-base leading-relaxed mb-8">
            {t("artist_block.bio2")}
          </p>
          <Link
            href="/artist"
            className="inline-block border border-white/20 text-white/70 text-xs tracking-[0.3em] uppercase px-8 py-4 hover:border-white/50 hover:text-white transition-all duration-200"
          >
            {t("artist_block.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
