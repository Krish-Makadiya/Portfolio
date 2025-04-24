"use client";

import Image from "next/image";
import { AnimatedTabs } from "./AnimatedTabs";
import Link from "next/link";

export default function AnimatedTabsHelper() {
    const tabs = [
        {
            title: "DinoAI",
            value: "product",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl md:p-10 px-8  text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-[#affc41] to-[#7ec321]">
                    <DummyContent image="/Projects/DinoAI.PNG" />
                    <p className="mt-2">DinoAI</p>
                </div>
            ),
        },
        {
            title: "FundVault",
            value: "playground",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl md:p-10 px-8   text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-[#affc41] to-[#7ec321]">
                    <p className="mt-2">FundVault</p>
                    <DummyContent image="/Projects/FundVault.PNG" />
                </div>
            ),
        },
        {
            title: "Portfolio",
            value: "random",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl md:p-10 px-8   text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-[#affc41] to-[#98e636]">
                    <p className="mt-2">Portfolio</p>
                    <DummyContent image="/Projects/Portfolio.PNG" />
                </div>
            ),
        },
        {
            title: "DevCharcha",
            value: "services",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl md:p-10 px-8   text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-[#affc41] to-[#7ec321]">
                    <p className="mt-2">DevCharcha</p>
                    <DummyContent image="/Projects/DevCharcha.PNG" />
                </div>
            ),
        },

        {
            title: "Nano.Link",
            value: "content",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl md:p-10 px-8 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-[#affc41] to-[#7ec321]">
                    <p className="mt-2">Nano.Link</p>
                    <DummyContent image="/Projects/NanoLink.PNG" />
                </div>
            ),
        },
    ];

    return (
        <div className="h-[100vh] [perspective:1000px] relative b flex flex-col w-full mx-auto items-start justify-start ">
            <AnimatedTabs tabs={tabs} />
        </div>
    );
}

const DummyContent = ({ image }) => {
    return (
        <a 
            href="" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            <Image
                src={image}
                alt="dummy image"
                width="1000"
                height="1000"
                className="object-cover object-middle-top  md:h-[90%] absolute md:-bottom-10 -bottom-1 inset-x-0 w-[90%] rounded-xl mx-auto"
            />
        </a>
    );
};