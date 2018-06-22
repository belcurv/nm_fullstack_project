import React     from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import './MovieGrid.css';

const MovieGrid = ({ movies }) => (
  <div className="movie-grid">
    {
      movies.map(movie => <MovieCard key={ movie.imdbID } { ...movie }  />)
    }
  </div>
);

MovieGrid.propTypes = {
  movies : PropTypes.array
};

export default MovieGrid;
