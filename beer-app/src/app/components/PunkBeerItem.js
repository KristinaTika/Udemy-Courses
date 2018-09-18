import React, { Component } from 'react';
import './PunkBeerItem.css';
import { Link } from 'react-router-dom';

class PunkBeerItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favBeer: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const { favBeer } = this.state;

        this.setState({
            favBeer: true
        });

        localStorage.setItem("fav-beer", JSON.stringify(this.props.beer));

        this.setState({
            favBeer: !favBeer
        });

    }

    render() {
        const { name, image, abv, description } = this.props.beer;

        return (
            <li className="beer-item-li">
                <div>{name}</div>
                <div>
                    <img src={image} alt={name} className="beer-img" />
                </div>
                <p>{abv}% alc</p>
                <button onClick={this.handleClick} className={this.state.favBeer ? "favorite-beer" : ""}>Favorite</button>
                <p>{description}</p>
                <Link to={"/beers/" + this.props.beer.id}>Read More</Link>
            </li>
        );
    }
};

export default PunkBeerItem;