"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "ghost";
}

export default function MagneticButton({
  children,
  className,
  href,
  onClick,
  type = "button",
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const variants = {
    primary:
      "bg-accent text-white hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] border-transparent",
    secondary:
      "glass text-white hover:border-accent/40 border-white/10",
    ghost: "text-muted hover:text-white border-transparent bg-transparent",
  };

  const motionProps = {
    ref: ref as React.RefObject<HTMLAnchorElement & HTMLButtonElement>,
    onMouseMove: handleMouse,
    onMouseLeave: reset,
    animate: { x: position.x * 0.2, y: position.y * 0.2 },
    transition: { type: "spring" as const, stiffness: 150, damping: 15, mass: 0.1 },
    whileTap: { scale: 0.95 },
    className: cn(
      "relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm border transition-all duration-300 overflow-hidden group",
      variants[variant],
      className
    ),
  };

  const shimmer = (
    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  );

  if (href) {
    return (
      <motion.a href={href} {...motionProps}>
        {shimmer}
        <span className="relative z-10">{children}</span>
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} {...motionProps}>
      {shimmer}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
