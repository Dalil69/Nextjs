import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary'; 
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick }) => {
  const baseStyle = "text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";
  const variantStyle = variant === 'primary' ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-500 hover:bg-gray-700";
  
  return (
    <button onClick={onClick} className={`${baseStyle} ${variantStyle}`}>
      {children}
    </button>
  );
};

export default Button;
