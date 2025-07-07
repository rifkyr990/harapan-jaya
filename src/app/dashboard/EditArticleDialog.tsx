'use client';

import React, { useEffect, useState } from 'react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { callAPI } from '@/api/myAPI';

interface Article {
    objectId?: string;
    title: string;
    categories: string;
    content: string;
    thumbnail: string;
    created: Date;
}

const CATEGORY_OPTIONS = ['Technology', 'Education', 'Health', 'Entertainment'];

interface Props {
    articleId: string | null;
    open: boolean;
    onClose: () => void;
    onUpdated: () => void;
}

const EditArticleDialog: React.FC<Props> = ({ articleId, open, onClose, onUpdated }) => {
    const [formData, setFormData] = useState<Article>({
        title: '',
        categories: '',
        content: '',
        thumbnail: '',
        created: new Date(),
    });

    useEffect(() => {
        if (articleId) {
        callAPI.get(`/article/${articleId}`).then((res) => {
            setFormData(res.data);
        });
        }
    }, [articleId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!articleId) return;

        try {
            await callAPI.put(`/article/${articleId}`, formData);
            alert('Artikel berhasil diperbarui');
            onUpdated();
            onClose();
        
        } catch (error) {
        console.error('Gagal update artikel', error);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Edit Artikel</DialogTitle>
                    <DialogDescription>Perbarui informasi artikel di sini.</DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label className="text-sm">Judul</label>
                        <input name="title" value={formData.title} onChange={handleChange} className="w-full border p-2 rounded" />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Thumbnail</label>
                        <input type="text" name="thumbnail" value={formData.thumbnail} onChange={handleChange}
                        placeholder="e.g : https://image.com/gambar.png" className="w-full p-2 border border-gray-300 rounded" required />
                    </div>
                    <div>
                        <label className="text-sm">Kategori</label>
                        <select name="categories" value={formData.categories} onChange={handleChange} className="w-full border p-2 rounded">
                            <option value="">=== Pilih Kategori ===</option>
                            {CATEGORY_OPTIONS.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="text-sm">Isi Artikel</label>
                        <textarea name="content" value={formData.content} onChange={handleChange} rows={5} className="w-full border p-2 rounded" />
                    </div>
                    <DialogFooter className="mt-4 flex justify-end gap-2">
                        <DialogClose asChild>
                        <Button type="button" variant="ghost">Batal</Button>
                        </DialogClose>
                        <Button type="submit" className="bg-green-600 text-white hover:bg-green-700">Simpan</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default EditArticleDialog;
