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
            <h4 onClick={() => linkToRef('cover')}>ZUES MOOSE</h4>
          </button>

          <div className='ContactInfo'>
            <p>613-737-7772</p>
            <p>Placeholder@Business.ca</p>
          </div>
        </div>

        {window.innerWidth >= 1060 ? (
          <div className='Right'>
            <p className='Item' onClick={() => linkToRef('advice')}>
              Advice
            </p>
            <p className='Item' onClick={() => linkToRef('profile')}>
              Profile
            </p>
            <p className='Item' onClick={() => linkToRef('contact')}>
              Contact
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
                <p onClick={() => linkToRef('advice')}>Advice</p>
                <p onClick={() => linkToRef('profile')}>Profile</p>
                <p onClick={() => linkToRef('contact')}>Contact</p>
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
