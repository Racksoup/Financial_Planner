import React from 'react';
import './Cover.scss';
import ZBIcon from '../../../Assets/Images/ZBIcon.png';

const Cover = ({ linkToRef }) => {
  return (
    <div className='Cover' id='cover'>
      <div className='Container'>
        <div className='Header'>
          <div className='Left'>
            <div className='NameBox'>
              <h2>Zues Moose</h2>
            </div>
            <img src={ZBIcon} alt='Toronto Dominion' />
            <div className='Contact'>
              <p>613-869-2343</p>
              <p>Tranquilgorge@outlook.com</p>
            </div>
          </div>

          <div className='HeaderNav'>
            <p
              onClick={() => {
                linkToRef('advice');
              }}
            >
              advice
            </p>
            <p
              onClick={() => {
                linkToRef('profile');
              }}
            >
              profile
            </p>
            <p
              onClick={() => {
                linkToRef('contact');
              }}
            >
              contact
            </p>
          </div>
        </div>

        <div className='Content'>
          <h1>Financial Advisor</h1>
          <div className='Content-Body'>
            <h2>Secure your financial future with expert guidance</h2>
            <div className='CallToAction'>
              <button>Get In Touch</button>
              <p>613-XXX-XXXX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
