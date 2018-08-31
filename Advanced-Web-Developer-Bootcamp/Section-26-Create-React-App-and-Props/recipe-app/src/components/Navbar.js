import React, {Component} from "react";

class Navbar extends Component {

    render() {
        return (
            <header className="navbar">
                <h2>Recipe App </h2>
                <ul>
                    <li>New Recipe </li>
                    <li>Home </li>
                    <li>About </li>
                    <li>Contact Us </li>
                </ul>
            </header>
        );
    }
}

export default Navbar;