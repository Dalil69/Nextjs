import React from 'react';
import Link from 'next/link';
import { FiHome, FiSettings, FiUser } from 'react-icons/fi';
import { useModal } from '../app/components/Modal';
import { useAlert } from '../app/components/AlertContext';
import Button from '../app/components/button';
import { useAuth } from '../app/components/AuthContext';
import { useRouter } from 'next/router';

const HomePage = () => {
  const { showModal } = useModal();
  const { showAlert } = useAlert();
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login'); // Optionally redirect to login page after logout
  };

  return (
    <div className="relative h-screen bg-gradient-to-br from-purple-600 to-pink-600 flex flex-col justify-between">
      {/* Conditional rendering of login button or user profile */}
      {isAuthenticated ? (
        <div className="absolute top-0 left-0 m-4">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            style={{ transition: 'all 0.3s ease-in-out' }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="absolute top-0 right-0 m-4">
          <button
            onClick={() => router.push('/login')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            style={{ transition: 'all 0.3s ease-in-out' }}
          >
            Login
          </button>
        </div>
      )}

      {/* Main content */}
      <div className="pt-16 pb-8 flex-grow flex justify-center items-center">
        <div className="flex justify-center">
          <Link href="/dashboard">
            <div className="p-8 mx-4 rounded-lg shadow-lg bg-white transform hover:scale-105 transition duration-300 cursor-pointer">
              <FiHome className="text-4xl text-blue-500 mb-2" />
              <span className="text-lg font-bold">Dashboard</span>
            </div>
          </Link>
          <Link href="/about">
            <div className="p-8 mx-4 rounded-lg shadow-lg bg-white transform hover:scale-105 transition duration-300 cursor-pointer">
              <FiUser className="text-4xl text-green-500 mb-2" />
              <span className="text-lg font-bold">About</span>
            </div>
          </Link>
          <Link href="/settings">
            <div className="p-8 mx-4 rounded-lg shadow-lg bg-white transform hover:scale-105 transition duration-300 cursor-pointer">
              <FiSettings className="text-4xl text-yellow-500 mb-2" />
              <span className="text-lg font-bold">Settings</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Modal and alert buttons */}
      <div className="pb-8 flex justify-center">
        <Button onClick={showModal}>Open Modal</Button>
        <Button variant="secondary" onClick={() => showAlert('This is an alert!')}>
          Show Alert
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
