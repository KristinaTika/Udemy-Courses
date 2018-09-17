import React, { Component } from 'react';
import { charactersService } from '../../services/characters';
import CharacterItem from '../components/CharacterItem';
import SearchBar from '../components/SearchBar';
import './CharactersList.css';

class CharactersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: [],
            searchValue: ""
        }

        this.renderCharacters = this.renderCharacters.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    
    handleSearch(e) {
        console.log(e.target.value);
        this.setState({
            searchValue: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const {searchValue} = this.state;
        console.log(searchValue);
        charactersService.fetchSearchedCharacters(searchValue)
            .then((res) =>{
                console.log(res);
                this.renderCharacters(res);
            })
    }

    render() {
        const {characters} = this.state;
        return (
            <div>
                <SearchBar handleSearch={this.handleSearch} handleSubmit={this.handleSubmit}/>
                <ul className="list-characters">
                    {this.renderCharacters(characters)}
                </ul>
            </div>
        );
    }
}

export default CharactersList;