import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

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
        console.log(e.target.value);

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        // We need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({
            term: ""
        });
    }

    render() {
        return (
            <div>
                <form className="input-group" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Get a five-day forecast in your favorite cities"
                        className="form-control"
                        value={this.state.term}
                        name="term"
                        onChange={this.handleInputChange}
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Search</button>
                    </span>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar); // we write NULL because connect accepts 2 arguments, and 2nd is always mapDispatchToProps