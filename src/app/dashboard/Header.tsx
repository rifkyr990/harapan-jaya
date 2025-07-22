'use client'

import React from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks'
import { useState } from 'react';
import { setSignOut } from '@/lib/redux/features/userSlice';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
  const user = useAppSelector((state) => state.userReducer.email);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const Router = useRouter();

  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 relative">
      <div className="flex justify-between items-center w-full sm:w-auto">
        <div className="text-2xl font-semibold text-gray-800">Dashboard</div>

        <button
          className="sm:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      <div className="hidden sm:flex items-center gap-2 text-blue-500">
        <p>{user}</p>
      </div>

      {isOpen && (
        <div className="sm:hidden mt-2 flex flex-col gap-2 bg-white border rounded shadow-md w-full p-4 text-gray-800 z-10">
          <Link href="/" className="hover:text-blue-500">Beranda</Link>
          <Link href="/dashboard/ListAgen/" className="hover:text-blue-500">Daftar Agen</Link>
          <Link href="/dashboard/ListArticle/" className="hover:text-blue-500">Daftar Artikel</Link>
          <button
              onClick={() => {
                dispatch(setSignOut());
                setIsOpen(false);
                Router.push('/');
          }}
            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
          >
            Keluar
          </button>
          <p className="text-sm text-blue-500 mt-2">{user}</p>
        </div>
      )}
    </header>
  );
};

export default Header;
