"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/i18n";

export default function ArtistBlock() {
  const t = useT();

  return (
    <section id="artist" className="scroll-mt-16 md:scroll-mt-20 bg-black pt-0 pb-20 md:pb-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div className="relative aspect-[4/5] bg-neutral-900 overflow-hidden self-start">
          <Image
            src="/artist/dujari-artist-portrait.jpg"
            alt="Portrait of Dujari"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover portrait-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/55 hidden md:block" />
        </div>

        <div className="md:pt-14 lg:pt-16 flex flex-col items-start">
          <p className="text-[#FF2D7B] text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4">
            {t("artist_block.label")}
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-black tracking-tight uppercase mb-6">
            DUJARI
          </h2>
          <p className="text-white/50 text-sm md:text-base leading-relaxed mb-10 max-w-xl">
            {t("artist.quote")}
          </p>

          <Link
            href="/artist"
            className="inline-flex w-[18.5rem] justify-center border border-white/15 text-white/55 text-xs tracking-[0.35em] uppercase px-10 py-4 mt-2 hover:border-white/28 hover:text-white/75 transition-all duration-300"
          >
            {t("artist_block.cta_path")}
          </Link>
        </div>
      </div>
    </section>
  );
}
