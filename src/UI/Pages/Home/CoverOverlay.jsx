import React from 'react';
import './CoverOverlay.scss';

const CoverOverlay = ({ scrollPos }) => {
  // return <div className='CoverOverlay'>{scrollPos > 1 && <p>CoverOverlay</p>}</div>;
  return (
    <div className={`CoverOverlay ${window.innerWidth > 1980 && 'CoverOverlay-Large'}`}>
      <div className='Box'>
        <p
          className={`${
            window.innerWidth > 1000 ? scrollPos > 1 && 'Active' : scrollPos > 20 && 'Active'
          }`}
        >
          Invest in Your Future Today.
        </p>
      </div>
    </div>
  );
};

export default CoverOverlay;
