"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { stagger3D, card3DEntrance, fadeUp3D } from "@/components/ui/ScrollAnimationWrapper";
import { ScrollBounceText } from "@/components/ui/ScrollBounceText";

const stats = [
    { value: "300+", label: "Automated Test Cases Written" },
    { value: "80%",  label: "Test Coverage Increase" },
    { value: "50+",  label: "Vulnerabilities Resolved" },
    { value: "45%",  label: "Faster CI/CD Release Cycles" },
    { value: "35%",  label: "Faster Defect Detection" },
    { value: "8.62", label: "CGPA / 10.0" },
];

export function Achievements() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

    const rotateX    = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [12, 0, 0, -6]);
    const translateY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [60, 0, 0, -20]);
    const scale      = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0.94, 1, 1, 0.96]);

    return (
        <section
            id="achievements"
            ref={sectionRef}
            className="py-24 relative overflow-hidden"
            style={{ background: "#080808", perspective: "1200px", perspectiveOrigin: "50% 40%" }}
            aria-label="Impact by the numbers"
        >
            <SectionBackground variant="primary" intensity="low" />

            <motion.div
                style={{ rotateX, y: translateY, scale, transformStyle: "preserve-3d", willChange: "transform" }}
            >
                <div className="relative z-10 w-full mx-auto px-6 lg:px-8" style={{ maxWidth: 1280 }}>

                    {/* ── Section Header ── */}
                    <motion.div
                        variants={fadeUp3D}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="text-center mb-14"
                    >
                        <span
                            className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                            style={{
                                color: "#00FF66",
                                border: "1px solid rgba(0,255,102,0.25)",
                                background: "rgba(0,255,102,0.06)",
                            }}
                        >
                            06 / Impact
                        </span>
                        <h2
                            className="font-extrabold mb-4"
                            style={{
                                fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                                color: "#ffffff",
                                fontFamily: "var(--font-heading, 'Poppins', sans-serif)",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            <ScrollBounceText as="span">By The Numbers</ScrollBounceText>
                        </h2>
                        <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: "linear-gradient(90deg, #00FF66, rgba(0,255,102,0.3))" }} />
                        <p
                            className="max-w-md mx-auto"
                            style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.05rem", lineHeight: 1.8 }}
                        >
                            Measurable impact delivered during my Software Engineering Internship at{" "}
                            <span style={{ color: "#00FF66", fontWeight: 600 }}>ABB Global Industries and Services Private Limited</span> — a Fortune 500 global technology company.
                        </p>
                    </motion.div>

                    {/* ── Stats Grid — staggered 3D wave entrance ── */}
                    <motion.div
                        variants={stagger3D}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5"
                        style={{ maxWidth: 1100, margin: "0 auto" }}
                    >
                        {stats.map((stat) => (
                            <motion.div
                                key={stat.label}
                                variants={card3DEntrance}
                                className="text-center"
                                style={{
                                    background: "#101010",
                                    border: "1px solid rgba(0,255,102,0.20)",
                                    borderRadius: 16,
                                    padding: "24px 16px",
                                }}
                                whileHover={{
                                    scale: 1.08,
                                    rotateY: 8,
                                    rotateX: -4,
                                    y: -8,
                                    borderColor: "rgba(0,255,102,0.55)",
                                    boxShadow: "0 0 0 1px rgba(0,255,102,0.30), 0 12px 40px rgba(0,0,0,0.5)",
                                    transition: { duration: 0.25 },
                                }}
                            >
                                <div
                                    className="font-black font-mono mb-2"
                                    style={{
                                        fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)",
                                        color: "#00FF66",
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    {stat.value}
                                </div>
                                <div
                                    className="text-xs font-medium leading-snug"
                                    style={{
                                        color: "rgba(255,255,255,0.88)",
                                        fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                                    }}
                                >
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* ── Attribution ── */}
                    <motion.p
                        variants={fadeUp3D}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mt-8 text-sm"
                        style={{
                            color: "rgba(255,255,255,0.82)",
                            fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                        }}
                    >
                        Metrics from Software Engineering Internship at ABB Global Industries and Services Private Limited, Bangalore — Aug 2025 to May 2026
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
}
