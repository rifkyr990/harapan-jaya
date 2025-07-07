import React, { useEffect, useState } from 'react';
import { callAPI } from '@/api/myAPI';

const CATEGORY_OPTIONS = ['Technology', 'Education', 'Health', 'Entertainment'];
interface Article {
    objectId ?: string;
    title: string;
    categories: string;
    content: string;
    thumbnail: string;
}
const InputArticle = () => {
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
                    <input type="text" name="category" value={formData.categories} onChange={handleChange}
                        placeholder="Kategori" className="w-full p-2 border border-gray-300 rounded" required />
                </div>
            </div>

            {/* Deskripsi textarea */}
            <div>
                <label className="block text-sm text-gray-700 mb-1">Deskripsi</label>
                <textarea name="description" value={formData.content} onChange={handleChange}
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
  )
}

export default InputArticle
