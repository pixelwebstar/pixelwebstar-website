import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComparisonTable from "@/components/ComparisonTable";
import ServiceDetail from "@/components/ServiceDetail";
import { Code, Palette, Search, Zap, Globe, MessageSquare } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "Web Development",
            icon: <Code className="w-10 h-10 text-blue-400" />,
            desc: "High-performance websites built with Next.js, React, and modern frameworks. We ensure scalability, security, and lightning-fast load times."
        },
        {
            title: "UI/UX Design",
            icon: <Palette className="w-10 h-10 text-purple-400" />,
            desc: "User-centric interfaces that are intuitive and beautiful. We design systems that guide users effortlessly through your digital product."
        },
        {
            title: "SEO Optimization",
            icon: <Zap className="w-10 h-10 text-yellow-400" />,
            desc: "Data-driven strategies to improve your visibility online. We optimize technical architecture and content to rank higher on search engines."
        },
        {
            title: "Brand Strategy",
            icon: <Search className="w-10 h-10 text-pink-400" />,
            desc: "Refining your digital identity to stand out in the market. We help define your voice, tone, and visual language."
        },
        {
            title: "Global Commerce",
            icon: <Globe className="w-10 h-10 text-green-400" />,
            desc: "Expand your reach with multi-currency and multi-language support. We build platforms ready for international scale."
        },
        {
            title: "AI Integration",
            icon: <MessageSquare className="w-10 h-10 text-cyan-400" />,
            desc: "Automate customer support and enhance user engagement with custom AI chatbots and intelligent workflows."
        }
    ];

    return (
        <main className="min-h-screen bg-[#121212] text-white">
            <Header />

            {/* 1. Hero */}
            <div className="pt-32 px-6 max-w-7xl mx-auto pb-24 text-center">
                <h1 className="text-6xl font-bold mb-6">Comprehensive Digital Solutions</h1>
                <p className="text-xl text-white/60 text-center max-w-3xl mx-auto mb-20">
                    From concept to code, we handle every aspect of your digital presence.
                </p>

                {/* 2. Service Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {services.map((s, i) => (
                        <div key={i} className="group bg-white/5 p-10 rounded-3xl border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                            <div className="mb-6 bg-white/5 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                {s.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors">{s.title}</h3>
                            <p className="text-white/60 leading-relaxed">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. Detailed Breakdown */}
            <ServiceDetail />

            {/* 4. Comparison Table (Value) */}
            <ComparisonTable />

            {/* 5. Investment CTA */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-12 rounded-3xl border border-white/10 text-center">
                    <h2 className="text-4xl font-bold mb-6">Invest in Excellence</h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
                        Quality isn't expensive, it's priceless. Investing in a premium digital presence yields exponentially higher returns than cutting corners.
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
