"use client";
import React from "react";
import Particles from "./Particles";

const ParticlesHelper = () => {
    return (
        <div style={{ width: "100%", height: "100vh", position: "absolute" }}>
            <Particles
                particleColors={["#fff", "#fff"]}
                particleCount={50}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
            />
        </div>
    );
};

export default ParticlesHelper;
