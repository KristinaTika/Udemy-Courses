import React, { Component } from 'react';
import CountryItem from '../components/CountryItem';
import { connect } from 'react-redux';
import { fetchRegion, fetchSearchedCountry, fetchCapital } from '../action-creators/actions';
import './Search.css';


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
            searchType: false
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTypeOfSearch = this.handleTypeOfSearch.bind(this);
        this.renderRegion = this.renderRegion.bind(this);
        this.renderCountry = this.renderCountry.bind(this);
        this.renderCapital = this.renderCapital.bind(this);
    }

    handleSearch(e) {

        if(e.target.value === "") {
            this.setState({
                searchType: false
            })
        }
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

        if(!region && !country && !capital) {
            this.setState({
                searchType: true
            })
        }

        if (region === true) {
            this.props.fetchRegion(inputValue)
                .then(res => {
                    this.setState({
                        searchedRegion: this.props.searchedRegion,
                        inputValue: "",
                        searchedCountry: "",
                        searchedCapital: "",
                        errorMessage: false
                    });
                })
                .catch((error) => {
                    this.setState({
                        errorMessage: error
                    });
                });
        }

        if (country === true) {
            this.props.fetchSearchedCountry(inputValue)
                .then(res => {
                    this.setState({
                        searchedCountry: this.props.searchedCountry,
                        inputValue: "",
                        searchedRegion: "",
                        searchedCapital: "",
                        errorMessage: false
                    });
                })
                .catch((error) => {
                    this.setState({
                        errorMessage: error
                    });
                });
        }

        if (capital === true) {
            this.props.fetchCapital(inputValue)
                .then(res => {
                    this.setState({
                        searchedCapital: this.props.searchedCapital,
                        inputValue: "",
                        searchedCountry: "",
                        searchedRegion: "",
                        errorMessage: false
                    });
                })
                .catch((error) => {
                    this.setState({
                        errorMessage: error,
                    });
                });
        }
    }

    renderRegion(searchedRegion) {

        if (!searchedRegion) {
            return <div>"No searched results for region"</div>
        }
        return searchedRegion.map((r) => {
            return <CountryItem key={r.name} country={r} />
        });
    }

    renderCountry(searchedCountry) {

        if (!searchedCountry) {
            return <div>"No searched results for country."</div>
        }
        return searchedCountry.map((r) => {
            return <CountryItem key={r.name} country={r} />
        });
    }

    renderCapital(searchedCapital) {

        if (!searchedCapital) {
            return <div>"No searched results for capital."</div>
        }
        return searchedCapital.map((r) => {
            return <CountryItem key={r.name} country={r} />
        });
    }

    render() {

        const { regionOptions, searchedRegion, searchedCountry, searchedCapital, searchType, errorMessage } = this.state;
        return (
            <div id="search-container">
                <h2>Please select type of search</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="radio" name="search" value="region" onClick={this.handleTypeOfSearch} /> Region
                <input type="radio" name="search" value="country" onClick={this.handleTypeOfSearch} /> Country
                <input type="radio" name="search" value="capital" onClick={this.handleTypeOfSearch} /> Capital City
                <br />
                    <input type="text" name="inputValue" placeholder="search" onChange={this.handleSearch} value={this.state.inputValue} className="search-input" />
                    <p>{regionOptions ? "Search by region: Africa, Americas, Asia, Europe, Oceania" : ""}</p>
                    <p>{searchType ? "*Please select the type of search" : "" }</p>
                </form>
                <ul id="all-countries-list">
                    {!searchedCapital ? "" : this.renderCapital(searchedCapital)}
                    {!searchedRegion ? "" : this.renderRegion(searchedRegion)}
                    {!searchedCountry ? "" : this.renderCountry(searchedCountry)}
                </ul>
                <div className="error-msg">
                    {errorMessage ? <img src="http://unbxd.com/blog/wp-content/uploads/2014/02/No-results-found.jpg" alt="no searched results"  /> : "" }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        searchedRegion: state.region,
        searchedCountry: state.searchedCountry,
        searchedCapital: state.searchedCapital,
    }
}

export default connect(mapStateToProps, { fetchRegion, fetchSearchedCountry, fetchCapital })(Search);