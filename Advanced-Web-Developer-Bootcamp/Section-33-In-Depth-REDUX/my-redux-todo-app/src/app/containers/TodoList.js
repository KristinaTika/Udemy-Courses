import React from 'react';
import './TodoList.css';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/actions';
import TodoItem from './TodoItem';

const TodoList = (props) => {

    const handleRemoveTodo = (id) => {
        props.removeTodo(id);
    }

    const { todos } = props;
    let renderTodos = <div>There aren't any todos at the moment.</div>

    if (todos.length === 0) {
        return renderTodos;
    }
    renderTodos = todos.map((todo, i) => {
        return <TodoItem todo={todo} key={i} handleRemoveTodo={handleRemoveTodo.bind(this, todo.id)} />
    });

    return (
        <div>
            <div >
                <h2>Todos List: </h2>
                <ul id="todo-item">{renderTodos}</ul>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
}

export default connect(mapStateToProps, { removeTodo })(TodoList);