'use client'
import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const AboutUs = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    })
    return (
        <div>
            <section className="bg-white py-16 px-6 md:px-20" id="about" ref={ref}>
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="w-full">
                        <Image src="/about.jpg" alt="Bus Company"
                            className="rounded-lg shadow-lg w-full object-cover" width={100} height={100} />
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            Tentang Kami
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                            Kami adalah perusahaan transportasi bus antar kota dan provinsi yang telah beroperasi sejak
                            2005. Dengan armada modern dan sopir berpengalaman, kami berkomitmen memberikan perjalanan
                            yang aman, nyaman, dan tepat waktu.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Didukung oleh jaringan luas dan layanan pelanggan 24 jam, kami siap melayani penumpang dari
                            berbagai kota besar di Indonesia.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div>
                                <p className="text-3xl font-bold text-red-600">
                                    {inView && <CountUp end={20} duration={2} />}+</p>
                                <p className="text-gray-700">Tahun Pengalaman</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-red-600">
                                    {inView && <CountUp end={50} duration={2} />}+
                                </p>
                                <p className="text-gray-700">Rute AKAP</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-red-600">
                                    {inView && <CountUp end={200} duration={2} />}+
                                </p>
                                <p className="text-gray-700">Unit Armada</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-red-600">
                                    {inView && <CountUp end={1} duration={2} />}M+
                                </p>
                                <p className="text-gray-700">Penumpang Terlayani</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
