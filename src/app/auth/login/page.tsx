'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from '@/components/ui/card'
import { useRouter } from 'next/navigation';
import { callAPI } from '@/api/myAPI'

const ADMIN_EMAIL = 'admin@gmail.com';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Router = useRouter();

    const login = async () => {
        try {
            const response = await callAPI.get("/accounts", {
                params: {
                    where: `email = '${email}' AND password = '${password}'`
                }
            });

            const user = response.data[0];

            if (!user || user.email !== ADMIN_EMAIL.toLowerCase()) {
                alert('AKSES DILARANG, HANYA ADMIN');
            } else {
                localStorage.setItem('user', JSON.stringify(user))
                Router.push('/dashboard');
            }

        } catch (error) {
            console.error('login ERROR', error);
            alert('Terjadi kesalahan saat login');
        }
    }
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
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='name@domain.com'
                        ></Input>
                    </div>
                    <div className="my-4">
                        <label htmlFor="">Password : </label>
                        <Input 
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder='******'
                        ></Input>
                    </div>

                    <Button className='my-4 bg-red-600' onClick={login}>Masuk</Button>
                    <span className='text-center my-3'>Belum memiliki akun ? <a href="/signup" className='text-red-600'>Daftar</a></span>
                </CardContent>
                </Card>
            </div>
        </section>
    </div>
  )
}

export default Login
