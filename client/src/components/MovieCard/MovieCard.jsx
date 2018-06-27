import React     from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';

const MovieCard = (movie) => {
  let altText;
  const styles = {};

  if (movie.Poster !== 'N/A') {
    styles.backgroundImage = `url(${movie.Poster})`;
  } else {
    altText = `No poster for "${movie.Title}"`;
  }

  return (
    <div className="movie-card">
      <div className="movie-card__img" style={ styles }>
        { altText }
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
