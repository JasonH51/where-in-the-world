import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const Data = createContext();
const Provider = Data.Provider;

const CountryDataAPI = ({children}) => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState('');
  const [random, setRandom] = useState([]);
  const [selected, setSelected] = useState({});
  //   console.log(countries);

  const getAll = () => {
    axios.get('https://restcountries.com/v2/all').then(res => {
      setCountries(res.data);
    });
  };

  const getByRegion = () => {
    axios.get(`https://restcountries.com/v2/continent/${region}`).then(res => console.log(res));
  };

  useEffect(() => {
    if (countries.length) {
      let numbers = [];
      let newArray = [];
      for (let i = 0; i <= 7; i++) {
        const randomNumber = Number(Math.floor(Math.random() * 99));
        numbers.push(randomNumber);
      }
      numbers.map(num => {
        newArray.push(countries[num]);
      });
      setRandom(newArray);
    }
  }, [countries]);

  useEffect(() => {
    getAll();
  }, []);

  return (
    <Provider
      value={{
        getAll,
        getByRegion,
        region,
        setRegion,
        random,
        setRandom,
        selected,
        setSelected
      }}
    >
      {children}
    </Provider>
  );
};

export default CountryDataAPI;
