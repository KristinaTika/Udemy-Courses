// Getting The State
// You can get the state of the Redux store using getState

const store = Redux.createStore(rootReducer);
store.dispatch({
    type: "LOGIN_USER"
});

const newState = store.getState();