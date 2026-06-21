"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Mail, User, Rocket } from "lucide-react";
import { SectionBackground } from "@/components/ui/SectionBackground";

const aboutPoints = [
    "Final-year B.Tech Information Technology student at K S Rangasamy College of Technology (CGPA: 8.65 / 10), with hands-on industry experience through my internship at ABB, Bangalore.",
    "At ABB, I designed 120+ automated test cases, resolved 50+ code vulnerabilities, and streamlined CI/CD pipelines — directly improving release velocity and code quality across multiple production projects.",
    "Comfortable across the full technology stack: Python and C# on the backend, React and Angular on the frontend, and Docker/Kubernetes/Azure DevOps for infrastructure — always with a focus on maintainability and quality.",
];

const quickFacts = [
    { icon: MapPin,        label: "Location", value: "Erode, Tamil Nadu, India" },
    { icon: Mail,          label: "Email",    value: "nickniranjan2929@gmail.com", href: "mailto:nickniranjan2929@gmail.com" },
    { icon: GraduationCap, label: "Degree",   value: "B.Tech IT · 2023 – 2027" },
    { icon: Rocket,        label: "Available", value: "Open to full-time roles from 2027" },
];

const education = [
    {
        id: 1,
        degree: "Bachelor of Technology — Information Technology",
        school: "K S Rangasamy College of Technology",
        period: "2023 – 2027",
        badge: "CGPA: 8.65 / 10.0",
        badgeColor: "var(--primary)",
        points: [
            "Core coursework in data structures, algorithms, database systems, software engineering, and web technologies.",
            "Active participant in technical fests, hackathons, and workshops — consistently building both depth and breadth.",
        ],
    },
    {
        id: 2,
        degree: "Higher Secondary Education — Science",
        school: "Shri Janani Matric Higher Secondary School",
        period: "2022 – 2023",
        badge: "89.67%",
        badgeColor: "var(--accent)",
        points: [
            "Excelled in Mathematics, Physics, and Computer Science, building a strong quantitative foundation.",
        ],
    },
];

export function About() {
    return (
        <section id="about" className="py-24 relative bg-[#0a0a0a] overflow-hidden" aria-label="About Niranjan">
            <SectionBackground variant="primary" intensity="medium" />
            <div className="container mx-auto px-4 relative z-10">

                {/* ── Section Header ───────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <span className="section-label inline-block text-[var(--primary)] mb-3 px-3 py-1 border border-[var(--primary)]/30 rounded-full">
                        04 / About
                    </span>
                    {/* Poppins heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4"
                        style={{ fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}>
                        Who I Am
                    </h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">

                    {/* ── Left: Profile + Quick Facts ─────── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-7">
                            <User className="text-[var(--primary)] flex-shrink-0" size={20} />
                            {/* Section sub-heading — Poppins */}
                            <h3 className="text-lg font-semibold text-[var(--accent)]"
                                style={{ fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}>
                                Profile
                            </h3>
                        </div>

                        {/* Body text — Inter */}
                        <div className="space-y-4 mb-10">
                            {aboutPoints.map((point, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-3 items-start"
                                >
                                    <span className="text-[var(--primary)] mt-1.5 text-sm flex-shrink-0">›</span>
                                    <p className="text-sm leading-relaxed"
                                       style={{ color: "var(--text-body)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}>
                                        {point}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Quick Facts grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {quickFacts.map(({ icon: Icon, label, value, href }, i) => (
                                <motion.div
                                    key={label}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.08 }}
                                    className="flex items-center gap-3 p-3 bg-[var(--muted)]/50 border border-[var(--border)] rounded-sm hover:border-[var(--primary)]/40 transition-colors"
                                >
                                    <Icon size={15} className="text-[var(--primary)] flex-shrink-0" />
                                    <div className="min-w-0">
                                        {/* mono for label key */}
                                        <div className="section-label text-[var(--foreground)]/35 text-[10px] mb-0.5">{label}</div>
                                        {href ? (
                                            <a href={href}
                                               className="text-xs text-[var(--foreground)]/75 hover:text-[var(--primary)] transition-colors truncate block"
                                               style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}>
                                                {value}
                                            </a>
                                        ) : (
                                            <div className="text-xs text-[var(--foreground)]/75 truncate"
                                                 style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}>
                                                {value}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Right: Education Timeline ────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-7">
                            <GraduationCap className="text-[var(--accent)] flex-shrink-0" size={20} />
                            <h3 className="text-lg font-semibold text-[var(--accent)]"
                                style={{ fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}>
                                Education
                            </h3>
                        </div>

                        <div className="border-l-2 border-[var(--accent)]/25 ml-3 space-y-10">
                            {education.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    className="relative pl-8"
                                >
                                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#0a0a0a] border-2"
                                         style={{ borderColor: item.badgeColor }} />

                                    {/* mono for date/period */}
                                    <div className="font-mono text-xs mb-1" style={{ color: item.badgeColor, opacity: 0.7 }}>
                                        {item.period}
                                    </div>

                                    {/* Poppins for degree name */}
                                    <h4 className="text-base font-semibold text-[var(--foreground)] leading-snug mb-0.5"
                                        style={{ fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}>
                                        {item.degree}
                                    </h4>

                                    {/* Inter for school name */}
                                    <p className="text-sm text-[var(--foreground)]/65 mb-2"
                                       style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}>
                                        {item.school}
                                    </p>

                                    {/* mono badge for score */}
                                    <span className="inline-block font-mono text-xs px-2 py-0.5 rounded-full border mb-3"
                                          style={{
                                              color: item.badgeColor,
                                              borderColor: `${item.badgeColor}40`,
                                              backgroundColor: `${item.badgeColor}10`,
                                          }}>
                                        {item.badge}
                                    </span>

                                    {/* Inter for bullet points */}
                                    <div className="space-y-1.5">
                                        {item.points.map((point, pi) => (
                                            <div key={pi} className="flex gap-2 items-start">
                                                <span className="text-xs mt-1 flex-shrink-0" style={{ color: item.badgeColor }}>›</span>
                                                <p className="text-sm leading-relaxed"
                                                   style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}>
                                                    {point}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
