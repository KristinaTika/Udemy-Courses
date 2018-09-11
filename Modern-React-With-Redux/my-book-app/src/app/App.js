import React, { Component } from 'react';
import './App.css';
import Header from './partials/Header';
import Footer from './partials/Footer';
import BookList from './containers/BookList';
import BookDetail from './containers/BookDetail';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <main>
        <BookList />
        <BookDetail />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
