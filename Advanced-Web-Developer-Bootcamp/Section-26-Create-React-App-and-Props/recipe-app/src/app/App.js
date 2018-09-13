import React, { Component } from 'react';
import './App.css';
import Header from './partials/Header';
import RecipeList from './components/RecipeList';
import { Switch, Route } from 'react-router-dom';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route path="/" component={RecipeList} />
        </Switch>
      </div>
    );
  }
}

export default App;
