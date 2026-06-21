"use client";

import { motion } from "framer-motion";
import { FileText, ShieldAlert, ExternalLink } from "lucide-react";
import { SectionBackground } from "@/components/ui/SectionBackground";

const patents = [
    {
        id: 1,
        status: "Patent Filed — 2025",
        statusColor: "var(--primary)",
        title: "Multi-Agent Asset-to-Telemetry Tag Mapping System",
        description:
            "Integrating OT/IT environments with context-aware rationalization engines to accurately map industrial telemetry data to physical assets at scale.",
    },
    {
        id: 2,
        status: "Defensive Publication — 2025",
        statusColor: "var(--secondary)",
        title: "Self-Reasoning & Error-Correcting SQL Generation",
        description:
            "A reflection-tuning method enabling autonomous LLM validation and correction of generated SQL queries without retrieval-augmented generation (RAG).",
    },
];

const papers = [
    {
        id: 1,
        venue: "SSRN",
        date: "June 2023",
        title: "Deep Learning-Based Instance Segmentation of Aircraft",
        description: "Utilizing Detectron2 for high-accuracy aerial image segmentation in aviation contexts.",
        href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4485468",
        color: "var(--accent)",
    },
    {
        id: 2,
        venue: "Springer · ISDA",
        date: "Dec 2023",
        title: "Enhancing Road Infrastructure Maintenance (YOLOv8)",
        description: "Automated pothole and crack detection from aerial imagery achieving 95.5% accuracy.",
        href: "https://link.springer.com/chapter/10.1007/978-3-031-64836-6_21",
        color: "var(--primary)",
    },
    {
        id: 3,
        venue: "IEEE · 15th ICCCNT",
        date: "June 2024",
        title: "Utilizing Generative AI for Text-to-Image Generation",
        description: "Evaluation of transformer models for creative visual synthesis with ethical considerations.",
        href: "https://ieeexplore.ieee.org/document/10725454",
        color: "var(--secondary)",
    },
];

export function Publications() {
    return (
        <section
            id="publications"
            className="py-24 bg-[#080808] relative overflow-hidden"
            aria-label="Patents and Research Publications"
        >
            <SectionBackground variant="accent" intensity="low" />

            <div className="container mx-auto px-4 relative z-10">

                {/* ── Section Header ───────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <span className="section-label inline-block text-[var(--accent)] mb-3 px-3 py-1 border border-[var(--accent)]/30 rounded-full">
                        06 / Research
                    </span>
                    <h2
                        className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4"
                        style={{ fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}
                    >
                        Patents &amp; Publications
                    </h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] mx-auto mb-4" />
                    <p
                        className="text-sm max-w-md mx-auto leading-relaxed"
                        style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                    >
                        2 patent filings and 3 peer-reviewed research papers across SSRN, Springer, and IEEE.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

                    {/* ── Patents ──────────────────────────── */}
                    <div>
                        <h3
                            className="text-sm font-semibold mb-6 pb-3 border-b border-[var(--border)] flex items-center gap-2"
                            style={{ color: "var(--primary)", fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}
                        >
                            <ShieldAlert size={15} /> Intellectual Property
                        </h3>

                        <div className="space-y-5">
                            {patents.map((p, i) => (
                                <motion.div
                                    key={p.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-[var(--surface-1)] border border-[var(--border)] rounded-sm p-5 hover:border-[var(--primary)]/40 transition-all"
                                    style={{ borderLeft: `3px solid ${p.statusColor}` }}
                                >
                                    <span
                                        className="font-mono text-[10px] px-2 py-0.5 rounded-full border mb-3 inline-block"
                                        style={{
                                            color: p.statusColor,
                                            borderColor: `${p.statusColor}40`,
                                            backgroundColor: `${p.statusColor}12`,
                                        }}
                                    >
                                        {p.status}
                                    </span>
                                    <h4
                                        className="text-sm font-semibold text-[var(--foreground)] mb-2 leading-snug"
                                        style={{ fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}
                                    >
                                        {p.title}
                                    </h4>
                                    <p
                                        className="text-sm leading-relaxed"
                                        style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                                    >
                                        {p.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* ── Research Papers ───────────────────── */}
                    <div>
                        <h3
                            className="text-sm font-semibold mb-6 pb-3 border-b border-[var(--border)] flex items-center gap-2"
                            style={{ color: "var(--accent)", fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}
                        >
                            <FileText size={15} /> Peer-Reviewed Research
                        </h3>

                        <div className="space-y-5">
                            {papers.map((p, i) => (
                                <motion.div
                                    key={p.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-[var(--surface-1)] border border-[var(--border)] rounded-sm p-5 hover:border-[var(--accent)]/40 transition-all group"
                                    style={{ borderLeft: `3px solid ${p.color}` }}
                                >
                                    <div className="flex items-center justify-between gap-3 mb-2">
                                        <span
                                            className="font-mono text-[10px] px-2 py-0.5 rounded-full border inline-block"
                                            style={{
                                                color: p.color,
                                                borderColor: `${p.color}40`,
                                                backgroundColor: `${p.color}12`,
                                            }}
                                        >
                                            {p.venue} · {p.date}
                                        </span>
                                        <a
                                            href={p.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Read paper: ${p.title}`}
                                            className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                                            style={{ color: p.color }}
                                        >
                                            <ExternalLink size={13} />
                                        </a>
                                    </div>
                                    <h4
                                        className="text-sm font-semibold text-[var(--foreground)] mb-2 leading-snug group-hover:text-[var(--accent)] transition-colors"
                                        style={{ fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}
                                    >
                                        <a
                                            href={p.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {p.title}
                                        </a>
                                    </h4>
                                    <p
                                        className="text-sm leading-relaxed"
                                        style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                                    >
                                        {p.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
