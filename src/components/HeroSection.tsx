"use client";

import Link from "next/link";
import { useT } from "@/i18n";

export default function HeroSection() {
  const t = useT();
  const disciplines = [
    t("home.discipline_visual_title"),
    t("home.discipline_music_title"),
    t("home.discipline_poetry_title"),
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
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

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="text-[#FF2D7B] text-xs md:text-sm tracking-[0.5em] uppercase mb-6 font-medium">
          {t("hero.tagline")}
        </p>

        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] uppercase">
          {t("hero.line1")}
          <br />
          <span className="text-[#FF2D7B]">{t("hero.line2_cant")}</span>{" "}{t("hero.line2_ignore")}
        </h1>

        <p className="text-white/50 text-sm md:text-base mt-8 max-w-md mx-auto leading-relaxed">
          {t("hero.sub")}
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {disciplines.map((discipline) => (
            <span
              key={discipline}
              className="border border-white/12 bg-white/[0.03] px-4 py-2 text-[10px] md:text-[11px] tracking-[0.34em] uppercase text-white/58 backdrop-blur-sm"
            >
              {discipline}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/gallery"
            className="inline-block bg-[#FF2D7B] text-white text-xs tracking-[0.3em] uppercase px-10 py-4 hover:bg-[#e0256b] transition-colors duration-200"
          >
            {t("hero.cta_collection")}
          </Link>
          <Link
            href="/#artist"
            className="inline-block border border-white/20 text-white/70 text-xs tracking-[0.3em] uppercase px-10 py-4 hover:border-white/50 hover:text-white transition-all duration-200"
          >
            {t("hero.cta_artist")}
          </Link>
        </div>
      </div>

    </section>
  );
}
