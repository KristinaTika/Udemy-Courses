import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleCountry } from '../action-creators/actions';
import SingleCountryItem from './SingleCountryItem';

class SingleCountry extends Component {

    componentDidMount() {
        const { name } = this.props.match.params;
        this.props.fetchSingleCountry(name);
    }

    render() {
        let display = <div> Loading countries </div>;
        const { singleCountry } = this.props; 
        if(!singleCountry) {
            return display;
        }
        display = singleCountry.map(c => <SingleCountryItem key={c.name} country={c} /> )

        return(
            <div>
                <ul id="all-countries-list">
                    {display}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        singleCountry: state.country
    }
}

export default connect(mapStateToProps, { fetchSingleCountry })(SingleCountry);