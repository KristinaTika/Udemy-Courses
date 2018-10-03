import React from 'react';
import './ComicItem.css';
import { Link } from 'react-router-dom';

export const ComicItem = (props) => {

    const {id, title, image} = props.comic;

    return (
        <Link to={"/comics/" + id}>
            <li className="comics-li-item">
                <div>
                    <img src={image} alt={title} />
                </div>
                <p> {title} </p>
            </li>
        </Link>
    );
}

export default ComicItem;