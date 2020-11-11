import React, { Component } from 'react';
import axios from 'axios';
import LabelTop from './LabelTop';
import ForecastList from './ForecastList';
import SelectCity from './SelectCity';
import Spinner from './Spinner'
import { changeFormatDate } from './Function';
import '../styles/_index.scss';

class Home extends Component {
  state = {
    cityData: {},
    currentWeather: {},
    forecast: [],
    spinnerActive: true,
    errorMessage: '',
  };

  fetchData = () => {
    axios.get(
     `https://api.openweathermap.org/data/2.5/forecast?q=${process.env.REACT_APP_CITY}&appid=${process.env.REACT_APP_WEATHER_KEY}`
   )
    .then((result) => {
      const { city, list } = result.data;
      this.setState({
        cityData: city !== undefined ? city : '',
        errorMessage: '',
        forecast: list !== undefined ? changeFormatDate(list) : [],
        currentWeather: list !== undefined ? (list).shift() : [],
      })
    })
    .then(() => {
      this.setState({
        spinnerActive: false
      })
    })
    .catch((error) => {
      console.log(error.response);
      this.setState({
        errorMessage: `${error.response.data.message} request failed - displaying recent data`,
      })
    });
  }

  componentDidMount ()  {
    this.fetchData()
  }

  render() {
    const { cityData, currentWeather, errorMessage, forecast, spinnerActive } = this.state;

    return (
      <>
      {spinnerActive ? (
        <Spinner />
      ) : (
      <div className="weather-app-home">
        <div className="weather-app-home__content">
          <LabelTop cityData={cityData} cityWeather={currentWeather} errorMessage={errorMessage} fetchDataFn={this.fetchData} />
          <SelectCity />
          <ForecastList forecastList={forecast} />
        </div>
      </div>
      )}
      </>
    );
  }
}

export default Home;
