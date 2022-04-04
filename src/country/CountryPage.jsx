import React, {useContext} from 'react';
import {Row, Col} from 'react-bootstrap';
import {Data} from '../API/CountryDataAPI';
import './css/countryPage.css';

const CountryPage = () => {
  const {selected} = useContext(Data);
  console.log(selected);
  return (
    <Row>
      <Row>
        <Col>
          <button>back</button>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <div className="country-page-img-container">
            <img src={selected.flags.svg} alt="countries flag" className="flag-img" />
          </div>
        </Col>
        <Col>
          <Row>
            <Col>{selected.name}</Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <p>
                  Native Name: <span>{selected.nativeName}</span>
                </p>
              </Row>
              <Row>
                <p>
                  Population: <span>{selected.population}</span>
                </p>
              </Row>
              <Row>
                <p>
                  Region: <span>{selected.region}</span>
                </p>
              </Row>
              <Row>
                <p>
                  Sub Region: <span></span>
                </p>
              </Row>
              <Row>
                <p>
                  Capital: <span>{selected.capital}</span>
                </p>
              </Row>
            </Col>
            <Col>
              <Row>
                <p>
                  Top Level Domain: <span></span>
                </p>
              </Row>
              <Row>
                <p>
                  Currencies: <span></span>
                </p>
              </Row>
              <Row>
                <p>
                  Languages: <span></span>
                </p>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>border countries</Col>
          </Row>
        </Col>
      </Row>
    </Row>
  );
};

export default CountryPage;
