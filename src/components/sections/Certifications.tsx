"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import { SectionBackground } from "@/components/ui/SectionBackground";

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
    return (
        <section id="certifications" className="py-28 relative overflow-hidden" style={{ background: "#000000" }} aria-label="Certifications">
            <SectionBackground variant="secondary" intensity="low" />

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
                        05 / Certifications
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
                        Certifications & Credentials
                    </h2>
                    <div className="w-16 h-0.5 mx-auto" style={{ background: "linear-gradient(90deg, #00FF66, rgba(0,255,102,0.3))" }} />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 items-stretch" style={{ maxWidth: 900, margin: "0 auto" }}>
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.12, duration: 0.48 }}
                            className="flex flex-col"
                            style={{
                                background: "#101010",
                                border: "1px solid rgba(0,255,102,0.20)",
                                borderTop: "3px solid #00FF66",
                                borderRadius: 16,
                                overflow: "hidden",
                                transition: "border-color 0.22s ease, box-shadow 0.22s ease",
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
                            {/* Card Header */}
                            <div
                                className="p-8 flex-shrink-0"
                                style={{ borderBottom: "1px solid rgba(0,255,102,0.10)" }}
                            >
                                <div className="flex items-start justify-between gap-4 mb-5">
                                    <span className="text-4xl" aria-hidden="true">{cert.icon}</span>
                                    <span
                                        className="text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 mt-1"
                                        style={{
                                            color: "#00FF66",
                                            border: "1px solid rgba(0,255,102,0.25)",
                                            background: "rgba(0,255,102,0.07)",
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
                                        color: "#ffffff",
                                        fontFamily: "var(--font-heading, 'Poppins', sans-serif)",
                                    }}
                                >
                                    {cert.title}
                                </h3>

                                <div className="flex items-center gap-2">
                                    <Award size={14} style={{ color: "#00FF66" }} />
                                    <span
                                        className="text-sm font-semibold"
                                        style={{ color: "#00FF66", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
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
                                        color: "rgba(255,255,255,0.92)",
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
                                        style={{ color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                                    >
                                        Skills Validated
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {cert.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg"
                                                style={{
                                                    background: "rgba(0,255,102,0.06)",
                                                    border: "1px solid rgba(0,255,102,0.18)",
                                                    color: "rgba(255,255,255,0.88)",
                                                    fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                                                }}
                                            >
                                                <CheckCircle size={10} style={{ color: "#00FF66", flexShrink: 0 }} />
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
