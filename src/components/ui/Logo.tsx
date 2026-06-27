"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showLabel?: boolean;
  size?: "sm" | "md";
}

export default function Logo({ className, showLabel = true, size = "md" }: LogoProps) {
  const id = useId().replace(/:/g, "");
  const markSize = size === "sm" ? 32 : 40;
  const labelClass = size === "sm" ? "text-lg" : "text-xl";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <motion.span
        className="relative shrink-0"
        whileHover={{ rotate: -3, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 18 }}
      >
        <span
          className="absolute inset-0 rounded-xl bg-accent/40 blur-md scale-110 opacity-60"
          aria-hidden
        />
        <svg
          width={markSize}
          height={markSize}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative drop-shadow-[0_0_12px_rgba(99,102,241,0.45)]"
          aria-hidden
        >
          <defs>
            <linearGradient id={`logoGrad-${id}`} x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6366f1" />
              <stop offset="0.5" stopColor="#818cf8" />
              <stop offset="1" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id={`logoShine-${id}`} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.35" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="36" height="36" rx="10" fill={`url(#logoGrad-${id})`} />
          <rect x="2" y="2" width="36" height="18" rx="10" fill={`url(#logoShine-${id})`} />
          <rect x="2" y="2" width="36" height="36" rx="10" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
          <path
            d="M11 13h6.5c2.2 0 3.8 1.2 3.8 3.1 0 1.5-.9 2.6-2.3 3l3.2 5.9h-3.4l-2.8-5.3H14v5.3h-3V13zm3 5.2h3.2c1 0 1.6-.5 1.6-1.3s-.6-1.3-1.6-1.3H14v2.6z"
            fill="white"
          />
          <path
            d="M24.5 13H31v2.5h-4v2.2H30.5c1.8 0 3 1.1 3 2.9s-1.2 3-3 3H24.5V13zm3 2.5v2.7h1.5c.7 0 1.1-.3 1.1-.9s-.4-.9-1.1-.9H27.5z"
            fill="white"
          />
          <rect x="16" y="28" width="8" height="1.5" rx="0.75" fill="rgba(255,255,255,0.45)" />
        </svg>
      </motion.span>

      {showLabel && (
        <span className={cn("font-bold tracking-tight leading-none", labelClass)}>
          <span className="text-gradient">Talha</span>
          <span className="text-accent"> K.</span>
        </span>
      )}
    </span>
  );
}
