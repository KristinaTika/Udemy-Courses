// Changing the State
// The only way to change the state is by calling dispatch

const store = Redux.createStore(rootReducer);
store.dispatch({
    type: "LOGIN_USER"
});