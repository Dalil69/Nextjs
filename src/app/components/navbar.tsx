import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>Logo</div>
        <div>Navigation Links</div>
        <div>User Profile</div>
      </div>
    </nav>
  );
};

export default Navbar;