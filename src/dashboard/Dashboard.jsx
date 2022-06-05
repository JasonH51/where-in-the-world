import React, {useContext, useEffect, useState} from 'react';
import './css/dashboard.css';
import {Container, Row, Col} from 'react-bootstrap';
import Navbar from '../navbar/Navbar';
import Search from '../search/Search';
import CountryCard from '../country/CountryCard';
import {Data} from './../API/CountryDataAPI';

const Dashboard = () => {
  const {random, search, reg} = useContext(Data);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!random.length && !search.length && reg.length) {
      setData(reg);
    }
    if (!random.length && search.length && !reg.length) {
      setData(search);
    }
    if (random.length && !search.length && !reg.length) {
      setData(random);
    }
    if (!random.length && !search.length && !reg.length) {
      setData([]);
    }
  }, [random, search, reg]);
  return (
    <Row>
      <Col className="dashboard-main-content-container">
        <Row>
          <Search />
        </Row>
        <Row className="country_card_container">
          {data &&
            data.map((country, idx) => (
              <Col className="mt-5 " key={idx} xs={12} sm={6} md={3}>
                <CountryCard country={country} />
              </Col>
            ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Dashboard;
