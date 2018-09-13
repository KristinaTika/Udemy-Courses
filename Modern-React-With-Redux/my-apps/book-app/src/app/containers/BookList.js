import React, { Component } from 'react';
import './BookList.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/actions';
import BookItem from '../components/BookItem';

class BookList extends Component {
    constructor(props) {
        super(props);

        this.renderList = this.renderList.bind(this);
    }

    renderList() {
        const { books } = this.props;
        return books.map((book) => {
            return <BookItem key={book.title} book={book} selectBook={this.props.selectBook} />
        })
    }

    render() {
        return (
            <div>
                <h2>Books:</h2>
                <ol id="books-list">
                    {this.renderList()}
                </ol>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);