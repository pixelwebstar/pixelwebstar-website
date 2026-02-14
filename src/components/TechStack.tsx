"use client";

import { motion } from "framer-motion";

const tech = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Python", "AWS", "Framer Motion", "Three.js", "PostgreSQL", "GraphQL"
];

export default function TechStack() {
    return (
        <section className="py-24 bg-[#121212] overflow-hidden border-y border-white/5">
            <h2 className="text-center text-white/50 text-sm tracking-widest uppercase mb-12">Our Arsenal</h2>
            <div className="relative flex overflow-x-hidden">
                <motion.div
                    className="flex gap-16 whitespace-nowrap py-4"
                    animate={{ x: "-50%" }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                >
                    {[...tech, ...tech, ...tech].map((item, i) => (
                        <span key={i} className="text-4xl md:text-6xl font-bold text-transparent text-stroke hover:text-white/10 transition-colors cursor-default">
                            {item}
                        </span>
                    ))}
                </motion.div>
                <motion.div
                    className="flex gap-16 whitespace-nowrap py-4 absolute top-0"
                    animate={{ x: "-50%" }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                >
                    {[...tech, ...tech, ...tech].map((item, i) => (
                        <span key={i} className="text-4xl md:text-6xl font-bold text-transparent text-stroke hover:text-white/10 transition-colors cursor-default">
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>
            <style jsx global>{`
            .text-stroke {
                -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
            }
        `}</style>
        </section>
    );
}
