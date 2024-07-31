import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    console.log(query)
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '65%'}}>
      <input
        type='text'
        value={query}
        onChange={handleInputChange}
        placeholder='Type your search query...'
        style={{
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          width: '300px'
        }}
      />
      <button
        type='submit'
        onClick={handleSubmit}
        style={{
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#007bff',
          color: 'white',
          cursor: 'pointer'
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
