import React from 'react';

const PunkBeerItem = (props) => {
    
    const {name, image, abv, description} = props.beer;

    return (
        <li>
            <div>{name}</div> 
            <div>
                <img src={image} alt={name} />
            </div>
            <p>{abv}% alc</p> 
            <p>{description}</p>
            </li>
    );
};

export default PunkBeerItem;