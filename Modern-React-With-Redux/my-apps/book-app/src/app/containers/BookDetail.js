import React, { Component } from 'react';
import { connect } from 'react-redux';
import './BookDetail.css';

class BookDetail extends Component {

    render() {
        const { book } = this.props;
        if (!book) {
            return <div id="message">Select a book to get details.</div>
        } else {

            return (
                <div id="book-detail">
                    <div><b>Title: </b>{book.title}</div>
                    <p><b>Author: </b> {book.author}</p>
                    <img src={book.image} alt={book.title} />
                    <p><b>Number Of Pages:</b> {book.pages}</p>
                    <p><b>Year Of Publishing:</b> {book.yop}</p>
                    <p><b>Price:</b> {book.price}</p>
                    <p id="book-about"><b >About Book:</b></p>
                    <p>{book.aboutBook}</p>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {

    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);