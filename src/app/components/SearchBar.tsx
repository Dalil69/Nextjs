import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void; 
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query); 
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Ajoutez une classe CSS pour définir la couleur du texte en noir */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="text-black" // Ajoutez cette classe
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
