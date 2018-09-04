//creating a state
const initialState = {
    todos: [],
    id: 0,
}
// creating a reducer
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TODO":
            var newState = { ...state }; // making a new COPY of state
            newState.id++; // we're incrementing ID in state
            return {
                ...newState, // copying whatever was in state
                todos: [ // make todos an array
                    ...newState.todos, //  newState.todos -> whatever was in state before
                    { // new todos that we're gonna make. It should be an object with properties:
                        task: action.task, // task -> whatever is passed in action
                        id: newState.id  // id -> whatever we are storing in state
                    }
                ]
            };
        case "REMOVE_TODO":
            let todos = state.todos.filter( val => val.id !== +action.id) // grab all of todos where the ID property is NOT whatever the id we passed in right now
            return {...state, todos }
        default:
            return state;
    }
}
// creating a store
const store = Redux.createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // turn on redux developer tools

// adding event listener
$(document).ready(function () {
    // using event delegation
    $("ul").on("click", "button", function (event) { // Adding an event listener to a button inside UL
        store.dispatch({
            type: "REMOVE_TODO",
            id: $(event.target).attr("id") // getting an ID off a clicked button
        });
        $(event.target) // -> select the clicked todos
            .parent() // -> go to the parent
            .remove(); // -> delete it
    });
    // adding an event listener on form submit 
    $("form").on("submit", function (event) {
        event.preventDefault();
        let newTask = $("#task").val();
        store.dispatch({ // send an action to a rootReducer
            type: "ADD_TODO",
            task: newTask, // adding what a user typed in 
        });

        let currentState = store.getState(); // getting the current state of state, so we know what that ID is 
        let newLi = $("<li>", { // make a new list item
            text: newTask // whatever used typed in
        });
        let newButton = $("<button>", { // make a button
            text: "X", // with some text
            id: currentState.id // id -> whatever the ID in the state is 
        });
        newLi.append(newButton);

        $("#todos").append(newLi); // append newLi to to ul on the page
        $("form").trigger("reset");
    })
});