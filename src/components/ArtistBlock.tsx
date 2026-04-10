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

        <div className="md:pt-14 lg:pt-16">
          <p className="text-[#FF2D7B] text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4">
            {t("artist_block.label")}
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-black tracking-tight uppercase mb-6">
            DUJARI
          </h2>
          <p className="text-white/50 text-sm md:text-base leading-relaxed mb-2">
            {t("artist_block.bio1")}
          </p>
          <p className="text-white/50 text-sm md:text-base leading-loose whitespace-pre-line mb-6">
            {t("artist_block.bio2")}
          </p>

          {/* Discipline chips */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="inline-flex items-center border border-white/[0.08] bg-transparent px-5 py-2.5 text-[10px] tracking-[0.42em] uppercase text-white/45">
              {t("artist.field_music_title")}
            </span>
            <Link
              href="/poetry"
              className="inline-flex items-center border border-white/[0.08] bg-transparent px-5 py-2.5 text-[10px] tracking-[0.42em] uppercase text-white/45 hover:text-white/65 hover:border-white/20 transition-all duration-300"
            >
              {t("artist.field_poetry_title")}
            </Link>
          </div>

          <div className="mb-8">
            <Link
              href="/path"
              className="inline-flex items-center border border-white/[0.08] bg-transparent px-[1.4rem] py-2.5 text-[10px] tracking-[0.46em] uppercase text-white/52 hover:text-white/68 hover:border-white/18 transition-all duration-300"
            >
              {t("artist_block.cta_path")}
            </Link>
          </div>

          <Link
            href="/artist"
            className="inline-block border border-white/15 text-white/55 text-xs tracking-[0.35em] uppercase px-10 py-4 mt-2 hover:border-white/28 hover:text-white/75 transition-all duration-300"
          >
            {t("artist_block.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
