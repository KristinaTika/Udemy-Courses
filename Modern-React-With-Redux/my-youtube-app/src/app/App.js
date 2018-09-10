import React, { Component } from 'react';
import './App.css';
import Header from './partials/Header';
import _ from "lodash";
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import { videoService } from '../services/videoService';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.handleSearch("javascript");
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSelect(selectedVideo) {
    this.setState({ selectedVideo })
  }

  handleSearch(input) {
    videoService.fetchSearchedVideos(input)
      .then((videos) => {
        this.setState({
          videos,
          selectedVideo: videos[0]
        });
      });
  }

  render() {

    const videoSearch = _.debounce((input) => { this.handleSearch(input) }, 300);

    return (
      <div className="App">
        <Header videoSearch={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} handleSelect={this.handleSelect} />
      </div>
    );
  }
}

export default App;
