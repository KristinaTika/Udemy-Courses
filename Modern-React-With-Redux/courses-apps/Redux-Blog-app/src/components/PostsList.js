import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from "../actions/actions";
import _ from 'lodash'
import PostItem from './PostItem';
import { Link } from 'react-router-dom';
// import { bindActionCreators } from 'redux';

class PostsList extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return <PostItem post={post} key={post.id} />
        })
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add A Post
                    </Link>
                </div>
                <h3>Posts </h3>
                <ul className="list-group">
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

//  Umesto da pisemo zasebnu funkciju mapDispatchToProps i tu prosledimo action creator (fetchPosts):

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({ fetchPosts }, dispatch);
// }

// Mozemo  skraceno da napisemo, i u connect funkciji direktno prosledimo fetchPosts
export default connect(mapStateToProps, { fetchPosts })(PostsList);