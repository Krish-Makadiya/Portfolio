"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const MaskEffect = ({
    children,
    revealText,
    size = 10,
    revealSize = 600,
    className,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const containerRef = useRef(null);
    const updateMousePosition = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    useEffect(() => {
        containerRef.current.addEventListener("mousemove", updateMousePosition);
        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener(
                    "mousemove",
                    updateMousePosition
                );
            }
        };
    }, []);
    let maskSize = isHovered ? revealSize : size;

    return (
        <motion.div
            ref={containerRef}
            className={cn("relative h-screen", className)}
            animate={{
                backgroundColor: isHovered
                    ? "var(--slate-900)"
                    : "var(--white)",
            }}
            transition={{
                backgroundColor: { duration: 0.3 },
            }}>
            <motion.div
                className="absolute flex h-full w-full items-center justify-center text-6xl [mask-image:url(/mask.svg)] [mask-repeat:no-repeat] [mask-size:30px] bg-[#fff]"
                animate={{
                    maskPosition: `${mousePosition.x - maskSize / 2}px ${
                        mousePosition.y - maskSize / 2
                    }px`,
                    maskSize: `${maskSize}px`,
                }}
                transition={{
                    maskSize: { duration: 0.3, ease: "easeInOut" },
                    maskPosition: { duration: 0.15, ease: "linear" },
                }}>
                <div className="absolute inset-0 z-0 h-full w-full opacity-100 bg-[#fff]" />
                <div
                    onMouseEnter={() => {
                        setIsHovered(true);
                    }}
                    onMouseLeave={() => {
                        setIsHovered(false);
                    }}
                    className="relative z-20 mx-auto w-full md:px-40 md:text-[26px] px-3 text-[16px]">
                    {children}
                </div>
            </motion.div>
                {revealText}
        </motion.div>
    );
};
