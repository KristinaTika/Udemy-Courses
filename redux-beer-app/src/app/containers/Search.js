import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearchedBeers } from '../action-creators/actionCreators';
import './Search.css';
import BeerItem from '../components/BeerItem';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { inputValue } = this.state;
        this.props.fetchSearchedBeers(inputValue);
    }

    renderSearchedBeers = () => {
        let renderSearch = <ul className="list-beers">Search some beers</ul>

        if (!this.props.beers) {
            return renderSearch;
        }
        if (this.props.beers.length === 0) {
            return renderSearch = <img src="https://webmarketingschool.com/wp-content/uploads/2018/03/nojobsfound.png" id="no-results" alt="Oops! No results found." />
        }
        return this.props.beers.map((beer) => {
            return <BeerItem beer={beer} key={beer.id} />
        });
    }

    render() {
        return (
            <div id="search-list-div" >
                <form onSubmit={this.handleSubmit}>
                    <input type="search" placeholder="Search beers by name" name="inputValue" onChange={this.handleChange} />
                </form>
                <div className="list-beers">
                    {this.renderSearchedBeers()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        beers: state.searchedBeers
    }
}

export default connect(mapStateToProps, { fetchSearchedBeers })(Search);