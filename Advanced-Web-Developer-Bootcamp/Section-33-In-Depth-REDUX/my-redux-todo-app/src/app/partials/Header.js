import React from 'react';
import './Partials.css';
import { Link } from 'react-router-dom';

const Header = (props) => {

    return (
        <header>
            <ul>
                <li><Link to="/">React-Redux Todo App</Link></li>
                <li><Link to="/todos/new">Add new todo</Link></li>
            </ul>
        </header>
    );
};

export default Header;