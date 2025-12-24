'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll to section
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsOpen(false);
        }
    };

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About Us', id: 'about' },
        { name: 'Vision & Mission', id: 'vision' },
        { name: 'Gallery', id: 'activities' },
        { name: 'Event', id: 'events' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-[#5D1F1E]/80 backdrop-blur-md shadow-lg py-6'
                : 'bg-transparent py-8'
                }`}
        >
            <div className="w-full px-6 sm:px-12 lg:px-16">
                <div className="relative flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center cursor-pointer gap-3"
                        onClick={() => scrollToSection('home')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="w-10 h-10 bg-gradient-to-br from-[#CB6F4A] to-[#AB4F41] rounded-xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-all duration-300">
                            <span className="text-white font-bold text-xl">F</span>
                        </div>
                        <div className="text-2xl font-bold text-white">
                            <span className="text-[#CB6F4A]">Form</span>abaya
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-8">
                        {navLinks.map((link, index) => (
                            <motion.button
                                key={link.id}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => scrollToSection(link.id)}
                                className="relative text-white/90 hover:text-white font-medium group py-2"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CB6F4A] transition-all duration-300 group-hover:w-full" />
                            </motion.button>
                        ))}
                    </div>

                    {/* Mobile Hamburger Menu */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-[#CB6F4A] transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden fixed inset-0 top-[70px] bg-[#5D1F1E]/95 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full space-y-8 pb-20">
                            {navLinks.map((link, index) => (
                                <motion.button
                                    key={link.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-3xl font-bold text-white hover:text-[#CB6F4A] transition-colors"
                                >
                                    {link.name}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
