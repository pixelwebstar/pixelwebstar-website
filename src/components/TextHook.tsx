"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TextHook() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <section ref={containerRef} className="bg-[#121212] py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl md:text-3xl font-light text-white/60 mb-12 text-center"
                >
                    The Philosophy
                </motion.h2>

                <div className="flex flex-col space-y-4">
                    <motion.div style={{ x: x1 }} className="whitespace-nowrap">
                        <h3 className="text-6xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">
                            WE DON'T JUST
                        </h3>
                    </motion.div>

                    <motion.div style={{ x: x2 }} className="whitespace-nowrap self-end">
                        <h3 className="text-6xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                            BUILD WEBSITES.
                        </h3>
                    </motion.div>

                    <motion.div style={{ x: x1 }} className="whitespace-nowrap">
                        <h3 className="text-6xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/20 to-white">
                            WE BUILD
                        </h3>
                    </motion.div>

                    <motion.div style={{ x: x2 }} className="whitespace-nowrap self-end">
                        <h3 className="text-6xl md:text-9xl font-bold text-white">
                            BUSINESSES.
                        </h3>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
