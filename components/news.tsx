'use client';

import { motion } from 'framer-motion';
import { Send, Bell } from 'lucide-react';

export default function Newsletter() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#EECB88]/10" />

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-[#CB6F4A] rounded-[3rem] p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
                >
                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24" />

                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8 animate-float">
                            <Bell className="w-8 h-8 text-white" />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Never Miss an Update</h2>
                        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                            Join our community newsletter to receive the latest news, event updates,
                            and opportunities directly in your inbox.
                        </p>

                        <form className="max-w-md mx-auto relative flex items-center" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full bg-white text-gray-800 placeholder:text-gray-400 rounded-full py-4 pl-6 pr-16 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all shadow-lg"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 bg-[#5D1F1E] hover:bg-black text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </form>

                        <p className="text-white/60 text-sm mt-6">
                            We care about your data in our <a href="#" className="underline hover:text-white">privacy policy</a>.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
