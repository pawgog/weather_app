import React, { useState, useEffect } from 'react';
import axios from 'axios';
import changeFormatDate from './Function';

function Home() {
  const [allData, setData] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [currentWeather, setCurrent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios(
        `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${process.env.REACT_APP_WEATHER_KEY}`
      )
        .then((result) => {
          setData(result.data);
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
    <>
      {forecast.map((weather) => {
        return <p key={weather.dt}>{weather.dt_txt}</p>;
      })}
    </>
  );
}

export default Home;
