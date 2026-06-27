"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-muted text-sm"
        >
          © {new Date().getFullYear()} {personalInfo.fullName}. Crafted with passion.
        </motion.p>

        <div className="flex items-center gap-6">
          {[
            { icon: FaGithub, href: personalInfo.github, label: "GitHub" },
            { icon: FaLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -3, color: "#818cf8" }}
              className="text-muted hover:text-accent-light transition-colors text-xl"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
