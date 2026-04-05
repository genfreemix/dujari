"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useT } from "@/i18n";

export default function Footer() {
  const t = useT();
  const pathname = usePathname();

  if (pathname.startsWith("/artwork/")) return null;

  return (
    <footer className="bg-black border-t border-white/10 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.25fr_0.8fr_0.85fr] gap-10 md:gap-8 items-start">
          <div className="relative overflow-hidden rounded-[28px] border border-white/6 bg-white/[0.02] px-6 py-7 md:px-8 md:py-8">
            <div className="pointer-events-none absolute -left-14 top-0 h-36 w-36 rounded-full bg-[#ff7a00]/18 blur-3xl" />
            <div className="pointer-events-none absolute left-18 top-8 h-28 w-28 rounded-full bg-[#FF2D7B]/12 blur-3xl" />
            <Link href="/" className="relative inline-flex flex-col items-start group">
              <span className="text-[11px] tracking-[0.45em] uppercase text-[#FF2D7B] mb-3">
                Collectible Pop-Art
              </span>
              <span className="bg-gradient-to-r from-[#fff4d6] via-[#ffb85b] to-[#FF2D7B] bg-clip-text text-transparent font-black text-5xl md:text-6xl tracking-[0.16em] uppercase leading-none transition-opacity duration-200 group-hover:opacity-90">
                DUJARI
              </span>
              <span className="mt-4 h-px w-32 bg-gradient-to-r from-[#FF2D7B] via-[#ff9b42] to-transparent" />
            </Link>
            <div className="relative mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] tracking-[0.3em] uppercase text-white/38">
              <span>France / Europe</span>
              <span>1/1 Originals</span>
              <span>No Reproductions</span>
            </div>
            <p className="relative mt-5 text-white/52 text-base leading-relaxed max-w-md">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="text-white/60 text-xs tracking-[0.25em] uppercase mb-4">
              {t("footer.explore")}
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/gallery" className="text-white/40 text-sm hover:text-white transition-colors">{t("nav.gallery")}</Link>
              <Link href="/artist" className="text-white/40 text-sm hover:text-white transition-colors">{t("nav.artist")}</Link>
              <Link href="/contact" className="text-white/40 text-sm hover:text-white transition-colors">{t("nav.contact")}</Link>
            </nav>
          </div>

          <div>
            <h4 className="text-white/60 text-xs tracking-[0.25em] uppercase mb-4">
              {t("footer.get_in_touch")}
            </h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@dujari.art" className="text-white/40 text-sm hover:text-[#FF2D7B] transition-colors">
                hello@dujari.art
              </a>
              <a href="https://wa.me/33600000000" target="_blank" rel="noopener noreferrer" className="text-white/40 text-sm hover:text-[#25D366] transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs tracking-wider">
            © {new Date().getFullYear()} DUJARI. {t("footer.rights")}
          </p>
          <p className="text-white/20 text-xs tracking-wider">
            {t("footer.no_repro")}
          </p>
        </div>
      </div>
    </footer>
  );
}
