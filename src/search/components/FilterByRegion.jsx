import React, {useContext} from 'react';
import '../css/filterByRegion.css';

const FilterByRegion = ({region, setRegion}) => {
  const countries = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  return (
    <select
      onChange={e => setRegion(e.target.value)}
      value={region}
      className="filter-select box-shadow"
    >
      <option value="Filter By Region" hidden>
        Filter By Region
      </option>
      {countries.map((country, idx) => (
        <option key={idx} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};

export default FilterByRegion;
