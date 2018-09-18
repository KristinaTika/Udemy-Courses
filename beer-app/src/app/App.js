import React, { Component } from 'react';
import './App.css';
import PunkBeerList from './containers/PunkBeerList';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './components/About';
import Header from './partials/Header';
import Footer from './partials/Footer';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/beers" component={PunkBeerList} />
          <Route path="/about" component={About} />
          <Redirect from="/" to="/beers"/>
        </Switch>
        <Footer />
      </div>
          );
  }
}

export default App;
