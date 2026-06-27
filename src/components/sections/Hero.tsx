"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { personalInfo, heroRoles } from "@/data/portfolio";
import MagneticButton from "@/components/ui/MagneticButton";
import PhoneMockup from "@/components/ui/PhoneMockup";
import { HiArrowDown, HiDownload } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";

const codeLines = [
  "import { App } from 'expo-router';",
  "const deploy = async () => {",
  "  await build({ platform: 'all' });",
  "  publish('App Store & Play Store');",
  "};",
];

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedLines, setTypedLines] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % heroRoles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!nameRef.current) return;
    const chars = nameRef.current.querySelectorAll(".char");
    gsap.fromTo(
      chars,
      { y: 120, opacity: 0, rotateX: -90, filter: "blur(8px)" },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        filter: "blur(0px)",
        duration: 1.2,
        stagger: 0.035,
        ease: "back.out(1.7)",
        delay: 0.3,
      }
    );
  }, []);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    const lines: string[] = ["", "", "", "", ""];

    const type = () => {
      if (lineIndex >= codeLines.length) return;
      const current = codeLines[lineIndex];
      if (charIndex <= current.length) {
        lines[lineIndex] = current.slice(0, charIndex);
        setTypedLines([...lines]);
        charIndex++;
        setTimeout(type, 35 + Math.random() * 25);
      } else {
        lineIndex++;
        charIndex = 0;
        setTimeout(type, 200);
      }
    };

    const timer = setTimeout(type, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!codeRef.current) return;
    gsap.fromTo(
      codeRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 1, delay: 0.8, ease: "power3.out" }
    );
  }, []);

  const splitText = (text: string) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        className="char inline-block"
        style={{ transformOrigin: "bottom center" }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden">
      {/* Hero ambient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent/10 blur-[100px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px]"
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <span className="text-sm text-muted font-mono">
                {personalInfo.availability}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg text-muted mb-2"
            >
              Hello, I build mobile apps.
            </motion.p>

            <p className="text-lg text-muted mb-1">I&apos;m</p>
            <h1
              ref={nameRef}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
              style={{ perspective: "1000px" }}
            >
              {splitText(personalInfo.fullName)}
            </h1>

            <div className="h-12 md:h-14 overflow-hidden mb-6 relative">
              {heroRoles.map((role, i) => (
                <motion.h2
                  key={role}
                  initial={false}
                  animate={{
                    y: roleIndex === i ? 0 : roleIndex > i ? -50 : 50,
                    opacity: roleIndex === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-xl md:text-2xl font-semibold text-gradient absolute inset-0 flex items-center"
                >
                  {role}
                </motion.h2>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-muted text-lg max-w-lg mb-6 leading-relaxed"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Typing code block */}
            <div
              ref={codeRef}
              className="hidden sm:block glass rounded-xl p-4 mb-8 font-mono text-xs border border-accent/20 max-w-md"
            >
              <div className="flex gap-1.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              {(typedLines.length ? typedLines : codeLines.map(() => "")).map((line, i) => (
                <p key={i} className="text-accent-light/70 leading-5">
                  {line}
                  {i === typedLines.length - 1 && typedLines.length < codeLines.length && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-accent ml-0.5 align-middle"
                    />
                  )}
                </p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton href="#contact" variant="primary">
                Let&apos;s Work Together
                <FiExternalLink className="text-sm" />
              </MagneticButton>
              <MagneticButton href={personalInfo.resumeUrl} variant="secondary">
                <HiDownload />
                Download Resume
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center"
          >
            <PhoneMockup />
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-accent-light transition-colors"
        >
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-muted/40 flex items-start justify-center p-1"
          >
            <motion.div
              className="w-1 h-2 bg-accent rounded-full"
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
