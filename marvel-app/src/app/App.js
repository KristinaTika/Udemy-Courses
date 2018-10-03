import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Home from './containers/characters/Home';
import MoviesList from './components/movies/MoviesList';
import SingleMovie from './components/movies/SingleMovie';
import SingleCharacter from './containers/characters/SingleCharacter';
import SingleComic from './containers/comics/SingleComic';
import SingleSerie from './containers/series/SingleSerie';
import SingleStory from './containers/SingleStory';

const App = (props) => {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/movies/:id" component={SingleMovie} />
        <Route path="/movies" component={MoviesList} />
        <Route path="/characters/:id" component={SingleCharacter} />
        <Route path="/series/:id" component={SingleSerie} />
        <Route path="/stories/:id" component={SingleStory} />
        <Route path="/comics/:id" component={SingleComic} />
        <Redirect from="/" to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}


export default App;
