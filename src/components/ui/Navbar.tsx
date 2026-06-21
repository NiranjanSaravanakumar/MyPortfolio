"use client";

import { motion } from "framer-motion";
import { Terminal, Briefcase, Code, Cpu, User, Award, Mail, Download, Eye, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Experience",     href: "#experience",     icon: Briefcase },
    { name: "Projects",       href: "#projects",       icon: Code      },
    { name: "Skills",         href: "#skills",         icon: Cpu       },
    { name: "About",          href: "#about",          icon: User      },
    { name: "Research",       href: "#publications",   icon: Award     },
    { name: "Contact",        href: "#contact",        icon: Mail      },
];

// All section IDs in page order for IntersectionObserver
const sectionIds = ["home", "experience", "projects", "skills", "about", "publications", "certifications", "achievements", "contact"];

export function Navbar() {
    const [active,     setActive]     = useState("");
    const [scrolled,   setScrolled]   = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    // Active section via IntersectionObserver — updates on scroll automatically
    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActive(`#${id}`);
                    }
                },
                { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
            );
            obs.observe(el);
            observers.push(obs);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    // Scroll shadow
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Mobile scroll-lock
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            role="navigation"
            aria-label="Main navigation"
            className={cn(
                "fixed top-0 left-0 right-0 z-40 border-b transition-all duration-300",
                scrolled
                    ? "bg-[#0a0a0a]/92 backdrop-blur-md border-[var(--border)] py-2"
                    : "bg-transparent border-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" aria-label="Back to top" className="flex items-center gap-2 group">
                    <Terminal size={20} className="text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors" />
                    <span className="font-mono font-bold text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors text-sm">
                        NS
                    </span>
                </Link>

                {/* Desktop nav */}
                <div className="hidden lg:flex items-center gap-0.5">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            aria-current={active === item.href ? "true" : undefined}
                            className={cn(
                                "flex items-center gap-1.5 px-3 py-2 rounded-sm text-sm transition-all",
                                active === item.href
                                    ? "bg-[var(--primary)] text-black font-semibold"
                                    : "text-[var(--foreground)]/65 hover:text-[var(--primary)] hover:bg-[var(--muted)]"
                            )}
                            style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                            onClick={() => setActive(item.href)}
                        >
                            <item.icon size={14} />
                            <span>{item.name}</span>
                        </Link>
                    ))}

                    {/* Resume dropdown — hover reveals View + Download */}
                    <div className="relative group ml-3">
                        {/* Trigger button */}
                        <button
                            aria-label="Resume actions"
                            aria-haspopup="true"
                            className="flex items-center gap-1.5 px-3 py-2 rounded-sm text-sm font-semibold border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)]/10 transition-all"
                            style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                        >
                            Resume
                            <ChevronDown size={13} className="transition-transform duration-200 group-hover:rotate-180" />
                        </button>

                        {/* Dropdown panel — appears on hover */}
                        <div
                            className="absolute right-0 top-full mt-1.5 w-44 bg-[#111]/95 backdrop-blur-md border border-[var(--border)] rounded-sm shadow-xl
                                       opacity-0 pointer-events-none translate-y-1
                                       group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0
                                       transition-all duration-200 ease-out z-50"
                            role="menu"
                        >
                            <a
                                href="/Niranjan_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                role="menuitem"
                                aria-label="View resume in new tab"
                                className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-[var(--foreground)]/75 hover:text-[var(--primary)] hover:bg-[var(--primary)]/8 transition-all border-b border-[var(--border)]"
                                style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                            >
                                <Eye size={14} />
                                View Resume
                            </a>
                            <a
                                href="/Niranjan_Resume.pdf"
                                download="Niranjan_Saravanakumar_Resume.pdf"
                                role="menuitem"
                                aria-label="Download resume as PDF"
                                className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-[var(--foreground)]/75 hover:text-[var(--primary)] hover:bg-[var(--primary)]/8 transition-all"
                                style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                            >
                                <Download size={14} />
                                Download PDF
                            </a>
                        </div>
                    </div>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="lg:hidden text-[var(--primary)] focus:outline-none p-1"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileOpen}
                >
                    <div className="space-y-1.5">
                        <span className={cn("block h-0.5 w-5 bg-current transition-all", mobileOpen && "rotate-45 translate-y-2")} />
                        <span className={cn("block h-0.5 w-5 bg-current transition-opacity", mobileOpen && "opacity-0")} />
                        <span className={cn("block h-0.5 w-5 bg-current transition-all", mobileOpen && "-rotate-45 -translate-y-2")} />
                    </div>
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:hidden bg-[#0a0a0a]/96 border-t border-[var(--border)] px-4 py-3 space-y-1"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            aria-current={active === item.href ? "true" : undefined}
                            className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-[var(--foreground)]/65 hover:text-[var(--primary)] hover:bg-[var(--muted)] rounded-sm transition-all"
                            style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                            onClick={() => { setActive(item.href); setMobileOpen(false); }}
                        >
                            <item.icon size={15} />
                            <span>{item.name}</span>
                        </Link>
                    ))}

                    {/* Mobile resume actions — two separate buttons */}
                    <div className="flex flex-col gap-1 mt-2 border-t border-[var(--border)] pt-2">
                        <a
                            href="/Niranjan_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-[var(--primary)] hover:bg-[var(--primary)]/10 rounded-sm transition-all"
                            style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                            onClick={() => setMobileOpen(false)}
                        >
                            <Eye size={15} />
                            View Resume
                        </a>
                        <a
                            href="/Niranjan_Resume.pdf"
                            download="Niranjan_Saravanakumar_Resume.pdf"
                            className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-semibold text-[var(--primary)] border border-[var(--primary)]/40 rounded-sm hover:bg-[var(--primary)]/10 transition-all"
                            style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                            onClick={() => setMobileOpen(false)}
                        >
                            <Download size={15} />
                            Download PDF
                        </a>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
