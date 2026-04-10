"use client";

import Link from "next/link";
import { useT } from "@/i18n";

export default function ContactCTASection() {
  const t = useT();

  const whatsappUrl = `https://wa.me/33600000000?text=${encodeURIComponent("Hi! I'm interested in DUJARI artworks.")}`;
  const telegramUrl = `https://t.me/dujari`;

  return (
    <section className="bg-black py-16 md:py-24 border-t border-white/5">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-[#FF2D7B] text-[10px] md:text-xs tracking-[0.5em] uppercase mb-3">
          {t("contact.label")}
        </p>
        <h2 className="text-white text-3xl md:text-5xl font-black tracking-tight uppercase mb-4 leading-tight">
          {t("contact.title")}
        </h2>
        <p className="text-white/40 text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto">
          {t("contact.text")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-white/20 text-white/65 text-xs tracking-[0.35em] uppercase px-10 py-4 hover:border-[#25D366]/50 hover:text-white transition-all duration-300"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="opacity-60 shrink-0"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.347 0-4.518-.803-6.237-2.148l-.354-.293-3.665 1.229 1.229-3.665-.293-.354A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            {t("inquiry.whatsapp")}
          </a>
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-white/20 text-white/65 text-xs tracking-[0.35em] uppercase px-10 py-4 hover:border-[#2AABEE]/50 hover:text-white transition-all duration-300"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="opacity-60 shrink-0"
            >
              <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            {t("inquiry.telegram")}
          </a>
        </div>

        <Link
          href="/contact"
          className="mt-4 inline-block text-[11px] tracking-[0.2em] text-white/30 hover:text-white/55 transition-colors duration-200"
        >
          {t("contact.how_title")} →
        </Link>
      </div>
    </section>
  );
}
