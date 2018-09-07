import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

    render() {
        const book = this.props.book;
        if (!book) {
            return <div>Select a book to get details. </div>
        }
        return (
            <div className="book-detail">
                <h3><b>Book Details :</b> </h3>
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

const mapStateToProps = (state) => {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);