import React from 'react';

const BookItem = (props) => {

    const { book } = props;

    return (
        <li onClick={() => props.selectBook(book)}>
            {book.title}
        </li>
    );
};

export default BookItem;