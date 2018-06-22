import React     from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

const Filter = ({ filterTerm, onInputChange, onResetFilter }) => {

  const cancelIcon = (
    <span className="filter__cancel-icon"
      onClick={ onResetFilter }>
      &times;
    </span>
  );

  return (
    <div className="filter">
      <label htmlFor="filter">Filter
        <input
          name="filter"
          type="search"
          placeholder="by title or year"
          value={ filterTerm }
          onChange={ onInputChange }
        />
      </label>
      { filterTerm.length > 0 && cancelIcon }
    </div>
  );

};

Filter.propTypes = {
  filterTerm    : PropTypes.string,
  onInputChange : PropTypes.func,
  onResetFilter : PropTypes.func
};

export default Filter;
