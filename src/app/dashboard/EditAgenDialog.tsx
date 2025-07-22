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

interface Agen {
    objectId ?: string;
    kota: string;
    alamat: string;
    wilayah: string;
    nomor: string;
}

interface Props {
    agenId: string | null;
    open: boolean;
    onClose: () => void;
    onUpdated: () => void;
}
const WILAYAH_OPTION = ['jawa barat', 'jawa tengah', 'jawa timur'];

const EditAgenDialog: React.FunctionComponent<Props> = ({ agenId, open, onClose, onUpdated }) => {
    const [formData, setFormData] = useState<Agen>({
            kota: '',
            alamat: '',
            wilayah: '',
            nomor: '',
    });

    useEffect(() => {
        if (agenId) {
            callAPI.get(`/agen/${agenId}`).then((res) => {
                setFormData(res.data);
            })
        }
    }, [agenId]);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await callAPI.put(`/agen/${agenId}`, formData);
            alert('Berhasil diperbaharui');
            onUpdated();
            onClose();

        } catch (error) {
            console.error('Gagal update agen', error);
        }
    }
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Edit Artikel</DialogTitle>
                    <DialogDescription>Perbarui informasi artikel di sini.</DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label className="text-sm">Kota</label>
                        <input name="title" value={formData.kota} onChange={handleChange} className="w-full border p-2 rounded" />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Nomor</label>
                        <input type="number" name="nomor" value={formData.nomor} onChange={handleChange}
                        placeholder="e.g : 089544516627" className="w-full p-2 border border-gray-300 rounded" required />
                    </div>
                    <div>
                        <label className="text-sm">Kategori</label>
                        <select name="categories" value={formData.wilayah} onChange={handleChange} className="w-full border p-2 rounded">
                            <option value="">=== Pilih Wilayah ===</option>
                            {WILAYAH_OPTION.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="text-sm">Isi Alamat</label>
                        <textarea name="content" value={formData.alamat} onChange={handleChange} rows={5} className="w-full border p-2 rounded" />
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
    )
}

export default EditAgenDialog
