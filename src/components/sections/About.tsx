"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "react-countup";
import { about, stats, personalInfo } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import GsapReveal from "@/components/ui/GsapReveal";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<SVGSVGElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 25 });

  useEffect(() => {
    if (!imageWrapRef.current || !sectionRef.current) return;
    gsap.to(imageWrapRef.current, {
      y: -30,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });
    if (ringRef.current) {
      gsap.to(ringRef.current, { rotate: 360, duration: 20, repeat: -1, ease: "none" });
    }
  }, []);

  const handleMouse = (e: React.MouseEvent) => {
    const el = imageWrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section id="about" ref={sectionRef} className="section-padding relative">
      <SectionHeading label="Profile" title="About Me" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <GsapReveal className="relative flex justify-center lg:justify-start">
          <motion.div
            ref={imageWrapRef}
            onMouseMove={handleMouse}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative"
          >
            <svg
              ref={ringRef}
              className="absolute -inset-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)]"
              viewBox="0 0 400 400"
            >
              <circle cx="200" cy="200" r="190" fill="none" stroke="url(#ringGrad)" strokeWidth="1.5" strokeDasharray="8 12" opacity="0.5" />
              <defs>
                <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="50%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>

            <motion.div
              className="absolute -inset-4 bg-gradient-to-br from-accent/40 to-cyan-500/20 rounded-full blur-3xl"
              animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden glow-border ring-4 ring-accent/30 shadow-[0_0_60px_rgba(99,102,241,0.3)]">
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.fullName}
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 288px, 320px"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>

            <motion.div
              className="absolute -bottom-4 -right-4 glass rounded-2xl p-4 glow-border"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <p className="text-2xl font-bold text-gradient">3+</p>
              <p className="text-xs text-muted">Years Exp.</p>
            </motion.div>
          </motion.div>
        </GsapReveal>

        <div>
          <GsapReveal delay={0.1}>
            <p className="text-lg text-muted leading-relaxed mb-8">{about.bio}</p>
            <p className="font-mono text-sm text-accent mb-10 animate-glow-pulse">{about.highlight}</p>
          </GsapReveal>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <GsapReveal key={stat.label} delay={0.3 + i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="glass rounded-2xl p-4 md:p-6 text-center glass-hover relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <p className="text-2xl md:text-3xl font-bold text-gradient mb-1 relative z-10">
                    {isInView && (
                      <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                    )}
                  </p>
                  <p className="text-[10px] md:text-xs text-muted uppercase tracking-wider relative z-10">
                    {stat.label}
                  </p>
                </motion.div>
              </GsapReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
