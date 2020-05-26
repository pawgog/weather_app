import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LabelTop from './LabelTop';
import ForecastList from './ForecastList';
import { changeFormatDate } from './Function';
import '../styles/_index.scss';

function Home() {
  // const [allData, setData] = useState([]);
  const [cityData, setCity] = useState({name: ''});
  const [currentWeather, setCurrent] = useState({main: {temp: 0}});
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios(
        `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${process.env.REACT_APP_WEATHER_KEY}`
      )
        .then((result) => {
          // setData(result.data);
          setCity(result.data.city)
          setForecast(changeFormatDate(result.data.list));
          setCurrentWeather(result.data.list);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log(error.message);
          }
        });
    };

    fetchData();
  }, []);

  const setCurrentWeather = (val) => {
    setCurrent(val.shift());
  };

  // console.log(allData, forecast, currentWeather);

  return (
    <div className="weather-app-home">
      <div className="weather-app-home__content">
        <LabelTop cityData={cityData} cityWeather={currentWeather} />
        <ForecastList forecastList={forecast} />        
      </div>
    </div>
  );
}

export default Home;
