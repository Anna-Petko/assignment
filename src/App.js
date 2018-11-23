import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './main';
import Results from './results';
import Detail from './detail';

class App extends Component {
  render() {
    return (
      <Router>
      <div className = 'container'>
      <Switch>
        <Route exact path = '/' component = {Main} />
	      <Route path = '/forecast' component = {Results} />
	      <Route path = '/details' component = {Detail} />
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
