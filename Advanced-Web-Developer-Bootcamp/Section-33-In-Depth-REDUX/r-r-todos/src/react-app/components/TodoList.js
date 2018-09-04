import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from "react-redux";
import { addTodo, removeTodo } from '../../redux/actionCreators';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addTodo(this.state.task);
        e.target.reset();
    }

    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render() {
        let todos = this.props.todos.map((val, index) => (
        <Todo 
            removeTodo={this.removeTodo.bind(this, val.id)} 
            task={val.task} 
            key={index}  /> 
        ));

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task">Task</label>
                    <input type="text" name="task" id="task" onChange={this.handleChange} />
                    <button type="button">Add a todo!</button>
                </form>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => { // connecting redux state to props, so components can use it
    return {
        todos: reduxState.todos
    }
}


export default connect(mapStateToProps,
        {addTodo, removeTodo} // second parameter to connect has to be an object, we've passed action creators functions
    )(TodoList);

// Data flow:
// 1. mapStateToProps -> we got our initial state, that is going to place on props key todos 
// 2. we are going to render this component -> whenever we type in some task, the component will always be rendered 
// 3. we make it to our reducer -> because by typing and pressing enter we've dispatched an action
// 4. once we return the new state, we go back to mapStateToProps (object with todos and id of 1)
// 5. we then finally go back to render 