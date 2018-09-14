import React from 'react';
import './App.css';
import Header from './partials/Header';
import { Switch, Route } from 'react-router-dom';
import TodoList from './components/TodoList';
import NewTodo from './containers/NewTodo';
import Footer from './partials/Footer';

const App = (props) => {

  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/todos/new" component={NewTodo} />
          <Route path="/" component={TodoList} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
