"use client";

import { useEffect, useRef } from "react";

interface SectionBackgroundProps {
    variant?: "primary" | "secondary" | "accent";
    intensity?: "low" | "medium" | "high";
}

export function SectionBackground({ variant = "primary", intensity = "medium" }: SectionBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let time = 0;

        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.offsetWidth;
                canvas.height = parent.offsetHeight;
            }
        };

        const colors = {
            primary: { main: "0, 255, 65", secondary: "0, 200, 50" },
            secondary: { main: "255, 176, 0", secondary: "200, 140, 0" },
            accent: { main: "0, 240, 255", secondary: "0, 180, 220" }
        };

        const color = colors[variant];
        const alphaMultiplier = intensity === "low" ? 0.5 : intensity === "high" ? 1.5 : 1;

        const animate = () => {
            if (!ctx || !canvas.width || !canvas.height) {
                animationFrameId = requestAnimationFrame(animate);
                return;
            }

            time += 0.005;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Floating orbs
            for (let i = 0; i < 3; i++) {
                const x = canvas.width * (0.2 + i * 0.3 + Math.sin(time + i * 2) * 0.1);
                const y = canvas.height * (0.3 + Math.cos(time * 0.7 + i * 1.5) * 0.2);
                const size = 150 + Math.sin(time + i) * 30;
                const alpha = (0.08 + Math.sin(time + i) * 0.03) * alphaMultiplier;

                const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
                gradient.addColorStop(0, `rgba(${color.main}, ${alpha})`);
                gradient.addColorStop(0.5, `rgba(${color.secondary}, ${alpha * 0.3})`);
                gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            }

            // Subtle flowing lines
            ctx.strokeStyle = `rgba(${color.main}, ${0.03 * alphaMultiplier})`;
            ctx.lineWidth = 1;

            for (let i = 0; i < 5; i++) {
                ctx.beginPath();
                const startY = canvas.height * (0.2 + i * 0.15);
                ctx.moveTo(0, startY);

                for (let x = 0; x < canvas.width; x += 5) {
                    const y = startY + Math.sin(x * 0.01 + time + i) * 20 + Math.cos(x * 0.005 + time * 0.5) * 15;
                    ctx.lineTo(x, y);
                }
                ctx.stroke();
            }

            // Floating particles
            for (let i = 0; i < 15; i++) {
                const x = (Math.sin(time * 0.3 + i * 1.7) * 0.4 + 0.5) * canvas.width;
                const y = (Math.cos(time * 0.2 + i * 2.1) * 0.35 + 0.5) * canvas.height;
                const size = 1 + Math.sin(time + i) * 0.5;
                const alpha = (0.3 + Math.sin(time * 0.8 + i) * 0.2) * alphaMultiplier;

                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${color.main}, ${alpha})`;
                ctx.fill();

                // Glow
                const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, size * 6);
                glowGradient.addColorStop(0, `rgba(${color.main}, ${alpha * 0.3})`);
                glowGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
                ctx.beginPath();
                ctx.arc(x, y, size * 6, 0, Math.PI * 2);
                ctx.fillStyle = glowGradient;
                ctx.fill();
                ctx.fill();
            }

            // === Smooth transition to next section ===
            const bottomFade = ctx.createLinearGradient(0, canvas.height - 100, 0, canvas.height);
            bottomFade.addColorStop(0, "rgba(10, 10, 10, 0)");
            bottomFade.addColorStop(1, "rgba(10, 10, 10, 1)"); // Fade to #0a0a0a
            ctx.fillStyle = bottomFade;
            ctx.fillRect(0, canvas.height - 100, canvas.width, 100);

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener("resize", resize);
        resize();
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [variant, intensity]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.8 }}
        />
    );
}
