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
        <ClickSparkHelper>
            <div className="bg-black w-full h-full select-none">
                <div className="h-screen w-full overflow-hidden pt-6">
                    <GooeyNavHelper />
                    <ParticlesHelper />
                    <CircularTextHelper />
                    <div className="w-full flex flex-col justify-center items-center h-screen">
                        <BlurTextHelper text="Krish Makadiya" />
                        <RotatingTextHelper />
                        <div className="flex flex-row justify-center items-center gap-4 mt-10">
                            <MagnetHelper />
                        </div>
                    </div>
                </div>
                <div className="bg-black md:h-screen h-[60vh] md:w-4/5 w-[90%] mx-auto flex flex-col md:gap-6 gap-3 justify-center relative">
                    <div className="absolute top-1/2 left-1/2 w-screen h-[80%] z-0 -translate-x-1/2 -translate-y-1/2">
                        <MetaBallsHelper />
                    </div>
                    <div className="flex justify-center items-center">
                        <VariableProximityHelper text="About Me" />
                    </div>

                    <div>
                        <ScrollRevealHelper>
                            Hi, I&apos;m Krish Makadiya , a Computer Science
                            student specializing in AIML, set to graduate in
                            2027. I&apos;m a passionate developer who loves
                            turning ideas into reality through code. Whether
                            it&apos;s building scalable full-stack web
                            applications or solving complex problems with clean
                            and efficient logic, I thrive on challenges that
                            push me to grow and innovate.
                        </ScrollRevealHelper>
                        <ScrollRevealHelper>
                            My journey in tech is driven by creativity,
                            curiosity, and a constant desire to learn. I enjoy
                            exploring new tools, frameworks, and trends to stay
                            ahead and elevate my skillset. Beyond coding,
                            I&apos;m always brainstorming new project ideas,
                            collaborating with like-minded people, and working
                            on solutions that create real impact.
                        </ScrollRevealHelper>
                    </div>
                </div>
                <div
                    id="Skills"
                    className="bg-black h-screen md:w-4/5 w-[90%] mx-auto flex justify-center flex-col gap-6">
                    <div className="flex justify-center items-center">
                        <VariableProximityHelper text="My Skills" />
                    </div>
                    <CardHoverHelper />
                </div>
                <div
                    id="Projects"
                    className="md:w-4/5 w-[90%] md:h-[150vh] h-[60vh] mx-auto flex justify-center items-center flex-col gap-6">
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
                <div
                    id="Blogs"
                    className="md:w-4/5 w-[90%] h-[100vh] mx-auto flex justify-center items-center flex-col md:gap-6 gap-2">
                    <div className="flex justify-center items-center">
                        <VariableProximityHelper text="Blogs" />
                    </div>
                    <AnimatedTestimonialsHelper />
                </div>
                <div
                    id="ContactMe"
                    className="w-full h-[100vh] mx-auto flex justify-center items-center flex-col gap-6">
                    <BackgroundBeamsHelper />
                </div>
            </div>
        </ClickSparkHelper>
    );
}
