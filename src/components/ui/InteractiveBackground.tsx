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

        /* Hex grid size — larger hex = fewer lines on screen */
        const HEX = 72;
        const HEX_H = HEX * Math.sqrt(3);

        const init = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            /* Very low particle density — max 18 */
            const count = Math.min(Math.floor((canvas.width * canvas.height) / 60000), 18);
            particles = Array.from({ length: count }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                /* Significantly slowed movement */
                vx: (Math.random() - 0.5) * 0.06,
                vy: (Math.random() - 0.5) * 0.06,
                size: Math.random() * 1.2 + 0.5,
                alpha: Math.random() * 0.18 + 0.06,
            }));
        };

        const draw = () => {
            t += 0.003; /* Slow global tick */

            /* ── 1. Deep black base ── */
            ctx.fillStyle = "#050505";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            /* ── 2. Left ambient glow (behind text) — very soft ── */
            const lx = canvas.width * 0.22;
            const ly = canvas.height * 0.5;
            const lGrad = ctx.createRadialGradient(lx, ly, 0, lx, ly, canvas.width * 0.42);
            lGrad.addColorStop(0, "rgba(0,200,83,0.045)");
            lGrad.addColorStop(0.5, "rgba(0,200,83,0.012)");
            lGrad.addColorStop(1, "rgba(5,5,5,0)");
            ctx.fillStyle = lGrad;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            /* ── 3. Right radial glow — centred behind portrait ── */
            const rx = canvas.width * 0.76;
            const ry = canvas.height * 0.44;
            const rGrad = ctx.createRadialGradient(rx, ry, 0, rx, ry, canvas.width * 0.32);
            rGrad.addColorStop(0, "rgba(0,200,83,0.07)");
            rGrad.addColorStop(0.4, "rgba(0,200,83,0.028)");
            rGrad.addColorStop(1, "rgba(5,5,5,0)");
            ctx.fillStyle = rGrad;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            /* ── 4. Hexagonal grid — 8–12 % opacity, no bright lines ── */
            ctx.lineWidth = 0.4;
            for (let row = -1; row < canvas.height / HEX_H + 2; row++) {
                for (let col = -1; col < canvas.width / (HEX * 1.5) + 2; col++) {
                    const hcx = col * HEX * 1.5;
                    const hcy = row * HEX_H + (col % 2 ? HEX_H / 2 : 0);

                    /* Very gentle sine variation — no mouse-driven brightness spikes */
                    const alpha = 0.07 + Math.sin(t * 0.6 + col * 0.25 + row * 0.35) * 0.018;
                    ctx.strokeStyle = `rgba(0,200,83,${alpha})`;
                    ctx.beginPath();
                    for (let i = 0; i < 6; i++) {
                        const a = (Math.PI / 3) * i - Math.PI / 6;
                        const px = hcx + HEX * Math.cos(a);
                        const py = hcy + HEX * Math.sin(a);
                        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
                    }
                    ctx.closePath();
                    ctx.stroke();
                }
            }

            /* ── 5. Slow-drifting particles — no connection lines ── */
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                const a = p.alpha;
                /* Soft halo only */
                const g2 = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 5);
                g2.addColorStop(0, `rgba(0,200,83,${a * 0.45})`);
                g2.addColorStop(1, "rgba(0,0,0,0)");
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 5, 0, Math.PI * 2);
                ctx.fillStyle = g2;
                ctx.fill();

                /* Crisp core dot */
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0,200,83,${a})`;
                ctx.fill();
            });

            /* ── 6. Strong vignette so edges fade cleanly ── */
            const vig = ctx.createRadialGradient(
                canvas.width / 2, canvas.height / 2, canvas.height * 0.22,
                canvas.width / 2, canvas.height / 2, canvas.height * 0.88
            );
            vig.addColorStop(0, "rgba(5,5,5,0)");
            vig.addColorStop(1, "rgba(5,5,5,0.78)");
            ctx.fillStyle = vig;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            /* ── 7. Bottom fade into page ── */
            const bf = ctx.createLinearGradient(0, canvas.height - 120, 0, canvas.height);
            bf.addColorStop(0, "rgba(5,5,5,0)");
            bf.addColorStop(1, "rgba(5,5,5,1)");
            ctx.fillStyle = bf;
            ctx.fillRect(0, canvas.height - 120, canvas.width, 120);

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
