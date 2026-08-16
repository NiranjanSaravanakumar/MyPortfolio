"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * ScrollProgressBar — a neon emerald line fixed at the very top
 * of the viewport that grows from 0 → 100% as the user scrolls.
 */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  // Spring makes it feel physical — it slightly lags behind for a smooth feel
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        scaleX,
        transformOrigin: "0%",
        background: "linear-gradient(90deg, var(--primary) 0%, var(--accent) 50%, var(--primary) 100%)",
        boxShadow: "0 0 12px color-mix(in srgb, var(--primary) 80%, transparent), 0 0 28px color-mix(in srgb, var(--primary) 40%, transparent)",
        zIndex: 9999,
      }}
    />
  );
}
