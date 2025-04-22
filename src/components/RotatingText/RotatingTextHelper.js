import React from "react";
import RotatingText from "./RotatingText";

const RotatingTextHelper = () => {
    return (
        <div className="flex items-center gap-3">
            <p className="text-white lg:text-[36px] md:text-[28px] text-[22px]">I am</p>
            <RotatingText
                texts={[
                    "Frontend Developer",
                    "Backend Developer",
                    "Full Stack Developer",
                ]}
                mainClassName="px-4 px-2 bg-gradient-to-br from-[#affc41] to-[#98e636] text-black overflow-hidden py-0.5 py-2 justify-center rounded-lg md:text-[30px] text-[24px] font-bold"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.01}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
            />
        </div>
    );
};

export default RotatingTextHelper;
