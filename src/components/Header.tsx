"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/artist", label: "Artist" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="text-white font-black text-2xl md:text-3xl tracking-[0.3em] uppercase">
          DUJARI
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
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
        </nav>
      )}
    </header>
  );
}
