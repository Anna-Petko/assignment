import React, {Component} from 'react';
import {Form, Input, Label} from 'reactstrap';


class FormComponent extends Component {
  constructor(props) {
   super(props);
   this.state = {value: ''};

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.getWeather = this.props.loadWeather;
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    this.getWeather(this.state.value);
  }

  render() {
    return(
        <div className = "row">
          <form onSubmit = {this.handleSubmit}>
            <Label> Enter a City and a State</Label>
          <Input type = "text" name = "city" placeholder ="St.George,Utah"
                 value = {this.state.value} onChange={this.handleChange} />
               <button type = "submit">Get Weather</button>
           </form>
        </div>
      );
    }
  }

export default FormComponent;
