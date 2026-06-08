"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ExternalLink, Github, Folder, Zap, Cpu, Code2, Briefcase } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { SectionBackground } from "@/components/ui/SectionBackground";

const projects = [
    {
        title: "RoomLogix",
        subtitle: "Hotel Management System",
        category: "Desktop Application",
        description:
            "A fully-featured desktop hotel management system designed to streamline front-desk operations. Handles booking, check-in/check-out workflows, staff management, and room availability tracking through a clean, intuitive interface.",
        problem: "Manual hotel operations lead to booking errors, poor tracking, and inefficient staff coordination.",
        features: ["Real-time room availability tracking", "Booking & check-in/check-out management", "Staff role management", "Structured data handling & reporting"],
        impact: "Improved operational efficiency by automating manual workflows, reducing booking errors and front-desk response time.",
        link: "https://github.com/nickniranjan2929",
        color: "var(--primary)",
        techStack: ["Python", "Tkinter", "SQLite"],
        icon: "🏨",
    },
    {
        title: "Expense Tracker",
        subtitle: "Personal Finance Management",
        category: "Web Application",
        description:
            "A responsive web-based expense tracking application that allows users to log, categorize, and analyze their spending. Built with a focus on intuitive UX, real-time dynamic updates, and seamless data persistence.",
        problem: "Users lack a simple, accessible tool to monitor daily spending and identify financial patterns.",
        features: ["Dynamic expense logging with categories", "Interactive charts & summary views", "Responsive design for all screen sizes", "Backend API for data persistence"],
        impact: "Enables data-driven personal finance decisions with clear visual breakdowns of spending habits.",
        link: "https://github.com/nickniranjan2929",
        color: "var(--accent)",
        techStack: ["HTML", "CSS", "JavaScript", "Python"],
        icon: "💰",
    },
    {
        title: "Web Blog Platform",
        subtitle: "Full-Stack Blogging CMS",
        category: "Full-Stack Web App",
        description:
            "A modern, full-stack blogging platform with a React + TypeScript frontend and a MongoDB backend. Features reusable UI components, server-side rendering, and full CRUD capabilities for content management.",
        problem: "Existing blog platforms lack developer-friendly customization and fast content management workflows.",
        features: ["Full CRUD for blog posts", "Reusable React component library", "TypeScript for type safety", "MongoDB for scalable content storage", "Optimized content retrieval"],
        impact: "Demonstrates end-to-end full-stack proficiency, from UI architecture to database schema design and API integration.",
        link: "https://github.com/nickniranjan2929",
        color: "var(--secondary)",
        techStack: ["React.js", "TypeScript", "MongoDB", "Node.js", "Express.js"],
        icon: "📝",
    },
];

const stats = [
    { label: "Projects Built", value: 3, suffix: "+", icon: <Code2 size={18} />, color: "var(--primary)" },
    { label: "Internship", value: 1, suffix: "", icon: <Briefcase size={18} />, color: "var(--accent)" },
    { label: "Tech Stack", value: 15, suffix: "+", icon: <Cpu size={18} />, color: "var(--secondary)" },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) {
            setCount(0);
            return;
        }
        const duration = 1500;
        const steps = 40;
        const stepDuration = duration / steps;
        let currentStep = 0;
        const timer = setInterval(() => {
            currentStep++;
            if (currentStep >= steps) {
                setCount(value);
                clearInterval(timer);
            } else {
                const progress = currentStep / steps;
                const easeOut = 1 - Math.pow(1 - progress, 3);
                setCount(Math.floor(value * easeOut));
            }
        }, stepDuration);
        return () => clearInterval(timer);
    }, [value, inView]);

    return <span className="tabular-nums">{count}{suffix}</span>;
}

