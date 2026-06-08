"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrambleTextProps {
    text: string;
    className?: string;
    revealDelay?: number;
    scrambleSpeed?: number;
    hover?: boolean; // trigger on hover
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

export function ScrambleText({
    text,
    className,
    revealDelay = 0,
    scrambleSpeed = 30,
    hover = false,
}: ScrambleTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const [isHovering, setIsHovering] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const scramble = () => {
        let iteration = 0;

        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText((prev) =>
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                if (intervalRef.current) clearInterval(intervalRef.current);
            }

            iteration += 1 / 3; // Controls how fast it resolves. higher denominator = slower resolve
        }, scrambleSpeed);
    };

    useEffect(() => {
        if (!hover) {
            // If not hover mode, just run once on mount (with delay)
            const timeout = setTimeout(() => {
                scramble();
            }, revealDelay);
            return () => clearTimeout(timeout);
        }
    }, [text, hover, revealDelay]);

    const handleMouseEnter = () => {
        if (hover) {
            setIsHovering(true);
            scramble();
        }
    };

    return (
        <span
            className={cn("inline-block", className)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsHovering(false)}
        >
            {displayText}
        </span>
    );
}
