"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Extra delay before entrance animation starts (default: 0) */
  delay?: number;
  /** Disable 3D perspective tilt (default: false) */
  flat?: boolean;
}

/** Stagger children with a cascading 3D entrance */
export const stagger3D: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

/** 3D entrance for individual card/item children */
export const card3DEntrance: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: 18,
    scale: 0.93,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/** Fade-up entrance for text content */
export const fadeUp3D: Variants = {
  hidden: { opacity: 0, y: 30, rotateX: 10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * ScrollAnimationWrapper — wraps a section with scroll-linked
 * 3D parallax transforms + a staggered whileInView entrance.
 */
export function ScrollAnimationWrapper({
  children,
  className,
  style,
  delay = 0,
  flat = false,
}: ScrollAnimationWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scroll-linked transforms — drive 3D depth as user scrolls
  const rotateX = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], flat ? [0, 0, 0, 0] : [6, 0, 0, -5]);
  const scale   = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.97, 1, 1, 0.97]);
  const translateY = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [30, 0, 0, -15]);

  return (
    <div
      ref={ref}
      style={{
        perspective: flat ? undefined : "1200px",
        perspectiveOrigin: "50% 40%",
        ...style,
      }}
      className={className}
    >
      <motion.div
        style={{
          rotateX,
          scale,
          y: translateY,
          transformStyle: "preserve-3d",
          willChange: "transform",
          transitionDelay: `${delay}s`,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
