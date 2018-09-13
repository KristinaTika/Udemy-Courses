export const BOOK_SELECTED = "BOOK_SELECTED";

export const selectBook = (book) => {
    
    return {
        type: BOOK_SELECTED,
        selectedBook: book
    }
}