import React from 'react';
import { useAppSelector } from '@/lib/redux/hooks'

const Header = () => {
  const user = useAppSelector((state) => state.userReducer.email);

  return (
    <header className="flex justify-between items-center mb-6">
      <div className="text-2xl font-semibold text-gray-800">Dashboard</div>
      <div className="flex items-center gap-4">
        <div className=" text-blue-500 flex items-center justify-center gap-4">
          <p>{user}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
