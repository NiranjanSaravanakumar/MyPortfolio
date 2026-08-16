"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Code2, FileText, Award } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { themeColors } from "@/lib/themeColors";

interface Stat {
    label: string;
    value: number;
    suffix: string;
    iconNode: React.ReactNode;
}

const statDefs: Stat[] = [
    { label: "Years Experience",  value: 2,  suffix: "+", iconNode: <Briefcase size={24} /> },
    { label: "Projects Deployed", value: 15, suffix: "+", iconNode: <Code2 size={24} />     },
    { label: "Publications",      value: 3,  suffix: "",  iconNode: <FileText size={24} />  },
    { label: "Patents Filed",     value: 2,  suffix: "",  iconNode: <Award size={24} />     },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) {
            setCount(0);
            return;
        }

        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            if (currentStep >= steps) {
                setCount(value);
                clearInterval(timer);
            } else {
                const progress = currentStep / steps;
                const easeOut = 1 - Math.pow(1 - progress, 3);
                setCount(Math.floor(value * easeOut));
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, [value, inView]);

    return (
        <span className="tabular-nums">
            {count.toLocaleString()}{suffix}
        </span>
    );
}

export function StatsCounter() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { theme } = useTheme();
    const c = themeColors[theme];

    return (
        <section
            className="py-16 relative overflow-hidden"
            style={{ background: "var(--surface-2)" }}
        >
            {/* Ambient orbs */}
            <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full blur-[100px] pointer-events-none"
                style={{ background: `${c.primary}14` }} />
            <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full blur-[100px] pointer-events-none"
                style={{ background: `${c.primary}10` }} />

            <div className="container mx-auto px-4 relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-mono font-bold mb-2"
                        style={{ color: c.textHeading }}>
                        <span style={{ color: c.primary }}>&gt;</span> SYSTEM_METRICS
                    </h2>
                    <p className="text-sm" style={{ color: c.textLabel }}>
                        Runtime statistics and performance indicators
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {statDefs.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: `0 0 30px ${c.primary}30`,
                            }}
                            className="relative group"
                        >
                            <div
                                className="p-4 md:p-6 rounded-lg text-center transition-all duration-300"
                                style={{
                                    background: c.cardBg,
                                    border: `1px solid ${c.border}`,
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLDivElement).style.borderColor = c.borderHover;
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLDivElement).style.borderColor = c.border;
                                }}
                            >
                                {/* Icon */}
                                <div
                                    className="mx-auto mb-3 p-3 rounded-lg w-fit transition-all duration-300 group-hover:scale-110"
                                    style={{
                                        backgroundColor: `${c.primary}15`,
                                        color: c.primary,
                                    }}
                                >
                                    {stat.iconNode}
                                </div>

                                {/* Counter */}
                                <div
                                    className="text-2xl md:text-3xl font-bold font-mono mb-1 transition-colors duration-300"
                                    style={{ color: c.primary }}
                                >
                                    <AnimatedCounter
                                        value={stat.value}
                                        suffix={stat.suffix}
                                        inView={isInView}
                                    />
                                </div>

                                {/* Label */}
                                <div
                                    className="text-xs md:text-sm font-mono uppercase tracking-wider"
                                    style={{ color: c.textLabel }}
                                >
                                    {stat.label}
                                </div>

                                {/* Decorative line */}
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-lg"
                                    style={{ backgroundColor: c.primary }}
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
