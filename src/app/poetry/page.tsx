"use client";

import Link from "next/link";
import { useT } from "@/i18n";

const POEM2_LINES = [
  "Голая правда —",
  "Озлобились сны.",
  "Теперь каждой ночью",
  "Не спать, а бояться…",
  "Всевышнего,",
  "Горя, остывшей любви.",
  "Нам просто так страшно",
  "В нелепом признаться.",
  "Надо.",
  "И нет многоточия — есть суета…",
  "Так хочется этой весной",
  "Похмелиться.",
  "Ждать",
  "И пресыщенно",
  "Верить мечтам,",
  "Творить перманентно,",
  "Жить торопиться!",
];

function PoemMono({ text, date }: { text: string; date?: string }) {
  const lines = text.split("\n");
  return (
    <div>
      <div className="font-mono text-white/80 text-sm leading-[1.75] tracking-wide">
        {lines.map((line, i) =>
          line === "" ? <br key={i} /> : <p key={i}>{line}</p>
        )}
      </div>
      {date && (
        <p className="mt-3 text-white/20 text-[10px] tracking-[0.35em] font-mono">
          {date}
        </p>
      )}
    </div>
  );
}

function PoemSans({ lines }: { lines: string[] }) {
  return (
    <div>
      <div className="font-sans text-white/80 text-sm leading-[1.75] tracking-wide italic">
        {lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default function PoetryPage() {
  const t = useT();

  return (
    <div className="min-h-screen bg-black pt-16 md:pt-20 flex flex-col">
      <main className="flex-1 px-6 md:px-12 pt-4 md:pt-5">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          <PoemMono text={t("poetry.poem1")} date={t("poetry.date")} />
          <PoemSans lines={POEM2_LINES} />
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

