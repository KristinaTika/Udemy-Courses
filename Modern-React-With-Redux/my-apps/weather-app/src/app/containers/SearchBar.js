import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/actions';
import './SearchBar.css'

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
       
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({
            term: ""
        });
    }

    render() {
        return (
            <div>
                <form className="" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Get a five-day forecast in your favorite cities"
                        id="input-search"
                        value={this.state.term}
                        name="term"
                        onChange={this.handleInputChange}
                    />
                    <span className="">
                        <button type="submit" className="btn">Search</button>
                    </span>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar); 