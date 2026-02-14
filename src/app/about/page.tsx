import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import TeamCards from "@/components/TeamCards";
import TechStack from "@/components/TechStack";
import Awards from "@/components/Awards"; // Reusing Awards

export default function About() {
    return (
        <main className="min-h-screen bg-[#121212] text-white">
            <Header />

            {/* 1. Hero Video/Image Area */}
            <div className="relative pt-32 px-6 max-w-7xl mx-auto pb-24 text-center">
                <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    Our DNA.
                </h1>
                <p className="text-xl text-white/60 max-w-3xl mx-auto mb-16">
                    At Pixel Webstar, we believe in the power of digital transformation. We don't just build websites; we craft digital experiences that resonate with your audience and drive business growth.
                </p>
                <div className="relative h-[400px] md:h-[600px] w-full bg-white/5 rounded-3xl overflow-hidden animate-pulse border border-white/10">
                    <div className="absolute inset-0 flex items-center justify-center text-white/20 text-3xl font-bold">
                        Cinematic Team/Office Video Placeholder
                    </div>
                </div>
            </div>

            {/* 2. Timeline (Origin Story) */}
            <Timeline />

            {/* 3. Tech Stack Marquee */}
            <TechStack />

            {/* 4. Team Cards */}
            <TeamCards />

            {/* 5. Values */}
            <section className="py-24 px-6 bg-[#121212]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Innovation", desc: "Pushing boundaries with every line of code." },
                            { title: "Precision", desc: "Attention to detail is our signature." },
                            { title: "Client-Centric", desc: "Your success is our only metric." }
                        ].map((val, i) => (
                            <div key={i} className="p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-colors group">
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{val.title}</h3>
                                <p className="text-white/60">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Awards (Reused) */}
            <Awards />

            {/* 7. CTA */}
            <section className="py-24 text-center">
                <h2 className="text-4xl font-bold text-white mb-8">Want to join the team?</h2>
                <button className="bg-white text-black font-bold py-4 px-8 rounded-full hover:bg-gray-200 transition-colors">
                    View Open Positions
                </button>
            </section>

            <Footer />
        </main>
    );
}
