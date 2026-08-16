"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Code2, ArrowRight, ExternalLink, Mail } from "lucide-react";
import Image from "next/image";
import { InteractiveBackground } from "@/components/ui/InteractiveBackground";
import { ScrollBounceText } from "@/components/ui/ScrollBounceText";

/* ─── Social links ─────────────────────────────────────── */
const socialLinks = [
    { href: "https://github.com/NiranjanSaravanakumar",                   icon: Github,   label: "GitHub"   },
    { href: "https://www.linkedin.com/in/niranjansaravanakumar/",         icon: Linkedin, label: "LinkedIn" },
    { href: "https://leetcode.com/u/Niranjan_S_2006/",                    icon: Code2,    label: "LeetCode" },
    { href: "mailto:niranjanbalaji2006@gmail.com",                        icon: Mail,     label: "Email"    },
];

/* ─── Stats ─────────────────────────────────────────────── */
const stats = [
    { value: "300+", label: "Automated Tests"    },
    { value: "45%",  label: "Faster CI/CD"       },
    { value: "15+",  label: "Projects"           },
    { value: "3+",   label: "Engineering Domains"},
];

/* ─── Fade-up entrance variants ────────────────────────── */
const fadeUp = (delay = 0) => ({
    initial:    { opacity: 0, y: 20 },
    animate:    { opacity: 1, y: 0  },
    transition: { delay, duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
});

/* ─── Cycling role typewriter ───────────────────────────── */
const ROLES = [
    "Software Engineer",
    "Full Stack Developer",
    "AI & Machine Learning Enthusiast",
    "Building with React, Python & LLMs",
    "DSA Enthusiast",
    "Analytical Problem Solver",
    "Critical Thinker",
];

function RoleTypewriter() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed]  = useState("");
    const [phase, setPhase]          = useState<"typing" | "hold" | "erasing">("typing");

    useEffect(() => {
        const current = ROLES[roleIndex];

        if (phase === "typing") {
            if (displayed.length < current.length) {
                const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55);
                return () => clearTimeout(t);
            } else {
                const t = setTimeout(() => setPhase("hold"), 1600);
                return () => clearTimeout(t);
            }
        }

        if (phase === "hold") {
            const t = setTimeout(() => setPhase("erasing"), 400);
            return () => clearTimeout(t);
        }

        if (phase === "erasing") {
            if (displayed.length > 0) {
                const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
                return () => clearTimeout(t);
            } else {
                setRoleIndex((i) => (i + 1) % ROLES.length);
                setPhase("typing");
            }
        }
    }, [displayed, phase, roleIndex]);

    return (
        <motion.div {...fadeUp(0.17)} style={{ marginBottom: 12, marginTop: -12 }}>
            <span
                style={{
                    fontFamily: "var(--font-heading, 'Poppins', sans-serif)",
                    fontSize: "clamp(1.4rem, 2.8vw, 2rem)",
                    fontWeight: 600,
                    color: "#00FF66",
                    letterSpacing: "0.01em",
                    display: "inline-block",
                    minHeight: "2em",
                }}
            >
                {displayed}
                <span
                    style={{
                        display: "inline-block",
                        width: 2,
                        height: "1.1em",
                        background: "#00FF66",
                        marginLeft: 3,
                        verticalAlign: "middle",
                        borderRadius: 1,
                        animation: "pulseDot 1.1s ease-in-out infinite",
                        boxShadow: "0 0 8px rgba(0,255,102,0.7)",
                    }}
                />
            </span>
        </motion.div>
    );
}



/* ─── Portrait Card — fully static after entrance ──────── */
function PortraitCard() {
    return (
        <motion.div
            {...fadeUp(0.35)}
            className="relative flex items-center justify-center"
            style={{ marginTop: -32 }}
        >
            {/* Soft emerald ambient glow behind the card */}
            <div
                className="absolute rounded-full pointer-events-none"
                style={{
                    width: 380,
                    height: 430,
                    background: "radial-gradient(ellipse, rgba(0,255,102,0.12) 0%, rgba(0,255,102,0.03) 55%, transparent 100%)",
                    filter: "blur(40px)",
                    zIndex: 0,
                }}
            />

            {/* Gradient border ring */}
            <div
                className="relative rounded-[30px] p-[1.5px]"
                style={{
                    background: "linear-gradient(135deg, rgba(0,255,102,0.50) 0%, rgba(0,255,102,0.08) 45%, rgba(0,255,102,0.40) 100%)",
                    zIndex: 1,
                }}
            >
                {/* Card */}
                <div
                    className="relative rounded-[29px] overflow-hidden cursor-default"
                    style={{
                        width: 340,
                        height: 430,
                        background: "linear-gradient(145deg, rgba(8,18,12,0.95) 0%, rgba(4,8,6,0.98) 100%)",
                        backdropFilter: "blur(24px)",
                        boxShadow: "0 32px 80px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.05)",
                        transition: "box-shadow 0.25s ease",
                    }}
                    aria-label="Niranjan Saravanakumar portrait"
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow =
                            "0 0 56px rgba(0,255,102,0.22), 0 32px 80px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.05)";
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow =
                            "0 32px 80px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.05)";
                    }}
                >
                    {/* Inner ambient glow at bottom */}
                    <div
                        className="absolute inset-0 pointer-events-none rounded-[29px]"
                        style={{
                            background: "radial-gradient(ellipse 80% 60% at 50% 110%, rgba(0,255,102,0.12) 0%, transparent 70%)",
                        }}
                    />

                    {/* Portrait image */}
                    <div className="relative w-full h-full">
                        <Image
                            src="/photo.png"
                            alt="Niranjan Saravanakumar"
                            fill
                            priority
                            sizes="340px"
                            className="object-cover"
                            style={{ objectPosition: "45% 30%" }}
                            draggable={false}
                        />

                        {/* Bottom gradient overlay */}
                        <div
                            className="absolute bottom-0 left-0 right-0 pointer-events-none"
                            style={{
                                height: 80,
                                background: "linear-gradient(to top, rgba(4,8,6,0.70) 0%, transparent 100%)",
                            }}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

