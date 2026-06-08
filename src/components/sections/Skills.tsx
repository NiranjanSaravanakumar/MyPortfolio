"use client";

import { motion } from "framer-motion";
import { SectionBackground } from "@/components/ui/SectionBackground";

const skillCategories = [
    {
        title: "Programming Languages",
        color: "var(--primary)",
        skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C#"],
    },
    {
        title: "Frontend",
        color: "var(--accent)",
        skills: ["React.js", "Next.js", "Angular", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
        title: "Backend & Frameworks",
        color: "var(--secondary)",
        skills: ["Node.js", "Express.js", "REST APIs", "PyTest", "Jasmine", "Karma"],
    },
    {
        title: "DevOps & Cloud",
        color: "var(--primary)",
        skills: ["Docker", "Kubernetes", "Azure DevOps", "GitHub Actions", "CI/CD", "SonarQube"],
    },
    {
        title: "Databases",
        color: "var(--accent)",
        skills: ["SQL", "MongoDB"],
    },
    {
        title: "Tools & Concepts",
        color: "var(--secondary)",
        skills: ["Git", "VS Code", "Visual Studio", "Postman", "Jira", "OOP", "Agile / Scrum", "API Testing", "Debugging"],
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-[#0a0a0a] relative overflow-hidden" aria-label="Technical Skills">
            <SectionBackground variant="accent" intensity="medium" />

            <div className="container mx-auto px-4 relative z-10">

                {/* ── Section Header ───────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <span className="section-label inline-block text-[var(--primary)] mb-3 px-3 py-1 border border-[var(--primary)]/30 rounded-full">
                        03 / Skills
                    </span>
                    {/* Poppins heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4"
                        style={{ fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}>
                        Technical Expertise
                    </h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto mb-4" />
                    {/* Inter for description */}
                    <p className="text-sm text-[var(--foreground)]/50 max-w-md mx-auto leading-relaxed"
                       style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}>
                        Technologies I use daily to build, test, and ship production-grade software.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, scale: 0.95, y: 15 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.07, duration: 0.4 }}
                            className="bg-[#0f0f0f] border border-[var(--border)] p-6 rounded-sm hover:border-[var(--primary)]/35 transition-all duration-300 group relative overflow-hidden"
                            style={{ borderTop: `2px solid ${category.color}` }}
                        >
                            {/* Radial glow on hover */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{ background: `radial-gradient(ellipse at top left, ${category.color}08, transparent 65%)` }}
                            />

                            {/* Category title — Poppins semi-bold */}
                            <h3 className="text-sm font-semibold mb-4 pb-3 border-b border-[var(--border)] flex justify-between items-center relative z-10"
                                style={{ color: category.color, fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}>
                                {category.title}
                                {/* mono badge for count */}
                                <span className="font-mono text-[10px] opacity-0 group-hover:opacity-60 transition-opacity text-[var(--foreground)]">
                                    {category.skills.length} skills
                                </span>
                            </h3>

                            {/* Skill tags — mono, perfect for tech identifiers */}
                            <div className="flex flex-wrap gap-2 relative z-10">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-2.5 py-1 bg-[var(--muted)] text-[var(--foreground)]/75 text-xs font-mono rounded-xs cursor-default transition-all duration-200"
                                        onMouseEnter={(e) => {
                                            const el = e.target as HTMLElement;
                                            el.style.backgroundColor = category.color;
                                            el.style.color = "#000";
                                        }}
                                        onMouseLeave={(e) => {
                                            const el = e.target as HTMLElement;
                                            el.style.backgroundColor = "";
                                            el.style.color = "";
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
