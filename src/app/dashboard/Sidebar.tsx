'use client';
import Link from "next/link";
import { useAppDispatch } from '@/lib/redux/hooks'
import { setSignOut } from '@/lib/redux/features/userSlice'
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const Router = useRouter();
  return (
    <>
      <aside className="w-full md:w-64 bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">MyDashboard</h2>
          <nav className="flex flex-col gap-4 text-gray-700">
            <Link href="/" className="hover:text-blue-500">🏠 Beranda</Link>
            <Link href="/dashboard/ListArticle/" className="hover:text-blue-500">📝 Artikel</Link>
            <Link href="/dashboard/ListAgen/" className="hover:text-blue-500">📝 Daftar Agen</Link>
            <li className="list-none">
                <button
                  onClick={() => {
                    dispatch(setSignOut());
                    Router.push('/');
                  }}
                  className="w-full cursor-pointer text-left px-4 py-2 border-1 border-red-600 hover:bg-gray-100 text-red-600"
                >
                  Keluar
                </button>
            </li>
          </nav>
      </aside>
    </>
  );
};

export default Sidebar;
