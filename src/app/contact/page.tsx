import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Linkedin, Twitter, Github, Instagram, ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <main className="min-h-screen bg-[#121212] text-white">
            <Header />

            {/* 1. Hero */}
            <div className="pt-32 px-6 max-w-7xl mx-auto pb-12">
                <h1 className="text-6xl md:text-8xl font-bold mb-8 text-center md:text-left">Let's Connect.</h1>
            </div>

            <div className="px-6 max-w-7xl mx-auto pb-24 grid lg:grid-cols-2 gap-16">
                {/* Left Side: Info & Map */}
                <div className="space-y-12">
                    <p className="text-xl text-white/60 leading-relaxed">
                        Have a vision? Let's bring it to life. Reach out via the form or contact us directly. We're currently <span className="text-green-400 font-bold inline-flex items-center gap-2"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Accepting New Projects</span>.
                    </p>

                    <div className="space-y-6">
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/5 flex items-center gap-6 hover:bg-white/10 transition-colors cursor-pointer group">
                            <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-white/40 text-sm">Email</p>
                                <p className="text-xl font-medium">hello@pixelwebstar.com</p>
                            </div>
                        </div>
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/5 flex items-center gap-6 hover:bg-white/10 transition-colors cursor-pointer group">
                            <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-white/40 text-sm">Phone</p>
                                <p className="text-xl font-medium">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/5 flex items-center gap-6 hover:bg-white/10 transition-colors cursor-pointer group">
                            <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-white/40 text-sm">Studio</p>
                                <p className="text-xl font-medium">123 Digital Ave, Tech City</p>
                            </div>
                        </div>
                    </div>

                    {/* Social Hub */}
                    <div>
                        <h3 className="text-white/50 uppercase tracking-widest text-sm mb-6">Follow Us</h3>
                        <div className="flex gap-4">
                            {[Linkedin, Twitter, Github, Instagram].map((Icon, i) => (
                                <div key={i} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer hover:-translate-y-1">
                                    <Icon size={20} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Map */}
                    <div className="w-full h-80 rounded-3xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 relative group">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.507640204439!3d37.757815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1707600000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <div className="absolute inset-0 bg-black/10 pointer-events-none group-hover:bg-transparent transition-colors" />
                    </div>
                </div>

                {/* Right Side: Smart Form */}
                <div className="bg-[#1e1e1e] p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

                    <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
                    <form className="space-y-6 relative z-10">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2 text-white/50">Name</label>
                                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-white/50">Company</label>
                                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Pixel Inc." />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-white/50">Email</label>
                            <input type="email" className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-white/50">Project Type</label>
                            <select className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer">
                                <option>General Inquiry</option>
                                <option>Web Design & Dev</option>
                                <option>App Development</option>
                                <option>SEO Audit</option>
                                <option>AI Integration</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-white/50">Budget Range</label>
                            <div className="grid grid-cols-3 gap-4">
                                {["< $5k", "$5k - 20k", "$20k+"].map((b, i) => (
                                    <label key={i} className="cursor-pointer">
                                        <input type="radio" name="budget" className="peer hidden" />
                                        <div className="bg-black/40 border border-white/10 rounded-xl p-3 text-center text-sm peer-checked:bg-blue-600 peer-checked:border-blue-500 peer-checked:text-white hover:bg-white/5 transition-all text-white/70">
                                            {b}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-white/50">Message</label>
                            <textarea className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white h-32 focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Tell us about your next big idea..." />
                        </div>

                        <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg hover:bg-blue-50 flex items-center justify-center gap-2">
                            Send Message <ArrowRight size={20} />
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </main>
    );
}
