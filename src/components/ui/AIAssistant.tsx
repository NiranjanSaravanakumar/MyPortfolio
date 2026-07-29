"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send, Sparkles, Terminal } from "lucide-react";

interface Message {
    id: number;
    text: string;
    isBot: boolean;
    isTyping?: boolean;
}

const botResponses: { [key: string]: string[] } = {
    greeting: [
        "Hello! I'm here to help you explore this portfolio. What would you like to know?",
        "Welcome to the neural network! I'm here to guide you through Krisvanth's work. What would you like to know?",
        "Greetings! Ready to dive into some cool AI/ML projects?",
    ],
    skills: [
        "Krisvanth specializes in Machine Learning, Deep Learning, Computer Vision, and Generative AI. He's particularly skilled with LangChain, PyTorch, and building LLM pipelines!",
        "His core stack includes Python, TensorFlow/PyTorch, LangChain, FastAPI, and various vector databases like Qdrant. He's a full-stack AI engineer!",
    ],
    experience: [
        "Currently, Krisvanth works as an Associate Software Engineer at ABB Global Industries and Services Private Limited Ltd., where he's building LLMOps pipelines and SQL generation systems using custom LLMs!",
        "He has experience at multiple companies including ABB Global Industries and Services Private Limited, Goldstone Technologies, TensorGo, and ResearchBrains - all focused on AI/ML and Computer Vision.",
    ],
    projects: [
        "Check out his projects section! Highlights include Txt2Img Generation, DocQueryBot (RAG system), and an Impersonation Detection system for exam centers.",
        "My favorite is the DocQueryBot - it uses RAG to answer questions from custom knowledge bases. Very meta, right? 😄",
    ],
    contact: [
        "You can reach Krisvanth at krishprasath10@gmail.com or call +91 9842158542. He's also active on LinkedIn and GitHub!",
        "The best way to reach him is through the contact form below or via LinkedIn. He typically responds within 24 hours!",
    ],
    publications: [
        "Krisvanth has published research on Deep Learning-based Instance Segmentation, Road Infrastructure Maintenance with YOLOv8, and Text-to-Image Generation!",
        "He also has patents filed for Multi-Agent Asset-to-Telemetry Tag Mapping and Self-Reasoning SQL Generation. Pretty impressive, right?",
    ],
    fun: [
        "Fun fact: This entire portfolio is themed like a cyberpunk operating system! Pretty cool, huh? 🤖",
        "Did you know? Krisvanth won the 'Overall Best Outgoing Student' award from his college!",
        "I'm actually running on... just kidding, I'm pre-programmed responses. But imagine if I was a real LLM! 🧠",
    ],
    default: [
        "Interesting question! I'm a simple bot, so I might not understand everything. Try asking about skills, projects, experience, or publications!",
        "Hmm, I'm not sure about that. Ask me about Krisvanth's work, skills, or how to contact him!",
        "That's beyond my neural network! Try: 'What are his skills?' or 'Tell me about his projects'",
    ],
};

const quickActions = [
    { label: "Skills", query: "skills" },
    { label: "Projects", query: "projects" },
    { label: "Experience", query: "experience" },
    { label: "Contact", query: "contact" },
];

function getResponse(input: string): string {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
        return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)];
    }
    if (lowerInput.includes("skill") || lowerInput.includes("tech") || lowerInput.includes("stack") || lowerInput.includes("know")) {
        return botResponses.skills[Math.floor(Math.random() * botResponses.skills.length)];
    }
    if (lowerInput.includes("experience") || lowerInput.includes("work") || lowerInput.includes("job") || lowerInput.includes("company")) {
        return botResponses.experience[Math.floor(Math.random() * botResponses.experience.length)];
    }
    if (lowerInput.includes("project") || lowerInput.includes("build") || lowerInput.includes("made") || lowerInput.includes("create")) {
        return botResponses.projects[Math.floor(Math.random() * botResponses.projects.length)];
    }
    if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("reach") || lowerInput.includes("call")) {
        return botResponses.contact[Math.floor(Math.random() * botResponses.contact.length)];
    }
    if (lowerInput.includes("publication") || lowerInput.includes("paper") || lowerInput.includes("research") || lowerInput.includes("patent")) {
        return botResponses.publications[Math.floor(Math.random() * botResponses.publications.length)];
    }
    if (lowerInput.includes("fun") || lowerInput.includes("fact") || lowerInput.includes("interesting") || lowerInput.includes("cool")) {
        return botResponses.fun[Math.floor(Math.random() * botResponses.fun.length)];
    }

    return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
}

