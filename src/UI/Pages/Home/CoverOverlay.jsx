import React from 'react';
import './CoverOverlay.scss';

const CoverOverlay = ({ scrollPos }) => {
  // return <div className='CoverOverlay'>{scrollPos > 1 && <p>CoverOverlay</p>}</div>;
  return (
    <div
      className={`CoverOverlay ${
        Math.min(window.screen.width, window.innerWidth) > 1980 && 'CoverOverlay-Large'
      }`}
    >
      <div className='Box'>
        <p
          className={`${
            Math.min(window.screen.width, window.innerWidth) > 1000
              ? scrollPos > 1 && 'Active'
              : scrollPos > 1 && 'Active'
          }`}
        >
          Invest in Your Future Today.
        </p>
      </div>
    </div>
  );
};

export default CoverOverlay;
