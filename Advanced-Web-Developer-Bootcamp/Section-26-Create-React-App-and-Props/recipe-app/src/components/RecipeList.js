import React, { Component } from 'react';
import Recipe from './Recipe';
import PropTypes from "prop-types";

class RecipeList extends Component {

    render() {

        const recipes =  this.props.recipes.map((r, i) => {
            return <Recipe key={i}
                title={r.title}
                ingredients={r.ingredients}
                img={r.img}
                instructions={r.instructions} />
        })

        return (
            <div className="recipe-list">
               {recipes}
            </div>
        );
    }
}

RecipeList.defaultProps = {
    recipes: [
        {
            title: "Spaghetti",
            ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
            instructions: "Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce.",
            img: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Tarako_spaghetti.jpg"
        },
        {
            title: "Milkshake",
            ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
            instructions: "Combine ice cream and milk. Blend until creamy.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdSfitAy-xPbp3xu1GGtZBkhP91J_6zM79H_9YSSRod5GHQp_9"
        },
        {
            title: "Avocado Toast",
            ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
            instructions: "Toast bread. Slice avocado and spread on bread. Add salt, oil, and pepper to taste.",
            img: "https://media.self.com/photos/5a298bbe9bddcf5b219b29e8/4:3/w_728,c_limit/1117-hummus-avocado-toast.jpg"
        }

    ]
}

RecipeList.propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
}



export default RecipeList;




