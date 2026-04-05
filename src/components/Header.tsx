"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useI18n, type Locale } from "@/i18n";

const LOCALES: { key: Locale; label: string }[] = [
  { key: "en", label: "EN" },
  { key: "ru", label: "RU" },
  { key: "fr", label: "FR" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { locale, setLocale, t } = useI18n();

  const NAV_ITEMS = [
    { href: "/", label: t("nav.home") },
    { href: "/gallery", label: t("nav.gallery") },
    { href: "/artist", label: t("nav.artist") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="text-white font-black text-2xl md:text-3xl tracking-[0.3em] uppercase">
          DUJARI
        </Link>

        {/* Desktop nav + lang */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs tracking-[0.25em] uppercase transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-[#FF2D7B]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language switcher */}
          <div className="flex items-center gap-1 border-l border-white/10 pl-6">
            {LOCALES.map((l) => (
              <button
                key={l.key}
                onClick={() => setLocale(l.key)}
                className={`text-[10px] tracking-[0.15em] px-2 py-1 transition-colors duration-200 cursor-pointer ${
                  locale === l.key
                    ? "text-[#FF2D7B] font-bold"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-white transition-transform duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition-transform duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-black border-t border-white/10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block px-6 py-4 text-sm tracking-[0.25em] uppercase border-b border-white/5 ${
                pathname === item.href
                  ? "text-[#FF2D7B]"
                  : "text-white/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
          {/* Mobile lang */}
          <div className="flex items-center gap-2 px-6 py-4 border-b border-white/5">
            {LOCALES.map((l) => (
              <button
                key={l.key}
                onClick={() => { setLocale(l.key); setOpen(false); }}
                className={`text-xs tracking-[0.15em] px-3 py-1.5 border transition-colors cursor-pointer ${
                  locale === l.key
                    ? "border-[#FF2D7B] text-[#FF2D7B]"
                    : "border-white/10 text-white/40"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
