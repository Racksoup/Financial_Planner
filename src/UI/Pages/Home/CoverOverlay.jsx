import React from 'react';
import './CoverOverlay.scss';

const CoverOverlay = ({ scrollPos }) => {
  // return <div className='CoverOverlay'>{scrollPos > 1 && <p>CoverOverlay</p>}</div>;
  return (
    <div className='CoverOverlay'>
      <div className='Box'>
        <p className={`${scrollPos > 1 && 'Active'}`}>Invest in Your Future Today.</p>
      </div>
    </div>
  );
};

export default CoverOverlay;
