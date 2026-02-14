"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Linkedin, Twitter, Github, Instagram, Send } from "lucide-react";

export default function Contact() {
    return (
        <main className="bg-[#0a0a0a] min-h-screen text-white relative overflow-hidden">
            <Header />

            {/* Background Ambience */}
            <div className="fixed bottom-0 left-0 w-[800px] h-[800px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="pt-40 px-6 max-w-7xl mx-auto pb-12 relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-6xl md:text-[8rem] font-bold tracking-tighter leading-none mb-16"
                >
                    LET&apos;S <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        CONNECT.
                    </span>
                </motion.h1>
            </div>

            <div className="px-6 max-w-7xl mx-auto pb-32 grid lg:grid-cols-2 gap-20 relative z-10">
                {/* Left Side: Info & Map */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="space-y-12"
                >
                    <p className="text-2xl text-white/60 leading-relaxed font-light">
                        Have a vision? Let&apos;s bring it to life. We&apos;re currently <span className="text-white font-medium inline-flex items-center gap-2"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></span> Accepting New Projects</span>.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/5 flex items-center gap-8 hover:bg-white/10 transition-all cursor-pointer group hover:-translate-y-1">
                            <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Mail size={32} />
                            </div>
                            <div>
                                <p className="text-white/40 text-sm uppercase tracking-widest mb-1">Email</p>
                                <p className="text-2xl font-bold">hello@pixelwebstar.com</p>
                            </div>
                        </div>
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/5 flex items-center gap-8 hover:bg-white/10 transition-all cursor-pointer group hover:-translate-y-1">
                            <div className="w-16 h-16 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <MapPin size={32} />
                            </div>
                            <div>
                                <p className="text-white/40 text-sm uppercase tracking-widest mb-1">Studio</p>
                                <p className="text-2xl font-bold">Cloud HQ, Global</p>
                            </div>
                        </div>
                    </div>

                    {/* Social Hub */}
                    <div>
                        <h3 className="text-white/40 uppercase tracking-widest text-sm mb-6 font-medium">Follow Us</h3>
                        <div className="flex gap-4">
                            {[Linkedin, Twitter, Github, Instagram].map((Icon, i) => (
                                <div key={i} className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                    <Icon size={24} />
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Smart Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="bg-[#111] p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

                    <h2 className="text-4xl font-bold mb-10">Send a Message</h2>
                    <form className="space-y-8 relative z-10">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="group">
                                <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-white/40 group-focus-within:text-blue-500 transition-colors">Name</label>
                                <input type="text" className="w-full bg-white/5 border-b border-white/10 p-4 text-white focus:outline-none focus:border-blue-500 transition-colors text-lg placeholder:text-white/20" placeholder="John Doe" />
                            </div>
                            <div className="group">
                                <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-white/40 group-focus-within:text-blue-500 transition-colors">Company</label>
                                <input type="text" className="w-full bg-white/5 border-b border-white/10 p-4 text-white focus:outline-none focus:border-blue-500 transition-colors text-lg placeholder:text-white/20" placeholder="Pixel Inc." />
                            </div>
                        </div>
                        <div className="group">
                            <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-white/40 group-focus-within:text-blue-500 transition-colors">Email</label>
                            <input type="email" className="w-full bg-white/5 border-b border-white/10 p-4 text-white focus:outline-none focus:border-blue-500 transition-colors text-lg placeholder:text-white/20" placeholder="john@example.com" />
                        </div>

                        <div className="group">
                            <label className="block text-xs font-bold uppercase tracking-widest mb-3 text-white/40 group-focus-within:text-blue-500 transition-colors">Message</label>
                            <textarea className="w-full bg-white/5 border-b border-white/10 p-4 text-white h-40 focus:outline-none focus:border-blue-500 transition-colors resize-none text-lg placeholder:text-white/20" placeholder="Tell us about your project..." />
                        </div>

                        <button type="button" className="w-full bg-white text-black font-bold py-5 rounded-2xl transition-all hover:scale-[1.02] shadow-xl hover:shadow-white/20 flex items-center justify-center gap-3 text-lg group">
                            Send Message <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}
