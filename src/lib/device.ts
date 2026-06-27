export function isTouchDevice(): boolean {
  if (typeof window === "undefined") return false;
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

export function isMobileViewport(): boolean {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

export function isMobileExperience(): boolean {
  return isTouchDevice() || isMobileViewport();
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
