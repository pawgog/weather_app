import React, { useState } from 'react';
import { changeTemperatureToCelsius, useInterval } from './Function';

function LabelTop({ cityData, cityWeather }) {
  const [currentHour, setCurrentHour] = useState();
  const [progressMinute, setProgressMinute] = useState(60);
  const [progressValue, setProgress] = useState(0);
  const progressBar = {width: `${progressValue}%`}

  useInterval(() => {
  let progressFull = 100
      if (progressValue < progressFull) {
        setProgress(progressValue + 1)  
      }
  }, 600)
  
  useInterval(() => {
  let oneMinute = 0
      if (progressMinute > oneMinute) {
        setProgressMinute(progressMinute - 1)    
      }
  }, 1000)

  setInterval(() => {
    const date = new Date()
    setCurrentHour(`${date.getHours() < 10 ? '0' : ''}${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes("mm")} GMT`)
  }, 1000);

  const currentTemperature = changeTemperatureToCelsius(cityWeather.main.temp)

  return (
    <div className="weather-app-label">
      <div className="weather-app-label__content">
        <div className="weather-app-label__city-detail">
          <div>{ cityData.name.toUpperCase() }</div>
          <div>{ currentHour }</div>
          <div>{ currentTemperature }</div>          
        </div>
        <div className="weather-app-label__progress-bar">
          <span>Reloading in {progressMinute}s</span>
          <div className="weather-app-label__progress-bar__frame">
            <div className="weather-app-label__progress-bar__slide" style={progressBar}></div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default LabelTop;