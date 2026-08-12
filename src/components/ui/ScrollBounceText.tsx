"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

// ---------------------------------------------------------------------------
// Props Interface
// ---------------------------------------------------------------------------

export interface ScrollBounceTextProps {
  /** Text or any inline content to apply the effect to */
  children: ReactNode;
  /**
   * Multiplier for the overall effect strength.
   * 1 = default (subtle skew up to ±2 deg).
   * 2 = double intensity, etc.
   * @default 1
   */
  intensity?: number;
  /** Additional className forwarded to the wrapper element */
  className?: string;
  /**
   * Render as a block-level element (`div`) or inline (`span`).
   * Use "span" when nesting inside paragraph/heading text.
   * @default "div"
   */
  as?: "div" | "span";
}

// ---------------------------------------------------------------------------
// Velocity → Transform mapping
// ---------------------------------------------------------------------------
//
//  scrollY (px)
//    └─ useVelocity  → rawVelocity (px / s, can be ±10 000 on fast flings)
//         └─ useSpring   → smoothVelocity  (spring-eased, settles to 0 when scroll stops)
//              └─ useTransform (clamped) → skewDeg  (capped at ±MAX_SKEW)
//                                        → shiftY   (capped at ±MAX_Y)
//
//  The input range for useTransform represents "slow → fast" scroll speed in px/s.
//  Adjust MAX_INPUT_VELOCITY to tune when the effect reaches its maximum distortion.
//  Adjust MAX_SKEW / MAX_Y for the visual ceiling on the distortion.
//
//  Spring config (stiffness: 350, damping: 35):
//    - Higher stiffness → snappier return to 0.
//    - Lower  damping  → more overshoot/bounce on direction reversal.
//
// ---------------------------------------------------------------------------

const MAX_INPUT_VELOCITY = 1500; // px/s — above this, distortion is clamped at max
const MAX_SKEW = 2;              // degrees — maximum skewY applied to text
const MAX_Y = 6;                 // px    — maximum vertical shift applied to text

const SPRING_CONFIG = {
  stiffness: 350,
  damping:   35,
  mass:      0.8,
} as const;

// ---------------------------------------------------------------------------
// Helper — build derived motion values from a smoothed velocity MV
// ---------------------------------------------------------------------------

function useVelocityTransforms(
  smoothVelocity: MotionValue<number>,
  intensity: number,
) {
  /*
   * skewY:
   *   Maps [-MAX_INPUT_VELOCITY, 0, MAX_INPUT_VELOCITY] px/s
   *   →   [-MAX_SKEW * intensity,  0,  MAX_SKEW * intensity] deg
   *
   * Negative velocity = scrolling up → negative skew (leans backward).
   * Positive velocity = scrolling down → positive skew (leans forward).
   * useTransform clamps automatically at the bounds of the input range.
   */
  const skewY = useTransform(
    smoothVelocity,
    [-MAX_INPUT_VELOCITY, 0, MAX_INPUT_VELOCITY],
    [-MAX_SKEW * intensity, 0, MAX_SKEW * intensity],
  );

  /*
   * translateY:
   *   Adds a subtle vertical "lag" that makes text feel physically dragged.
   *   Scrolling down pushes text slightly down (positive y), then springs back.
   *   Cap is intentionally small — this is a supporting effect, not the star.
   */
  const translateY = useTransform(
    smoothVelocity,
    [-MAX_INPUT_VELOCITY, 0, MAX_INPUT_VELOCITY],
    [-MAX_Y * intensity, 0, MAX_Y * intensity],
  );

  return { skewY, translateY };
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function ScrollBounceText({
  children,
  intensity = 1,
  className,
  as = "div",
}: ScrollBounceTextProps) {
  const ref = useRef<HTMLElement>(null);

  // Track scroll position of the *page* (no target = window scroll).
  // Using window scroll rather than element-local progress means the effect
  // fires as long as the page is scrolling, even if the element is fully visible.
  const { scrollY } = useScroll();

  // Derive instantaneous scroll velocity in px/s.
  const rawVelocity = useVelocity(scrollY);

  // Smooth the raw (jittery) velocity through a spring so the distortion
  // eases in/out naturally instead of snapping with each RAF tick.
  const smoothVelocity = useSpring(rawVelocity, SPRING_CONFIG);

  // Map smoothed velocity to transform values, clamped at the visual ceiling.
  const { skewY, translateY } = useVelocityTransforms(smoothVelocity, intensity);

  // Shared motion style — all values are MotionValues, so Framer Motion
  // keeps updates on the compositor thread and bypasses React re-renders.
  const motionStyle = {
    skewY,
    y: translateY,
    display: "inline-block", // required for skewY to apply to inline text
    willChange: "transform",
    transformOrigin: "center center",
  } as const;

  if (as === "span") {
    return (
      <motion.span
        ref={ref as React.Ref<HTMLSpanElement>}
        style={motionStyle}
        className={className}
      >
        {children}
      </motion.span>
    );
  }

  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>}
      style={motionStyle}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default ScrollBounceText;
