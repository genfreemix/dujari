"use client";

import Link from "next/link";
import { useT } from "@/i18n";

export default function ContactPage() {
  const t = useT();

  const steps = [
    { title: t("contact.step1_title"), text: t("contact.step1_text") },
    { title: t("contact.step2_title"), text: t("contact.step2_text") },
    { title: t("contact.step3_title"), text: t("contact.step3_text") },
    { title: t("contact.step4_title"), text: t("contact.step4_text") },
  ];

  return (
    <div className="pt-14 md:pt-16 bg-black min-h-screen">
      <section className="pt-10 pb-20 md:pt-12 md:pb-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
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
                    <p className="text-white/40 text-sm leading-relaxed max-w-md mx-auto">{step.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-10 border-t border-white/5 flex justify-center">
                <Link
                  href="/gallery"
                  className="inline-flex min-h-12 items-center justify-center border border-white/20 text-white/60 text-[11px] tracking-[0.28em] uppercase px-10 py-3.5 hover:border-white/35 hover:text-white transition-all duration-300"
                >
                  {t("nav.gallery")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
