"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";

const team = [
    { name: "Alex V.", role: "Founder & Lead Dev", img: "bg-blue-900" }, // Placeholder styling
    { name: "Sarah J.", role: "Design Director", img: "bg-purple-900" },
    { name: "Mike T.", role: "SEO Specialist", img: "bg-green-900" },
];

export default function TeamCards() {
    return (
        <section className="py-24 px-6 bg-[#121212] border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-16 text-center">The Minds Behind the Pixels</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10"
                        >
                            <div className={`h-64 w-full ${member.img} flex items-center justify-center text-white/20 text-4xl font-bold`}>
                                {member.name.charAt(0)}
                            </div>
                            <div className="p-6 relative z-10 bg-[#1e1e1e]">
                                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                <p className="text-white/60 text-sm mb-4">{member.role}</p>
                                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Linkedin className="w-5 h-5 text-white/70 hover:text-white cursor-pointer" />
                                    <Twitter className="w-5 h-5 text-white/70 hover:text-white cursor-pointer" />
                                    <Github className="w-5 h-5 text-white/70 hover:text-white cursor-pointer" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
