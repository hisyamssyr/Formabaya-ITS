'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';

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
            name: 'TikTok',
            icon: '🎵',
            url: 'https://tiktok.com/@formabaya',
            handle: '@formabaya',
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            url: 'https://linkedin.com/company/formabaya',
            handle: 'Formabaya Official',
        },
    ];

    return (
        <footer id="contact" className="bg-blue-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-bold mb-4">
                            <span className="text-green-400">Form</span>abaya
                        </h3>
                        <p className="text-white/80 leading-relaxed">
                            Empowering youth through innovation and community engagement.
                            Building future leaders, one event at a time.
                        </p>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <h4 className="text-xl font-bold mb-4 text-green-400">
                            Contact Us
                        </h4>
                        <div className="space-y-3">
                            <a
                                href="https://wa.me/62123456789"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center hover:text-green-400 transition-colors duration-200"
                            >
                                <Phone className="w-5 h-5 mr-3" />
                                <span>+62 123-456-7890</span>
                            </a>
                            <a
                                href="mailto:info@formabaya.com"
                                className="flex items-center hover:text-green-400 transition-colors duration-200"
                            >
                                <Mail className="w-5 h-5 mr-3" />
                                <span>info@formabaya.com</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Social Media */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <h4 className="text-xl font-bold mb-4 text-green-400">Follow Us</h4>
                        <div className="space-y-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center hover:text-green-400 transition-colors duration-200"
                                >
                                    {typeof social.icon === 'string' ? (
                                        <span className="w-5 h-5 mr-3 text-lg">{social.icon}</span>
                                    ) : (
                                        <social.icon className="w-5 h-5 mr-3" />
                                    )}
                                    <span>{social.handle}</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/20 pt-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-center text-white/70"
                    >
                        <p>© {currentYear} Formabaya. All rights reserved.</p>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
}
