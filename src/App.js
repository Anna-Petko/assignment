import React, { Component } from 'react';
import Header from './components/HeaderComponent';
import './App.css';
import FormComponent from './components/FormComponent';
import Weather from './components/WeatherComponent';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: props.initialCity,
      data: null
    };
    this.getWeather();
  }

  updateSearchText(searchText) {
   this.setState({
     searchText
   });
 }

  getWeather (){
    const searchText = this.state.searchText;
    const url = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${searchText}")and u='c'&format=json`;
    console.log(url);
    fetch(url)
          .then(response => response.json())
          .then(responseJson => this.setState({data: responseJson.query.results.channel}))
          .catch(error => console.error(error));
        }
        render() {
          return (
            <div>
              <Header />
              <FormComponent searchText={this.state.searchText}
                            updateSearchText={this.updateSearchText.bind(this)}
                            getWeather={this.getWeather.bind(this)} />
              <Weather data={this.state.data}/>
            </div>
    );
  }
}

export default App;
