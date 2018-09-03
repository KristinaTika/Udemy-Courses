// REDUCER

// A function that accepts the state and an action and returns a new state (entire state object)

function rootReducer(state = {}, action) {
    switch (action.type) {
        case "LOGOUT_USER":
            return { ...state, login: false }
        case "LOGIN_USER":
            return { ...state, login: true }
        default:
            return state;
    }
}

