"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface TypewriterProps {
    text: string;
    speed?: number;
    className?: string;
    cursor?: boolean;
    onComplete?: () => void;
    startDelay?: number;
}

export function Typewriter({
    text,
    speed = 50,
    className,
    cursor = true,
    onComplete,
    startDelay = 0,
}: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStarted(true);
        }, startDelay);

        return () => clearTimeout(startTimeout);
    }, [startDelay]);

    const onCompleteRef = useRef(onComplete);

    useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
        if (!started) return;

        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text.charAt(index));
                index++;
            } else {
                clearInterval(interval);
                if (onCompleteRef.current) onCompleteRef.current();
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed, started]);

    return (
        <span className={className}>
            {displayedText}
            {cursor && (
                <span className={cn("inline-block w-[0.5em] h-[1.2em] bg-[var(--primary)] align-text-bottom ml-1 animate-pulse")} />
            )}
        </span>
    );
}
