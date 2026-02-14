"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function ServiceDetail() {
    const details = [
        {
            title: "Web Development",
            desc: "We build scalable, high-performance web applications using the latest technologies.",
            tools: ["Next.js", "React", "Node.js", "PostgreSQL"],
            deliverables: ["Source Code", "Deployed App", "Admin Dashboard", "API Documentation"]
        },
        {
            title: "UI/UX Design",
            desc: "User-centric design that converts. We create interfaces that are intuitive and beautiful.",
            tools: ["Figma", "Adobe XD", "Framer", "Spline"],
            deliverables: ["Design System", "Interactive Prototypes", "User Flows", "Asset Library"]
        },
        // Add more if needed
    ];

    return (
        <section className="py-24 px-6 bg-[#121212]">
            <div className="max-w-7xl mx-auto space-y-32">
                {details.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}
                    >
                        <div className="flex-1">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{service.title}</h2>
                            <p className="text-xl text-white/70 mb-8 leading-relaxed">{service.desc}</p>

                            <div className="mb-8">
                                <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Tools</h4>
                                <div className="flex flex-wrap gap-2">
                                    {service.tools.map((t, j) => (
                                        <span key={j} className="px-3 py-1 bg-white/10 rounded-full text-white/80 text-sm border border-white/5">{t}</span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Deliverables</h4>
                                <ul className="space-y-2">
                                    {service.deliverables.map((d, k) => (
                                        <li key={k} className="flex items-center gap-3 text-white/70">
                                            <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                            {d}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex-1 w-full h-[400px] bg-white/5 rounded-3xl border border-white/10 animate-pulse relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10" />
                            {/* Placeholder for service image/video */}
                            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-lg">
                                Visual for {service.title}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
