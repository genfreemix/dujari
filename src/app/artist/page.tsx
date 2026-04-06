"use client";

import InquiryButton from "@/components/InquiryButton";
import Image from "next/image";
import Link from "next/link";
import { useT } from "@/i18n";

export default function ArtistPage() {
  const t = useT();

  const philosophy = [
    { title: t("artist.phil1_title"), text: t("artist.phil1_text") },
    { title: t("artist.phil2_title"), text: t("artist.phil2_text") },
    { title: t("artist.phil3_title"), text: t("artist.phil3_text") },
  ];

  return (
    <div className="pt-16 md:pt-20 bg-black min-h-screen">
      {/* Hero */}
      <section className="relative pt-8 md:pt-10 pb-20 md:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, #FF2D7B15 0%, transparent 50%), radial-gradient(ellipse at 20% 70%, #FFE60010 0%, transparent 50%), #0A0A0A",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative aspect-[4/5] bg-neutral-900 overflow-hidden order-2 md:order-1">
            <Image
              src="/artist/dujari-artist-portrait.jpg"
              alt="Portrait of Dujari"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
          </div>

          <div className="order-1 md:order-2">
            <p className="text-[#FF2D7B] text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4">
              {t("artist_block.label")}
            </p>
            <h1 className="text-white text-5xl md:text-7xl font-black tracking-tight uppercase mb-8">
              DUJARI
            </h1>
            <p className="text-white/50 text-lg md:text-xl leading-relaxed italic mb-6">
              {t("artist.quote")}
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-white text-2xl md:text-3xl font-black tracking-tight uppercase mb-8">
            {t("artist.story_title")}
          </h2>
          <div className="space-y-6 text-white/50 text-sm md:text-base leading-relaxed">
            <p>{t("artist.story1")}</p>
            <p>{t("artist.story2")}</p>
            <p>{t("artist.story3")}</p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-white text-2xl md:text-3xl font-black tracking-tight uppercase mb-8">
            {t("artist.philosophy")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item) => (
              <div key={item.title} className="border-t border-white/10 pt-6">
                <h3 className="text-white text-sm tracking-[0.2em] uppercase font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
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
