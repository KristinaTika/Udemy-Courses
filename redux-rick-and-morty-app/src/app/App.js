import React, { Component } from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import CharacterList from './containers/CharacterList';
import SingleCharacter from './containers/SingleCharacter';
import Header from './partials/Header';
import Footer from './partials/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
       <Switch>
         <Route path="/characters/:id" component={SingleCharacter} />
         <Route path="/characters" component={CharacterList} />
         <Redirect from="/" to="/characters" />
       </Switch>
       <Footer />
      </div>
    );
  }
}

export default App;
