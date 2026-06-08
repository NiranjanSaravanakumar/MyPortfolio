"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, CheckCircle } from "lucide-react";
import { SectionBackground } from "@/components/ui/SectionBackground";

const certifications = [
    {
        id: 1,
        title: "Oracle Certified Foundations Associate",
        issuer: "Oracle University",
        type: "Professional Certification",
        color: "var(--primary)",
        badge: "🏅",
        description:
            "Validates foundational knowledge of Oracle technologies including database fundamentals, cloud concepts, and data management principles — issued by Oracle University.",
        skills: ["Database Fundamentals", "SQL", "Cloud Basics", "Data Management"],
    },
    {
        id: 2,
        title: "Design & Implementation of Human-Computer Interfaces",
        issuer: "NPTEL Online — IIT",
        type: "Academic Certification",
        color: "var(--accent)",
        badge: "📜",
        description:
            "Comprehensive NPTEL course covering HCI principles, user research methodologies, interface design patterns, usability testing, and cognitive ergonomics — offered by IIT through the NPTEL platform.",
        skills: ["UI/UX Design", "User Research", "Usability Testing", "Cognitive Ergonomics", "Interface Prototyping"],
    },
];

export function Certifications() {
    return (
        <section id="certifications" className="py-24 bg-[#080808] relative overflow-hidden">
            <SectionBackground variant="secondary" intensity="low" />
            <div className="container mx-auto px-4 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <span className="inline-block font-mono text-xs text-[var(--secondary)] uppercase tracking-widest mb-3 px-3 py-1 border border-[var(--secondary)]/30 rounded-full">
                        05 / Certifications
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
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
                            className="bg-[#0f0f0f] border border-[var(--border)] rounded-sm overflow-hidden hover:border-[var(--primary)]/40 transition-all duration-300 group"
                            style={{ borderTop: `3px solid ${cert.color}` }}
                        >
                            {/* Card Header */}
                            <div className="p-6 border-b border-[var(--border)]">
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <span className="text-4xl">{cert.badge}</span>
                                    <span
                                        className="text-xs font-mono px-2 py-0.5 rounded-full border mt-1 flex-shrink-0"
                                        style={{
                                            color: cert.color,
                                            borderColor: `${cert.color}40`,
                                            backgroundColor: `${cert.color}10`,
                                        }}
                                    >
                                        {cert.type}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-[var(--foreground)] mb-1 leading-snug group-hover:text-[var(--primary)] transition-colors">
                                    {cert.title}
                                </h3>
                                <div className="flex items-center gap-2">
                                    <Award size={14} style={{ color: cert.color }} />
                                    <span className="text-sm font-medium" style={{ color: cert.color }}>{cert.issuer}</span>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6">
                                <p className="text-sm text-[var(--foreground)]/65 leading-relaxed mb-5">{cert.description}</p>

                                <div>
                                    <div className="text-xs font-mono uppercase tracking-wider text-[var(--foreground)]/40 mb-3">Skills Validated</div>
                                    <div className="flex flex-wrap gap-2">
                                        {cert.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="flex items-center gap-1 px-2.5 py-1 text-xs font-mono bg-[var(--muted)] border border-[var(--border)] rounded-xs text-[var(--foreground)]/70 hover:border-[var(--primary)]/40 transition-colors"
                                            >
                                                <CheckCircle size={10} style={{ color: cert.color }} />
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-xs font-mono text-[var(--foreground)]/30 flex items-center justify-center gap-2">
                        <ExternalLink size={11} />
                        Continuously learning — more certifications in progress.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
