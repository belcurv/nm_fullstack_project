import * as React from 'react';
import PropTypes from 'prop-types';
import { filterMovies } from '../../utils';
import MovieCard from '../MovieCard/MovieCard';
import MovieTable from '../MovieTable/MovieTable';
import './Results.css';

const Results = ({ viewStyle, movies, filterTerm }) => {
  const filtered = filterMovies(movies, filterTerm);

  const cards = (
    filtered.map(movie => <MovieCard key={ movie.imdbID } { ...movie }  /> )
  );

  const table = (
    <MovieTable movies={ filtered } />
  );

  return (
    <section className="results">
      <h3 className="results__heading">
        Showing { filtered.length } of { movies.length } results
      </h3>
      { viewStyle === 'grid' ? cards : table }
    </section>
  );
};

Results.propTypes = {
  viewStyle  : PropTypes.string,
  movies     : PropTypes.array,
  filterTerm : PropTypes.string
};

export default Results;
