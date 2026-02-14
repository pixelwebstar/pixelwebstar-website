"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ScrollyCanvas from "./ScrollyCanvas";
import { useRef } from "react";

export default function ChartSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Animate text to appear earlier (0.5 to 0.8) to ensure visibility
    const opacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);
    const y = useTransform(scrollYProgress, [0.5, 0.8], [50, 0]);

    return (
        <section ref={containerRef} className="relative z-10 min-h-[400vh] bg-[#121212]">
            <div className="sticky top-0 h-screen w-full">
                {/* Using the chart sequence with 120 frames */}
                <ScrollyCanvas
                    numFrames={120}
                    basePath="/chart-sequence/ezgif-frame-"
                    className="z-0"
                    targetRef={containerRef}
                />

                {/* Overlay Text for the Chart Story - IMPROVED READABILITY */}
                <motion.div
                    style={{ opacity, y }}
                    className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-end pb-32 px-6 md:px-24"
                >
                    {/* Added a gradient background to ensure text is readable regardless of the image behind it */}
                    <div className="max-w-4xl bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 md:p-12 rounded-3xl backdrop-blur-sm border border-white/5">
                        <h2 className="text-5xl font-bold text-white md:text-7xl mb-6 leading-tight drop-shadow-lg">
                            The Cost of <span className="text-red-500">Invisibility.</span>
                        </h2>
                        <p className="text-xl text-white/90 md:text-3xl leading-relaxed font-light drop-shadow-md">
                            Businesses without optimized websites leave revenue on the table.
                            <br /><br />
                            <span className="text-red-400 font-bold bg-white/10 px-2 py-1 rounded"> Irregular sites</span> confuse customers.
                            <br />
                            <span className="text-green-400 font-bold bg-white/10 px-2 py-1 rounded"> Optimized sites</span> drive growth.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
