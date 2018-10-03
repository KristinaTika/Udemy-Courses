import React, { Component } from 'react';
import { marvelMovies } from '../../../db/movies';
import Loader from '../../partials/Loader';
import './SingleMovie.css';

class SingleMovie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: [],
        }

        this.renderItems = this.renderItems.bind(this);
        this.renderGenre = this.renderGenre.bind(this);
    }

    componentDidMount() {
        let { id }  = this.props.match.params;
        let movieId = parseInt(id);
        var clickedMovie = marvelMovies.filter(m => movieId === m.id);
        this.setState({
            movie: clickedMovie
        });
    }

    renderItems(items) {
        return items.map((item,i) => <li key={i}>{item}</li>)
    }
    
    renderGenre(genre) {
        let myGenre = genre.split(", ");
        return myGenre.map((g, i) =><span key={i} className="movie-tag">#{g}</span>);
    }

    render() {
        const movie = this.state.movie[0];
        console.log(movie);
        return (
            <div id="single-movie-container">
                {
                    !movie
                        ? <Loader />
                        :
                        <div>
                            <h1> {movie.title} ({movie.year})</h1>
                            <p id="length"> {movie.length} {this.renderGenre(movie.genre)}  {movie.released}</p>
                            <div>
                                <img src={movie.image} alt={movie.title} />
                            </div>
                            <div id="sub-container">
                                <p> <b>Directors:</b> {movie.director} </p>
                                <p> <b>Writers:</b> {this.renderItems(movie.writer)} </p>
                                <p><b>Actors:</b> {this.renderItems(movie.actors)}</p>   
                                <p><b>Production</b>: {movie.production} </p>
                                <p><b>Country:</b> {movie.country} </p>
                                <p><b>Ratings:</b> {this.renderItems(movie.ratings)}</p>
                                <p><b>Awards:</b> {movie.awards} </p>
                                <p><b>Box Office:</b> {movie.boxOffice} </p>
                                <p><b>Official website:</b> <a href={movie.website}>{movie.website}</a>  </p>
                                <p><b>Description:</b> </p>
                                <p> {movie.plot} </p>
                            </div>    
                        </div> 
                }
            </div>
        );
    }
}

export default SingleMovie;