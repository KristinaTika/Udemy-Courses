import React from 'react';
import './StoryItem.css';
import { Link } from 'react-router-dom';

export const StoryItem = (props) => {

    console.log(props)
    
    return (
        // <Link to={"/stories/" + props.t.id}>
            <li className="stories-li-item">
                <div>
                    {/* <img src={image} alt={name} /> */}
                </div>
                {/* <p> {name} </p> */}
            </li>
        // </Link>
    );
}

export default StoryItem;