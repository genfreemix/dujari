"use client";

import Link from "next/link";
import { useT } from "@/i18n";

export default function ContactPage() {
  const t = useT();

  const steps = [
    { title: t("contact.step2_title"), text: t("contact.step2_text") },
    { title: t("contact.step3_title"), text: t("contact.step3_text") },
    { title: t("contact.step4_title"), text: t("contact.step4_text") },
  ];

  const whatsappUrl = "https://wa.me/XXXXXXXXXXX";
  const telegramUrl = "https://t.me/username";

  return (
    <div className="pt-14 md:pt-16 bg-black min-h-screen">
      <section className="pt-10 pb-10 md:pt-12 md:pb-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div>
              <h1 className="text-white text-3xl md:text-5xl font-black tracking-tight uppercase mb-8">
                {t("contact.how_title")}
              </h1>
              <div className="space-y-7 md:space-y-8">
                <div>
                  <h3 className="text-white text-xs tracking-[0.35em] uppercase mb-2.5 font-bold">
                    {t("contact.step1_title")}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed max-w-md mx-auto">
                    {t("contact.step1_text_start")}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/58 underline decoration-white/20 underline-offset-4 hover:text-white/80 hover:decoration-white/45 transition-colors duration-200"
                    >
                      WhatsApp
                    </a>
                    {t("contact.step1_text_middle")}
                    <a
                      href={telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/58 underline decoration-white/20 underline-offset-4 hover:text-white/80 hover:decoration-white/45 transition-colors duration-200"
                    >
                      Telegram
                    </a>
                    {t("contact.step1_text_end")}
                  </p>
                </div>
                {steps.map((step) => (
                  <div key={step.title}>
                    <h3 className="text-white text-xs tracking-[0.35em] uppercase mb-2.5 font-bold">
                      {step.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed max-w-md mx-auto">{step.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.03] flex justify-center">
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center text-[11px] tracking-[0.28em] uppercase text-white/45 hover:text-white/70 transition-colors duration-200"
                >
                  {t("contact.view_works")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
