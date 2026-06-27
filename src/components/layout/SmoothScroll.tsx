"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollContextType = {
  scrollTo: (target: string | number, options?: { immediate?: boolean }) => void;
  scrollProgress: number;
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
  scrollProgress: 0,
});

export const useSmoothScroll = () => useContext(ScrollContext);

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const progressTicking = useRef(false);

  const updateProgress = useCallback(() => {
    if (progressTicking.current) return;
    progressTicking.current = true;

    requestAnimationFrame(() => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const y = window.scrollY || document.documentElement.scrollTop;
      setScrollProgress(max > 0 ? Math.min(1, Math.max(0, y / max)) : 0);
      progressTicking.current = false;
    });
  }, []);

  const scrollTo = useCallback((target: string | number, options?: { immediate?: boolean }) => {
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
  }, []);

  useEffect(() => {
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [updateProgress]);

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
    lenis.on("scroll", () => {
      ScrollTrigger.update();
      updateProgress();
    });

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
  }, [updateProgress]);

  const contextValue = useMemo(
    () => ({ scrollTo, scrollProgress }),
    [scrollTo, scrollProgress]
  );

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
}
