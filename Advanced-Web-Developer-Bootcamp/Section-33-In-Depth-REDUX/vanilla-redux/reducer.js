var initialState = {
    count: 0
}

function rootReducer(state = initialState, action) { // 2 parameters: 1) state default parameter = initialState 2) Action is an object
    if (action.type === "INCREMENT") {
        let newState = Object.assign({}, state) // making a copy of a STATE, so it should be a pure function
        newState.count++
        return newState
    }
    if (action.type === "DECREMENT") {
        let newState = Object.assign({}, state) // making a copy of a STATE, so it should be a pure function
        newState.count--
        return newState
    }
    return state // {type:"@@redux/init"} what our initial state is
}

var store = Redux.createStore(rootReducer); // created a store -> where our state lives!

// we can not make a store without a reducer!
// a REDUCER is a function that determines what our state looks like and how we change the state.

store.getState() // getState() -> a method that shows what state CURRENTLY looks like

//store.dispatch() // dispatch -> the way we make changes to our state by dispatching an ACTION

store.dispatch({
    type: "INCREMENT"  // ACTION is an object with type property
})

// 0 - create a reducer with some initial state
// 1 - create a store -> the reducer is run and our initial state is defined
// 2 -whenever we want to see our state -> store.getState()
// 3 - whenever we want to make a change to our state -> store.dispatch()
    // 4 - actions are objects
    // 5 - actions must have a key of "type"
// 6 -writing a function that returns an object
    // 7 - write a function that returns an action

function increment() {  // ACTION CREATORS
    return {
        type: "INCREMENT"
    }
}