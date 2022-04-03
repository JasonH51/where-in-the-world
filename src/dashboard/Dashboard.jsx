import React from 'react';
import './css/dashboard.css';
import {Container, Row, Col} from 'react-bootstrap';
import Navbar from '../navbar/Navbar';
import Search from '../search/Search';

const Dashboard = () => {
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
            <Col>map items here</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
