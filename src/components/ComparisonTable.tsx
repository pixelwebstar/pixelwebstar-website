"use client";

import { Check, X } from "lucide-react";

const comparison = [
    { feature: "Custom Design", us: true, freelancer: true, agency: true },
    { feature: "SEO Optimization", us: true, freelancer: false, agency: true },
    { feature: "AI Integration", us: true, freelancer: false, agency: false },
    { feature: "Speed Optimization (100/100)", us: true, freelancer: false, agency: false },
    { feature: "Post-Launch Support", us: true, freelancer: false, agency: true },
    { feature: "Affordable Pricing", us: true, freelancer: true, agency: false },
];

export default function ComparisonTable() {
    return (
        <section className="py-24 px-6 bg-[#121212]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-16 text-center">Why Choose Us?</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="py-6 px-4 text-white/50 font-medium">Feature</th>
                                <th className="py-6 px-4 text-white font-bold text-xl bg-white/5 rounded-t-xl text-center border-l border-r border-t border-white/10">Pixel Webstar</th>
                                <th className="py-6 px-4 text-white/50 font-medium text-center">Typical Freelancer</th>
                                <th className="py-6 px-4 text-white/50 font-medium text-center">Big Agency</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparison.map((row, i) => (
                                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="py-6 px-4 text-white font-medium">{row.feature}</td>

                                    {/* Us */}
                                    <td className="py-6 px-4 text-center bg-white/5 border-l border-r border-white/10">
                                        {row.us ? <Check className="inline-block text-green-400 w-6 h-6" /> : <X className="inline-block text-red-400 w-6 h-6" />}
                                    </td>

                                    {/* Freelancer */}
                                    <td className="py-6 px-4 text-center text-white/30">
                                        {row.freelancer ? <Check className="inline-block w-6 h-6" /> : <X className="inline-block w-6 h-6" />}
                                    </td>

                                    {/* Agency */}
                                    <td className="py-6 px-4 text-center text-white/30">
                                        {row.agency ? <Check className="inline-block w-6 h-6" /> : <X className="inline-block w-6 h-6" />}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
