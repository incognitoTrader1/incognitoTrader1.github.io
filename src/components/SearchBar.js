import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ posts, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all'); // default is 'all'

  // Handle search term change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value, category);
  };

  // Handle category change
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    onSearch(searchTerm, event.target.value);
  };

  return (
     
    <div className='search-bar'>
      <small>Filter blog posts</small>
      <div className='search-bar-wrapper'> 
      <select value={category} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="tech">Tech</option>
        <option value="health">Health</option>
      </select>
      
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      </div>
    </div>
  );
};

export default SearchBar;
