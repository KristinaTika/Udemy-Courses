import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Header from './partials/Header';
import Footer from './partials/Footer';
import Home from './containers/Home';
import SingleCountry from './containers/SingleCountry';
import Search from './containers/Search';
import Quiz from './containers/Quiz';


class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/home" component={Search} />
            <Route path="/countries/:name" component={SingleCountry} />
            <Route path="/countries" component={Home} />
            <Route path="/quiz" component={Quiz} />
            <Redirect from="/" to="/home" />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
