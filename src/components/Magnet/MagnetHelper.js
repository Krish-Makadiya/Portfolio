import React from "react";
import Magnet from "./Magnet";
import "./Magnet.css";

const MagnetHelper = () => {
    return (
        <Magnet padding={120} disabled={false} magnetStrength={5}>
            <a href="https://drive.google.com/file/d/1jxpl9hWgLEKKsAyVTyTF9b5EZG2aWHAx/view?usp=sharing" className="btn-shine" target="_blank">
                Download Resume
            </a>
        </Magnet>
    );
};

export default MagnetHelper;
