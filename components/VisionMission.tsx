'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Rocket } from 'lucide-react';

export default function VisionMission() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            id="vision"
            className="section-padding bg-blue-900 text-white"
            ref={ref}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
                        Our Vision & <span className="text-green-400">Mission</span>
                    </h2>

                    {/* Slogan */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <blockquote className="text-2xl md:text-4xl font-light italic text-green-400 mb-4">
                            "Empowering Youth Through Innovation"
                        </blockquote>
                        <div className="w-24 h-1 bg-green-400 mx-auto"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
                        >
                            <div className="flex items-center mb-6">
                                <Target className="w-10 h-10 text-green-400 mr-4" />
                                <h3 className="text-3xl font-bold">Vision</h3>
                            </div>
                            <p className="text-lg leading-relaxed text-white/90">
                                To be a leading platform for educational and community development,
                                inspiring positive change across Indonesia. Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris.
                            </p>
                        </motion.div>

                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
                        >
                            <div className="flex items-center mb-6">
                                <Rocket className="w-10 h-10 text-green-400 mr-4" />
                                <h3 className="text-3xl font-bold">Mission</h3>
                            </div>
                            <p className="text-lg leading-relaxed text-white/90">
                                Organize impactful events, foster meaningful partnerships, and
                                inspire lasting change in our communities. Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
