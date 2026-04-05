import Link from "next/link";

export default function ArtistBlock() {
  return (
    <section className="bg-black py-20 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Portrait placeholder */}
        <div className="relative aspect-[4/5] bg-neutral-900 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #1A1A2E 0%, #0A0A0A 50%, #FF2D7B15 100%)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/10 text-[120px] md:text-[180px] font-black uppercase select-none leading-none">
              D
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        {/* Bio */}
        <div>
          <p className="text-[#FF2D7B] text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4">
            The Artist
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-black tracking-tight uppercase mb-6">
            DUJARI
          </h2>
          <p className="text-white/50 text-sm md:text-base leading-relaxed mb-4">
            Born from the collision of street culture and gallery ambition.
            DUJARI turns everyday objects into collectible art — bottles that
            tell stories, panels that scream silence.
          </p>
          <p className="text-white/50 text-sm md:text-base leading-relaxed mb-8">
            Each piece is hand-painted. Each piece is 1/1. No prints. No
            reproductions. When it&apos;s gone, it&apos;s gone.
          </p>
          <Link
            href="/artist"
            className="inline-block border border-white/20 text-white/70 text-xs tracking-[0.3em] uppercase px-8 py-4 hover:border-white/50 hover:text-white transition-all duration-200"
          >
            Full Story
          </Link>
        </div>
      </div>
    </section>
  );
}
