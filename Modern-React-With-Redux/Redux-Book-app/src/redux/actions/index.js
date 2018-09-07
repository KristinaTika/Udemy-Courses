// ACTION CREATORS ->
//  is a Function that RETURNS:
//     - an ACTION
//         (plain JS object that must have a KEY called TYPE and a string value)

export const selectBook = (book) => {
    
    return {
        type: "BOOK_SELECTED",
        selectedBook: book

    }
}