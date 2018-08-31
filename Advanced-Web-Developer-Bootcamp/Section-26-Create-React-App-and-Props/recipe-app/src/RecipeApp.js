import React, { Component } from 'react';
import './RecipeApp.css';
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList';

class RecipeApp extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;
