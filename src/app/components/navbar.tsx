import React from 'react';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <div className="container mx-auto flex justify-between items-center">
        <div>Logo</div>
        <div>Navigation Links</div>
        <div>User Profile</div>
      </div>
      <SearchBar onSearch={(query) => console.log(query)} /> {/* Ajoutez la SearchBar ici */}
    </nav>
  );
};

export default Navbar;