import React from 'react';
import Link from 'next/link';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi'; // Importez les icônes de Feather Icons

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white rounded-r-lg shadow-lg overflow-y-auto">
      <div className="p-5 flex items-center justify-center">
        {/* Remplacez le texte "Logo" par une balise img avec le chemin de votre logo */}
        <img src="https://img.freepik.com/vecteurs-libre/symbole-medical-pharmaceutique-design-plat_23-2149542030.jpg" alt="Description de l'image" width="120" height="60" ></img>
      </div>
      <ul className="mt-8">
        <li className="mb-4">
          {/* Utilisez le composant Link pour naviguer vers l'accueil */}
          <Link href="/">
            <div className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer">
              {/* Utilisez l'icône FiHome pour représenter l'accueil */}
              <FiHome className="mr-2" />
              <span>Accueil</span>
            </div>
          </Link>
        </li>
        <li className="mb-4">
          {/* Utilisez le composant Link pour naviguer vers la page About */}
          <Link href="/about">
            <div className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer">
              {/* Utilisez l'icône FiUser pour représenter la page About */}
              <FiUser className="mr-2" />
              <span>À propos</span>
            </div>
          </Link>
        </li>
        <li className="mb-4">
          {/* Utilisez le composant Link pour naviguer vers les paramètres */}
          <Link href="/settings">
            <div className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer">
              {/* Utilisez l'icône FiSettings pour représenter les paramètres */}
              <FiSettings className="mr-2" />
              <span>Paramètres</span>
            </div>
          </Link>
        </li>
        {/* Ajoutez d'autres liens ici avec des icônes et des styles similaires */}
      </ul>
    </div>
  );
};

export default Sidebar;
