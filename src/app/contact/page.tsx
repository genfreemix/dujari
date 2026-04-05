"use client";

import InquiryButton from "@/components/InquiryButton";
import { useT } from "@/i18n";

export default function ContactPage() {
  const t = useT();

  const faq = [
    { q: t("contact.q1"), a: t("contact.a1") },
    { q: t("contact.q2"), a: t("contact.a2") },
    { q: t("contact.q3"), a: t("contact.a3") },
    { q: t("contact.q4"), a: t("contact.a4") },
  ];

  return (
    <div className="pt-20 md:pt-24 bg-black min-h-screen">
      <section className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#FF2D7B] text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4">
            {t("contact.label")}
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight uppercase mb-6">
            {t("contact.title")}
          </h1>
          <p className="text-white/50 text-sm md:text-base leading-relaxed mb-12 max-w-lg">
            {t("contact.text")}
          </p>

          <InquiryButton className="mb-16" />

          <div className="border-t border-white/10 pt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white/60 text-xs tracking-[0.25em] uppercase mb-3">
                {t("contact.email")}
              </h3>
              <a href="mailto:hello@dujari.art" className="text-white text-lg hover:text-[#FF2D7B] transition-colors">
                hello@dujari.art
              </a>
            </div>
            <div>
              <h3 className="text-white/60 text-xs tracking-[0.25em] uppercase mb-3">
                {t("contact.whatsapp")}
              </h3>
              <a href="https://wa.me/33600000000" target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-[#25D366] transition-colors">
                +33 6 00 00 00 00
              </a>
            </div>
            <div>
              <h3 className="text-white/60 text-xs tracking-[0.25em] uppercase mb-3">
                {t("contact.instagram")}
              </h3>
              <a href="https://instagram.com/dujari.art" target="_blank" rel="noopener noreferrer" className="text-white text-lg hover:text-[#FF2D7B] transition-colors">
                @dujari.art
              </a>
            </div>
            <div>
              <h3 className="text-white/60 text-xs tracking-[0.25em] uppercase mb-3">
                {t("contact.location")}
              </h3>
              <p className="text-white text-lg">{t("contact.location_value")}</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-12 mt-12">
            <h2 className="text-white text-xl font-black tracking-tight uppercase mb-8">
              {t("contact.how_title")}
            </h2>
            <div className="space-y-6">
              {faq.map((item) => (
                <div key={item.q} className="border-l-2 border-white/10 pl-6">
                  <h3 className="text-white text-sm font-bold mb-2">{item.q}</h3>
                  <p className="text-white/40 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
