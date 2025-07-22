'use client'

import { testimoni } from '../data/services'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Testimonial() {
return (
<section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Apa Kata Penumpang?
        </h2>
        <p className="text-gray-600 text-lg mb-12">
            Testimoni nyata dari penumpang yang telah menggunakan layanan kami
        </p>

        <Swiper modules={[Pagination, Autoplay]} spaceBetween={30} slidesPerView={1} pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }} breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
        }} className="custom-swiper">
            {testimoni.map((item, index) => (
            <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-md px-6 py-8 flex flex-col justify-between h-full">
                    <p className="text-gray-700 text-left text-base leading-relaxed mb-6">
                        &quot; {item.text} &quot;
                    </p>

                    {/* Profile */}
                    <div className="flex items-center gap-4 mt-auto">
                        <Image src={item.photo} alt={`Foto ${item.name}`} width={48} height={48}
                            className="rounded-full object-cover" />
                        <div>
                            <p className="font-semibold text-gray-900">{item.name}</p>
                            <p className="text-sm text-gray-500">{item.role}</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
    </div>
</section>
)
}