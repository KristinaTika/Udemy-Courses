import React, { Component } from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import CharacterList from './containers/CharacterList';
import SingleCharacter from './containers/SingleCharacter';
import Header from './partials/Header';
import Footer from './partials/Footer';
import LocationList from './containers/LocationList';
import EpisodeList from './containers/EpisodeList';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
       <Switch>
         <Route path="/characters/:id" component={SingleCharacter} />
         <Route path="/characters" component={CharacterList} />
         <Route path="/location" component={LocationList} />
         <Route path="/episodes" component={EpisodeList} />
         <Redirect from="/" to="/characters" />
       </Switch>
       <Footer />
      </div>
    );
  }
}

export default App;
