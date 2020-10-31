import React, { Component } from 'react';
import axios from 'axios';
import LabelTop from './LabelTop';
import ForecastList from './ForecastList';
import Spinner from './Spinner'
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
      `http://api.weatherbit.io/v2.0/forecast/daily?city=${process.env.REACT_APP_CITY}&country=${process.env.REACT_APP_COUNTRY}&key=${process.env.REACT_APP_WEATHER_KEY}`
   )
    .then((result) => {
      const { data, city_name } = result.data;
      this.setState({
        cityData: city_name,
        forecast: data,
        currentWeather: (data).shift(),
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
          <ForecastList forecastList={forecast} />
        </div>
      </div>
      )}
      </>
    );
  }
}

export default Home;
