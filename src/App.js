import React, { Component } from 'react';
import Header from './components/HeaderComponent';
import './App.css';
import FormComponent from './components/FormComponent';
import Weather from './components/WeatherComponent';


class App extends Component {
  constructor(props) {
    super(props);
  }

  getWeather = async (name) => {
  var url_request = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%0Awoeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%27$%7B" + name + "%7D%27)%20and%0Au%3D%27c%27&format=json"
  console.log(url_request);
  const api_call = await fetch(url_request);
  const response = await api_call.json();

  console.log(response);
}

  render() {
    return (
      <div>
        <Header />
        <FormComponent loadWeather={this.getWeather}  />
        <Weather />
      </div>
    );
  }
}

export default App;
