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
import { callAPI } from '@/api/myAPI';
import { useEffect, useState } from 'react';

interface Article {
    objectId ?: string;
    title: string;
    categories: string;
    content: string;
    thumbnail: string;
    created: Date;
}

const Blog = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    const fetchArticles = async () => {
        try {
            const res = await callAPI.get('/article');
            setArticles(res.data);
        } catch (error) {
            console.error('gagal fetch article', error);
        }
    }

    useEffect(() => {
        fetchArticles();
    }, []);

    return (
        <section id='article' className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Artikel</h2>
                <p className="text-gray-600 text-lg">Jelajahi berita, inovasi, dan update terbaru tentang layanan transportasi bus kami yang terpercaya</p>
            </div>
                <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {articles.map((article) => (
                        <Card
                            key={article.objectId}
                            className="w-full max-w-full transition-shadow duration-300 hover:shadow-lg cursor-pointer"
                            >
                            <CardHeader className="p-0">
                                <Image
                                    src={article.thumbnail}
                                    alt={article.title}
                                    width={450}
                                    height={300}
                                    className="rounded-t-md object-cover h-56 w-full"
                                />
                            </CardHeader>

                            <CardContent>
                                <h3 className="text-lg font-semibold my-3 line-clamp-2">
                                    {article.title}
                                </h3>
                                <p className="text-sm text-gray-600 line-clamp-2">{article.content}</p>
                            </CardContent>

                            <CardFooter>
                                <p className="text-xs text-gray-400">{new Date(article.created).toLocaleDateString('id-ID')}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className="flex justify-center items-center mt-10 mb-0">
                    {articles.length >= 5 && (
                        <Button className='p-6 bg-red-600'>Show More</Button>
                    )}
                </div>
            </section>
        );
    };

export default Blog;