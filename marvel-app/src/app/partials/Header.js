import React from 'react';
import { Link } from 'react-router-dom';
import './Partials.css';

const Header = (props) => {
    return (
        <header>
                <h1>Marvel App </h1>
                <nav>
                    <ul>
                    <Link to="/home">Home</Link>
                    <Link to="/comics">Comics</Link>
                    <Link to="/series">Series</Link>
                    </ul>
                </nav>
        </header>
    );
};

export default Header;