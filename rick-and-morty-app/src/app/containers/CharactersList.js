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

    renderCharacters() {

        const { characters } = this.state;
        if (!characters) {
            return;
        }
        return characters.map((character) => {
            return <CharacterItem character={character} key={character.id} />
        });
    }

    render() {
        // const { characters } = this.state;

        // let renderCharacters = <li >Loading characters...</li>
        // if (!characters) {
        //     return renderCharacters;
        // }
        // return characters.map((character) => {
        //     return <CharacterItem character={character} key={character.id} />
        // });

        return (
            <div>
                <ul className="list-characters">
                    {this.renderCharacters()}
                </ul>
            </div>
        );
    }
}

export default CharactersList;