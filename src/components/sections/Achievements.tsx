"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Users } from "lucide-react";
import { SectionBackground } from "@/components/ui/SectionBackground";

const achievements = [
    {
        id: 1,
        icon: "🏆",
        category: "Academic Excellence",
        categoryColor: "var(--primary)",
        title: "CGPA 8.65 / 10.0",
        description:
            "Maintaining a strong academic record of 8.65 GPA in B.Tech Information Technology at K S Rangasamy College of Technology — reflecting consistent performance and disciplined study habits.",
        tags: ["Top Performer", "B.Tech IT", "2023–2027"],
    },
    {
        id: 2,
        icon: "🎓",
        category: "Board Excellence",
        categoryColor: "var(--accent)",
        title: "89.67% in Higher Secondary",
        description:
            "Scored 89.67% in the Tamil Nadu Higher Secondary Board Examination (Science stream), demonstrating early aptitude in Mathematics, Physics, and Computer Science.",
        tags: ["Science Stream", "State Board", "2023"],
    },
    {
        id: 3,
        icon: "🏢",
        category: "Industry Recognition",
        categoryColor: "var(--secondary)",
        title: "ABB Software Engineering Internship",
        description:
            "Selected for a competitive Software Engineering internship at ABB (a global Fortune 500 company), working alongside senior engineers on enterprise-scale automation and quality assurance systems.",
        tags: ["ABB", "Fortune 500", "Bangalore"],
    },
    {
        id: 4,
        icon: "🛡️",
        category: "Code Quality",
        categoryColor: "var(--primary)",
        title: "70% Reduction in Critical Vulnerabilities",
        description:
            "Resolved 50+ SonarQube-identified security vulnerabilities across production UI and API systems at ABB, reducing critical code issues by 70% and significantly improving the project's security posture.",
        tags: ["SonarQube", "Security", "Production"],
    },
    {
        id: 5,
        icon: "🚀",
        category: "DevOps Impact",
        categoryColor: "var(--accent)",
        title: "45% Faster Release Cycles",
        description:
            "Redesigned CI/CD pipeline workflows using Docker, Kubernetes, and Azure DevOps at ABB, accelerating release validation cycles by 45% and enabling more frequent, confident deployments.",
        tags: ["CI/CD", "DevOps", "Azure"],
    },
    {
        id: 6,
        icon: "📜",
        category: "Certification",
        categoryColor: "var(--secondary)",
        title: "Oracle Certified Foundations Associate",
        description:
            "Earned the Oracle Certified Foundations Associate credential from Oracle University, validating core knowledge of database systems, SQL, and cloud computing fundamentals.",
        tags: ["Oracle", "Database", "Cloud"],
    },
];

const leadershipHighlights = [
    {
        icon: Users,
        title: "Cross-Functional Collaboration",
        desc: "Worked alongside 8+ developers and QA engineers at ABB, actively contributing to sprint planning, code reviews, and deployment discussions.",
        color: "var(--primary)",
    },
    {
        icon: Star,
        title: "Continuous Self-Development",
        desc: "Independently pursued NPTEL certification in Human-Computer Interfaces while managing an active internship and academic workload.",
        color: "var(--accent)",
    },
    {
        icon: Trophy,
        title: "Problem-First Mindset",
        desc: "Consistently approached challenges by understanding root causes — evident in the 35% reduction in defect identification time through structured debugging improvements.",
        color: "var(--secondary)",
    },
];

export function Achievements() {
    return (
        <section id="achievements" className="py-24 bg-[#0a0a0a] relative overflow-hidden" aria-label="Achievements">
            <SectionBackground variant="primary" intensity="low" />
            <div className="container mx-auto px-4 relative z-10">

                {/* ── Section Header ───────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <span className="section-label inline-block text-[var(--secondary)] mb-3 px-3 py-1 border border-[var(--secondary)]/30 rounded-full">
                        06 / Achievements
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4"
                        style={{ fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}>
                        Achievements & Recognition
                    </h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] mx-auto mb-4" />
                    <p className="text-sm text-[var(--foreground)]/50 max-w-md mx-auto leading-relaxed"
                       style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}>
                        Milestones and recognitions that reflect my growth as an engineer and a learner.
                    </p>
                </motion.div>

                {/* ── Achievement Cards Grid ─────────────── */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.4 }}
                            className="bg-[#0f0f0f] border border-[var(--border)] rounded-sm overflow-hidden hover:border-[var(--primary)]/35 transition-all duration-300 group p-6 relative"
                            style={{ borderLeft: `3px solid ${item.categoryColor}` }}
                        >
                            {/* Hover tint */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                                style={{ background: `radial-gradient(ellipse at bottom right, ${item.categoryColor}06, transparent 65%)` }}
                            />

                            {/* Icon + category */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl" aria-hidden="true">{item.icon}</span>
                                {/* mono for category badge */}
                                <span className="font-mono text-xs px-2 py-0.5 rounded-full border"
                                      style={{
                                          color: item.categoryColor,
                                          borderColor: `${item.categoryColor}40`,
                                          backgroundColor: `${item.categoryColor}12`,
                                      }}>
                                    {item.category}
                                </span>
                            </div>

                            {/* Title — Poppins */}
                            <h3 className="text-base font-semibold text-[var(--foreground)] mb-2 leading-snug group-hover:text-[var(--primary)] transition-colors"
                                style={{ fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}>
                                {item.title}
                            </h3>

                            {/* Description — Inter */}
                            <p className="text-xs text-[var(--foreground)]/60 leading-relaxed mb-4"
                               style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}>
                                {item.description}
                            </p>

                            {/* Tags — mono */}
                            <div className="flex flex-wrap gap-1.5">
                                {item.tags.map((tag) => (
                                    <span key={tag}
                                          className="font-mono text-[10px] px-2 py-0.5 bg-[var(--muted)] text-[var(--foreground)]/50 border border-[var(--border)] rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── Leadership Highlights ─────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-xl font-semibold text-center text-[var(--foreground)] mb-8"
                        style={{ fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}>
                        Leadership & Soft Skills
                    </h3>
                    <div className="grid md:grid-cols-3 gap-5">
                        {leadershipHighlights.map(({ icon: Icon, title, desc, color }, i) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-5 bg-[var(--muted)]/30 border border-[var(--border)] rounded-sm hover:border-[var(--primary)]/30 transition-colors group"
                            >
                                <div className="p-2.5 rounded-sm inline-block mb-4"
                                     style={{ backgroundColor: `${color}15` }}>
                                    <Icon size={18} style={{ color }} />
                                </div>
                                {/* Poppins for card title */}
                                <h4 className="text-sm font-semibold text-[var(--foreground)] mb-2"
                                    style={{ fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}>
                                    {title}
                                </h4>
                                {/* Inter for description */}
                                <p className="text-xs text-[var(--foreground)]/55 leading-relaxed"
                                   style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}>
                                    {desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
