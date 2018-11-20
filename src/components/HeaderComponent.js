import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';


class Header extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className = "navbar">
         <Navbar>
         <NavbarBrand><h1>Weather App</h1></NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default Header;
