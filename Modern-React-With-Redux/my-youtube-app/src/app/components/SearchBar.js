import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.props.videoSearch(e.target.value)
    }

    render() {
        return (
            <div className="search-bar">
                <h1>Welcome to my version of Youtube </h1>
                <input
                    type="text"
                    placeholder="Search"
                    name="searchValue"
                    value={this.state.searchValue}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default SearchBar;