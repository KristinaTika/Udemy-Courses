// We need a reducer (rootReducer)
// We need some redux store and initialState
// We need some way of changing the state

//creating a state
const initialState = {
    count: 0
}

// creating a reducer
function rootReducer(state = initialState, action) {
    switch(action.type) {
        case "INCREMENT":
            var newState = {... state} // making a COPY of a state
            newState.count++;
            return newState;
        case "DECREMENT":
            var newState = {... state}
            newState.count--;
            return newState;
        default:
            return state;
    }
}

// creating a store
const store = Redux.createStore(rootReducer);

// adding event listener
$(document).ready(function(){
    let currentState = store.getState();
    $("#counter").text(currentState.count)
    $("#increment").on("click", function() {
        // dispatch some action to increment the count!
       store.dispatch({
           type: "INCREMENT"
       });
       let currentState = store.getState(); // getting the current state of the store
       $("#counter").text(currentState.count) // selecting h1 and showing state.count
    });
    $("#decrement").on("click", function() {
        // dispatch some action to decrement the count!
        store.dispatch({
            type: "DECREMENT"
        });
        let currentState = store.getState(); 
        $("#counter").text(currentState.count) 
    })
});