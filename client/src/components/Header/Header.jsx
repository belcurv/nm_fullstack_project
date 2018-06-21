import * as React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ viewStyle, onOptionChange, onInputChange, filterTerm }) => (
  <header className="header">
    <h1>Guardians, More or Less</h1>

    <div>
      <label htmlFor="table">Table</label>
      <input type="radio" id="table" name="view" value="table"
        checked={ viewStyle === 'table' }
        onChange={ onOptionChange } />
      <label htmlFor="grid">Grid</label>
      <input type="radio" id="grid" name="view" value="grid"
        checked={ viewStyle === 'grid' }
        onChange={ onOptionChange } />
    </div>

    <label htmlFor="filter">Filter
      <input
        name="filter"
        type="text"
        placeholder="by title or year"
        value={ filterTerm }
        onChange={ onInputChange }
      />
    </label>
  </header>
);

Header.propTypes = {
  viewStyle      : PropTypes.string,
  filterTerm     : PropTypes.string,
  onOptionChange : PropTypes.func,
  onInputChange  : PropTypes.func
};

export default Header;
