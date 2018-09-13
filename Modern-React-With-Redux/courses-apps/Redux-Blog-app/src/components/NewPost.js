import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';  //function reduxForm --> very similar to connect function
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/actions';

class NewPost extends Component {

    renderField(field) {
        // field --> meta property:
        //              - pristine --> input field is not clicked on
        //              - touched --> input field is focused
        //              - invalid --> validation

        const { meta: { touched, error } } = field;
        const className = `form group ${touched && error ? "has-danger" : ""}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    type="text"
                    className="form-control"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ""}
                </div>
            </div>
        );
    }

    onFormSubmit(values) {

        this.props.createPost(values, () => {
            this.props.history.push("/");
        });
    }

    render() {

        const { handleSubmit } = this.props; // this.props.handleSubmit --> is passed as a prop from Redux Form

        return (
            <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                <Field // --> represents a distinct input that will be visible on the screen to our users
                    label="Title For The Post"
                    name="title" // --> title === field.title in validateForm function 
                    component={this.renderField}
                />
                <Field
                    label="Tags"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

const validateForm = (values) => { // values --> object that contains all the values from the form inputs 

    const errors = {};
    // Validate the inputs from 'values'
    if (!values.title) {
        errors.title = "Please enter title!";
    }
    if (!values.categories) {
        errors.categories = "Please enter a tag!";
    }
    if (!values.content) {
        errors.content = "Please enter some content!";
    }

    // If errors is empty, the from is fine to submit
    // If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate: validateForm,
    form: "PostsNewForm" // form --> the name of the form
})(
    connect(null, { createPost })(NewPost)
    );