"use client";
import React from "react";
import { useRef } from "react";
import VariableProximity from "./VariableProximity";

const VariableProximityHelper = ({ text }) => {
    const containerRef = useRef(null);

    return (
        <div
        ref={containerRef}
        style={{position: 'relative'}}
        >
          <VariableProximity
            label={text}
            className={'variable-proximity-demo'}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff='linear'
          />
        </div>
    );
};

export default VariableProximityHelper;
