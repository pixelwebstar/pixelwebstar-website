"use client";

import { Zap, Palette, Search, Bot } from "lucide-react";
import { motion } from "framer-motion";

export default function ValueGrid() {
    const features = [
        {
            title: "Extreme Speed",
            desc: "Optimized for 100/100 Lighthouse scores. We use Next.js server components and edge caching to ensure instant loads.",
            icon: <Zap className="w-8 h-8 text-yellow-400" />,
            colSpan: "md:col-span-2",
            bg: "bg-gradient-to-br from-yellow-900/20 to-black"
        },
        {
            title: "Aesthetics",
            desc: "Award-winning design standards with glassmorphism and motion.",
            icon: <Palette className="w-8 h-8 text-pink-400" />,
            colSpan: "md:col-span-1",
            bg: "bg-gradient-to-br from-pink-900/20 to-black"
        },
        {
            title: "AI Integrated",
            desc: "Smart chatbots and automated workflows built-in.",
            icon: <Bot className="w-8 h-8 text-cyan-400" />,
            colSpan: "md:col-span-1",
            bg: "bg-gradient-to-br from-cyan-900/20 to-black"
        },
        {
            title: "SEO Dominance",
            desc: "Technical SEO baked into the architecture. Rank higher, faster.",
            icon: <Search className="w-8 h-8 text-green-400" />,
            colSpan: "md:col-span-2",
            bg: "bg-gradient-to-br from-green-900/20 to-black"
        },
    ];

    return (
        <section className="bg-[#121212] py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-16 text-center"
                >
                    The <span className="text-blue-500">Pixel</span> Advantage.
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-32"> {/* Added pb-32 to allow centering of last elements */}
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ margin: "-30% 0px -30% 0px" }} // Tightened margin to force center focus
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className={`${f.colSpan} ${f.bg} p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 group flex flex-col justify-between`}
                        >
                            <div>
                                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {f.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{f.title}</h3>
                                <p className="text-white/60 leading-relaxed">{f.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
