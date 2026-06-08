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

        let animationFrameId: number;
        let time = 0;
        let mouse = { x: 0.5, y: 0.5 };

        // Neural network nodes
        interface Node {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            pulsePhase: number;
            connections: number[];
        }

        // Code rain drops
        interface CodeDrop {
            x: number;
            y: number;
            speed: number;
            length: number;
            chars: string[];
            opacity: number;
        }

        // Floating orbs
        interface Orb {
            x: number;
            y: number;
            size: number;
            phase: number;
            color: string;
            speedX: number;
            speedY: number;
        }

        let nodes: Node[] = [];
        let codeDrops: CodeDrop[] = [];
        let orbs: Orb[] = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initElements();
        };

        const initElements = () => {
            // Initialize neural network nodes
            nodes = [];
            const nodeCount = Math.min(Math.floor((canvas.width * canvas.height) / 40000), 25);
            for (let i = 0; i < nodeCount; i++) {
                nodes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    size: Math.random() * 3 + 2,
                    pulsePhase: Math.random() * Math.PI * 2,
                    connections: []
                });
            }

            // Initialize code rain
            codeDrops = [];
            const dropCount = Math.floor(canvas.width / 50);
            const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノ01";
            for (let i = 0; i < dropCount; i++) {
                const length = Math.floor(Math.random() * 15) + 5;
                codeDrops.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height - canvas.height,
                    speed: Math.random() * 2 + 1,
                    length,
                    chars: Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]),
                    opacity: Math.random() * 0.3 + 0.1
                });
            }

            // Initialize orbs
            orbs = [];
            const orbColors = ["#00ff41", "#00f0ff", "#ffb000"];
            for (let i = 0; i < 6; i++) {
                orbs.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 100 + 50,
                    phase: Math.random() * Math.PI * 2,
                    color: orbColors[i % 3],
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: (Math.random() - 0.5) * 0.5
                });
            }
        };

        // Noise function
        const noise = (x: number, y: number, t: number) => {
            return Math.sin(x * 0.01 + t) * Math.cos(y * 0.01 + t) * 0.5 +
                Math.sin(x * 0.02 - t * 0.5) * Math.cos(y * 0.015 + t * 0.7) * 0.3;
        };

        const animate = () => {
            if (!ctx) return;

            time += 0.008;

            // Clear with dark background
            ctx.fillStyle = "rgba(10, 10, 10, 1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // === LAYER 1: Gradient background ===
            const gradient = ctx.createRadialGradient(
                canvas.width * mouse.x,
                canvas.height * mouse.y,
                0,
                canvas.width * 0.5,
                canvas.height * 0.5,
                canvas.width * 0.8
            );
            gradient.addColorStop(0, "rgba(0, 30, 15, 0.8)");
            gradient.addColorStop(0.5, "rgba(5, 15, 20, 0.6)");
            gradient.addColorStop(1, "rgba(10, 10, 10, 0)");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // === LAYER 2: Flowing aurora waves ===
            for (let w = 0; w < 4; w++) {
                ctx.beginPath();
                const baseY = canvas.height * (0.25 + w * 0.18);
                const waveOffset = w * 0.5;

                ctx.moveTo(0, baseY);
                for (let x = 0; x <= canvas.width; x += 4) {
                    const noiseVal = noise(x, baseY, time + waveOffset);
                    const y = baseY + noiseVal * 60 + Math.sin(x * 0.008 + time + waveOffset) * 25;
                    ctx.lineTo(x, y);
                }
                ctx.lineTo(canvas.width, canvas.height);
                ctx.lineTo(0, canvas.height);
                ctx.closePath();

                const waveGradient = ctx.createLinearGradient(0, baseY - 80, 0, canvas.height);
                const colors = [
                    ["rgba(0, 255, 65, 0.04)", "rgba(0, 150, 40, 0)"],
                    ["rgba(0, 240, 255, 0.03)", "rgba(0, 100, 150, 0)"],
                    ["rgba(255, 176, 0, 0.025)", "rgba(150, 80, 0, 0)"],
                    ["rgba(0, 255, 65, 0.02)", "rgba(0, 100, 30, 0)"]
                ];
                waveGradient.addColorStop(0, colors[w][0]);
                waveGradient.addColorStop(1, colors[w][1]);
                ctx.fillStyle = waveGradient;
                ctx.fill();
            }

            // === LAYER 3: Glowing orbs ===
            orbs.forEach((orb, i) => {
                orb.x += orb.speedX + Math.sin(time + orb.phase) * 0.3;
                orb.y += orb.speedY + Math.cos(time + orb.phase) * 0.2;

                // Wrap around
                if (orb.x < -orb.size) orb.x = canvas.width + orb.size;
                if (orb.x > canvas.width + orb.size) orb.x = -orb.size;
                if (orb.y < -orb.size) orb.y = canvas.height + orb.size;
                if (orb.y > canvas.height + orb.size) orb.y = -orb.size;

                const pulse = Math.sin(time * 2 + orb.phase) * 0.3 + 0.7;
                const orbGradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.size * pulse);

                const alpha = 0.15 * pulse;
                if (orb.color === "#00ff41") {
                    orbGradient.addColorStop(0, `rgba(0, 255, 65, ${alpha})`);
                    orbGradient.addColorStop(0.5, `rgba(0, 150, 40, ${alpha * 0.3})`);
                } else if (orb.color === "#00f0ff") {
                    orbGradient.addColorStop(0, `rgba(0, 240, 255, ${alpha})`);
                    orbGradient.addColorStop(0.5, `rgba(0, 120, 180, ${alpha * 0.3})`);
                } else {
                    orbGradient.addColorStop(0, `rgba(255, 176, 0, ${alpha * 0.8})`);
                    orbGradient.addColorStop(0.5, `rgba(180, 100, 0, ${alpha * 0.2})`);
                }
                orbGradient.addColorStop(1, "rgba(0, 0, 0, 0)");

                ctx.beginPath();
                ctx.arc(orb.x, orb.y, orb.size * pulse, 0, Math.PI * 2);
                ctx.fillStyle = orbGradient;
                ctx.fill();
            });

            // === LAYER 4: Code rain ===
            ctx.font = "14px monospace";
            codeDrops.forEach((drop) => {
                drop.y += drop.speed;
                if (drop.y > canvas.height + drop.length * 20) {
                    drop.y = -drop.length * 20;
                    drop.x = Math.random() * canvas.width;
                }

                drop.chars.forEach((char, i) => {
                    const charY = drop.y + i * 18;
                    if (charY > 0 && charY < canvas.height) {
                        const fadeRatio = i / drop.length;
                        const alpha = drop.opacity * (1 - fadeRatio * 0.8);

                        if (i === 0) {
                            ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 1.5})`;
                        } else {
                            ctx.fillStyle = `rgba(0, 255, 65, ${alpha})`;
                        }
                        ctx.fillText(char, drop.x, charY);
                    }
                });

                // Randomly change characters
                if (Math.random() < 0.02) {
                    const idx = Math.floor(Math.random() * drop.chars.length);
                    const chars = "アイウエオカキクケコ01";
                    drop.chars[idx] = chars[Math.floor(Math.random() * chars.length)];
                }
            });

            // === LAYER 5: Neural network ===
            // Update nodes
            nodes.forEach((node) => {
                node.x += node.vx;
                node.y += node.vy;

                // Mouse attraction
                const dx = mouse.x * canvas.width - node.x;
                const dy = mouse.y * canvas.height - node.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 200) {
                    node.x += dx * 0.001;
                    node.y += dy * 0.001;
                }

                // Bounce
                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

                node.pulsePhase += 0.05;
            });

            // Draw connections
            const maxDist = 180;
            ctx.lineWidth = 1;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDist) {
                        const alpha = (1 - dist / maxDist) * 0.4;
                        const pulse = Math.sin(time * 3 + i + j) * 0.3 + 0.7;

                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 240, 255, ${alpha * pulse})`;
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();

                        // Data pulse traveling along connection
                        if (Math.sin(time * 5 + i * j) > 0.8) {
                            const t = (Math.sin(time * 4 + i) + 1) / 2;
                            const px = nodes[i].x + (nodes[j].x - nodes[i].x) * t;
                            const py = nodes[i].y + (nodes[j].y - nodes[i].y) * t;

                            ctx.beginPath();
                            ctx.arc(px, py, 2, 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(0, 255, 65, ${alpha * 2})`;
                            ctx.fill();
                        }
                    }
                }
            }

            // Draw nodes
            nodes.forEach((node) => {
                const pulse = Math.sin(node.pulsePhase) * 0.4 + 1;
                const size = node.size * pulse;

                // Glow
                const glowGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, size * 4);
                glowGradient.addColorStop(0, "rgba(0, 255, 65, 0.3)");
                glowGradient.addColorStop(0.5, "rgba(0, 240, 255, 0.1)");
                glowGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
                ctx.beginPath();
                ctx.arc(node.x, node.y, size * 4, 0, Math.PI * 2);
                ctx.fillStyle = glowGradient;
                ctx.fill();

                // Core
                ctx.beginPath();
                ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(0, 255, 65, 0.8)";
                ctx.fill();

                // Inner highlight
                ctx.beginPath();
                ctx.arc(node.x - size * 0.2, node.y - size * 0.2, size * 0.4, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
                ctx.fill();
            });

            // === LAYER 6: Hexagonal grid (subtle) ===
            ctx.strokeStyle = "rgba(0, 255, 65, 0.015)";
            ctx.lineWidth = 1;
            const hexSize = 40;
            const hexHeight = hexSize * Math.sqrt(3);

            for (let row = -1; row < canvas.height / hexHeight + 1; row++) {
                for (let col = -1; col < canvas.width / (hexSize * 1.5) + 1; col++) {
                    const x = col * hexSize * 1.5;
                    const y = row * hexHeight + (col % 2 ? hexHeight / 2 : 0);

                    ctx.beginPath();
                    for (let i = 0; i < 6; i++) {
                        const angle = (Math.PI / 3) * i;
                        const hx = x + hexSize * Math.cos(angle);
                        const hy = y + hexSize * Math.sin(angle);
                        if (i === 0) ctx.moveTo(hx, hy);
                        else ctx.lineTo(hx, hy);
                    }
                    ctx.closePath();
                    ctx.stroke();
                }
            }

            // === LAYER 7: Vignette ===
            const vignette = ctx.createRadialGradient(
                canvas.width / 2, canvas.height / 2, canvas.height * 0.25,
                canvas.width / 2, canvas.height / 2, canvas.height * 0.9
            );
            vignette.addColorStop(0, "rgba(10, 10, 10, 0)");
            vignette.addColorStop(1, "rgba(10, 10, 10, 0.8)"); // Match #0a0a0a
            ctx.fillStyle = vignette;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // === LAYER 8: Bottom Fade to Seamlessly Connect ===
            const bottomFade = ctx.createLinearGradient(0, canvas.height - 100, 0, canvas.height);
            bottomFade.addColorStop(0, "rgba(10, 10, 10, 0)");
            bottomFade.addColorStop(1, "rgba(10, 10, 10, 1)"); // Solid #0a0a0a at bottom
            ctx.fillStyle = bottomFade;
            ctx.fillRect(0, canvas.height - 100, canvas.width, 100);

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX / window.innerWidth;
            mouse.y = e.clientY / window.innerHeight;
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);

        resize();
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div
            className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000"
            style={{ opacity }}
        >
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
}
