"use client";

import { motion } from "framer-motion";
import { SectionBackground } from "@/components/ui/SectionBackground";

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
    return (
        <section id="skills" className="py-28 relative overflow-hidden" style={{ background: "#0a0a0a" }} aria-label="Technical Skills">
            <SectionBackground variant="accent" intensity="medium" />

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
                        03 / Skills
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
                        Technical Expertise
                    </h2>
                    <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: "linear-gradient(90deg, #00FF66, rgba(0,255,102,0.3))" }} />
                    <p
                        className="max-w-md mx-auto"
                        style={{
                            color: "rgba(255,255,255,0.88)",
                            fontSize: "1.05rem",
                            lineHeight: 1.8,
                        }}
                    >
                        Technologies I use daily to build, test, and ship production-grade software.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.07, duration: 0.4 }}
                            className="group relative"
                            style={{
                                background: "#101010",
                                border: "1px solid rgba(0,255,102,0.20)",
                                borderTop: "2.5px solid #00FF66",
                                borderRadius: 16,
                                padding: "32px",
                                transition: "border-color 0.22s ease, box-shadow 0.22s ease",
                                overflow: "hidden",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLDivElement;
                                el.style.borderColor = "rgba(0,255,102,0.55)";
                                el.style.boxShadow   = "0 0 0 1px rgba(0,255,102,0.55), 0 8px 40px rgba(0,0,0,0.5)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLDivElement;
                                el.style.borderColor = "rgba(0,255,102,0.20)";
                                el.style.boxShadow   = "none";
                            }}
                        >
                            {/* Subtle hover glow */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                                style={{ background: "radial-gradient(ellipse at top left, rgba(0,255,102,0.05), transparent 65%)" }}
                            />

                            {/* Category header */}
                            <div className="flex items-center gap-2.5 mb-5 pb-4 relative z-10" style={{ borderBottom: "1px solid rgba(0,255,102,0.10)" }}>
                                <span className="text-lg" aria-hidden="true">{category.emoji}</span>
                                <h3
                                    className="font-bold"
                                    style={{
                                        fontSize: "1rem",
                                        color: "#00FF66",
                                        fontFamily: "var(--font-heading, 'Poppins', sans-serif)",
                                    }}
                                >
                                    {category.title}
                                </h3>
                                <span
                                    className="ml-auto text-xs font-medium opacity-0 group-hover:opacity-80 transition-opacity"
                                    style={{ color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-mono)" }}
                                >
                                    {category.skills.length}
                                </span>
                            </div>

                            {/* Skill tags */}
                            <div className="flex flex-wrap gap-2 relative z-10">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-xs font-medium rounded-lg cursor-default transition-all duration-200"
                                        style={{
                                            background: "rgba(255,255,255,0.05)",
                                            border: "1px solid rgba(255,255,255,0.10)",
                                            color: "rgba(255,255,255,0.88)",
                                            fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                                        }}
                                        onMouseEnter={(e) => {
                                            const el = e.target as HTMLElement;
                                            el.style.background   = "#00FF66";
                                            el.style.color        = "#000";
                                            el.style.borderColor  = "#00FF66";
                                        }}
                                        onMouseLeave={(e) => {
                                            const el = e.target as HTMLElement;
                                            el.style.background   = "rgba(255,255,255,0.05)";
                                            el.style.color        = "rgba(255,255,255,0.88)";
                                            el.style.borderColor  = "rgba(255,255,255,0.10)";
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
