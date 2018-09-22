import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Home from './pages/Home';
import SingleCharacter from './pages/SingleCharacter';
import ComicsPage from './pages/ComicsPage';
import SingleComic from './pages/SingleComic';
import SingleSerie from './pages/SingleSerie';
import SeriesPage from './pages/SeriesPage';
import StoryItem from './components/StoryItem';

const App = (props) => {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/characters/:id" component={SingleCharacter} />
        <Route path="/series/:id" component={SingleSerie} />
        <Route path="/series/" component={SeriesPage} />
        <Route path="/stories/:id" component={StoryItem} />
        <Route path="/comics/:id" component={SingleComic} />
        <Route path="/comics/" component={ComicsPage} />
        <Redirect from="/" to="/home" />
      </Switch>
      <Footer />
    </div>
  );
}


export default App;
