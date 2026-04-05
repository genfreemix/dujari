"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface Spark {
  id: number;
  x: number;
  y: number;
  tx: number;
  ty: number;
  size: number;
  duration: number;
  color: string;
  trail: boolean;
}

const SPARK_COLORS = [
  "#fffbe6", "#ffe066", "#ffb833", "#ff8c1a",
  "#ff4d4d", "#ffffff", "#ffee99",
];

export function useSparkEffect() {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [flashPos, setFlashPos] = useState<{ x: number; y: number } | null>(null);
  const [mounted, setMounted] = useState(false);
  const sparkIdRef = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const triggerSpark = useCallback((e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;

    setFlashPos({ x, y });
    setTimeout(() => setFlashPos(null), 200);

    const newSparks: Spark[] = [];
    for (let i = 0; i < 35; i++) {
      sparkIdRef.current += 1;
      const angle = Math.random() * Math.PI * 2;
      const dist = 50 + Math.random() * 150;
      newSparks.push({
        id: sparkIdRef.current,
        x, y,
        tx: x + Math.cos(angle) * dist,
        ty: y + Math.sin(angle) * dist + 30 * Math.random(),
        size: 2 + Math.random() * 6,
        duration: 400 + Math.random() * 500,
        color: SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)],
        trail: Math.random() > 0.5,
      });
    }

    setSparks((prev) => [...prev, ...newSparks]);
    const ids = newSparks.map((s) => s.id);
    setTimeout(() => {
      setSparks((prev) => prev.filter((s) => !ids.includes(s.id)));
    }, 1000);
  }, []);

  const SparkLayer = () => {
    if (!mounted) return null;
    return createPortal(
      <>
        {flashPos && (
          <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9999 }}>
            <div
              style={{
                position: "absolute", left: flashPos.x, top: flashPos.y,
                width: 300, height: 300, transform: "translate(-50%, -50%)",
                background: "radial-gradient(circle, rgba(255,255,230,0.9) 0%, rgba(255,200,50,0.5) 30%, rgba(255,100,0,0.2) 60%, transparent 80%)",
                borderRadius: "50%", animation: "electric-flash 0.2s ease-out forwards",
              }}
            />
            <div
              style={{
                position: "absolute", left: flashPos.x, top: flashPos.y,
                width: 60, height: 60, transform: "translate(-50%, -50%)",
                background: "radial-gradient(circle, #fff 0%, rgba(255,240,180,0.8) 50%, transparent 100%)",
                borderRadius: "50%", animation: "electric-flash 0.15s ease-out forwards",
              }}
            />
          </div>
        )}
        {sparks.length > 0 && (
          <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9998 }}>
            {sparks.map((spark) => (
              <div
                key={spark.id}
                style={{
                  position: "absolute", left: spark.x, top: spark.y,
                  width: spark.size,
                  height: spark.trail ? spark.size * 3 : spark.size,
                  borderRadius: spark.trail ? "50% 50% 50% 50% / 30% 30% 70% 70%" : "50%",
                  background: spark.color,
                  boxShadow: `0 0 ${spark.size * 2}px ${spark.size}px ${spark.color}`,
                  animation: `spark-move ${spark.duration}ms ease-out forwards`,
                  "--spark-end-x": `${spark.tx - spark.x}px`,
                  "--spark-end-y": `${spark.ty - spark.y}px`,
                } as React.CSSProperties}
              />
            ))}
          </div>
        )}
      </>,
      document.body
    );
  };

  return { triggerSpark, SparkLayer };
}
