"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Calendar, Briefcase, TrendingUp, MapPin } from "lucide-react";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { stagger3D, card3DEntrance, fadeUp3D } from "@/components/ui/ScrollAnimationWrapper";
import { ScrollBounceText } from "@/components/ui/ScrollBounceText";
import { useTheme } from "@/context/ThemeContext";
import { themeColors } from "@/lib/themeColors";

const experience = [
    {
        id: 1,
        role: "Software Engineering Intern",
        company: "ABB Global Industries and Services Private Limited",
        period: "Aug 2025 – May 2026",
        location: "Bangalore, India",
        type: "Industry Internship",
        highlights: [
            "Engineered 300+ unit and integration test cases using Python, PyTest, Angular (Jasmine/Karma), and C#, boosting automated test coverage by 80% across critical production systems.",
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
    { label: "Test Cases Written", value: "120+" },
    { label: "Coverage Increase",  value: "80%"  },
    { label: "Bugs Eliminated",    value: "50+"  },
    { label: "Faster CI/CD",       value: "45%"  },
];

export function Experience() {
    const sectionRef = useRef<HTMLElement>(null);
    const { theme } = useTheme();
    const c = themeColors[theme];

    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

    const rotateX    = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [8, 0, 0, -6]);
    const translateY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -20]);
    const scale      = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0.96, 1, 1, 0.97]);

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="py-28 relative overflow-hidden"
            style={{ background: "var(--background)", perspective: "1200px", perspectiveOrigin: "50% 40%" }}
            aria-label="Work Experience"
        >
            <SectionBackground variant="accent" intensity="low" />

            {/* Scroll-linked 3D wrapper */}
            <motion.div
                style={{ rotateX, y: translateY, scale, transformStyle: "preserve-3d", willChange: "transform" }}
            >
                <div className="relative z-10 w-full mx-auto px-6 lg:px-8" style={{ maxWidth: 1280 }}>

                    {/* ── Section Header ── */}
                    <motion.div
                        variants={fadeUp3D}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="mb-16 text-center"
                    >
                        <span
                            className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                            style={{
                                color: c.primary,
                                border: `1px solid ${c.border}`,
                                background: c.primarySoft,
                            }}
                        >
                            01 / Experience
                        </span>
                        <h2
                            className="font-extrabold mb-4"
                            style={{
                                fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                                color: c.textHeading,
                                fontFamily: "var(--font-heading, 'Poppins', sans-serif)",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            <ScrollBounceText as="span">Work Experience</ScrollBounceText>
                        </h2>
                        <div className="w-16 h-0.5 mx-auto" style={{ background: `linear-gradient(90deg, ${c.primary}, ${c.border})` }} />
                    </motion.div>

                    {/* ── Impact Stats — staggered 3D entrance ── */}
                    <motion.div
                        variants={stagger3D}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16"
                    >
                        {impactStats.map((stat) => (
                            <motion.div
                                key={stat.label}
                                variants={card3DEntrance}
                                className="text-center"
                                style={{
                                    background: c.cardBg,
                                    border: `1px solid ${c.border}`,
                                    borderRadius: 16,
                                    padding: "28px 20px",
                                }}
                                whileHover={{
                                    scale: 1.06,
                                    rotateY: 5,
                                    boxShadow: `0 0 30px ${c.primary}2e, 0 12px 40px rgba(0,0,0,0.3)`,
                                    borderColor: c.borderHover,
                                    transition: { duration: 0.25 },
                                }}
                            >
                                <div
                                    className="font-black font-mono mb-2"
                                    style={{
                                        fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                                        color: c.primary,
                                        letterSpacing: "-0.02em",
                                    }}
                                >
                                    {stat.value}
                                </div>
                                <div
                                    className="text-sm font-medium"
                                    style={{
                                        color: c.textDesc,
                                        fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* ── Experience Card — 3D flip entrance ── */}
                    <div style={{ maxWidth: 900, margin: "0 auto" }}>
                        {experience.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={card3DEntrance}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-80px" }}
                                whileHover={{
                                    scale: 1.01,
                                    y: -4,
                                    boxShadow: `0 20px 60px rgba(0,0,0,0.3), 0 0 40px ${c.primary}1a`,
                                    transition: { duration: 0.3 },
                                }}
                            >
                                <div
                                    style={{
                                        background: c.cardBg,
                                        border: `1px solid ${c.border}`,
                                        borderTop: `3px solid ${c.primary}`,
                                        borderRadius: 16,
                                        overflow: "hidden",
                                        transition: "border-color 0.22s ease",
                                    }}
                                    onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = c.borderHover; }}
                                    onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = c.border; }}
                                >
                                    {/* Card Header */}
                                    <div className="p-8 md:p-10" style={{ borderBottom: `1px solid ${c.border}` }}>
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                            <div>
                                                <div className="flex items-center gap-2 mb-3">
                                                    <Briefcase size={14} style={{ color: c.primary }} />
                                                    <span
                                                        className="text-xs font-semibold px-3 py-1 rounded-full"
                                                        style={{
                                                            color: c.primary,
                                                            border: `1px solid ${c.border}`,
                                                            background: c.primarySoft,
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
                                                        color: c.textHeading,
                                                        fontFamily: "var(--font-heading, 'Poppins', sans-serif)",
                                                    }}
                                                >
                                                    {item.role}
                                                </h3>
                                                <h4
                                                    className="font-bold text-lg"
                                                    style={{ color: c.primary, fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}
                                                >
                                                    {item.company}
                                                </h4>
                                            </div>

                                            <div className="flex flex-col gap-2 md:text-right">
                                                <div
                                                    className="flex items-center gap-2 text-sm font-medium md:justify-end"
                                                    style={{ color: c.textLabel, fontFamily: "var(--font-mono)" }}
                                                >
                                                    <Calendar size={13} /> {item.period}
                                                </div>
                                                <div
                                                    className="flex items-center gap-1.5 text-sm md:justify-end font-medium"
                                                    style={{ color: c.textLabel, fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                                                >
                                                    <MapPin size={12} /> {item.location}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Highlights */}
                                    <div className="p-8 md:p-10">
                                        <div className="flex items-center gap-2 mb-6">
                                            <TrendingUp size={14} style={{ color: c.primary }} />
                                            <span
                                                className="text-xs font-bold uppercase tracking-widest"
                                                style={{ color: c.primary, fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                                            >
                                                Key Achievements
                                            </span>
                                        </div>

                                        <motion.ul
                                            variants={stagger3D}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            className="space-y-4 mb-8"
                                        >
                                            {item.highlights.map((point, pi) => (
                                                <motion.li
                                                    key={pi}
                                                    variants={fadeUp3D}
                                                    className="flex gap-3 items-start"
                                                >
                                                    <span style={{ color: c.primary, fontSize: "0.8rem", marginTop: 4, flexShrink: 0 }}>▸</span>
                                                    <p
                                                        style={{
                                                            color: c.textBody,
                                                            fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                                                            fontSize: "1rem",
                                                            lineHeight: 1.8,
                                                        }}
                                                    >
                                                        {point}
                                                    </p>
                                                </motion.li>
                                            ))}
                                        </motion.ul>

                                        {/* Tech Tags */}
                                        <div>
                                            <div
                                                className="text-xs font-bold uppercase tracking-widest mb-3"
                                                style={{ color: c.textLabel, fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                                            >
                                                Technologies Used
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {item.techStack.map((tech) => (
                                                    <motion.span
                                                        key={tech}
                                                        className="px-3 py-1.5 text-xs font-mono rounded-lg cursor-default"
                                                        style={{
                                                            background: theme === "dark" ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
                                                            border: `1px solid ${theme === "dark" ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.10)"}`,
                                                            color: c.textDesc,
                                                        }}
                                                        whileHover={{
                                                            background: c.primarySoft,
                                                            borderColor: c.borderHover,
                                                            color: c.primary,
                                                            scale: 1.06,
                                                            transition: { duration: 0.15 },
                                                        }}
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
