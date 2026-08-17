"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import type { Theme } from "@/lib/themeColors";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
});

const STORAGE_KEY = "portfolio-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  } catch {
    return "dark";
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  /* Sync from DOM on mount (anti-FOUT script already set data-theme) */
  useEffect(() => {
    const domTheme = document.documentElement.dataset.theme as Theme | undefined;
    if (domTheme === "dark" || domTheme === "light") {
      setTheme(domTheme);
    } else {
      const initial = getInitialTheme();
      setTheme(initial);
      document.documentElement.dataset.theme = initial;
    }
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem(STORAGE_KEY, next); } catch {}
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: mounted ? theme : "dark", toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}
