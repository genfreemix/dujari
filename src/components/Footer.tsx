"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useT } from "@/i18n";

export default function Footer() {
  const t = useT();
  const pathname = usePathname();

  if (pathname.startsWith("/artwork/")) return null;
  if (pathname === "/gallery") return null;
  if (pathname === "/poetry") return null;

  return (
    <footer className="bg-black border-t border-white/10 py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-10 items-start">
          <div className="text-center md:text-left">
            <Link href="/" className="inline-flex flex-col items-center md:items-start">
              <span className="text-white text-2xl md:text-3xl font-black tracking-[0.18em] uppercase">
                DUJARI
              </span>
              <span className="mt-3 text-white/35 text-[11px] tracking-[0.28em] uppercase">
                {t("footer.originals")}
              </span>
            </Link>
          </div>

          <div className="justify-self-center text-center">
            <nav className="flex flex-col gap-3">
              <Link href="/gallery" className="text-white/42 text-sm hover:text-white/70 transition-colors">{t("nav.gallery")}</Link>
              <Link href="/artist" className="text-white/42 text-sm hover:text-white/70 transition-colors">{t("nav.artist")}</Link>
              <Link href="/contact" className="text-white/42 text-sm hover:text-white/70 transition-colors">{t("nav.contact")}</Link>
            </nav>
          </div>

          <div className="text-center md:text-right">
            <div className="flex flex-col gap-2.5 items-center md:items-end">
              <a href="mailto:hello@dujari.art" className="inline-flex items-center text-white/42 text-sm leading-none hover:text-white/70 transition-colors duration-200">
                hello@dujari.art
              </a>
              <div className="inline-flex items-center gap-2 text-white/42 text-sm leading-none">
                <a href="https://wa.me/33600000000" target="_blank" rel="noopener noreferrer" className="text-white/42 hover:text-white/70 transition-colors duration-200">
                  WhatsApp
                </a>
                <span className="text-white/24">·</span>
                <a href="https://t.me/dujari" target="_blank" rel="noopener noreferrer" className="text-white/42 hover:text-white/70 transition-colors duration-200">
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/20 text-xs tracking-[0.18em] uppercase">
            © 2026 DUJARI
          </p>
          <p className="text-white/20 text-xs tracking-[0.18em] uppercase text-center md:text-right">
            {t("footer.one_of_one")}
          </p>
        </div>
      </div>
    </footer>
  );
}
