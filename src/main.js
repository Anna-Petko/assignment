import React from 'react';
import Form from './form';
import Button from './button';
import Navbar from './navbar';

class Main extends React.Component {
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
        })
    }

    render() {
        return (
            <div className = 'full-container'>
                <Navbar />
              <div className = 'main-container'>
                    <form className = 'form-container#' onSubmit = {this.handleSubmit}>
                        <label className = 'label' htmlFor= 'cityname'>
                            Enter a City and State
                        </label>
                        <Form
                            value = {this.state.cityname}
                            onChange = {this.handleChange}
                        />
                        <Button disabled = {!this.state.cityname}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Main;
