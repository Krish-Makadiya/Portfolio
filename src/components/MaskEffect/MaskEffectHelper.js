"use client";
import { MaskEffect } from "./MaskEffect";

export function MaskEffectHelper() {
    return (
        <div className="flex h-[80vh] w-[100vw] items-center justify-center overflow-hidden">
            <MaskEffect
                revealText={
                    <div className="mx-auto w-full px-40 text-[26px] text-slate-800 dark:text-white">
                        <p className="py-5 text-4xl block">
                            Backend Developer Intern — ZeldaTech{" "}
                            <span className="text-[24px] text-neutral-400">
                                (March 2025 – Present)
                            </span>
                        </p>
                        <hr className="pb-5 w-28 text-[#affc41] border-t-[3px]" />
                        <p className="leading-9">
                            At ZeldaTech, a growing startup, I’m working as a
                            Backend Developer Intern focused on building and
                            optimizing scalable backend systems to handle high
                            traffic and concurrent users. I’ve developed REST
                            APIs, implemented remote backend logic on Raspberry
                            Pi, and collaborated with the frontend team to
                            enable real-time communication and feature
                            integration. <br /> Being part of a small team, I’ve
                            had the chance to contribute to product discussions,
                            share suggestions, and learn through rapid
                            trial-and-error development cycles. I also worked on
                            ensuring cross-device responsiveness and wrote
                            clean, maintainable code with future scalability in
                            mind.
                        </p>
                    </div>
                }
                className="h-full w-full rounded-md border text-[26px] text-white dark:text-black">
                <p className="py-5 text-4xl block">
                    Backend Developer Intern — ZeldaTech{" "}
                    <span className="text-[24px] text-neutral-400">
                        (March 2025 – Present)
                    </span>
                </p>
                <hr className="pb-5 w-28  border-t-[3px] text-neutral-300" />
                <p className="leading-9">
                    At{" "}
                    <span className="text-[#96e62f] font-bold">ZeldaTech</span>,
                    a growing startup, I’m working as a
                    <span className="text-[#96e62f] font-bold">
                        {" "}
                        Backend Developer Intern
                    </span>{" "}
                    focused on building and optimizing
                    <span className="text-[#96e62f] font-bold">
                        {" "}
                        scalable backend systems
                    </span>{" "}
                    to handle
                    <span className="text-[#96e62f] font-bold">
                        {" "}
                        high traffic
                    </span>{" "}
                    and concurrent users. I’ve developed{" "}
                    <span className="text-[#96e62f] font-bold"> REST APIs</span>
                    , implemented remote backend logic on
                    <span className="text-[#96e62f] font-bold">
                        {" "}
                        Raspberry Pi
                    </span>
                    , and collaborated with the frontend team to enable
                    <span className="text-[#96e62f] font-bold">
                        {" "}
                        real-time communication
                    </span>{" "}
                    and feature integration. <br />
                    Being part of a small team, I’ve had the chance to
                    contribute to product discussions, share suggestions, and
                    learn through
                    <span className="text-[#96e62f] font-bold">
                        {" "}
                        trial-and-error development
                    </span>
                    . I also worked on ensuring cross-device responsiveness and
                    wrote clean, maintainable code with future scalability in
                    mind.
                </p>
            </MaskEffect>
        </div>
    );
}
