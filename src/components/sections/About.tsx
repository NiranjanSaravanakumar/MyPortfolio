"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Mail, User, Download } from "lucide-react";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { stagger3D, card3DEntrance, fadeUp3D } from "@/components/ui/ScrollAnimationWrapper";
import { ScrollBounceText } from "@/components/ui/ScrollBounceText";
import { useTheme } from "@/context/ThemeContext";
import { themeColors } from "@/lib/themeColors";

const aboutPoints = [
    "Final-year B.Tech Information Technology student at K S Rangasamy College of Technology (CGPA: 8.62 / 10), with hands-on industry experience through my internship at ABB Global Industries and Services Private Limited, Bangalore.",
    "At ABB Global Industries and Services Private Limited, I designed 300+ automated test cases, resolved 50+ code vulnerabilities, and streamlined CI/CD pipelines — directly improving release velocity and code quality across multiple production projects.",
    "Comfortable across the full technology stack: Python and C# on the backend, React and Angular on the frontend, and Docker/Kubernetes/Azure DevOps for infrastructure — always with a focus on maintainability and quality.",
];

const quickFacts = [
    { icon: MapPin, label: "Location", value: "Erode, Tamil Nadu, India", href: undefined, download: false },
    { icon: Mail, label: "Email", value: "niranjan29293@gmail.com", href: "mailto:niranjan29293@gmail.com", download: false },
    { icon: GraduationCap, label: "Degree", value: "B.Tech IT · 2023 – 2027", href: undefined, download: false },
    { icon: Download, label: "Resume", value: "Download PDF", href: "/Niranjan_Saravanakumar_Resume.pdf", download: true },
];

const education = [
    {
        id: 1,
        degree: "Bachelor of Technology — Information Technology",
        school: "K S Rangasamy College of Technology",
        period: "2023 – 2027",
        badge: "CGPA: 8.62 / 10.0",
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
        badge: "89%",
        points: [
            "Excelled in Mathematics, Physics, and Computer Science, building a strong quantitative foundation.",
        ],
    },
];

