import InquiryButton from "@/components/InquiryButton";
import Link from "next/link";

export default function ArtistPage() {
  return (
    <div className="pt-20 md:pt-24 bg-black min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, #FF2D7B15 0%, transparent 50%), radial-gradient(ellipse at 20% 70%, #FFE60010 0%, transparent 50%), #0A0A0A",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Portrait */}
          <div className="relative aspect-[4/5] bg-neutral-900 overflow-hidden order-2 md:order-1">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #1A1A2E 0%, #0A0A0A 50%, #FF2D7B20 100%)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/8 text-[200px] md:text-[280px] font-black uppercase select-none leading-none">
                D
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <p className="text-[#FF2D7B] text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4">
              The Artist
            </p>
            <h1 className="text-white text-5xl md:text-7xl font-black tracking-tight uppercase mb-8">
              DUJARI
            </h1>
            <p className="text-white/50 text-lg md:text-xl leading-relaxed italic mb-6">
              &ldquo;I don&apos;t paint bottles. I give them a voice.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-white text-2xl md:text-3xl font-black tracking-tight uppercase mb-8">
            The Story
          </h2>
          <div className="space-y-6 text-white/50 text-sm md:text-base leading-relaxed">
            <p>
              DUJARI emerged from the collision of street culture and gallery
              ambition. Growing up surrounded by graffiti, vinyl records, and the
              raw energy of underground music — the artist developed a visual
              language that refuses to be categorized.
            </p>
            <p>
              The bottles started as a provocation: &ldquo;Why does art need a canvas?&rdquo;
              Taking iconic bottles — the ones you&apos;d find in any bar, any city — and
              transforming them into unrepeatable objects. Pop-art meets punk.
              Gallery meets garage.
            </p>
            <p>
              The panels followed naturally. Larger canvases for the same raw
              energy. Textures that demand touch. Colors that refuse to whisper.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-white text-2xl md:text-3xl font-black tracking-tight uppercase mb-8">
            Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "1/1 Only",
                text: "Every piece is a unique original. No editions, no prints, no reproductions. When it's gone, it's gone.",
              },
              {
                title: "Object as Art",
                text: "A bottle isn't just a bottle. It's a sculptural canvas. It's pop culture archaeology. It's collectible.",
              },
              {
                title: "Raw & Real",
                text: "No digital assistance. No templates. Every stroke is intentional. Every imperfection is a feature.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t border-white/10 pt-6">
                <h3 className="text-white text-sm tracking-[0.2em] uppercase font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-white text-3xl md:text-4xl font-black tracking-tight uppercase mb-4">
            Want to own a DUJARI?
          </h2>
          <p className="text-white/40 text-sm md:text-base mb-8">
            Reach out directly. No middlemen. No algorithms. Just art and
            conversation.
          </p>
          <InquiryButton className="justify-center" />
          <div className="mt-8">
            <Link
              href="/gallery"
              className="text-white/40 text-xs tracking-[0.25em] uppercase hover:text-white/70 transition-colors"
            >
              ← View the Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
