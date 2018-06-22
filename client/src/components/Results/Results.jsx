import React            from 'react';
import PropTypes        from 'prop-types';
import MovieGrid        from '../MovieGrid/MovieGrid';
import MovieTable       from '../MovieTable/MovieTable';
import { filterMovies } from '../../utils';
import './Results.css';

const Results = ({ toggle, movies, filterTerm }) => {

  const filtered = filterMovies(movies, filterTerm);

  return (
    <section className="results">
      <h3 className="results__heading">
        Showing { filtered.length } of { movies.length } results
      </h3>
      {
        toggle ?
          <MovieGrid movies={ filtered } /> :
          <MovieTable movies={ filtered } />
      }
    </section>
  );

};

Results.propTypes = {
  toggle     : PropTypes.bool,
  movies     : PropTypes.array,
  filterTerm : PropTypes.string
};

export default Results;
