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
          <div className="md:grid md:grid-cols-[minmax(0,1fr)_18rem] md:gap-12 lg:gap-16 md:items-start">
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
            </div>

            <div className="mt-12 pt-10 border-t border-white/5 flex flex-col gap-3 md:mt-0 md:pt-0 md:border-t-0 md:self-start md:items-start">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-[17.5rem] min-h-12 items-center justify-center gap-2 border border-white/20 text-white/60 text-[11px] tracking-[0.28em] uppercase px-6 py-3.5 hover:border-[#25D366]/50 hover:text-white transition-all duration-300"
              >
                WhatsApp
              </a>
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-[17.5rem] min-h-12 items-center justify-center gap-2 border border-white/20 text-white/60 text-[11px] tracking-[0.28em] uppercase px-6 py-3.5 hover:border-[#2AABEE]/50 hover:text-white transition-all duration-300"
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
