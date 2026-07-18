"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send, Github, Loader2, CheckCircle, AlertCircle, Code2 } from "lucide-react";
import { useRef, useState } from "react";
import { SectionBackground } from "@/components/ui/SectionBackground";

const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY);
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        } catch (err) {
            console.error("[Contact] EmailJS send failed:", err);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    const contactLinks = [
        { href: "mailto:nickniranjan2929@gmail.com",                          icon: Mail,     label: "Email",    value: "nickniranjan2929@gmail.com",  external: false },
        { href: "tel:+919080029293",                                          icon: Phone,    label: "Phone",    value: "+91 9080029293",               external: false },
        { href: "https://www.linkedin.com/in/niranjansaravanakumar/",         icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn",          external: true  },
        { href: "https://github.com/NiranjanSaravanakumar",                   icon: Github,   label: "GitHub",   value: "NiranjanSaravanakumar",        external: true  },
        { href: "https://leetcode.com/u/Niranjan_S_2006/",                    icon: Code2,    label: "LeetCode", value: "View Profile",                 external: true  },
    ];

    const inputStyle: React.CSSProperties = {
        width: "100%",
        padding: "14px 16px",
        background: "#0a0a0a",
        border: "1.5px solid rgba(0,255,102,0.22)",
        borderRadius: 10,
        color: "#ffffff",
        fontSize: "0.975rem",
        fontFamily: "var(--font-sans, 'Inter', sans-serif)",
        outline: "none",
        transition: "border-color 0.22s ease, box-shadow 0.22s ease",
    };

    return (
        <section id="contact" className="py-28 relative overflow-hidden" style={{ background: "#0a0a0a" }} aria-label="Contact">
            <SectionBackground variant="primary" intensity="low" />

            <div className="relative z-10 w-full mx-auto px-6 lg:px-8" style={{ maxWidth: 1100 }}>

                {/* ── Section Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span
                        className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                        style={{
                            color: "#00FF66",
                            border: "1px solid rgba(0,255,102,0.25)",
                            background: "rgba(0,255,102,0.06)",
                        }}
                    >
                        07 / Contact
                    </span>
                    <h2
                        className="font-extrabold mb-4"
                        style={{
                            fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                            color: "#ffffff",
                            fontFamily: "var(--font-heading, 'Poppins', sans-serif)",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Let&apos;s Connect
                    </h2>
                    <div className="w-16 h-0.5 mx-auto mb-4" style={{ background: "linear-gradient(90deg, #00FF66, rgba(0,255,102,0.3))" }} />
                    <p
                        className="max-w-md mx-auto"
                        style={{
                            color: "rgba(255,255,255,0.92)",
                            fontSize: "1.05rem",
                            lineHeight: 1.8,
                        }}
                    >
                        Open to full-time roles, internships, and collaboration opportunities.
                        I&apos;ll respond within 24 hours.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-14">

                    {/* ── Left: Contact Links ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div
                            className="text-xs font-bold uppercase tracking-widest mb-6"
                            style={{ color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                        >
                            Find me at
                        </div>

                        <div className="space-y-3">
                            {contactLinks.map(({ href, icon: Icon, label, value, external }, i) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target={external ? "_blank" : undefined}
                                    rel={external ? "noreferrer" : undefined}
                                    aria-label={`${label}: ${value}`}
                                    initial={{ opacity: 0, x: -16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.06 }}
                                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group"
                                    style={{
                                        background: "#101010",
                                        border: "1px solid rgba(0,255,102,0.20)",
                                        textDecoration: "none",
                                    }}
                                    onMouseEnter={(e) => {
                                        const el = e.currentTarget as HTMLAnchorElement;
                                        el.style.borderColor = "rgba(0,255,102,0.55)";
                                        el.style.boxShadow   = "0 4px 20px rgba(0,0,0,0.4)";
                                    }}
                                    onMouseLeave={(e) => {
                                        const el = e.currentTarget as HTMLAnchorElement;
                                        el.style.borderColor = "rgba(0,255,102,0.20)";
                                        el.style.boxShadow   = "none";
                                    }}
                                >
                                    <div
                                        className="p-2.5 rounded-lg flex-shrink-0"
                                        style={{
                                            background: "rgba(0,255,102,0.08)",
                                            border: "1px solid rgba(0,255,102,0.18)",
                                            color: "#00FF66",
                                        }}
                                    >
                                        <Icon size={17} />
                                    </div>
                                    <div className="min-w-0">
                                        <div
                                            className="text-xs font-bold uppercase tracking-wider mb-0.5"
                                            style={{ color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                                        >
                                            {label}
                                        </div>
                                        <div
                                            className="text-sm font-medium truncate"
                                            style={{ color: "rgba(255,255,255,0.92)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                                        >
                                            {value}
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Location */}
                        <div
                            className="mt-3 flex items-center gap-4 p-4 rounded-xl"
                            style={{
                                background: "#101010",
                                border: "1px solid rgba(0,255,102,0.20)",
                            }}
                        >
                            <div
                                className="p-2.5 rounded-lg flex-shrink-0"
                                style={{
                                    background: "rgba(0,255,102,0.08)",
                                    border: "1px solid rgba(0,255,102,0.18)",
                                    color: "#00FF66",
                                }}
                            >
                                <MapPin size={17} />
                            </div>
                            <div>
                                <div
                                    className="text-xs font-bold uppercase tracking-wider mb-0.5"
                                    style={{ color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                                >
                                    Location
                                </div>
                                <div
                                    className="text-sm font-medium"
                                    style={{ color: "rgba(255,255,255,0.92)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                                >
                                    Erode, Tamil Nadu, India
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* ── Right: Contact Form ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div
                            style={{
                                background: "#101010",
                                border: "1px solid rgba(0,255,102,0.20)",
                                borderRadius: 16,
                                padding: "36px 32px",
                            }}
                        >
                            <h3
                                className="font-bold flex items-center gap-2 mb-7"
                                style={{
                                    fontSize: "1.05rem",
                                    color: "#00FF66",
                                    fontFamily: "var(--font-heading, 'Poppins', sans-serif)",
                                }}
                            >
                                <Send size={15} /> Send a Message
                            </h3>

                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" noValidate>
                                {/* Name */}
                                <div>
                                    <label
                                        htmlFor="contact-name"
                                        className="block text-xs font-bold uppercase tracking-wider mb-2"
                                        style={{ color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                                    >
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
                                        placeholder="Your Name"
                                        style={{
                                            ...inputStyle,
                                            caretColor: "#00FF66",
                                        }}
                                        onFocus={(e) => {
                                            (e.target as HTMLInputElement).style.borderColor  = "rgba(0,255,102,0.65)";
                                            (e.target as HTMLInputElement).style.boxShadow    = "0 0 0 3px rgba(0,255,102,0.10)";
                                        }}
                                        onBlur={(e) => {
                                            (e.target as HTMLInputElement).style.borderColor  = "rgba(0,255,102,0.22)";
                                            (e.target as HTMLInputElement).style.boxShadow    = "none";
                                        }}
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="contact-email"
                                        className="block text-xs font-bold uppercase tracking-wider mb-2"
                                        style={{ color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                                    >
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
                                        placeholder="yourmail@gmail.com"
                                        style={{
                                            ...inputStyle,
                                            caretColor: "#00FF66",
                                        }}
                                        onFocus={(e) => {
                                            (e.target as HTMLInputElement).style.borderColor  = "rgba(0,255,102,0.65)";
                                            (e.target as HTMLInputElement).style.boxShadow    = "0 0 0 3px rgba(0,255,102,0.10)";
                                        }}
                                        onBlur={(e) => {
                                            (e.target as HTMLInputElement).style.borderColor  = "rgba(0,255,102,0.22)";
                                            (e.target as HTMLInputElement).style.boxShadow    = "none";
                                        }}
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label
                                        htmlFor="contact-message"
                                        className="block text-xs font-bold uppercase tracking-wider mb-2"
                                        style={{ color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Hi Niranjan, I'd like to discuss..."
                                        style={{
                                            ...inputStyle,
                                            resize: "none",
                                            caretColor: "#00FF66",
                                        }}
                                        onFocus={(e) => {
                                            (e.target as HTMLTextAreaElement).style.borderColor = "rgba(0,255,102,0.65)";
                                            (e.target as HTMLTextAreaElement).style.boxShadow   = "0 0 0 3px rgba(0,255,102,0.10)";
                                        }}
                                        onBlur={(e) => {
                                            (e.target as HTMLTextAreaElement).style.borderColor = "rgba(0,255,102,0.22)";
                                            (e.target as HTMLTextAreaElement).style.boxShadow   = "none";
                                        }}
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full flex items-center justify-center gap-2 font-bold uppercase tracking-widest cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                                    style={{
                                        height: 60,
                                        background: "#00FF66",
                                        color: "#000000",
                                        fontSize: "0.85rem",
                                        borderRadius: 12,
                                        border: "none",
                                        boxShadow: "0 0 24px rgba(0,255,102,0.22)",
                                        fontFamily: "var(--font-sans, 'Inter', sans-serif)",
                                    }}
                                    onMouseEnter={(e) => {
                                        if (status !== "loading") {
                                            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 40px rgba(0,255,102,0.40)";
                                            (e.currentTarget as HTMLButtonElement).style.transform  = "scale(1.01)";
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 24px rgba(0,255,102,0.22)";
                                        (e.currentTarget as HTMLButtonElement).style.transform  = "scale(1)";
                                    }}
                                >
                                    {status === "loading"  && <Loader2 size={16} className="animate-spin" />}
                                    {status === "success"  && <CheckCircle size={16} />}
                                    {status === "error"    && <AlertCircle size={16} />}
                                    {status === "idle"     && <Send size={16} />}

                                    {status === "idle"     && "Send Message"}
                                    {status === "loading"  && "Sending..."}
                                    {status === "success"  && "Message Sent!"}
                                    {status === "error"    && "Failed — Try Again"}
                                </button>

                                {status === "success" && (
                                    <p className="text-center text-sm font-medium" style={{ color: "#00FF66" }}>
                                        ✓ Thanks! I&apos;ll get back to you within 24 hours.
                                    </p>
                                )}
                                {status === "error" && (
                                    <p className="text-center text-sm font-medium" style={{ color: "rgba(255, 100, 100, 0.90)" }}>
                                        Something went wrong. Email me at nickniranjan2929@gmail.com
                                    </p>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* Footer */}
                <div
                    className="mt-20 text-center pt-8"
                    style={{ borderTop: "1px solid rgba(0,255,102,0.10)" }}
                >
                    <p
                        className="text-sm font-medium"
                        style={{ color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-sans, 'Inter', sans-serif)" }}
                    >
                        © {new Date().getFullYear()} Niranjan Saravanakumar                     </p>
                </div>
            </div>
        </section>
    );
}
