import * as React from 'react';
import PropTypes from 'prop-types';
import './MovieTable.css';

const MovieTable = ({ movies }) => (
  <table className="movie-table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Year</th>
        <th>Poster</th>
      </tr>
    </thead>
    <tbody>
      {
        movies.map(movie => (
          <tr key={ movie.imdbID }>
            <td>{ movie.Title }</td>
            <td>{ movie.Year }</td>
            <td>{ movie.Poster !== 'N/A' ? <img src={ movie.Poster } alt={ `${movie.Title} Poster` } /> : '404' }</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

MovieTable.propTypes = {
  movies : PropTypes.array
};

export default MovieTable;
