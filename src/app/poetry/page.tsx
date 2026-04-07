"use client";

import Link from "next/link";
import { useT } from "@/i18n";

export default function PoetryPage() {
  const t = useT();
  const lines = t("poetry.poem1").split("\n");

  return (
    <div className="min-h-screen bg-black pt-16 md:pt-20 flex flex-col">

      {/* Content */}
      <main className="flex-1 px-6 md:px-12 pt-3 md:pt-4">
        {/* Poem */}
        <div className="max-w-sm">
          <div className="font-mono text-white/80 text-sm md:text-base leading-[1.75] tracking-wide">
            {lines.map((line, i) =>
              line === "" ? (
                <br key={i} />
              ) : (
                <p key={i}>{line}</p>
              )
            )}
          </div>

          {/* Date */}
          <p className="mt-4 text-white/20 text-[10px] tracking-[0.35em] font-mono">
            {t("poetry.date")}
          </p>

          {/* Back — below date */}
          <div className="mt-5">
            <Link
              href="/artist"
              className="text-white/20 text-[10px] tracking-[0.4em] uppercase hover:text-[#FF2D7B] transition-colors duration-200"
            >
              {t("poetry.back")}
            </Link>
          </div>
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
