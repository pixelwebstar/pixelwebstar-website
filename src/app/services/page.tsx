"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComparisonTable from "@/components/ComparisonTable";
import ServiceDetail from "@/components/ServiceDetail";
import { Code, Palette, Search, Zap, Globe, MessageSquare } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "Web Development",
            icon: <Code className="w-12 h-12 text-blue-400" />,
            desc: "High-performance websites built with Next.js, React, and modern frameworks. We ensure scalability, security, and lightning-fast load times."
        },
        {
            title: "UI/UX Design",
            icon: <Palette className="w-12 h-12 text-purple-400" />,
            desc: "User-centric interfaces that are intuitive and beautiful. We design systems that guide users effortlessly through your digital product."
        },
        {
            title: "SEO Optimization",
            icon: <Zap className="w-12 h-12 text-yellow-400" />,
            desc: "Data-driven strategies to improve your visibility online. We optimize technical architecture and content to rank higher on search engines."
        },
        {
            title: "Brand Strategy",
            icon: <Search className="w-12 h-12 text-pink-400" />,
            desc: "Refining your digital identity to stand out in the market. We help define your voice, tone, and visual language."
        },
        {
            title: "Global Commerce",
            icon: <Globe className="w-12 h-12 text-green-400" />,
            desc: "Expand your reach with multi-currency and multi-language support. We build platforms ready for international scale."
        },
        {
            title: "AI Integration",
            icon: <MessageSquare className="w-12 h-12 text-cyan-400" />,
            desc: "Automate customer support and enhance user engagement with custom AI chatbots and intelligent workflows."
        }
    ];

    return (
        <main className="bg-[#0a0a0a] min-h-screen text-white relative overflow-hidden">
            <Header />

            {/* Background Ambience */}
            <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />

            {/* 1. Hero */}
            <section className="pt-40 px-6 max-w-7xl mx-auto pb-24 relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-6xl md:text-[8rem] font-bold tracking-tighter leading-none mb-12"
                >
                    DIGITAL <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        MASTERY.
                    </span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="text-xl md:text-2xl text-white/60 max-w-2xl leading-relaxed"
                >
                    From concept to code, we handle every aspect of your digital presence with surgical precision and artistic flair.
                </motion.p>
            </section>

            {/* 2. Service Grid */}
            <section className="px-6 max-w-7xl mx-auto pb-32 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-10%" }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="group bg-white/5 p-10 rounded-3xl border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="mb-8 bg-black/40 w-24 h-24 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/5 group-hover:border-white/10">
                                {s.icon}
                            </div>
                            <h3 className="text-3xl font-bold mb-4 group-hover:text-blue-300 transition-colors">{s.title}</h3>
                            <p className="text-white/60 leading-relaxed text-lg">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 3. Detailed Breakdown */}
            <ServiceDetail />

            {/* 4. Comparison Table (Value) */}
            <ComparisonTable />

            {/* 5. Investment CTA */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-12 rounded-3xl border border-white/10 text-center">
                    <h2 className="text-4xl font-bold mb-6">Invest in Excellence</h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
                        Quality isn&apos;t expensive, it&apos;s priceless. Investing in a premium digital presence yields exponentially higher returns than cutting corners.
                    </p>
                    <button className="bg-white text-black font-bold py-4 px-8 rounded-full hover:bg-gray-200 transition-colors">
                        Start a Project
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
