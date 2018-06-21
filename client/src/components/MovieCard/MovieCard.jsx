import * as React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';

const MovieCard = (movie) => (
  <div className="movie-card">
    <div className="movie-card__img">
      <img src={ movie.Poster } alt={ `${movie.Title} Poster` } />
    </div>
    <div className="movie-card__text">
      <h2>{ movie.Title } ({ movie.Year })</h2>
    </div>
  </div>
);

MovieCard.propTypes = {
  movie : PropTypes.object
};

export default MovieCard;
