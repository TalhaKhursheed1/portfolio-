"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const screenSlides = [
  { title: "KasaStay", color: "#10b981", lines: ["Find Homes", "Book Instantly", "Chat & Pay"] },
  { title: "Ardent", color: "#06b6d4", lines: ["RYA Courses", "Offline Mode", "Live Support"] },
  { title: "Deliver Cart", color: "#8b5cf6", lines: ["Add to Cart", "Stripe Pay", "Track Order"] },
];

// Fixed positions — avoids SSR/client float precision mismatch from Math.sin/cos
const ORBIT_PARTICLES = [
  { top: "50%", left: "95%" },
  { top: "81.82%", left: "81.82%" },
  { top: "95%", left: "50%" },
  { top: "81.82%", left: "18.18%" },
  { top: "50%", left: "5%" },
  { top: "18.18%", left: "18.18%" },
  { top: "5%", left: "50%" },
  { top: "18.18%", left: "81.82%" },
];

export default function PhoneMockup() {
  const phoneRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!phoneRef.current) return;

    gsap.to(phoneRef.current, {
      y: -20,
      rotationY: 8,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const slides = screenRef.current?.querySelectorAll(".screen-slide");
    if (!slides?.length) return;

    const tl = gsap.timeline({ repeat: -1 });
    slides.forEach((_, i) => {
      if (i === 0) return;
      tl.to(screenRef.current, {
        yPercent: -100 * i,
        duration: 0.8,
        ease: "power2.inOut",
        delay: 2.5,
      });
    });
    tl.to(screenRef.current, { yPercent: 0, duration: 0.8, ease: "power2.inOut", delay: 2.5 });
  }, []);

  return (
    <div className="relative flex items-center justify-center" style={{ perspective: 1200 }}>
      {/* Glow rings */}
      <motion.div
        className="absolute w-[420px] h-[420px] rounded-full border border-accent/20"
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity } }}
      />
      <motion.div
        className="absolute w-[480px] h-[480px] rounded-full border border-dashed border-purple-500/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating particles around phone */}
      {ORBIT_PARTICLES.map((pos, i) => (
        <motion.span
          key={i}
          className="absolute w-2 h-2 rounded-full bg-accent/60 blur-[1px]"
          style={{ top: pos.top, left: pos.left }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      <div
        ref={phoneRef}
        className="relative w-[260px] h-[520px] rounded-[3rem] p-3 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 shadow-[0_0_60px_rgba(99,102,241,0.4),0_40px_80px_rgba(0,0,0,0.6)] ring-1 ring-white/10"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Side buttons */}
        <div className="absolute -left-[3px] top-28 w-[3px] h-10 bg-zinc-600 rounded-l" />
        <div className="absolute -left-[3px] top-44 w-[3px] h-16 bg-zinc-600 rounded-l" />
        <div className="absolute -right-[3px] top-36 w-[3px] h-20 bg-zinc-600 rounded-r" />

        <div className="relative w-full h-full rounded-[2.4rem] overflow-hidden bg-black ring-1 ring-white/5">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-20 flex items-end justify-center pb-0.5">
            <div className="w-2 h-2 rounded-full bg-zinc-800 ring-1 ring-zinc-700" />
          </div>

          {/* Animated screen */}
          <div ref={screenRef} className="h-full overflow-hidden">
            {screenSlides.map((slide) => (
              <div
                key={slide.title}
                className="screen-slide h-full flex flex-col p-5 pt-10"
                style={{ background: `linear-gradient(160deg, ${slide.color}22, #0a0a12)` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono text-white/50">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-1.5 bg-white/60 rounded-sm" />
                    <div className="w-1 h-1.5 bg-white/40 rounded-sm" />
                  </div>
                </div>
                <motion.div
                  className="w-10 h-10 rounded-2xl mb-4 flex items-center justify-center text-lg font-bold"
                  style={{ backgroundColor: `${slide.color}33`, color: slide.color }}
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {slide.title[0]}
                </motion.div>
                <p className="text-white font-semibold text-lg mb-1">{slide.title}</p>
                <p className="text-white/40 text-[10px] font-mono mb-5">React Native · Expo</p>
                <div className="space-y-2 flex-1">
                  {slide.lines.map((line, i) => (
                    <motion.div
                      key={line}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15, repeat: Infinity, repeatDelay: 3 }}
                      className="glass rounded-xl px-3 py-2.5 text-xs text-white/80 border border-white/5"
                    >
                      {line}
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  className="mt-auto h-10 rounded-full flex items-center justify-center text-xs font-semibold text-white"
                  style={{ background: `linear-gradient(90deg, ${slide.color}, ${slide.color}88)` }}
                  animate={{ boxShadow: [`0 0 0px ${slide.color}`, `0 0 20px ${slide.color}66`, `0 0 0px ${slide.color}`] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Open App
                </motion.div>
              </div>
            ))}
          </div>

          {/* Scan line */}
          <motion.div
            className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent z-10 pointer-events-none"
            animate={{ top: ["10%", "90%", "10%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
}
