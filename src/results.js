import React from 'react';
import queryString from 'query-string';
import { getWeather } from './service';
import Navbar from './navbar';
import { Redirect } from 'react-router';

class Results extends React.Component {
    state = {
        error: null,
        weather: null,
        loading: true,
        toDetail: false,
        data: null,
        city: null
    }

    async componentDidMount() {
        const city = queryString.parse(this.props.location.search);
        const weatherForecast = await getWeather(city.city);
        if (weatherForecast === null) {
            this.setState({
                error:'Looks like there was an error, please try again',
                loading: false
            });
        }
        this.setState({
            weather: weatherForecast,
            loading: false
        })
    }

    async componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search){
            this.setState({error: null, loading: true});
            const newCity = queryString.parse(this.props.location.search);
            const newWeatherForecast = await getWeather(newCity.city);
            if (newWeatherForecast === null) {
                this.setState({
                    error:'Looks like there was an error, please try again',
                    loading: false
                });
            }
            this.setState({
                weather: newWeatherForecast,
                loading: false
            })
        }
    }

    handleClick = (param,param1, e) => {
        this.setState({toDetail: true, data: param, city: param1})
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                    <Navbar />
                    <p className = 'error'>{this.state.error}</p>
                </div>
            )
        }

        if (this.state.loading === true) {
            return (
                <div>
                    <Navbar />
                </div>
            )
        }

        const weatherLocation = queryString.parse(this.props.location.search).city;
        const forecast = this.state.weather;

        if (this.state.toDetail === true) {
            return (<Redirect to={{
                pathname: `/details/${weatherLocation}`,
                state: { weatherData: this.state.data, city: this.state.city }
            }} />)
        }

        return (
            <div>
                <Navbar />
                <div className = 'results-container'>
                    <h1 className = 'title'>{weatherLocation}</h1>
                  <ul className = 'weather-results'>
                        {forecast.map((dailyForecast) => (
                            <li key = {dailyForecast.date} >
                                <ul className = 'thumbnails'  onClick = {this.handleClick.bind(this, dailyForecast, weatherLocation)}>
                                    <li>{dailyForecast.day}, {dailyForecast.date}</li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Results;
