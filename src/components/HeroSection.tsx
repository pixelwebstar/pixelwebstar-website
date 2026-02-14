"use client";

import { useRef } from "react";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";

export default function HeroSection() {
    const heroRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={heroRef} className="relative h-[400vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <ScrollyCanvas
                    numFrames={90}
                    basePath="/sequence/ezgif-frame-"
                    targetRef={heroRef}
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <Overlay targetRef={heroRef} />
            </div>
        </div>
    );
}
