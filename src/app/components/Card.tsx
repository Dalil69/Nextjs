import React from 'react';
import { ChartBarIcon } from '@heroicons/react/solid';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="border p-4 rounded-lg shadow">
      <ChartBarIcon className="h-5 w-5 text-blue-500" />
      <h2 className="text-lg font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;