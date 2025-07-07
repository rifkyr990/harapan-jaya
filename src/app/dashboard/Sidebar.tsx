'use client';
import React, { useState } from 'react';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">MyDashboard</h2>
        <nav className="flex flex-col gap-4 text-gray-700">
            <a href="#" className="hover:text-blue-500">🏠 Dashboard</a>
            <a href="#" className="hover:text-blue-500">📝 Artikel</a>
        </nav>
    </aside>
    </>
  );
};

export default Sidebar;
