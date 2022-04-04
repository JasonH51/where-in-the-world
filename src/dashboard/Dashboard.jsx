import React, {useContext} from 'react';
import './css/dashboard.css';
import {Container, Row, Col} from 'react-bootstrap';
import Navbar from '../navbar/Navbar';
import Search from '../search/Search';
import CountryCard from '../country/CountryCard';
import {Data} from './../API/CountryDataAPI';

const Dashboard = () => {
  const {random} = useContext(Data);
  return (
    <Row>
      <Col className="dashboard-main-content-container">
        <Row>
          <Search />
        </Row>
        <Row>
          {random.map((country, idx) => (
            <Col key={idx} className="mt-3" xs={12} sm={6} md={3}>
              <CountryCard country={country} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Dashboard;
