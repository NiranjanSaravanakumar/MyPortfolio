"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Code2, Mail, Download, ExternalLink } from "lucide-react";
import { Typewriter } from "@/components/ui/Typewriter";
import { InteractiveBackground } from "@/components/ui/InteractiveBackground";

interface HeroProps {
    onInteract?: () => void;
}

export function Hero({ onInteract }: HeroProps) {
    const [bootSequenceFinished, setBootSequenceFinished] = useState(false);
    const [showEnterButton, setShowEnterButton] = useState(false);

    const handleEnter = () => {
        setBootSequenceFinished(true);
        if (onInteract) onInteract();
    };

    /* Boot logs — mono font is perfect here (terminal aesthetic) */
    const bootLogs = [
        "Booting development environment...",
        "Loading developer profile...",
        "Exploring Full Stack Development, AI & DevOps",
        "Transforming ideas into real-world problems",
        "System ready."
    ];

    const socialLinks = [
        { href: "https://github.com/NiranjanSaravanakumar",            icon: Github,   label: "GitHub"   },
        { href: "https://www.linkedin.com/in/niranjansaravanakumar/?skipRedirect=true", icon: Linkedin, label: "LinkedIn" },
        { href: "https://leetcode.com/u/Niranjan_S_2006/",                          icon: Code2,    label: "LeetCode" },
    ];

    const traits = ["Problem Solver", "Continuous Learner", "Technology Enthusiast"];

    return (
        <section
            id="home"
            aria-label="Hero — Niranjan Saravanakumar"
            className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20"
        >
            {/* ── Background ─────────────────────────────── */}
            {bootSequenceFinished ? (
                <InteractiveBackground />
            ) : (
                <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0d1f12_1px,transparent_1px),linear-gradient(to_bottom,#0d1f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />
            )}

            {/* ── Content ────────────────────────────────── */}
            <div className="z-10 container mx-auto px-4 text-center">

                {/* BOOT TERMINAL */}
                {!bootSequenceFinished ? (
                    <div className="font-mono text-left max-w-lg mx-auto bg-black/60 p-6 border border-[var(--border)] rounded-md backdrop-blur-sm shadow-[0_0_30px_rgba(0,255,65,0.1)]">
                        {/* Window chrome */}
                        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[var(--border)]">
                            <div className="w-3 h-3 rounded-full bg-red-500/70" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                            <div className="w-3 h-3 rounded-full bg-green-500/70" />
                            <span className="ml-2 text-xs text-[var(--foreground)]/40 font-mono">
                                terminal — niranjan@portfolio
                            </span>
                        </div>

                        {bootLogs.map((log, index) => (
                            <div key={index} className="text-sm md:text-base text-[var(--primary)] mb-1.5 font-mono">
                                <Typewriter
                                    text={`> ${log}`}
                                    speed={22}
                                    startDelay={index * 650}
                                    cursor={index === bootLogs.length - 1 && !showEnterButton}
                                    onComplete={
                                        index === bootLogs.length - 1
                                            ? () => setShowEnterButton(true)
                                            : undefined
                                    }
                                />
                            </div>
                        ))}

                        {showEnterButton && (
                            <motion.button
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-6 w-full py-3 bg-[var(--primary)] text-black font-bold font-mono uppercase tracking-widest hover:bg-[var(--accent)] transition-all cursor-pointer rounded-sm relative overflow-hidden group"
                                onClick={handleEnter}
                            >
                                <span className="relative z-10">[ ENTER_PORTFOLIO ]</span>
                                <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                            </motion.button>
                        )}
                    </div>

                ) : (
                    /* MAIN HERO — Poppins headings, Inter body, mono for labels */
                    <motion.div
                        initial={{ opacity: 0, scale: 0.93 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="pointer-events-auto"
                    >
                        {/* Trait badge — mono is fitting here */}
                        <motion.div
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="inline-flex items-center gap-3 px-4 py-1.5 bg-[var(--primary)]/10 border border-[var(--primary)]/30 rounded-full font-mono text-xs text-[var(--primary)] mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse flex-shrink-0" />
                            {traits.join("  ·  ")}
                        </motion.div>

                        {/* Name — Poppins, bold, gradient */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                            className="text-5xl md:text-7xl font-bold mb-5 tracking-tight leading-tight"
                            style={{ fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}
                        >
                            Hello, I&apos;m{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary)] bg-[length:200%_auto] animate-[gradientShift_3s_ease_infinite]">
                                Niranjan
                            </span>
                        </motion.h1>

                        {/* Subtitle — Inter, readable body weight */}
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 }}
                            className="text-lg md:text-xl text-[var(--foreground)]/75 max-w-2xl mx-auto mb-3 font-normal leading-relaxed"
                            style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                        >
                            A passionate software engineer specializing in{" "}
                            <span className="text-[var(--primary)] font-semibold">Test Automation</span>,{" "}
                            <span className="text-[var(--accent)] font-semibold">Full-Stack Development</span>, and{" "}
                            <span className="text-[var(--primary)] font-semibold">DevOps Engineering</span>.
                        </motion.p>

                        {/* Tagline — mono, smaller, subtle */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.45 }}
                            className="text-sm text-[var(--foreground)]/45 max-w-xl mx-auto mb-10 font-mono tracking-wide"
                        >
                            Building reliable software through clean code, automation, and continuous improvement.
                        </motion.p>

                        {/* CTA Buttons — Inter bold */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                        >
                            <a
                                href="#projects"
                                aria-label="View my projects"
                                className="group px-8 py-3 bg-[var(--primary)] text-black font-bold rounded-sm flex items-center gap-2 hover:bg-[var(--accent)] transition-all relative overflow-hidden"
                                style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    View Projects <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </a>

                            <a
                            href="/Niranjan_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View my resume"
                            className="relative group px-8 py-3 border border-[var(--primary)] text-[var(--primary)] rounded-sm flex items-center gap-2 hover:bg-[var(--primary)]/10 transition-all overflow-hidden"
                            style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                            >
                            <span className="relative z-10 flex items-center gap-2 font-semibold">
                                View My CV <ExternalLink size={18} />
                            </span>
                            </a>
                        </motion.div>

                        {/* Social icon row */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center justify-center gap-3"
                        >
                            {socialLinks.map(({ href, icon: Icon, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith("mailto") ? "_self" : "_blank"}
                                    rel="noreferrer"
                                    aria-label={label}
                                    title={label}
                                    className="p-3 border border-[var(--border)] text-[var(--foreground)]/55 hover:text-[var(--primary)] hover:border-[var(--primary)] rounded-sm transition-all duration-300 hover:-translate-y-1"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </div>

            {/* Scroll cue */}
            {bootSequenceFinished && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
                >
                    <div className="w-px h-8 bg-gradient-to-b from-[var(--primary)] to-transparent animate-pulse" />
                </motion.div>
            )}
        </section>
    );
}
