import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/SearchBar';
import WeatherList from './containers/WeatherList';
import Footer from './partials/Footer';
import Header from './partials/Header';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <SearchBar />
        <WeatherList />
        <Footer />
      </div>
    );
  }
}

export default App;
