import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/actions';
import './NewPost.css'

class NewPost extends Component {

    renderField(field) {
        
        const { meta: { touched, error } } = field;
        return (
            <div className="field-div">
                <label>{field.label}</label>
                <input
                    type="text"
                    {...field.input}
                />
                <div>
                    {touched ? error : ""}
                </div>
            </div>
        )
    }

    onFormSubmit(values) {
        console.log(values);
        
        this.props.createPost(values, () => {
            this.props.history.push("/");
        });
    }

    render() {
        const { handleSubmit } = this.props;
        
        return (
            <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))} id="form-new-post">
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Content"
                    name="content"
                    component={this.renderField}
                />
                <div>
                <button type="submit" >Submit</button>
                <Link to="/">Cancel</Link>
                </div>
            </form>
        );
    }
}

const validateForm = (values) => {

    const errors = {};

    if (!values.title) {
        errors.title = "Please enter title!";
    }
    if (!values.categories) {
        errors.categories = "Please add a tag!";
    }
    if (!values.content) {
        errors.content = "Please enter some content";
    }

    return errors;
}

export default reduxForm({
    validate: validateForm,
    form: "PostsNewForm"
})(
    connect(null, { createPost })(NewPost)
    );

