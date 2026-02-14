"use client";

import Link from "next/link";
import { MoveRight, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#050505] text-white pt-24 md:pt-40 pb-10 px-6 border-t border-white/5 relative overflow-hidden">
            {/* Background Ambient */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none opacity-40" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Massive CTA */}
                <div className="mb-24 md:mb-40 flex flex-col items-start gap-8">
                    <h2 className="text-6xl md:text-[8rem] lg:text-[10rem] font-bold leading-[0.85] tracking-tighter">
                        LET&apos;S <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                            TALK.
                        </span>
                    </h2>
                    <Link
                        href="/contact"
                        className="group flex items-center gap-4 text-xl md:text-3xl border-b border-white/30 pb-2 hover:border-white transition-all hover:gap-6 pt-4"
                    >
                        Start Your Project <MoveRight className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:translate-x-2" />
                    </Link>
                </div>

                {/* Grid Links */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24 border-t border-white/10 pt-16">
                    {/* Navigation */}
                    <div className="space-y-6">
                        <h4 className="text-sm text-white/40 uppercase tracking-widest font-medium">Navigation</h4>
                        <ul className="space-y-3 text-lg text-white/70">
                            <li><Link href="/" className="hover:text-white transition-colors block py-1">Home</Link></li>
                            <li><Link href="/work" className="hover:text-white transition-colors block py-1">Work</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors block py-1">Services</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors block py-1">About</Link></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div className="space-y-6">
                        <h4 className="text-sm text-white/40 uppercase tracking-widest font-medium">Connect</h4>
                        <ul className="space-y-3 text-lg text-white/70">
                            <li>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 py-1">
                                    <Linkedin size={20} /> LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 py-1">
                                    <Twitter size={20} /> Twitter
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2 py-1">
                                    <Instagram size={20} /> Instagram
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-6">
                        <h4 className="text-sm text-white/40 uppercase tracking-widest font-medium">Legal</h4>
                        <ul className="space-y-3 text-lg text-white/70">
                            <li><Link href="/privacy" className="hover:text-white transition-colors block py-1">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors block py-1">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Description */}
                    <div className="flex flex-col justify-end">
                        <p className="text-white/30 text-sm leading-relaxed max-w-xs">
                            Crafting digital dominance for visionary brands.
                            <br /><br />
                            Based in the Cloud.
                            <br />
                            Operating Globally.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center text-white/20 text-xs md:text-sm uppercase tracking-widest gap-4 border-t border-white/5 pt-8">
                    <p>© 2025 PIXELWEBSTAR. ALL RIGHTS RESERVED.</p>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="hover:text-white transition-colors cursor-pointer"
                    >
                        SCROLL TO TOP
                    </button>
                </div>
            </div>
        </footer>
    );
}
