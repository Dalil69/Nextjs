import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="h-full w-64 bg-gray-800 text-white">
      <div className="p-5">Logo</div>
      <ul>
        <li>
          <Link href="/dashboard">
            <a className="block p-4 hover:bg-gray-700">Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/patients">
            <a className="block p-4 hover:bg-gray-700">Patients</a>
          </Link>
        </li>
        {/* Ajoutez d'autres liens ici */}
      </ul>
    </div>
  );
};

export default Sidebar;
