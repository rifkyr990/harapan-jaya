'use client';

import { useEffect } from 'react';
import { useAppDispatch } from '@/lib/redux/hooks';
import { setSignIn } from '@/lib/redux/features/userSlice';

export default function AuthLoader() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        dispatch(setSignIn(parsedUser));
        }
    }, [dispatch]);

  return null;
}
