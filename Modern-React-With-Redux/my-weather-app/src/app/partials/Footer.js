import React from 'react';
import './partials.css';

const Footer = (props) => {

    return (
        <footer>
                {new Date().getFullYear()} copyright &#169; by Kristina Butkovic
        </footer>
    );
};

export default Footer;