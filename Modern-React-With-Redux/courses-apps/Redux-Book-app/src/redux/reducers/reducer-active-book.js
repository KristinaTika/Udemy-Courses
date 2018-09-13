// state parameter is NOT an app state, only the state reducer is responsible for
export const ActiveBook = (state = null, action) => {

    switch (action.type) {
        case "BOOK_SELECTED":
            return action.selectedBook;
    }

    return state;
}