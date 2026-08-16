"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <motion.button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light mode" : "Dark mode"}
            className="relative flex items-center justify-center rounded-xl transition-colors duration-200"
            style={{
                width: 38,
                height: 38,
                background: isDark ? "rgba(0,255,102,0.07)" : "rgba(0,180,80,0.10)",
                border: `1px solid ${isDark ? "rgba(0,255,102,0.22)" : "rgba(0,180,80,0.30)"}`,
            }}
            whileTap={{ scale: 0.88 }}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
            <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                    <motion.span
                        key="moon"
                        initial={{ rotate: -30, opacity: 0, scale: 0.7 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: 30, opacity: 0, scale: 0.7 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                        <Moon size={16} style={{ color: "#00FF66" }} strokeWidth={1.8} />
                    </motion.span>
                ) : (
                    <motion.span
                        key="sun"
                        initial={{ rotate: 30, opacity: 0, scale: 0.7 }}
                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                        exit={{ rotate: -30, opacity: 0, scale: 0.7 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                        <Sun size={16} style={{ color: "#00c853" }} strokeWidth={1.8} />
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.button>
    );
}
