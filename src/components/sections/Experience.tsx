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
    { label: "Test Cases Written", value: "120+", color: "#00FF66" },
    { label: "Coverage Increase",  value: "80%",  color: "#00FF66" },
    { label: "Bugs Eliminated",    value: "50+",  color: "#00FF66" },
    { label: "Faster CI/CD",       value: "45%",  color: "#00FF66" },
];

export function Experience() {
    return (
        <section id="experience" className="py-28 relative overflow-hidden" style={{ background: "#000000" }} aria-label="Work Experience">
            <SectionBackground variant="accent" intensity="low" />

            <div className="relative z-10 w-full mx-auto px-6 lg:px-8" style={{ maxWidth: 1280 }}>

                {/* ── Section Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <span
                        className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                        style={{
                            color: "#00FF66",
                            border: "1px solid rgba(0,255,102,0.25)",
                            background: "rgba(0,255,102,0.06)",
                        }}
                    >
                        01 / Experience
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
                        Work Experience
                    </h2>
                    <div className="w-16 h-0.5 mx-auto" style={{ background: "linear-gradient(90deg, #00FF66, rgba(0,255,102,0.3))" }} />
                </motion.div>

                {/* ── Impact Stats ── */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
                    {impactStats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="text-center"
                            style={{
                                background: "#101010",
                                border: "1px solid rgba(0,255,102,0.20)",
                                borderRadius: 16,
                                padding: "28px 20px",
                                transition: "border-color 0.22s ease, box-shadow 0.22s ease",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLDivElement;
                                el.style.borderColor = "rgba(0,255,102,0.50)";
                                el.style.boxShadow   = "0 4px 28px rgba(0,0,0,0.5)";
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
                                    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                                    color: stat.color,
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                {stat.value}
                            </div>
                            <div
                                className="text-sm font-medium"
                                style={{
                                    color: "rgba(255,255,255,0.88)",
                                    fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                                    lineHeight: 1.5,
                                }}
                            >
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── Experience Card ── */}
                <div style={{ maxWidth: 900, margin: "0 auto" }}>
                    {experience.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55 }}
                        >
                            <div
                                style={{
                                    background: "#101010",
                                    border: "1px solid rgba(0,255,102,0.20)",
                                    borderTop: "3px solid #00FF66",
                                    borderRadius: 16,
                                    overflow: "hidden",
                                    transition: "border-color 0.22s ease",
                                }}
                                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,255,102,0.45)"; }}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,255,102,0.20)"; }}
                            >
                                {/* Card Header */}
                                <div
                                    className="p-8 md:p-10"
                                    style={{ borderBottom: "1px solid rgba(0,255,102,0.10)" }}
                                >
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <Briefcase size={14} style={{ color: "#00FF66" }} />
                                                <span
                                                    className="text-xs font-semibold px-3 py-1 rounded-full"
                                                    style={{
                                                        color: "#00FF66",
                                                        border: "1px solid rgba(0,255,102,0.25)",
                                                        background: "rgba(0,255,102,0.07)",
                                                        fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                                                    }}
                                                >
                                                    {item.type}
                                                </span>
                                            </div>
                                            <h3
                                                className="font-bold mb-1"
                                                style={{
                                                    fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                                                    color: "#ffffff",
                                                    fontFamily: "var(--font-heading, 'Poppins', sans-serif)",
                                                }}
                                            >
                                                {item.role}
                                            </h3>
                                            <h4
                                                className="font-bold text-lg"
                                                style={{ color: "#00FF66", fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}
                                            >
                                                {item.company}
                                            </h4>
                                        </div>

                                        <div className="flex flex-col gap-2 md:text-right">
                                            <div
                                                className="flex items-center gap-2 text-sm font-medium md:justify-end"
                                                style={{ color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-mono)" }}
                                            >
                                                <Calendar size={13} /> {item.period}
                                            </div>
                                            <div
                                                className="flex items-center gap-1.5 text-sm md:justify-end font-medium"
                                                style={{ color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                                            >
                                                <MapPin size={12} /> {item.location}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Highlights */}
                                <div className="p-8 md:p-10">
                                    <div className="flex items-center gap-2 mb-6">
                                        <TrendingUp size={14} style={{ color: "#00FF66" }} />
                                        <span
                                            className="text-xs font-bold uppercase tracking-widest"
                                            style={{ color: "#00FF66", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                                        >
                                            Key Achievements
                                        </span>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        {item.highlights.map((point, pi) => (
                                            <motion.li
                                                key={pi}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.15 + pi * 0.06 }}
                                                className="flex gap-3 items-start"
                                            >
                                                <span style={{ color: "#00FF66", fontSize: "0.8rem", marginTop: 4, flexShrink: 0 }}>▸</span>
                                                <p
                                                    style={{
                                                        color: "rgba(255,255,255,0.92)",
                                                        fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                                                        fontSize: "1rem",
                                                        lineHeight: 1.8,
                                                    }}
                                                >
                                                    {point}
                                                </p>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    {/* Tech Tags */}
                                    <div>
                                        <div
                                            className="text-xs font-bold uppercase tracking-widest mb-3"
                                            style={{ color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                                        >
                                            Technologies Used
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {item.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1.5 text-xs font-mono rounded-lg cursor-default"
                                                    style={{
                                                        background: "rgba(255,255,255,0.04)",
                                                        border: "1px solid rgba(255,255,255,0.10)",
                                                        color: "rgba(255,255,255,0.88)",
                                                        transition: "border-color 0.2s ease, color 0.2s ease",
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        const el = e.target as HTMLElement;
                                                        el.style.borderColor = "rgba(0,255,102,0.45)";
                                                        el.style.color       = "#00FF66";
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        const el = e.target as HTMLElement;
                                                        el.style.borderColor = "rgba(255,255,255,0.10)";
                                                        el.style.color       = "rgba(255,255,255,0.88)";
                                                    }}
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
