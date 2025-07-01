import React from 'react'
import Link from 'next/link'
import { Button } from './button'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='overflow-x-hidden'>
            <nav className="fixed left-0 right-0 top-0 w-[calc(100%-2rem)] mt-4 mx-auto px-4 md:px-6 lg:px-12 py-4 flex justify-between items-center bg-white bg-opacity-50 backdrop-blur-lg shadow-sm z-50 max-w-screen-xl rounded-md">
                <Link href="/">
                    <Image
                        src="https://www.busharapanjaya.com/file/20200714163108.png"
                        alt="Logo Bus Harapan Jaya"
                        width={150}
                        height={150}
                        priority
                    />
                </Link>

                <ul className="flex gap-6 items-center ml-auto">
                    <li>
                        <Link href="/" className="text-gray-700 hover:text-red-600 transition">
                            Beranda
                        </Link>
                    </li>
                    <li>
                        <Link href="/perusahaan" className="text-gray-700 hover:text-red-600 transition">
                            Perusahaan
                        </Link>
                    </li>
                    <li>
                        <Link href="/artikel" className="text-gray-700 hover:text-red-600 transition">
                            Artikel
                        </Link>
                    </li>
                    <li>
                        <Link href="/login">
                            <Button variant="destructive">Login</Button>
                        </Link>
                    </li>
                </ul>
            </nav>

            <header
                className="w-screen h-screen flex flex-col md:flex-row justify-between items-center px-6 gap-10 max-w-screen-xl mx-auto">
                
                <div className="md:w-1/2 text-left">
                    <h3 className='text-2xl font-extrabold uppercase text-red-600'>kenapa harapan jaya?</h3>
                    <h1 className='text-4xl font-extrabold uppercase text-red-600 max-w-[500px] my-2'>perjalanan nyaman untuk setiap tujuan!</h1>
                    <p className="text-gray-600 max-w-[450px]">
                        Kami hadir untuk memberikan pengalaman perjalanan darat terbaik dan layanan ramah. 
                    </p>
                    <div className="flex mt-5 items-center gap-3">
                        <Link href='/'>
                            <Image src="/googleplay.png" alt='play store' width={150} height={150}/>
                        </Link>
                        <Button className='py-[22px] px-6 bg-transparent text-red-600 border border-red-600 hover:bg-red-600 hover:text-white transition duration-300'>Booking Sekarang</Button>

                    </div>
                </div>

                
                <div className="md:w-1/2 flex justify-center">
                    <Image src="/bus-01.png" alt="Gambar Bus Harapan Jaya" width={550} height={200}
                        className="object-contain" />
                </div>
            </header>
        </div>
    )
}

export default Navbar
