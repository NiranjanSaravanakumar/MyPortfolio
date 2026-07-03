"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ExternalLink, Github, Folder, Zap, Cpu, Code2, Briefcase } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { SectionBackground } from "@/components/ui/SectionBackground";

const projects = [
    {
        title: "AI Roast My Resume",
        subtitle: "Brutally Honest AI Resume Analyzer",
        category: "Full-Stack Web App",
        description:
            "Upload your resume and receive Gemini AI-powered analysis — ATS compatibility scoring, quantified bullet rewrites, radar chart visualization across 6 dimensions, interview prep Q&A, and a targeted improvement roadmap.",
        problem:
            "Job seekers receive vague, generic resume feedback that fails to highlight real weaknesses, missing keywords, or ATS incompatibilities that cost them interviews.",
        solution:
            "Built a React + Flask pipeline that extracts resume text, sends it to Gemini 1.5 Flash with structured prompts, and renders 11+ AI-powered analysis modules with persistent SQLite history.",
        features: [
            "ATS compatibility score with missing keyword detection",
            "Bullet rewrite engine with action verbs & quantified impact",
            "Radar chart across 6 resume dimensions",
            "Interview prep: technical, HR & project-based questions",
            "LinkedIn headline & GitHub bio generator",
            "AI plagiarism & overused-project detector",
        ],
        impact:
            "Delivers recruiter-grade resume intelligence in seconds — turning generic CVs into shortlist-worthy documents through structured Gemini AI analysis and actionable rewrites.",
        githubLink: "https://github.com/NiranjanSaravanakumar/AI-Resume-Analyzer",
        liveLink: null,
        color: "var(--primary)",
        techStack: ["React", "Vite", "Flask", "Gemini AI", "SQLite", "Python"],
        icon: "🔥",
    },
    {
        title: "Expense Tracker",
        subtitle: "Personal Finance Web App",
        category: "Web Application",
        description:
            "A responsive web-based expense tracking application for logging, categorizing, and analyzing daily spending — built with a focus on intuitive UX, real-time dynamic updates, and persistent backend storage.",
        problem:
            "Users lack a simple, accessible tool to monitor daily spending, identify patterns, and make informed financial decisions.",
        solution:
            "Designed a single-page web app with dynamic frontend interactions and a Python backend API for data persistence and retrieval.",
        features: [
            "Dynamic expense logging with categories and dates",
            "Responsive layout optimized for all screen sizes",
            "Summary views and spending breakdowns",
            "Backend API for secure data persistence",
        ],
        impact:
            "Enables informed personal finance decisions through clear category-based breakdowns and easy data retrieval.",
        githubLink: "https://github.com/NiranjanSaravanakumar/Expense-Tracker",
        liveLink: null,
        color: "var(--accent)",
        techStack: ["HTML", "CSS", "JavaScript", "Python"],
        icon: "💰",
    },
    {
        title: "Web Blog Platform",
        subtitle: "Full-Stack Content Management System",
        category: "Full-Stack Web App",
        description:
            "A modern full-stack blogging platform with a React + TypeScript frontend, RESTful API backend, and MongoDB for scalable content storage. Features reusable UI components and full CRUD capabilities.",
        problem:
            "Developers need a customizable, fast blogging platform that supports dynamic content management without sacrificing code maintainability.",
        solution:
            "Built a component-driven React frontend with TypeScript for type safety, paired with a Node.js/Express backend and MongoDB for flexible, scalable content management.",
        features: [
            "Full CRUD operations for blog posts",
            "Reusable React component library",
            "TypeScript for end-to-end type safety",
            "MongoDB for flexible, scalable content storage",
            "Optimized API response and content retrieval",
        ],
        impact:
            "Demonstrates end-to-end full-stack proficiency — from UI architecture and state management to RESTful API design and NoSQL schema modeling.",
        githubLink: "https://github.com/NiranjanSaravanakumar/Web-blog",
        liveLink: null,
        color: "var(--secondary)",
        techStack: ["React.js", "TypeScript", "MongoDB", "Node.js", "Express.js"],
        icon: "📝",
    },
];

