import Link from 'next/link';
import React from 'react';
import {
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="py-10 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                {/* Navigasi Cepat */}
                <div>
                    <h4 className="text-xl font-semibold mb-4 text-red-600">Navigasi</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li><a href="#beranda" className="hover:underline">Beranda</a></li>
                        <li><a href="#tentang" className="hover:underline">Tentang Kami</a></li>
                        <li><a href="#layanan" className="hover:underline">Layanan</a></li>
                        <li><a href="#kontak" className="hover:underline">Kontak</a></li>
                    </ul>
                </div>

                {/* Sosial Media */}
                <div className="text-center">
                    <h4 className="text-xl font-semibold mb-4">Ikuti Kami</h4>
                    <div className="flex justify-center space-x-5 text-2xl">
                        <Link
                            href="https://www.instagram.com/busharapanjaya.official/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-pink-500"
                            aria-label="Instagram Harapan Jaya"
                        >
                            <FaInstagram />
                        </Link>

                        <Link
                            href="https://www.tiktok.com/@ptharapanjayaprima?lang=id-ID"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-gray-300"
                            aria-label="TikTok Harapan Jaya"
                        >
                            <FaTiktok />
                        </Link>

                        <Link
                            href="https://web.facebook.com/Ptharapanjayaprima/?_rdc=1&_rdr#"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-blue-600"
                            aria-label="Facebook Harapan Jaya"
                        >
                            <FaFacebook />
                        </Link>

                        <Link
                            href="https://www.youtube.com/@BusHarapanJayaOfficial"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-red-600"
                            aria-label="YouTube Harapan Jaya"
                        >
                            <FaYoutube />
                        </Link>
                    </div>
                </div>

                <div className="text-center md:text-right text-sm text-gray-600">
                    <p>© {year} PT. Harapan Jaya Prima.</p>
                    <p>All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
