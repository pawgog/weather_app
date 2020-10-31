import { useEffect, useRef } from 'react';

export const changeFormatDate = (value) => {
  const addDay = (forecastDate) => {
    switch (forecastDate) {
      case 0:
        return 'Sun';
      case 1:
        return 'Mon';
      case 2:
        return 'Tue';
      case 3:
        return 'Wed';
      case 4:
        return 'Thu';
      case 5:
        return 'Fri';
      case 6:
        return 'Sat';
      default:
        break;
    }
  };

  const getDate = `${addDay(new Date(value).getDay())} ${value.split('-').reverse().join('/')}`;

  return getDate;
};

export const changeTemperatureToCelsius = (temp) => {
  return `${Math.round(temp - 273.15)}°`
}

export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}