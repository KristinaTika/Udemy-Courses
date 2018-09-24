import React, { Component } from 'react';
import { countryService } from '../../services/countryService';
import SingleCountryItem from '../components/SingleCountryItem';
import "./SingleCountry.css";

class SingleCountry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            singleCountry: [],
        }
        this.showCountries = this.showCountries.bind(this)
    }

    componentDidMount() {
        countryService.fetchSingleCountry(this.props.match.params.name)
        .then (response => {
            this.setState({
                singleCountry:response
            })
        })
    }

    showCountries(countries) {
       if (!countries) {
            return <div>Loading</div>
        }
        return countries.map(country => {
            return <SingleCountryItem key={country.name} country={country}/>
        })
    }

    render() {
       
        return (
            <div>
              {this.showCountries(this.state.singleCountry)}
            </div>
        );
    }
}

export default SingleCountry;