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
          autoFocus
          className="filter__element"
          name="filter"
          onChange={ onInputChange }
          placeholder="by title or year"
          size="1"
          type="text"
          value={ filterTerm }
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
