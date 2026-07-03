"use client";

interface SectionBackgroundProps {
    variant?: "primary" | "secondary" | "accent";
    intensity?: "low" | "medium" | "high";
}

const variantColors: Record<string, string> = {
    primary: "0, 255, 65",
    secondary: "255, 176, 0",
    accent: "0, 240, 255",
};

const intensityAlpha: Record<string, number> = {
    low: 0.06,
    medium: 0.10,
    high: 0.16,
};

export function SectionBackground({ variant = "primary", intensity = "medium" }: SectionBackgroundProps) {
    const rgb = variantColors[variant] ?? variantColors.primary;
    const alpha = intensityAlpha[intensity] ?? 0.10;

    return (
        <div
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
        >
            {/* Glow 1 — top-left, static */}
            <div
                className="absolute rounded-full"
                style={{
                    width: "420px",
                    height: "420px",
                    top: "-80px",
                    left: "-60px",
                    background: `radial-gradient(circle, rgba(${rgb}, ${alpha}) 0%, rgba(${rgb}, 0) 70%)`,
                }}
            />
            {/* Glow 2 — bottom-right, static */}
            <div
                className="absolute rounded-full"
                style={{
                    width: "360px",
                    height: "360px",
                    bottom: "-80px",
                    right: "-60px",
                    background: `radial-gradient(circle, rgba(${rgb}, ${alpha * 0.7}) 0%, rgba(${rgb}, 0) 70%)`,
                }}
            />
            {/* Glow 3 — center, very subtle, static */}
            <div
                className="absolute rounded-full"
                style={{
                    width: "280px",
                    height: "280px",
                    top: "40%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background: `radial-gradient(circle, rgba(${rgb}, ${alpha * 0.4}) 0%, rgba(${rgb}, 0) 70%)`,
                }}
            />
        </div>
    );
}
