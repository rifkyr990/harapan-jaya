'use client'

import { callAPI } from '@/api/myAPI';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useState, use } from 'react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';

interface Article {
    objectId ?: string;
    title: string;
    categories: string;
    content: string;
    thumbnail: string;
    created: Date;
}

const CATEGORY_OPTIONS = ['Technology', 'Education', 'Health', 'Entertainment'];

const now = new Date();

const EditArticle = ({ params } : { params: Promise<{ id: string }> }) => {
    const {id} = use(params);
    const [formData, setFormData] = useState<Article>({
        title: '',
        categories: CATEGORY_OPTIONS[0],
        content: '',
        thumbnail: '',
        created: now,
    });

    const [dialog, setDialog] = useState(true);
    const Router = useRouter();

    useEffect(() => {
        const fetchDataArticle = async () => {
            try {
                const res = await callAPI.get(`/article/${id}`);
                setFormData(res.data);

            } catch (error) {
                console.error('BACA ERROR', error);
            }
        };

        fetchDataArticle();
    }, [id])

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await callAPI.put(`/article/${id}`, formData);
            alert('Artikel berhasil diperbaharui');
            Router.push('/dashboard');
        } catch (error) {
            console.error('ERORR', error);
            alert('terjadi kesalahan input');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-blend-overlay bg-opacity-50'>
            <Dialog open={dialog} onOpenChange={setDialog}>
            <DialogContent className='max-w-2xl'>
                <DialogHeader>
                    <DialogTitle>Edit Artikel</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleUpdate} className='flex flex-col gap-4'>
                    <div>
                        <label className="text-sm text-gray-600">Judul</label>
                        <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Judul artikel"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        required
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Kategori</label>
                        <select
                        name="categories"
                        value={formData.categories}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                        >
                        {CATEGORY_OPTIONS.map((cat) => (
                            <option key={cat} value={cat}>
                            {cat}
                            </option>
                        ))}
                        </select>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Isi Artikel</label>
                        <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        placeholder="Tulis isi artikel di sini"
                        rows={5}
                        className="w-full p-2 border border-gray-300 rounded mt-1 resize-none"
                        required
                        />
                    </div>

                    <DialogFooter className="flex justify-end gap-2 mt-4">
                        <DialogClose asChild>
                        <Button type="button" variant="ghost" onClick={() => Router.push('/dashboard')}>
                            Batal
                        </Button>
                        </DialogClose>
                        <Button type="submit" className="bg-green-600 text-white hover:bg-green-700">
                        Simpan Perubahan
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
        </div>
    )
}

export default EditArticle
