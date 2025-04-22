"use client";
import "./globals.css";
import GooeyNavHelper from "@/components/GooeyNav/GooeyNavHelper";
import ParticlesHelper from "@/components/Particles/ParticlesHelper";
import CircularTextHelper from "@/components/CircularText/CircularTextHelper";
import BlurTextHelper from "@/components/BlurText/BlurTextHelper";
import RotatingTextHelper from "@/components/RotatingText/RotatingTextHelper";
import VariableProximityHelper from "@/components/VariableProximity/VariableProximityHelper";
import ClickSparkHelper from "@/components/ClickSpark/ClickSparkHelper";
import MagnetHelper from "@/components/Magnet/MagnetHelper";
import ScrollRevealHelper from "@/components/ScrollReveal/ScrollRevealHelper";
import MetaBallsHelper from "@/components/MetaBalls/MetaBallsHelper";
import { CardHoverHelper } from "@/components/CardHover/CardHoverHelper";
import AnimatedTabsHelper from "@/components/AnimatedTabs/AnimatedTabsHelper";
import CarouselHelper from "@/components/Carousel/CarouselHelper";
import AnimatedTestimonialsHelper from "@/components/AnimatedTestimonials/AnimatedTestimonialsHelper";
import BackgroundBeamsHelper from "@/components/BackgroundBeams/BackgroundBeamsHelper";

export default function Home() {
    return (
        <div className="bg-black w-full h-full">
            <div className="h-screen w-full overflow-hidden pt-6">
                {/* <ClickSparkHelper> */}
                <GooeyNavHelper />
                <ParticlesHelper />
                {/* <CircularTextHelper /> */}
                <div className="w-full flex flex-col justify-center items-center h-screen">
                    <BlurTextHelper text="Krish Makadiya" />
                    <RotatingTextHelper />
                    <div className="flex flex-row justify-center items-center gap-4 mt-20">
                        <MagnetHelper />
                    </div>
                </div>
                {/* </ClickSparkHelper> */}
            </div>
            <div className="bg-black h-screen md:w-4/5 w-[90%] mx-auto flex flex-col md:gap-6 gap-3 justify-center relative">
                <div className="absolute top-1/2 left-1/2 w-screen h-[80%] z-0 -translate-x-1/2 -translate-y-1/2">
                    <MetaBallsHelper />
                </div>
                <div className="flex justify-center items-center">
                    <VariableProximityHelper text="About Me" />
                </div>

                <div>
                    <ScrollRevealHelper
                        children={
                            "Hey there! I’m a passionate developer who loves turning ideas into reality through code. Whether it's building full-stack web applications or solving complex problems with clean, efficient logic, I thrive on challenges that push me to learn and grow every day. Creativity and curiosity fuel my journey in tech, and I’m always exploring new tools and frameworks to level up my skills."
                        }
                    />
                    <ScrollRevealHelper
                        children={
                            "When I'm not coding, you'll probably find me brainstorming project ideas, collaborating with like-minded people, or diving into the latest tech trends. I believe in building things that not only work great but also make a real impact. Let’s connect and create something awesome together!"
                        }
                    />
                </div>
            </div>
            <div id="Skills" className="bg-black h-screen md:w-4/5 w-[90%] mx-auto flex justify-center flex-col gap-6">
                <div className="flex justify-center items-center">
                    <VariableProximityHelper text="My Skills" />
                </div>
                <CardHoverHelper />
            </div>
            <div id="Projects" className="md:w-4/5 w-[90%] md:h-[150vh] h-[60vh] mx-auto flex justify-center items-center flex-col gap-6">
                <div className="flex justify-center items-center">
                    <VariableProximityHelper text="My Projects" />
                </div>
                <AnimatedTabsHelper />
            </div>
            <div className="w-screen md:h-[120vh] h-[80vh] mx-auto flex justify-center items-center flex-col gap-6 py-28">
                <div className="flex justify-center items-center">
                    <VariableProximityHelper text="Mini Projects" />
                </div>
                <CarouselHelper />
            </div>
            <div id="Blogs" className="md:w-4/5 w-[90%] h-[100vh] mx-auto flex justify-center items-center flex-col md:gap-6 gap-2">
                <div className="flex justify-center items-center">
                    <VariableProximityHelper text="Blogs" />
                </div>
                <AnimatedTestimonialsHelper />
            </div>
            <div id="ContactMe" className="w-full h-[100vh] mx-auto flex justify-center items-center flex-col gap-6">
                <BackgroundBeamsHelper />
            </div>
        </div>
    );
}
