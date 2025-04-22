import React from "react";
import PixelTransition from "./PixelTransition";

const PixelTransitionHelper = ({image, text}) => {
    return (
        <PixelTransition
            firstContent={
                <img
                    src={image}
                    alt=""
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            }
            secondContent={
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "#affc41",
                    }}>
                    <p
                        className="md:font-[900] md:text-[18px] text-[10px] w-full text-center text-black">
                        {text}
                    </p>
                </div>
            }
            gridSize={12}
            pixelColor="#affc41"
            animationStepDuration={0.4}
            className="custom-pixel-card"
        />
    );
};

export default PixelTransitionHelper;
