import './styles/navbar.css';
import { NavLink } from 'react-router-dom';
import VoiceSearch from './VoiceSearch';
import { useState } from 'react';
import SearchBar from './SearchBar';

export const Navbar = ({ onSearchResults }) => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`http://localhost:3000/search?q=${query}`);
      const results = await response.json();
      console.log(results);
      console.log(query);
      setSearchResults(results);
      onSearchResults(results);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        {/* NavLink items */}
      </ul>
      <SearchBar onSearch={handleSearch} />
      <VoiceSearch onSearch={handleSearch} />
    </nav>
  );
};
