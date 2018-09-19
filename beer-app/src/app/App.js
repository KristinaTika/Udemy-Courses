import React from 'react';
import './App.css';
import PunkBeerList from './containers/PunkBeerList';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './components/About';
import Header from './partials/Header';
import Footer from './partials/Footer';
import FavoriteBeer from './components/FavoriteBeer';
import SingleBeer from './containers/SingleBeer';

const App = (props) => {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={PunkBeerList} />
        <Route exact path="/beers/:id" component={SingleBeer} />
        <Route path="/favorites" component={FavoriteBeer} />
        <Route path="/about" component={About} />
        <Redirect from="/" to="/home" />
      </Switch>
      <Footer />
    </div>
  );

}

export default App;
