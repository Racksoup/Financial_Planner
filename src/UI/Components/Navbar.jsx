import React, { useState } from 'react';
import './Navbar.scss';

import { Icon } from '@iconify/react';

const Navbar = ({ linkToRef }) => {
  const [drop, showDrop] = useState(false);

  return (
    <div className='Navbar'>
      <div className='Content'>
        <div className='Left'>
          <button className='Title'>
            <h4>Website Design</h4>
          </button>

          <div className='Contact'>
            <p>613-869-2343</p>
            <p>Tranquilgorge@outlook.com</p>
          </div>
        </div>

        {window.innerWidth >= 1060 ? (
          <div className='Right'>
            <p className='Item' onClick={() => linkToRef('section0')}>
              Home
            </p>
            <p className='Item' onClick={() => linkToRef('advice')}>
              Guide
            </p>
            <p className='Item' onClick={() => linkToRef('section1')}>
              services
            </p>
            <p className='Item' onClick={() => linkToRef('section2')}>
              portfolio
            </p>
            <p className='Item' onClick={() => linkToRef('section3')}>
              about
            </p>
            <p className='Item' onClick={() => linkToRef('section6')}>
              contact
            </p>
          </div>
        ) : (
          <div
            className='Hamburger'
            onMouseEnter={() => showDrop(true)}
            onClick={() => showDrop(true)}
          >
            {drop && (
              <div className='DropDown' onMouseLeave={() => showDrop(false)}>
                {' '}
                <p onClick={() => linkToRef('section0')}>Home</p>
                <p onClick={() => linkToRef('advice')}>guide</p>
                <p onClick={() => linkToRef('section1')}>services</p>
                <p onClick={() => linkToRef('section2')}>portfolio</p>
                <p onClick={() => linkToRef('section3')}>about</p>
                <p onClick={() => linkToRef('section6')}>contact</p>
              </div>
            )}
            <Icon icon='icon-park-outline:hamburger-button' className='Icon' />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
