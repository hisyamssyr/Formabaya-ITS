'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll to section
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About Us', id: 'about' },
        { name: 'Vision & Mission', id: 'vision' },
        { name: 'Our Activities', id: 'activities' },
        { name: 'Events', id: 'events' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-blue-900 shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="w-full">
                <div className="flex items-center h-16 relative">
                    {/* Logo - Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center cursor-pointer pl-16 gap-3"
                        onClick={() => scrollToSection('home')}
                    >
                        {/* Logo Icon */}
                        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        </div>
                        {/* Logo Text */}
                        <div className="text-3xl font-bold text-white">
                            <span className="text-green-400">Form</span>abaya
                        </div>
                    </motion.div>

                    {/* Desktop Navigation - Center */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
                        {navLinks.map((link, index) => (
                            <motion.button
                                key={link.id}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => scrollToSection(link.id)}
                                className="text-white hover:text-green-400 transition-colors duration-200 font-medium"
                            >
                                {link.name}
                            </motion.button>
                        ))}
                    </div>

                    {/* Mobile Hamburger Menu */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0 }}
                className="md:hidden overflow-hidden bg-blue-900"
            >
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="block w-full text-left px-3 py-2 text-white hover:bg-blue-800 hover:text-green-400 rounded-md transition-colors duration-200"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>
            </motion.div>
        </nav>
    );
}
