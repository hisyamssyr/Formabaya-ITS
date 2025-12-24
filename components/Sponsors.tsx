'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Sponsors() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const sponsors = [
        { name: 'TechCorp Indonesia', color: 'from-blue-900 to-blue-700' },
        { name: 'EduVision', color: 'from-green-500 to-green-600' },
        { name: 'FinanceHub', color: 'from-blue-800 to-green-500' },
        { name: 'InnovateTech', color: 'from-green-400 to-blue-900' },
        { name: 'GlobalSolutions', color: 'from-blue-900 to-green-500' },
        { name: 'FutureLabs', color: 'from-green-500 to-blue-800' },
    ];

    const mediaPartners = [
        { name: 'Media Nusantara', color: 'from-blue-900 to-blue-700' },
        { name: 'Digital News', color: 'from-green-500 to-green-600' },
        { name: 'Youth Voice', color: 'from-blue-800 to-green-500' },
        { name: 'Campus Radio', color: 'from-green-400 to-blue-900' },
        { name: 'Tech Magazine', color: 'from-blue-900 to-green-500' },
        { name: 'Community TV', color: 'from-green-500 to-blue-800' },
    ];

    return (
        <section id="sponsors" className="section-padding bg-gradient-to-b from-blue-900/5 via-white to-white" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Sponsors Section */}
                    <div className="mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold text-blue-900 text-center mb-4">
                            Our <span className="text-green-500">Sponsors</span>
                        </h2>
                        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                            Thank you to our amazing sponsors who make our events possible!
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                            {sponsors.map((sponsor, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex items-center justify-center group overflow-hidden relative"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${sponsor.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                                    <div className="relative text-center">
                                        <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br ${sponsor.color} flex items-center justify-center`}>
                                            <span className="text-white font-bold text-xl">
                                                {sponsor.name.charAt(0)}
                                            </span>
                                        </div>
                                        <p className="text-sm font-semibold text-gray-700 group-hover:text-blue-900 transition-colors duration-300">
                                            {sponsor.name}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Media Partners Section */}
                    <div>
                        <h2 className="text-5xl md:text-6xl font-bold text-blue-900 text-center mb-4">
                            Media <span className="text-green-500">Partners</span>
                        </h2>
                        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                            Our trusted media partners helping us spread the word!
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                            {mediaPartners.map((partner, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex items-center justify-center group overflow-hidden relative"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                                    <div className="relative text-center">
                                        <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br ${partner.color} flex items-center justify-center`}>
                                            <span className="text-white font-bold text-xl">
                                                {partner.name.charAt(0)}
                                            </span>
                                        </div>
                                        <p className="text-sm font-semibold text-gray-700 group-hover:text-blue-900 transition-colors duration-300">
                                            {partner.name}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
