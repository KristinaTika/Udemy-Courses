import React from 'react';
import './Partials.css';

const Footer = (props) => {

    return (
        <footer>
           Copyright &#169; {new Date().getFullYear()} by Kristina Butkovic
        </footer>
    );
};

export default Footer;