"use client";

import { useEffect, useRef, useState } from "react";

interface Dot {
  id: number;
  x: number;
  y: number;
}

const LIFETIME_MS = 180;
const MAX_DOTS = 5;
const STEP_PX = 32;
const MAX_DOTS_PER_FRAME = 1;

export function CursorTrail() {
  const [dots, setDots] = useState<Dot[]>([]);
  const idRef = useRef(0);
  const pendingRef = useRef<{ x: number; y: number } | null>(null);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pendingRef.current = { x: e.clientX, y: e.clientY };
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const p = pendingRef.current;
        if (!p) return;
        const last = lastPosRef.current;
        const fresh: Dot[] = [];
        if (!last) {
          fresh.push({ id: idRef.current++, x: p.x, y: p.y });
        } else {
          const dx = p.x - last.x;
          const dy = p.y - last.y;
          const dist = Math.hypot(dx, dy);
          const steps = Math.min(
            MAX_DOTS_PER_FRAME,
            Math.max(1, Math.ceil(dist / STEP_PX)),
          );
          for (let i = 1; i <= steps; i++) {
            const t = i / steps;
            fresh.push({
              id: idRef.current++,
              x: last.x + dx * t,
              y: last.y + dy * t,
            });
          }
        }
        lastPosRef.current = p;
        setDots((prev) => {
          const combined = prev.concat(fresh);
          return combined.length > MAX_DOTS
            ? combined.slice(combined.length - MAX_DOTS)
            : combined;
        });
        for (const d of fresh) {
          window.setTimeout(() => {
            setDots((prev) => prev.filter((x) => x.id !== d.id));
          }, LIFETIME_MS);
        }
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="cursor-trail-layer pointer-events-none fixed inset-0 z-[100]"
      aria-hidden="true"
    >
      {dots.map((d) => (
        <span key={d.id} className="cursor-trail-dot" style={{ left: d.x, top: d.y }} />
      ))}
    </div>
  );
}
