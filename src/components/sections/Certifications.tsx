"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Award, CheckCircle, ChevronDown } from "lucide-react";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { stagger3D, card3DEntrance, fadeUp3D } from "@/components/ui/ScrollAnimationWrapper";
import { ScrollBounceText } from "@/components/ui/ScrollBounceText";
import { useTheme } from "@/context/ThemeContext";
import { themeColors } from "@/lib/themeColors";

/* ── Always-visible featured certifications ─────────────── */
const featuredCerts = [
    {
        id: 1,
        icon: "🏅",
        title: "Oracle Certified Foundations Associate",
        issuer: "Oracle University",
        date: "July 30, 2025",
        certId: "",
        type: "Professional Certification",
        description:
            "Industry-recognized credential validating core knowledge in Oracle technologies — covering relational database design, SQL fundamentals, data management principles, and cloud computing basics.",
        skills: ["Database Design", "SQL", "Cloud Fundamentals", "Data Management", "Oracle Technologies"],
    },
    {
        id: 2,
        icon: "📜",
        title: "Design & Implementation of Human-Computer Interfaces",
        issuer: "NPTEL-SWAYAM — IIT",
        date: "Jul\u2013Oct 2024",
        certId: "NPTEL34C81265764600033",
        type: "Academic Certification",
        description:
            "NPTEL course by IIT faculty covering HCI principles, user research methodologies, interface design patterns, cognitive ergonomics, usability evaluation, and prototyping techniques.",
        skills: ["UI/UX Design", "User Research", "Usability Testing", "Cognitive Ergonomics", "Interface Prototyping"],
    },
];

/* ── Extra certifications revealed on View More ─────────── */
const extraCerts = [
    {
        id: 3,
        icon: "\u{1F170}\uFE0F",
        title: "Angular JS",
        issuer: "Infosys Springboard",
        date: "May 5, 2025",
        certId: "",
        type: "National Certification",
        description:
            "Comprehensive course on Angular JS covering component-based architecture, directives, two-way data binding, services, dependency injection, and building single-page applications.",
        skills: ["Angular JS", "TypeScript", "Components", "Directives", "SPA Development"],
    },
    {
        id: 4,
        icon: "\u{1F9E9}",
        title: "Data Structures and Algorithms",
        issuer: "Infosys Springboard",
        date: "November 12, 2024",
        certId: "",
        type: "National Certification",
        description:
            "Rigorous training on fundamental and advanced data structures including arrays, linked lists, trees, graphs, and algorithm design paradigms such as dynamic programming and greedy methods.",
        skills: ["Arrays", "Linked Lists", "Trees", "Graphs", "Dynamic Programming", "Sorting"],
    },
    {
        id: 5,
        icon: "\u2615",
        title: "Java Concepts",
        issuer: "Infosys Springboard",
        date: "November 12, 2024",
        certId: "",
        type: "National Certification",
        description:
            "Foundational Java programming course covering OOP principles, inheritance, polymorphism, exception handling, collections framework, and multithreading concepts.",
        skills: ["Java", "OOP", "Collections", "Exception Handling", "Multithreading"],
    },
    {
        id: 6,
        icon: "\u{1F512}",
        title: "Privacy and Security in Online Social Media",
        issuer: "NPTEL-SWAYAM",
        date: "Jan\u2013Apr 2025",
        certId: "NPTEL25CS79S558600198",
        type: "Academic Certification",
        description:
            "NPTEL course examining privacy frameworks, threat models, security vulnerabilities in social platforms, data protection regulations, and mitigation strategies for online social networks.",
        skills: ["Cybersecurity", "Privacy Laws", "Threat Modeling", "Social Media Security", "Data Protection"],
    },
    {
        id: 7,
        icon: "\u{1F916}",
        title: "UiPath Automation Explorer for Students",
        issuer: "UiPath Academic Alliance",
        date: "2024",
        certId: "",
        type: "National Certification",
        description:
            "Foundational RPA certification covering the UiPath platform — automation concepts, recorder tools, workflow design, variables, selectors, and deploying attended automations.",
        skills: ["RPA", "UiPath Studio", "Workflow Automation", "Selectors", "Attended Automation"],
    },
];

type Cert = typeof extraCerts[0];
type CColors = typeof themeColors["dark"];

