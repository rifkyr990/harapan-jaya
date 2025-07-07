'use client'
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { callAPI } from '@/api/myAPI';
import { Button } from '@/components/ui/button';
import EditArticleDialog from './EditArticleDialog';
import ProtectedRoute from '../auth/ProtectedRouted';

const CATEGORY_OPTIONS = ['Technology', 'Education', 'Health', 'Entertainment'];
interface Article {
    objectId ?: string;
    title: string;
    categories: string;
    content: string;
    thumbnail: string;
    created: Date;
}

const now = new Date();

const Dashboard = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [selected, setSelected] = useState<string | null>(null);
    const [isEdit, setIsEdit] = useState(false);
    const [formData, setFormData] = useState<Article>({
        title: '',
        categories: '',
        content: '',
        thumbnail: '',
        created: now,
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
                thumbnail: '',
                created: now,
            });
            fetchArticles();

        } catch (error) {
            console.error('Gagal input artikel', error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            const isConfirm = confirm('apakah anda yakin ingin menghapus?');
            if (!isConfirm) {
                alert('hapus gagal');
            }

            await callAPI.delete(`/article/${id}`);
            fetchArticles();

        } catch (error) {
            console.error('Gagal hapus artikel', error)
        }
    }

    const handleEditClick = (id: string) => {
        setSelected(id);
        setIsEdit(true);
    }

    const handleCloseEdit = () => {
        setSelected(null);
        setIsEdit(false);
    }

    const handleUpdate = () => {
        fetchArticles();
    }
    
    return (
        <ProtectedRoute>
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
                                        <option value="">=== Pilih kategori ===</option>
                                        {CATEGORY_OPTIONS.map((val) => (
                                            <option key={val} value={val}>
                                                {val}
                                            </option>
                                        ))}
                                    </select>
                            </div>    
                        </div>

                        <div>
                            <label className="block text-sm text-gray-700 mb-1">Thumbnail</label>
                            <input type="text" name="title" value={formData.thumbnail} onChange={handleChange}
                            placeholder="e.g : https://image.com/gambar.png" className="w-full p-2 border border-gray-300 rounded" required />
                        </div>

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
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Judul
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Kategori
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Thumbnail
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Isi konten
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tanggal
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                                {articles.map((article) => (
                                    <tr key={article.objectId} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                        {article.title}
                                        </th>
                                            <td className="px-6 py-4">{article.categories}</td>
                                            <td className="px-6 py-4">{article.thumbnail}</td>
                                            <td className="px-6 py-4">{article.content}</td>
                                            <td className="px-6 py-4">{new Date(article.created).toLocaleDateString('id-ID')}</td>
                                            <td className="px-6 py-4">
                                            <Button
                                                className="font-medium bg-blue-600 hover:underline mx-2"
                                                onClick={() => handleEditClick(article.objectId!)}
                                            >
                                                Edit
                                            </Button>
                                            <Button
                                                className="font-medium bg-red-600 hover:underline"
                                                onClick={() => handleDelete(article.objectId!)}
                                                >
                                                Delete
                                            </Button>
                                            </td>
                                    </tr>
                                ))}
                            </tbody>
                            <EditArticleDialog
                                articleId={selected}
                                open={isEdit}
                                onClose={handleCloseEdit}
                                onUpdated={handleUpdate}
                            />
                        </table>
                    </div>
                </main>
            </div>
        </ProtectedRoute>
    );
};

export default Dashboard;
