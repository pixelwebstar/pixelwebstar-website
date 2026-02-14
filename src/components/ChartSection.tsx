"use client";

import { useRef, useState, useEffect } from "react";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ChartSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0.05, 0.2, 0.8, 0.95], [0, 1, 1, 0]);

    const [step, setStep] = useState(0);

    // Storytelling step logic
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            if (latest < 0.33) setStep(0);
            else if (latest < 0.66) setStep(1);
            else setStep(2);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    const renderStepContent = () => {
        switch (step) {
            case 0: return (
                <div className="text-red-400">
                    <h3 className="text-xl font-bold mb-2">STAGE 1: NON-EXISTENT</h3>
                    <p className="text-sm opacity-80 uppercase tracking-wider">Zero digital presence. Leaving 100% of revenue on the table.</p>
                </div>
            );
            case 1: return (
                <div className="text-blue-400">
                    <h3 className="text-xl font-bold mb-2">STAGE 2: STANDARD</h3>
                    <p className="text-sm opacity-80 uppercase tracking-wider">Generic template. High bounce rates. capturing baseline traffic only.</p>
                </div>
            );
            case 2: return (
                <div className="text-purple-400">
                    <h3 className="text-xl font-bold mb-2">STAGE 3: PIXELWEBSTAR</h3>
                    <p className="text-sm opacity-80 uppercase tracking-wider">Optimized performance. exponential scaling and market dominance.</p>
                </div>
            );
            default: return null;
        }
    };

    return (
        <section ref={containerRef} className="relative h-[200vh] w-full bg-[#0a0a0a]">
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden">

                {/* Compact Boxed Visualization */}
                <div className="relative w-full max-w-4xl aspect-video bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl backdrop-blur-xl">
                    <ScrollyCanvas
                        numFrames={120}
                        basePath="/chart-sequence/ezgif-frame-"
                        className="z-0 h-full w-full object-contain opacity-90"
                        targetRef={containerRef}
                    />

                    {/* Inner Shadows for framing */}
                    <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
                </div>

                {/* Narrative Overlay - Way Smaller and Fixed Below Chart */}
                <motion.div
                    style={{ opacity }}
                    className="mt-12 w-full max-w-xl z-20"
                >
                    <div className="bg-black/40 border border-white/5 p-8 rounded-3xl backdrop-blur-md text-center shadow-xl">
                        {renderStepContent()}
                    </div>
                </motion.div>

                {/* Subtle Background Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />
            </div>
        </section>
    );
}


