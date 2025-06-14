import React from "react";

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

const items = [
    {
        label: "Experience",
        href: "#Experience",
        onClick: (e) => handleClick(e, "#Experience"),
    },
    {
        label: "Skills",
        href: "#Skills",
        onClick: (e) => handleClick(e, "#Skills"),
    },
    {
        label: "Projects",
        href: "#Projects",
        onClick: (e) => handleClick(e, "#Projects"),
    },
    {
        label: "Blogs",
        href: "#Blogs",
        onClick: (e) => handleClick(e, "#Blogs"),
    },
    {
        label: "Contact Me",
        href: "#ContactMe",
        onClick: (e) => handleClick(e, "#ContactMe"),
    },
];

const GooeyNavHelper = () => {
    return (
        <div className="absolute z-10 w-full flex justify-center md:-mt-2 -mt-2">
            <ul
                className="flex md:gap-8 gap-6 list-none py-2 px-4 m-0 relative z-[3]"
                style={{
                    color: "white",
                    textShadow: "0 1px 1px hsl(205deg 30% 10% / 0.2)",
                }}>
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={`md:py-[10px] md:px-[20px] py-[5px] px-[5px] md:text-[16px] text-[12px] rounded-full relative cursor-pointer transition-[background-color_color_box-shadow] duration-300 ease shadow-[0_0_0.5px_1.5px_transparent] text-white`}>
                        <a
                            href={item.href}
                            onClick={item.onClick}
                            className="outline-none">
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GooeyNavHelper;