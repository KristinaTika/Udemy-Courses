import { combineReducers } from 'redux';
import { BooksReducer } from './reducer-books';
import { ActiveBook } from './reducer-active-book';

const rootReducer = combineReducers({
    books: BooksReducer, // mapping the state
    activeBook: ActiveBook
});

export default rootReducer;
