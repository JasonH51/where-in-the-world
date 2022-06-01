import React, {useContext, useEffect} from 'react';
import {Row, Col} from 'react-bootstrap';
import {Data} from '../API/CountryDataAPI';
import './css/countryPage.css';
import axios from 'axios';

const CountryPage = () => {
  const {selected, getBorders, borders, setBorders} = useContext(Data);

  useEffect(() => {
    try {
      if (selected?.borders.length) {
        let border = selected?.borders.join(',');
        getBorders(border).then(res => setBorders(res.data));
        console.log(border);
      }
    } catch (error) {
      console.log(error);
    }
  }, [selected]);

  console.log(selected?.borders);
  console.log(borders.data);

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
                  Sub Region: <span>{selected.subregion}</span>
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
                  Top Level Domain: <span>{selected?.topLevelDomain}</span>
                </p>
              </Row>
              <Row>
                <p>
                  Currencies: <span>{selected.currencies[0].code}</span>
                </p>
              </Row>
              <Row>
                <p>
                  Languages:{' '}
                  <span>{selected.languages.map(language => language.name).join(', ')}</span>
                </p>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Border Countries:{' '}
                {borders.map((el, idx) => (
                  <span key={idx}>{el.name}, </span>
                ))}{' '}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Row>
  );
};

export default CountryPage;
