"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase, TrendingUp } from "lucide-react";
import { SectionBackground } from "@/components/ui/SectionBackground";

const experience = [
    {
        id: 1,
        role: "Software Engineering Intern",
        company: "ABB",
        period: "Aug 2025 – May 2026",
        location: "Bangalore, India",
        type: "Internship",
        color: "var(--primary)",
        highlights: [
            "Engineered 120+ unit and integration test cases using Python, PyTest, Angular, Jasmine, Karma, and C#, achieving an 80% increase in automated test coverage across critical systems.",
            "Streamlined testing workflows by containerizing environments with Docker and Kubernetes, integrating CI/CD pipelines via Azure DevOps — cutting release validation cycles by 45%.",
            "Identified and resolved 50+ SonarQube vulnerabilities across UI and API projects, reducing critical code issues by 70% and significantly improving codebase health.",
            "Optimized automation pipelines across .NET-based systems using Python and C#, reducing defect identification time by 35%.",
            "Collaborated with a cross-functional team of 8+ developers and QA engineers to refine deployment workflows and elevate software quality standards.",
        ],
        techStack: ["Python", "PyTest", "C#", ".NET", "Angular", "Jasmine", "Karma", "Docker", "Kubernetes", "Azure DevOps", "CI/CD", "SonarQube"],
    },
];

const stats = [
    { label: "Test Cases Written", value: "120+", color: "var(--primary)" },
    { label: "Automation Coverage", value: "80%", color: "var(--accent)" },
    { label: "Vulnerabilities Fixed", value: "50+", color: "var(--secondary)" },
    { label: "Release Cycle Reduction", value: "45%", color: "var(--primary)" },
];

export function Experience() {
    return (
        <section id="experience" className="py-24 relative bg-[#080808] overflow-hidden">
            <SectionBackground variant="accent" intensity="low" />
            <div className="container mx-auto px-4 relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <span className="inline-block font-mono text-xs text-[var(--accent)] uppercase tracking-widest mb-3 px-3 py-1 border border-[var(--accent)]/30 rounded-full">
                        02 / Experience
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
                        Work Experience
                    </h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] mx-auto" />
                </motion.div>

                {/* Impact Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center p-5 bg-[var(--muted)]/30 border border-[var(--border)] rounded-sm hover:border-[var(--primary)]/50 transition-all group"
                        >
                            <div
                                className="text-3xl font-bold font-mono mb-1 group-hover:scale-110 transition-transform"
                                style={{ color: stat.color }}
                            >
                                {stat.value}
                            </div>
                            <div className="text-xs text-[var(--foreground)]/50 uppercase tracking-wide">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Experience Cards */}
                <div className="max-w-4xl mx-auto">
                    {experience.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="relative"
                        >
                            {/* Card */}
                            <div
                                className="bg-[#0f0f0f] border border-[var(--border)] rounded-sm overflow-hidden hover:border-[var(--primary)]/40 transition-all group"
                                style={{ borderTop: `3px solid ${item.color}` }}
                            >
                                {/* Card Header */}
                                <div className="p-6 md:p-8 border-b border-[var(--border)]">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <Briefcase size={16} style={{ color: item.color }} />
                                                <span
                                                    className="text-xs font-mono px-2 py-0.5 rounded-full border"
                                                    style={{
                                                        color: item.color,
                                                        borderColor: `${item.color}40`,
                                                        backgroundColor: `${item.color}10`,
                                                    }}
                                                >
                                                    {item.type}
                                                </span>
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-1">{item.role}</h3>
                                            <h4 className="text-base md:text-lg font-semibold" style={{ color: item.color }}>{item.company}</h4>
                                        </div>
                                        <div className="flex flex-col gap-1 md:text-right">
                                            <div className="flex items-center gap-2 text-xs font-mono text-[var(--foreground)]/50 md:justify-end">
                                                <Calendar size={12} />
                                                {item.period}
                                            </div>
                                            <div className="text-xs text-[var(--foreground)]/40">{item.location}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Highlights */}
                                <div className="p-6 md:p-8">
                                    <div className="flex items-center gap-2 mb-5">
                                        <TrendingUp size={15} className="text-[var(--accent)]" />
                                        <span className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest">Key Achievements</span>
                                    </div>
                                    <ul className="space-y-3 mb-8">
                                        {item.highlights.map((point, pi) => (
                                            <motion.li
                                                key={pi}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.2 + pi * 0.08 }}
                                                className="flex gap-3 items-start"
                                            >
                                                <span className="text-[var(--primary)] text-sm mt-0.5 flex-shrink-0">▸</span>
                                                <p className="text-[var(--foreground)]/70 text-sm leading-relaxed">{point}</p>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    {/* Tech Stack */}
                                    <div>
                                        <div className="text-xs font-mono text-[var(--foreground)]/40 uppercase tracking-wider mb-3">Technologies Used</div>
                                        <div className="flex flex-wrap gap-2">
                                            {item.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2.5 py-1 text-xs font-mono bg-[var(--muted)] text-[var(--foreground)]/70 border border-[var(--border)] rounded-xs hover:border-[var(--primary)]/50 hover:text-[var(--primary)] transition-all cursor-default"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
