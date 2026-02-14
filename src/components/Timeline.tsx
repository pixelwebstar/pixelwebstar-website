"use client";

import { motion } from "framer-motion";

const milestones = [
    { year: "2019", title: "Inception", desc: "Started as a solo freelancer with a passion for code." },
    { year: "2021", title: "Expansion", desc: "Grew into a small collective of designers and devs." },
    { year: "2023", title: "Global Reach", desc: "Served clients in over 10 countries." },
    { year: "2025", title: "Pixel Webstar", desc: "Rebranded to define the new era of digital excellence." },
];

export default function Timeline() {
    return (
        <section className="py-24 px-6 bg-[#121212]">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-16 text-center">Our Journey</h2>
                <div className="relative border-l border-white/10 ml-6 md:ml-12 space-y-12">
                    {milestones.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="relative pl-12"
                        >
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                            <span className="text-blue-400 font-mono text-sm mb-1 block">{m.year}</span>
                            <h3 className="text-2xl font-bold text-white mb-2">{m.title}</h3>
                            <p className="text-white/60">{m.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
