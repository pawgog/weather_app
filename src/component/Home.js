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
    city: 'London',
    cityData: {},
    currentWeather: {},
    forecast: [],
    spinnerActive: true,
    errorMessage: '',
  };

  fetchData = () => {
    axios.get(
     `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=${process.env.REACT_APP_WEATHER_KEY}`
   )
    .then((result) => {
      const { city, list } = result.data;
      this.setState({
        cityData: typeof city === 'undefined' ? '' : city,
        errorMessage: '',
        forecast: typeof list === 'undefined' ? [] : changeFormatDate(list),
        currentWeather: typeof list === 'undefined' ? [] : (list).shift(),
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
    this.fetchData();
  }

  selectCity = (e) => {
    const cityName = e.value;
    this.setState({
      city: cityName
    }, () => {
      this.fetchData();
    });
  }

  render() {
    const { city, cityData, currentWeather, errorMessage, forecast, spinnerActive } = this.state;

    return (
      <>
      {spinnerActive ? (
        <Spinner />
      ) : (
      <div className="weather-app-home">
        <div className="weather-app-home__content">
          <LabelTop city={city} cityData={cityData} cityWeather={currentWeather} errorMessage={errorMessage} fetchDataFn={this.fetchData} />
          <SelectCity selectCity={this.selectCity} />
          <ForecastList forecastList={forecast} />
        </div>
      </div>
      )}
      </>
    );
  }
}

export default Home;
