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
        title: "Frameworks & Libraries",
        color: "var(--accent)",
        skills: ["React.js", "Next.js", "Node.js", "Express.js", "Angular", "Tailwind CSS", "PyTest", "Jasmine", "Karma"],
    },
    {
        title: "DevOps & Cloud",
        color: "var(--secondary)",
        skills: ["Docker", "Kubernetes", "Azure DevOps", "GitHub Actions", "CI/CD Pipelines", "SonarQube"],
    },
    {
        title: "Tools & Platforms",
        color: "var(--primary)",
        skills: ["Git", "VS Code", "Visual Studio", "Postman", "Jira"],
    },
    {
        title: "Databases",
        color: "var(--accent)",
        skills: ["SQL", "MongoDB"],
    },
    {
        title: "Core Concepts",
        color: "var(--secondary)",
        skills: ["Regression Testing", "API Testing", "Debugging", "CI/CD", "Object-Oriented Programming", "Agile / Scrum", "REST APIs"],
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            <SectionBackground variant="accent" intensity="medium" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <span className="inline-block font-mono text-xs text-[var(--primary)] uppercase tracking-widest mb-3 px-3 py-1 border border-[var(--primary)]/30 rounded-full">
                        03 / Skills
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
                        Technical Expertise
                    </h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto mb-4" />
                    <p className="text-sm text-[var(--foreground)]/50 max-w-md mx-auto">
                        A curated set of technologies I use to build, test, and ship production-grade software.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, scale: 0.95, y: 15 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.4 }}
                            className="bg-[#0f0f0f] border border-[var(--border)] p-6 rounded-sm hover:border-[var(--primary)]/40 transition-all duration-300 group relative overflow-hidden"
                            style={{ borderTop: `2px solid ${category.color}` }}
                        >
                            {/* Hover glow */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{
                                    background: `radial-gradient(ellipse at top left, ${category.color}08, transparent 60%)`,
                                }}
                            />

                            <h3
                                className="font-mono text-xs uppercase tracking-widest mb-4 pb-3 border-b border-[var(--border)] flex justify-between items-center relative z-10"
                                style={{ color: category.color }}
                            >
                                {category.title}
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--foreground)]/30 normal-case text-[10px]">
                                    {category.skills.length} skills
                                </span>
                            </h3>
                            <div className="flex flex-wrap gap-2 relative z-10">
                                {category.skills.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-2.5 py-1 bg-[var(--muted)] text-[var(--foreground)]/80 text-xs font-mono rounded-xs cursor-default transition-all duration-200 hover:text-black border border-transparent"
                                        style={{
                                            // On hover via CSS group
                                        }}
                                        onMouseEnter={(e) => {
                                            (e.target as HTMLElement).style.backgroundColor = category.color;
                                            (e.target as HTMLElement).style.color = "#000";
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.target as HTMLElement).style.backgroundColor = "";
                                            (e.target as HTMLElement).style.color = "";
                                        }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
