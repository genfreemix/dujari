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

  return (
    <div className="pt-14 md:pt-16 bg-black min-h-screen">
      <section className="pt-10 pb-20 md:pt-12 md:pb-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl mb-14 md:mb-16">
            <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight uppercase mb-6 whitespace-pre-line">
              {t("contact.title")}
            </h1>
            <p className="text-white/50 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
              {t("contact.text")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-[17.5rem] min-h-12 items-center justify-center gap-2 border border-white/20 text-white/60 text-[11px] tracking-[0.28em] uppercase px-6 py-3.5 hover:border-[#25D366]/50 hover:text-white transition-all duration-300"
              >
                WhatsApp
              </a>
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-[17.5rem] min-h-12 items-center justify-center gap-2 border border-white/20 text-white/60 text-[11px] tracking-[0.28em] uppercase px-6 py-3.5 hover:border-[#2AABEE]/50 hover:text-white transition-all duration-300"
              >
                Telegram
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-white text-3xl md:text-5xl font-black tracking-tight uppercase mb-10">
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
          </div>
        </div>
      </section>
    </div>
  );
}
