import React, { Component } from 'react';

class ForecastDay extends Component {

  render() {
    return (
      <li className="Forecast-day">
        <p>{this.props.eachDay.day}, {this.props.eachDay.date}</p>
        <p>max temp.{this.props.eachDay.high}°</p>
        <p>min temp.{this.props.eachDay.low}°</p>
        <p>{this.props.eachDay.text}</p>
      </li>
    );
  }
}

export default ForecastDay;
