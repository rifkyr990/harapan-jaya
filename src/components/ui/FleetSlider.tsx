'use client';

import React, { useRef, useState } from 'react';
import fleetData from '../data/fleetData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import type { Swiper as SwiperType } from 'swiper';

const FleetSlider: React.FC = () => {
    const [modalImage, setModalImage] = useState<string | null>(null);
    const [activeType, setActiveType] = useState<string>('Eksekutif');
    const swiperRef = useRef<SwiperType | null>(null);

    const busTypes = Object.keys(fleetData);

    const handleTabClick = (type: string, index: number) => {
        setActiveType(type);
        swiperRef.current?.slideTo(index); // ⬅️ geser Swiper ke slide yang sesuai
    };

    return (
        <section className="bg-gray-50 py-16 px-6 md:px-20" id="armada">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Armada Kami</h2>
            <p className="text-gray-600 text-lg mb-10">Geser untuk melihat tipe bus yang berbeda</p>

            {/* Tabs */}
            <div className="flex justify-center flex-wrap gap-4 mb-10">
            {busTypes.map((type, index) => (
                <button
                key={type}
                onClick={() => handleTabClick(type, index)}
                className={`px-5 py-2 rounded-full border font-semibold transition ${
                    activeType === type
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-100'
                }`}
                >
                {type}
                </button>
            ))}
            </div>

            {/* Swiper */}
            <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={40}
            slidesPerView={1}
            centeredSlides={true}
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
                setActiveType(busTypes[swiper.activeIndex]);
            }}
            className="w-full"
            >
            {busTypes.map((type) => {
                const { images, fasilitas } = fleetData[type];

                return (
                <SwiperSlide key={type}>
                    <div className="flex flex-col items-center justify-center w-full">
                        
                        {/* Gambar-gambar */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 max-w-6xl">
                        {images.map((img, idx) => (
                            <div
                            key={idx}
                            className="rounded-lg overflow-hidden shadow-md cursor-pointer"
                            onClick={() => setModalImage(img)}
                            >
                            <img
                                src={img}
                                alt={`${type} ${idx + 1}`}
                                className="h-auto w-max-6xl object-fit hover:scale-105 transition-transform duration-400 transition-"
                            />
                            </div>
                        ))}
                        </div>

                        {/* Fasilitas */}
                        <h4 className="text-xl font-semibold mb-2 text-gray-700 text-center">Fasilitas:</h4>
                        <ul className="list-disc pl-6 gap-3 text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-1 max-w-3xl text-left">
                        {fasilitas.map((f, i) => (
                            <li key={i} className='mx-2'>{f}</li>
                        ))}
                        </ul>
                    </div>
                </SwiperSlide>

                );
            })}
            </Swiper>
        </div>

        {/* Modal Zoom Gambar */}
        {modalImage && (
            <div
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
            onClick={() => setModalImage(null)}
            >
            <img
                src={modalImage}
                alt="Zoomed"
                className="max-w-3xl max-h-[90vh] rounded shadow-lg border-4 border-white"
            />
            </div>
        )}
        </section>
    );
};

export default FleetSlider;
