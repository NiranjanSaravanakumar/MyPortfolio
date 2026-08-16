"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { stagger3D, card3DEntrance, fadeUp3D } from "@/components/ui/ScrollAnimationWrapper";
import { ScrollBounceText } from "@/components/ui/ScrollBounceText";
import { useTheme } from "@/context/ThemeContext";
import { themeColors } from "@/lib/themeColors";

const skillCategories = [
    {
        title: "Programming Languages",
        emoji: "⌨️",
        skills: ["Python", "Java", "JavaScript", "TypeScript", "C#"],
    },
    {
        title: "Frontend",
        emoji: "🖥️",
        skills: ["React.js", "Next.js", "Angular", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
        title: "Backend & APIs",
        emoji: "⚙️",
        skills: ["Node.js", "Express.js", "REST APIs", "OpenAPI / Swagger", "SQL", "MongoDB"],
    },
    {
        title: "Testing",
        emoji: "🧪",
        skills: ["PyTest", "Jasmine", "Karma", "Unit Testing", "Integration Testing", "API Testing"],
    },
    {
        title: "DevOps & Cloud",
        emoji: "☁️",
        skills: ["Docker", "Kubernetes", "Azure DevOps", "GitHub Actions", "CI/CD", "SonarQube", "Linux / Bash"],
    },
    {
        title: "AI & Tools",
        emoji: "🤖",
        skills: ["Gemini AI", "Git", "Postman", "Jira", "VS Code", "Agile / Scrum"],
    },
];

export function Skills() {
    const sectionRef = useRef<HTMLElement>(null);
    const { theme } = useTheme();
    const c = themeColors[theme];

    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

    const rotateX    = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [10, 0, 0, -5]);
    const translateY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [60, 0, 0, -15]);
    const scale      = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0.95, 1, 1, 0.97]);

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="py-28 relative overflow-hidden"
            style={{ background: "var(--surface-1)", perspective: "1200px", perspectiveOrigin: "50% 40%" }}
            aria-label="Technical Skills"
        >
            <SectionBackground variant="accent" intensity="medium" />

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
                            03 / Skills
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
                            <ScrollBounceText as="span">Technical Expertise</ScrollBounceText>
                        </h2>
                        <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: `linear-gradient(90deg, ${c.primary}, ${c.border})` }} />
                        <p
                            className="max-w-md mx-auto"
                            style={{ color: c.textDesc, fontSize: "1.05rem", lineHeight: 1.8 }}
                        >
                            Technologies I use daily to build, test, and ship production-grade software.
                        </p>
                    </motion.div>

                    {/* ── Skill Cards — staggered 3D entrance ── */}
                    <motion.div
                        variants={stagger3D}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {skillCategories.map((category) => (
                            <motion.div
                                key={category.title}
                                variants={card3DEntrance}
                                className="group relative"
                                style={{
                                    background: c.cardBg,
                                    border: `1px solid ${c.border}`,
                                    borderTop: `2.5px solid ${c.primary}`,
                                    borderRadius: 16,
                                    padding: "32px",
                                    overflow: "hidden",
                                }}
                                whileHover={{
                                    scale: 1.03,
                                    rotateY: 3,
                                    rotateX: -2,
                                    y: -6,
                                    borderColor: c.borderHover,
                                    boxShadow: `0 0 0 1px ${c.borderHover}, 0 16px 50px rgba(0,0,0,0.20)`,
                                    transition: { duration: 0.3 },
                                }}
                            >
                                {/* Hover glow */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                                    style={{ background: `radial-gradient(ellipse at top left, ${c.primarySoft}, transparent 65%)` }}
                                />

                                {/* Category header */}
                                <div className="flex items-center gap-2.5 mb-5 pb-4 relative z-10" style={{ borderBottom: `1px solid ${c.border}` }}>
                                    <span className="text-lg" aria-hidden="true">{category.emoji}</span>
                                    <h3
                                        className="font-bold"
                                        style={{
                                            fontSize: "1rem",
                                            color: c.primary,
                                            fontFamily: "var(--font-heading, 'Poppins', sans-serif)",
                                        }}
                                    >
                                        {category.title}
                                    </h3>
                                    <span
                                        className="ml-auto text-xs font-medium opacity-0 group-hover:opacity-80 transition-opacity"
                                        style={{ color: c.textLabel, fontFamily: "var(--font-mono)" }}
                                    >
                                        {category.skills.length}
                                    </span>
                                </div>

                                {/* Skill tags */}
                                <div className="flex flex-wrap gap-2 relative z-10">
                                    {category.skills.map((skill) => (
                                        <motion.span
                                            key={skill}
                                            className="px-3 py-1.5 text-xs font-medium rounded-lg cursor-default"
                                            style={{
                                                background: theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                                                border: `1px solid ${theme === "dark" ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.10)"}`,
                                                color: c.textDesc,
                                                fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                                            }}
                                            whileHover={{
                                                background: c.primary,
                                                color: "#000",
                                                borderColor: c.primary,
                                                scale: 1.08,
                                                transition: { duration: 0.15 },
                                            }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
