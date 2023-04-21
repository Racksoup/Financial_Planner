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
              <h2>ZUES MOOSE</h2>
            </div>
            <img src={ZBIcon} alt='Toronto Dominion' />
            <div className='Contact'>
              <p>613-869-2111</p>
              <p>Tranquilgorge@outlook.com</p>
            </div>
          </div>

          <div className='HeaderNav'>
            <p
              onClick={() => {
                linkToRef('advice');
              }}
            >
              Advice
            </p>
            <p
              onClick={() => {
                linkToRef('profile');
              }}
            >
              Profile
            </p>
            <p
              onClick={() => {
                linkToRef('contact');
              }}
            >
              Contact
            </p>
          </div>
        </div>

        <div className='Content'>
          <div className='Content-Left'>
            <h1>FINANCIAL ADVISOR</h1>
            <h2>Secure your financial future with expert guidance</h2>
          </div>
          <div className='CallToAction'>
            <button
              className='Button-1'
              onClick={() => {
                linkToRef('contact');
              }}
            >
              GET IN TOUCH
            </button>
            <p>613-843-1132</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
