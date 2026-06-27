"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (prefersReduced || isTouch || window.innerWidth < 1024) return;

    setEnabled(true);

    const update = () => {
      const el = glowRef.current;
      if (el) {
        el.style.transform = `translate(${pos.current.x - 200}px, ${pos.current.y - 200}px)`;
      }
      rafId.current = 0;
    };

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!rafId.current) rafId.current = requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block will-change-transform"
    >
      <div className="w-[400px] h-[400px] rounded-full bg-accent/6 blur-[80px]" />
    </div>
  );
}
