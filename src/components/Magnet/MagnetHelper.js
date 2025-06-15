import React from "react";
import Magnet from "./Magnet";
import "./Magnet.css";

const MagnetHelper = () => {
    return (
        <Magnet padding={120} disabled={false} magnetStrength={5}>
            <a href="https://drive.google.com/file/d/1PjQ9Cg_ln9XMkVFzojh9Gm7FueO1S23q/view?usp=drive_link" className="btn-shine" target="_blank">
                Download Resume
            </a>
        </Magnet>
    );
};

export default MagnetHelper;