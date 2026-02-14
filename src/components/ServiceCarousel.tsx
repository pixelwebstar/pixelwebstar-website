"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const services = [
    { title: "Web Development", desc: "Next.js & React" },
    { title: "UI/UX Design", desc: "Figma & Motion" },
    { title: "AI Solutions", desc: "Automation & Chatbots" },
    { title: "E-Commerce", desc: "Shopify & Stripe" },
    { title: "Brand Identity", desc: "Logo & Strategy" },
];

export default function ServiceCarousel() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

    return (
        <section ref={targetRef} className="h-[300vh] bg-[#121212] relative">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-12 pl-24">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="group relative h-[400px] w-[300px] md:w-[500px] shrink-0 overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 flex flex-col justify-end transition-colors hover:bg-white/10"
                        >
                            <h3 className="text-4xl font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-xl text-white/60">{service.desc}</p>
                            <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                                →
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
