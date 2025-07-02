'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { testimoni } from '../data/services';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
        name: "Andi Prasetyo",
        company: "PT Maju Jaya",
        message: "Saya sangat terkesan dengan pelayanan Bus Harapan Jaya. Armada yang kami tumpangi bersih, terawat, dan sangat nyaman untuk perjalanan jauh. Sopirnya juga sangat ramah dan mengemudi dengan aman. Ini membuat perjalanan bisnis kami terasa menyenangkan. Sangat direkomendasikan untuk kebutuhan transportasi korporat.",
        image: "https://source.unsplash.com/random/100x100?person-1",
    },
    {
        name: "Rina Kurnia",
        company: "Travel Nusantara",
        message: "Kami menggunakan layanan Harapan Jaya untuk paket wisata rombongan dan hasilnya sangat memuaskan. Mulai dari pemesanan yang mudah, ketepatan waktu keberangkatan, hingga kenyamanan selama perjalanan—semuanya luar biasa. Penumpang kami sangat senang, dan kami pasti akan bekerjasama lagi ke depannya.",
        image: "https://source.unsplash.com/random/100x100?person-2",
    },
    {
        name: "Dewi Lestari",
        company: "Event Organizer",
        message: "Sebagai penyelenggara event, ketepatan waktu adalah segalanya. Bus Harapan Jaya berhasil memenuhi ekspektasi kami dengan armada yang datang tepat waktu, kondisi kendaraan prima, dan staf yang profesional. Layanan seperti ini jarang ditemukan dan sangat kami apresiasi.",
        image: "https://source.unsplash.com/random/100x100?person-3",
    },
];

export default function Testimonial() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Testimoni Penumpang</h2>
            <p className="text-gray-600 text-lg mb-10">Ulasan & Pengalaman Penumpang Kami</p>
            <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            className="w-full p-5"
            >
            {testimonials.map((item, idx) => (
                <SwiperSlide key={idx}>
                <div className="bg-white shadow-md rounded-lg max-w-2xl mx-auto text-left p-7">
                    <div className="flex items-center mb-4">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                        <p className="text-lg font-semibold text-gray-800">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.company}</p>
                    </div>
                    </div>
                    <p className="text-gray-600 italic">“{item.message}”</p>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
        </section>
    );
}
