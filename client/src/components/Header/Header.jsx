import * as React from 'react';
import './Header.css';

const Header = ({searchTerm, onSearchSubmit, onInputChange}) => {
  const search = (
    <form onSubmit={onSearchSubmit}>
      <input type="text" placeholder="Search" value={searchTerm} onChange={onInputChange} />
    </form>
  );

  return (
    <header className="header">
      <h1>Open Movie DB</h1>
      { search }
    </header>
  );
};

export default Header;
