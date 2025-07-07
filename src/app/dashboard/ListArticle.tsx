import React from 'react';

const dummyArticles = [
  { id: 1, title: 'React vs Vue', category: 'Frontend', date: '2025-07-01' },
  { id: 2, title: 'Belajar Tailwind CSS', category: 'CSS', date: '2025-06-28' },
  { id: 3, title: 'Backend dengan Node.js', category: 'Backend', date: '2025-06-20' },
  { id: 4, title: 'Deploy dengan Vercel', category: 'Deployment', date: '2025-06-15' },
];

const ListArticle = () => {
  
  return (
    <main className="ml-0 md:ml-64 p-6 bg-gray-100 min-h-screen">
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full border-collapse bg-white">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="text-left py-3 px-6 border-b">Judul</th>
              <th className="text-left py-3 px-6 border-b">Kategori</th>
              <th className="text-left py-3 px-6 border-b">Tanggal</th>
              <th className="text-left py-3 px-6 border-b">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {dummyArticles.map((article) => (
              <tr
                key={article.id}
                className="hover:bg-blue-50 transition-colors duration-150"
              >
                <td className="py-3 px-6 border-b">{article.title}</td>
                <td className="py-3 px-6 border-b">{article.category}</td>
                <td className="py-3 px-6 border-b">{article.date}</td>
                <td className="py-3 px-6 border-b flex gap-3">
                  <button className="text-blue-600 hover:underline">Edit</button>
                  <button className="text-red-600 hover:underline">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default ListArticle;
