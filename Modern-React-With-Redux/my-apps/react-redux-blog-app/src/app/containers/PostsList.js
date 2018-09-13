import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/actions';
import PostItem from '../components/PostItem';
import _ from 'lodash';
import './PostsList.css';

class PostsList extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        const { posts } = this.props;
        return _.map(posts, (post) => {
            return <PostItem post={post} key={post.id} />
        })
    }

    render() {
        return (
            <div id="posts-div">
                <h1>POSTS:</h1>
                <ul id="posts-list">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts })(PostsList);