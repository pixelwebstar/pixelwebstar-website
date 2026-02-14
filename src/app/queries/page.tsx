"use client"; // Interactive search

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, ChevronDown, CheckCircle2, Download } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allFaqs = [
    { cat: "General", q: "How much does a custom website cost?", a: "Each project is unique. Our packages start at $5k for basic sites and can range up to $50k+ for complex web apps." },
    { cat: "General", q: "How long does the process take?", a: "Typically 4-8 weeks for a standard marketing site, and 3-6 months for larger applications." },
    { cat: "Technical", q: "Do you offer hosting?", a: "Yes, we can manage hosting for you on premium platforms like Vercel or AWS, or hand off the code to your team." },
    { cat: "Technical", q: "Will my site be mobile friendly?", a: "100%. We design mobile-first to ensure a flawless experience on all devices." },
    { cat: "Process", q: "What do you need from me to start?", a: "We'll need your branding assets (logo, fonts), content outline, and a clear understanding of your goals. We can help with all of this during discovery." },
    { cat: "Support", q: "Do you offer post-launch support?", a: "Absolutely. We provide 30 days of free bug fixes and offer ongoing maintenance retainers." },
];

const categories = ["All", "General", "Technical", "Process", "Support"];

export default function Queries() {
    const [filter, setFilter] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const filteredFaqs = allFaqs.filter(f =>
        (filter === "All" || f.cat === filter) &&
        (f.q.toLowerCase().includes(searchTerm.toLowerCase()) || f.a.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <main className="min-h-screen bg-[#121212] text-white">
            <Header />

            {/* 1. Hero */}
            <div className="pt-32 px-6 max-w-4xl mx-auto pb-16 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-8">Knowledge Base</h1>
                <p className="text-xl text-white/60 mb-12">Everything you need to know about working with Pixel Webstar.</p>

                {/* 2. Search Bar */}
                <div className="relative max-w-2xl mx-auto mb-12">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search questions (e.g. Price, Timeline)..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white text-lg focus:outline-none focus:border-blue-500 transition-colors"
                    />
                </div>

                {/* 3. Categories */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((c) => (
                        <button
                            key={c}
                            onClick={() => setFilter(c)}
                            className={`px-6 py-2 rounded-full border transition-all ${filter === c ? 'bg-white text-black border-white' : 'bg-transparent text-white/60 border-white/10 hover:border-white/30'}`}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            </div>

            {/* 4. FAQ List */}
            <section className="px-6 max-w-4xl mx-auto pb-32 min-h-[50vh]">
                <div className="space-y-4">
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors gap-4"
                                >
                                    <span className="text-lg font-medium text-white">{faq.q}</span>
                                    <ChevronDown className={`w-5 h-5 text-white/50 transition-transform flex-shrink-0 ${openIndex === i ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="px-6 pb-6"
                                        >
                                            <p className="text-white/60 leading-relaxed border-t border-white/5 pt-4">{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))
                    ) : (
                        <div className="text-center text-white/40 py-12">No results found. Try a different search term.</div>
                    )}
                </div>
            </section>

            {/* 5. Download Magnet */}
            <section className="bg-gradient-to-r from-blue-900/10 to-purple-900/10 border-y border-white/5 py-24 px-6">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <div>
                        <h3 className="text-3xl font-bold mb-4">Free Website Checklist</h3>
                        <p className="text-white/60 mb-6">Download our comprehensive 50-point checklist to ensure your site is launch-ready.</p>
                        <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-bold group">
                            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" /> Download PDF Guide
                        </button>
                    </div>
                    <div className="bg-white/5 p-8 rounded-xl border border-white/10 w-full md:w-auto">
                        <ul className="space-y-3 text-white/70">
                            <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> SEO Fundamentals</li>
                            <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Performance Audit</li>
                            <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Accessibility Check</li>
                            <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Security Basics</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
