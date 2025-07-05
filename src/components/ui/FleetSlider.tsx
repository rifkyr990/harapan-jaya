'use client';

import React, { useRef, useState } from 'react';
import fleetData from '../data/fleetData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';

type FleetKey = keyof typeof fleetData;

const FleetSlider: React.FC = () => {
    const [modalImage, setModalImage] = useState<string | null>(null);
    const [activeType, setActiveType] = useState<string>('Eksekutif');
    const [activeImages, setActiveImages] =useState<Record<FleetKey, string>>(
        () => {
        const init = {} as Record<FleetKey, string>;
        Object.keys(fleetData).forEach((type) => {
            init[type] = fleetData[type].images[0];
        });
        return init;
        }
    );

    const swiperRef = useRef<SwiperType | null>(null);
    const busTypes = Object.keys(fleetData);

    const handleTabClick = (type: string, index: number) => {
        setActiveType(type);
        swiperRef.current?.slideTo(index);
    };

    return (
        <section className="bg-gray-50 py-16 px-6 md:px-20" id="armada">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Armada Kami
            </h2>
            <p className="text-gray-600 text-lg mb-10">
            Geser untuk melihat tipe bus yang berbeda
            </p>

            {/* Tabs */}
            <div className="flex justify-center flex-wrap gap-4 mb-10">
            {busTypes.map((type, index) => (
                <button
                key={type}
                onClick={() => handleTabClick(type, index)}
                className={`px-5 py-2 rounded-full border font-medium text-sm transition duration-200 ${
                    activeType === type
                    ? 'bg-red-600 text-white shadow'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
                >
                {type}
                </button>
            ))}
            </div>

            {/* Swiper */}
            <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            speed={700}
            spaceBetween={40}
            slidesPerView={1}
            centeredSlides
            onSwiper={(swiper) => {
                swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
                setActiveType(busTypes[swiper.activeIndex]);
            }}
            className="w-full"
            >
            {busTypes.map((type) => {
                const { images, fasilitas, jurusan } = fleetData[type];
                const activeImage = activeImages[type];

                return (
                <SwiperSlide key={type}>
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-8 max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
                    {/* LEFT: Gambar & Thumbnail */}
                    <div className="w-full lg:w-1/2">
                        <div className="rounded-lg overflow-hidden shadow mb-4 cursor-zoom-in">
                        <Image
                            src={activeImage}
                            alt={`${type} utama`}
                            className="w-full h-64 object-cover rounded"
                            onClick={() => setModalImage(activeImage)}
                        />
                        </div>

                        {images.length > 1 && (
                        <div className="flex gap-3 flex-wrap">
                            {images.map((img, idx) => (
                            <Image
                                key={idx}
                                src={img}
                                alt={`${type} ${idx + 1}`}
                                className={`w-20 h-14 object-cover rounded border-2 cursor-pointer transition duration-200 ${
                                    img === activeImage
                                    ? 'border-blue-600'
                                    : 'border-transparent hover:border-blue-300'
                                }`}
                                onClick={() =>
                                    setActiveImages((prev) => ({
                                    ...prev,
                                    [type]: img,
                                }))
                                }
                            />
                            ))}
                        </div>
                        )}
                    </div>

                    {/* RIGHT: Info Fasilitas & Jurusan */}
                    <div className="w-full lg:w-1/2">
                        <div className="mb-8">
                        <h4 className="text-2xl font-semibold text-gray-800 mb-3">
                            Fasilitas
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {fasilitas.map((fas, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                                <Image
                                src={fas.icon}
                                alt={fas.nama}
                                className="w-6 h-6 shrink-0"
                                />
                                <span className="text-gray-700 text-sm">
                                {fas.nama}
                                </span>
                            </li>
                            ))}
                        </ul>
                        </div>

                        <div>
                        <h4 className="text-2xl font-semibold text-gray-800 mb-3">
                            Jurusan
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-disc list-inside text-gray-700 text-sm">
                            {jurusan.map((jur, idx) => (
                            <li key={idx}>{jur}</li>
                            ))}
                        </ul>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                );
            })}
            </Swiper>
        </div>

        {/* Modal Zoom Gambar */}
        {modalImage && (
            <div
            className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center"
            onClick={() => setModalImage(null)}
            >
            <Image
                src={modalImage}
                alt="Zoomed"
                className="max-w-3xl max-h-[90vh] rounded shadow-lg border-4 border-white transition-transform"
            />
            </div>
        )}
        </section>
    );
};

export default FleetSlider;
