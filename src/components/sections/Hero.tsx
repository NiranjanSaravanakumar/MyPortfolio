"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Code2, Download, ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import { InteractiveBackground } from "@/components/ui/InteractiveBackground";
import { useRef } from "react";

/* ─── Social links ─────────────────────────────────────── */
const socialLinks = [
    { href: "https://github.com/NiranjanSaravanakumar",                       icon: Github,   label: "GitHub"   },
    { href: "https://www.linkedin.com/in/niranjansaravanakumar/",             icon: Linkedin, label: "LinkedIn" },
    { href: "https://leetcode.com/u/Niranjan_S_2006/",                        icon: Code2,    label: "LeetCode" },
    { href: "mailto:niranjanbalaji2006@gmail.com",                            icon: Mail,     label: "Email"    },
];

/* ─── Stats ─────────────────────────────────────────────── */
const stats = [
    { value: "120+", label: "Automated Tests"    },
    { value: "45%",  label: "Faster CI/CD"       },
    { value: "15+",  label: "Projects"           },
    { value: "3+",   label: "Engineering Domains"},
];

/* ─── Stagger variants ──────────────────────────────────── */
const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0  },
    transition: { delay, duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
});

/* ─── Portrait Card — fully static after entrance ──────── */
function PortraitCard() {
    const cardRef = useRef<HTMLDivElement>(null);

    /* Hover: soft glow via CSS class, no JS transforms */
    const onMouseEnter = () => {
        if (!cardRef.current) return;
        cardRef.current.style.boxShadow =
            "0 0 56px rgba(0,200,83,0.28), 0 32px 80px rgba(0,0,0,0.7), 0 0 0 0.5px rgba(0,200,83,0.22), inset 0 1px 0 rgba(255,255,255,0.05)";
        cardRef.current.style.transform = "scale(1.018)";
    };
    const onMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.boxShadow =
            "0 32px 80px rgba(0,0,0,0.7), 0 0 0 0.5px rgba(0,200,83,0.12), inset 0 1px 0 rgba(255,255,255,0.05)";
        cardRef.current.style.transform = "scale(1)";
    };

    return (
        /* Nudge the card ~48px upward so it aligns with the heading */
        <motion.div
            {...fadeUp(0.35)}
            className="relative flex items-center justify-center"
            style={{ marginTop: -48 }}
        >
            {/* Soft emerald ambient glow — static, no animation */}
            <div
                className="absolute rounded-full pointer-events-none"
                style={{
                    width: 360,
                    height: 400,
                    background: "radial-gradient(ellipse, rgba(0,200,83,0.14) 0%, rgba(0,200,83,0.03) 55%, transparent 100%)",
                    filter: "blur(36px)",
                    zIndex: 0,
                }}
            />

            {/* Thin gradient border ring — static */}
            <div
                className="relative rounded-[30px] p-[1.5px]"
                style={{
                    background: "linear-gradient(135deg, rgba(0,200,83,0.45) 0%, rgba(0,200,83,0.08) 40%, rgba(0,200,83,0.35) 100%)",
                    zIndex: 1,
                }}
            >
                {/* Card — static; only CSS transitions on hover */}
                <div
                    ref={cardRef}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    className="relative rounded-[29px] overflow-hidden cursor-default"
                    style={{
                        width: 340,
                        height: 420,
                        background: "linear-gradient(145deg, rgba(10,20,14,0.92) 0%, rgba(5,10,8,0.96) 100%)",
                        backdropFilter: "blur(24px)",
                        boxShadow:
                            "0 32px 80px rgba(0,0,0,0.7), 0 0 0 0.5px rgba(0,200,83,0.12), inset 0 1px 0 rgba(255,255,255,0.05)",
                        transition: "box-shadow 0.32s ease, transform 0.32s ease",
                    }}
                    aria-label="Niranjan Saravanakumar portrait"
                >
                    {/* Inner radial glow — static */}
                    <div
                        className="absolute inset-0 pointer-events-none rounded-[29px]"
                        style={{
                            background:
                                "radial-gradient(ellipse 80% 60% at 50% 110%, rgba(0,200,83,0.14) 0%, transparent 70%)",
                        }}
                    />

                    {/* Portrait image */}
                    <div className="relative w-full h-full flex items-end justify-center overflow-hidden">
                        <Image
                            src="/photo.jpg"
                            alt="Niranjan Saravanakumar"
                            fill
                            priority
                            sizes="340px"
                            className="object-cover object-top"
                            draggable={false}
                        />

                        {/* Bottom gradient overlay */}
                        <div
                            className="absolute bottom-0 left-0 right-0 pointer-events-none"
                            style={{
                                height: 90,
                                background: "linear-gradient(to top, rgba(5,10,8,0.75) 0%, transparent 100%)",
                            }}
                        />
                    </div>

                    {/* Shine sweep on hover — CSS only, no JS transform */}
                    <div
                        className="absolute inset-0 pointer-events-none rounded-[29px] portrait-shine"
                        style={{
                            background:
                                "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.04) 50%, transparent 70%)",
                            opacity: 0,
                            transition: "opacity 0.3s ease",
                        }}
                    />
                </div>
            </div>
        </motion.div>
    );
}

