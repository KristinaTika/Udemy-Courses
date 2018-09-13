import React from 'react';
import PropTypes from 'prop-types';
import './CardItem.css';

const CardItem = (props) => {

    let style = {}
    if(props.showing) {
        style.backgroundColor = props.backgroundColor;
    }

    return (
        <div 
            onClick={props.onClick}className="card-container" 
            style={style}>    
        </div>
    );
    
}

CardItem.propTypes = {
    showing:PropTypes.bool.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,

};

export default CardItem;