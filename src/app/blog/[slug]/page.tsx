import { callAPI } from '@/api/myAPI';
import React from 'react'
import slugify from 'slugify';
import Image from 'next/image';
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ slug: string }>;
}


interface Article {
    objectId ?: string;
    title: string;
    categories: string;
    content: string;
    thumbnail: string;
    created: Date;
}
const DetailArticle = async ({ params }: Props) => {
    const { slug } = await params;

    try {
        const res = await callAPI.get('/article');
        const articles: Article[] = res.data;

        const article = articles.find(
            (item) => slugify(item.title, { lower: true }) === slug
        );

        if (!article) return notFound();

        return (
            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    {article.title}
                </h1>
                <div className="flex gap-4">
                    <span>Tanggal : {new Date(article.created).toLocaleDateString('id-ID')}</span>
                    <span className="text-sm text-red-600 font-medium uppercase tracking-wider mb-6">
                        {article.categories}
                    </span>
                </div>

                <div className="relative w-full h-64 sm:h-96 mb-8">
                    <Image
                    src={article.thumbnail || "/images/thumbnail.png"}
                    alt={article.title}
                    fill
                    className="object-cover rounded-lg"
                    />
                </div>
                <p className='text-justify'>{article.content}</p>
            </article>
        )
    } catch (error) {
        console.error("PESAN ERROR", error);

    }
}

export default DetailArticle
