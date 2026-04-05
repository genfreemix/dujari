import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-black text-xl tracking-[0.3em] uppercase mb-4">
              DUJARI
            </h3>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Collectible pop-art objects. Each piece is unique. Each piece is a statement.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/60 text-xs tracking-[0.25em] uppercase mb-4">
              Explore
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/gallery" className="text-white/40 text-sm hover:text-white transition-colors">Gallery</Link>
              <Link href="/artist" className="text-white/40 text-sm hover:text-white transition-colors">Artist</Link>
              <Link href="/contact" className="text-white/40 text-sm hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/60 text-xs tracking-[0.25em] uppercase mb-4">
              Get in touch
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@dujari.art"
                className="text-white/40 text-sm hover:text-[#FF2D7B] transition-colors"
              >
                hello@dujari.art
              </a>
              <a
                href="https://wa.me/33600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 text-sm hover:text-[#25D366] transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs tracking-wider">
            © {new Date().getFullYear()} DUJARI. All rights reserved.
          </p>
          <p className="text-white/20 text-xs tracking-wider">
            Every piece is 1/1. No reproductions.
          </p>
        </div>
      </div>
    </footer>
  );
}
