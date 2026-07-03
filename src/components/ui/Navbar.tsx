"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Briefcase, Code, Cpu, User, Award, Mail, X, Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Experience",      href: "#experience",     icon: Briefcase },
    { name: "Projects",        href: "#projects",       icon: Code },
    { name: "Skills",          href: "#skills",         icon: Cpu },
    { name: "About",           href: "#about",          icon: User },
    { name: "Certifications",  href: "#certifications", icon: Award },
    { name: "Contact",         href: "#contact",        icon: Mail },
];

const sectionIds = ["home", "experience", "projects", "skills", "about", "certifications", "achievements", "contact"];

export function Navbar() {
    const [active, setActive]         = useState("");
    const [scrolled, setScrolled]     = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    /* Active section via IntersectionObserver */
    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActive(`#${id}`); },
                { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
            );
            obs.observe(el);
            observers.push(obs);
        });
        return () => observers.forEach((o) => o.disconnect());
    }, []);

    /* Scroll shadow */
    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", fn, { passive: true });
        return () => window.removeEventListener("scroll", fn);
    }, []);

    /* Mobile scroll-lock */
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            role="navigation"
            aria-label="Main navigation"
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={scrolled ? {
                background: "rgba(0,0,0,0.88)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                borderBottom: "1px solid rgba(0,255,102,0.12)",
                boxShadow: "0 4px 40px rgba(0,0,0,0.6)",
            } : {
                background: "transparent",
                backdropFilter: "blur(0px)",
            }}
        >
            <div
                className="mx-auto px-6 lg:px-8 flex items-center justify-between h-16"
                style={{ maxWidth: 1280 }}
            >
                {/* Logo */}
                <Link
                    href="/"
                    aria-label="Back to top"
                    className="flex items-center gap-2.5 group"
                    onClick={() => setMobileOpen(false)}
                >
                    <div
                        className="p-1.5 rounded-lg transition-all duration-200"
                        style={{
                            background: "rgba(0,255,102,0.08)",
                            border: "1px solid rgba(0,255,102,0.20)",
                        }}
                    >
                        <Terminal size={16} style={{ color: "#00FF66" }} />
                    </div>
                    <span
                        className="font-bold text-sm tracking-widest transition-colors duration-200 group-hover:text-[#00FF66]"
                        style={{
                            fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                            color: "rgba(255,255,255,0.95)",
                        }}
                    >
                        NS
                    </span>
                </Link>

                {/* Desktop nav */}
                <div className="hidden lg:flex items-center gap-1">
                    {navItems.map((item) => {
                        const isActive = active === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                aria-current={isActive ? "true" : undefined}
                                onClick={() => setActive(item.href)}
                                className="group relative flex items-center gap-1.5 px-4 py-2 text-sm rounded-lg transition-all duration-200"
                                style={{
                                    fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                                    color: isActive ? "#00FF66" : "rgba(255,255,255,0.95)",
                                    background: isActive ? "rgba(0,255,102,0.08)" : "transparent",
                                    fontWeight: 600,
                                }}
                                onMouseEnter={(e) => {
                                    if (!isActive) {
                                        (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
                                        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive) {
                                        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.95)";
                                        (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                                    }
                                }}
                            >
                                <item.icon size={13} />
                                <span>{item.name}</span>

                                {/* Green underline on active */}
                                <span
                                    className={cn(
                                        "absolute bottom-0.5 left-4 right-4 h-[1.5px] rounded-full transition-all duration-200",
                                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                                    )}
                                    style={{ background: "#00FF66" }}
                                />
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile hamburger */}
                <button
                    className="lg:hidden p-2 rounded-lg transition-all duration-200"
                    style={{
                        background: mobileOpen ? "rgba(0,255,102,0.08)" : "transparent",
                        border: "1px solid",
                        borderColor: mobileOpen ? "rgba(0,255,102,0.25)" : "rgba(255,255,255,0.12)",
                        color: mobileOpen ? "#00FF66" : "rgba(255,255,255,0.95)",
                    }}
                    onClick={() => setMobileOpen((v) => !v)}
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileOpen}
                >
                    {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        style={{
                            background: "rgba(0,0,0,0.97)",
                            backdropFilter: "blur(24px)",
                            borderBottom: "1px solid rgba(0,255,102,0.12)",
                            overflow: "hidden",
                        }}
                    >
                        <div className="mx-auto px-6 py-5 space-y-1" style={{ maxWidth: 1280 }}>
                            {navItems.map((item, i) => {
                                const isActive = active === item.href;
                                return (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.04 }}
                                    >
                                        <Link
                                            href={item.href}
                                            aria-current={isActive ? "true" : undefined}
                                            className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200"
                                            style={{
                                                fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                                                color: isActive ? "#00FF66" : "rgba(255,255,255,0.95)",
                                                background: isActive ? "rgba(0,255,102,0.08)" : "transparent",
                                                border: isActive ? "1px solid rgba(0,255,102,0.20)" : "1px solid transparent",
                                            }}
                                            onClick={() => { setActive(item.href); setMobileOpen(false); }}
                                        >
                                            <item.icon size={15} style={{ color: isActive ? "#00FF66" : "rgba(255,255,255,0.60)" }} />
                                            <span>{item.name}</span>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
