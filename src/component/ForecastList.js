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
            {weather.weather.map((val) => {
              return <div key={val.id}>
                  <img src={`http://openweathermap.org/img/wn/${val.icon}.png`} alt={val.main}></img>
                  <p>{val.description}</p>
                </div>
            })}
          </div>
        </div>;
      })}
    </>
  );
}

export default ForecastList;