import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
   
    return (
        <header className="navbar">
            <h2>Recipe App </h2>
            <ul>
                <li onClick={props.onNewRecipe}>New Recipe </li>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
        </header>
    );
}
Header.defaultProps = {
    onNewRecipe() {}
}
Header.propTypes = {
    onNewRecipe: PropTypes.func
}


export default Header;