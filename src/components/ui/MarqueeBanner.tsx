"use client";

import { marqueeTech } from "@/data/portfolio";

export default function MarqueeBanner() {
  const items = [...marqueeTech, ...marqueeTech];

  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-white/[0.02] py-4">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((tech, i) => (
          <span key={`${tech}-${i}`} className="flex items-center mx-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3 animate-pulse" />
            <span className="text-sm font-mono text-muted/80 uppercase tracking-widest">
              {tech}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
