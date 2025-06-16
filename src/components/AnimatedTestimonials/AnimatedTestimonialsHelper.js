"use client";
import AnimatedTestimonials from "./AnimatedTestimonials";

export default function AnimatedTestimonialsHelper() {
    const testimonials = [
        {
            quote: "The Future of Automation: What Will Vanish, What Will Survive, and How to Protect Your Career for the Future.",
            name: "The Future and Present of Automation",
            designation: "June 2025",
            src: "/Blogs/Automation.jpeg",
            link: "https://medium.com/@krishmakadiya2005/the-future-and-present-of-automation-2609b8106f6e",
        },
        {
            quote: "Firebase: Google’s speed vs. Appwrite’s open-source control—your backend choice depends!",
            name: "Firebase vs. Appwrite: Which Backend Should You Choose?",
            designation: "April 2025",
            src: "/Blogs/Firebase_vs_Appwrite.png",
            link: "https://medium.com/@krishmakadiya2005/firebase-vs-appwrite-which-backend-should-you-choose-96c4ebc8e247",
        },
        {
            quote: "As a fresher engineer, I explore vibe coding’s impact on workflows, skills, and development.",
            name: "Vibe Coding",
            designation: "March 2025",
            src: "/Blogs/VibeCoding.jpg",
            link: "https://medium.com/@krishmakadiya2005/vibe-coding-embracing-a-new-era-of-software-development-24e377a5cd8f",
        },
        {
            quote: "AI boosts productivity but risks skill erosion, overreliance, and quality issues if not managed wisely.",
            name: "How AI can affect Developers?",
            designation: "March 2025",
            src: "/Blogs/AI.jpg",
            link: "https://medium.com/@krishmakadiya2005/how-ai-can-affect-developers-e6eae3587f77",
        },
        {
            quote: "Learn to efficiently integrate a backend with Next.js, managing connections in serverless environments.",
            name: "Connecting Backend to Next.js Apps",
            designation: "March 2025",
            src: "/Blogs/NextJS.png",
            link: "https://medium.com/@krishmakadiya2005/how-to-connect-your-backend-to-next-js-apps-efficiently-ba760524d1ab",
        },
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}
