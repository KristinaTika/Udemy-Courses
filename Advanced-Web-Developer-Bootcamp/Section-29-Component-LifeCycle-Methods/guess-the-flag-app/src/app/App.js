import React from 'react';
import './App.css';
import Header from './partials/Header';
import CountryGame from './containers/CountryGame';

const App = (props) => {

  return (
    <div className="flag-app">
      <Header />
      <CountryGame />
    </div>
  );
}

export default App;
