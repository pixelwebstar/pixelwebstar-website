"use client";

import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
    return (
        <section className="bg-gradient-to-b from-[#121212] to-blue-900/20 py-48 px-6 text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Scale?</span>
                </h2>
                <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
                    Stop being invisible. Start dominating your market with a digital presence that demands attention.
                </p>
                <a href="/contact" className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full text-xl font-bold hover:scale-105 transition-transform">
                    Start Project <ArrowRight className="w-6 h-6" />
                </a>
            </div>
        </section>
    );
}
