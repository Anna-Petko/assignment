import React from 'react';
import Navbar from './navbar';


class Detail extends React.Component{
    handleClick = (event) => {
        this.props.history.push({
            pathname: '/forecast',
            search: `?city=${this.props.location.state.city}`
        })
    }
    render() {
        const { weatherData, city } = this.props.location.state
        return (
            <div classname = "center">
                <Navbar />
                <ul className = 'details-container'>
                    <li>{weatherData.day}, {weatherData.date}</li>
                    <li>{city}</li>
                    <li>{weatherData.text}</li>
                    <li>min temp: {weatherData.low}</li>
                    <li>max temp: {weatherData.high}</li>
                </ul>
                <button className = 'button1' onClick = {this.handleClick}>Back</button>
            </div>
        )
    }
}

export default Detail;
