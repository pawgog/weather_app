import React from 'react';

function ForecastList({ forecastList }) {
  return (
    <>
      {forecastList.map((data) => {
        return <div className="weather-app-forecast" key={data.moonrise_ts}>
          <div className="weather-app-forecast__day">
            <p>{data.datetime}</p>
            <p>{data.temp}°C</p>
          </div>
          <div className="weather-app-forecast__weather">
            <img src={`https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`} alt={data.weather.description}></img>
            <p>{data.weather.description}</p>
          </div>
        </div>;
      })}
    </>
  );
}

export default ForecastList;