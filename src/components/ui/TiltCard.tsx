"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    glareEnabled?: boolean;
}

export function TiltCard({ children, className = "", glareEnabled = true }: TiltCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(mq.matches);
        const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || reducedMotion) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        // Calculate rotation (max 15 degrees)
        const rotateX = (mouseY / (rect.height / 2)) * -15;
        const rotateY = (mouseX / (rect.width / 2)) * 15;

        setTransform({ rotateX, rotateY });

        // Calculate glare position
        const glareX = ((e.clientX - rect.left) / rect.width) * 100;
        const glareY = ((e.clientY - rect.top) / rect.height) * 100;
        setGlarePosition({ x: glareX, y: glareY });
    };

    const handleMouseLeave = () => {
        setTransform({ rotateX: 0, rotateY: 0 });
        setIsHovered(false);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    return (
        <motion.div
            ref={cardRef}
            className={`relative ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            animate={{
                rotateX: reducedMotion ? 0 : transform.rotateX,
                rotateY: reducedMotion ? 0 : transform.rotateY,
                scale: (!reducedMotion && isHovered) ? 1.02 : 1,
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
        >


            {/* Card content */}
            <div>
                {children}
            </div>

        </motion.div>
    );
}
