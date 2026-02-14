"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ROICalculator() {
    const [traffic, setTraffic] = useState(1000); // Monthly visitors
    const [conversionRate, setConversionRate] = useState(1); // Current %
    const [avgOrder, setAvgOrder] = useState(100); // Average Order Value

    // Calculation Logic (Monthly)
    // Baseline: 1% conversion (Average/Poor site)
    // Optimized: 3% - 5% conversion (Premium site)
    const baselineConv = conversionRate; // User input as baseline
    const optimizedConv = conversionRate + 2.5; // We add 2.5% lift on top

    const currentRevenue = traffic * (baselineConv / 100) * avgOrder;
    const optimizedRevenue = traffic * (optimizedConv / 100) * avgOrder;
    const lostRevenue = optimizedRevenue - currentRevenue;

    return (
        <section className="bg-[#0a0a0a] py-24 md:py-32 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

                {/* Visualizer / Graph Side */}
                <div className="order-2 md:order-1 relative w-full h-full min-h-[400px] flex items-center justify-center">
                    <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
                    <div className="relative z-10 bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-md w-full">
                        <h3 className="text-white/50 text-xs md:text-sm uppercase tracking-widest mb-8">Monthly Revenue Projection</h3>

                        <div className="flex items-end justify-between h-64 gap-4">
                            {/* Current Bar */}
                            <div className="relative w-full bg-white/10 rounded-t-2xl overflow-hidden group">
                                <motion.div
                                    className="absolute bottom-0 w-full bg-white/30 group-hover:bg-white/40 transition-colors"
                                    initial={{ height: 0 }}
                                    animate={{ height: `${(currentRevenue / optimizedRevenue) * 100}%` }}
                                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                />
                                <div className="absolute bottom-4 left-0 w-full text-center text-white/70 font-mono text-sm">
                                    ${currentRevenue.toLocaleString()}
                                </div>
                            </div>

                            {/* Optimization Gap Bar (Lost Revenue) */}
                            <div className="relative w-full bg-blue-900/20 rounded-t-2xl overflow-hidden border border-blue-500/30 group">
                                <motion.div
                                    className="absolute bottom-0 w-full bg-blue-600 group-hover:bg-blue-500 transition-colors relative z-10"
                                    initial={{ height: 0 }}
                                    animate={{ height: "100%" }}
                                    transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                />
                                <div className="absolute top-4 left-0 w-full text-center text-white font-bold font-mono text-lg z-20">
                                    ${optimizedRevenue.toLocaleString()}
                                </div>
                                <div className="absolute bottom-1/2 left-0 w-full text-center text-white/90 text-xs uppercase tracking-wider z-20">
                                    Potential
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10 text-center">
                            <p className="text-white/60 mb-2">You are likely losing:</p>
                            <h2 className="text-5xl md:text-6xl font-bold text-red-500">
                                ${lostRevenue.toLocaleString()}
                                <span className="text-lg text-white/40 ml-2 align-baseline">/mo</span>
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Controls Side */}
                <div className="order-1 md:order-2">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                    >
                        Calculate Your <span className="text-blue-500">Lost Growth.</span>
                    </motion.h2>
                    <p className="text-xl text-white/60 mb-12 leading-relaxed">
                        A beautiful website is nice. A high-performance website is a money-printing machine. See what optimization could do for you.
                    </p>

                    <div className="space-y-8">
                        {/* Slider 1: Traffic */}
                        <div>
                            <div className="flex justify-between text-white mb-2">
                                <label>Monthly Visitors</label>
                                <span className="font-mono text-blue-400">{traffic.toLocaleString()}</span>
                            </div>
                            <input
                                type="range"
                                min="100" max="50000" step="100"
                                value={traffic}
                                onChange={(e) => setTraffic(Number(e.target.value))}
                                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                            />
                        </div>

                        {/* Slider 2: Conversion Rate */}
                        <div>
                            <div className="flex justify-between text-white mb-2">
                                <label>Current Conversion Rate</label>
                                <span className="font-mono text-blue-400">{conversionRate}%</span>
                            </div>
                            <input
                                type="range"
                                min="0.1" max="5" step="0.1"
                                value={conversionRate}
                                onChange={(e) => setConversionRate(Number(e.target.value))}
                                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                            />
                        </div>

                        {/* Slider 3: Avg Order Value */}
                        <div>
                            <div className="flex justify-between text-white mb-2">
                                <label>Average Customer Value</label>
                                <span className="font-mono text-blue-400">${avgOrder}</span>
                            </div>
                            <input
                                type="range"
                                min="10" max="1000" step="10"
                                value={avgOrder}
                                onChange={(e) => setAvgOrder(Number(e.target.value))}
                                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
