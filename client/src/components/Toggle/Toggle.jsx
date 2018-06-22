import React     from 'react';
import PropTypes from 'prop-types';
import './Toggle.css';

const Toggle = ({ toggle, onToggle }) => {
  const activeClass = toggle ? 'active' : '';
  return (
    <div className={ `toggle ${activeClass}` } onClick={ onToggle }>
      <div className='toggle__button' />
    </div>
  );
};

Toggle.propTypes = {
  toggle   : PropTypes.bool,
  onToggle : PropTypes.func
};

export default Toggle;
