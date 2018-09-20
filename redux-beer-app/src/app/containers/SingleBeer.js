import React, { Component } from 'react';
import Loader from '../components/Loader';
import './SingleBeer.css';
import { fetchSingleBeer } from '../action-creators/actionCreators';
import { connect } from 'react-redux';
import SingleBeerItem from '../components/SingleBeerItem';

class SingleBeer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beer: {},
        }

        this.renderSingleBeer = this.renderSingleBeer.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchSingleBeer(id);
    }

    renderSingleBeer() {
        const { beer } = this.props;

        if (!beer){
            return <Loader />
        }
        return beer.map((b, i) => {
            return <SingleBeerItem beer={b} key={i} />
        });
    }

    render() {
        return (
            <div>
                {this.renderSingleBeer()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        beer: state.beer
    }
}

export default connect(mapStateToProps, { fetchSingleBeer })(SingleBeer);
