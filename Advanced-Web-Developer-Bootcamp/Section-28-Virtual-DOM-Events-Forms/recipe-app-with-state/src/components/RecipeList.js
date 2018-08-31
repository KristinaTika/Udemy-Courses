import React from 'react';
import Recipe from './Recipe';
import PropTypes from "prop-types";

const RecipeList =(props) => {

    const {onDelete} = props;
    const recipes = props.recipes.map((r) => {
        return <Recipe key={r.id}
            id={r.id}
            title={r.title}
            ingredients={r.ingredients}
            img={r.img}
            instructions={r.instructions}
            onDelete={onDelete} />
    })

    return (
        <div className="recipe-list">
            {recipes}
        </div>
    );
}

RecipeList.propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired
}

export default RecipeList;




