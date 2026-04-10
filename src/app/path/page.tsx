"use client";

import Link from "next/link";
import { useT } from "@/i18n";

export default function PathPage() {
  const t = useT();

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
      <p className="text-[#FF2D7B] text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4">
        {t("artist_block.cta_path")}
      </p>
      <h1 className="text-white text-3xl md:text-5xl font-black tracking-tight uppercase mb-6">
        DUJARI
      </h1>
      <p className="text-white/40 text-sm md:text-base tracking-wide">
        {t("path.coming_soon")}
      </p>
      <Link
        href="/#artist"
        className="mt-12 inline-flex border border-white/15 text-white/45 text-xs tracking-[0.35em] uppercase px-8 py-3 hover:border-white/28 hover:text-white/65 transition-all duration-300"
      >
        ← {t("nav.artist")}
      </Link>
    </main>
  );
}
