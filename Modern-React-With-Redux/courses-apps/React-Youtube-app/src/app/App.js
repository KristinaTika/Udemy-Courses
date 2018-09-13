import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

// youtube api-key 
const API_KEY = "AIzaSyC3RdXNzAlQHa6aqNEckhlTQKF5DBd1k60";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        }

        this.handleSearch("surfboards");

        this.handleSelect = this.handleSelect.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSelect(selectedVideo) {
        this.setState({ selectedVideo })
    }

    handleSearch(input) {
        YTSearch({ key: API_KEY, term: input }, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0],
            });
        });
    }


    render() {

        const videoSearch = _.debounce((input) => { this.handleSearch(input) }, 300);

        return (
            <div>
                <h1>Welcome to my version of Youtube </h1>
                <SearchBar onSearchInputChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos} onVideoSelect={this.handleSelect} />
            </div >
        )
    }
}

ReactDOM.render(<App />, document.querySelector(".container"))