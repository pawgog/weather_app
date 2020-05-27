import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import LabelTop from './LabelTop';
import ForecastList from './ForecastList';
import { changeFormatDate } from './Function';
import '../styles/_index.scss';

function Home() {
  const [cityData, setCity] = useState({name: ''});
  const [currentWeather, setCurrent] = useState({main: {temp: 0}});
  const [forecast, setForecast] = useState([]);
  const [errorMessage, setErrorMessage] = useState('')

    const fetchData = useCallback(async () => {
     await axios(
      `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${process.env.REACT_APP_WEATHER_KEY}`
    )
      .then((result) => {
        setErrorMessage('')
        setCity(result.data.city)
        setForecast(changeFormatDate(result.data.list));
        setCurrentWeather(result.data.list);
      })
      .catch((error) => {
        console.log(error.response);
        setErrorMessage(`${error.response.data.message} request failed - displaying recent data`)
      });
  },[]);

  useEffect(() => {
    fetchData();
  },[fetchData]);

  const setCurrentWeather = (val) => {
    setCurrent(val.shift());
  };

  return (
    <div className="weather-app-home">
      <div className="weather-app-home__content">
        <LabelTop cityData={cityData} cityWeather={currentWeather} errorMessage={errorMessage} fetchDataFn={fetchData} />
        <ForecastList forecastList={forecast} />        
      </div>
    </div>
  );
}

export default Home;
