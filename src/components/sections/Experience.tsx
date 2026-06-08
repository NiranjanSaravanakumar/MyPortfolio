"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase, TrendingUp, MapPin } from "lucide-react";
import { SectionBackground } from "@/components/ui/SectionBackground";

const experience = [
    {
        id: 1,
        role: "Software Engineering Intern",
        company: "ABB",
        period: "Aug 2025 – May 2026",
        location: "Bangalore, India",
        type: "Industry Internship",
        color: "var(--primary)",
        highlights: [
            "Engineered 120+ unit and integration test cases using Python, PyTest, Angular (Jasmine/Karma), and C#, boosting automated test coverage by 80% across critical production systems.",
            "Containerized test environments with Docker and Kubernetes, integrated Azure DevOps CI/CD pipelines, cutting release validation cycles by 45%.",
            "Identified and remediated 50+ SonarQube vulnerabilities across UI and API layers, reducing critical code defects by 70% and improving long-term maintainability.",
            "Optimized .NET-based automation pipelines in Python and C#, reducing defect identification time by 35% and accelerating QA throughput.",
            "Collaborated with 8+ developers and QA engineers in agile sprints to refine deployment workflows and uphold software quality standards.",
        ],
        techStack: [
            "Python", "PyTest", "C#", ".NET", "Angular",
            "Jasmine", "Karma", "Docker", "Kubernetes",
            "Azure DevOps", "CI/CD", "SonarQube",
        ],
    },
];

const impactStats = [
    { label: "Test Cases Written",  value: "120+", color: "var(--primary)"   },
    { label: "Coverage Increase",   value: "80%",  color: "var(--accent)"    },
    { label: "Bugs Eliminated",     value: "50+",  color: "var(--secondary)" },
    { label: "Faster CI/CD",        value: "45%",  color: "var(--primary)"   },
];

export function Experience() {
    return (
        <section id="experience" className="py-24 relative bg-[#080808] overflow-hidden" aria-label="Work Experience">
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
                        02 / Experience
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4"
                        style={{ fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}>
                        Work Experience
                    </h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] mx-auto" />
                </motion.div>

                {/* ── Impact Stats ─────────────────────────── */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {impactStats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="text-center p-5 bg-[var(--muted)]/40 border border-[var(--border)] rounded-sm hover:border-[var(--primary)]/40 transition-all group"
                        >
                            {/* mono for numbers — looks great for stats */}
                            <div className="text-3xl font-bold font-mono mb-1.5 group-hover:scale-105 transition-transform"
                                 style={{ color: stat.color }}>
                                {stat.value}
                            </div>
                            {/* Inter for labels */}
                            <div className="text-xs text-[var(--foreground)]/50"
                                 style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}>
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── Experience Card ───────────────────────── */}
                <div className="max-w-4xl mx-auto">
                    {experience.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div
                                className="bg-[var(--surface-1,#0f0f0f)] border border-[var(--border)] rounded-sm overflow-hidden hover:border-[var(--primary)]/35 transition-all group"
                                style={{ borderTop: `3px solid ${item.color}` }}
                            >
                                {/* Card Header */}
                                <div className="p-6 md:p-8 border-b border-[var(--border)]">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <Briefcase size={15} style={{ color: item.color }} />
                                                {/* mono badge for type */}
                                                <span className="font-mono text-xs px-2 py-0.5 rounded-full border"
                                                      style={{
                                                          color: item.color,
                                                          borderColor: `${item.color}40`,
                                                          backgroundColor: `${item.color}10`,
                                                      }}>
                                                    {item.type}
                                                </span>
                                            </div>
                                            {/* Poppins for role */}
                                            <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-0.5"
                                                style={{ fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}>
                                                {item.role}
                                            </h3>
                                            {/* Poppins semi-bold for company */}
                                            <h4 className="text-base font-semibold"
                                                style={{ color: item.color, fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}>
                                                {item.company}
                                            </h4>
                                        </div>

                                        <div className="flex flex-col gap-1.5 md:text-right">
                                            {/* mono for dates — suits timeline data */}
                                            <div className="flex items-center gap-2 font-mono text-xs text-[var(--foreground)]/50 md:justify-end">
                                                <Calendar size={12} /> {item.period}
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs text-[var(--foreground)]/40 md:justify-end"
                                                 style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}>
                                                <MapPin size={11} /> {item.location}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Highlights */}
                                <div className="p-6 md:p-8">
                                    <div className="flex items-center gap-2 mb-5">
                                        <TrendingUp size={14} className="text-[var(--accent)]" />
                                        <span className="section-label text-[var(--accent)]">Key Achievements</span>
                                    </div>

                                    <ul className="space-y-3.5 mb-8">
                                        {item.highlights.map((point, pi) => (
                                            <motion.li
                                                key={pi}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.15 + pi * 0.07 }}
                                                className="flex gap-3 items-start"
                                            >
                                                <span className="text-[var(--primary)] text-sm mt-0.5 flex-shrink-0">▸</span>
                                                {/* Inter for body text */}
                                                <p className="text-[var(--foreground)]/70 text-sm leading-relaxed"
                                                   style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}>
                                                    {point}
                                                </p>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    {/* Tech Tags — mono is ideal for tech identifiers */}
                                    <div>
                                        <div className="section-label text-[var(--foreground)]/35 mb-3">Technologies Used</div>
                                        <div className="flex flex-wrap gap-2">
                                            {item.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2.5 py-1 text-xs font-mono bg-[var(--muted)] text-[var(--foreground)]/65 border border-[var(--border)] rounded-xs hover:border-[var(--primary)]/50 hover:text-[var(--primary)] transition-all cursor-default"
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
