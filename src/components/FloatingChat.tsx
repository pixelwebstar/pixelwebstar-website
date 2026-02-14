"use client";

import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingChat() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-24 right-8 z-50 w-80 bg-[#1e1e1e] rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
                    >
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex justify-between items-center">
                            <h3 className="text-white font-bold">Chat with Us</h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/80 hover:text-white"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-4 h-64 overflow-y-auto space-y-4">
                            <div className="bg-white/10 p-3 rounded-lg rounded-tl-none self-start max-w-[80%]">
                                <p className="text-sm text-white/90">Hi there! 👋 How can we help you transform your digital presence today?</p>
                            </div>
                        </div>
                        <div className="p-4 border-t border-white/10 bg-[#121212]">
                            <a
                                href="https://wa.me/1234567890"
                                target="_blank"
                                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2 rounded-lg transition-colors"
                            >
                                <MessageCircle size={18} />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-110"
            >
                <MessageCircle className="text-white w-6 h-6" />
            </button>
        </>
    );
}
