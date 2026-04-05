"use client";

import { useSparkEffect } from "@/hooks/useSparkEffect";

export default function BodyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { triggerSpark, SparkLayer } = useSparkEffect();

  return (
    <div onClick={triggerSpark} className="min-h-full flex flex-col">
      <SparkLayer />
      {children}
    </div>
  );
}
