/**
 * Shared theme-aware colour map.
 * Used by components that cannot express colours purely through CSS variables
 * (e.g. inline framer-motion style props, canvas draw calls, JS event handlers).
 */

export type Theme = "dark" | "light";

export interface ThemeColors {
  // Backgrounds
  background:    string;
  surface1:      string;
  surface2:      string;

  // Text
  textHeading:   string;
  textBody:      string;
  textDesc:      string;
  textLabel:     string;
  textNav:       string;
  textDim:       string;

  // Accent / primary
  primary:       string;
  primarySoft:   string;   // e.g. rgba(0,255,102,0.08)

  // Borders
  border:        string;
  borderHover:   string;

  // Card surfaces
  cardBg:        string;
  cardBgHover:   string;

  // Nav specific
  navBg:         string;       // scrolled navbar backdrop
  navBgMobile:   string;       // mobile menu backdrop
  navBorder:     string;

  // Canvas (InteractiveBackground)
  canvasBg:      string;
  canvasGlow:    string;
  canvasGrid:    string;
  canvasVignette: string;

  // Misc
  shimmer:       string;
}

export const themeColors: Record<Theme, ThemeColors> = {
  dark: {
    background:    "#000000",
    surface1:      "#101010",
    surface2:      "#080808",

    textHeading:   "#ffffff",
    textBody:      "#ffffff",
    textDesc:      "#ffffff",
    textLabel:     "#ffffff",
    textNav:       "#ffffff",
    textDim:       "#ffffff",

    primary:       "#00FF66",
    primarySoft:   "rgba(0,255,102,0.08)",

    border:        "rgba(0,255,102,0.20)",
    borderHover:   "rgba(0,255,102,0.55)",

    cardBg:        "#101010",
    cardBgHover:   "#161616",

    navBg:         "rgba(0,0,0,0.88)",
    navBgMobile:   "rgba(0,0,0,0.97)",
    navBorder:     "rgba(0,255,102,0.12)",

    canvasBg:      "#000000",
    canvasGlow:    "rgba(0,255,102,0.045)",
    canvasGrid:    "rgba(0,255,102,0.05)",
    canvasVignette: "rgba(0,0,0,0.82)",

    shimmer:       "rgba(255,255,255,0.30)",
  },

  light: {
    background:    "#f5f5f0",
    surface1:      "#ffffff",
    surface2:      "#eef0ed",

    textHeading:   "#0a0a0a",
    textBody:      "#1a1a1a",
    textDesc:      "#222222",
    textLabel:     "#333333",
    textNav:       "#0d0d0d",
    textDim:       "#444444",

    primary:       "#00c853",
    primarySoft:   "rgba(0,180,80,0.08)",

    border:        "rgba(0,180,80,0.25)",
    borderHover:   "rgba(0,180,80,0.60)",

    cardBg:        "#ffffff",
    cardBgHover:   "#f7f9f7",

    navBg:         "rgba(245,245,240,0.92)",
    navBgMobile:   "rgba(245,245,240,0.98)",
    navBorder:     "rgba(0,180,80,0.15)",

    canvasBg:      "#f5f5f0",
    canvasGlow:    "rgba(0,180,80,0.06)",
    canvasGrid:    "rgba(0,180,80,0.07)",
    canvasVignette: "rgba(245,245,240,0.70)",

    shimmer:       "rgba(0,0,0,0.12)",
  },
};
