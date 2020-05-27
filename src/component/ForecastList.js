import React from 'react';
import { changeTemperatureToCelsius } from './Function';

function ForecastList({ forecastList }) {
  return (
    <>
      {forecastList.map((weather) => {
        return <div className="weather-app-forecast" key={weather.dt}>
          <div className="weather-app-forecast__day">
            <p>{weather.day}</p>
            <p>{changeTemperatureToCelsius(weather.main.temp)}</p>
          </div>
          <div className="weather-app-forecast__weather">
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt=""></img>
            <p>{weather.weather[0].description}</p>          
          </div>
        </div>;
      })}
    </>
  );
}

export default ForecastList;