// function reducer - accepts state and action as parameters, and RETURNS the next state
function counter (state, action) {
    if(action.type === "INCREMENT") {
        return state++;
    } else if (action.type === "DECREMENT") {
        return state--;
    } else {
        return state;
    }
}


console.log("Tests passed!");