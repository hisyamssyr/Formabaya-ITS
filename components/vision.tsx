'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Target, Rocket, Sparkles } from 'lucide-react';

export default function VisionMission() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section
            id="vision"
            className="section-padding bg-[#5D1F1E] text-white overflow-hidden relative"
            ref={containerRef}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_#CB6F4A_0%,_transparent_50%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-8">
                        Visi & <span className="text-[#CB6F4A]">Misi</span>
                    </h2>

                    <motion.div
                        style={{ y }}
                        className="relative inline-block"
                    >
                        <blockquote className="text-2xl md:text-4xl font-light italic text-white/80 max-w-4xl mx-auto leading-relaxed">
                            "[Slogan Formabaya]"
                        </blockquote>
                        <Sparkles className="absolute -top-8 -right-8 w-8 h-8 text-[#EECB88] animate-pulse" />
                    </motion.div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        whileHover={{ y: -10 }}
                        className="group relative bg-white/5 backdrop-blur-lg rounded-[2rem] p-10 border border-white/10 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#CB6F4A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#CB6F4A] to-[#AB4F41] rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                                <Target className="w-8 h-8 text-white" />
                            </div>

                            <h3 className="text-4xl font-bold mb-6 group-hover:text-[#EECB88] transition-colors">Visi</h3>
                            
                            <ul className="space-y-4 text-xl text-white/80">
                                {[
                                    'Organize impactful educational events',
                                    'Foster meaningful strategic partnerships',
                                    'Inspire lasting community change',
                                    'Develop future-ready leadership skills'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 group-hover:text-white transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#CB6F4A] mt-2.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        whileHover={{ y: -10 }}
                        className="group relative bg-white/5 backdrop-blur-lg rounded-[2rem] p-10 border border-white/10 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#CB6F4A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#CB6F4A] to-[#AB4F41] rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500">
                                <Rocket className="w-8 h-8 text-white" />
                            </div>

                            <h3 className="text-4xl font-bold mb-6 group-hover:text-[#EECB88] transition-colors">Misi</h3>

                            <ul className="space-y-4 text-xl text-white/80">
                                {[
                                    'Organize impactful educational events',
                                    'Foster meaningful strategic partnerships',
                                    'Inspire lasting community change',
                                    'Develop future-ready leadership skills'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 group-hover:text-white transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#CB6F4A] mt-2.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
