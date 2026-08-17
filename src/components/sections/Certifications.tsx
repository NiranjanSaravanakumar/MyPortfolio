"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, CheckCircle } from "lucide-react";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { stagger3D, card3DEntrance, fadeUp3D } from "@/components/ui/ScrollAnimationWrapper";
import { ScrollBounceText } from "@/components/ui/ScrollBounceText";
import { useTheme } from "@/context/ThemeContext";
import { themeColors } from "@/lib/themeColors";

const certifications = [
    {
        id: 1,
        icon: "🏅",
        title: "Oracle Certified Foundations Associate",
        issuer: "Oracle University",
        type: "Professional Certification",
        description:
            "Industry-recognized credential validating core knowledge in Oracle technologies — covering relational database design, SQL fundamentals, data management principles, and cloud computing basics.",
        skills: ["Database Design", "SQL", "Cloud Fundamentals", "Data Management", "Oracle Technologies"],
    },
    {
        id: 2,
        icon: "📜",
        title: "Design & Implementation of Human-Computer Interfaces",
        issuer: "NPTEL Online — IIT",
        type: "Academic Certification",
        description:
            "NPTEL course by IIT faculty covering HCI principles, user research methodologies, interface design patterns, cognitive ergonomics, usability evaluation, and prototyping techniques.",
        skills: ["UI/UX Design", "User Research", "Usability Testing", "Cognitive Ergonomics", "Interface Prototyping"],
    },
];

export function Certifications() {
    const sectionRef = useRef<HTMLElement>(null);
    const { theme } = useTheme();
    const c = themeColors[theme];

    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

    const rotateX    = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [10, 0, 0, -6]);
    const translateY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [55, 0, 0, -15]);
    const scale      = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0.95, 1, 1, 0.96]);

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
                        {certifications.map((cert) => (
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
                </div>
            </motion.div>
        </section>
    );
}
