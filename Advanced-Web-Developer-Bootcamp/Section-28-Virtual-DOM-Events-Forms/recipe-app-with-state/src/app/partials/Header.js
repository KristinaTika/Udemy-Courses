import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {

    return (
        <header className="navbar">
            <h2>Recipe App </h2>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/recipes/new"><li>New Recipe</li></Link>
                <Link to="/about"><li>About</li></Link>
            </ul>
        </header>
    );
}

export default Header;