import React, {useContext} from 'react';
import {Card} from 'react-bootstrap';
import './css/countryCard.css';
import {Data} from '../API/CountryDataAPI';
import {navigate} from '@reach/router';

const CountryCard = ({country}) => {
  const {setSelected} = useContext(Data);

  const handleClick = () => {
    setSelected(country);
    navigate('/country');
  };

  return (
    <div onClick={() => handleClick()} className="country-card-clickable">
      <Card>
        <Card.Img variant="top" style={{height: '150px'}} src={country.flags.png} />
        <Card.Body className="p-4">
          <Card.Title className="mb-4">
            <b>{country.nativeName}</b>
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
    </div>
  );
};

export default CountryCard;
