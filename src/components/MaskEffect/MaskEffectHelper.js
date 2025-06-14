"use client";
import { MaskEffect } from "./MaskEffect";

export function MaskEffectHelper() {
    return (
        <div className="flex h-[80vh] w-[100vw] items-center justify-center overflow-hidden">
            <MaskEffect
                revealText={
                    <div className="mx-auto w-full md:px-40 px-3 md:text-[26px] text-slate-800 dark:text-white">
                        <p className="py-5 md:text-4xl text-2xl block">
                            Backend Developer Intern — ZeldaTech{" "}
                            <span className="md:text-[24px] text-[16px] text-neutral-400">
                                (March 2025 – Present)
                            </span>
                        </p>
                        <hr className="pb-5 w-28 text-[#affc41] md:border-t-[3px]" />
                        <p className="md:leading-9">
                            At ZeldaTech, a growing startup, I’m working as a
                            Backend Developer Intern focused on building and
                            optimizing scalable backend systems to handle high
                            traffic and concurrent users. I’ve developed REST
                            APIs, implemented remote backend logic on Raspberry
                            Pi, and collaborated with the frontend team to
                            enable real-time communication and feature
                            integration. <br /> <br /> Being part of a small
                            team, I’ve had the chance to contribute to product
                            discussions, share suggestions, and learn through
                            rapid trial-and-error development cycles. I also
                            worked on ensuring cross-device responsiveness and
                            wrote clean, maintainable code with future
                            scalability in mind.
                        </p>
                    </div>
                }
                className="h-full w-full flex justify-center items-center rounded-md  border md:text-[26px] text-white dark:text-black">
                <p className="py-5 md:text-4xl text-2xl block">
                    Backend Developer Intern — ZeldaTech{" "}
                    <span className="md:text-[24px] text-[16px] text-neutral-400">
                        (March 2025 – Present)
                    </span>
                </p>
                <hr className="pb-5 w-28 text-[#affc41] md:border-t-[3px]" />
                <p className="md:leading-9 md:text-[26px] text-[16px] leading-6">
                    At{" "}
                    <span className="text-[#96e62f]">ZeldaTech</span>,
                    a growing startup, I’m working as a
                    <span className="text-[#96e62f]">
                        {" "}
                        Backend Developer Intern
                    </span>{" "}
                    focused on building and optimizing
                    <span className="text-[#96e62f]">
                        {" "}
                        scalable backend systems
                    </span>{" "}
                    to handle
                    <span className="text-[#96e62f]">
                        {" "}
                        high traffic
                    </span>{" "}
                    and
                    <span className="text-[#96e62f]">
                        {" "}
                        concurrent users
                    </span>
                    . I’ve developed
                    <span className="text-[#96e62f]"> REST APIs</span>
                    , implemented remote backend logic on
                    <span className="text-[#96e62f]">
                        {" "}
                        Raspberry Pi
                    </span>
                    , and collaborated with the frontend team to enable
                    <span className="text-[#96e62f]">
                        {" "}
                        real-time communication
                    </span>{" "}
                    and feature integration.
                    <br />
                    <br />
                    Being part of a small team, I’ve had the chance to
                    contribute to
                    <span className="text-[#96e62f]">
                        {" "}
                        product discussions
                    </span>
                    , share suggestions, and learn through rapid
                    <span className="text-[#96e62f]">
                        {" "}
                        trial-and-error development
                    </span>{" "}
                    cycles. I also worked on ensuring
                    <span className="text-[#96e62f]">
                        {" "}
                        cross-device responsiveness
                    </span>{" "}
                    and wrote
                    <span className="text-[#96e62f]">
                        {" "}
                        clean, maintainable code
                    </span>{" "}
                    with
                    <span className="text-[#96e62f]">
                        {" "}
                        future scalability
                    </span>{" "}
                    in mind.
                </p>
            </MaskEffect>
        </div>
    );
}
