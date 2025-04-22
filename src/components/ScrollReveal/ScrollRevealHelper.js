import React from "react";
import ScrollReveal from "./ScrollReveal";

const ScrollRevealHelper = ({text}) => {
    return (
        <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}>
            {text}
        </ScrollReveal>
    );
};

export default ScrollRevealHelper;
