import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost, deletePost } from '../actions/actions';
import { Link } from 'react-router-dom';

class PostDetails extends Component {

    componentDidMount() {

        if (!this.props.post) {
            const { id } = this.props.match.params;
            this.props.fetchSinglePost(id);
        }
    }

    handleDelete() {

        const { id } = this.props.match.params;
        // moze i ovako const id = this.props.post.id
        this.props.deletePost(id, () => { // ako zelimo da koristimo navigaciju, najbolje je handler funkcijama proslediti callback i tu uputiti korisnika gde vec zelimo.
            this.props.history.push("/");
        });
    }

    render() {

        const { post } = this.props;
        if (!post) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link to="/">Back to posts</Link>
                <button className="btn btn-danger pull-xs-right" onClick={this.handleDelete.bind(this)}>Delete Post </button>
                <h3>{post.title} </h3>
                <h6>Categories: {post.categories} </h6>
                <p>{post.content} </p>
            </div>
        );
    }
}

const mapStateToProps = ({ posts }, ownProps) => { // ownProps --> is an object that is headed to targeted component; this.props === ownProps
    return {
        post: posts[ownProps.match.params.id] // we did this so the component would receive only one post 
    }
}

export default connect(mapStateToProps, { fetchSinglePost, deletePost })(PostDetails);