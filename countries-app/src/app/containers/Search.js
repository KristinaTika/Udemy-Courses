import React, { Component } from 'react';
import { countryService } from '../../services/countryService';
import CountryItem from '../components/CountryItem';


class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            region: false,
            country: false,
            capital: false,
            regionOptions: false,
            inputValue: "",
            errorMessage: "",
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTypeOfSearch = this.handleTypeOfSearch.bind(this);
        this.renderResults = this.renderResults.bind(this);
    }

    handleSearch(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleTypeOfSearch(e) {
        if (e.target.value === "region") {
            this.setState({
                [e.target.value]: true,
                country: false,
                capital: false,
                regionOptions: true,
            });
        }
        if (e.target.value === "country") {
            this.setState({
                [e.target.value]: true,
                region: false,
                capital: false,
                regionOptions: false,
            });
        }
        if (e.target.value === "capital") {
            this.setState({
                [e.target.value]: true,
                region: false,
                country: false,
                regionOptions: false,
            });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const { region, country, capital, inputValue } = this.state;
        if (region === true) {
            countryService.fetchRegion(inputValue)
                .then(res => {
                    this.setState({
                        results: res,
                        inputValue: ""
                    });
                })
                .catch((error) => {
                    this.setState({
                        errorMessage: error
                    });
                });
        }

        if (country === true) {
            countryService.fetchSearchedCountry(inputValue)
                .then(res => {
                    this.setState({
                        results: res,
                        inputValue: ""
                    });
                })
                .catch((error) => {
                    this.setState({
                        errorMessage: error
                    });
                });
        }

        if (capital === true) {
            countryService.fetchCapital(inputValue)
                .then(res => {
                    this.setState({
                        results: res,
                        inputValue: ""
                    });
                })
                .catch((error) => {
                    this.setState({
                        errorMessage: error
                    });
                });
        }
    }

    renderResults(results) {

        if (results.length === 0) {
            return <div>"No results"</div>
        }
        return results.map((r) => {
            return <CountryItem key={r.name} country={r} />
        });
    }

    render() {

        const { regionOptions, results } = this.state;
        return (
            <div>
                <h2>Please select type of search</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="radio" name="search" value="region" onClick={this.handleTypeOfSearch} /> Region
                <input type="radio" name="search" value="country" onClick={this.handleTypeOfSearch} /> Country
                <input type="radio" name="search" value="capital" onClick={this.handleTypeOfSearch} /> Capital City
                <br />
                    <input type="text" name="inputValue" placeholder="search" onChange={this.handleSearch} value={this.state.inputValue} />
                    <p>{regionOptions ? "Search by region: Africa, Americas, Asia, Europe, Oceania" : ""}</p>
                </form>
                <ul id="all-countries-list">
                    {!results ? "" : this.renderResults(results)}
                </ul>
                <div>
                    {this.state.errorMessage !== "" ? "No results" : ""}
                </div>
            </div>
        );
    }
}

export default Search;