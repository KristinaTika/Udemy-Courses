import React from 'react';
import './CharacterItem.css';
import {Link} from 'react-router-dom';

export const CharacterItem = (props) => {

    const {name, image, id} = props.character;
    
    return (
        <Link to={"/characters/" + id}>
            <li className="characters-li-item">
                <div>
                    <img src={image} alt={name} />
                </div>
                <p> {name} </p>
            </li>
        </Link>
    );
}

export default CharacterItem;