import React from 'react'; // Importez React
import { motion } from "framer-motion";
import { FcPlus } from "react-icons/fc";


interface CardProps {
  title: string;
  value: string;
  icon?: JSX.Element; 
  description: string;
  imageUrl: string;
  onAdd?: () => void; 
  onRemove?: () => void; 
  onUpdate?: () => void; 
}

const Card: React.FC<CardProps> = ({
  title,
  value,
  icon,
  description,
  imageUrl,
  onAdd,
  onRemove,
  onUpdate,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center">
        {/* Utilisation de FcPlus ici */}
        <div className="flex-shrink-0 mr-4">
          {/* Encapsulez l'icône dans un élément motion.div */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            {icon || <FcPlus className="h-6 w-6 text-green-500" />}
          </motion.div>
        </div>
        
        <div>
          <div className="text-sm font-medium text-gray-500">{title}</div>
          <div className="text-sm text-gray-600">{value}</div>
          <div className="text-sm text-gray-600">{description}</div>
          <div className="text-sm text-gray-600">{imageUrl}</div>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        {/* Bouton pour retirer une carte */}
        {onRemove && (
          <button
            onClick={onRemove}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Remove
          </button>
        )}
        {/* Bouton pour modifier une carte */}
        {onUpdate && (
          <button
            onClick={onUpdate}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Modify
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
