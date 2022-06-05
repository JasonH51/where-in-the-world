import React, {useContext, useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import FilterByRegion from './components/FilterByRegion';
import SearchInput from './components/SearchInput';
import './css/search.css';
import {Data} from '../API/CountryDataAPI';

const Search = () => {
  const {countries, setSearch, setRandom, reg, setReg} = useContext(Data);
  const [searchInput, setSearchInput] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    if (searchInput.length) {
      setSearch(
        countries.filter(el => {
          const length = searchInput.length;
          const firstLetters = el.name.slice(0, length).toLowerCase();
          return firstLetters.includes(searchInput.toLowerCase());
        })
      );
      setRandom([]);
      setReg([]);
    }
  }, [searchInput]);

  useEffect(() => {
    if (region) {
      setReg(countries.filter(item => item.region.toLowerCase() === region.toLowerCase()));
      setRandom([]);
      setSearch([]);
    }
  }, [region]);

  return (
    <Container>
      <Row className="justify-content-between">
        <Col md={5}>
          <SearchInput {...{searchInput, setSearchInput}} />
        </Col>
        <Col md={3}>
          <FilterByRegion {...{region, setRegion}} />
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
