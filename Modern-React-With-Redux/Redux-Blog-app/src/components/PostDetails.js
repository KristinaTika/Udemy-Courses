import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost } from '../actions/actions';

class PostDetails extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchSinglePost(id);
    }

    render() {
        return (
            <div>
                PostDetails !
            </div>
        );
    };
}

const mapStateToProps = ({ posts }) => {
    return { posts };
}

export default connect(null, { fetchSinglePost })(PostDetails);