'use client'
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';
import { callAPI } from '@/api/myAPI';
import { Button } from '@/components/ui/button';
import EditArticleDialog from '../EditArticleDialog';
import ProtectedRoute from '../../auth/ProtectedRouted';

const CATEGORY_OPTIONS = ['Tips', 'Diskon', 'News'];
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
            <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
                {/* Sidebar */}
                <Sidebar/>
                {/* Main Content */}
                <main className="flex-1 p-4 sm:p-6">
                    {/* Header */}
                    <Header/>
                    {/* Form Section */}
                    <section className="bg-white p-4 sm:p-6 rounded-lg shadow mb-8">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Tambah Artikel</h3>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            {/* Judul & Kategori */}
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm text-gray-700 mb-1">Judul</label>
                                    <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="Judul Artikel"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm text-gray-700 mb-1">Kategori</label>
                                    <select
                                    name="categories"
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
                                <input
                                    type="text"
                                    name="thumbnail"
                                    value={formData.thumbnail}
                                    onChange={handleChange}
                                    placeholder="e.g : https://image.com/gambar.png"
                                    className="w-full p-2 border border-gray-300 rounded"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-700 mb-1">Deskripsi</label>
                                <textarea
                                    name="content"
                                    value={formData.content}
                                    onChange={handleChange}
                                    placeholder="Deskripsi singkat"
                                    rows={4}
                                    className="w-full p-2 border border-gray-300 rounded resize-none"
                                    required
                                />
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
                    </section>

                    {/* Table Section */}
                    <section className="relative overflow-x-auto shadow-md rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th className="px-4 py-3">Judul</th>
                                <th className="px-4 py-3">Kategori</th>
                                <th className="px-4 py-3">Thumbnail</th>
                                <th className="px-4 py-3">Isi konten</th>
                                <th className="px-4 py-3">Tanggal</th>
                                <th className="px-4 py-3">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {articles.map((article) => (
                                <tr key={article.objectId} className="bg-white border-b">
                                <td className="px-4 py-2 max-w-[120px] truncate">{article.title}</td>
                                <td className="px-4 py-2">{article.categories}</td>
                                <td className="px-4 py-2 max-w-[150px] truncate">{article.thumbnail}</td>
                                <td className="px-4 py-2 max-w-[150px] truncate">{article.content}</td>
                                <td className="px-4 py-2">{new Date(article.created).toLocaleDateString('id-ID')}</td>
                                <td className="px-4 py-2 flex flex-col sm:flex-row gap-2">
                                    <Button className="bg-blue-600 text-white px-2 py-1" onClick={() => handleEditClick(article.objectId!)}>
                                    Edit
                                    </Button>
                                    <Button className="bg-red-600 text-white px-2 py-1" onClick={() => handleDelete(article.objectId!)}>
                                    Delete
                                    </Button>
                                </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </section>

                    <EditArticleDialog
                    articleId={selected}
                    open={isEdit}
                    onClose={handleCloseEdit}
                    onUpdated={handleUpdate}
                    />
                </main>
            </div>

        </ProtectedRoute>
    );
};

export default Dashboard;
