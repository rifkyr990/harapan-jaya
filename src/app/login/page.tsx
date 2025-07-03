import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from '@/components/ui/card'

const Login = () => {
  return (
    <div>
        <section className='relative bg-[url(/images/bg-img.jpg)] bg-cover bg-center bg-no-repeat'>
        <div className="absolute inset-0 bg-black/70 z-0"></div>
            <div className='relative w-screen h-screen flex justify-center items-center z-10'>
                <Card>
                    <CardContent className='flex justify-center w-lg flex-col'>
                    <h1 className='text-center text-4xl font-extrabold my-5'>Masuk</h1>
                    <div className="my-4">
                        <label htmlFor="email">Email :</label>
                        <Input 
                        type='email'
                        placeholder='name@domain.com'
                        ></Input>
                    </div>
                    <div className="my-4">
                        <label htmlFor="">Password : </label>
                        <Input 
                        type='password'
                        placeholder='******'
                        ></Input>
                    </div>

                    <Button className='my-4 bg-red-600'>Masuk</Button>
                    <span className='text-center my-3'>Belum memiliki akun ? <a href="/signup" className='text-red-600'>Daftar</a></span>
                </CardContent>
                </Card>
            </div>
        </section>
    </div>
  )
}

export default Login
