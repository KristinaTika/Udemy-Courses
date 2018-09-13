import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/actions';

const TodoItem = ({ todo, handleRemoveTodo }) => {

    return (
        <li>
            <p>{todo.todo}</p>
            <button onClick={handleRemoveTodo}>X</button>
        </li>
    );
};

export default connect(null, { removeTodo })(TodoItem);