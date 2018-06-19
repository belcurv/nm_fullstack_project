import * as React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ onInputChange, filterTerm }) => (
  <header className="header">
    <h1>Guardians, More or Less</h1>
    <input
      name="filter"
      type="text"
      placeholder="Filter by title or year"
      value={ filterTerm }
      onChange={ onInputChange }
    />
  </header>
);

Header.propTypes = {
  filterTerm    : PropTypes.string,
  onInputChange : PropTypes.func
};

export default Header;
