import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <header className="navbar">
                <h2>Recipe App </h2>
                <ul>
                    <Link to="/"><li>New Recipe </li></Link>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/"><li>Contact Us</li></Link>
                </ul>
            </header>
        );
    }
}

export default Header;