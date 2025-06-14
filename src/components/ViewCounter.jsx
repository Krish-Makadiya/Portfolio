"use client";
import { useState, useEffect } from "react";
import { RiEyeFill } from "react-icons/ri";

import { db } from "@/firebase";
import { doc, getDoc, setDoc, increment } from "firebase/firestore";

export default function ViewCounter() {
    const [viewCount, setViewCount] = useState(0);

    useEffect(() => {
        const incrementViewCount = async () => {
            try {
                // Reference to the views document
                const viewsRef = doc(db, "analytics", "pageViews");

                // Get current count
                const viewsSnap = await getDoc(viewsRef);

                if (viewsSnap.exists()) {
                    // Increment existing count
                    await setDoc(
                        viewsRef,
                        {
                            count: increment(1),
                        },
                        { merge: true }
                    );

                    setViewCount(viewsSnap.data().count + 1);
                } else {
                    // Initialize count if document doesn't exist
                    await setDoc(viewsRef, {
                        count: 1,
                    });
                    setViewCount(1);
                }
            } catch (error) {
                console.error("Error updating view count:", error);
            }
        };

        incrementViewCount();
    }, []); // Empty dependency array means this runs once when component mounts

    return (
        <div className="flex items-center gap-2 mb-5 md:text-[18px] text-[16px] text-neutral-500">
            <RiEyeFill  className="md:h-8 md:w-8 h-6 w-6" />
            {viewCount > 0 ? `${viewCount} views` : `${viewCount} views`}
        </div>
    );
}
