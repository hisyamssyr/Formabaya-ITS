'use client';

import { motion } from 'framer-motion';
import { Users, School, UserCheck } from 'lucide-react';

export default function Hero() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const stats = [
        { icon: Users, value: '500+', label: 'Event Participants' },
        { icon: School, value: '20+', label: 'Schools Visited' },
        { icon: UserCheck, value: '50+', label: 'Committee Members' },
    ];

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center gradient-navy-white relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                {/* Logo/Brand */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
                        <span className="text-green-400">Form</span>abaya
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 font-light">
                        Empowering Youth Through Innovation
                    </p>
                </motion.div>

                {/* Statistics Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 mt-16"
                >
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.2 }}
                                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                            >
                                <Icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                                <div className="text-4xl font-bold text-white mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-white/80 font-medium">{stat.label}</div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                >
                    <button
                        onClick={() => scrollToSection('events')}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-2xl"
                    >
                        Join Us
                    </button>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
        </section>
    );
}
