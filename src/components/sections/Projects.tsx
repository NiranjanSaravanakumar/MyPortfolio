"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, Folder, Zap, Code2, Briefcase, Cpu, ChevronDown, ChevronUp } from "lucide-react";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { stagger3D, card3DEntrance, fadeUp3D } from "@/components/ui/ScrollAnimationWrapper";
import { ScrollBounceText } from "@/components/ui/ScrollBounceText";

/* ─── Project data ──────────────────────────────────── */
const projects = [
    {
        title: "CodeCompass",
        subtitle: "AI Codebase Onboarding & Chat Tool",
        category: "AI / Full-Stack Tool",
        description:
            "Paste any public GitHub URL and get a structured AI-written onboarding guide instantly, plus a persistent multi-turn chat interface powered by Gemini 2.5 Flash to ask follow-up questions about the repo's architecture, patterns, and setup.",
        problem:
            "Onboarding onto a new codebase is repetitive and slow — developers spend hours manually reading scattered files and inferring architecture before they can contribute anything.",
        solution:
            "Built a service-oriented FastAPI backend that fetches the repository tree and key files via the GitHub API, feeds them into Gemini to generate a structured onboarding doc, and stores context in-memory for a stateful multi-turn chat session. A React 19 + Vite 8 frontend renders Markdown and manages the full chat UX.",
        features: [
            "GitHub repo URL → AI-generated structured onboarding doc",
            "Multi-turn chat with full conversation history sent to Gemini",
            "Gemini 2.5 Flash model with structured prompts & token limits",
            "Pydantic request validation on all API routes",
            "React 19 + Vite 8 frontend with react-markdown rendering",
        ],
        impact:
            "Turns any public GitHub repository into a queryable knowledge base in seconds — reducing contributor ramp-up time and demonstrating full-stack AI integration from GitHub API to Gemini to React.",
        githubLink: "https://github.com/NiranjanSaravanakumar/CodeCompass",
        liveLink: null as string | null,
        techStack: ["FastAPI", "Python", "Gemini 2.5 Flash", "GitHub API", "React 19", "Vite 8"],
        icon: "🧠",
    },
    {
        title: "AI-Resume-Analyzer",
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
        liveLink: null as string | null,
        techStack: ["React", "Vite", "Flask", "Gemini AI", "SQLite", "Python"],
        icon: "📜",
    },
    {
        title: "DataRefinery",
        subtitle: "CSV ETL Pipeline & Quality Report Generator",
        category: "Data Engineering / Full-Stack",
        description:
            "A Python ETL project that turns messy CSV order files into clean, validated data and downloadable quality reports. Includes a core pipeline library and a Flask web app for uploading files and reviewing results in the browser.",
        problem:
            "CSV exports from order systems are rife with formatting errors, invalid values, duplicates, and inconsistent categories — making downstream processing unreliable without a proper validation layer.",
        solution:
            "Built a dependency-light Python pipeline using only the standard library for core ETL logic, wrapped with a Flask web interface for file uploads, session-based processing, and downloadable audit reports.",
        features: [
            "Validates required fields, dates, quantities, prices, statuses & regions",
            "Assigns a pipeline quality score (0–100) per run",
            "Produces 3 outputs: cleaned CSV, issues log & summary JSON",
            "Browser-based upload flow with progress feedback & ZIP download",
            "33 automated tests with GitHub Actions CI",
        ],
        impact:
            "Demonstrates end-to-end data engineering skills — from validation rule design and ETL architecture to Flask API development and automated testing with 100% CI coverage.",
        githubLink: "https://github.com/NiranjanSaravanakumar/DataRefinery",
        liveLink: null as string | null,
        techStack: ["Python", "Flask", "pytest", "GitHub Actions", "Jinja2"],
        icon: "🧹",
    },
    {
        title: "Senti AI",
        subtitle: "Binary Sentiment Analyzer — ML Web App",
        category: "Machine Learning / NLP",
        description:
            "An end-to-end machine learning web app that classifies any text as Positive or Negative using Logistic Regression trained on 1.6 million real tweets from the Sentiment140 dataset, achieving ~86% test accuracy.",
        problem:
            "Sentiment analysis typically requires complex NLP pipelines that are hard to deploy and interpret. Most demos lack production-grade tooling, confidence scoring, or a usable web interface.",
        solution:
            "Built a full 12-step ML pipeline — from raw CSV ingestion to regex cleaning, Porter Stemming, TF-IDF vectorization, Logistic Regression training, and pickle serialization — then exposed it through a Flask web app with a dark glassmorphism UI and a JSON API endpoint.",
        features: [
            "Logistic Regression + TF-IDF trained on 1.6M tweets (~86% accuracy)",
            "Confidence scoring via predict_proba() shown as animated progress bar",
            "POST /api/analyze JSON endpoint for programmatic integration",
            "Docker multi-stage build + Docker Compose for one-command deployment",
            "Pytest suite covering preprocessing, routing, API & prediction logic",
        ],
        impact:
            "Demonstrates a complete, production-aware ML lifecycle — from raw data to trained model to deployed web application with Docker, test coverage, and developer tooling (Ruff, Black, mypy).",
        githubLink: "https://github.com/NiranjanSaravanakumar/SentiAI",
        liveLink: null as string | null,
        techStack: ["Python", "scikit-learn", "NLTK", "Flask", "TF-IDF", "Docker", "pytest"],
        icon: "📊",
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
        liveLink: null as string | null,
        techStack: ["HTML", "CSS", "JavaScript", "Python"],
        icon: "💰",
    },
    {
        title: "Store Management System",
        subtitle: "Desktop Inventory & Billing App",
        category: "Desktop App / Python GUI",
        description:
            "A Tkinter-based desktop GUI app for small electronics retailers to manage product inventory, customer records, payment methods, and billing — all without a browser or server.",
        problem:
            "Small retail shops need a quick, offline tool to track products and process sales without the overhead of a full web application or database server.",
        solution:
            "Built a self-contained Python desktop application using Tkinter that handles inventory CRUD, customer capture, discount toggling, and payment selection in a clean, interactive GUI.",
        features: [
            "Add, update & remove products with ID, name & quantity",
            "Dropdown category selector & payment method (GPay / Cash)",
            "Discount toggle via checkbox with live total calculation",
            "Customer name & contact capture",
            "Zero-dependency GUI — runs on any Python 3.x installation",
        ],
        impact:
            "A foundational Python project demonstrating GUI design, event-driven programming, and state management using only the standard library — no frameworks required.",
        githubLink: "https://github.com/NiranjanSaravanakumar/Store-Management-System-using-Tkinter-Python-GUI-.git",
        liveLink: null as string | null,
        techStack: ["Python", "Tkinter"],
        icon: "🛒",
    },
];

