'use client'
import { callAPI } from '@/api/myAPI';
import React, { useEffect, useState } from 'react';

interface Agen {
    objectId?: string;
    kota: string;
    alamat: string;
    wilayah: string;
    nomor: string;
}

const DaftarAgen = () => {
    const [agen, setAgen] = useState<Agen[]>([]);

    const fetchAgen = async () => {
        try {
        const res = await callAPI.get('/agen');
        setAgen(res.data);
        } catch (error) {
        console.error('ERROR', error);
        }
    };

    useEffect(() => {
        fetchAgen();
    }, []);

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Daftar Agen Harapan Jaya</h2>
        <div className="overflow-x-auto shadow rounded-lg border border-gray-200 bg-white">
            <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                <tr>
                <th className="px-6 py-3">No</th>
                <th className="px-6 py-3">Kota</th>
                <th className="px-6 py-3">Wilayah</th>
                <th className="px-6 py-3">Alamat</th>
                <th className="px-6 py-3">Nomor Telepon</th>
                </tr>
            </thead>
            <tbody>
                {agen.length > 0 ? (
                agen.map((item, index) => (
                    <tr key={item.objectId || index} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{item.kota}</td>
                    <td className="px-6 py-4">{item.wilayah}</td>
                    <td className="px-6 py-4">{item.alamat}</td>
                    <td className="px-6 py-4">{item.nomor}</td>
                    </tr>
                ))
                ) : (
                <tr>
                    <td colSpan={5} className="text-center px-6 py-4 text-gray-500">
                    Data agen belum tersedia.
                    </td>
                </tr>
                )}
            </tbody>
            </table>
        </div>
        </div>
    );
};

export default DaftarAgen;
