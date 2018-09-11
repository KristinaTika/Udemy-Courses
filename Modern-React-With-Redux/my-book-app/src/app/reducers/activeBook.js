export const ActiveBook = (state = null, action) => {

    switch (action.type) {
        case "BOOK_SELECTED":
            return action.selectedBook;
        default:
            return state;
    }
}
