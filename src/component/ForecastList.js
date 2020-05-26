import React from 'react';
import { changeTemperatureToCelsius } from './Function';

function ForecastList({ forecastList }) {
  console.log(forecastList);

  return (
    <>
      {forecastList.map((weather) => {
        return <div key={weather.dt}>
        <p>{weather.dt_txt}</p>
        <p>{changeTemperatureToCelsius(weather.main.temp)}</p>
        </div>;
      })}
    </>
  );
}

export default ForecastList;