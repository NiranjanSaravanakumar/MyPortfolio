"use client";

interface SectionBackgroundProps {
    variant?: "primary" | "accent" | "secondary";
    intensity?: "low" | "medium" | "high";
}

/**
 * Static ambient background — no animations, no movement.
 * Uses CSS variable --primary so glows adapt automatically to light/dark theme.
 */
export function SectionBackground({
    variant = "primary",
    intensity = "low",
}: SectionBackgroundProps) {
    const opacities = {
        low:    { a: 0.06, b: 0.04 },
        medium: { a: 0.09, b: 0.06 },
        high:   { a: 0.12, b: 0.08 },
    };
    const { a, b } = opacities[intensity];

    // Use currentColor trick: inline SVG-style color via CSS var
    // We build colours by embedding the primary channel values dynamically.
    // For broad compat, we simply use the CSS custom property in a way that
    // works with rgba() — using color-mix when supported, with a fallback.
    // Simplest safe approach: use hex-based CSS vars split into r,g,b channels.
    // Since we can't do rgba(var(--primary), 0.05) in all browsers, we use
    // separate --primary-r/g/b channel vars for the glow divs.

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {/* Top-left ambient */}
            <div
                style={{
                    position: "absolute",
                    top: "-10%",
                    left: "-5%",
                    width: "55%",
                    height: "70%",
                    background: `radial-gradient(ellipse, color-mix(in srgb, var(--primary) ${Math.round(a * 100)}%, transparent) 0%, transparent 70%)`,
                    filter: "blur(60px)",
                }}
            />
            {/* Bottom-right ambient */}
            <div
                style={{
                    position: "absolute",
                    bottom: "-10%",
                    right: "-5%",
                    width: "50%",
                    height: "65%",
                    background: `radial-gradient(ellipse, color-mix(in srgb, var(--primary) ${Math.round(b * 100)}%, transparent) 0%, transparent 70%)`,
                    filter: "blur(80px)",
                }}
            />
        </div>
    );
}
