"use client";

import { useEffect, useRef } from "react";

interface InteractiveBackgroundProps {
    opacity?: number;
}

export function InteractiveBackground({ opacity = 1 }: InteractiveBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let raf: number;
        let t = 0;

        interface Particle {
            x: number; y: number;
            vx: number; vy: number;
            size: number; alpha: number;
        }

        let particles: Particle[] = [];

        /* Large hex = fewer grid lines on screen */
        const HEX = 90;
        const HEX_H = HEX * Math.sqrt(3);

        const init = () => {
            canvas.width  = window.innerWidth;
            canvas.height = window.innerHeight;

            /* Very sparse — max 8 particles */
            const count = Math.min(Math.floor((canvas.width * canvas.height) / 100000), 8);
            particles = Array.from({ length: count }, () => ({
                x:     Math.random() * canvas.width,
                y:     Math.random() * canvas.height,
                vx:    (Math.random() - 0.5) * 0.04,
                vy:    (Math.random() - 0.5) * 0.04,
                size:  Math.random() * 1.0 + 0.4,
                alpha: Math.random() * 0.10 + 0.04,
            }));
        };

        const draw = () => {
            t += 0.002;

            /* 1. Pure black base */
            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            /* 2. Single soft ambient glow centred on right (behind portrait) — very subtle */
            const rx = canvas.width * 0.78;
            const ry = canvas.height * 0.42;
            const rGrad = ctx.createRadialGradient(rx, ry, 0, rx, ry, canvas.width * 0.28);
            rGrad.addColorStop(0, "rgba(0,255,102,0.045)");
            rGrad.addColorStop(0.5, "rgba(0,255,102,0.012)");
            rGrad.addColorStop(1, "rgba(0,0,0,0)");
            ctx.fillStyle = rGrad;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            /* 3. Hex grid — static opacity below 6%, no pulsing */
            ctx.lineWidth = 0.35;
            for (let row = -1; row < canvas.height / HEX_H + 2; row++) {
                for (let col = -1; col < canvas.width / (HEX * 1.5) + 2; col++) {
                    const hcx = col * HEX * 1.5;
                    const hcy = row * HEX_H + (col % 2 ? HEX_H / 2 : 0);

                    ctx.strokeStyle = "rgba(0,255,102,0.05)";
                    ctx.beginPath();
                    for (let i = 0; i < 6; i++) {
                        const a  = (Math.PI / 3) * i - Math.PI / 6;
                        const px = hcx + HEX * Math.cos(a);
                        const py = hcy + HEX * Math.sin(a);
                        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
                    }
                    ctx.closePath();
                    ctx.stroke();
                }
            }

            /* 4. Sparse drifting particles — halo only, no connection lines */
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0)               p.x = canvas.width;
                if (p.x > canvas.width)    p.x = 0;
                if (p.y < 0)               p.y = canvas.height;
                if (p.y > canvas.height)   p.y = 0;

                const g2 = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
                g2.addColorStop(0, `rgba(0,255,102,${p.alpha * 0.35})`);
                g2.addColorStop(1, "rgba(0,0,0,0)");
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
                ctx.fillStyle = g2;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0,255,102,${p.alpha})`;
                ctx.fill();
            });

            /* 5. Strong vignette — edges stay dark */
            const vig = ctx.createRadialGradient(
                canvas.width / 2, canvas.height / 2, canvas.height * 0.25,
                canvas.width / 2, canvas.height / 2, canvas.height * 0.85
            );
            vig.addColorStop(0, "rgba(0,0,0,0)");
            vig.addColorStop(1, "rgba(0,0,0,0.82)");
            ctx.fillStyle = vig;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            /* 6. Bottom fade into page */
            const bf = ctx.createLinearGradient(0, canvas.height - 100, 0, canvas.height);
            bf.addColorStop(0, "rgba(0,0,0,0)");
            bf.addColorStop(1, "rgba(0,0,0,1)");
            ctx.fillStyle = bf;
            ctx.fillRect(0, canvas.height - 100, canvas.width, 100);

            raf = requestAnimationFrame(draw);
        };

        window.addEventListener("resize", init);
        init();
        draw();

        return () => {
            window.removeEventListener("resize", init);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div className="absolute inset-0 z-0 pointer-events-none" style={{ opacity }}>
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
}
