import React from 'react';
import { Link } from 'react-router-dom';
import './Partials.css';

const Header = (props) => {

    return (
        <header>
            <h2>Beer Lover </h2>
            <nav>
                <Link to="/beers">Home</Link>
                <Link to="/favorites">Favorite</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
    );
};

export default Header;