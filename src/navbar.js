import React from 'react';
import Form from './form';
import Button from './button';
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {
    state = {
        cityname: ''
    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({
            cityname: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push({
            pathname: '/forecast',
            search: `?city=${this.state.cityname}`
        });
        this.setState({cityname: ''});
    }

    render() {
        return (
            <div className = 'navbar'>
                <h1>Weather App</h1>
                <form className = 'form-container' onSubmit = {this.handleSubmit}>
                    <Form
                        value = {this.state.cityname}
                        onChange = {this.handleChange}
                    />
                    <Button disabled = {!this.state.cityname}/>
                </form>
            </div>
        )
    }
}

export default withRouter (Navbar);
