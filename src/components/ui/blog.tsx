'use client';

import React from 'react';
import Image from 'next/image';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';
import { Button } from './button';

const articles = [
    {
        title: 'Bus Pariwisata & Charter Terbaik untuk Setiap Kebutuhan Anda',
        image: '/images/artikel.webp',
        date: '2025-07-03',
        desc: 'Temukan kenyamanan dan keamanan terbaik dalam setiap perjalanan.',
    },
    {
        title: 'Tips Memilih Bus Pariwisata Berkualitas untuk Liburan Anda',
        image: '/images/artikel2.jpg',
        date: '2025-07-03',
        desc: 'Cara memilih armada bus yang nyaman, aman, dan sesuai kebutuhan.',
    },
    {
        title: 'Mengungkap Sejarah Transportasi Bus di Indonesia',
        image: '/images/sejarah-bus.webp',
        date: '2025-07-03',
        desc: 'Perjalanan panjang bus sebagai moda transportasi utama di Indonesia.',
    },
    {
        title: '5 Destinasi Wisata Populer dengan Layanan Bus Terbaik',
        image: '/images/artikel2.jpg',
        date: '2025-07-03',
        desc: 'Rekomendasi wisata yang bisa dijangkau dengan layanan bus berkualitas.',
    },
    ];

    const Blog = () => {
        return (
        <section id='article' className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Artikel</h2>
                <p className="text-gray-600 text-lg">Ulasan & Pengalaman Penumpang Kami</p>
            </div>

            <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {articles.map((item, idx) => (
                        <Card
                            key={idx}
                            className="w-full max-w-full transition-shadow duration-300 hover:shadow-lg cursor-pointer"
                        >
                        <CardHeader className="p-0">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={450}
                                height={300}
                                className="rounded-t-md object-cover h-56 w-full"
                            />
                        </CardHeader>

                        <CardContent>
                            <h3 className="text-lg font-semibold my-3 line-clamp-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 line-clamp-2">{item.desc}</p>
                        </CardContent>

                        <CardFooter>
                            <p className="text-xs text-gray-400">{item.date}</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div className="flex justify-center items-center mt-10 mb-0">
                <Button className='p-6 bg-red-600'>Show More</Button>
            </div>
        </section>
    );
};

export default Blog;
