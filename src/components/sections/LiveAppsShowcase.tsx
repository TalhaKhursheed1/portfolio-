"use client";

import { motion } from "framer-motion";
import { liveApps } from "@/data/portfolio";
import ProjectCardImage from "@/components/ui/ProjectCardImage";
import { FaGooglePlay, FaApple } from "react-icons/fa";

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
        Production React Native experiences published across Google Play and the App Store.
      </motion.p>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {liveApps.map((app, i) => (
          <motion.article
            key={app.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ delay: i * 0.1 }}
            className="group relative glass rounded-2xl overflow-hidden glass-hover flex flex-col h-full hover:-translate-y-1 transition-transform duration-300"
          >
            <ProjectCardImage project={app} />

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-light transition-colors">
                {app.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-5 line-clamp-4 flex-1">
                {app.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {app.androidUrl && (
                  <a
                    href={app.androidUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-accent/10 transition-all text-sm"
                  >
                    <FaGooglePlay className="text-accent-light" />
                    {app.storeLabel || "Google Play"}
                  </a>
                )}
                {app.iosUrl && (
                  <a
                    href={app.iosUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-accent/10 transition-all text-sm"
                  >
                    <FaApple className="text-accent-light" /> App Store
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
