import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
    return (
        <header>
            <h2>React-Redux Blog App </h2>
            <Link to="/posts/new" id="header-btn">Create New Post</Link>
        </header>
    );
};

export default Header;