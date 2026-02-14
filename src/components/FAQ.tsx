"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    { q: "How much does a custom website cost?", a: "Each project is unique. Our packages start at $5k for basic sites and can range up to $50k+ for complex web apps." },
    { q: "How long does the process take?", a: "Typically 4-8 weeks for a standard marketing site, and 3-6 months for larger applications." },
    { q: "Do you offer post-launch support?", a: "Absolutely. We offer comprehensive maintenance packages to ensure your site remains secure and up-to-date." },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-[#121212] py-32 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-16 text-center">Common Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-xl font-medium text-white">{faq.q}</span>
                                <ChevronDown className={`w-6 h-6 text-white/50 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="px-6 pb-6"
                                    >
                                        <p className="text-white/60 leading-relaxed">{faq.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="/queries" className="text-blue-400 hover:text-blue-300 underline">View all FAQs</a>
                </div>
            </div>
        </section>
    );
}
