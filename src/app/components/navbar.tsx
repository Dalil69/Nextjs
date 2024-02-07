import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SearchBar from './SearchBar';
import { FiHome, FiBarChart2 } from 'react-icons/fi';

const Navbar: React.FC = () => {
  // Fonction pour gérer le clic sur le logo
  const handleLogoClick = () => {
    // Rediriger vers la page d'accueil ou effectuer toute autre action désirée
    console.log("Logo clicked");
  };

  // Fonction pour gérer le clic sur le profil utilisateur
  const handleUserProfileClick = () => {
    // Afficher un menu déroulant de profil utilisateur ou effectuer toute autre action désirée
    console.log("User profile clicked");
  };

  return (
    <nav className="flex justify-between items-center bg-primary text-white p-4">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleLogoClick}
      >
        <Link href="/">
          <img src="https://i.pinimg.com/1200x/f2/14/bc/f214bcaaafec020cac61cd26148e9e59.jpg" alt="Logo" className="h-8 w-8" />
        </Link>
      </motion.div>
      <div className="flex items-center space-x-4"> {/* Utiliser flexbox pour espacer les éléments */}
        {/* Lien Accueil avec icône */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href="/" passHref>
              <FiHome className="text-gray-300" /> {/* Icône Accueil */}
              <span className="hover:text-gray-400">Accueil</span>
            
          </Link>
        </motion.div>
        {/* Lien Dashboard avec icône */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href="/dashboard" passHref>
              <FiBarChart2 className="text-gray-300" /> {/* Icône Dashboard */}
              <span className="hover:text-gray-400">Dashboard</span>
          </Link>
        </motion.div>
      </div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleUserProfileClick}
      >
        <img src="https://i.pinimg.com/564x/d7/5b/73/d75b7375552f210789e7d10830e1467c.jpg" alt="User Profile" className="h-8 w-8 rounded-full" />
      </motion.div>
      <SearchBar onSearch={(query: string) => console.log(query)} />
    </nav>
  );
};

export default Navbar;