"use client";

import InquiryButton from "@/components/InquiryButton";
import Image from "next/image";
import Link from "next/link";
import { useT } from "@/i18n";


export default function ArtistPage() {
  const t = useT();

  return (
    <div className="pt-16 md:pt-20 bg-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] overflow-hidden flex items-stretch">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, #FF2D7B15 0%, transparent 50%), radial-gradient(ellipse at 20% 70%, #FFE60010 0%, transparent 50%), #0A0A0A",
          }}
        />

        <div className="relative max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-stretch">
          <div className="relative h-64 md:h-auto bg-neutral-900 overflow-hidden order-1 md:order-1">
            <Image
              src="/artist/dujari-artist-portrait-camera.png"
              alt="Portrait of Dujari"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover object-[46%_22%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
          </div>

          <div className="order-2 md:order-2 flex flex-col justify-center">
            <p className="text-[#FF2D7B] text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4">
              {t("artist_block.label")}
            </p>
            <h1 className="text-white text-5xl md:text-7xl font-black tracking-tight uppercase mb-8">
              DUJARI
            </h1>
            <p className="text-white/65 text-lg md:text-xl leading-relaxed mb-8 md:mb-10 max-w-xl">
              {t("artist.quote")}
            </p>

            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <span className="inline-flex items-center justify-center border border-white/[0.08] bg-transparent px-5 py-2.5 text-[10px] md:text-[11px] tracking-[0.42em] uppercase text-white/45">
                {t("artist.field_music_title")}
              </span>
              <Link
                href="/poetry"
                className="inline-flex items-center justify-center border border-white/[0.08] bg-transparent px-5 py-2.5 text-[10px] md:text-[11px] tracking-[0.42em] uppercase text-white/45 hover:text-white/65 hover:border-white/20 transition-all duration-300"
              >
                {t("artist.field_poetry_title")}
              </Link>
            </div>

            <Link
              href="/path"
              className="inline-flex w-[18.5rem] self-start justify-center border border-white/15 text-white/55 text-xs tracking-[0.35em] uppercase px-10 py-4 mt-8 hover:border-white/28 hover:text-white/75 transition-all duration-300"
            >
              {t("artist_block.cta_path")}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight uppercase mb-4">
            {t("artist.cta_title")}
          </h2>
          <p className="text-white/40 text-sm md:text-base mb-8">
            {t("artist.cta_text")}
          </p>
          <InquiryButton className="justify-center" />
          <div className="mt-8">
            <Link
              href="/gallery"
              className="text-white/40 text-xs tracking-[0.25em] uppercase hover:text-white/70 transition-colors"
            >
              {t("artist.back_gallery")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
