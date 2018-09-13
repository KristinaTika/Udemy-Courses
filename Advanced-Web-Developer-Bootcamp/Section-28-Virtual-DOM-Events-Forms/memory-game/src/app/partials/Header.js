import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

const Header = ({onNewGame}) => {

    return (
        <header>
            <h1>Memory Game</h1>
            <button type="button" onClick={onNewGame}>New Game </button>
        </header>
    );
};

Header.propTypes = {
    onNewGame: PropTypes.func.isRequired
};

export default Header;