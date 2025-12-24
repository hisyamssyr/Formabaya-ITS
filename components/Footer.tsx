'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Linkedin, ArrowUp, Send } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'Instagram',
            icon: Instagram,
            url: 'https://instagram.com/formabaya',
            handle: '@formabaya',
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: 'https://linkedin.com/company/formabaya',
            handle: 'Formabaya Official',
        },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="contact" className="bg-[#5D1F1E] text-white relative overflow-hidden pt-20">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#CB6F4A] to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h3 className="text-3xl font-bold">
                                <span className="text-[#CB6F4A]">Form</span>abaya
                            </h3>
                            <p className="text-white/70 leading-relaxed text-sm">
                                Empowering youth through innovation and community engagement.
                                Building future leaders, one event at a time.
                            </p>
                        </motion.div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[#EECB88]">Quick Links</h4>
                        <ul className="space-y-3 text-white/80">
                            {['Home', 'About Us', 'Vision', 'Activities', 'Events'].map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => document.getElementById(item.toLowerCase().replace(' ', ''))?.scrollIntoView({ behavior: 'smooth' })}
                                        className="hover:text-[#CB6F4A] transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-[1px] bg-[#CB6F4A] transition-all duration-300 group-hover:w-4" />
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[#EECB88]">Get in Touch</h4>
                        <div className="space-y-4">
                            <a
                                href="https://wa.me/62123456789"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-white/80 hover:text-white group"
                            >
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-[#CB6F4A] transition-colors">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <span>+62 123-456-7890</span>
                            </a>
                            <a
                                href="mailto:info@formabaya.com"
                                className="flex items-center text-white/80 hover:text-white group"
                            >
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-[#CB6F4A] transition-colors">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span>info@formabaya.com</span>
                            </a>
                        </div>

                        <div className="mt-8 flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#CB6F4A] transition-colors"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter (Mini) */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-[#EECB88]">Stay Updated</h4>
                        <p className="text-white/70 text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
                        <form className="relative" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/10 border border-white/20 rounded-full py-3 px-4 text-sm text-white focus:outline-none focus:border-[#CB6F4A] focus:bg-white/15 transition-all placeholder:text-white/30"
                            />
                            <button
                                type="submit"
                                className="absolute right-1 top-1 w-8 h-8 bg-[#CB6F4A] rounded-full flex items-center justify-center text-white hover:bg-[#AB4F41] transition-colors"
                            >
                                <Send className="w-3 h-3" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/50 text-sm">
                        © {currentYear} Formabaya. All rights reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-sm font-medium text-white/70 hover:text-[#CB6F4A] transition-colors"
                    >
                        Back to Top
                        <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#CB6F4A] transition-colors">
                            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}
