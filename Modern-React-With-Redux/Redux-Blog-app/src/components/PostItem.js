import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = (props) => {

    const post = props.post;

    return (
        <li>
            <Link to={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
            </Link>
            <hr />
            <p>{post.content}</p>
        </li>
    );
};

export default PostItem;