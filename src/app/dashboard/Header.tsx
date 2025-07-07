import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-6">
      <div className="text-2xl font-semibold text-gray-800">Dashboard Artikel</div>
      <div className="flex items-center gap-4">
        <input type="text" placeholder="Cari artikel..."
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">
          JD
        </div>
      </div>
    </header>
  );
};

export default Header;
