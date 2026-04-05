import InquiryButton from "@/components/InquiryButton";

export default function ContactPage() {
  return (
    <div className="pt-20 md:pt-24 bg-black min-h-screen">
      <section className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#FF2D7B] text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4">
            Get in Touch
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-black tracking-tight uppercase mb-6">
            Let&apos;s talk art
          </h1>
          <p className="text-white/50 text-sm md:text-base leading-relaxed mb-12 max-w-lg">
            Interested in a piece? Have a question? Want to commission something
            unique? Reach out directly — no forms, no queues, just a
            conversation.
          </p>

          <InquiryButton className="mb-16" />

          {/* Direct contacts */}
          <div className="border-t border-white/10 pt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white/60 text-xs tracking-[0.25em] uppercase mb-3">
                Email
              </h3>
              <a
                href="mailto:hello@dujari.art"
                className="text-white text-lg hover:text-[#FF2D7B] transition-colors"
              >
                hello@dujari.art
              </a>
            </div>
            <div>
              <h3 className="text-white/60 text-xs tracking-[0.25em] uppercase mb-3">
                WhatsApp
              </h3>
              <a
                href="https://wa.me/33600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg hover:text-[#25D366] transition-colors"
              >
                +33 6 00 00 00 00
              </a>
            </div>
            <div>
              <h3 className="text-white/60 text-xs tracking-[0.25em] uppercase mb-3">
                Instagram
              </h3>
              <a
                href="https://instagram.com/dujari.art"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg hover:text-[#FF2D7B] transition-colors"
              >
                @dujari.art
              </a>
            </div>
            <div>
              <h3 className="text-white/60 text-xs tracking-[0.25em] uppercase mb-3">
                Location
              </h3>
              <p className="text-white text-lg">
                France / Europe
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="border-t border-white/10 pt-12 mt-12">
            <h2 className="text-white text-xl font-black tracking-tight uppercase mb-8">
              How it works
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "How do I buy a piece?",
                  a: "Send a request via WhatsApp or email. We'll confirm availability, arrange payment, and ship worldwide.",
                },
                {
                  q: "Can I see a piece in person?",
                  a: "Yes — by appointment. Contact us to arrange a viewing.",
                },
                {
                  q: "Do you ship internationally?",
                  a: "Yes. Secure packaging, insured shipping, worldwide delivery.",
                },
                {
                  q: "Can I commission a custom piece?",
                  a: "Absolutely. Tell us your vision — we'll make it happen.",
                },
              ].map((item) => (
                <div key={item.q} className="border-l-2 border-white/10 pl-6">
                  <h3 className="text-white text-sm font-bold mb-2">
                    {item.q}
                  </h3>
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
