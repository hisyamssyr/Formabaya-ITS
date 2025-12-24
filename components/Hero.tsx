'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, School, UserCheck, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const stats = [
        { icon: Users, value: '100+', label: 'Event Participants' },
        { icon: School, value: '20+', label: 'Schools Visited' },
        { icon: UserCheck, value: '50+', label: 'Committee Members' },
    ];

    return (
        <section
            ref={targetRef}
            id="home"
            className="min-h-screen flex items-center justify-center gradient-navy-white relative overflow-hidden"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/20 rounded-full blur-[100px] animate-blob" />
                <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-red-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-10%] left-[20%] w-[30%] h-[30%] bg-yellow-500/20 rounded-full blur-[100px] animate-blob animation-delay-4000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
                <motion.div style={{ opacity, scale, y }}>
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block"
                    >
                        <span className="px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white/80 text-sm font-medium mb-8 inline-flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#CB6F4A] animate-pulse" />
                            Formabaya X Ini Lho ITS! 2026
                        </span>
                    </motion.div>

                    {/* Logo/Brand */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-8 relative"
                    >
                        <h1 className="text-7xl md:text-9xl font-bold text-white mb-6 tracking-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CB6F4A] to-white inline-block">Form</span>abaya
                        </h1>
                        <p className="text-2xl md:text-4xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
                            Forum Mahasiswa <span className="font-semibold text-[#EECB88]">Blitar</span> - <span className="font-semibold text-[#EECB88]">Surabaya</span>
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
                    >
                        <button
                            onClick={() => scrollToSection('events')}
                            className="group relative px-8 py-4 bg-[#CB6F4A] text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#CB6F4A]/30"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Join TryOut WSN 2026
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>

                        <button
                            onClick={() => scrollToSection('about')}
                            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
                        >
                            Learn More
                        </button>
                    </motion.div>

                    {/* Statistics Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 mt-20"
                    >
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + index * 0.2 }}
                                    className="glass-card bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 group"
                                >
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <Icon className="w-8 h-8 text-[#CB6F4A] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div className="text-5xl font-bold text-white mb-2 tracking-tight group-hover:text-[#EECB88] transition-colors duration-300">
                                        {stat.value}
                                    </div>
                                    <div className="text-lg text-white/70 font-medium">{stat.label}</div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
                <span className="text-xs uppercase tracking-widest">Scroll</span>
            </motion.div>
        </section>
    );
}
