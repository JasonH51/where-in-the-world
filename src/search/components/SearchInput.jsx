import React from 'react';
import '../css/searchInput.css';

const SearchInput = () => {
  return (
    <div className="search-input-container">
      <img
        src="https://media.istockphoto.com/vectors/search-icon-magnifying-glass-in-simple-design-search-vector-icon-for-vector-id1171564262?k=20&m=1171564262&s=170667a&w=0&h=u7m85LQWQYQnjd4zKzbxICRBNwoo3-4JhKME2Yrsl_0="
        alt="search icon"
        className="search-icon"
      />
      <input
        type="search"
        placeholder="Search for a country..."
        className="search-input  box-shadow"
      />
    </div>
  );
};

export default SearchInput;
