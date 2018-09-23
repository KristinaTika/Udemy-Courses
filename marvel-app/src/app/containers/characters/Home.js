import React, { Component } from 'react';
import { characterService } from '../../../services/characterService';
import './Home.css';
import CharacterItem from '../../components/character/CharacterItem';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: null,
            searchValue: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let { searchValue } = this.state;
        characterService.fetchCharacters(searchValue)
            .then((res) => {
                this.setState({
                    characters: res
                });
            });
    }

    render() {
        let displayCharacters = <div>You haven't searched for anything yet.</div>
        const { characters } = this.state;
        return (
            <div id="home-container">
                <p>Welcome to Marvel App. Start exploring Marvel universe by searching characters. </p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="searchValue" placeholder="Search Characters" onChange={this.handleChange} />
                    <button onClick={this.handleClick}>Search</button>
                </form>
                <ul id="characters-list">
                    {!characters ? displayCharacters : characters.length === 0 ? <div>No results </div> : characters.map(char => (<CharacterItem key={char.id} character={char} />))}
                </ul>
            </div>
        );
    }
}

export default Home;