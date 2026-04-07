"use client";

import Link from "next/link";
import { useT } from "@/i18n";

function PoemBlock({ text, date }: { text: string; date?: string }) {
  const lines = text.split("\n");
  return (
    <div className="max-w-[260px]">
      <div className="font-[family-name:var(--font-jetbrains-mono)] text-white/80 text-sm leading-[1.75] tracking-wide">
        {lines.map((line, i) =>
          line === "" ? <br key={i} /> : <p key={i}>{line}</p>
        )}
      </div>
      {date && (
        <p className="mt-3 text-white/20 text-[10px] tracking-[0.35em] font-[family-name:var(--font-jetbrains-mono)]">
          {date}
        </p>
      )}
    </div>
  );
}

export default function PoetryPage() {
  const t = useT();

  const poems: { key: string; date?: string }[] = [
    { key: "poetry.poem1", date: t("poetry.date") },
    { key: "poetry.poem2" },
    { key: "poetry.poem3" },
    { key: "poetry.poem4" },
    { key: "poetry.poem5" },
  ];

  return (
    <div className="min-h-screen bg-black pt-16 md:pt-20 flex flex-col">
      <main className="flex-1 px-6 md:px-12 pt-4 md:pt-5">

        {/* Grid */}
        <div className="flex flex-wrap gap-x-12 gap-y-10">
          {poems.map((poem) => (
            <PoemBlock key={poem.key} text={t(poem.key)} date={poem.date} />
          ))}
        </div>

        {/* Back */}
        <div className="mt-10">
          <Link
            href="/artist"
            className="text-white/20 text-[10px] tracking-[0.4em] uppercase hover:text-[#FF2D7B] transition-colors duration-200"
          >
            {t("poetry.back")}
          </Link>
        </div>
      </main>

      {/* Ambient glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 60%, #FF2D7B08 0%, transparent 55%), radial-gradient(ellipse at 75% 30%, #00eaff05 0%, transparent 50%)",
        }}
      />
    </div>
  );
}


