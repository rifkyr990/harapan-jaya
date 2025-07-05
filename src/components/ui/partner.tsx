'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const logos = [
    { src: '/images/partner/adi-putro.png', alt: 'Adi Putro', w: 60, h: 60 },
    { src: '/images/partner/denso.png', alt: 'Denso', w: 130, h: 130 },
    { src: '/images/partner/mercedes-benz.png', alt: 'Mercedes-Benz', w: 110, h: 110 },
    { src: '/images/partner/scania.png', alt: 'Scania', w: 110, h: 110 },
    { src: '/images/partner/bridgestone.png', alt: 'Bridgestone', w: 160, h: 160 },
]

const Partner = () => {
    return (
        <section className="w-full py-20 flex flex-col items-center space-y-12 bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Partner Perusahaan
                </h2>
                <p className="text-gray-600 text-lg">Mitra dan Partner Kami</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center items-center gap-10 px-6"
            >
                {logos.map((logo, index) => (
                <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="transition-transform duration-300"
                >
                    <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.w}
                    height={logo.h}
                    className="object-contain hover:grayscale-0 transition duration-300"
                    />
                </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Partner
