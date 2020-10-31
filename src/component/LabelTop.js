import React, { useState } from 'react';
import { useInterval } from './Function';

function LabelTop({ cityData, cityWeather, errorMessage, fetchDataFn }) {
  const [currentHour, setCurrentHour] = useState();
  const [progressMinute, setProgressMinute] = useState(60);
  const [progressValue, setProgress] = useState(0);
  const progressBar = {width: `${progressValue}%`};
  const currentTemperature = cityWeather.temp;

  useInterval(() => {
  let oneMinute = 0
      if (progressMinute > oneMinute) {
        setProgressMinute(progressMinute - 1)
        setProgress(progressValue + 1.67)   
      }else {
        fetchDataFn()
        setProgressMinute(60)
        setProgress(0)
      }
  }, 1000)

  setInterval(() => {
    const date = new Date()
    setCurrentHour(`${date.getHours() < 10 ? '0' : ''}${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()} GMT`)
  }, 1000);

  return (
    <div className="weather-app-label">
      <div className="weather-app-label__content">
        <div className="weather-app-label__city-detail">
          <div>{ cityData }</div>
          <div>{ currentHour }</div>
          <div>{ currentTemperature }°C</div>
        </div>
        <div className="weather-app-label__progress-bar">
          <span>Reloading in {progressMinute}s</span>
          <div className="weather-app-label__progress-bar__frame">
            <div className="weather-app-label__progress-bar__slide" style={progressBar}><span></span></div>
          </div>
          <span className={
            errorMessage !== '' ? "weather-app-label__progress-bar__error--show" : "weather-app-label__progress-bar__error--hide"
          }>{errorMessage}</span>
        </div>
      </div>

    </div>
  );
}

export default LabelTop;