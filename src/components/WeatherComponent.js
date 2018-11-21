import React, {Component} from 'react';
import Forecast  from './ForecastComponent';


class Weather extends Component {
  render() {
    const data = this.props.data;
    if (data === null) {
      return <i className="fas fa-5x fa-spinner fa-spin Weather-spinner"></i>;
    } else {
      return (
        <div className = "row">
          <Forecast forecast={data.item.forecast} />
      </div>
      );
    }
  }
}

export default Weather;
