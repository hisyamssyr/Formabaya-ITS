'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function AboutUs() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" className="section-padding bg-white" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-blue-900 text-center mb-12">
                        About <span className="text-green-500">Formabaya</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Team Photo */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/team-photo.png"
                                alt="Formabaya Team"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>

                        {/* About Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="space-y-6"
                        >
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Formabaya is a dynamic organization dedicated to empowering youth
                                through innovative educational programs and community engagement.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur.
                            </p>
                            <div className="pt-4">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-1 bg-green-500"></div>
                                    <span className="text-lg text-blue-900 font-semibold">
                                        Building Future Leaders
                                    </span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-1 bg-green-500"></div>
                                    <span className="text-lg text-blue-900 font-semibold">
                                        Creating Lasting Impact
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