const overviewStats = [
    { label: "Projects Built",  value: 6,  suffix: "+", icon: <Code2 size={16} />,    color: "#00FF66"   },
    { label: "Internship",      value: 1,  suffix: "",  icon: <Briefcase size={16} />, color: "#00FF66"   },
    { label: "Tech Skills",     value: 15, suffix: "+", icon: <Cpu size={16} />,       color: "#00FF66"   },
];

/* ─── Animated counter ──────────────────────────────────── */
function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!inView) { setCount(0); return; }
        const steps = 40;
        const stepDuration = 1200 / steps;
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

/* ─── Project Card ──────────────────────────────────────── */
function ProjectCard({
    project,
    index,
    isSelected,
    onSelect,
}: {
    project: typeof projects[0];
    index: number;
    isSelected: boolean;
    onSelect: (i: number | null) => void;
}) {
    return (
        <motion.div
            variants={card3DEntrance}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col h-full"
            whileHover={{
                scale: 1.03,
                rotateY: 4,
                rotateX: -2,
                y: -8,
                transition: { duration: 0.3 },
            }}
        >
            <div
                className="relative flex flex-col h-full"
                style={{
                    background: "#101010",
                    borderRight: `1px solid ${isSelected ? "rgba(0,255,102,0.55)" : "rgba(0,255,102,0.20)"}`,
                    borderBottom: `1px solid ${isSelected ? "rgba(0,255,102,0.55)" : "rgba(0,255,102,0.20)"}`,
                    borderLeft: `1px solid ${isSelected ? "rgba(0,255,102,0.55)" : "rgba(0,255,102,0.20)"}`,
                    borderRadius: 16,
                    borderTop: `3px solid #00FF66`,
                    transition: "border-color 0.22s ease, box-shadow 0.22s ease",
                    boxShadow: isSelected ? "0 0 0 1px rgba(0,255,102,0.55), 0 8px 40px rgba(0,0,0,0.6)" : "none",
                    overflow: "hidden",
                    padding: "32px",
                }}
                onMouseEnter={(e) => {
                    if (!isSelected) {
                        (e.currentTarget as HTMLDivElement).style.borderRightColor = "rgba(0,255,102,0.45)";
                        (e.currentTarget as HTMLDivElement).style.borderBottomColor = "rgba(0,255,102,0.45)";
                        (e.currentTarget as HTMLDivElement).style.borderLeftColor = "rgba(0,255,102,0.45)";
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 32px rgba(0,0,0,0.5)";
                    }
                }}
                onMouseLeave={(e) => {
                    if (!isSelected) {
                        (e.currentTarget as HTMLDivElement).style.borderRightColor = "rgba(0,255,102,0.20)";
                        (e.currentTarget as HTMLDivElement).style.borderBottomColor = "rgba(0,255,102,0.20)";
                        (e.currentTarget as HTMLDivElement).style.borderLeftColor = "rgba(0,255,102,0.20)";
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    }
                }}
            >
                {/* Header row */}
                <div className="flex justify-between items-start mb-5">
                    <div className="flex items-center gap-2.5">
                        <span className="text-2xl" aria-hidden="true">{project.icon}</span>
                        <Folder size={18} style={{ color: "rgba(255,255,255,0.30)" }} />
                    </div>
                    <div className="flex items-center gap-3">
                        {project.liveLink && (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Live demo — ${project.title}`}
                                style={{ color: "rgba(255,255,255,0.50)" }}
                                className="transition-colors hover:text-[#00FF66]"
                            >
                                <ExternalLink size={15} />
                            </a>
                        )}
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`GitHub — ${project.title}`}
                            style={{ color: "rgba(255,255,255,0.50)" }}
                            className="transition-colors hover:text-[#00FF66]"
                        >
                            <Github size={17} />
                        </a>
                    </div>
                </div>

                {/* Title */}
                <div className="mb-4">
                    <h3
                        className="font-bold leading-snug mb-1.5"
                        style={{
                            fontSize: "clamp(1.2rem, 1.8vw, 1.45rem)",
                            color: "#ffffff",
                            fontFamily: "var(--font-heading, 'Poppins', sans-serif)",
                        }}
                    >
                        {project.title}
                    </h3>
                    <p
                        className="text-sm font-medium mb-1"
                        style={{ color: "rgba(255,255,255,0.88)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                    >
                        {project.subtitle}
                    </p>
                    <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider"
                       style={{ color: "#00FF66", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}>
                        <Zap size={10} />
                        {project.category}
                    </p>
                </div>

                {/* Description */}
                <p
                    className="leading-relaxed mb-5 flex-grow"
                    style={{
                        fontSize: "clamp(0.92rem, 1.2vw, 1rem)",
                        color: "rgba(255,255,255,0.92)",
                        fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                        lineHeight: 1.8,
                    }}
                >
                    {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono rounded-lg"
                            style={{
                                background: "rgba(0,255,102,0.06)",
                                border: "1px solid rgba(0,255,102,0.18)",
                                color: "rgba(255,255,255,0.88)",
                            }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* View Details toggle */}
                <button
                    onClick={() => onSelect(isSelected ? null : index)}
                    aria-expanded={isSelected}
                    className="flex items-center gap-2 text-sm font-semibold transition-colors mt-auto"
                    style={{
                        color: isSelected ? "#00FF66" : "rgba(255,255,255,0.82)",
                        fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                    }}
                >
                    {isSelected ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    {isSelected ? "Collapse Details" : "View Details"}
                </button>
            </div>
        </motion.div>
    );
}

/* ─── Projects section ──────────────────────────────────── */
export function Projects() {
    const statsRef    = useRef<HTMLDivElement>(null);
    const detailRef   = useRef<HTMLDivElement>(null);
    const sectionRef  = useRef<HTMLElement>(null);
    const isInView    = useInView(statsRef, { once: true, margin: "-50px" });
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [isPulsing, setIsPulsing] = useState(false);

    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
    const rotateX    = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [8, 0, 0, -5]);
    const translateY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -15]);
    const scale      = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0.96, 1, 1, 0.97]);

    const handleSelect = useCallback((i: number | null) => {
        setSelectedIndex(i);
        if (i !== null) {
            setIsPulsing(true);
            setTimeout(() => setIsPulsing(false), 2000);
            /* Smooth scroll to detail panel with navbar offset */
            setTimeout(() => {
                if (detailRef.current) {
                    const top = detailRef.current.getBoundingClientRect().top + window.scrollY - 88;
                    window.scrollTo({ top, behavior: "smooth" });
                }
            }, 60);
        }
    }, []);

    const selectedProject = selectedIndex !== null ? projects[selectedIndex] : null;

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="py-28 relative overflow-hidden"
            style={{ background: "#080808", perspective: "1200px", perspectiveOrigin: "50% 40%" }}
            aria-label="Projects"
        >
            <SectionBackground variant="primary" intensity="medium" />

            <motion.div style={{ rotateX, y: translateY, scale, transformStyle: "preserve-3d", willChange: "transform" }}>
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
                            color: "#00FF66",
                            border: "1px solid rgba(0,255,102,0.25)",
                            background: "rgba(0,255,102,0.06)",
                        }}
                    >
                        02 / Projects
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
                        <ScrollBounceText as="span">Featured Projects</ScrollBounceText>
                    </h2>
                    <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: "linear-gradient(90deg, #00FF66, rgba(0,255,102,0.3))" }} />
                    <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 480, margin: "0 auto" }}>
                        Projects I&apos;ve built across full-stack, AI, and automation engineering.
                    </p>
                </motion.div>

                {/* ── Stats row ── */}
                <div ref={statsRef} className="flex flex-wrap justify-center gap-4 mb-14">
                    {overviewStats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="flex items-center gap-2.5 px-6 py-3 rounded-full"
                            style={{
                                background: "#101010",
                                border: "1px solid rgba(0,255,102,0.20)",
                                transition: "border-color 0.22s ease",
                            }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,255,102,0.50)"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,255,102,0.20)"; }}
                        >
                            <span style={{ color: stat.color }}>{stat.icon}</span>
                            <span className="font-mono font-bold text-xl" style={{ color: stat.color }}>
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                            </span>
                            <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.88)", fontFamily: "var(--font-sans)" }}>
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* ── Project cards grid ── */}
                <motion.div
                    variants={stagger3D}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                            isSelected={selectedIndex === index}
                            onSelect={handleSelect}
                        />
                    ))}
                </motion.div>

                {/* ── Detail panel ── */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            ref={detailRef}
                            key={selectedIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            style={{
                                marginTop: 40,
                                background: "#101010",
                                border: "1px solid rgba(0,255,102,0.20)",
                                borderRadius: 16,
                                padding: "40px",
                                animation: isPulsing ? "pulseBorder 2s ease-out" : "none",
                                scrollMarginTop: 88,
                            }}
                            aria-label={`Details for ${selectedProject.title}`}
                        >
                            {/* Detail header */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-8" style={{ borderBottom: "1px solid rgba(0,255,102,0.12)" }}>
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "#00FF66" }}>
                                        Project Deep Dive
                                    </p>
                                    <h3
                                        className="font-bold"
                                        style={{
                                            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                                            color: "#ffffff",
                                            fontFamily: "var(--font-heading, 'Poppins', sans-serif)",
                                        }}
                                    >
                                        {selectedProject.title}
                                    </h3>
                                    <p className="text-base mt-1" style={{ color: "rgba(255,255,255,0.88)" }}>{selectedProject.subtitle}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <a
                                        href={selectedProject.githubLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all"
                                        style={{
                                            background: "rgba(0,255,102,0.08)",
                                            border: "1px solid rgba(0,255,102,0.30)",
                                            color: "#00FF66",
                                        }}
                                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,255,102,0.60)"; }}
                                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,255,102,0.30)"; }}
                                    >
                                        <Github size={15} /> View on GitHub
                                    </a>
                                </div>
                            </div>

                            {/* Detail body */}
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Left column */}
                                <div className="space-y-7">
                                    {[
                                        { key: "Problem",  text: selectedProject.problem  },
                                        { key: "Solution", text: selectedProject.solution },
                                        { key: "Impact",   text: selectedProject.impact   },
                                    ].map(({ key, text }) => (
                                        <div key={key}>
                                            <div
                                                className="text-xs font-bold uppercase tracking-widest mb-2"
                                                style={{ color: "#00FF66" }}
                                            >
                                                {key}
                                            </div>
                                            <p
                                                style={{
                                                    color: "rgba(255,255,255,0.92)",
                                                    lineHeight: 1.8,
                                                    fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                                                    fontSize: "0.975rem",
                                                }}
                                            >
                                                {text}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Right column */}
                                <div>
                                    <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#00FF66" }}>
                                        Key Features
                                    </div>
                                    <ul className="space-y-2.5 mb-7">
                                        {selectedProject.features.map((f) => (
                                            <li key={f} className="flex gap-3 items-start">
                                                <span style={{ color: "#00FF66", fontSize: "0.8rem", marginTop: 3, flexShrink: 0 }}>▸</span>
                                                <span
                                                    style={{
                                                        color: "rgba(255,255,255,0.92)",
                                                        fontSize: "0.975rem",
                                                        lineHeight: 1.8,
                                                        fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                                                    }}
                                                >
                                                    {f}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#00FF66" }}>
                                        Tech Stack
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1.5 text-sm font-mono rounded-lg"
                                                style={{
                                                    background: "rgba(0,255,102,0.07)",
                                                    border: "1px solid rgba(0,255,102,0.22)",
                                                    color: "rgba(255,255,255,0.92)",
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            </motion.div>
        </section>
    );
}
