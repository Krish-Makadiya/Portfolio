import React from "react";
import ScrollReveal from "./ScrollReveal";

const ScrollRevealHelper = ({children}) => {
    return (
        <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}>
            {children}
        </ScrollReveal>
    );
};

export default ScrollRevealHelper;
