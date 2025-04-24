"use client";
import React from "react";
import { MovingBorder } from "./MovingBorder";

export default function MovingBorderHelper({text}) {
  return (
    <div>
      <MovingBorder
        borderRadius="2rem"
        className="bg-black text-white border-neutral-800">
        {text}
      </MovingBorder>
    </div>
  );
}
