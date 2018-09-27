import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Footer from './partials/Footer';
import Header from './partials/Header';
import Search from './containers/Search';
import CountriesList from './components/CountriesList';
import SingleCountry from './components/SingleCountry';
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
          <Route path="/countries" component={CountriesList} />
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
