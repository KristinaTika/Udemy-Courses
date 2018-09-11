import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost, deletePost } from '../actions/actions';
import { Link } from 'react-router-dom';
import './SinglePostDetails.css';


class SinglePostDetails extends Component {

    componentDidMount() {
        if (!this.props.post) {
            const { id } = this.props.match.params;
            this.props.fetchSinglePost(id);
        }

    }

    handleDelete() {

        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push("/");
        })
    }

    handleCategories(post) {

        const categories = [];
        let tags = post.categories.split(" ");

        tags.forEach((tag) => {
            categories.push(tag)
        })
        
        return categories;
    }


    render() {

        const { post } = this.props;
        if (!post) {
            return <div>Loading...</div>
        } else {

            const tags = this.handleCategories(post);
            let categories = tags.map((tag, i) => {
                return <li key={i}>{tag}</li>
            })

            return (
                <div>
                    <div id="links">
                        <Link to='/'>Back To Posts </Link>
                        <button onClick={this.handleDelete.bind(this)}>Delete Post
                        </button>
                    </div>
                    <div id="single-post-details">
                        <h1>{post.title}</h1>
                        <ul id="tags">Tags:{categories}</ul>
                        <p>{post.content}</p>
                    </div>
                </div>
            );
        }

    }
}

const mapStateToProps = ({ posts }, ownProps) => {

    return {
        post: posts[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchSinglePost, deletePost })(SinglePostDetails);