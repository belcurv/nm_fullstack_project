import React     from 'react';
import PropTypes from 'prop-types';
import Toggle    from '../Toggle/Toggle';
import Filter    from '../Filter/Filter';
import './Header.css';

const Header = ({ toggle, onToggle, onInputChange, filterTerm, onResetFilter }) => (
  <header className="header">
    <h1>Guardians of the Big Screen</h1>

    <div className="header__toggle">
      <span>Table</span>
      <Toggle
        toggle={ toggle }
        onToggle={ onToggle } />
      <span>Grid</span>
    </div>

    <div className="header__filter">
      <Filter
        filterTerm={ filterTerm }
        onInputChange={ onInputChange }
        onResetFilter={ onResetFilter } />
    </div>
  </header>
);

Header.propTypes = {
  toggle        : PropTypes.bool,
  filterTerm    : PropTypes.string,
  onToggle      : PropTypes.func,
  onInputChange : PropTypes.func,
  onResetFilter : PropTypes.func
};

export default Header;
