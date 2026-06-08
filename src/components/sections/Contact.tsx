"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send, Github, Loader2, CheckCircle, AlertCircle, Code2 } from "lucide-react";
import { useState } from "react";
import { SectionBackground } from "@/components/ui/SectionBackground";

export function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    to: "nickniranjan2929@gmail.com",
                    subject: `Portfolio Inquiry: ${formData.name}`,
                }),
            });
            const result = await response.json();
            if (result.success) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 5000);
            }
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const contactLinks = [
        {
            href: "mailto:nickniranjan2929@gmail.com",
            icon: Mail,
            label: "Email",
            value: "nickniranjan2929@gmail.com",
            color: "var(--primary)",
        },
        {
            href: "tel:+919080029293",
            icon: Phone,
            label: "Phone",
            value: "+91 9080029293",
            color: "var(--secondary)",
        },
        {
            href: "https://linkedin.com/in/niranjan-saravanakumar",
            icon: Linkedin,
            label: "LinkedIn",
            value: "Connect on LinkedIn",
            color: "var(--accent)",
            external: true,
        },
        {
            href: "https://github.com/nickniranjan2929",
            icon: Github,
            label: "GitHub",
            value: "github.com/nickniranjan2929",
            color: "var(--foreground)",
            external: true,
        },
        {
            href: "https://leetcode.com/",
            icon: Code2,
            label: "LeetCode",
            value: "Practice Profile",
            color: "var(--secondary)",
            external: true,
        },
    ];

    return (
        <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            <SectionBackground variant="primary" intensity="low" />
            <div className="container mx-auto px-4 max-w-5xl relative z-10">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <span className="inline-block font-mono text-xs text-[var(--primary)] uppercase tracking-widest mb-3 px-3 py-1 border border-[var(--primary)]/30 rounded-full">
                        06 / Contact
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
                        Let&apos;s Connect
                    </h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto mb-4" />
                    <p className="text-[var(--foreground)]/60 max-w-md mx-auto text-sm leading-relaxed">
                        Open to full-time roles, internships, and collaboration opportunities. Feel free to reach out — I&apos;ll get back to you promptly.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Left — Contact Links */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-sm font-mono text-[var(--foreground)]/50 uppercase tracking-widest mb-6">Find me at</h3>

                        <div className="space-y-3">
                            {contactLinks.map(({ href, icon: Icon, label, value, color, external }, i) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target={external ? "_blank" : undefined}
                                    rel={external ? "noreferrer" : undefined}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="flex items-center gap-4 p-4 border border-[var(--border)] bg-[var(--muted)]/20 rounded-sm hover:bg-[var(--muted)]/40 transition-all duration-300 group"
                                    style={{ borderLeftColor: color } as React.CSSProperties}
                                >
                                    <div
                                        className="p-2.5 rounded-sm transition-colors flex-shrink-0"
                                        style={{ backgroundColor: `${color}15`, color }}
                                    >
                                        <Icon size={18} />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="text-xs font-mono text-[var(--foreground)]/40 uppercase tracking-wider mb-0.5">{label}</div>
                                        <div
                                            className="text-sm font-medium truncate transition-colors group-hover:opacity-100"
                                            style={{ color }}
                                        >
                                            {value}
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Location */}
                        <div className="mt-5 flex items-center gap-4 p-4 border border-[var(--border)] bg-[var(--muted)]/10 rounded-sm">
                            <div className="p-2.5 rounded-sm bg-[var(--muted)]/30 flex-shrink-0">
                                <MapPin size={18} className="text-[var(--foreground)]/50" />
                            </div>
                            <div>
                                <div className="text-xs font-mono text-[var(--foreground)]/40 uppercase tracking-wider mb-0.5">Location</div>
                                <div className="text-sm text-[var(--foreground)]/70">Erode, Tamil Nadu, India</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="border border-[var(--border)] bg-[var(--muted)]/10 p-6 md:p-8 rounded-sm">
                            <h3 className="font-mono text-sm text-[var(--primary)] mb-6 flex items-center gap-2 uppercase tracking-widest">
                                <Send size={15} /> Send a Message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="contact-name" className="block text-xs font-mono text-[var(--foreground)]/40 uppercase tracking-wider mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="contact-name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-black border border-[var(--border)] text-[var(--foreground)] font-mono text-sm focus:outline-none focus:border-[var(--primary)] transition-colors placeholder:text-[var(--foreground)]/25 rounded-sm"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contact-email" className="block text-xs font-mono text-[var(--foreground)]/40 uppercase tracking-wider mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="contact-email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-black border border-[var(--border)] text-[var(--foreground)] font-mono text-sm focus:outline-none focus:border-[var(--primary)] transition-colors placeholder:text-[var(--foreground)]/25 rounded-sm"
                                        placeholder="john@company.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contact-message" className="block text-xs font-mono text-[var(--foreground)]/40 uppercase tracking-wider mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-black border border-[var(--border)] text-[var(--foreground)] font-mono text-sm focus:outline-none focus:border-[var(--primary)] transition-colors resize-none placeholder:text-[var(--foreground)]/25 rounded-sm"
                                        placeholder="Hi Niranjan, I'd like to discuss..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full py-3 bg-[var(--primary)] text-black font-mono font-bold uppercase tracking-widest hover:bg-[var(--accent)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer rounded-sm"
                                >
                                    {status === "loading" && <Loader2 size={16} className="animate-spin" />}
                                    {status === "success" && <CheckCircle size={16} />}
                                    {status === "error" && <AlertCircle size={16} />}
                                    {status === "idle" && <Send size={16} />}
                                    {status === "idle" && "Send Message"}
                                    {status === "loading" && "Sending..."}
                                    {status === "success" && "Message Sent!"}
                                    {status === "error" && "Failed — Try Again"}
                                </button>

                                {status === "success" && (
                                    <p className="text-center text-[var(--primary)] font-mono text-xs mt-2">
                                        ✓ Thanks! I&apos;ll respond within 24 hours.
                                    </p>
                                )}
                                {status === "error" && (
                                    <p className="text-center text-red-400 font-mono text-xs mt-2">
                                        Something went wrong. Please email me directly.
                                    </p>
                                )}
                            </form>
                        </div>
                    </motion.div>

                </div>

                {/* Footer */}
                <div className="mt-20 text-center border-t border-[var(--border)] pt-8">
                    <p className="font-mono text-[var(--foreground)]/25 text-xs">
                        © 2026 NIRANJAN SARAVANAKUMAR · Built with Next.js & TypeScript
                    </p>
                </div>
            </div>
        </section>
    );
}