export function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const { theme } = useTheme();
    const c = themeColors[theme];

    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

    const rotateX    = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [8, 0, 0, -5]);
    const translateY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -15]);
    const scale      = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0.96, 1, 1, 0.97]);

    const cardStyle = {
        background: c.cardBg,
        border: `1px solid ${c.border}`,
        transition: "border-color 0.22s ease",
    };

    return (
        <section
            id="about"
            ref={sectionRef}
            className="py-28 relative overflow-hidden"
            style={{ background: "var(--surface-2)", perspective: "1200px", perspectiveOrigin: "50% 40%" }}
            aria-label="About Niranjan"
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
                            color: c.primary,
                            border: `1px solid ${c.border}`,
                            background: c.primarySoft,
                        }}
                    >
                        04 / About
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
                        <ScrollBounceText as="span">Who I Am</ScrollBounceText>
                    </h2>
                    <div className="w-16 h-0.5 mx-auto" style={{ background: `linear-gradient(90deg, ${c.primary}, ${c.border})` }} />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">

                    {/* ── Left: Profile + Quick Facts ── */}
                    <motion.div
                        variants={fadeUp3D}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                    >
                        <div className="flex items-center gap-3 mb-7">
                            <User size={20} style={{ color: c.primary, flexShrink: 0 }} />
                            <h3
                                className="text-lg font-bold"
                                style={{ color: c.primary, fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}
                            >
                                Profile
                            </h3>
                        </div>

                        <motion.div
                            variants={stagger3D}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-4 mb-10"
                        >
                            {aboutPoints.map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp3D}
                                    className="flex gap-3 items-start"
                                >
                                    <span style={{ color: c.primary, marginTop: 6, fontSize: "0.8rem", flexShrink: 0 }}>▸</span>
                                    <p
                                        style={{
                                            color: c.textBody,
                                            fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                                            fontSize: "1rem",
                                            lineHeight: 1.8,
                                        }}
                                    >
                                        {point}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Quick Facts */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {quickFacts.map(({ icon: Icon, label, value, href, download }, i) => {
                                const inner = (
                                    <>
                                        <Icon size={16} style={{ color: c.primary, flexShrink: 0 }} />
                                        <div className="min-w-0">
                                            <div
                                                className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                                                style={{ color: c.textLabel, fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                                            >
                                                {label}
                                            </div>
                                            <div
                                                className="text-sm font-medium truncate"
                                                style={{
                                                    color: href ? c.primary : c.textBody,
                                                    fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                                                }}
                                            >
                                                {value}
                                            </div>
                                        </div>
                                    </>
                                );

                                return (
                                    <motion.div
                                        key={label}
                                        variants={card3DEntrance}
                                        whileHover={{
                                            scale: 1.04,
                                            rotateY: 3,
                                            y: -3,
                                            borderColor: c.borderHover,
                                            transition: { duration: 0.2 },
                                        }}
                                    >
                                        {href ? (
                                            <a
                                                href={href}
                                                {...(download
                                                    ? { download: "Niranjan_Saravanakumar_Resume.pdf" }
                                                    : { target: "_self" })}
                                                aria-label={label}
                                                className="flex items-center gap-3 p-4 rounded-xl w-full"
                                                style={{ ...cardStyle, textDecoration: "none", display: "flex" }}
                                                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = c.borderHover; }}
                                                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = c.border; }}
                                            >
                                                {inner}
                                            </a>
                                        ) : (
                                            <div
                                                className="flex items-center gap-3 p-4 rounded-xl"
                                                style={cardStyle}
                                                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = c.borderHover; }}
                                                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = c.border; }}
                                            >
                                                {inner}
                                            </div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* ── Right: Education Timeline ── */}
                    <motion.div
                        variants={fadeUp3D}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                    >
                        <div className="flex items-center gap-3 mb-7">
                            <GraduationCap size={20} style={{ color: c.primary, flexShrink: 0 }} />
                            <h3
                                className="text-lg font-bold"
                                style={{ color: c.primary, fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}
                            >
                                Education
                            </h3>
                        </div>

                        <div
                            className="ml-3 space-y-10"
                            style={{ borderLeft: `2px solid ${c.border}` }}
                        >
                            {education.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    variants={card3DEntrance}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    className="relative pl-8"
                                    whileHover={{
                                        x: 6,
                                        transition: { duration: 0.2 },
                                    }}
                                >
                                    <div
                                        className="absolute -left-[9px] top-1 w-4 h-4 rounded-full"
                                        style={{
                                            background: c.background,
                                            border: `2px solid ${c.primary}`,
                                        }}
                                    />

                                    <div
                                        className="font-mono text-sm font-semibold mb-1.5"
                                        style={{ color: c.textLabel }}
                                    >
                                        {item.period}
                                    </div>

                                    <h4
                                        className="font-bold leading-snug mb-1"
                                        style={{
                                            fontSize: "1.05rem",
                                            color: c.textHeading,
                                            fontFamily: "var(--font-heading, 'Poppins', sans-serif)",
                                        }}
                                    >
                                        {item.degree}
                                    </h4>

                                    <p
                                        className="text-sm font-medium mb-2.5"
                                        style={{ color: c.textDesc, fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                                    >
                                        {item.school}
                                    </p>

                                    <span
                                        className="inline-block font-mono text-xs px-3 py-1 rounded-full mb-3"
                                        style={{
                                            color: c.primary,
                                            border: `1px solid ${c.border}`,
                                            background: c.primarySoft,
                                        }}
                                    >
                                        {item.badge}
                                    </span>

                                    <div className="space-y-1.5">
                                        {item.points.map((point, pi) => (
                                            <div key={pi} className="flex gap-2 items-start">
                                                <span style={{ color: c.primary, fontSize: "0.75rem", marginTop: 5, flexShrink: 0 }}>›</span>
                                                <p
                                                    className="text-sm"
                                                    style={{
                                                        color: c.textDesc,
                                                        fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                                                        lineHeight: 1.75,
                                                    }}
                                                >
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
            </motion.div>
        </section>
    );
}
