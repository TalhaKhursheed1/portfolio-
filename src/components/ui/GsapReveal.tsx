"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isMobileExperience } from "@/lib/device";

gsap.registerPlugin(ScrollTrigger);

interface GsapRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export default function GsapReveal({
  children,
  className = "",
  delay = 0,
  y = 80,
}: GsapRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mobile = isMobileExperience();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: mobile ? 30 : y, rotateX: mobile ? 0 : 12, transformPerspective: mobile ? 0 : 800 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: mobile ? 0.6 : 1.2,
          delay: mobile ? 0 : delay,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            end: mobile ? undefined : "bottom 20%",
            toggleActions: mobile ? "play none none none" : "play reverse play reverse",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [delay, y]);

  return (
    <div ref={ref} className={className} style={{ transformStyle: "preserve-3d" }}>
      {children}
    </div>
  );
}
