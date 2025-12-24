'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronDown, CheckCircle } from 'lucide-react';

export default function Events() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const faqs = [
        {
            question: 'What is the event fee?',
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. The event fee varies depending on the program. Please contact us for specific pricing details.',
        },
        {
            question: 'How do I register for events?',
            answer:
                'You can register through our website or contact us directly via WhatsApp or email. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            question: 'Are there any prerequisites?',
            answer:
                'Most of our events are open to all youth participants. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Specific requirements will be mentioned in the event details.',
        },
        {
            question: 'Can I volunteer as a committee member?',
            answer:
                'Absolutely! We welcome enthusiastic volunteers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reach out to us to learn about current opportunities.',
        },
    ];

    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'Participant 2023',
            quote:
                'Amazing experience! Lorem ipsum dolor sit amet, consectetur adipiscing elit. The workshops were incredibly insightful and the community was so welcoming.',
            avatar: '👩',
        },
        {
            name: 'Michael Chen',
            role: 'Participant 2023',
            quote:
                'Life-changing event! Lorem ipsum dolor sit amet. I gained valuable skills and made lasting connections with like-minded individuals.',
            avatar: '👨',
        },
        {
            name: 'Aisha Rahman',
            role: 'Committee Member',
            quote:
                'Being part of Formabaya has been transformative. Lorem ipsum dolor sit amet, consectetur adipiscing elit. The impact we create together is truly inspiring.',
            avatar: '👩‍🎓',
        },
    ];

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <section
            id="events"
            className="section-padding gradient-white-navy"
            ref={ref}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-blue-900 text-center mb-4">
                        Upcoming <span className="text-green-500">Events</span>
                    </h2>
                    <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Join our exciting events and be part of something extraordinary!
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Event Poster */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/event-poster.png"
                                alt="Upcoming Event"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>

                        {/* Event Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="space-y-6"
                        >
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Join our exciting events and be part of a transformative
                                experience! Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua.
                            </p>

                            <div>
                                <h3 className="text-3xl font-bold text-blue-900 mb-4">
                                    How to Join
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        'Register via our website',
                                        'Fill out the registration form',
                                        'Wait for confirmation email',
                                        'Attend the event and enjoy!',
                                    ].map((step, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-lg text-gray-700">{step}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    {/* FAQ Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="mb-16"
                    >
                        <h3 className="text-4xl font-bold text-blue-900 text-center mb-8">
                            Frequently Asked Questions
                        </h3>
                        <div className="max-w-3xl mx-auto space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-md overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <span className="text-lg font-semibold text-blue-900 text-left">
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-green-500 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            height: openFaq === index ? 'auto' : 0,
                                            opacity: openFaq === index ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-6 pb-4 text-lg text-gray-600">{faq.answer}</p>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Testimonials */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <h3 className="text-4xl font-bold text-blue-900 text-center mb-8">
                            What People Say
                        </h3>
                        <div className="max-w-3xl mx-auto">
                            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
                                <div className="text-6xl text-green-500 absolute top-4 left-4 opacity-20">
                                    "
                                </div>
                                <motion.div
                                    key={currentTestimonial}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative z-10"
                                >
                                    <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                                        {testimonials[currentTestimonial].quote}
                                    </p>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-green-500 rounded-full flex items-center justify-center text-2xl mr-4">
                                            {testimonials[currentTestimonial].avatar}
                                        </div>
                                        <div>
                                            <div className="text-lg font-bold text-blue-900">
                                                {testimonials[currentTestimonial].name}
                                            </div>
                                            <div className="text-base text-gray-600">
                                                {testimonials[currentTestimonial].role}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Navigation Buttons */}
                                <div className="flex justify-center mt-8 space-x-4">
                                    <button
                                        onClick={prevTestimonial}
                                        className="w-10 h-10 rounded-full bg-blue-900 text-white hover:bg-green-500 transition-colors duration-300 flex items-center justify-center"
                                        aria-label="Previous testimonial"
                                    >
                                        ←
                                    </button>
                                    <button
                                        onClick={nextTestimonial}
                                        className="w-10 h-10 rounded-full bg-blue-900 text-white hover:bg-green-500 transition-colors duration-300 flex items-center justify-center"
                                        aria-label="Next testimonial"
                                    >
                                        →
                                    </button>
                                </div>

                                {/* Dots Indicator */}
                                <div className="flex justify-center mt-4 space-x-2">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentTestimonial(index)}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentTestimonial === index
                                                ? 'bg-green-500 w-8'
                                                : 'bg-gray-300'
                                                }`}
                                            aria-label={`Go to testimonial ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
