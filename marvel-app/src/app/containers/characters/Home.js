import React, { Component } from 'react';
import { characterService } from '../../../services/characterService';
import { comicsService } from '../../../services/comicsService';
import { seriesService } from '../../../services/seriesService';
import './Home.css';
import CharacterItem from '../../components/character/CharacterItem';
import { Character } from '../../../entities/Character';
import { Comic } from '../../../entities/Comic';
import { ComicItem } from '../../components/comics/ComicItem';
import { Serie } from '../../../entities/Serie';
import { SerieItem } from '../../components/series/SerieItem';


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: null,
            searchValue: "",
            searchType: "",
            errorMsg: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearchType = this.handleSearchType.bind(this);
        this.renderResults = this.renderResults.bind(this);
    }

    handleSearchType(e) {
        this.setState({
            searchType: e.target.value
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let { searchValue, searchType } = this.state;

        if(searchType === "") {
            this.setState({
                errorMsg: "Please choose type of search"
            })
        }

        if(searchType === "characters") {
            characterService.fetchCharacters(searchValue)
                .then((res) => {
                    this.setState({
                        results: res
                    });
                });
        }

        if(searchType === "comics") {
            comicsService.fetchComics(searchValue)
                .then((res) => {
                    this.setState({
                        results: res
                    });
                });
        }

        if(searchType === "series") {
            seriesService.fetchSeries(searchValue)
                .then((res) => {
                    this.setState({
                        results: res
                    });
                });
        }
    }

    renderResults(results) {
        if(results.length === 0) {
            return <div>
                        <img src='./no-results2.jpg' alt="No Results" id="no-results" />
                    </div>;
        }
        return results.map((r) => {
            if(r instanceof Character) {
                return <CharacterItem  key={r.id} character={r} />
            }
            if(r instanceof Comic) {
                return <ComicItem  key={r.id} comic={r} />
            }
            if(r instanceof Serie) {
                return <SerieItem  key={r.id} serie={r} />
            }
        });
    }

    render() {
        let displayCharacters = <div>You haven't searched for anything yet.</div>
        const { errorMsg, results } = this.state;
        return (
            <div id="home-container">
                <h2>Welcome to Marvel App. Start exploring Marvel Universe. </h2>
                <form onSubmit={this.handleSubmit}>
                    <p> Please choose type of search </p>
                    <input type="radio" name="search-category" value="characters" className="search-type" onClick={this.handleSearchType}/> Characters
                    <input type="radio" name="search-category" value="comics" className="search-type" onClick={this.handleSearchType}/> Comics
                    <input type="radio" name="search-category" value="series" className="search-type" onClick={this.handleSearchType}/> Series
                    < br />
                    <input type="text" name="searchValue" placeholder="Search Characters" onChange={this.handleChange} />
                    <button onClick={this.handleSubmit}>Search</button>
                </form>
                <p> {errorMsg !== "" ? errorMsg : ""} </p>
                <ul id="characters-list">
                    { !results ? <div id="search-results">You haven't search for anything yet.</div> : this.renderResults(results)}
                </ul>
            </div>
        );
    }
}

export default Home;