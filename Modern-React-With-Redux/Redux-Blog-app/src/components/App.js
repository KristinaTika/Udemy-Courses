import React, { Component } from 'react';
import PostsList from './PostsList';
import { Route, Switch, Redirect } from 'react-router-dom';
import NewPost from './NewPost';
import PostDetails from './PostDetails';

export default class App extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/posts/new" component={NewPost} />
                    <Route path="/posts/:id" component={PostDetails} />
                    <Route path="/" component={PostsList} />
                </Switch>
            </div>
        );
    }
}
