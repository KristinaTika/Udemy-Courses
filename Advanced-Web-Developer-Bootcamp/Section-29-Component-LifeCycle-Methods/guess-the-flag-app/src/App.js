import React, { Component} from 'react';
import './App.css';
import Header from './partials/Header';
import CountryGame from './components/CountryGame';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="flag-app">
        <Header />
        <CountryGame />
      </div>
    );
  }
}

export default App;
