"use client";

import Link from "next/link";
import { useT } from "@/i18n";

export default function HeroSection() {
  const t = useT();

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-black">
      {/* Background visual */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, #FF2D7B22 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, #FFE60015 0%, transparent 50%), #0A0A0A",
        }}
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-14 lg:px-20">
        {/* Overline */}
        <p className="text-[#FF2D7B] text-[10px] tracking-[0.6em] uppercase mb-8 md:mb-10 font-medium">
          {t("hero.tagline")}
        </p>

        {/* Headline */}
        <h1 className="font-black leading-none tracking-tight">
          <span className="block text-3xl md:text-5xl lg:text-6xl text-white/80 mb-3 md:mb-4">
            {t("hero.line1")}
          </span>
          <span className="block text-5xl md:text-8xl lg:text-[9rem] text-[#FF2D7B] leading-[0.88]">
            {t("hero.line2_cant")}
          </span>
        </h1>

        {/* Secondary atmospheric line */}
        <p className="text-white/52 text-sm md:text-base italic tracking-[0.08em] leading-relaxed mt-8 md:mt-10 max-w-xs md:max-w-sm">
          {t("hero.sub")}
        </p>

        {/* Disciplines line */}
        <p className="text-white/35 text-[13px] tracking-[0.07em] mt-2 max-w-xs md:max-w-sm">
          {t("hero.disciplines_line")}
        </p>

        {/* CTA */}
        <div className="mt-10 md:mt-12 flex items-start">
          <Link
            href="/gallery"
            className="inline-block bg-[#FF2D7B] text-white text-xs tracking-[0.3em] uppercase px-10 py-4 hover:bg-[#e0256b] transition-colors duration-200"
          >
            {t("hero.cta_collection")}
          </Link>
        </div>

        {/* Micro-line */}
        <p className="text-white/28 text-[11px] tracking-[0.1em] mt-5">
          {t("hero.micro")}
        </p>
      </div>

    </section>
  );
}
