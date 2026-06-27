"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineGlobeAlt,
} from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { FiSend } from "react-icons/fi";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    )}`;
    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: HiOutlineMail,
      label: personalInfo.email,
      sub: "Best for project inquiries",
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: HiOutlinePhone,
      label: personalInfo.phone,
      sub: "Call for direct discussions",
      href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    },
    {
      icon: SiUpwork,
      label: "Upwork Profile",
      sub: "Hire me on Upwork",
      href: personalInfo.upwork,
    },
    {
      icon: FaGithub,
      label: "GitHub",
      sub: "Explore my repositories",
      href: personalInfo.github,
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      sub: "Connect professionally",
      href: personalInfo.linkedin,
    },
    {
      icon: HiOutlineGlobeAlt,
      label: personalInfo.location || "Pakistan",
      sub: "Open to remote work worldwide",
      href: "#",
    },
  ];

  return (
    <section id="contact" ref={ref} className="section-padding relative">
      <SectionHeading
        label="Contact"
        title="Let's Build Something Great Together"
        description="Have a project idea or need a reliable development partner? Let's discuss how we can turn your vision into a scalable digital solution."
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <span className="text-sm text-emerald-400 font-medium">
              Open for collaboration
            </span>
          </div>

          <p className="text-muted leading-relaxed mb-10">
            Whether you need a product build, UI refinement, full-stack
            implementation, or long-term technical support, I can help turn clear
            product goals into polished digital experiences.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {contactMethods.map((method, i) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i }}
                whileHover={{ x: 4, borderColor: "rgba(99,102,241,0.4)" }}
                className="glass rounded-xl p-4 flex items-start gap-4 border border-transparent transition-all duration-300"
              >
                <method.icon className="text-xl text-accent-light mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-sm">{method.label}</p>
                  <p className="text-xs text-muted mt-0.5">{method.sub}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass rounded-2xl p-8 glow-border"
        >
          <h3 className="text-lg font-semibold mb-2">Tell me about your project</h3>
          <p className="text-sm text-muted mb-6">
            Share your goals, timeline, and requirements. I&apos;ll respond with a
            practical next step.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-xs text-muted uppercase tracking-wider mb-2 block">
                Name
              </label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs text-muted uppercase tracking-wider mb-2 block">
                Email
              </label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all text-sm"
                placeholder="you@email.com"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-xs text-muted uppercase tracking-wider mb-2 block">
              Subject
            </label>
            <input
              type="text"
              required
              value={formState.subject}
              onChange={(e) =>
                setFormState({ ...formState, subject: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all text-sm"
              placeholder="Project inquiry"
            />
          </div>

          <div className="mb-6">
            <label className="text-xs text-muted uppercase tracking-wider mb-2 block">
              Message
            </label>
            <textarea
              required
              rows={5}
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all text-sm resize-none"
              placeholder="Describe your project..."
            />
          </div>

          <MagneticButton type="submit" variant="primary" className="w-full">
            {submitted ? "Opening email..." : "Send Message"}
            <FiSend />
          </MagneticButton>
        </motion.form>
      </div>
    </section>
  );
}
