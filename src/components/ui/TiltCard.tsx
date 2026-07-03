"use client";

import { useRef } from "react";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
}

/**
 * Formerly a 3D tilt card — now a clean static wrapper.
 * Only hover border glow via CSS; no JS transforms or perspective tricks.
 */
export function TiltCard({ children, className = "" }: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const onMouseEnter = () => {
        if (!ref.current) return;
        ref.current.style.borderColor = "rgba(0,255,102,0.55)";
        ref.current.style.boxShadow   = "0 0 0 1px rgba(0,255,102,0.55), 0 8px 40px rgba(0,0,0,0.6)";
    };
    const onMouseLeave = () => {
        if (!ref.current) return;
        ref.current.style.borderColor = "rgba(0,255,102,0.20)";
        ref.current.style.boxShadow   = "none";
    };

    return (
        <div
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={className}
            style={{
                border: "1px solid rgba(0,255,102,0.20)",
                borderRadius: 12,
                transition: "border-color 0.22s ease, box-shadow 0.22s ease",
                overflow: "hidden",
            }}
        >
            {children}
        </div>
    );
}
