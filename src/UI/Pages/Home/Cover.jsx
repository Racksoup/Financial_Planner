import React from 'react';
import './Cover.scss';
import ZBIcon from '../../../Assets/Images/ZBIcon.png';
import EmailIcon from '../../../Assets/Images/EmailIcon.png';
import PhoneIcon from '../../../Assets/Images/PhoneIcon.png';

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
            <div className='CallToAction-Info'>
              <div className='Line'>
                <img src={EmailIcon} alt='Email' />
                <p>Moves.Like@Jager.com</p>
              </div>
              <div className='Line'>
                <img src={PhoneIcon} alt='Phone' />
                <p>1-663-389-0909</p>
              </div>
            </div>
            <button
              className='Button-1'
              onClick={() => {
                linkToRef('contact');
              }}
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
