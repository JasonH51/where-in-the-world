import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import FilterByRegion from './components/FilterByRegion';
import SearchInput from './components/SearchInput';
import './css/search.css';

const Search = () => {
  return (
    <Container>
      <Row className="justify-content-between">
        <Col md={5}>
          <SearchInput />
        </Col>
        <Col md={3}>
          <FilterByRegion />
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
