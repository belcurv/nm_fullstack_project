import React       from 'react';
import PropTypes   from 'prop-types';
import noPosterImg from '../../assets/poster_404.svg';

const MovieTableRow = ({ Title, Year, Poster }) => {
  const posterImg = Poster !== 'N/A' ? Poster : noPosterImg;

  return (
    <tr>
      <td>{ Title }</td>
      <td>{ Year }</td>
      <td className="movie-table__img">
        <img src={ posterImg } alt={ `${Title} Poster` } />
      </td>
    </tr>
  );
};

MovieTableRow.propTypes = {
  Title  : PropTypes.string,
  Year   : PropTypes.string,
  Poster : PropTypes.string
};

export default MovieTableRow;
