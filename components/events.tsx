'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, CheckCircle, Calendar, MapPin, Clock } from 'lucide-react';

export default function Events() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const faqs = [
        {
            question: 'What is the event fee?',
            answer: 'The event fee varies depending on the program. Some workshops are free, while others require a registration fee to cover materials and logistics. Please contact us for specific pricing details.',
        },
        {
            question: 'How do I register for events?',
            answer: 'You can register through our website by clicking the "Join Us" button. Alternatively, you can contact us directly via WhatsApp or email for assistance with the registration process.',
        },
        {
            question: 'Are there any prerequisites?',
            answer: 'Most of our events are open to all youth participants regardless of background. Specific technical workshops may have basic requirements which will be listed in the event details.',
        },
        {
            question: 'Can I volunteer as a committee member?',
            answer: 'Absolutely! We welcome enthusiastic volunteers who want to make a difference. We regularly open recruitment for various committee roles. Follow our social media for updates.',
        },
    ];

    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'Participant 2023',
            quote: 'The workshops were incredibly insightful and the community was so welcoming. I learned practical skills that I use in my projects today.',
            avatar: '👩',
            bg: 'bg-blue-100'
        },
        {
            name: 'Michael Chen',
            role: 'Student Volunteer',
            quote: 'Life-changing event! I gained valuable leadership skills and made lasting connections with like-minded individuals from across the country.',
            avatar: '👨',
            bg: 'bg-green-100'
        },
        {
            name: 'Aisha Rahman',
            role: 'Committee Chair',
            quote: 'Being part of Formabaya has been transformative. The impact we create together is truly inspiring and drives me to do more.',
            avatar: '🧕',
            bg: 'bg-orange-100'
        },
    ];

    return (
        <section id="events" className="section-padding gradient-white-navy relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-[#5D1F1E] mb-6">
                        Event<span className="text-[#CB6F4A]"> Formabaya</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolores sit natus officia nulla facere quo libero deleniti necessitatibus minus, et omnis odio praesentium temporibus consectetur consequuntur aspernatur quasi itaque!
                    </p>
                </motion.div>

                {/* Featured Event */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
                    >
                        <Image
                            src="/event-poster.png"
                            alt="Upcoming Event"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur rounded-2xl p-4 text-center shadow-lg">
                            <div className="text-sm font-bold text-[#CB6F4A] uppercase tracking-wide">JULY</div>
                            <div className="text-3xl font-bold text-[#5D1F1E]">15</div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="inline-block px-4 py-2 bg-[#CB6F4A]/10 text-[#CB6F4A] rounded-full font-bold text-sm">
                            Formabaya X Ini Lho ITS! 2026
                        </div>

                        <h3 className="text-4xl font-bold text-[#5D1F1E]">Welcome Sepuluh Nopember</h3>

                        <div className="space-y-4 text-lg text-gray-600">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolorum laborum eaque, rerum accusamus a molestias! Autem sequi nemo repudiandae officia aliquid culpa deleniti provident, dicta velit aliquam earum atque!
                            </p>

                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="flex items-center gap-3 text-[#5D1F1E] font-medium">
                                    <Clock className="w-5 h-5 text-[#CB6F4A]" />
                                    [Tanggal]
                                </div>
                                <div className="flex items-center gap-3 text-[#5D1F1E] font-medium">
                                    <MapPin className="w-5 h-5 text-[#CB6F4A]" />
                                    [Tempat]
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                            <h4 className="text-xl font-bold text-[#5D1F1E] mb-4">Registration Steps</h4>
                            <ul className="space-y-3">
                                {[
                                    'Register via our website',
                                    'Fill out the registration form',
                                    'Wait for confirmation email',
                                    'Attend the event and enjoy!',
                                ].map((step, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-[#CB6F4A] flex-shrink-0" />
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className="w-full sm:w-auto px-8 py-4 bg-[#CB6F4A] hover:bg-[#AB4F41] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            Register Now
                        </button>
                    </motion.div>
                </div>

                {/* FAQ Section */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h3 className="text-4xl font-bold text-[#5D1F1E]">Frequently Asked Questions</h3>
                    </motion.div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                                >
                                    <span className="text-lg font-bold text-[#5D1F1E] text-left">{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-[#CB6F4A] transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-8 pb-6 pt-0 text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div className="text-center">
                    <h3 className="text-4xl font-bold text-[#5D1F1E] mb-12">What People Say</h3>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-16 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full -mr-32 -mt-32 opacity-50" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-50 rounded-full -ml-24 -mb-24 opacity-50" />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentTestimonial}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="relative z-10"
                                >
                                    <div className={`w-20 h-20 mx-auto ${testimonials[currentTestimonial].bg} rounded-full flex items-center justify-center text-4xl mb-8 shadow-inner`}>
                                        {testimonials[currentTestimonial].avatar}
                                    </div>

                                    <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 leading-relaxed">
                                        "{testimonials[currentTestimonial].quote}"
                                    </blockquote>

                                    <div>
                                        <div className="font-bold text-xl text-[#CB6F4A]">
                                            {testimonials[currentTestimonial].name}
                                        </div>
                                        <div className="text-gray-500 font-medium mt-1">
                                            {testimonials[currentTestimonial].role}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Controls */}
                            <div className="flex justify-center mt-12 gap-3">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentTestimonial(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${currentTestimonial === index ? 'w-8 bg-[#CB6F4A]' : 'w-2 bg-gray-200'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
