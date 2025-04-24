"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import PixelTransitionHelper from "../PixelTransition/PixelTransitionHelper";

export const HoverEffect = ({ items, className }) => {
    let [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className={cn("grid  lg:grid-cols-8 md:grid-cols-5 grid-cols-4 md:gap-[50px] gap-[6px]", className)}>
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className="relative group block p-3 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}>
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-[#adb5bd]/[0.2] block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <PixelTransitionHelper image={item.image} text={item.title}/>
                </div>
            ))}
        </div>
    );
};
