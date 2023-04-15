import React from 'react';
import './Cover.scss';
import TD from '../../../Assets/Images/TD.png';

const Cover = ({ linkToRef }) => {
  return (
    <div className='Cover'>
      <div className='Container'>
        <div className='Header'>
          <div className='Left'>
            <div className='NameBox'>
              <h2>ANTHONY RACK</h2>
            </div>
            <img src={TD} alt='Toronto Dominion' />
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
                linkToRef('section2');
              }}
            >
              profile
            </p>
            <p
              onClick={() => {
                linkToRef('section6');
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