import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import PostsList from './containers/PostsList';
import NewPost from './containers/NewPost';
import SinglePostDetails from './containers/SinglePostDetails';
import Header from './partials/Header';
import Footer from './partials/Footer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/posts/new" component={NewPost} />
            <Route path="/posts/:id" component={SinglePostDetails} />
            <Route path="/" component={PostsList} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
