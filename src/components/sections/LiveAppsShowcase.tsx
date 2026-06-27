"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { liveApps } from "@/data/portfolio";
import { FaGooglePlay, FaApple, FaDownload } from "react-icons/fa";

export default function LiveAppsShowcase() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        className="block text-xs font-mono uppercase tracking-[0.3em] text-accent mb-4"
      >
        Live on App Stores
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        className="text-3xl md:text-5xl font-bold mb-4 max-w-3xl"
      >
        Production Apps with{" "}
        <span className="text-gradient">Real Downloads</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        className="text-muted text-lg max-w-xl mb-12"
      >
        Live React Native apps deployed on Google Play & App Store.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 max-w-7xl">
        {liveApps.map((app, i) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-3xl overflow-hidden glow-border group hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Taller frame + object-contain so full promo art is visible */}
            <div className="relative overflow-hidden bg-[#0a0a10]">
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] min-h-[280px]">
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                  className="object-contain object-center p-1 group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                <span className="px-3 py-1 text-xs font-mono bg-emerald-500/25 text-emerald-300 rounded-full border border-emerald-500/40 flex items-center gap-1.5 w-fit backdrop-blur-sm">
                  <FaDownload className="text-[10px]" /> {app.downloads} Downloads
                </span>
                <span className="px-3 py-1 text-xs font-mono bg-accent/25 text-accent-light rounded-full border border-accent/40 w-fit backdrop-blur-sm">
                  Live on Stores
                </span>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-light transition-colors">
                {app.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                {app.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {app.androidUrl && (
                  <a
                    href={app.androidUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-accent/10 transition-all text-sm"
                  >
                    <FaGooglePlay className="text-accent-light" /> Google Play
                  </a>
                )}
                {app.iosUrl && (
                  <a
                    href={app.iosUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-accent/10 transition-all text-sm"
                  >
                    <FaApple className="text-accent-light" /> App Store
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
