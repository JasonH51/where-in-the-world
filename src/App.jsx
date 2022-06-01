import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import {Router} from '@reach/router';
import Dashboard from './dashboard/Dashboard';
import './shared/shared.css';
import CountryDataAPI from './API/CountryDataAPI';
import CountryPage from './country/CountryPage';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <div className="App">
      <CountryDataAPI>
        <Container fluid className="app-main-container ">
          <Row>
            <Col>
              <Navbar />
            </Col>
          </Row>
          <Router>
            <Dashboard path="/" />
            <CountryPage path="/country" />
          </Router>
        </Container>
      </CountryDataAPI>
    </div>
  );
}

export default App;
