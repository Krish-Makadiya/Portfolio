import React from "react";
import MetaBalls from "./MetaBalls";

const MetaBallsHelper = () => {
    return (
        <MetaBalls
            color="#1e1e1e"
            cursorBallColor="#1e1e1e"
            cursorBallSize={2}
            ballCount={20}
            animationSize={25}
            enableMouseInteraction={false}
            enableTransparency={true}
            hoverSmoothness={0.05}
            clumpFactor={1}
            speed={0.3}
        />
    );
};

export default MetaBallsHelper;
