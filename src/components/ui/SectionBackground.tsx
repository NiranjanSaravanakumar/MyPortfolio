"use client";

interface SectionBackgroundProps {
    variant?: "primary" | "accent" | "secondary";
    intensity?: "low" | "medium" | "high";
}

/**
 * Static ambient background — no animations, no movement.
 * Just subtle radial gradients to give sections a faint emerald atmosphere.
 */
export function SectionBackground({
    variant = "primary",
    intensity = "low",
}: SectionBackgroundProps) {
    const opacities = {
        low:    { a: 0.022, b: 0.012 },
        medium: { a: 0.030, b: 0.016 },
        high:   { a: 0.040, b: 0.020 },
    };
    const { a, b } = opacities[intensity];

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
                    background: `radial-gradient(ellipse, rgba(0,255,102,${a}) 0%, transparent 70%)`,
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
                    background: `radial-gradient(ellipse, rgba(0,255,102,${b}) 0%, transparent 70%)`,
                    filter: "blur(80px)",
                }}
            />
        </div>
    );
}
