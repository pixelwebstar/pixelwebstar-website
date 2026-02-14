"use client";

import { motion } from "framer-motion";

export default function Process() {
    const steps = [
        { num: "01", title: "Discovery", desc: "We dive deep into your business goals." },
        { num: "02", title: "Build", desc: "Agile development with constant updates." },
        { num: "03", title: "Launch", desc: "Deployment, testing, and global scale." },
    ];

    return (
        <section className="bg-[#121212] py-32 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-16 text-center">How We Work</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="relative p-8"
                        >
                            <span className="text-9xl font-black text-white/5 absolute -top-4 -left-4 z-0">{step.num}</span>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-white/60">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
