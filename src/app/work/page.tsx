"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MoveUpRight } from "lucide-react";

const projects = [
    {
        title: "Neon Horizon",
        category: "Fintech Web App",
        image: "/projects/project1.jpg", // Placeholder
        year: "2024"
    },
    {
        title: "Quantum Estate",
        category: "Luxury Real Estate",
        image: "/projects/project2.jpg", // Placeholder
        year: "2024"
    },
    {
        title: "Cyber Fitness",
        category: "Health & Wellness",
        image: "/projects/project3.jpg", // Placeholder
        year: "2023"
    },
    {
        title: "Velvet Audio",
        category: "E-Commerce",
        image: "/projects/project4.jpg", // Placeholder
        year: "2023"
    }
];

export default function Work() {
    return (
        <main className="bg-[#0a0a0a] min-h-screen text-white relative overflow-hidden">
            {/* Background Ambience */}
            <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,100,255,0.05),transparent_70%)] pointer-events-none" />

            <Header />

            <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-none mb-24"
                >
                    OUR <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
                        CRAFT.
                    </span>
                </motion.h1>

                <div className="grid grid-cols-1 gap-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-20%" }}
                            transition={{ duration: 0.8 }}
                            className="group cursor-pointer border-t border-white/10 pt-12"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
                                <div>
                                    <h3 className="text-4xl md:text-6xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-xl text-white/50">{project.category}</p>
                                </div>
                                <div className="hidden md:flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-lg uppercase tracking-widest text-white/50">{project.year}</span>
                                    <div className="bg-white text-black p-3 rounded-full">
                                        <MoveUpRight size={24} />
                                    </div>
                                </div>
                            </div>

                            {/* Project Image Placeholder */}
                            <div className="w-full aspect-video bg-white/5 rounded-3xl overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-4xl font-bold uppercase tracking-widest">
                                    {project.title} Preview
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