const overviewStats = [
    { label: "Projects Built",  value: 3,  suffix: "+", icon: <Code2 size={17} />,    color: "var(--primary)"   },
    { label: "Internship",      value: 1,  suffix: "",  icon: <Briefcase size={17} />, color: "var(--accent)"    },
    { label: "Tech Skills",     value: 15, suffix: "+", icon: <Cpu size={17} />,       color: "var(--secondary)" },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) { setCount(0); return; }
        const steps = 40;
        const stepDuration = 1500 / steps;
        let step = 0;
        const timer = setInterval(() => {
            step++;
            if (step >= steps) { setCount(value); clearInterval(timer); }
            else { setCount(Math.floor(value * (1 - Math.pow(1 - step / steps, 3)))); }
        }, stepDuration);
        return () => clearInterval(timer);
    }, [value, inView]);

    return <span className="tabular-nums">{count}{suffix}</span>;
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.5 }}
            className="flex flex-col h-full"
        >
            <TiltCard className="h-full">
                <div
                    className="relative bg-[var(--surface-1)] p-7 h-full overflow-hidden flex flex-col"
                    style={{ borderTop: `3px solid ${project.color}` }}
                >

                    {/* Header row */}
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl" aria-hidden="true">{project.icon}</span>
                            <Folder size={19} style={{ color: "rgba(255,255,255,0.25)" }} />
                        </div>
                        <div className="flex items-center gap-2">
                            {project.liveLink && (
                                <a href={project.liveLink} target="_blank" rel="noreferrer"
                                   aria-label={`Live demo — ${project.title}`}
                                   style={{ color: "rgba(255,255,255,0.25)" }}>
                                    <ExternalLink size={14} />
                                </a>
                            )}
                            <a href={project.githubLink} target="_blank" rel="noreferrer"
                               aria-label={`GitHub — ${project.title}`}
                               style={{ color: "rgba(255,255,255,0.25)" }}>
                                <Github size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Title — Poppins */}
                    <div className="relative z-10 mb-3">
                        <h3 className="text-xl font-bold leading-snug"
                            style={{
                                color: "var(--foreground)",
                                fontFamily: "var(--font-heading, 'Poppins', sans-serif)",
                            }}>
                            {project.title}
                        </h3>
                        {/* Inter for subtitle */}
                        <p className="text-xs text-[var(--foreground)]/45 mt-0.5"
                           style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}>
                            {project.subtitle}
                        </p>
                        {/* mono for category tag */}
                        <p className="font-mono text-xs mt-1.5 flex items-center gap-1 text-[var(--foreground)]/35 uppercase tracking-wider">
                            <Zap size={10} style={{ color: project.color }} />
                            {project.category}
                        </p>
                    </div>

                    {/* Description — Inter, proper contrast */}
                    <p className="text-[15px] leading-relaxed mb-5 relative z-10 flex-grow"
                       style={{ color: "var(--text-body)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}>
                        {project.description}
                    </p>

                    {/* Expandable detail panel */}
                    <AnimatePresence>
                        {showDetails && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="relative z-10 mb-4 overflow-hidden"
                            >
                                <div className="border-t border-[var(--border)] pt-4 space-y-3">
                                    {[
                                        { key: "Problem",  text: project.problem  },
                                        { key: "Solution", text: project.solution },
                                    ].map(({ key, text }) => (
                                        <div key={key}>
                                            {/* section-label for key */}
                                            <div className="section-label text-xs mb-1.5"
                                                 style={{ color: project.color }}>
                                                {key}
                                            </div>
                                            {/* Inter body — readable size and contrast */}
                                            <p className="text-sm leading-relaxed"
                                               style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}>
                                                {text}
                                            </p>
                                        </div>
                                    ))}
                                    <div>
                                        <div className="section-label text-xs mb-1.5"
                                             style={{ color: project.color }}>
                                            Key Features
                                        </div>
                                        <ul className="space-y-1.5">
                                            {project.features.map((f) => (
                                                <li key={f} className="flex gap-2 items-start">
                                                    <span className="text-[10px] mt-1.5 flex-shrink-0" style={{ color: project.color }}>›</span>
                                                    <span className="text-sm leading-relaxed"
                                                          style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}>
                                                        {f}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="section-label text-xs mb-1.5"
                                             style={{ color: project.color }}>
                                            Impact
                                        </div>
                                        <p className="text-sm leading-relaxed"
                                           style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}>
                                            {project.impact}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Tech tags — mono */}
                    <div className="flex flex-wrap gap-1.5 mb-4 relative z-10">
                        {project.techStack.map((tech) => (
                            <span key={tech}
                                  className="px-2 py-0.5 text-xs font-mono rounded"
                                  style={{
                                      backgroundColor: "var(--muted)",
                                      color: "var(--foreground)",
                                      border: "1px solid transparent",
                                  }}>
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Toggle details — Inter, clean readable button */}
                    <button
                        onClick={() => setShowDetails(!showDetails)}
                        aria-expanded={showDetails}
                        className="flex items-center gap-1.5 text-sm font-medium transition-colors relative z-10 text-left mt-auto"
                        style={{
                            color: showDetails ? project.color : "var(--text-dim)",
                            fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                        }}
                    >
                        {showDetails ? "Collapse ↑" : "View Details →"}
                    </button>


                </div>
            </TiltCard>
        </motion.div>
    );
}

export function Projects() {
    const statsRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(statsRef, { once: true, margin: "-50px" });

    return (
        <section id="projects" className="py-24 bg-[#0a0a0a] relative overflow-hidden" aria-label="Projects">
            <SectionBackground variant="primary" intensity="medium" />

            <div className="container mx-auto px-4 relative z-10">

                {/* ── Section Header ───────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <span className="section-label inline-block text-[var(--secondary)] mb-3 px-3 py-1 border border-[var(--secondary)]/30 rounded-full">
                        02 / Projects
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4"
                        style={{ fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}>
                        Featured Projects
                    </h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] mx-auto mb-4" />
                    
                </motion.div>

                {/* Stats row — mono for numbers */}
                <div ref={statsRef} className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
                    {overviewStats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-2 px-5 py-2.5 bg-[var(--surface-1)] border border-[var(--border)] rounded-full hover:border-[var(--primary)]/60 transition-all"
                        >
                            <span style={{ color: stat.color }}>{stat.icon}</span>
                            <span className="font-mono font-bold text-lg" style={{ color: stat.color }}>
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                            </span>
                            <span className="text-xs text-[var(--foreground)]/55"
                                  style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}>
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Project grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
