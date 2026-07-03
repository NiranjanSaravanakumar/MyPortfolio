"use client";

import { motion } from "framer-motion";
import { SectionBackground } from "@/components/ui/SectionBackground";

const stats = [
    { value: "120+", label: "Automated Test Cases Written"  },
    { value: "80%",  label: "Test Coverage Increase"        },
    { value: "50+",  label: "Vulnerabilities Resolved"      },
    { value: "45%",  label: "Faster CI/CD Release Cycles"   },
    { value: "35%",  label: "Faster Defect Detection"       },
    { value: "8.65", label: "CGPA / 10.0"                   },
];

export function Achievements() {
    return (
        <section
            id="achievements"
            className="py-24 relative overflow-hidden"
            style={{ background: "#080808" }}
            aria-label="Impact by the numbers"
        >
            <SectionBackground variant="primary" intensity="low" />

            <div className="relative z-10 w-full mx-auto px-6 lg:px-8" style={{ maxWidth: 1280 }}>

                {/* ── Section Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
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
                        By The Numbers
                    </h2>
                    <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: "linear-gradient(90deg, #00FF66, rgba(0,255,102,0.3))" }} />
                    <p
                        className="max-w-md mx-auto"
                        style={{
                            color: "rgba(255,255,255,0.88)",
                            fontSize: "1.05rem",
                            lineHeight: 1.8,
                        }}
                    >
                        Measurable impact delivered during my Software Engineering Internship at{" "}
                        <span style={{ color: "#00FF66", fontWeight: 600 }}>ABB</span> — a Fortune 500 global technology company.
                    </p>
                </motion.div>

                {/* ── Stats Grid ── */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5" style={{ maxWidth: 1100, margin: "0 auto" }}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.07, duration: 0.4 }}
                            className="text-center"
                            style={{
                                background: "#101010",
                                border: "1px solid rgba(0,255,102,0.20)",
                                borderRadius: 16,
                                padding: "24px 16px",
                                transition: "border-color 0.22s ease, box-shadow 0.22s ease",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLDivElement;
                                el.style.borderColor = "rgba(0,255,102,0.55)";
                                el.style.boxShadow   = "0 0 0 1px rgba(0,255,102,0.30), 0 4px 24px rgba(0,0,0,0.5)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLDivElement;
                                el.style.borderColor = "rgba(0,255,102,0.20)";
                                el.style.boxShadow   = "none";
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
                </div>

                {/* ── Attribution ── */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-8 text-sm"
                    style={{
                        color: "rgba(255,255,255,0.82)",
                        fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                    }}
                >
                    Metrics from Software Engineering Internship at ABB, Bangalore — Aug 2025 to May 2026
                </motion.p>
            </div>
        </section>
    );
}
