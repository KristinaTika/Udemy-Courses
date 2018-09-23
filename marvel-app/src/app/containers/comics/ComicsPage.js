import React, { Component } from 'react';
import { comicsService } from '../../../services/comicsService';
import './ComicsPage.css';
import ComicItem from '../../components/comics/ComicItem';

class ComicsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comics: null,
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
        comicsService.fetchComics(searchValue)
            .then((res) => {
                this.setState({
                    comics: res
                });
            });
    }

    render() {
        let displayComics = <div>You haven't searched for anything yet.</div>
        const { comics } = this.state;
        return (
            <div id="comics-container">
                <p>Welcome to Marvel App. Start exploring Marvel universe by searching comics. </p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="searchValue" placeholder="Search Comics" onChange={this.handleChange} />
                    <button onClick={this.handleClick}>Search</button>
                </form>
                <ul id="comics-list">
                    {!comics ? displayComics : comics.length === 0 ? <div>No results </div> : comics.map(c => (<ComicItem key={c.id} comic={c} />))}
                </ul>
            </div>
        );
    }
}

export default ComicsPage;