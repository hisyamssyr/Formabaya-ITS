'use client';

import { motion } from 'framer-motion';

export default function Sponsors() {
    const sponsors = [
        'TechCorp', 'EduFuture', 'GreenEarth', 'InnoLab',
        'YouthRise', 'GlobalConnect', 'FutureBuilders', 'SmartSystems'
    ];

    return (
        <section className="py-20 bg-white overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                <p className="text-sm font-bold tracking-widest text-gray-500 uppercase">Our Sponsor</p>
            </div>

            <div className="relative flex overflow-x-hidden">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                    className="flex whitespace-nowrap gap-16 py-4"
                >
                    {[...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
                        <div
                            key={index}
                            className="text-4xl font-bold text-gray-300 hover:text-[#CB6F4A] transition-colors duration-300 cursor-pointer"
                        >
                            {sponsor}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
