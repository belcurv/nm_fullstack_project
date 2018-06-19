import * as React from 'react';
import PropTypes from 'prop-types';
import { filterMovies } from '../../utils';
import MovieCard from '../MovieCard/MovieCard';

const Results = ({ movies, filterTerm }) => {
  const filtered = filterMovies(movies, filterTerm);

  return (
    <section>
      <h3>Showing { filtered.length } of { movies.length } results:</h3>
      <div>
        { filtered.map(movie => <MovieCard key={ movie.imdbID } { ...movie }  /> )}
      </div>
    </section>
  );
};

Results.propTypes = {
  movies     : PropTypes.array,
  filterTerm : PropTypes.string
};

export default Results;
