'use client';
import { testimoni } from '../data/services';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function Testimonial() {
    return (
        <section className=" px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Testimoni Penumpang</h2>
                <p className="text-gray-600 text-lg mb-25">Ulasan & Pengalaman Penumpang Kami</p>
                
                <section className='relative my-10'>
                    <div className="flex space-x-6 w-max animate-marquee">
                        <div className="flex flex-wrap gap-6 justify-center overflow-visible">
                            {testimoni.map((item, index) => (
                                <div key={index}
                                    className="relative max-w-[400px] bg-white shadow-xl rounded-lg pt-16 px-6 pb-6 flex flex-col">
                                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-50">
                                        <Image src={item.photo} alt="photo" width={80} height={80}
                                            className="rounded-full shadow-md object-cover" />
                                    </div>

                                    <p className="text-gray-700 italic text-center mb-4 mt-2 flex-grow">
                                        &quot;{item.text}
                                    </p>

                                    <div className="text-center mt-auto">
                                        <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                                        <p className="text-gray-500 text-sm">{item.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}
