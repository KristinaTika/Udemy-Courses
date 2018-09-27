import React from 'react';
import { Link } from 'react-router-dom';
import './Partials.css';

const Header = (props) => {

    return(
        <header>
            <h2>Redux-React Countries App </h2>
            <nav>
                <Link to="/home"> Home </Link>
                <Link to="/countries"> Countries </Link>
                <Link to="/quiz"> Geo Quiz </Link>
            </nav>
        </header>
    )
}

export default Header;