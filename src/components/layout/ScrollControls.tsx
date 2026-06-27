"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";
import { useSmoothScroll } from "@/components/layout/SmoothScroll";

export function InitialScrollToProjects() {
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    if (window.location.hash) return;

    const timer = window.setTimeout(() => {
      scrollTo("#projects", { immediate: false });
    }, 600);

    return () => window.clearTimeout(timer);
  }, [scrollTo]);

  return null;
}

export default function ScrollToTop() {
  const { scrollTo } = useSmoothScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 24, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          onClick={() => scrollTo(0)}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 group"
        >
          <span className="absolute inset-0 rounded-full bg-accent/30 blur-xl scale-150 opacity-60 group-hover:opacity-100 transition-opacity" />
          <span className="relative flex flex-col items-center justify-center w-14 h-14 rounded-full btn-shiny border border-white/20 shadow-[0_0_30px_rgba(99,102,241,0.45)] overflow-hidden">
            <span className="absolute inset-0 btn-shine-sweep bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 flex flex-col items-center"
            >
              <HiArrowUp className="text-xl text-white drop-shadow-sm" />
              <span className="w-4 h-0.5 rounded-full bg-white/70 mt-0.5" />
            </motion.span>
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