interface ProjectCardProps {
    project: typeof projects[0];
    index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.5 }}
            className="flex flex-col h-full"
        >
            <TiltCard className="h-full cursor-pointer" glareEnabled={true}>
                <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative bg-[#0f0f0f] p-6 h-full overflow-hidden group flex flex-col"
                    style={{ borderTop: `3px solid ${project.color}` }}
                >
                    {/* Animated background on hover */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                            background: `radial-gradient(ellipse at top right, ${project.color}08, transparent 60%)`,
                        }}
                    />

                    {/* Header */}
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">{project.icon}</span>
                            <Folder
                                className="transition-colors duration-300"
                                style={{ color: isHovered ? project.color : "rgba(255,255,255,0.3)" }}
                                size={20}
                            />
                        </div>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`View ${project.title} on GitHub`}
                            className="flex items-center gap-1 transition-colors duration-300 hover:opacity-100"
                            style={{ color: isHovered ? project.color : "rgba(255,255,255,0.3)" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Github size={16} />
                            <ExternalLink size={14} />
                        </a>
                    </div>

                    {/* Title & Category */}
                    <div className="relative z-10 mb-3">
                        <h3
                            className="text-xl font-bold font-sans transition-colors duration-300 leading-snug"
                            style={{ color: isHovered ? project.color : "var(--foreground)" }}
                        >
                            {project.title}
                        </h3>
                        <p className="text-xs text-[var(--foreground)]/50 mt-0.5">{project.subtitle}</p>
                        <p className="text-xs font-mono mt-1 flex items-center gap-1 text-[var(--foreground)]/40 uppercase tracking-wider">
                            <Zap size={10} style={{ color: project.color }} />
                            {project.category}
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-[var(--foreground)]/65 text-sm leading-relaxed mb-4 relative z-10 flex-grow">
                        {project.description}
                    </p>

                    {/* Expandable Details */}
                    <AnimatePresence>
                        {showDetails && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="relative z-10 mb-4 overflow-hidden"
                            >
                                <div className="border-t border-[var(--border)] pt-4 space-y-3">
                                    <div>
                                        <div className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: project.color }}>Problem</div>
                                        <p className="text-xs text-[var(--foreground)]/60">{project.problem}</p>
                                    </div>
                                    <div>
                                        <div className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: project.color }}>Key Features</div>
                                        <ul className="space-y-1">
                                            {project.features.map((f) => (
                                                <li key={f} className="flex gap-2 items-start">
                                                    <span className="text-[10px] mt-1 flex-shrink-0" style={{ color: project.color }}>›</span>
                                                    <span className="text-xs text-[var(--foreground)]/60">{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="text-xs font-mono uppercase tracking-wider mb-1" style={{ color: project.color }}>Impact</div>
                                        <p className="text-xs text-[var(--foreground)]/60">{project.impact}</p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4 relative z-10">
                        {project.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-0.5 text-xs font-mono rounded transition-all duration-300"
                                style={{
                                    backgroundColor: isHovered ? `${project.color}20` : "var(--muted)",
                                    color: isHovered ? project.color : "var(--foreground)",
                                    border: `1px solid ${isHovered ? project.color : "transparent"}`,
                                }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Toggle Details Button */}
                    <button
                        onClick={() => setShowDetails(!showDetails)}
                        className="text-xs font-mono uppercase tracking-wider transition-colors relative z-10 text-left"
                        style={{ color: showDetails ? project.color : "rgba(255,255,255,0.3)" }}
                    >
                        {showDetails ? "[ collapse ]" : "[ view details ]"}
                    </button>

                    {/* Bottom glow */}
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 h-px"
                        style={{ backgroundColor: project.color }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </TiltCard>
        </motion.div>
    );
}

export function Projects() {
    const statsRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(statsRef, { once: true, margin: "-50px" });

    return (
        <section id="projects" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            <SectionBackground variant="primary" intensity="medium" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <span className="inline-block font-mono text-xs text-[var(--secondary)] uppercase tracking-widest mb-3 px-3 py-1 border border-[var(--secondary)]/30 rounded-full">
                        04 / Projects
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] mx-auto mb-4" />
                    <p className="text-sm text-[var(--foreground)]/50 max-w-md mx-auto">
                        Click <span className="text-[var(--primary)] font-mono">[ view details ]</span> on each card to see the problem, features, and impact.
                    </p>
                </motion.div>

                {/* Stats */}
                <div ref={statsRef} className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="flex items-center gap-2 px-5 py-2.5 bg-[var(--muted)]/50 border border-[var(--border)] rounded-full hover:border-[var(--primary)]/50 transition-all"
                        >
                            <span style={{ color: stat.color }}>{stat.icon}</span>
                            <span className="font-mono font-bold text-lg" style={{ color: stat.color }}>
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                            </span>
                            <span className="text-xs text-[var(--foreground)]/60 uppercase tracking-wide">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Project Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
