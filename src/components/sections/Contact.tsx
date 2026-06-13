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
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
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
        { href: "mailto:nickniranjan2929@gmail.com",            icon: Mail,     label: "Email",    value: "nickniranjan2929@gmail.com", color: "var(--primary)"   },
        { href: "tel:+919080029293",                            icon: Phone,    label: "Phone",    value: "+91 9080029293",             color: "var(--secondary)" },
        { href: "https://www.linkedin.com/in/niranjansaravanakumar/", icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn",        color: "var(--accent)", external: true  },
        { href: "https://github.com/NiranjanSaravanakumar",          icon: Github,   label: "GitHub",   value: "NiranjanSaravanakumar",color: "var(--foreground)", external: true },
        { href: "https://leetcode.com/u/Niranjan_S_2006/",                        icon: Code2,    label: "LeetCode", value: "Practice Profile",           color: "var(--secondary)", external: true },
    ];

    return (
        <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden" aria-label="Contact">
            <SectionBackground variant="primary" intensity="low" />
            <div className="container mx-auto px-4 max-w-5xl relative z-10">

                {/* ── Section Header ───────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <span className="section-label inline-block text-[var(--primary)] mb-3 px-3 py-1 border border-[var(--primary)]/30 rounded-full">
                        07 / Contact
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4"
                        style={{ fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}>
                        Let&apos;s Connect
                    </h2>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto mb-4" />
                    {/* Inter for body text */}
                    <p className="text-[var(--foreground)]/60 max-w-md mx-auto text-sm leading-relaxed"
                       style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}>
                        Open to full-time roles, internships, and collaboration opportunities.
                        I&apos;ll respond within 24 hours.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* ── Left: Contact Links ──────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* mono section label */}
                        <div className="section-label text-[var(--foreground)]/40 mb-6">Find me at</div>

                        <div className="space-y-3">
                            {contactLinks.map(({ href, icon: Icon, label, value, color, external }, i) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target={external ? "_blank" : undefined}
                                    rel={external ? "noreferrer" : undefined}
                                    aria-label={`${label}: ${value}`}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.07 }}
                                    className="flex items-center gap-4 p-4 border border-[var(--border)] bg-[var(--muted)]/20 rounded-sm hover:bg-[var(--muted)]/40 transition-all duration-300 group"
                                >
                                    <div className="p-2.5 rounded-sm transition-colors flex-shrink-0"
                                         style={{ backgroundColor: `${color}15`, color }}>
                                        <Icon size={17} />
                                    </div>
                                    <div className="min-w-0">
                                        {/* mono for the key label */}
                                        <div className="section-label text-[var(--foreground)]/35 text-[10px] mb-0.5">{label}</div>
                                        {/* Inter for the value */}
                                        <div className="text-sm font-medium truncate transition-colors group-hover:opacity-90"
                                             style={{ color, fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}>
                                            {value}
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Location */}
                        <div className="mt-4 flex items-center gap-4 p-4 border border-[var(--border)] bg-[var(--muted)]/10 rounded-sm">
                            <div className="p-2.5 rounded-sm bg-[var(--muted)]/30 flex-shrink-0">
                                <MapPin size={17} className="text-[var(--foreground)]/40" />
                            </div>
                            <div>
                                <div className="section-label text-[var(--foreground)]/35 text-[10px] mb-0.5">Location</div>
                                <div className="text-sm text-[var(--foreground)]/65"
                                     style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}>
                                    Erode, Tamil Nadu, India
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* ── Right: Contact Form ──────────────── */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="border border-[var(--border)] bg-[var(--muted)]/10 p-6 md:p-8 rounded-sm">
                            <h3 className="text-sm font-semibold text-[var(--primary)] mb-6 flex items-center gap-2"
                                style={{ fontFamily: "var(--font-heading, 'Poppins', sans-serif)" }}>
                                <Send size={14} /> Send a Message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                                {/* Name */}
                                <div>
                                    <label htmlFor="contact-name"
                                           className="section-label block text-[var(--foreground)]/40 text-[10px] mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="contact-name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        autoComplete="name"
                                        className="w-full px-4 py-3 bg-black border border-[var(--border)] text-[var(--foreground)] text-sm focus:outline-none focus:border-[var(--primary)] transition-colors placeholder:text-[var(--foreground)]/22 rounded-sm"
                                        style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                                        placeholder="Jane Smith"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="contact-email"
                                           className="section-label block text-[var(--foreground)]/40 text-[10px] mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="contact-email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        autoComplete="email"
                                        className="w-full px-4 py-3 bg-black border border-[var(--border)] text-[var(--foreground)] text-sm focus:outline-none focus:border-[var(--primary)] transition-colors placeholder:text-[var(--foreground)]/22 rounded-sm"
                                        style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                                        placeholder="jane@company.com"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="contact-message"
                                           className="section-label block text-[var(--foreground)]/40 text-[10px] mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-black border border-[var(--border)] text-[var(--foreground)] text-sm focus:outline-none focus:border-[var(--primary)] transition-colors resize-none placeholder:text-[var(--foreground)]/22 rounded-sm"
                                        style={{ fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                                        placeholder="Hi Niranjan, I'd like to discuss..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full py-3 bg-[var(--primary)] text-black font-bold font-mono uppercase tracking-widest hover:bg-[var(--accent)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer rounded-sm"
                                >
                                    {status === "loading" && <Loader2 size={15} className="animate-spin" />}
                                    {status === "success" && <CheckCircle size={15} />}
                                    {status === "error"   && <AlertCircle size={15} />}
                                    {status === "idle"    && <Send size={15} />}

                                    {status === "idle"    && "Send Message"}
                                    {status === "loading" && "Sending..."}
                                    {status === "success" && "Message Sent!"}
                                    {status === "error"   && "Failed — Try Again"}
                                </button>

                                {status === "success" && (
                                    <p className="text-center text-[var(--primary)] font-mono text-xs mt-1">
                                        ✓ Thanks! I&apos;ll get back to you within 24 hours.
                                    </p>
                                )}
                                {status === "error" && (
                                    <p className="text-center text-red-400 font-mono text-xs mt-1">
                                        Something went wrong. Email me directly at nickniranjan2929@gmail.com
                                    </p>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* Footer */}
                <div className="mt-20 text-center border-t border-[var(--border)] pt-8">
                    <p className="font-mono text-[var(--foreground)]/22 text-xs">
                        © 2026 NIRANJAN SARAVANAKUMAR · Built with Next.js 
                    </p>
                </div>
            </div>
        </section>
    );
}
