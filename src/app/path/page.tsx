"use client";

import Link from "next/link";
import { useT } from "@/i18n";

export default function PathPage() {
  const t = useT();

  return (
    <div className="pt-16 md:pt-20 bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-xl mx-auto px-6 text-center">
        <p className="text-[#FF2D7B] text-[10px] tracking-[0.6em] uppercase mb-8">
          DUJARI
        </p>
        <p className="text-white/28 text-xs tracking-[0.15em] uppercase">
          —
        </p>
        <div className="mt-12">
          <Link
            href="/#artist"
            className="text-white/30 text-[10px] tracking-[0.3em] uppercase hover:text-white/55 transition-colors duration-300"
          >
            {t("artist.back_gallery")}
          </Link>
        </div>
      </div>
    </div>
  );
}
