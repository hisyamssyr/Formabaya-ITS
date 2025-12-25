'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Sponsors() {
    const sponsors = Array(8).fill('/pertamina2.png');

    return (
        <section className="py-8 bg-white overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
                <p className="text-3xl font-bold tracking-widest text-gray-600 uppercase">Our Sponsor</p>
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
                    className="flex whitespace-nowrap gap-16 py-4 items-center"
                >
                    {[...sponsors, ...sponsors].map((sponsor, index) => (
                        <div
                            key={index}
                            className="relative w-100 h-50 transition-all duration-300 cursor-pointer hover:scale-105"
                        >
                            <Image
                                src={sponsor}
                                alt="Sponsor Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
