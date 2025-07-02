import React from 'react'
import Image from 'next/image'

const Partner = () => {
    return (
        <section className='w-full py-20 flex justify-center items-center flex-col space-y-12 my-20'>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Partner Perusahaan</h2>
            <p className="text-gray-600 text-lg mb-10">Mitra dan Partner Kami</p>
            <div className='flex justify-between items-center gap-[100px]'>
                <Image src='/images/partner/adi-putro.png' alt='' width={50} height={50} />
                <Image src='/images/partner/denso.png' alt='' width={125} height={125} />
                <Image src='/images/partner/mercedes-benz.png' alt='' width={100} height={100} />
                <Image src='/images/partner/scania.png' alt='' width={100} height={100} />
                <Image src='/images/partner/bridgestone.png' alt='' width={150} height={150} />
            </div>
        </section>
    )
}

export default Partner
