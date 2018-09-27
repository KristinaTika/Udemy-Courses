import React from 'react';
import './Loader.css';

const Loader = (props) => {
    return (
        <div className="preloader">
            <div className="loader">
                <div className="loader-inner box1"></div>
                <div className="loader-inner box2"></div>
                <div className="loader-inner box3"></div>
            </div>
        </div>
    );
};

export default Loader;