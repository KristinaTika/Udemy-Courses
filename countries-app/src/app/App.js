import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Header from './partials/Header';
import Footer from './partials/Footer';
import Home from './containers/Home';
import SingleCountry from './containers/SingleCountry';


class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/countries/:name" component={SingleCountry} />
            <Redirect from="/" to="/home" />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
