import React from "react";
import "./Recipe.css";
import PropTypes from "prop-types";

const Recipe = (props) => {
    
    const { title, img, instructions, id, onDelete } = props;
    const ingredients = props.ingredients.map((ing, i) => {
        return <li key={i}>{ing}</li>
    })

    return (
        <div className="recipe-card">
            <div className="recipe-card-image">
                <img src={img} alt={title} />
            </div>
            <div className="recipe-card-content">
                <h3 className="recipe-title"> {title} </h3>
                <h4> Ingredients: </h4>
                <ul>
                    {ingredients}
                </ul>
                <h4> Instructions: </h4>
                <p>{instructions} </p>
                <button type="button" onClick={() => onDelete(id)}>DELETE</button>
            </div>
        </div>
        );
    }

Recipe.propTypes = {
    title: PropTypes.string.isRequired,
    ingredients:PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Recipe;