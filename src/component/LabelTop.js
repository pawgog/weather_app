import React from 'react';
import { changeTemperatureToCelsius } from './Function';

function LabelTop({ cityData, cityWeather }) {
  console.log(cityData, cityWeather);
  const currentHour = `${new Date().getHours()}:${new Date().getMinutes()} GMT`
  const currentTemperature = changeTemperatureToCelsius(cityWeather.main.temp)
  
  return (
    <>
      <p>{ cityData.name.toUpperCase() }</p>
      <p>{currentHour}</p>
      <p>{ currentTemperature }</p>
    </>
  );
}

export default LabelTop;