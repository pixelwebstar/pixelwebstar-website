"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, User, Clock, Target } from "lucide-react";

export default function About() {
    return (
        <main className="bg-[#0a0a0a] min-h-screen text-white relative overflow-hidden">
            <Header />

            {/* Background Ambience */}
            <div className="fixed top-0 left-0 w-[800px] h-[800px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />

            <section className="pt-40 px-6 max-w-7xl mx-auto pb-24 relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-6xl md:text-[8rem] font-bold tracking-tighter leading-none mb-12"
                >
                    OUR <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        ORIGIN.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="text-xl md:text-2xl text-white/60 max-w-3xl leading-relaxed border-l-2 border-blue-500 pl-8"
                >
                    Founded in 2024, Pixel Webstar was born from a simple belief: <strong className="text-white">Most websites are boring.</strong> We set out to kill the template and resurrect the art of digital storytelling.
                </motion.p>
            </section>

            {/* Values Grid */}
            <section className="px-6 max-w-7xl mx-auto pb-32 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Innovation", icon: <Target className="text-blue-400" />, desc: "We don&apos;t follow trends. We set them." },
                        { title: "Precision", icon: <Clock className="text-purple-400" />, desc: "Every pixel is placed with intent." },
                        { title: "Client-Obsessed", icon: <User className="text-green-400" />, desc: "Your growth is our only KPI." },
                        { title: "Excellence", icon: <Award className="text-yellow-400" />, desc: "Good isn&apos;t enough. We demand great." }
                    ].map((val, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-10%" }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors group"
                        >
                            <div className="mb-6 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                {val.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{val.title}</h3>
                            <p className="text-white/50 leading-relaxed">{val.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
