'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from './button'
import Image from 'next/image'
import { ArrowRight, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'
import { setSignOut } from '@/lib/redux/features/userSlice'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const user = useAppSelector((state) => state.userReducer.email);
    const dispatch = useAppDispatch();

    return (
        <section className='overflow-x-hidden'>
            <nav className="fixed left-0 right-0 top-0 w-[calc(100%-2rem)] mt-4 mx-auto px-4 md:px-6 lg:px-12 py-4 flex justify-between items-center bg-white bg-opacity-70 backdrop-blur-md shadow-md z-50 max-w-screen-xl rounded-xl border border-gray-200">
                <Link href="/">
                    <Image
                        src="/images/navbar.png"
                        alt="Logo Bus Harapan Jaya"
                        width={120}
                        height={120}
                        className="object-contain md:w-[150px] transition-transform duration-300 hover:scale-105"
                        priority
                    />
                </Link>

                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                <ul className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none border-t md:border-none px-6 py-4 md:p-0 flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center text-sm md:text-base font-medium duration-300 ease-in-out transition-all z-40 ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
                    <li>
                        <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors duration-300" onClick={() => setMenuOpen(false)}>Beranda</Link>
                    </li>
                    <li>
                        <Link href="#about" className="text-gray-700 hover:text-red-600 transition-colors duration-300" onClick={() => setMenuOpen(false)}>Tentang Kami</Link>
                    </li>
                    <li>
                        <Link href="#services" className="text-gray-700 hover:text-red-600 transition-colors duration-300" onClick={() => setMenuOpen(false)}>Layanan</Link>
                    </li>
                    <li>
                        <Link href="#article" className="text-gray-700 hover:text-red-600 transition-colors duration-300" onClick={() => setMenuOpen(false)}>Artikel</Link>
                    </li>
                    <li>
                        <Link href="#contact" className="text-gray-700 hover:text-red-600 transition-colors duration-300" onClick={() => setMenuOpen(false)}>Hubungi Kami</Link>
                    </li>
                    <li className="relative">
                        {user ? (
                            <div className="relative">
                                <button
                                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                                    className="text-gray-700 hover:text-red-600 transition-colors duration-300"
                                >
                                    {user.split('@')[0]} ▼
                                </button>

                                {userMenuOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                        <ul className="py-2 text-sm text-gray-700">
                                            <li>
                                                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={() => {
                                                        dispatch(setSignOut());
                                                        setUserMenuOpen(false);
                                                        setMenuOpen(false);
                                                    }}
                                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                                                >
                                                    Keluar
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link href="/auth/login" onClick={() => setMenuOpen(false)}>
                                <Button variant="destructive" className="px-4 py-2 text-sm hover:scale-105 transition-transform duration-300 w-full md:w-auto">Login</Button>
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>

            <header className="w-full min-h-screen flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-12 gap-12 max-w-screen-xl mx-auto pt-32 rounded-lg">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 text-left space-y-4"
                >
                    <h1 className='text-3xl font-extrabold uppercase text-red-600'>Kenapa Harapan Jaya?</h1>
                    <h2 className='text-4xl md:text-5xl font-extrabold uppercase text-red-600 leading-tight'>
                        Perjalanan Nyaman <br />Untuk Setiap Tujuan!
                    </h2>
                    <p className="text-gray-600 max-w-md text-base">
                        Kami hadir untuk memberikan pengalaman perjalanan darat terbaik dan layanan ramah.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        <Link href='https://play.google.com/store/apps/details?id=com.hjpapps&pcampaignid=web_share&pli=1'>
                            <Image src="/googleplay.png" alt='play store' width={150} height={50} />
                        </Link>
                        <Link href="https://tiket.busharapanjaya.com/id">
                            <Button
                                variant="outline"
                                className='border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition duration-300 px-6 py-5 flex items-center gap-2'
                            >
                                Booking Sekarang
                                <ArrowRight size={18} />
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                {/* Kanan: Gambar */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:w-1/2 flex justify-center"
                >
                    <Image src="/bus-01.png" alt="Gambar Bus Harapan Jaya" width={600} height={300} className="object-contain" />
                </motion.div>
            </header>
        </section>
    )
}

export default Navbar
