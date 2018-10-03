import React from 'react';
import { Link } from 'react-router-dom';
import './MovieItem.css';

const MovieItem = (props) => {

    const {id, image, title, year} = props.movie;

    return(
        <Link to={"/movies/" + id}>
        <li className="movies-li-item">
            <div>
                <img src={image} alt={title} />
            </div>
            <p> {title} ({year}) </p>
        </li>
    </Link>
    );
}

export default MovieItem;