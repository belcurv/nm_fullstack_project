import React       from 'react';
import PropTypes   from 'prop-types';
import noPosterImg from '../../assets/poster_404.svg';

import './MovieCard.css';

const MovieCard = (movie) => {
  const poster    = movie.Poster !== 'N/A' ? movie.Poster : noPosterImg;
  const posterUrl = `url(${poster})`;

  return (
    <div className="movie-card">
      <div className="movie-card__img" style={{ backgroundImage : posterUrl }}>
      </div>
      <div className="movie-card__text">
        <h2>{ movie.Title } ({ movie.Year })</h2>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie : PropTypes.object
};

export default MovieCard;
