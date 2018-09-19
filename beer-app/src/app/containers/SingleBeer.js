import React, { Component } from 'react';
import { beerService } from '../../services/beers';
import Loader from '../components/Loader';
import './SingleBeer.css';


class SingleBeer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beer: {},
        }

        this.renderFoodPairing = this.renderFoodPairing.bind(this);
        this.renderIngredients = this.renderIngredients.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        return beerService.fetchSingleBeer(id)
            .then((res) => {
                this.setState({ beer: res })
            });
    }

    renderFoodPairing(food) {
        return food.map((f, i) => {
            return <li key={i}>{f}</li>
        })
    }

    renderIngredients(names) {
        return names.map((h, i) => (<li key={i}>{h}</li>));
    }

    render() {
        const beer = this.state.beer[0];
        if (!beer) {
           return <Loader />
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
                    <ul>{this.renderFoodPairing(beer.foodPairing)}</ul>
                    <h4>Ingredients:</h4>
                    <ol>
                        <li>
                            <ol id="hops">
                                <b><i>Hops:</i></b>
                                {this.renderIngredients(beer.ingredients.hops.name)}
                            </ol>
                        </li>
                        <li>
                            <ol id="malt">
                                <b><i>Malt:</i></b>
                                {this.renderIngredients(beer.ingredients.malt.name)}
                            </ol>
                        </li>
                    </ol>
                    <h4>Contributed by:</h4>
                    <p>{beer.contributedBy}</p>
                </div>
            </div>
        );
    }
}

export default SingleBeer;
