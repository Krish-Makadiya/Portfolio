"use client";
import AnimatedTestimonials from "./AnimatedTestimonials";

export default function AnimatedTestimonialsHelper() {
    const testimonials = [
        {
            quote: "As a fresher engineer, I explore vibe coding’s impact on workflows, skills, and development.",
            name: "Vibe Coding",
            designation: "March 2025",
            src: "/Blogs/VibeCoding.jpg",
        },
        {
            quote: "AI boosts productivity but risks skill erosion, overreliance, and quality issues if not managed wisely.",
            name: "How AI can affect Developers?",
            designation: "March 2025",
            src: "/Blogs/AI.jpg",
        },
        {
            quote: "Learn to efficiently integrate a backend with Next.js, managing connections in serverless environments.",
            name: "Connecting Backend to Next.js Apps",
            designation: "March 2025",
            src: "/Blogs/NextJS.png",
        },
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}
