import React from 'react';
import { changeFormatDate } from './Function';

function ForecastList({ forecastList }) {
  return (
    <>
      {forecastList.map((data) => {
        const { moonrise_ts, datetime, temp, weather } = data;

        return <div className="weather-app-forecast" key={moonrise_ts}>
          <div className="weather-app-forecast__day">
            <p>{changeFormatDate(datetime)}</p>
            <p>{temp}°C</p>
          </div>
          <div className="weather-app-forecast__weather">
            <img src={`https://www.weatherbit.io/static/img/icons/${weather.icon}.png`} alt={weather.description}></img>
            <p>{weather.description}</p>
          </div>
        </div>;
      })}
    </>
  );
}

export default ForecastList;