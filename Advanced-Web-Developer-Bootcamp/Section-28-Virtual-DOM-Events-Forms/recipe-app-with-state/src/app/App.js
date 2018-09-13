import React, { Component } from 'react';
import './App.css';
import Header from './partials/Header';
import RecipeList from './containers/RecipeList';
import NewRecipeForm from './components/NewRecipeForm';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [
        {
          id: 0,
          title: "Spaghetti",
          ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
          instructions: "Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce.",
          img: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Tarako_spaghetti.jpg"
        },
        {
          id: 1,
          title: "Milkshake",
          ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
          instructions: "Combine ice cream and milk. Blend until creamy.",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdSfitAy-xPbp3xu1GGtZBkhP91J_6zM79H_9YSSRod5GHQp_9"
        },
        {
          id: 2,
          title: "Avocado Toast",
          ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
          instructions: "Toast bread. Slice avocado and spread on bread. Add salt, oil, and pepper to taste.",
          img: "https://media.self.com/photos/5a298bbe9bddcf5b219b29e8/4:3/w_728,c_limit/1117-hummus-avocado-toast.jpg"
        }
      ],
      nextRecipeId: 3,
    }

    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = { ...recipe, id: this.state.nextRecipeId };
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
    
      }
    });
  }

  onDelete(id) {
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({ recipes })
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <Switch>
          <Route path="/recipes/new" render={props => {
            return <NewRecipeForm {...props} onSave={this.handleSave} />
          }} />
          <Route path="/about" component={About} />
          <Route path="/" render={props => {
            return <RecipeList recipes={this.state.recipes} onDelete={this.onDelete} />
          }} />
        </Switch>
      </div>
    );
  }

}

export default App;
