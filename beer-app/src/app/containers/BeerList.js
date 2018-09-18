import React, { Component } from 'react';
import { beerService } from "../../services/beers";
import BeerItem from '../components/BeerItem';
import './BeerList.css';

class BeerList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beers: [],
        }
        this.renderBeers = this.renderBeers.bind(this);
    }

    componentDidMount() {
        return beerService.fetchBeers()
            .then((res) => {
                this.setState({
                    beers: res,
                })
            })
    }

    renderBeers() {
        const { beers } = this.state;

        return beers.map((beer) => {
            return <BeerItem key={beer.id} beer={beer} />
        });
    }

    render() {
        return (
            <div>
                <h2>Breweries</h2>
                <ul>
                    {this.renderBeers()}
                </ul>
            </div>
        );
    }
}

export default BeerList;