"use client";

import { Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Awards() {
    const logos = ["TechCrunch", "Forbes", "Awwwards", "CSS Design Awards", "The Verge"];

    return (
        <section className="bg-[#121212] py-24 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-white/50 text-sm tracking-widest uppercase mb-12">Trusted by Industry Leaders</p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {logos.map((logo, i) => (
                        <span key={i} className="text-2xl font-bold text-white cursor-default hover:text-white transition-colors">{logo}</span>
                    ))}
                </div>

                <div className="mt-24 grid md:grid-cols-3 gap-8 text-left">
                    {[1, 2, 3].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="bg-white/5 p-6 rounded-2xl border border-white/10"
                        >
                            <Award className="w-8 h-8 text-yellow-500 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-2">Site of the Day</h4>
                            <p className="text-white/60 text-sm">Recognized for outstanding design and innovation.</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
