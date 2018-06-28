import React         from 'react';
import PropTypes     from 'prop-types';
import MovieTableRow from '../MovieTableRow/MovieTableRow';
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
      { movies.map(m => <MovieTableRow key={ m.imdbID } { ...m } />) }
    </tbody>
  </table>
);

MovieTable.propTypes = {
  movies : PropTypes.array
};

export default MovieTable;
