"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "./BackgroundBeams";
import MovingBorderHelper from "../MovingBorder/MovingBorderHelper";
import Dock from "../Dock/Dock";

export default function BackgroundBeamsHelper() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState({
        type: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: "loading", message: "Sending..." });

        try {
            const response = await fetch("http://localhost:3000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error("Failed to send message");

            setStatus({ 
                type: "success", 
                message: "Message sent successfully!" 
            });
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error(error);
            setStatus({ 
                type: "error", 
                message: "Failed to send message. Please try again." 
            });
        }
    };

    return (
        <div className="h-[100vh] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4 flex flex-col gap-10">
                <div>
                    <h1 className="relative z-10 md:text-[60px] text-[40px] text-white text-center font-sans font-bold">
                        Let's Connect!
                    </h1>
                    <p className="text-neutral-500 md:text-[24px] text-[16px] text-center relative z-10">
                        Code, coffee, and collaboration – always up for it.
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="md:w-[500px] w-[100%] mx-auto flex flex-col justify-center items-center gap-5">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="rounded-lg border border-neutral-800 w-full relative z-10 placeholder:text-neutral-700 px-3 py-3 text-[18px] text-white"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-lg border border-neutral-800 w-full relative z-10 placeholder:text-neutral-700 px-3 py-3 text-[18px] text-white"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="rounded-lg border border-neutral-800 w-full relative z-10 placeholder:text-neutral-700 px-3 py-3 text-[18px] text-white"
                        rows="3"
                        required
                    />
                    <button type="submit" disabled={status.type === "loading"}>
                        <MovingBorderHelper 
                            text={status.type === "loading" ? "Sending..." : "Submit"}
                        />
                    </button>
                    {status.message && (
                        <p className={`text-center ${
                            status.type === "success" ? "text-green-500" : 
                            status.type === "error" ? "text-red-500" : 
                            "text-neutral-500"
                        }`}>
                            {status.message}
                        </p>
                    )}
                </form>
            </div>
            <Dock/>
            <BackgroundBeams />
        </div>
    );
}