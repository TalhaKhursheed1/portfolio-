"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import TiltCard from "@/components/ui/TiltCard";

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="section-padding relative overflow-hidden">
      <SectionHeading
        label="Technical Skills"
        title="Technical Expertise"
        description="Technologies and tools I use to build, integrate, and deploy production-ready mobile applications."
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 60, rotateX: 20 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 60, rotateX: 20 }}
            transition={{ duration: 0.7, delay: catIndex * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <TiltCard intensity={8}>
              <div className="glass rounded-2xl p-8 glass-hover h-full relative overflow-hidden group">
                <motion.div
                  className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors duration-700"
                />
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-3 relative z-10">
                  <motion.span
                    className="w-2 h-2 rounded-full bg-accent"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
                      transition={{
                        delay: catIndex * 0.12 + skillIndex * 0.04,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{
                        scale: 1.1,
                        y: -3,
                        boxShadow: "0 0 20px rgba(99,102,241,0.3)",
                      }}
                      className="px-3 py-1.5 text-sm rounded-lg border border-white/10 bg-white/[0.02] cursor-default transition-colors hover:border-accent/40 hover:bg-accent/10"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-7xl mx-auto mt-16 overflow-hidden py-4"
      >
        <div className="flex animate-marquee whitespace-nowrap gap-12">
          {[...skillCategories.flatMap((c) => c.skills), ...skillCategories.flatMap((c) => c.skills)].map(
            (skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/[0.04] to-white/[0.02] select-none"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
}
