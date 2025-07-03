import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'

const Blog = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Artikel</h2>
                <p className="text-gray-600 text-lg mb-10">Ulasan & Pengalaman Penumpang Kami</p>
            </div>

            <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
                <Card className="w-full max-w-[350px] pt-0">
                    <CardHeader className='p-0'>
                        <Image src="/images/artikel.webp" alt="bus" width={450} height={450} className='rounded-t-md' />
                    </CardHeader>
                    <CardContent>
                        <h2 className="text-xl font-bold my-3">Bus Pariwisata & Charter Terbaik untuk Setiap Kebutuhan Anda</h2>
                        <p className="text-gray-600">Temukan kenyamanan dan keamanan terbaik dalam setiap perjalanan</p>
                    </CardContent>
                    <CardFooter>
                        <p className="text-gray-400">2025-07-03</p>
                    </CardFooter>
                </Card>
                <Card className="w-full max-w-[350px] pt-0">
                    <CardHeader className='p-0'>
                        <Image src="/images/artikel2.jpg" alt="bus" width={450} height={450} className='rounded-t-md' />
                    </CardHeader>
                    <CardContent>
                        <h2 className="text-xl font-bold my-3">Bus Pariwisata & Charter Terbaik untuk Setiap Kebutuhan Anda</h2>
                        <p className="text-gray-600">Temukan kenyamanan dan keamanan terbaik dalam setiap perjalanan</p>
                    </CardContent>
                    <CardFooter>
                        <p className="text-gray-400">2025-07-03</p>
                    </CardFooter>
                </Card>
                <Card className="w-full max-w-[350px] pt-0">
                    <CardHeader className='p-0'>
                        <Image src="/images/artikel2.jpg" alt="bus" width={400} height={400} className='rounded-t-md' />
                    </CardHeader>
                    <CardContent>
                        <h2 className="text-xl font-bold my-3">Bus Pariwisata & Charter Terbaik untuk Setiap Kebutuhan Anda</h2>
                        <p className="text-gray-600">Temukan kenyamanan dan keamanan terbaik dalam setiap perjalanan</p>
                    </CardContent>
                    <CardFooter>
                        <p className="text-gray-400">2025-07-03</p>
                    </CardFooter>
                </Card>
                <Card className="w-full max-w-[350px] pt-0">
                    <CardHeader className='p-0'>
                        <Image src="/images/sejarah-bus.webp" alt="bus" width={450} height={450} className='rounded-t-md' />
                    </CardHeader>
                    <CardContent>
                        <h2 className="text-xl font-bold my-3">Bus Pariwisata & Charter Terbaik untuk Setiap Kebutuhan Anda</h2>
                        <p className="text-gray-600">Temukan kenyamanan dan keamanan terbaik dalam setiap perjalanan</p>
                    </CardContent>
                    <CardFooter>
                        <p className="text-gray-400">2025-07-03</p>
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}

export default Blog
