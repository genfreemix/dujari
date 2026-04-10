"use client";

import { useT } from "@/i18n";

export default function ContactPage() {
  const t = useT();

  const steps = [
    { title: t("contact.step1_title"), text: t("contact.step1_text") },
    { title: t("contact.step2_title"), text: t("contact.step2_text") },
    { title: t("contact.step3_title"), text: t("contact.step3_text") },
    { title: t("contact.step4_title"), text: t("contact.step4_text") },
  ];

  const whatsappUrl = `https://wa.me/33600000000?text=${encodeURIComponent("Hi! I'm interested in DUJARI artworks.")}`;
  const telegramUrl = `https://t.me/dujari`;
  const mailUrl = `mailto:hello@dujari.art?subject=${encodeURIComponent("Inquiry about DUJARI artwork")}`;
  const phoneUrl = `tel:+33600000000`;

  return (
    <div className="pt-20 md:pt-24 bg-black min-h-screen">
      <section className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div>
            <h1 className="text-white text-3xl md:text-5xl font-black tracking-tight uppercase mb-10">
              {t("contact.how_title")}
            </h1>
            <div className="space-y-10">
              {steps.map((step) => (
                <div key={step.title}>
                  <h3 className="text-white text-xs tracking-[0.35em] uppercase mb-3 font-bold">
                    {step.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed max-w-md">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-10 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/60 text-xs tracking-[0.3em] uppercase px-8 py-4 hover:border-[#25D366]/50 hover:text-white transition-all duration-300"
              >
                WhatsApp
              </a>
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/60 text-xs tracking-[0.3em] uppercase px-8 py-4 hover:border-[#2AABEE]/50 hover:text-white transition-all duration-300"
              >
                Telegram
              </a>
              <a
                href={mailUrl}
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/60 text-xs tracking-[0.3em] uppercase px-8 py-4 hover:border-white/35 hover:text-white transition-all duration-300"
              >
                {t("inquiry.email")}
              </a>
              <a
                href={phoneUrl}
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/60 text-xs tracking-[0.3em] uppercase px-8 py-4 hover:border-white/35 hover:text-white transition-all duration-300"
              >
                {t("inquiry.call")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
