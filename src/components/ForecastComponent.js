import React, { Component } from 'react';
import ForecastDay from './ForecastDayComponent';

class Forecast extends Component {
  render() {
    const forecast = this.props.forecast;
    return (
      <ul>
          {forecast.map((day,index) => <ForecastDay
          key={index}
          eachDay={day}
          />)}
        </ul>
    );
  }
}

export default Forecast;