export function AIAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            // Initial greeting
            setTimeout(() => {
                setMessages([{
                    id: 1,
                    text: "Hey there! 👋 I'm your guide to this portfolio. Ask me anything about skills, projects, or experience!",
                    isBot: true,
                }]);
            }, 500);
        }
    }, [isOpen, messages.length]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
        }
    }, [isOpen]);

    const handleSend = (query?: string) => {
        const messageText = query || input.trim();
        if (!messageText) return;

        const userMessage: Message = {
            id: Date.now(),
            text: messageText,
            isBot: false,
        };

        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        // Simulate typing delay
        setTimeout(() => {
            const response = getResponse(messageText);
            const botMessage: Message = {
                id: Date.now() + 1,
                text: response,
                isBot: true,
            };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 800 + Math.random() * 700);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Floating Button */}
            <motion.button
                className="fixed bottom-6 right-6 z-50 p-4 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] text-black rounded-full shadow-lg shadow-[var(--primary)]/30 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                    boxShadow: isOpen
                        ? "0 0 20px rgba(0, 255, 65, 0.5)"
                        : ["0 0 20px rgba(0, 255, 65, 0.3)", "0 0 40px rgba(0, 255, 65, 0.5)", "0 0 20px rgba(0, 255, 65, 0.3)"],
                }}
                transition={{
                    boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X size={24} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="bot"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                        >
                            <Bot size={24} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed bottom-24 right-6 z-50 w-[350px] md:w-[400px] bg-[#0a0a0a] border border-[var(--border)] rounded-lg shadow-2xl shadow-black/50 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[var(--primary)]/20 to-[var(--accent)]/20 border-b border-[var(--border)] p-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-[var(--primary)]/20 rounded-lg">
                                    <Sparkles className="text-[var(--primary)]" size={20} />
                                </div>
                                <div>
                                    <h3 className="font-mono font-bold text-[var(--foreground)]">AI Assistant</h3>
                                    <p className="text-xs text-[var(--foreground)]/50 flex items-center gap-1">
                                        <span className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse" />
                                        Online • Ask me anything
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="h-[300px] overflow-y-auto p-4 space-y-4 scrollbar-thin">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.isBot
                                            ? "bg-[var(--muted)] text-[var(--foreground)] rounded-tl-none"
                                            : "bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-black rounded-tr-none"
                                            }`}
                                    >
                                        {msg.isBot && (
                                            <Terminal size={12} className="inline mr-1 opacity-50" />
                                        )}
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-[var(--muted)] p-3 rounded-lg rounded-tl-none">
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 bg-[var(--primary)] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                            <span className="w-2 h-2 bg-[var(--primary)] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                            <span className="w-2 h-2 bg-[var(--primary)] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Actions */}
                        <div className="px-4 py-2 border-t border-[var(--border)] flex gap-2 overflow-x-auto">
                            {quickActions.map((action) => (
                                <button
                                    key={action.label}
                                    onClick={() => handleSend(action.query)}
                                    className="px-3 py-1 text-xs font-mono bg-[var(--muted)] text-[var(--foreground)] rounded-full hover:bg-[var(--primary)] hover:text-black transition-colors whitespace-nowrap cursor-pointer"
                                >
                                    {action.label}
                                </button>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-[var(--border)] bg-[#050505]">
                            <div className="flex gap-2">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                    placeholder="Ask me anything..."
                                    className="flex-1 px-4 py-2 bg-[var(--muted)] border border-[var(--border)] text-[var(--foreground)] text-sm rounded-lg focus:outline-none focus:border-[var(--primary)] transition-colors placeholder:text-[var(--foreground)]/30"
                                />
                                <button
                                    onClick={() => handleSend()}
                                    disabled={!input.trim()}
                                    className="p-2 bg-[var(--primary)] text-black rounded-lg hover:bg-[var(--accent)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
