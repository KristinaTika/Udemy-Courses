import React from 'react';
import { Link } from 'react-router-dom';

const CharacterItem = (props) => {

    const { name, image, id } = props.character;
    return(
        <li>
            <Link to={"/characters/" + id}>
                <div>
                    <img src={image} alt={name} />
                    <p id="char-name">{name}</p>
                </div>
            </Link>
        </li>
    );
}

export default CharacterItem;