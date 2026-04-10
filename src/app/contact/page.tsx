"use client";

import InquiryButton from "@/components/InquiryButton";
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

  return (
    <div className="pt-20 md:pt-24 bg-black min-h-screen">
      <section className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#FF2D7B] text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4">
            {t("contact.label")}
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight uppercase mb-6 whitespace-pre-line">
            {t("contact.title")}
          </h1>
          <p className="text-white/50 text-sm md:text-base leading-relaxed mb-12 max-w-lg">
            {t("contact.text")}
          </p>

          <InquiryButton className="mb-16" />

          <div className="border-t border-white/10 pt-12 mt-0">
            <h2 className="text-white text-xl font-black tracking-tight uppercase mb-10">
              {t("contact.how_title")}
            </h2>
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

            <div className="mt-12 pt-10 border-t border-white/5 flex flex-col sm:flex-row gap-3">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
