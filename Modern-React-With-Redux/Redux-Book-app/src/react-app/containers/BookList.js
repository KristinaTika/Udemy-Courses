import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectBook } from '../../redux/actions/index'; // importing action creator selectBook
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item" onClick={() => this.props.selectBook(book)}>{book.title}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                Books:
                {this.renderList()}
            </ul>
        );
    }
}

const mapStateToProps = (state) => { // whatever is returned will show up as props inside of BookList
    return {
        books: state.books
    }
}


// Anything returned from the function will end up as props in the BookList container
const mapDispatchToProps = (dispatch) => {
    // whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch) // selectBook -> a plain function, returns a plain JS object
}

// Promote BookList from a component to a container - it needs to know about this dispatch method, make it available as prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);