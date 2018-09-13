import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import { addTodo, removeTodo, getTodos } from "../../redux/actionCreators";
import { Route } from "react-router-dom";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getTodos();
  }

  handleSubmit(val) {
    this.props.addTodo(val);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    let todos = this.props.todos.map(val => (
      <Todo
        removeTodo={this.removeTodo.bind(this, val._id)}
        task={val.task}
        key={val._id}
      />
    ));
    return (
      <div>
        <Route
          path="/todos/new"
          component={props => (
            <NewTodoForm {...props} handleSubmit={this.handleSubmit} />
          )}
        />
        <Route exact path="/todos" component={() => <div>{todos}</div>} />
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    todos: reduxState.todos
  };
}

export default connect(mapStateToProps, { addTodo, removeTodo, getTodos })(TodoList);


// Data flow
// 1. rootReducer.js --> rootReducer initial default state;
// 2. TodoList.js --> mapStateToProps;
// 3. TodoList.js --> render() component;
// 4. TodoList.js --> componentDidMount --> when that component mounts we'll trigger getTodos() --> is an action creator that returns a function that is called THUNK;
// 5. actionCreators.js --> getTodos() will dispatch asynchronous operation, and when it's done ;
// 6. actionCreators.js --> we'll dispatch handleTodos() --> we get back data from server;
// 7. actionCreators.js --> we'll dispatch an action of GET_TODOS ;
// 8. rootReducer.js --> that will get us back to rootReducer case GET_TODOS;
// 9. TodoList.js --> mapStateToProps with NEW data;
// 10. TodoList.js --> render() --> and then we render component on the page;