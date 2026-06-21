"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Code2, Download, Eye } from "lucide-react";
import { InteractiveBackground } from "@/components/ui/InteractiveBackground";

const socialLinks = [
    { href: "https://github.com/NiranjanSaravanakumar",                                      icon: Github,   label: "GitHub"   },
    { href: "https://www.linkedin.com/in/niranjansaravanakumar/?skipRedirect=true",           icon: Linkedin, label: "LinkedIn" },
    { href: "https://leetcode.com/u/Niranjan_S_2006/",                                       icon: Code2,    label: "LeetCode" },
];

export function Hero() {
    return (
        <section
            id="home"
            aria-label="Hero — Niranjan Saravanakumar"
            className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20"
        >
            {/* Always-on interactive background */}
            <InteractiveBackground />

            <div className="z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="pointer-events-auto"
                >
                    {/* Role badge — specific differentiators, not generic traits */}
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center gap-3 px-4 py-1.5 bg-[var(--primary)]/10 border border-[var(--primary)]/30 rounded-full font-mono text-xs text-[var(--primary)] mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse flex-shrink-0" />
                        ABB Intern &apos;25&ndash;&apos;26&nbsp;&nbsp;&middot;&nbsp;&nbsp;Test Automation&nbsp;&nbsp;&middot;&nbsp;&nbsp;Full-Stack&nbsp;&nbsp;&middot;&nbsp;&nbsp;DevOps
                    </motion.div>

                    {/* Name — Poppins, bold gradient */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-5 tracking-tight leading-tight"
                        style={{ fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}
                    >
                        Hello, I&apos;m{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary)] bg-[length:200%_auto] animate-[gradientShift_3s_ease_infinite]">
                            Niranjan
                        </span>
                    </motion.h1>

                    {/* Subtitle — Inter, proper contrast */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg md:text-xl max-w-2xl mx-auto mb-3 font-normal leading-relaxed"
                        style={{ color: "var(--text-body)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                    >
                        A passionate software engineer specializing in{" "}
                        <span className="text-[var(--primary)] font-semibold">Test Automation</span>,{" "}
                        <span className="text-[var(--accent)] font-semibold">Full-Stack Development</span>, and{" "}
                        <span className="text-[var(--primary)] font-semibold">DevOps Engineering</span>.
                    </motion.p>

                    {/* Tagline — metrics-first, specific to Niranjan */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-sm max-w-xl mx-auto mb-10 tracking-wide"
                        style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                    >
                        Final-year B.Tech IT&nbsp;&middot;&nbsp;ABB Intern (Aug 2025–May 2026)&nbsp;&middot;&nbsp;120+ automated tests&nbsp;&middot;&nbsp;45% faster CI/CD
                    </motion.p>

                    {/* ── Resume CTAs (primary focus — recruiter first) ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5"
                    >
                        {/* View Resume — solid primary, preview without download */}
                        <a
                            href="/Niranjan_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View resume in new tab"
                            className="group relative px-7 py-3 bg-[var(--primary)] text-black font-bold rounded-sm flex items-center gap-2.5 overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.35)] active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                            style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                        >
                            {/* Shimmer sweep on hover */}
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out pointer-events-none" />
                            <Eye size={17} className="flex-shrink-0 relative z-10" />
                            <span className="relative z-10">View Resume</span>
                        </a>

                        {/* Download Resume — outlined, clearly distinct action */}
                        <a
                            href="/Niranjan_Resume.pdf"
                            download="Niranjan_Saravanakumar_Resume.pdf"
                            aria-label="Download resume as PDF"
                            className="group relative px-7 py-3 border-2 border-[var(--primary)] text-[var(--primary)] font-bold rounded-sm flex items-center gap-2.5 overflow-hidden transition-all duration-300 hover:bg-[var(--primary)]/10 hover:shadow-[0_0_16px_rgba(0,255,65,0.18)] active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                            style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                        >
                            <Download size={17} className="flex-shrink-0 group-hover:animate-bounce" />
                            <span>Download PDF</span>
                        </a>
                    </motion.div>

                    {/* View Projects — tertiary ghost link, below resume actions */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.52 }}
                        className="mb-10"
                    >
                        <a
                            href="#projects"
                            aria-label="Scroll to projects section"
                            className="inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 hover:gap-2.5"
                            style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                        >
                            View my work <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </a>
                    </motion.div>

                    {/* Social icon row */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55 }}
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
            </div>

            {/* Scroll cue */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
            >
                <div className="w-px h-8 bg-gradient-to-b from-[var(--primary)] to-transparent animate-pulse" />
            </motion.div>
        </section>
    );
}