/* ─── Magnetic button hook ──────────────────────────────── */
function useMagnetic<T extends HTMLElement>() {
    const ref = useRef<T>(null);
    const onMouseMove = (e: React.MouseEvent<T>) => {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width  / 2) * 0.16;
        const y = (e.clientY - r.top  - r.height / 2) * 0.16;
        ref.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    const onMouseLeave = () => {
        if (!ref.current) return;
        ref.current.style.transform = "translate(0,0)";
    };
    return { ref, onMouseMove, onMouseLeave };
}

/* ─── Hero ──────────────────────────────────────────────── */
export function Hero() {
    const primaryMag   = useMagnetic<HTMLAnchorElement>();
    const secondaryMag = useMagnetic<HTMLAnchorElement>();

    return (
        <section
            id="home"
            aria-label="Hero — Niranjan Saravanakumar"
            className="relative flex flex-col justify-center overflow-hidden"
            style={{ minHeight: "90vh", paddingTop: 80, background: "#050505" }}
        >
            <InteractiveBackground />

            <div
                className="relative z-10 w-full mx-auto px-6 lg:px-8"
                style={{ maxWidth: 1280 }}
            >
                <div
                    className="flex flex-col lg:flex-row items-center"
                    style={{ gap: 80, minHeight: "calc(90vh - 80px)" }}
                >

                    {/* ═══════════════════════════════════════
                        LEFT — Text content
                    ═══════════════════════════════════════ */}
                    <div className="flex-1 flex flex-col justify-center" style={{ maxWidth: 640 }}>

                        {/* Badge */}
                        <motion.div {...fadeUp(0.05)} className="mb-8">
                            <span
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-wide"
                                style={{
                                    background: "rgba(0,200,83,0.06)",
                                    border: "1px solid rgba(0,200,83,0.2)",
                                    color: "#00C853",
                                    boxShadow: "0 0 18px rgba(0,200,83,0.07)",
                                }}
                            >

                                Software Engineer&nbsp;•&nbsp;Test Automation&nbsp;•&nbsp;Full-Stack&nbsp;•&nbsp;DevOps
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            {...fadeUp(0.12)}
                            style={{
                                fontFamily: "var(--font-heading, 'Poppins', sans-serif)",
                                lineHeight: 1.06,
                                marginBottom: 32,
                                color: "#ffffff",
                            }}
                        >
                            <span
                                className="block font-bold"
                                style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)", color: "rgba(255,255,255,0.72)", marginBottom: 4 }}
                            >
                                Hi, I&apos;m
                            </span>
                            <span
                                className="block font-black bg-clip-text text-transparent"
                                style={{
                                    fontSize: "clamp(3.8rem, 8vw, 6.2rem)",
                                    backgroundImage: "linear-gradient(135deg, #00ff66 0%, #00C853 45%, #69ffb4 80%, #00ff66 100%)",
                                    backgroundSize: "200% auto",
                                    animation: "gradientShift 4s ease infinite",
                                    filter: "drop-shadow(0 0 32px rgba(0,200,83,0.38))",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                NIRANJAN
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            {...fadeUp(0.2)}
                            style={{
                                fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                                fontSize: "clamp(1rem, 1.4vw, 1.175rem)",
                                lineHeight: 1.75,
                                color: "rgba(255,255,255,0.58)",
                                maxWidth: 520,
                                marginBottom: 32,
                            }}
                        >
                            Building reliable, scalable software through{" "}
                            <span style={{ color: "#00C853", fontWeight: 600 }}>automation-first engineering</span>,{" "}
                            modern full-stack development, and{" "}
                            <span style={{ color: "#00C853", fontWeight: 600 }}>DevOps practices</span>.
                        </motion.p>

                        {/* Info chips */}
                        <motion.div
                            {...fadeUp(0.26)}
                            className="flex flex-wrap gap-3"
                            style={{ marginBottom: 40 }}
                        >
                            {[
                                { emoji: "🎓", text: "Final-year B.Tech Information Technology" },
                            ].map(({ emoji, text }) => (
                                <div
                                    key={text}
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm"
                                    style={{
                                        background: "rgba(255,255,255,0.04)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        color: "rgba(255,255,255,0.55)",
                                        fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                                    }}
                                >
                                    <span>{emoji}</span>
                                    <span>{text}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTA buttons */}
                        <motion.div
                            {...fadeUp(0.32)}
                            className="flex flex-wrap items-center gap-4"
                            style={{ marginBottom: 48 }}
                        >
                            {/* Primary */}
                            <a
                                ref={primaryMag.ref}
                                href="#projects"
                                aria-label="Explore projects"
                                onMouseMove={primaryMag.onMouseMove}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                                        "0 0 48px rgba(0,200,83,0.5), 0 8px 28px rgba(0,0,0,0.45)";
                                }}
                                onMouseLeave={(e) => {
                                    primaryMag.onMouseLeave();
                                    (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                                        "0 0 32px rgba(0,200,83,0.32), 0 4px 20px rgba(0,0,0,0.4)";
                                }}
                                className="group relative inline-flex items-center gap-2.5 font-semibold rounded-2xl overflow-hidden select-none"
                                style={{
                                    height: 52,
                                    padding: "0 28px",
                                    background: "#00C853",
                                    color: "#050505",
                                    fontSize: 15,
                                    fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                                    boxShadow: "0 0 32px rgba(0,200,83,0.32), 0 4px 20px rgba(0,0,0,0.4)",
                                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                                }}
                            >
                                {/* Shimmer */}
                                <span
                                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                                    style={{
                                        background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.28) 50%, transparent 65%)",
                                        backgroundSize: "200% 100%",
                                        animation: "shimmerSlide 0.6s ease forwards",
                                    }}
                                />
                                <ArrowRight
                                    size={17}
                                    className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                                />
                                <span className="relative z-10">Explore Projects</span>
                            </a>

                            {/* Secondary */}
                            <a
                                ref={secondaryMag.ref}
                                href="/Niranjan_Resume.pdf"
                                download="Niranjan_Saravanakumar_Resume.pdf"
                                aria-label="Download resume"
                                onMouseMove={secondaryMag.onMouseMove}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget as HTMLAnchorElement;
                                    el.style.background = "rgba(0,200,83,0.12)";
                                    el.style.borderColor = "rgba(0,200,83,0.45)";
                                    el.style.boxShadow = "0 0 24px rgba(0,200,83,0.2)";
                                }}
                                onMouseLeave={(e) => {
                                    secondaryMag.onMouseLeave();
                                    const el = e.currentTarget as HTMLAnchorElement;
                                    el.style.background = "rgba(0,200,83,0.06)";
                                    el.style.borderColor = "rgba(0,200,83,0.25)";
                                    el.style.boxShadow = "none";
                                }}
                                className="group inline-flex items-center gap-2.5 font-semibold rounded-2xl select-none"
                                style={{
                                    height: 52,
                                    padding: "0 28px",
                                    background: "rgba(0,200,83,0.06)",
                                    color: "#00C853",
                                    fontSize: 15,
                                    fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                                    border: "1px solid rgba(0,200,83,0.25)",
                                    transition: "all 0.22s ease",
                                }}
                            >
                                <Download
                                    size={17}
                                    className="flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
                                />
                                Download Resume
                            </a>
                        </motion.div>

                        {/* Stats + Social — both constrained to the same 520px column */}
                        <motion.div
                            {...fadeUp(0.4)}
                            style={{ maxWidth: 520 }}
                        >
                            {/* Stat cards */}
                            <div className="grid grid-cols-4 gap-3">
                                {stats.map(({ value, label }) => (
                                    <div
                                        key={label}
                                        className="flex flex-col items-center justify-center gap-1 rounded-2xl py-4 px-2 text-center cursor-default"
                                        style={{
                                            background: "rgba(0,200,83,0.04)",
                                            border: "1px solid rgba(0,200,83,0.12)",
                                            backdropFilter: "blur(8px)",
                                            transition: "background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            const el = e.currentTarget as HTMLDivElement;
                                            el.style.background = "rgba(0,200,83,0.09)";
                                            el.style.borderColor = "rgba(0,200,83,0.28)";
                                            el.style.boxShadow = "0 0 20px rgba(0,200,83,0.1)";
                                        }}
                                        onMouseLeave={(e) => {
                                            const el = e.currentTarget as HTMLDivElement;
                                            el.style.background = "rgba(0,200,83,0.04)";
                                            el.style.borderColor = "rgba(0,200,83,0.12)";
                                            el.style.boxShadow = "none";
                                        }}
                                    >
                                        <div
                                            className="font-black"
                                            style={{
                                                fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
                                                color: "#00C853",
                                                fontFamily: "var(--font-heading, 'Poppins', sans-serif)",
                                                letterSpacing: "-0.02em",
                                            }}
                                        >
                                            {value}
                                        </div>
                                        <div
                                            style={{
                                                fontSize: "0.6rem",
                                                color: "rgba(255,255,255,0.38)",
                                                fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                                                lineHeight: 1.35,
                                                textAlign: "center",
                                            }}
                                        >
                                            {label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social icons — same 4-col grid as stat cards */}
                            <div
                                className="grid grid-cols-4 gap-3"
                                style={{ marginTop: 12 }}
                            >
                                {socialLinks.map(({ href, icon: Icon, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target={href.startsWith("mailto") ? "_self" : "_blank"}
                                        rel="noreferrer"
                                        aria-label={label}
                                        title={label}
                                        className="inline-flex items-center justify-center"
                                        style={{
                                            height: 52,
                                            borderRadius: 14,
                                            background: "rgba(0,200,83,0.04)",
                                            backdropFilter: "blur(8px)",
                                            border: "1px solid rgba(0,200,83,0.12)",
                                            color: "rgba(255,255,255,0.4)",
                                            transition: "background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease, color 0.25s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            const el = e.currentTarget as HTMLAnchorElement;
                                            el.style.color = "#00C853";
                                            el.style.borderColor = "rgba(0,200,83,0.35)";
                                            el.style.background = "rgba(0,200,83,0.08)";
                                            el.style.boxShadow = "0 0 16px rgba(0,200,83,0.15), 0 2px 12px rgba(0,0,0,0.25)";
                                            el.style.transform = "scale(1.05)";
                                        }}
                                        onMouseLeave={(e) => {
                                            const el = e.currentTarget as HTMLAnchorElement;
                                            el.style.color = "rgba(255,255,255,0.4)";
                                            el.style.borderColor = "rgba(0,200,83,0.12)";
                                            el.style.background = "rgba(0,200,83,0.04)";
                                            el.style.boxShadow = "none";
                                            el.style.transform = "scale(1)";
                                        }}
                                    >
                                        <Icon size={20} strokeWidth={1.6} />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* ═══════════════════════════════════════
                        RIGHT — Portrait card
                    ═══════════════════════════════════════ */}
                    <div className="hidden lg:flex items-start justify-center flex-shrink-0" style={{ paddingTop: 16 }}>
                        <PortraitCard />
                    </div>
                </div>
            </div>


        </section>
    );
}
