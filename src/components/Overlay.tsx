"use client";

import { motion, useScroll, useTransform } from "framer-motion";

interface OverlayProps {
    targetRef?: React.RefObject<HTMLDivElement | null>;
}

export default function Overlay({ targetRef }: OverlayProps) {
    const { scrollYProgress } = useScroll({
        target: targetRef || undefined,
        offset: ["start start", "end end"]
    });

    // Animations synced with scroll-based image sequence
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);

    const y2 = useTransform(scrollYProgress, [0.15, 0.35], [100, -50]);
    const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.35], [0, 1, 0]);

    const y3 = useTransform(scrollYProgress, [0.35, 0.55], [100, -50]);
    const opacity3 = useTransform(scrollYProgress, [0.35, 0.45, 0.55], [0, 1, 0]);

    return (
        <div ref={targetRef} className="absolute inset-0 z-10 flex flex-col justify-end pb-12 md:pb-0 md:justify-center items-center pointer-events-none">
            {/* 1. Left Side Text Box (Now becomes the first content) */}
            <motion.div
                style={{ y: y2, opacity: opacity2 }}
                className="absolute top-1/2 -translate-y-1/2 left-8 md:left-24 max-w-md text-left z-20"
            >
                <div className="bg-black/40 p-8 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Digital <span className="text-blue-500">Excellence.</span>
                    </h2>
                    <p className="text-lg text-white/80 leading-relaxed">
                        I transform raw code into immersive experiences. We don&apos;t just build websites; we craft digital ecosystems that breathe.
                    </p>
                </div>
            </motion.div>

            {/* 3. Right Side Text Box */}
            <motion.div
                style={{ y: y3, opacity: opacity3 }}
                className="absolute top-1/2 -translate-y-1/2 right-8 md:right-24 max-w-md text-right z-20"
            >
                <div className="bg-black/40 p-8 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl ml-auto">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Engineering <span className="text-purple-500">Precision.</span>
                    </h2>
                    <p className="text-lg text-white/80 leading-relaxed">
                        Where creative vision meets technical excellence. Scalable, secure, and lightning-fast solutions for the modern web.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
