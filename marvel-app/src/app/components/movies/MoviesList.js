import React from 'react';
import { marvelMovies } from '../../../db/movies';
import MovieItem from './MovieItem';
import './MoviesList.css';

const MoviesList = (props) => {

    let displayMovies = marvelMovies.map(movie => <MovieItem key={movie.id} movie={movie} />);

    return(
        <div id="movies-list">
            {displayMovies}
        </div>
    );
}

export default MoviesList;



