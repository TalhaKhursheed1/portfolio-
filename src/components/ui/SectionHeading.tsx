"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ label, title, description }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const line = lineRef.current;
    if (!el) return;

    const chars = el.querySelectorAll(".title-char");
    gsap.fromTo(
      chars,
      { y: 60, opacity: 0, rotateX: -40 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.03,
        duration: 0.8,
        ease: "back.out(1.4)",
        scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
      }
    );

    if (line) {
      gsap.fromTo(line, { scaleX: 0 }, {
        scaleX: 1,
        duration: 1.2,
        ease: "power3.inOut",
        scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
      });
    }
  }, []);

  return (
    <div ref={ref} className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
      <motion.span
        initial={{ opacity: 0, letterSpacing: "0.1em" }}
        whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="inline-block text-xs font-mono uppercase text-accent mb-4"
      >
        {label}
      </motion.span>

      <h2 className="text-3xl md:text-5xl font-bold mb-4 overflow-hidden" style={{ perspective: 600 }}>
        {title.split("").map((char, i) => (
          <span
            key={i}
            className="title-char inline-block"
            style={{ transformOrigin: "bottom center" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>

      <div
        ref={lineRef}
        className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent mb-4 origin-center"
      />

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
