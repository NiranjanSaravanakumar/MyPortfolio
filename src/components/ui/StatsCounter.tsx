"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Code2, FileText, Award } from "lucide-react";

interface Stat {
    label: string;
    value: number;
    suffix: string;
    icon: React.ReactNode;
    color: string;
}

const stats: Stat[] = [
    {
        label: "Years Experience",
        value: 2,
        suffix: "+",
        icon: <Briefcase size={24} />,
        color: "var(--primary)",
    },
    {
        label: "Projects Deployed",
        value: 15,
        suffix: "+",
        icon: <Code2 size={24} />,
        color: "var(--accent)",
    },
    {
        label: "Publications",
        value: 3,
        suffix: "",
        icon: <FileText size={24} />,
        color: "var(--secondary)",
    },
    {
        label: "Patents Filed",
        value: 2,
        suffix: "",
        icon: <Award size={24} />,
        color: "var(--primary)",
    },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) {
            setCount(0);
            return;
        }

        const duration = 2000; // 2 seconds
        const steps = 60;
        const stepValue = value / steps;
        const stepDuration = duration / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            if (currentStep >= steps) {
                setCount(value);
                clearInterval(timer);
            } else {
                // Use easing function for smooth animation
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

    return (
        <section className="py-16 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f] relative overflow-hidden">
            {/* Background grid effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />

            {/* Glowing orbs */}
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[var(--primary)]/10 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-mono font-bold text-[var(--foreground)] mb-2">
                        <span className="text-[var(--accent)]">&gt;</span> SYSTEM_METRICS
                    </h2>
                    <p className="text-[var(--foreground)]/50 text-sm">
                        Runtime statistics and performance indicators
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: `0 0 30px ${stat.color}30`,
                            }}
                            className="relative group"
                        >
                            <div className="bg-[#0a0a0a] border border-[var(--border)] p-4 md:p-6 rounded-lg text-center hover:border-[var(--primary)]/50 transition-all duration-300">
                                {/* Icon */}
                                <div
                                    className="mx-auto mb-3 p-3 rounded-lg w-fit transition-all duration-300 group-hover:scale-110"
                                    style={{
                                        backgroundColor: `${stat.color}15`,
                                        color: stat.color,
                                    }}
                                >
                                    {stat.icon}
                                </div>

                                {/* Counter */}
                                <div
                                    className="text-2xl md:text-3xl font-bold font-mono mb-1 transition-colors duration-300"
                                    style={{ color: stat.color }}
                                >
                                    <AnimatedCounter
                                        value={stat.value}
                                        suffix={stat.suffix}
                                        inView={isInView}
                                    />
                                </div>

                                {/* Label */}
                                <div className="text-xs md:text-sm text-[var(--foreground)]/60 font-mono uppercase tracking-wider">
                                    {stat.label}
                                </div>

                                {/* Decorative line */}
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-lg"
                                    style={{ backgroundColor: stat.color }}
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
