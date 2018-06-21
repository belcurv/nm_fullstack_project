import * as React from 'react';
import './Spinner.css';

const Spinner = () => (
  <div className="spinner">
    <svg className="spinner__svg" viewBox="0 0 100 100" width="40" height="40">
      <circle cx="50" cy="50" r="42" transform="rotate(-90,50,50)" />
    </svg>
  </div>
);

export default Spinner;
