'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { callAPI } from '@/api/myAPI';
import { setSignIn } from '@/lib/redux/features/userSlice';
import { useAppDispatch } from '@/lib/redux/hooks';

const ADMIN_EMAIL = 'admin@gmail.com';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const dispatch = useAppDispatch();

    const login = async () => {
        try {
        const response = await callAPI.get('/accounts', {
            params: {
            where: `email = '${email}' AND password = '${password}'`,
            },
        });

        const user = response.data[0];

        if (!user || user.email.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
            alert('AKSES DILARANG, HANYA ADMIN');
            return;
        }
        localStorage.setItem('user', JSON.stringify(user));

        // Simpan ke Redux
        dispatch(setSignIn(user));

        router.push('/dashboard/ListArticle/');
        } catch (error) {
        console.error('Login ERROR', error);
        alert('Terjadi kesalahan saat login');
        }
    };

    return (
        <section className="relative bg-[url(/images/bg-img.jpg)] bg-cover bg-center bg-no-repeat min-h-screen">
            <div className="absolute inset-0 bg-black/70 z-0"></div>
            <div className="relative w-full min-h-screen flex justify-center items-center p-4 sm:p-6 z-10">
                <Card className="w-full max-w-md sm:max-w-lg">
                <CardContent className="flex justify-center flex-col">
                    <h1 className="text-center text-3xl sm:text-4xl font-extrabold my-5">Masuk</h1>

                    <div className="my-4">
                    <label htmlFor="email" className="block mb-1 text-sm">Email :</label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@domain.com"
                        required
                    />
                    </div>

                    <div className="my-4">
                    <label htmlFor="password" className="block mb-1 text-sm">Password :</label>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="******"
                        required
                    />
                    </div>

                    <Button className="my-4 bg-red-600 text-white" onClick={login}>
                    Masuk
                    </Button>

                    <span className="text-center my-3 text-sm">
                    Belum memiliki akun?{' '}
                    <a href="/signup" className="text-red-600 underline">
                        Daftar
                    </a>
                    </span>
                </CardContent>
                </Card>
            </div>
        </section>

    );
};

export default Login;
