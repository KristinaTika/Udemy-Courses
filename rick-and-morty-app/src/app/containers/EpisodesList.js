import React, { Component } from 'react';
import { episodesService } from '../../services/episodes';
import EpisodeItem from '../components/EpisodeItem';
import './EpisodesList.css';

class EpisodesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            episodes: [],
        }

        this.renderEpisodes = this.renderEpisodes.bind(this);
    }

    componentDidMount() {
        return episodesService.fetchEpisodes()
            .then((res) => {
                this.setState({
                    episodes: res
                });
            });
    }

    renderEpisodes() {
        const {episodes} = this.state;

        return episodes.map((ep) => {
            return <EpisodeItem ep={ep} key={ep.id} />
        });
    }
    
    render() {
        return (
            <div>
                <ul>
                    {this.renderEpisodes()}
                </ul>
            </div>
        );
    }
}

export default EpisodesList;