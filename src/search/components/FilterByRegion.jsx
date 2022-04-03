import React from 'react';
import '../css/filterByRegion.css';

const FilterByRegion = () => {
  const countries = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  return (
    <select className="filter-select box-shadow">
      <option value="" disabled selected hidden>
        Filter By Region
      </option>
      {countries.map(country => (
        <option value={country}>{country}</option>
      ))}
    </select>
  );
};

export default FilterByRegion;
