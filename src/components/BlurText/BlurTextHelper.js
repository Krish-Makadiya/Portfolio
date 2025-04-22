"use client";
import React from "react";
import BlurText from "./BlurText";

const handleAnimationComplete = () => {
    console.log("Animation completed!");
};


const BlurTextHelper = ({ text }) => {
    return (
        <BlurText
            text={text}
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="lg:text-[100px] md:text-[75px] text-[50px] font-900 mb-8"
        />
    );
};

export default BlurTextHelper;
