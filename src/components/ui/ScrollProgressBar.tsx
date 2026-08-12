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
        background: "linear-gradient(90deg, #00FF66 0%, #00ffaa 50%, #00FF66 100%)",
        boxShadow: "0 0 12px rgba(0,255,102,0.8), 0 0 28px rgba(0,255,102,0.4)",
        zIndex: 9999,
      }}
    />
  );
}