/* ─ Hero ────────────────────────────────────────────── */
export function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

    // Text layer — drifts upward faster as user scrolls down
    const textY       = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.3]);
    const textScale   = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

    // Portrait card — drifts slower + subtle 3D rotation
    const cardY       = useTransform(scrollYProgress, [0, 1], [0, -40]);
    const cardRotateY = useTransform(scrollYProgress, [0, 1], [0, 6]);
    const cardScale   = useTransform(scrollYProgress, [0, 1], [1, 1.03]);

    return (
        <section
            id="home"
            ref={heroRef}
            aria-label="Hero — Niranjan Saravanakumar"
            className="relative flex flex-col justify-center overflow-hidden"
            style={{ minHeight: "92vh", paddingTop: 80, background: "#000000" }}
        >
            <InteractiveBackground />

            <div className="relative z-10 w-full mx-auto px-6 lg:px-8" style={{ maxWidth: 1280 }}>
                <div className="flex flex-col lg:flex-row items-center" style={{ gap: 80, minHeight: "calc(92vh - 80px)" }}>

                    {/* LEFT — Text content (faster parallax layer) */}
                    <motion.div
                        className="flex-1 flex flex-col justify-center"
                        style={{ maxWidth: 620, translateX: "25px", y: textY, opacity: textOpacity, scale: textScale }}
                    >
                        {/* Heading */}
                        <motion.h1
                            {...fadeUp(0.12)}
                            style={{ fontFamily: "var(--font-heading, 'Poppins', sans-serif)", lineHeight: 1.06, marginBottom: 28 }}
                        >
                            <span className="block font-bold" style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)", color: "rgba(255,255,255,0.92)", marginBottom: 6 }}>
                                <ScrollBounceText as="span" intensity={0.7}>Hello, I&apos;m</ScrollBounceText>
                            </span>
                            <span className="block font-black" style={{ fontSize: "clamp(4rem, 9vw, 7rem)", color: "#2dd43bff", letterSpacing: "-0.03em", lineHeight: 0.95, textShadow: "0 0 80px rgba(0,255,102,0.18)" }}>
                                <ScrollBounceText as="span" intensity={1.5}>NIRANJAN</ScrollBounceText>
                            </span>
                        </motion.h1>

                        {/* Cycling role typewriter */}
                        <RoleTypewriter />

                        {/* Description */}
                        <motion.p
                            {...fadeUp(0.2)}
                            style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)", fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)", lineHeight: 1.8, color: "rgba(255,255,255,0.92)", maxWidth: 520, marginBottom: 36 }}
                        >
                            Building reliable, scalable software through{" "}
                            <span style={{ color: "#00FF66", fontWeight: 600 }}>automation-first engineering</span>,{" "}
                            modern full-stack development, and{" "}
                            <span style={{ color: "#00FF66", fontWeight: 600 }}>DevOps practices</span>.
                        </motion.p>

                        {/* Info chip */}
                        <motion.div {...fadeUp(0.26)} className="flex flex-wrap gap-3" style={{ marginBottom: 40 }}>
                            <div
                                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium"
                                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.88)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                            >
                                <span>🎓</span>
                                <span>Final-year B.Tech Information Technology</span>
                            </div>
                        </motion.div>

                        {/* CTA buttons */}
                        <motion.div {...fadeUp(0.32)} className="flex flex-wrap items-center justify-center lg:justify-start gap-4" style={{ marginBottom: 48 }}>
                            <a
                                href="#projects"
                                aria-label="Explore projects"
                                className="group relative inline-flex flex-1 lg:flex-none items-center justify-center gap-2.5 font-semibold overflow-hidden select-none"
                                style={{ height: 60, minWidth: 180, maxWidth: 260, padding: "0 32px", background: "#00FF66", color: "#000000", fontSize: 15, fontFamily: "var(--font-sans, 'Inter', sans-serif)", fontWeight: 700, borderRadius: 16, boxShadow: "0 0 28px rgba(0,255,102,0.28), 0 4px 20px rgba(0,0,0,0.4)", transition: "box-shadow 0.22s ease, transform 0.22s ease", textDecoration: "none" }}
                                onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.boxShadow = "0 0 44px rgba(0,255,102,0.50), 0 8px 28px rgba(0,0,0,0.45)"; el.style.transform = "scale(1.02)"; }}
                                onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.boxShadow = "0 0 28px rgba(0,255,102,0.28), 0 4px 20px rgba(0,0,0,0.4)"; el.style.transform = "scale(1)"; }}
                            >
                                <span className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100" style={{ background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.30) 50%, transparent 65%)", backgroundSize: "200% 100%", animation: "shimmerSlide 0.55s ease forwards" }} />
                                <ArrowRight size={17} className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
                                <span className="relative z-10">Explore Projects</span>
                            </a>
                            <a
                                href="/Niranjan_Saravanakumar_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="View resume"
                                className="group inline-flex flex-1 lg:flex-none items-center justify-center gap-2.5 font-semibold select-none"
                                style={{ height: 60, minWidth: 180, maxWidth: 260, padding: "0 32px", background: "rgba(0,255,102,0.06)", color: "#00FF66", fontSize: 15, fontFamily: "var(--font-sans, 'Inter', sans-serif)", fontWeight: 700, borderRadius: 16, border: "1.5px solid rgba(0,255,102,0.30)", transition: "all 0.22s ease", textDecoration: "none" }}
                                onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "rgba(0,255,102,0.10)"; el.style.borderColor = "rgba(0,255,102,0.55)"; el.style.boxShadow = "0 0 24px rgba(0,255,102,0.18)"; el.style.transform = "scale(1.02)"; }}
                                onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = "rgba(0,255,102,0.06)"; el.style.borderColor = "rgba(0,255,102,0.30)"; el.style.boxShadow = "none"; el.style.transform = "scale(1)"; }}
                            >
                                <ExternalLink size={17} className="flex-shrink-0 transition-transform duration-200 group-hover:scale-110" />
                                View Resume
                            </a>
                        </motion.div>

                        {/* Stats + Social */}
                        <motion.div {...fadeUp(0.40)} style={{ maxWidth: 520 }}>
                            <div className="grid grid-cols-4 gap-3">
                                {stats.map(({ value, label }) => (
                                    <div
                                        key={label}
                                        className="flex flex-col items-center justify-center gap-1.5 rounded-2xl py-4 px-2 text-center cursor-default"
                                        style={{ background: "rgba(0,255,102,0.04)", border: "1px solid rgba(0,255,102,0.20)", transition: "background 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease" }}
                                        onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.background = "rgba(0,255,102,0.08)"; el.style.borderColor = "rgba(0,255,102,0.45)"; el.style.boxShadow = "0 0 20px rgba(0,255,102,0.10)"; }}
                                        onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.background = "rgba(0,255,102,0.04)"; el.style.borderColor = "rgba(0,255,102,0.20)"; el.style.boxShadow = "none"; }}
                                    >
                                        <div className="font-black" style={{ fontSize: "clamp(1.1rem, 2vw, 1.45rem)", color: "#00FF66", fontFamily: "var(--font-heading, 'Poppins', sans-serif)", letterSpacing: "-0.02em" }}>
                                            {value}
                                        </div>
                                        <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-sans, 'Inter', sans-serif)", lineHeight: 1.4, textAlign: "center", fontWeight: 500 }}>
                                            {label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-4 gap-3" style={{ marginTop: 12 }}>
                                {socialLinks.map(({ href, icon: Icon, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target={href.startsWith("mailto") ? "_self" : "_blank"}
                                        rel="noreferrer"
                                        aria-label={label}
                                        title={label}
                                        className="inline-flex items-center justify-center"
                                        style={{ height: 52, borderRadius: 14, background: "rgba(0,255,102,0.04)", border: "1px solid rgba(0,255,102,0.20)", color: "rgba(255,255,255,0.82)", transition: "background 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease, color 0.22s ease" }}
                                        onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "#00FF66"; el.style.borderColor = "rgba(0,255,102,0.55)"; el.style.background = "rgba(0,255,102,0.08)"; el.style.boxShadow = "0 0 16px rgba(0,255,102,0.18)"; }}
                                        onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "rgba(255,255,255,0.82)"; el.style.borderColor = "rgba(0,255,102,0.20)"; el.style.background = "rgba(0,255,102,0.04)"; el.style.boxShadow = "none"; }}
                                    >
                                        <Icon size={20} strokeWidth={1.6} />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT — Portrait card (slower parallax layer) */}
                    <motion.div
                        className="hidden lg:flex items-start justify-center flex-shrink-0"
                        style={{ translateX: "100px", translateY: "-60px", y: cardY, rotateY: cardRotateY, scale: cardScale }}
                    >
                        <PortraitCard />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
