'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, X } from 'lucide-react';

export default function AboutUs() {
    const containerRef = useRef(null);
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section id="about" className="section-padding bg-white relative overflow-hidden" ref={containerRef}>
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50 to-transparent skew-x-12 opacity-50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Image Section */}
                    <div className="relative">
                        <motion.div
                            style={{ y }}
                            className="relative z-10 rounded-3xl overflow-hidden shadow-2xl group"
                        >
                            <div className="aspect-[4/5] relative">
                                <Image
                                    src="/team-photo.png"
                                    alt="Formabaya Team"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </motion.div>

                        {/* Decorative Frame */}
                        <div className="absolute top-10 -left-10 w-full h-full border-2 border-[#CB6F4A]/30 rounded-3xl z-0 hidden md:block" />

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block"
                        >
                            <div className="text-4xl font-bold text-[#CB6F4A] mb-1">50+</div>
                            <div className="text-sm font-semibold text-gray-600">Members</div>
                        </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-[2px] bg-[#CB6F4A]" />
                                <span className="uppercase tracking-widest text-sm font-bold text-[#CB6F4A]">About</span>
                            </div>

                            <h2 className="text-5xl md:text-6xl font-bold text-[#5D1F1E] mb-8 leading-tight">
                                Formabaya <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CB6F4A] to-[#AB4F41]">ITS</span>
                            </h2>

                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at in cum quae excepturi repellat sequi eligendi officia soluta temporibus animi ab quia quibusdam perferendis, ex eaque! Corrupti, repudiandae praesentium.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo odio facilis reiciendis minus magnam ducimus nobis voluptas quo facere harum vel aut, est recusandae, veritatis, dolorem blanditiis suscipit soluta eligendi?
                                </p>
                            </div>

                            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {['Leadership Development', 'Community Impact', 'Innovation Hub', 'Global Network'].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + i * 0.1 }}
                                        className="flex items-center bg-gray-50 p-4 rounded-xl hover:bg-orange-50 transition-colors duration-300"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-[#CB6F4A] mr-3" />
                                        <span className="font-semibold text-[#5D1F1E]">{item}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.button
                                onClick={() => setIsVideoOpen(true)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-10 px-8 py-4 bg-[#5D1F1E] text-white rounded-full font-bold flex items-center gap-2 group hover:bg-[#CB6F4A] transition-colors duration-300"
                            >
                                After Movie Formabaya 2025
                                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        onClick={() => setIsVideoOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsVideoOpen(false)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <video
                                src="/dummyvid.mp4"
                                className="w-full h-full object-contain"
                                controls
                                autoPlay
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
