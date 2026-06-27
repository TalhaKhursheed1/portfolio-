"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";
import { useSmoothScroll } from "@/components/layout/SmoothScroll";

let initialProjectsScrollDone = false;

export function InitialScrollToProjects() {
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    if (initialProjectsScrollDone) return;
    if (window.location.hash) return;

    initialProjectsScrollDone = true;

    const timer = window.setTimeout(() => {
      scrollTo("#projects", { immediate: false });
    }, 600);

    return () => window.clearTimeout(timer);
  }, [scrollTo]);

  return null;
}

export default function ScrollToTop() {
  const { scrollTo, scrollProgress } = useSmoothScroll();
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setNearFooter(entry.isIntersecting),
      { threshold: 0.05, rootMargin: "0px 0px 0px 0px" }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const visible = scrollProgress > 0.72 || nearFooter;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 sm:bottom-8 sm:left-auto sm:translate-x-0 sm:right-8 pointer-events-none"
        >
          <motion.button
            type="button"
            onClick={() => scrollTo(0)}
            aria-label="Scroll to top"
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.94 }}
            className="pointer-events-auto group flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted/80 group-hover:text-accent-light transition-colors duration-300">
              Back to top
            </span>

            <span className="relative flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14">
              <span className="absolute inset-0 rounded-full bg-accent/20 blur-lg scale-110 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute inset-0 rounded-full border border-accent/30 animate-[pulse_2.4s_ease-in-out_infinite]" />
              <span className="absolute inset-[3px] rounded-full border border-white/10" />

              <span className="relative flex h-full w-full items-center justify-center rounded-full glass border border-white/20 bg-gradient-to-br from-accent/35 via-indigo-500/20 to-cyan-500/25 shadow-[0_10px_40px_rgba(99,102,241,0.35)] overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-700 ease-out" />
                <motion.span
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <HiArrowUp className="text-xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]" />
                </motion.span>
              </span>
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
