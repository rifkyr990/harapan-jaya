import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="bg-white py-20 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Hubungi Kami</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Info Kontak */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-red-600">Alamat Kantor</h3>
                            <p className="text-gray-600">Jl. Mayor Sujadi No.23A, Jepun, Kec. Tulungagung, Kabupaten Tulungagung, Jawa Timur 66218</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-red-600">Telepon</h3>
                            <p className="text-gray-600">(0355) 321620, 321624, 327575</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-red-600">Email</h3>
                            <p className="text-gray-600">ptharapanjayaprima@gmail.com</p>
                        </div>
                        <div>
                        <iframe title="Lokasi PT Harapan Jaya Prima"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d345870.19796951965!2d111.5509714273588!3d-7.929824169570809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78e3046c5d26ef%3A0xdf2bad1670dabcaf!2sPT%20Harapan%20Jaya%20Prima!5e0!3m2!1sid!2sid!4v1751555122998!5m2!1sid!2sid"
                            width="100%" height="250" style={{ border: 0 }} allowFullScreen loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" className="rounded-lg shadow-md" />
                        </div>
                    </div>

                    {/* Form Kontak */}
                    <form className="bg-gray-50 shadow-lg rounded-lg p-8 space-y-5">
                        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Kirim Pesan</h3>
                        <input type="text" placeholder="Nama Anda"
                            className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                            required />
                        <input type="email" placeholder="Alamat Email"
                            className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                            required />
                        <textarea placeholder="Pesan Anda"
                            rows={6}
                            className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                            required></textarea>
                        <button type="submit"
                            className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-600 transition cursor-pointer">
                            Kirim Pesan
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
