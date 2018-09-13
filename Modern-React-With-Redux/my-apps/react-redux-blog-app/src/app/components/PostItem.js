import React from 'react';
import { Link } from 'react-router-dom';
import './PostItem.css';

const PostItem = (props) => {

    const { post } = props;
    return (
        <li>
            <Link to={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
            </Link>
            <hr />
        </li>
    );
};

export default PostItem;

