import React from 'react';
import './Partials.css';

const Footer = (props) => {

    return (
        <footer>
            &#169; {new Date().getFullYear()} Kristina Butkovic
        </footer>
    );
};

export default Footer;