function ExtraCertCard({ cert, c, theme }: { cert: Cert; c: CColors; theme: string }) {
    return (
        <motion.div
            variants={card3DEntrance}
            className="flex flex-col"
            style={{
                background: c.cardBg,
                border: `1px solid ${c.border}`,
                borderTop: `3px solid ${c.primary}`,
                borderRadius: 14,
                overflow: "hidden",
                padding: "20px 22px",
            }}
            whileHover={{
                scale: 1.02,
                y: -5,
                borderColor: c.borderHover,
                boxShadow: `0 0 0 1px ${c.borderHover}, 0 16px 48px rgba(0,0,0,0.20)`,
                transition: { duration: 0.25 },
            }}
        >
            <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-3xl" aria-hidden="true">{cert.icon}</span>
                <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 mt-0.5"
                    style={{ color: c.primary, border: `1px solid ${c.border}`, background: c.primarySoft, fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                >
                    {cert.type}
                </span>
            </div>
            <h3
                className="font-bold leading-snug mb-1"
                style={{ fontSize: "1rem", color: c.textHeading, fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}
            >
                {cert.title}
            </h3>
            <div className="flex flex-wrap items-center gap-1.5 mb-2">
                <Award size={12} style={{ color: c.primary }} />
                <span className="text-xs font-semibold" style={{ color: c.primary, fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}>
                    {cert.issuer}
                </span>
                <span className="text-xs" style={{ color: c.textDim, fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}>
                    \u00b7 {cert.date}
                </span>
            </div>
            {cert.certId && (
                <p className="text-xs mb-3" style={{ color: c.textDim, fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)" }}>
                    ID: {cert.certId}
                </p>
            )}
            <p className="text-xs mb-4 flex-grow" style={{ color: c.textDesc, fontFamily: "var(--font-sans, 'Inter', sans-serif)", lineHeight: 1.7 }}>
                {cert.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
                {cert.skills.map((skill) => (
                    <motion.span
                        key={skill}
                        className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md"
                        style={{ background: c.primarySoft, border: `1px solid ${c.border}`, color: c.textBody, fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                        whileHover={{
                            background: theme === "dark" ? "rgba(0,255,102,0.15)" : "rgba(0,180,80,0.15)",
                            borderColor: c.borderHover,
                            color: c.primary,
                            scale: 1.05,
                            transition: { duration: 0.15 },
                        }}
                    >
                        <CheckCircle size={9} style={{ color: c.primary, flexShrink: 0 }} />
                        {skill}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
}

export function Certifications() {
    const sectionRef = useRef<HTMLElement>(null);
    const { theme } = useTheme();
    const c = themeColors[theme];
    const [showMore, setShowMore] = useState(false);

    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

    const rotateX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [10, 0, 0, -6]);
    const translateY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [55, 0, 0, -15]);
    const scale = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0.95, 1, 1, 0.96]);

    return (
        <section
            id="certifications"
            ref={sectionRef}
            className="py-28 relative overflow-hidden"
            style={{ background: "var(--background)", perspective: "1200px", perspectiveOrigin: "50% 40%" }}
            aria-label="Certifications"
        >
            <SectionBackground variant="secondary" intensity="low" />

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
                            06 / Certifications
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
                            <ScrollBounceText as="span">Certifications &amp; Credentials</ScrollBounceText>
                        </h2>
                        <div className="w-16 h-0.5 mx-auto" style={{ background: `linear-gradient(90deg, ${c.primary}, ${c.border})` }} />
                    </motion.div>

                    {/* ── Certification Cards — staggered 3D entrance ── */}
                    <motion.div
                        variants={stagger3D}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        className="grid md:grid-cols-2 gap-8 items-stretch"
                        style={{ maxWidth: 900, margin: "0 auto" }}
                    >
                        {featuredCerts.map((cert) => (
                            <motion.div
                                key={cert.id}
                                variants={card3DEntrance}
                                className="flex flex-col"
                                style={{
                                    background: c.cardBg,
                                    border: `1px solid ${c.border}`,
                                    borderTop: `3px solid ${c.primary}`,
                                    borderRadius: 16,
                                    overflow: "hidden",
                                }}
                                whileHover={{
                                    scale: 1.03,
                                    rotateY: 4,
                                    y: -8,
                                    borderColor: c.borderHover,
                                    boxShadow: `0 0 0 1px ${c.borderHover}, 0 20px 60px rgba(0,0,0,0.25)`,
                                    transition: { duration: 0.3 },
                                }}
                            >
                                {/* Card Header */}
                                <div
                                    className="p-8 flex-shrink-0"
                                    style={{ borderBottom: `1px solid ${c.border}` }}
                                >
                                    <div className="flex items-start justify-between gap-4 mb-5">
                                        <span className="text-4xl" aria-hidden="true">{cert.icon}</span>
                                        <span
                                            className="text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 mt-1"
                                            style={{
                                                color: c.primary,
                                                border: `1px solid ${c.border}`,
                                                background: c.primarySoft,
                                                fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                                            }}
                                        >
                                            {cert.type}
                                        </span>
                                    </div>

                                    <h3
                                        className="font-bold leading-snug mb-3"
                                        style={{
                                            fontSize: "1.15rem",
                                            color: c.textHeading,
                                            fontFamily: "var(--font-heading, 'Poppins', sans-serif)",
                                        }}
                                    >
                                        {cert.title}
                                    </h3>

                                    <div className="flex items-center gap-2">
                                        <Award size={14} style={{ color: c.primary }} />
                                        <span
                                            className="text-sm font-semibold"
                                            style={{ color: c.primary, fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                                        >
                                            {cert.issuer}
                                        </span>
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div className="p-8 flex flex-col flex-1">
                                    <p
                                        className="mb-6 flex-grow"
                                        style={{
                                            color: c.textBody,
                                            fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                                            fontSize: "0.975rem",
                                            lineHeight: 1.8,
                                        }}
                                    >
                                        {cert.description}
                                    </p>

                                    <div>
                                        <div
                                            className="text-xs font-bold uppercase tracking-widest mb-3"
                                            style={{ color: c.textLabel, fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                                        >
                                            Skills Validated
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {cert.skills.map((skill) => (
                                                <motion.span
                                                    key={skill}
                                                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg"
                                                    style={{
                                                        background: c.primarySoft,
                                                        border: `1px solid ${c.border}`,
                                                        color: c.textBody,
                                                        fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                                                    }}
                                                    whileHover={{
                                                        background: theme === "dark" ? "rgba(0,255,102,0.15)" : "rgba(0,180,80,0.15)",
                                                        borderColor: c.borderHover,
                                                        color: c.primary,
                                                        scale: 1.06,
                                                        transition: { duration: 0.15 },
                                                    }}
                                                >
                                                    <CheckCircle size={10} style={{ color: c.primary, flexShrink: 0 }} />
                                                    {skill}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* ── View More Button ── */}
                    <div className="flex justify-center mt-10">
                        <motion.button
                            onClick={() => setShowMore((v) => !v)}
                            className="inline-flex items-center gap-2.5 select-none"
                            style={{ height: 48, padding: "0 28px", background: c.primarySoft, color: c.primary, fontSize: 14, fontFamily: "var(--font-sans, 'Inter', sans-serif)", fontWeight: 700, borderRadius: 14, border: `1.5px solid ${c.border}`, cursor: "pointer" }}
                            whileHover={{ background: theme === "dark" ? "rgba(0,255,102,0.12)" : "rgba(0,180,80,0.14)", borderColor: c.borderHover, boxShadow: `0 0 20px ${c.primary}2e`, scale: 1.03, transition: { duration: 0.2 } }}
                            whileTap={{ scale: 0.97 }}
                            aria-expanded={showMore}
                            aria-controls="extra-certs"
                        >
                            {showMore ? "Show Less" : `View More  (+${extraCerts.length})`}
                            <motion.span
                                animate={{ rotate: showMore ? 180 : 0 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                style={{ display: "flex", alignItems: "center" }}
                            >
                                <ChevronDown size={16} />
                            </motion.span>
                        </motion.button>
                    </div>

                    {/* ── Extra Certifications (animated reveal) ── */}
                    <AnimatePresence>
                        {showMore && (
                            <motion.div
                                id="extra-certs"
                                key="extra-certs"
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: "auto", marginTop: 32 }}
                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                                style={{ overflow: "hidden", maxWidth: 1100, margin: "0 auto" }}
                            >
                                <motion.div
                                    variants={stagger3D}
                                    initial="hidden"
                                    animate="visible"
                                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                                    style={{ paddingTop: 8 }}
                                >
                                    {extraCerts.map((cert) => (
                                        <ExtraCertCard key={cert.id} cert={cert} c={c} theme={theme} />
                                    ))}
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </motion.div>
        </section>
    );
}
