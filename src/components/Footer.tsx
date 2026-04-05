"use client";

import Link from "next/link";
import { useT } from "@/i18n";

export default function Footer() {
  const t = useT();

  return (
    <footer className="bg-black border-t border-white/10 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <h3 className="text-white font-black text-xl tracking-[0.3em] uppercase mb-4">
              DUJARI
            </h3>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
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
