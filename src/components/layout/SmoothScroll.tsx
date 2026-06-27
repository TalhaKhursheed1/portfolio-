"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollContextType = {
  scrollTo: (target: string | number, options?: { immediate?: boolean }) => void;
};

const ScrollContext = createContext<ScrollContextType>({
  scrollTo: (target, options) => {
    if (typeof target === "string") {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: options?.immediate ? "auto" : "smooth" });
      }
      return;
    }
    window.scrollTo({ top: target, behavior: options?.immediate ? "auto" : "smooth" });
  },
});

export const useSmoothScroll = () => useContext(ScrollContext);

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  const scrollTo = (target: string | number, options?: { immediate?: boolean }) => {
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(target, { immediate: options?.immediate });
      return;
    }

    if (typeof target === "string") {
      document.querySelector(target)?.scrollIntoView({
        behavior: options?.immediate ? "auto" : "smooth",
      });
      return;
    }

    window.scrollTo({ top: target, behavior: options?.immediate ? "auto" : "smooth" });
  };

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (prefersReduced || isTouch) return;

    const lenis = new Lenis({
      duration: 0.85,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollTo }}>{children}</ScrollContext.Provider>
  );
}
