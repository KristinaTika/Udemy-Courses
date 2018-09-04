const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

const addTodo = (task) => {

    return {
        type: ADD_TODO,
        task
    }
}

const removeTodo = (id) => {

    return {
        type: REMOVE_TODO,
        id
    }
}

export { ADD_TODO, REMOVE_TODO, addTodo, removeTodo };