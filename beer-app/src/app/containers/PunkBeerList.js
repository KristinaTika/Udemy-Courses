import React, { Component } from 'react';
import { beerService } from '../../services/beers';
import PunkBeerItem from '../components/PunkBeerItem';

class PunkBeerList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beers: [],
        }
        this.renderPunkBeers = this.renderPunkBeers.bind(this);
    }

    componentDidMount() {
        return beerService.fetchPunkBeers()
            .then((res) => {
                this.setState({
                    beers: res
                });
            });
    }

    renderPunkBeers() {
        const { beers } = this.state;
        return beers.map((beer) => {
            return <PunkBeerItem beer={beer} key={beer.id} />
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderPunkBeers()}
                </ul>
            </div>
        );
    }
}

export default PunkBeerList;