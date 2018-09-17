import React, { Component } from 'react';
import { locationService } from '../../services/locations';
import './EpisodeItem.css';

class EpisodeItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: [],
        };

        this.renderCharaters = this.renderCharacters.bind(this);
    }

    componentDidMount() {

        const { characters } = this.props.ep;
        return locationService.fetchResidents(characters)
            .then((res) => {
                this.setState({
                    characters: res
                });
            })
    }

    renderCharacters() {
        const { characters } = this.state;
        return characters.map((res, i) => {
            return <li key={i}>{res}</li>
        })
    }

    render() {
        const { name, ep, airDate } = this.props.ep;

        return (
            <li>
                <p><b>Episode:</b>{ep}</p>
                <p><b>Name:</b>{name}</p>
                <p><b>Air Date:</b>{airDate}</p>
                <ul>
                    <b>Characters:</b>
                    {this.renderCharacters()}
                </ul>
            </li>
        )
    }
}

export default EpisodeItem;