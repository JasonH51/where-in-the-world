import React, {useContext, useEffect} from 'react';
import {Row, Col} from 'react-bootstrap';
import {Data} from '../API/CountryDataAPI';
import './css/countryPage.css';
import {navigate} from '@reach/router';

const CountryPage = () => {
  const {selected, setSelected, getBorders, borders, setBorders} = useContext(Data);

  useEffect(() => {
    try {
      if (selected?.borders.length) {
        let border = selected?.borders.join(',');
        getBorders(border).then(res => setBorders(res.data));
        console.log(border);
      } else {
        setBorders([]);
      }
    } catch (error) {
      console.log(error);
    }
    /* eslint-disable */
  }, [selected]);

  console.log(borders);

  return (
    <Row className="country_page_main_container">
      <Row>
        <Col>
          <button onClick={() => navigate('/')} className="country_page_back_button">
            Back
          </button>
        </Col>
      </Row>
      <Row className="country-page-content-container">
        <Col xs={12} md={6}>
          <div>
            <img src={selected.flags.svg} alt="countries flag" className="flag-img" />
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column justify-content-center pt-5 pt-md-0 ps-md-5"
        >
          <Row className="mb-3">
            <Col>
              <h1 className="fw-bold">{selected.name}</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <p className="country_page_labels">
                  Native Name: <span>{selected.nativeName}</span>
                </p>
              </Row>
              <Row>
                <p className="country_page_labels">
                  Population: <span>{selected.population}</span>
                </p>
              </Row>
              <Row>
                <p className="country_page_labels">
                  Region: <span>{selected.region}</span>
                </p>
              </Row>
              <Row>
                <p className="country_page_labels">
                  Sub Region: <span>{selected.subregion}</span>
                </p>
              </Row>
              <Row>
                <p className="country_page_labels">
                  Capital: <span>{selected.capital}</span>
                </p>
              </Row>
            </Col>
            <Col>
              <Row>
                <p className="country_page_labels">
                  Top Level Domain: <span>{selected?.topLevelDomain}</span>
                </p>
              </Row>
              <Row>
                <p className="country_page_labels">
                  Currencies: <span>{selected.currencies[0].code}</span>
                </p>
              </Row>
              <Row>
                <p className="country_page_labels">
                  Languages:{' '}
                  <span>{selected.languages.map(language => language.name).join(', ')}</span>
                </p>
              </Row>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <p className="country_page_labels">Border Countries: </p>
              <div className="country_page_border_container">
                {borders.map((el, idx) => (
                  <span
                    onClick={() => setSelected(el)}
                    className="country_page_border_pill"
                    key={idx}
                  >
                    {el.name}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Row>
  );
};

export default CountryPage;
