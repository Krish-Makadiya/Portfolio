"use client";

import Image from "next/image";
import { AnimatedTabs } from "./AnimatedTabs";

export default function AnimatedTabsHelper() {
    const tabs = [
        {
            title: "DinoAI",
            value: "product",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl md:p-10 px-8 text-xl md:text-4xl font-semibold text-black bg-gradient-to-br from-[#affc41] to-[#7ec321]">
                    <DummyContent image="/Projects/DinoAI.PNG" />
                    <p className="mt-2">DinoAI</p>
                </div>
            ),
        },
        {
            title: "FundVault",
            value: "playground",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl md:p-10 px-8 text-xl md:text-4xl font-semibold text-black bg-gradient-to-br from-[#affc41] to-[#7ec321]">
                    <p className="mt-2">FundVault</p>
                    <DummyContent image="/Projects/FundVault.PNG" />
                </div>
            ),
        },
        {
            title: "Portfolio",
            value: "random",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl md:p-10 px-8 text-xl md:text-4xl font-semibold text-black bg-gradient-to-br from-[#affc41] to-[#98e636]">
                    <p className="mt-2">Portfolio</p>
                    <DummyContent image="/Projects/Portfolio.PNG" />
                </div>
            ),
        },
        {
            title: "DevCharcha",
            value: "services",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl md:p-10 px-8 text-xl md:text-4xl font-semibold text-black bg-gradient-to-br from-[#affc41] to-[#7ec321]">
                    <p className="mt-2">DevCharcha</p>
                    <DummyContent image="/Projects/DevCharcha.PNG" />
                </div>
            ),
        },

        {
            title: "Nano.Link",
            value: "content",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl md:p-10 px-8 text-xl md:text-4xl font-semibold text-black bg-gradient-to-br from-[#affc41] to-[#7ec321]">
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
    const projectLinks = {
        "DinoAI.PNG": "https://github.com/Krish-Makadiya/DinoAI",
        "FundVault.PNG": "https://github.com/Krish-Makadiya/FundVault",
        "Portfolio.PNG": "https://krish-makadiya.vercel.app/",
        "DevCharcha.PNG": "https://github.com/Krish-Makadiya/Dev-Charcha",
        "NanoLink.PNG": "https://nanolink-official.vercel.app/",
    };

    const getProjectLink = (imagePath) => {
        const imageName = imagePath.split("/").pop();
        return projectLinks[imageName] || "#";
    };

    return (
        <a
            href={getProjectLink(image)}
            target="_blank"
            rel="noopener noreferrer">
            <Image
                src={image}
                alt="project preview"
                width="1000"
                height="1000"
                className="object-cover object-middle-top md:h-[90%] absolute md:-bottom-10 -bottom-1 inset-x-0 w-[90%] rounded-xl mx-auto"
            />
        </a>
    );
};
