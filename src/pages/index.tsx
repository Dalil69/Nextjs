import React from 'react';
import Link from 'next/link';
import { FiHome, FiSettings, FiUser } from 'react-icons/fi'; 
import { useModal } from '../app/components/Modal';
import { useAlert } from '../app/components/AlertContext';
import Button from '../app/components/button';
import { useEffect } from 'react';
import { useAuth } from '../app/components/AuthContext'; 
import { useRouter } from 'next/router';



const HomePage = () => {
  const { showModal } = useModal();
  const { showAlert } = useAlert();
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login'); // Redirigez vers la page de connexion si non authentifié
    }
  }, [isAuthenticated, router]);



  return (
    <div>
      <div className="h-screen flex justify-center items-center bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="flex justify-center">
          <Link href="/dashboard">
            <div className="p-8 mx-4 rounded-lg shadow-lg bg-white transform hover:scale-105 transition duration-300">
              <FiHome className="text-4xl text-blue-500 mb-2" />
              <span className="text-lg font-bold">Dashboard</span>
            </div>
          </Link>
          <Link href="/about">
            <div className="p-8 mx-4 rounded-lg shadow-lg bg-white transform hover:scale-105 transition duration-300">
              <FiUser className="text-4xl text-green-500 mb-2" />
              <span className="text-lg font-bold">About</span>
            </div>
          </Link>
          <Link href="/extentions">
            <div className="p-8 mx-4 rounded-lg shadow-lg bg-white transform hover:scale-105 transition duration-300">
              <FiSettings className="text-4xl text-yellow-500 mb-2" />
              <span className="text-lg font-bold">Extentions</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Boutons de modal */}
      <div className="flex justify-center mt-8">
        <Button onClick={showModal}>Open Modal</Button>
        <Button variant="secondary" onClick={() => showAlert('This is an alert!')}>
          Show Alert
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
