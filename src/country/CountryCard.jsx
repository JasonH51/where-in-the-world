import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import './css/countryCard.css';

const CountryCard = ({country}) => {
  console.log(country);
  return (
    <Card style={{width: '300px'}}>
      <Card.Img variant="top" style={{height: '150px'}} src={country.flags.png} />
      <Card.Body className="p-4">
        <Card.Title className="mb-4">
          <b>{country.name}</b>
        </Card.Title>
        <div>
          <h5 className="country-card-subtitles">
            Population: <span className="fw-normal">{country.population}</span>
          </h5>
          <h5 className="country-card-subtitles">
            Region: <span className="fw-normal">{country.region}</span>
          </h5>
          <h5 className="country-card-subtitles">
            Capital: <span className="fw-normal">{country.capital}</span>
          </h5>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;
