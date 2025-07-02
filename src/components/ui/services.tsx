import React from 'react'
import {services} from '../data/services.js';

const Services = () => {
    return (
        <section>
            <div className="max-w-7xl mx-auto">
                <h2 className='text-3xl font-bold text-center mb-4'>Layanan Kami</h2>
                <p className='text-center text-gray-500 mb-12 max-w-2xl mx-auto'>
                    Kami menyediakan berbagai layanan transportasi yang aman, nyaman, dan profesional.
                </p>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, idx) => (
                        <div
                        key={idx}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                        >
                            <img
                                src={service.images}
                                alt={service.title}
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                                <p className="text-gray-600 text-sm">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
