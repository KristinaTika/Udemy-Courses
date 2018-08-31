import React, { Component } from 'react';
import './App.css';
import Header from './partials/Header';
import RecipeList from './components/RecipeList';
import NewRecipeForm from './components/NewRecipeForm';

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
          id:2,
          title: "Avocado Toast",
          ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
          instructions: "Toast bread. Slice avocado and spread on bread. Add salt, oil, and pepper to taste.",
          img: "https://media.self.com/photos/5a298bbe9bddcf5b219b29e8/4:3/w_728,c_limit/1117-hummus-avocado-toast.jpg"
        }
      ],
      nextRecipeId: 3,
      showForm: false
    }

    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.newRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    });
  }

  onDelete(id) {
    const recipes = this.state.recipes.filter( r => r.id !== id);
    this.setState({recipes})
  }

  render() {
    const {showForm} = this.state;

    return (
      <div className="App">
        <Header onNewRecipe={() => this.setState({showForm: true})} />
        {showForm ? 
        <NewRecipeForm 
          onSave={this.handleSave} 
          onClose={() => this.setState({showForm: false})} /> 
          : null }
        <RecipeList recipes={this.state.recipes} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default App;
