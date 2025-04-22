import React from "react";
import GooeyNav from "./GooeyNav";

const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
};

// update items array to include onClick handler
const items = [
    { 
        label: "Home", 
        // href: "#",
        onClick: (e) => handleClick(e, "") 
    },
    { 
        label: "Skills", 
        href: "#Skills",
        onClick: (e) => handleClick(e, "#Skills") 
    },
    { 
        label: "Projects", 
        href: "#Projects",
        onClick: (e) => handleClick(e, "#Projects") 
    },
    { 
        label: "Blogs", 
        href: "#Blogs",
        onClick: (e) => handleClick(e, "#Blogs") 
    },
    { 
        label: "Contact Me", 
        href: "#ContactMe",
        onClick: (e) => handleClick(e, "#ContactMe") 
    },
];

const GooeyNavHelper = () => {
    return (
        <div className="absolute z-10 w-full flex justify-center md:-mt-2 -mt-4">
            <GooeyNav
                items={items}
                animationTime={600}
                pCount={15}
                minDistance={20}
                maxDistance={42}
                maxRotate={75}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                timeVariance={300}
            />
        </div>
    );
};

export default GooeyNavHelper;