"use client";
import React from "react";
import { BackgroundBeams } from "./BackgroundBeams";
import MovingBorderHelper from "../MovingBorder/MovingBorderHelper";
import Dock from "../Dock/Dock";

export default function BackgroundBeamsHelper() {
    return (
        <div className="h-[100vh] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4 flex flex-col gap-10">
                <div>
                    <h1 className="relative z-10 md:text-[60px] text-[40px] text-white text-center font-sans font-bold">
                        Let’s Connect!
                    </h1>
                    <p className="text-neutral-500 md:text-[24px] text-[16px] text-center relative z-10">
                        Code, coffee, and collaboration – always up for it.
                    </p>
                </div>
                <div className="md:w-[500px] w-[100%] mx-auto flex flex-col justify-center items-center gap-5">
                    <input
                        type="text"
                        placeholder="Name"
                        className="rounded-lg border border-neutral-800 w-full relative z-10  placeholder:text-neutral-700 px-3 py-3 text-[18px] text-white"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        className="rounded-lg border border-neutral-800 w-full relative z-10  placeholder:text-neutral-700 px-3 py-3 text-[18px] text-white"
                        required
                    />
                    <textarea
                        placeholder="Message"
                        className="rounded-lg border border-neutral-800 w-full relative z-10  placeholder:text-neutral-700 px-3 py-3 text-[18px] text-white"
                        rows="3"
                        required
                    />
                    <MovingBorderHelper text={"Submit"}/>
                </div>
            </div>
            <Dock/>
            <BackgroundBeams />
        </div>
    );
}
