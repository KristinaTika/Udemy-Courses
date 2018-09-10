import React from 'react';
import SearchBar from '../components/SearchBar';



const Header = (props) => {

    return (
        <header>
            <SearchBar videoSearch={props.videoSearch} />
        </header>
    );
};

export default Header;