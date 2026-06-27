"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-purple-500 to-cyan-400 origin-left z-[100] shadow-[0_0_20px_rgba(99,102,241,0.6)]"
      style={{ scaleX }}
    />
  );
}
