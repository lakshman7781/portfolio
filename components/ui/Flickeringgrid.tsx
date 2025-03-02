"use client";

import React, { useEffect, useState } from "react";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export function FlickeringGridRoundedDemo() {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        // Set dimensions on mount
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        // Update dimensions on resize
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <FlickeringGrid
            className="absolute inset-0 -z-30 [mask-image:radial-gradient(1800px_circle_at_center,white,transparent)]"
            squareSize={5}
            gridGap={5}
            color="#3B82F6"
            maxOpacity={0.25}
            flickerChance={0.3}
            height={dimensions.height}
            width={dimensions.width}
        />
      </div>
    );
}