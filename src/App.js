import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/home/index';
import HeaderComponent from './containers/header/index';
import FooterComponent from './containers/footer/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <HeaderComponent />
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/home" component={Home}></Route>
        </Switch>
      </Router>
      <FooterComponent />
      </>
    );
  }
}

export default App;
