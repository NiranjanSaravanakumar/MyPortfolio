"use client";

import { motion } from "framer-motion";
import { Terminal, User, Briefcase, Code, Award, Trophy, Mail, Cpu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "About",          href: "#about",          icon: User      },
    { name: "Experience",     href: "#experience",     icon: Briefcase },
    { name: "Skills",         href: "#skills",         icon: Cpu       },
    { name: "Projects",       href: "#projects",       icon: Code      },
    { name: "Certifications", href: "#certifications", icon: Award     },
    { name: "Achievements",   href: "#achievements",   icon: Trophy    },
    { name: "Contact",        href: "#contact",        icon: Mail      },
];

export function Navbar() {
    const [active,     setActive]     = useState("");
    const [scrolled,   setScrolled]   = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

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

                {/* Logo — mono is fitting for the terminal brand mark */}
                <Link href="/" aria-label="Back to top" className="flex items-center gap-2 group">
                    <Terminal size={20} className="text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors" />
                    <span className="font-mono font-bold text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors text-sm">
                        NS
                    </span>
                </Link>

                {/* Desktop nav — Inter for nav item labels */}
                <div className="hidden lg:flex items-center space-x-0.5">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-1.5 px-3 py-2 rounded-sm text-xs transition-all",
                                active === item.href
                                    ? "bg-[var(--primary)] text-black font-semibold"
                                    : "text-[var(--foreground)]/65 hover:text-[var(--primary)] hover:bg-[var(--muted)]"
                            )}
                            style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                            onClick={() => setActive(item.href)}
                        >
                            <item.icon size={12} />
                            <span>{item.name}</span>
                        </Link>
                    ))}
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
                            className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-[var(--foreground)]/65 hover:text-[var(--primary)] hover:bg-[var(--muted)] rounded-sm transition-all"
                            style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                            onClick={() => { setActive(item.href); setMobileOpen(false); }}
                        >
                            <item.icon size={15} />
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
}
