import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEpisodes } from '../action-creators/actionCreators';
import EpisodeItem from '../components/EpisodeItem';
import './EpisodeList.css';

class EpisodeList extends Component {

    componentDidMount() {
        this.props.fetchEpisodes();
    }

    renderEpisodes() {
        const {episodes} = this.props;
        return episodes.map((ep) => {
            return <EpisodeItem key={ep.id} episode={ep} />
        });
    }

    render() {
        return (
            <ul className="list-episodes">
                {this.renderEpisodes()}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        episodes: state.episodes
    };
}

export default connect(mapStateToProps, { fetchEpisodes })(EpisodeList);