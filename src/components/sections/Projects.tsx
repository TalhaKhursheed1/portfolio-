"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects, personalInfo } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCardImage from "@/components/ui/ProjectCardImage";
import { FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="section-padding relative">
      <SectionHeading
        label="Mobile Apps"
        title="Featured Projects"
        description="Production mobile applications deployed on Google Play & App Store — built with React Native, Expo, and modern integrations."
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative glass rounded-2xl overflow-hidden glass-hover flex flex-col h-full hover:-translate-y-1 transition-transform duration-300"
          >
            <ProjectCardImage project={project} priority={i < 3} />

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-light transition-colors">
                {project.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono text-accent-light/80 bg-accent/10 rounded-md border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        className="max-w-7xl mx-auto mt-16 text-center"
      >
        <p className="text-muted mb-4">More mobile projects and code samples on GitHub.</p>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent-light hover:text-white transition-colors font-medium"
        >
          Explore GitHub Repositories <FiExternalLink />
        </a>
      </motion.div>
    </section>
  );
}
