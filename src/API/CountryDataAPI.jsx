import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const Data = createContext();
const Provider = Data.Provider;

const CountryDataAPI = ({children}) => {
  const [selected, setSelected] = useState({});
  const [countries, setCountries] = useState([]);
  const [random, setRandom] = useState([]);
  const [borders, setBorders] = useState([]);
  const [reg, setReg] = useState([]);
  const [search, setSearch] = useState([]);

  const getAll = () => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(res => {
        setCountries(res.data);
      })
      .catch(err => console.log(err));
  };

  const getByRegion = region => {
    axios
      .get(`https://restcountries.com/v2/region/${region}`)
      .then(res => setReg(res.data))
      .catch(err => console.log(err));
  };

  const getBorders = async code => {
    const border = await axios.get(`https://restcountries.com/v2/alpha?codes=${code}`);
    return border;
  };

  useEffect(() => {
    if (countries.length) {
      let newArray = [];
      for (let i = 0; i <= 7; i++) {
        const randomNumber = Number(Math.floor(Math.random() * 249));
        newArray.push(countries[randomNumber]);
      }

      setRandom(newArray);
    }
  }, [countries]);

  useEffect(() => {
    getAll();
  }, []);

  return (
    <Provider
      value={{
        countries,
        getAll,
        getByRegion,
        random,
        setRandom,
        selected,
        setSelected,
        borders,
        setBorders,
        getBorders,
        reg,
        setReg,
        search,
        setSearch
      }}
    >
      {children}
    </Provider>
  );
};

export default CountryDataAPI;
