import React, { Component } from 'react';
import { charactersService } from '../../services/characters';
import CharacterItem from '../components/CharacterItem';
import './CharactersList.css';

class CharactersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: [],
        }

        this.renderCharacters = this.renderCharacters.bind(this);
    }

    componentDidMount() {
        charactersService.fetchCharacters()
            .then((res) => {
                this.setState({
                    characters: res
                });
            })
    }

    renderCharacters(characters) {
        if (!characters) {
            return;
        }
        return characters.map((character) => {
            return <CharacterItem character={character} key={character.id} />
        });
    }

    render() {
        const { characters } = this.state;
        return (
            <div>
                <ul className="list-characters">
                    {this.renderCharacters(characters)}
                </ul>
            </div>
        );
    }
}

export default CharactersList;