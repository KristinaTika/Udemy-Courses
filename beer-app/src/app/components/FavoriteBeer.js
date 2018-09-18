import React from 'react';
import './FavoriteBeer.css';

const FavoriteBeer = (props) => {

    const beer = JSON.parse(localStorage.getItem("fav-beer"));

    const renderFoodPairing = (food) => {
        return food.map((f, i) => {
            return <li key={i}>{f}</li>
        })
    }

    const renderIngredients = (names) => {
        return names.map((h, i) => (<li key={i}>{h}</li>));
    }

    return (
        <div id="fav-beer-div">
            <div>
                <img src={beer.image} alt={beer.name} />
            </div>
            <div>
                <h2>{beer.name}, {beer.abv}%alc</h2>
                <h4><q>{beer.tagline}</q></h4>
                <h4>Description:</h4>
                <p>{beer.description}</p>
                <h4>Brewer Tips:</h4>
                <p>{beer.type}</p>
                <h4>Recommended food:</h4>
                <ul>{renderFoodPairing(beer.foodPairing)}</ul>
                <h4>Ingredients:</h4>
                <ol>
                    <li>
                        <ol id="hops">
                            <b><i>Hops:</i></b>
                            {renderIngredients(beer.ingredients.hops.name)}
                        </ol>
                    </li>
                    <li>
                        <ol id="malt">
                        <b><i>Malt:</i></b>
                            {renderIngredients(beer.ingredients.malt.name)}
                        </ol>
                    </li>
                </ol>
                <h4>Contributed by:</h4>
                <p>{beer.contributedBy}</p>
            </div>
        </div>
    );
};

export default FavoriteBeer;