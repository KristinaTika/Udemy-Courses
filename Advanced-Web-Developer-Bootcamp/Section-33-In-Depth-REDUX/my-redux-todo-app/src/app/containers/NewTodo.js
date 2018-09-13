import React, { Component } from 'react';
import './NewTodo.css';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

class NewTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleAdd(todo) {
        this.props.addTodo(todo);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.handleAdd(this.state.todo);
        e.target.reset();
        this.props.history.push("/");
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} id="form-new-todo">
                <label htmlFor="todo">Todo</label>
                <input type="text" name="todo" id="todo" onChange={this.handleChange} />
                <button>Add a Todo!</button>
            </form>
        );
    }
}

export default connect(null, { addTodo })(NewTodo);