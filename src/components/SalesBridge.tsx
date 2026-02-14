"use client";

import { motion } from "framer-motion";

export default function SalesBridge() {
    return (
        <section className="bg-[#0a0a0a] py-32 md:py-48 px-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none opacity-50 animate-pulse" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: "-20%" }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8 text-white"
                        >
                            THE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                DIGITAL REALITY.
                            </span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-20%" }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-xl md:text-2xl text-white/70 font-light leading-relaxed border-l-2 border-blue-500 pl-8"
                        >
                            <p className="mb-8">
                                In 2025, your website isn&apos;t just a business card. It&apos;s your <strong className="text-white font-medium">primary revenue engine</strong>.
                            </p>
                            <p>
                                Most businesses are invisible. They have &quot;nice&quot; websites that nobody sees and nobody remembers.
                                We don&apos;t do &quot;nice&quot;. We do <strong className="text-white font-medium">memorable</strong>. We do <strong className="text-white font-medium">dominant</strong>.
                            </p>
                        </motion.div>
                    </div>

                    {/* Visual/Metric */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ margin: "-20%" }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="relative flex justify-center md:justify-end"
                    >
                        <div className="aspect-square w-full max-w-sm rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-10 flex flex-col justify-center items-center text-center group hover:bg-white/10 transition-colors duration-500">
                            <h3 className="text-7xl md:text-8xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-500 ease-out">
                                <span className="text-blue-500">0.05</span>s
                            </h3>
                            <p className="text-white/50 uppercase tracking-widest text-sm font-medium">
                                Time to make a first impression.
                            </p>
                            <div className="mt-8 text-xs text-white/30 max-w-[200px] leading-relaxed">
                                Users form an opinion about your site in 50 milliseconds. Use them wisely.
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
