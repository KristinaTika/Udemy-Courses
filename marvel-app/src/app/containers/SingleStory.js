import React, { Component } from 'react';
import { storiesService } from '../../services/storiesService';
import './SingleStory.css';

class SingleStory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            story: [],
        }

        this.renderInfo = this.renderInfo.bind(this);
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        storiesService.fetchSingleStory(id)
            .then(res => (this.setState({story: res})))
            .catch(err => console.log("Something went wrong!", err));
    }

    renderInfo(titles) {
        return titles.map((t, i) => (<li key={i}>{t} </li>)); 
    }

    render() {
        const story = this.state.story[0];
        return (
            <div >  
                {!story
                    ?
                        <div> loading </div>
                    : 
                        <div id="single-story-container">
                            <div>
                                <h3> {story.title} </h3>
                                <h4>Original Issue </h4>
                                <p> {story.originalIssue} </p>
                                <h4> Creators: </h4>
                                <ul>
                                    {this.renderInfo(story.creators)}
                                </ul>
                                <h4> Characters </h4>
                                <ul>
                                    {this.renderInfo(story.characters)}
                                </ul>
                                <h4> Comics </h4>
                                <ul>
                                    {this.renderInfo(story.comics)}
                                </ul>
                                <h4> Series </h4>
                                <ul>
                                    {this.renderInfo(story.series)}
                                </ul>
                                <h4>Type:</h4>
                                <p> {story.type === "" ? "No type available" : story.type } </p>
                            </div>
                        </div>
                }
            </div>
        );
    }
}

export default SingleStory;

