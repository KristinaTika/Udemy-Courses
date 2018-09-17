import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {

    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type="search" placeholder="Search characters" name="searchValue" onChange={props.handleSearch} />
            </form>
        </div>
    )
}

export default SearchBar;