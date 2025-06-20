"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const rotationValues = [
    -8, 5, -3, 7, -5, 4, -6, 8, -4, 6, -7, 3, -5, 4, -8, 5, -3, 7, -6, 4,
];

export default function AnimatedTestimonials({
    testimonials,
    autoplay = false,
}) {
    const [active, setActive] = useState(0);

    const handlePrev = () => {
        setActive(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    const isActive = (index) => {
        return index === active;
    };

    const handleNext = useCallback(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
    }, [testimonials.length]);

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay, handleNext]);

    const randomRotateY = (index) => {
        return rotationValues[index % rotationValues.length];
    };

    return (
        <div className="mx-auto max-w-sm px-4 py-10 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
            <div className="relative grid grid-cols-1 md:gap-20 gap-5 md:grid-cols-2">
                <div>
                    <div className="relative h-80 w-full">
                        <AnimatePresence>
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: -100,
                                        rotate: randomRotateY(index),
                                    }}
                                    animate={{
                                        opacity: isActive(index) ? 1 : 0.7,
                                        scale: isActive(index) ? 1 : 0.95,
                                        z: isActive(index) ? 0 : -100,
                                        rotate: isActive(index)
                                            ? 0
                                            : randomRotateY(index),
                                        zIndex: isActive(index)
                                            ? 40
                                            : testimonials.length + 2 - index,
                                        y: isActive(index) ? [0, -80, 0] : 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: 100,
                                        rotate: randomRotateY(index),
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 origin-bottom">
                                    <a
                                        href={testimonial.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full h-full">
                                        <Image
                                            src={testimonial.src}
                                            alt={testimonial.name}
                                            width={500}
                                            height={500}
                                            draggable={false}
                                            className="h-full w-full rounded-3xl object-cover object-center hover:opacity-90 transition-opacity duration-300"
                                        />
                                    </a>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="flex flex-col justify-between md:py-4 py-1">
                    <motion.div
                        key={active}
                        initial={{
                            y: 20,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        exit={{
                            y: -20,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}>
                        <h3 className="text-2xl font-semibold text-black dark:text-white">
                            {testimonials[active].name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-neutral-500">
                            {testimonials[active].designation}
                        </p>
                        <motion.p className="md:mt-8 mt-2 text-lg text-gray-500 dark:text-neutral-300">
                            {testimonials[active].quote
                                .split(" ")
                                .map((word, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{
                                            filter: "blur(10px)",
                                            opacity: 0,
                                            y: 5,
                                        }}
                                        animate={{
                                            filter: "blur(0px)",
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                            ease: "easeInOut",
                                            delay: 0.02 * index,
                                        }}
                                        className="inline-block">
                                        {word}&nbsp;
                                    </motion.span>
                                ))}
                        </motion.p>
                    </motion.div>
                    <div className="flex gap-4 md:pt-12 pt-5">
                        <button
                            onClick={handlePrev}
                            className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-[#affc41]">
                            <IconArrowLeft className="h-5 w-5  transition-transform duration-300 group-hover/button:-rotate-12 text-black" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-[#affc41]">
                            <IconArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/button:-rotate-12 text-black" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
