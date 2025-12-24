'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Activities() {
    const activities = [
        {
            title: 'Educational Workshops',
            description: 'Hands-on learning experiences designed to enhance practical skills and industry knowledge.',
            image: '/activity-1.png',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Community Outreach',
            description: 'Direct engagement with local communities to drive positive social change and support.',
            image: '/activity-2.png',
            color: 'from-orange-500 to-red-500'
        },
        {
            title: 'Youth Conferences',
            description: 'Gatherings of young minds to discuss global challenges and innovative solutions.',
            image: '/activity-3.png',
            color: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Team Building',
            description: 'Collaborative exercises to strengthen leadership and interpersonal relationships.',
            image: '/activity-4.png',
            color: 'from-green-500 to-emerald-500'
        },
        {
            title: 'Innovation Lab',
            description: 'A dedicated space for experimenting with new ideas and developing prototypes.',
            image: '/activity-5.png',
            color: 'from-yellow-400 to-orange-500'
        },
        {
            title: 'Mentorship Program',
            description: 'Connecting aspiring youth with experienced professionals for guidance and growth.',
            image: '/activity-6.png',
            color: 'from-indigo-500 to-blue-500'
        },
    ];

    return (
        <section id="activities" className="section-padding bg-gray-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#CB6F4A 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-[#5D1F1E] mb-6">
                        Our <span className="text-[#CB6F4A]">Activities</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed molestias perferendis ducimus repellat corrupti temporibus officiis nisi quisquam quod eius dicta voluptatibus, dignissimos delectus dolorum quae, earum ullam. Laborum, veniam.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index, duration: 0.6 }}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-[450px]"
                        >
                            {/* Image Container */}
                            <div className="absolute inset-0">
                                <Image
                                    src={activity.image}
                                    alt={activity.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className={`w-12 h-1 bg-gradient-to-r ${activity.color} mb-6 transform origin-left transition-all duration-300 group-hover:w-24`} />

                                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#EECB88] transition-colors">
                                    {activity.title}
                                </h3>

                                <p className="text-white/80 text-lg leading-relaxed mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                    {activity.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
