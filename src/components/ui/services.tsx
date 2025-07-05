import React from 'react';
import { services } from '../data/services.js';
import Image from 'next/image.js';

const Services = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
                    Layanan Kami
                </h2>
                <p className="text-center text-gray-500 text-lg mb-12 max-w-2xl mx-auto">
                    Kami menyediakan berbagai layanan transportasi yang aman, nyaman, dan profesional untuk memenuhi kebutuhan Anda.
                </p>

                <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                        >
                            <div className="overflow-hidden">
                                <Image
                                    src={service.images}
                                    alt={service.title}
                                    className="h-56 w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
