import React from "react";
import CircularText from "./CircularText";

const CircularTextHelper = () => {
    return (
        <div>
            <CircularText
                text="KRISH*MAKADIYA*DEV*"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
            />
        </div>
    );
};

export default CircularTextHelper;
