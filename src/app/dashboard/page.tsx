'use client'
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import InputArticle from './InputArticle';
import { callAPI } from '@/api/myAPI';

const CATEGORY_OPTIONS = ['Technology', 'Education', 'Health', 'Entertainment'];
interface Article {
    objectId ?: string;
    title: string;
    categories: string;
    content: string;
    thumbnail: string;
}


const Dashboard = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [formData, setFormData] = useState<Article>({
        title: '',
        categories: CATEGORY_OPTIONS[0],
        content: '',
        thumbnail: '',
    });

    const fetchArticles = async () => {
        try {
            const res = await callAPI.get('/article');
            setArticles(res.data);

        } catch (error) {
            console.error('gagal fetch article', error);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const {name, value} = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await callAPI.post('/article', formData);
            setFormData({
                title: '',
                categories: CATEGORY_OPTIONS[0],
                content: '',
                thumbnail: ''
            });
            fetchArticles();

        } catch (error) {
            console.error('Gagal input artikel', error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            confirm('apakah anda yakin ingin menghapus?');
            if (!confirm) {
                alert('hapus gagal');
            }

            await callAPI.delete(id);
        } catch (error) {
            console.error('Gagal hapus artikel', error)
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <Sidebar/>

            {/* Main Content */}
            <main className="flex-1 p-6">
                {/* Header */}
                <Header/>
                {/* input */}
                <div className="bg-white p-6 rounded-lg shadow mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Tambah Artikel</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Baris input Judul dan Kategori */}
                    <div className="flex flex-col md:flex-row md:gap-4">
                        <div className="flex-1">
                            <label className="block text-sm text-gray-700 mb-1">Judul</label>
                            <input type="text" name="title" value={formData.title} onChange={handleChange}
                                placeholder="Judul Artikel" className="w-full p-2 border border-gray-300 rounded" required />
                        </div> 
                        <div className="flex-1 mt-4 md:mt-0">
                            <label className="block text-sm text-gray-700 mb-1">Kategori</label>
                                <select
                                    name="categories"
                                    id="categories"
                                    value={formData.categories}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                >
                                    {CATEGORY_OPTIONS.map((val) => (
                                        <option key={val} value={val}>
                                            {val}
                                        </option>
                                    ))}
                                </select>
                        </div>    
                    </div>

            {/* Deskripsi textarea */}
                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Deskripsi</label>
                        <textarea name="content" value={formData.content} onChange={handleChange}
                            placeholder="Deskripsi singkat" rows={4}
                            className="w-full p-2 border border-gray-300 rounded resize-none" required />
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                                >
                            Tambah
                        </button>
                    </div>
                </form>
            </div>
                {/* list artikel */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article) => (
                        <div key={article.objectId} className="bg-white rounded-lg shadow p-5 hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h3>
                            <span className="inline-block text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded mb-2">
                                {article.categories}
                            </span>
                            <p className="text-gray-600 mb-4">{article.content}</p>
                            <div className="text-sm text-gray-500">Tanggal: </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
