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
    <Container fluid className={`dashboard-main-container `}>
      <Row>
        <Col>
          <Navbar />
        </Col>
      </Row>
      <Row>
        <Col className="dashboard-main-content-container">
          <Row>
            <Search />
          </Row>
          <Row>
            {random.map(country => (
              <Col>
                <CountryCard country={country} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
