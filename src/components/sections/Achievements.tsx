"use client";

import { motion } from "framer-motion";
import { SectionBackground } from "@/components/ui/SectionBackground";

const stats = [
    { value: "120+", label: "Automated Test Cases Written",  color: "var(--primary)"   },
    { value: "80%",  label: "Test Coverage Increase",        color: "var(--accent)"    },
    { value: "50+",  label: "Vulnerabilities Resolved",      color: "var(--secondary)" },
    { value: "45%",  label: "Faster CI/CD Release Cycles",   color: "var(--primary)"   },
    { value: "35%",  label: "Faster Defect Detection",       color: "var(--accent)"    },
    { value: "8.65", label: "CGPA / 10.0",                   color: "var(--secondary)" },
];

export function Achievements() {
    return (
        <section
            id="achievements"
            className="py-20 bg-[#080808] relative overflow-hidden"
            aria-label="Impact by the numbers"
        >
            <SectionBackground variant="primary" intensity="low" />

            <div className="container mx-auto px-4 relative z-10">

                {/* ── Section Header ───────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="section-label inline-block text-[var(--primary)] mb-3 px-3 py-1 border border-[var(--primary)]/30 rounded-full">
                        06 / Impact
                    </span>
                    <h2
                        className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4"
                        style={{ fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}
                    >
                        By The Numbers
                    </h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto mb-4" />
                    <p
                        className="text-sm max-w-md mx-auto leading-relaxed"
                        style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                    >
                        Measurable impact delivered during my Software Engineering Internship at ABB — a Fortune 500 global technology company.
                    </p>
                </motion.div>

                {/* ── Stats Grid ───────────────────────────── */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.4 }}
                            className="bg-[var(--surface-1)] border border-[var(--border)] rounded-sm p-5 text-center hover:border-[var(--primary)]/45 transition-all group relative overflow-hidden"
                        >
                            {/* Subtle radial glow on hover */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{ background: `radial-gradient(ellipse at center, ${stat.color}10, transparent 70%)` }}
                            />

                            {/* Number */}
                            <div
                                className="text-3xl md:text-4xl font-bold font-mono mb-2 relative z-10 group-hover:scale-105 transition-transform"
                                style={{ color: stat.color }}
                            >
                                {stat.value}
                            </div>

                            {/* Label */}
                            <div
                                className="text-xs leading-snug relative z-10"
                                style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                            >
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── Attribution ──────────────────────────── */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center mt-8 text-xs"
                    style={{ color: "var(--text-dim)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                >
                    Metrics from Software Engineering Internship at ABB, Bangalore — Aug 2025 to May 2026
                </motion.p>
            </div>
        </section>
    );
}
