import React from 'react';
import { useAppSelector } from '@/lib/redux/hooks'

const Header = () => {
  const user = useAppSelector((state) => state.userReducer.email);

  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
      <div className="text-2xl font-semibold text-gray-800">Dashboard</div>
      <div className="flex items-center gap-2 text-blue-500">
          <p>{user}</p>
      </div>
    </header>
  );
};

export default Header;
