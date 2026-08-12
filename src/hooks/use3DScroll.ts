"use client";

import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

export interface Scroll3DValues {
  ref: React.RefObject<HTMLElement | null>;
  scrollYProgress: MotionValue<number>;
  /** 0 → 8deg as element enters, 0 at mid, -8deg as it exits */
  rotateX: MotionValue<number>;
  /** subtle scale-down as element scrolls out of view */
  scale: MotionValue<number>;
  /** opacity fade at entry and exit edges */
  opacity: MotionValue<number>;
  /** translateY parallax — positive offsets on entry, negative on exit */
  y: MotionValue<number>;
}

/**
 * use3DScroll — attaches a ref to a section element and returns
 * scroll-linked Framer Motion values for real-time 3D transforms.
 *
 * Usage:
 *   const { ref, rotateX, scale, opacity, y } = use3DScroll();
 *   <motion.section ref={ref} style={{ rotateX, scale, opacity, y }} />
 */
export function use3DScroll(options?: {
  /** rotateX range in degrees (default: [8, 0, -8]) */
  rotateRange?: [number, number, number];
  /** y parallax range in px (default: [40, 0, -20]) */
  yRange?: [number, number, number];
  /** scale range (default: [0.96, 1, 0.96]) */
  scaleRange?: [number, number, number];
  /** opacity range (default: [0, 1, 0.6]) */
  opacityRange?: [number, number, number];
}): Scroll3DValues {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateRange = options?.rotateRange ?? [8, 0, -8];
  const yRange = options?.yRange ?? [40, 0, -20];
  const scaleRange = options?.scaleRange ?? [0.96, 1, 0.96];
  const opacityRange = options?.opacityRange ?? [0, 1, 0.6];

  const rotateX = useTransform(scrollYProgress, [0, 0.35, 1], rotateRange);
  const scale = useTransform(scrollYProgress, [0, 0.35, 1], scaleRange);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [opacityRange[0], opacityRange[1], opacityRange[1], opacityRange[2]]);
  const y = useTransform(scrollYProgress, [0, 0.35, 1], yRange);

  return { ref, scrollYProgress, rotateX, scale, opacity, y };
}
