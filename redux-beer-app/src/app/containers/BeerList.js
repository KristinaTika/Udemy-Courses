import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBeers } from '../action-creators/actionCreators';
import Loader from '../components/Loader';
import BeerItem from '../components/BeerItem';
import './BeerList.css';

class BeerList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ""
        }

        this.renderBeers = this.renderBeers.bind(this);
    }

    componentDidMount() {
        this.props.fetchBeers();
    }

    renderBeers() {
        const { beers } = this.props;
        if (beers.length === 0) {
            return <Loader />
        }
        return beers.map((beer) => {
            return <BeerItem beer={beer} key={beer.id} />
        });
    }

    render() {
        return (
            <div id="beer-list-div">
                <ul className="list-beers">
                    {this.renderBeers()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        beers: state.beers,
        searchedBeers: state.searchedBeers
    }
}

export default connect(mapStateToProps, { fetchBeers })(BeerList);
