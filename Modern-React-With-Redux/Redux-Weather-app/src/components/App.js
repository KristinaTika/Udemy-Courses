import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';




export default class App extends Component {
  render() {
    return (
      <div>Weather App
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
