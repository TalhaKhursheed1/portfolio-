"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { services } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  HiOutlineDeviceMobile,
  HiOutlineCloudUpload,
  HiOutlineLink,
  HiOutlineCreditCard,
  HiOutlineBell,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  mobile: HiOutlineDeviceMobile,
  deploy: HiOutlineCloudUpload,
  integration: HiOutlineLink,
  payment: HiOutlineCreditCard,
  notification: HiOutlineBell,
  map: HiOutlineLocationMarker,
};

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="section-padding relative">
      <SectionHeading
        label="Services"
        title="What I Offer"
        description="I help businesses and startups build, integrate, and deploy production-ready mobile applications on both Android and iOS."
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] || HiOutlineDeviceMobile;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40, rotateX: 15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group glass rounded-2xl p-8 glass-hover relative overflow-hidden"
              style={{ perspective: "1000px" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-500" />
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 text-accent-light text-2xl"
              >
                <Icon />
              </motion.div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-accent-light transition-colors">
                {service.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
