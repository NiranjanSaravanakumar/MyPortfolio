"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, CheckCircle } from "lucide-react";
import { SectionBackground } from "@/components/ui/SectionBackground";

const certifications = [
    {
        id: 1,
        icon: "🏅",
        title: "Oracle Certified Foundations Associate",
        issuer: "Oracle University",
        type: "Professional Certification",
        color: "var(--primary)",
        description:
            "Industry-recognized credential validating core knowledge in Oracle technologies — covering relational database design, SQL fundamentals, data management principles, and cloud computing basics.",
        skills: ["Database Design", "SQL", "Cloud Fundamentals", "Data Management", "Oracle Technologies"],
    },
    {
        id: 2,
        icon: "📜",
        title: "Design & Implementation of Human-Computer Interfaces",
        issuer: "NPTEL Online — IIT",
        type: "Academic Certification",
        color: "var(--accent)",
        description:
            "NPTEL course by IIT faculty covering HCI principles, user research methodologies, interface design patterns, cognitive ergonomics, usability evaluation, and prototyping techniques.",
        skills: ["UI/UX Design", "User Research", "Usability Testing", "Cognitive Ergonomics", "Interface Prototyping"],
    },
];

export function Certifications() {
    return (
        <section id="certifications" className="py-24 bg-[#080808] relative overflow-hidden" aria-label="Certifications">
            <SectionBackground variant="secondary" intensity="low" />
            <div className="container mx-auto px-4 relative z-10">

                {/* ── Section Header ───────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <span className="section-label inline-block text-[var(--secondary)] mb-3 px-3 py-1 border border-[var(--secondary)]/30 rounded-full">
                        07 / Certifications
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4"
                        style={{ fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}>
                        Certifications & Credentials
                    </h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            className="bg-[var(--surface-1)] border border-[var(--border)] rounded-sm overflow-hidden hover:border-[var(--primary)]/35 transition-all duration-300 group"
                            style={{ borderTop: `3px solid ${cert.color}` }}
                        >
                            {/* Card Header */}
                            <div className="p-6 border-b border-[var(--border)]">
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <span className="text-4xl" aria-hidden="true">{cert.icon}</span>
                                    {/* mono for type badge */}
                                    <span className="font-mono text-xs px-2 py-0.5 rounded-full border mt-1 flex-shrink-0"
                                          style={{
                                              color: cert.color,
                                              borderColor: `${cert.color}40`,
                                              backgroundColor: `${cert.color}10`,
                                          }}>
                                        {cert.type}
                                    </span>
                                </div>

                                {/* Poppins for cert title */}
                                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-1.5 leading-snug group-hover:text-[var(--primary)] transition-colors"
                                    style={{ fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}>
                                    {cert.title}
                                </h3>

                                <div className="flex items-center gap-2">
                                    <Award size={13} style={{ color: cert.color }} />
                                    {/* Inter for issuer */}
                                    <span className="text-sm font-medium" style={{ color: cert.color,
                                          fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}>
                                        {cert.issuer}
                                    </span>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6">
                                {/* Inter for description */}
                                <p className="text-sm leading-relaxed mb-5"
                                   style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}>
                                    {cert.description}
                                </p>

                                <div>
                                    <div className="section-label text-[var(--foreground)]/35 mb-3">Skills Validated</div>
                                    <div className="flex flex-wrap gap-2">
                                        {cert.skills.map((skill) => (
                                            <span key={skill}
                                                  className="flex items-center gap-1 px-2.5 py-1 text-xs font-mono bg-[var(--muted)] border border-[var(--border)] rounded-xs text-[var(--foreground)]/65 hover:border-[var(--primary)]/35 transition-colors">
                                                <CheckCircle size={9} style={{ color: cert.color }} />
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-10 text-center"
                >
                    <p className="font-mono text-xs text-[var(--foreground)]/25 flex items-center justify-center gap-2">
                        <ExternalLink size={10} />
                        Continuously learning   more credentials in progress.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
