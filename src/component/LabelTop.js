import React, { useState } from 'react';
import { changeTemperatureToCelsius } from './Function';

function LabelTop({ cityData, cityWeather }) {
  const [currentHour, setCurrentHour] = useState();

  setInterval(() => {
    setCurrentHour(`${new Date().getHours()}:${new Date().getMinutes()} GMT`)
  }, 1000);

  const currentTemperature = changeTemperatureToCelsius(cityWeather.main.temp)

  return (
    <div className="weather-app-label">
      <div className="weather-app-label__content">
        <div>{ cityData.name.toUpperCase() }</div>
        <div>{ currentHour }</div>
        <div>{ currentTemperature }</div>        
      </div>
      <div className="weather-app-label__progress-bar">

      </div>
    </div>
  );
}

export default LabelTop;