"use client";

import { motion } from "framer-motion";
import { Terminal, User, Briefcase, Code, Award, Mail, Cpu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "About", href: "#about", icon: User },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Skills", href: "#skills", icon: Cpu },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Certifications", href: "#certifications", icon: Award },
    { name: "Contact", href: "#contact", icon: Mail },
];

export function Navbar() {
    const [active, setActive] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-40 border-b transition-all duration-300",
                scrolled
                    ? "bg-[#0a0a0a]/90 backdrop-blur-md border-[var(--border)] py-2"
                    : "bg-transparent border-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link
                    href="/"
                    className="flex items-center space-x-2 text-lg font-bold font-mono group"
                >
                    <Terminal className="text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors" />
                    <span className="text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">NS</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center space-x-1 px-3 py-2 rounded-sm font-mono text-xs uppercase tracking-wide transition-all",
                                active === item.href
                                    ? "bg-[var(--primary)] text-black font-bold"
                                    : "text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--muted)]"
                            )}
                            onClick={() => setActive(item.href)}
                        >
                            <item.icon size={13} />
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-[var(--primary)] focus:outline-none"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="space-y-1">
                        <span className={cn("block h-0.5 w-6 bg-current transition-transform", mobileOpen && "rotate-45 translate-y-1.5")} />
                        <span className={cn("block h-0.5 w-6 bg-current transition-opacity", mobileOpen && "opacity-0")} />
                        <span className={cn("block h-0.5 w-6 bg-current transition-transform", mobileOpen && "-rotate-45 -translate-y-1.5")} />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-[#0a0a0a]/95 border-t border-[var(--border)] px-4 py-4 space-y-2"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center space-x-2 px-4 py-3 font-mono text-sm text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--muted)] rounded-sm transition-all"
                            onClick={() => { setActive(item.href); setMobileOpen(false); }}
                        >
                            <item.icon size={16} />
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
}
