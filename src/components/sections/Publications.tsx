"use client";

import { motion } from "framer-motion";
import { FileText, ShieldAlert } from "lucide-react";
import { SectionBackground } from "@/components/ui/SectionBackground";

export function Publications() {
    return (
        <section id="publications" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
            <SectionBackground variant="secondary" intensity="low" />
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-16"
                >
                    {/* Patents Section */}
                    <div>
                        <h3 className="text-2xl font-mono text-[var(--accent)] mb-8 border-b border-[var(--border)] pb-4">
                            PATENTS
                        </h3>
                        <div className="space-y-8">
                            <div className="group">
                                <div className="flex items-center gap-2 mb-2">
                                    <ShieldAlert size={16} className="text-[var(--primary)]" />
                                    <span className="text-xs font-mono text-[var(--primary)] border border-[var(--primary)] px-2 py-0.5 rounded-full">PATENT FILED - 2025</span>
                                </div>
                                <h4 className="text-lg font-bold text-[var(--foreground)]">
                                    Multi-Agent Asset-to-Telemetry Tag Mapping System
                                </h4>
                                <p className="text-[var(--foreground)]/60 text-sm mt-2">
                                    Integrating OT/IT with context-aware rationalization engines to map telemetry to assets accurately.
                                </p>
                            </div>

                            <div className="group">
                                <div className="flex items-center gap-2 mb-2">
                                    <ShieldAlert size={16} className="text-[var(--secondary)]" />
                                    <span className="text-xs font-mono text-[var(--secondary)] border border-[var(--secondary)] px-2 py-0.5 rounded-full">DEFENSIVE PUB - 2025</span>
                                </div>
                                <h4 className="text-lg font-bold text-[var(--foreground)]">
                                    Self-Reasoning & Error-Correcting SQL Generation
                                </h4>
                                <p className="text-[var(--foreground)]/60 text-sm mt-2">
                                    Reflection Tuning method for autonomous LLM validation and correction of SQL queries without RAG.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Publications Section */}
                    <div>
                        <h3 className="text-2xl font-mono text-[var(--accent)] mb-8 border-b border-[var(--border)] pb-4">
                            RESEARCH_PAPERS
                        </h3>
                        <div className="space-y-8">
                            <div>
                                <span className="text-xs font-mono text-[var(--foreground)]/50">SSRN - JUNE 2023</span>
                                <h4 className="text-lg font-bold text-[var(--foreground)] mt-1 hover:text-[var(--primary)]">
                                    <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4485468" target="_blank">Deep Learning-Based Instance Segmentation of Aircraft</a>
                                </h4>
                                <p className="text-[var(--foreground)]/60 text-sm mt-2">
                                    Utilizing Detectron2 for high-accuracy aerial image segmentation.
                                </p>
                            </div>

                            <div>
                                <span className="text-xs font-mono text-[var(--foreground)]/50">ISDA - DEC 2023</span>
                                <h4 className="text-lg font-bold text-[var(--foreground)] mt-1 hover:text-[var(--primary)]">
                                    <a href="https://link.springer.com/chapter/10.1007/978-3-031-64836-6_21" target="_blank">Enhancing road infrastructure maintenance (YOLOv8)</a>
                                </h4>
                                <p className="text-[var(--foreground)]/60 text-sm mt-2">
                                    Automated pothole and crack detection from aerial views achieving 95.5% accuracy.
                                </p>
                            </div>

                            <div>
                                <span className="text-xs font-mono text-[var(--foreground)]/50">15th ICCCNT - JUNE 2024</span>
                                <h4 className="text-lg font-bold text-[var(--foreground)] mt-1 hover:text-[var(--primary)]">
                                    <a href="https://ieeexplore.ieee.org/document/10725454" target="_blank">Utilizing Generative AI for Text-to-Image Generation</a>
                                </h4>
                                <p className="text-[var(--foreground)]/60 text-sm mt-2">
                                    Evaluation of transformer models for creative visual synthesis and ethical considerations.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
