"use client";
import React, { useState } from "react";
import { db } from "@/firebase";
import {
    collection,
    addDoc,
    serverTimestamp,
    query,
    where,
    getDocs,
} from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import { BackgroundBeams } from "./BackgroundBeams";
import MovingBorderHelper from "../MovingBorder/MovingBorderHelper";
import Dock from "../Dock/Dock";

export default function BackgroundBeamsHelper() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
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
        // const toastId = toast.loading("Sending...");

        try {
            // Check if user has already submitted 3 feedbacks today
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const feedbacksQuery = query(
                collection(db, "feedbacks"),
                where("email", "==", formData.email.toLowerCase()),
                where("timestamp", ">=", today)
            );

            const querySnapshot = await getDocs(feedbacksQuery);

            if (querySnapshot.size >= 3) {
                toast.error(
                    "Daily feedback limit reached. Please try again tomorrow."
                );
                setFormData({ name: "", email: "", message: "" });
                return;
            }

            // Sanitize data before sending
            const sanitizedData = {
                name: formData.name.trim(),
                email: formData.email.trim().toLowerCase(),
                message: formData.message.trim(),
                timestamp: serverTimestamp(),
            };
            await addDoc(collection(db, "feedbacks"), sanitizedData);

            setFormData({ name: "", email: "", message: "" });
            toast.success("Message sent successfully!");
        } catch (error) {
            toast.error("Failed to send message. Please try again.");
        }
    };

    return (
        <div className="h-[100vh] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
            <Toaster position="top-center" />
            <div className="max-w-2xl mx-auto p-4 flex flex-col gap-10">
                <div>
                    <h1 className="relative z-10 md:text-[60px] text-[40px] text-white text-center font-sans font-bold">
                        Let&apos;s Connect!
                    </h1>
                    <p className="text-neutral-500 md:text-[24px] text-[16px] text-center relative z-10">
                        Code, coffee, and collaboration – always up for it.
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    autoComplete="off"
                    spellCheck="false"
                    noValidate
                    className="md:w-[500px] w-[100%] mx-auto flex flex-col justify-center items-center gap-5">
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
                    <button type="submit" className="z-[10]">
                        <MovingBorderHelper text="Submit" />
                    </button>
                </form>
            </div>
            <Dock />
            <BackgroundBeams />
        </div>
    );
}
