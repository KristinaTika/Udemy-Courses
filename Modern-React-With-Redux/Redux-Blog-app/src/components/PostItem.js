import React from 'react';

const PostItem = (props) => {

    const post = props.post;

    return (
        <li>
            <h2>{post.title}</h2>
            <hr />
            <p>{post.content}</p>
        </li>
    );
};

export default PostItem;