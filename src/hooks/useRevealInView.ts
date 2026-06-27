"use client";

import { RefObject } from "react";
import { useInView, UseInViewOptions } from "framer-motion";
import { isMobileExperience } from "@/lib/device";

export function useRevealInView(
  ref: RefObject<Element | null>,
  options?: UseInViewOptions
) {
  const mobile = typeof window !== "undefined" && isMobileExperience();

  return useInView(ref, {
    margin: "-80px",
    ...options,
    once: mobile ? true : (options?.once ?? false),
  });
}
