"use client";

import Link from "next/link";
import { useT } from "@/i18n";

export default function PoetryPage() {
  const t = useT();
  const lines = t("poetry.poem1").split("\n");

  return (
    <div className="min-h-screen bg-black pt-16 md:pt-20 flex flex-col">
      {/* Back */}
      <div className="max-w-3xl mx-auto w-full px-6 pt-10 md:pt-16">
        <Link
          href="/artist"
          className="text-white/30 text-[10px] tracking-[0.4em] uppercase hover:text-[#FF2D7B] transition-colors duration-200"
        >
          {t("poetry.back")}
        </Link>
      </div>

      {/* Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 md:py-20">
        {/* Label */}
        <p className="text-[#FF2D7B] text-[10px] tracking-[0.55em] uppercase mb-6">
          {t("poetry.label")}
        </p>

        {/* Glitch title */}
        <h1
          className="glitch-text text-white text-4xl md:text-6xl font-black tracking-[0.15em] uppercase mb-16 md:mb-20"
          data-text={t("poetry.title")}
        >
          {t("poetry.title")}
        </h1>

        {/* Poem */}
        <div className="w-full max-w-lg">
          <div className="font-mono text-white/80 text-base md:text-lg leading-[2.2] tracking-wide">
            {lines.map((line, i) =>
              line === "" ? (
                <br key={i} />
              ) : (
                <p key={i}>{line}</p>
              )
            )}
          </div>

          {/* Date */}
          <p className="mt-10 text-white/20 text-[11px] tracking-[0.35em] font-mono">
            {t("poetry.date")}
          </p>
        </div>
      </main>

      {/* Ambient glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 60%, #FF2D7B08 0%, transparent 55%), radial-gradient(ellipse at 75% 30%, #00eaff05 0%, transparent 50%)",
        }}
      />
    </div>
  );
}
