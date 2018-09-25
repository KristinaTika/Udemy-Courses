import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllCountries } from '../action-creators/actions';
import CountryItem from './CountryItem';
import './CountriesList.css';


class CountriesList extends Component {

    componentDidMount() {
        this.props.fetchAllCountries();
    }

    render() {
        let display = <div> Loading countries </div>;
        const { countries } = this.props; 
        if(countries.length === 0) {
            return display;
        }
        display = countries.map(c => <CountryItem key={c.name} country={c} /> )

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
        countries: state.countries
    }
}

export default connect(mapStateToProps, { fetchAllCountries })(CountriesList);