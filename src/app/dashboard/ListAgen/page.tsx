'use client'

import Sidebar from '../Sidebar';
import Header from '../Header';
import { callAPI } from '@/api/myAPI';
import React, { useEffect, useState } from 'react'
import ProtectedRoute from '../../auth/ProtectedRouted';
import { Button } from '@/components/ui/button';
import EditAgenDialog from '../EditAgenDialog';

const WILAYAH_OPTION = ['jawa barat', 'jawa tengah', 'jawa timur'];
interface Agen {
    objectId ?: string;
    kota: string;
    alamat: string;
    wilayah: string;
    nomor: string
}
    const DaftarAgen = () => {
        const [agen, setAgen] = useState<Agen[]>([]);
        const [selected, setSelected] = useState<string | null>(null);
        const [isEdit, setIsEdit] = useState(false);
        const [formData, setFormData] = useState<Agen>({
            kota: '',
            alamat: '',
            wilayah: '',
            nomor: '',
        });

        const fetchAgen = async () => {
            try {
                const res = await callAPI.get('/agen');
                setAgen(res.data);

            } catch (error) {
                console.error('ERROR', error);
            }
        }

        const handleChange = (
                e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
        ) => {
            const {name, value} = e.target;
            setFormData(prev => ({ ...prev, [name]: value }));
        }

        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            try {
                await callAPI.post('/agen', formData);
                setFormData({
                    kota: '',
                    alamat: '',
                    wilayah: '',
                    nomor: '',
                });
                fetchAgen();

            } catch (error) {
                console.error('ERROR', error);
            }
        }

        const handleDelete = async (id: string) => {
            try {
                const isConfirm = confirm('Apakah anda yakin ini menghapus?');
                if (!isConfirm) {
                    alert('Hapus dibatalkan');
                }
                await callAPI.delete(`/agen/${id}`);
                fetchAgen();
            } catch (error) {
                console.error('ERROR', error);
            }
        }

        useEffect(() => {
            fetchAgen();
        }, []);

        const handleEditClick = (id: string) => {
            setSelected(id);
            setIsEdit(true);
        }

        const handleCloseEdit = () => {
            setSelected(null);
            setIsEdit(false);
        }
        const handleUpdate = () => {
            fetchAgen();
        }

        return (
            <ProtectedRoute>
                <div className="min-h-screen bg-gray-100 flex">
                <Sidebar/>
                <main className="flex-1 p-6">
                    <Header/>
                    <div className="bg-white p-6 rounded-lg shadow mb-8">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Tambah Agen</h3>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div className="flex flex-col md:flex-row md:gap-4">
                                    <div className="flex-1">
                                        <label className="block text-sm text-gray-700 mb-1">Kota</label>
                                        <input type="text" name="kota" value={formData.kota} onChange={handleChange}
                                            placeholder="Masukan Kota" className="w-full p-2 border border-gray-300 rounded" required />
                                    </div> 
                                    <div className="flex-1 mt-4 md:mt-0">
                                        <label className="block text-sm text-gray-700 mb-1">Wilayah</label>
                                            <select
                                                name="wilayah"
                                                id="wilayah"
                                                value={formData.wilayah}
                                                onChange={handleChange}
                                                className="w-full p-2 border border-gray-300 rounded"
                                            >
                                                <option value="">=== Pilih wilayah ===</option>
                                                {WILAYAH_OPTION.map((val) => (
                                                    <option key={val} value={val}>
                                                        {val}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>    
                                    </div>
                                <div>
                                    <label className="block text-sm text-gray-700 mb-1">Nomor Telepon</label>
                                    <input type="number" value={formData.nomor} onChange={handleChange} name="nomor" id="nomor" placeholder='e.g : 62877535271877' className="w-full p-2 border border-gray-300 rounded resize-none" required/>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-700 mb-1">Alamat</label>
                                    <textarea name="alamat" value={formData.alamat} onChange={handleChange}
                                        placeholder="Alamat lengkap" rows={4}
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
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                <th scope="col" className="px-6 py-3">Kota</th>
                                <th scope="col" className="px-6 py-3">Alamat</th>
                                <th scope="col" className="px-6 py-3">Wilayah</th>
                                <th scope="col" className="px-6 py-3">Nomor</th>
                                <th scope="col" className="px-6 py-3">Aksi</th>
                                </tr>
                            </thead>
                                <tbody>
                                    <tr>
                                    <td colSpan={5}>
                                        <div className="max-h-[300px] overflow-y-auto">
                                            <table className="w-full">
                                                <tbody>
                                                    {agen.map((data) => (
                                                        <tr key={data.objectId} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            {data.kota}
                                                        </th>
                                                        <td className="px-6 py-4 max-w-[170px] truncate overflow-hidden whitespace-nowrap">{data.alamat}</td>
                                                        <td className="px-6 py-4 ">
                                                            {data.wilayah}
                                                        </td>
                                                        <td className="px-6 py-4">{data.nomor}</td>
                                                        <td className="px-6 py-4">
                                                            <Button
                                                                className="font-medium bg-blue-600 hover:underline mx-2 cursor-pointer"
                                                                onClick={() => handleEditClick(data.objectId!)}
                                                            >
                                                            Edit
                                                            </Button>
                                                            <Button
                                                                className="font-medium bg-red-600 hover:bg-blue-500 cursor-pointer"
                                                                onClick={() => handleDelete(data.objectId!)}
                                                            >
                                                            Delete
                                                            </Button>
                                                        </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            <EditAgenDialog
                                agenId={selected}
                                open={isEdit}
                                onClose={handleCloseEdit}
                                onUpdated={handleUpdate}
                            />
                        </table>
                    </div>
                </main>
            </div>
            </ProtectedRoute>
        )
    }
    
    export default DaftarAgen
    