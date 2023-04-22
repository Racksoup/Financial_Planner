import React from 'react';
import './Contact.scss';
import EmailIcon from '../../../Assets/Images/EmailIcon.png';
import PhoneIcon from '../../../Assets/Images/PhoneIcon.png';

const Contact = () => {
  return (
    <div className='Contact' id='contact'>
      <div className='Container'>
        <h3>Contact</h3>
        <div className='Container-1'>
          {window.innerWidth < 1001 && <Info />}
          <div className='Form'>
            <div className='Line'>
              <div className='Col'>
                <p>Your Name</p>
                <input type='text' />
              </div>
              <div className='Col'>
                <p>Your Email</p>
                <input type='text' />
              </div>
            </div>
            <div className='BoxLine'>
              <p>Your Message</p>
              <textarea type='text' />
            </div>
            <button className='Button-1'>SEND MESSAGE</button>
          </div>
          {window.innerWidth > 1000 && <Info />}
        </div>
      </div>
    </div>
  );
};

const Info = () => {
  return (
    <div className='Info'>
      <div className='Line'>
        <img src={EmailIcon} alt='Email' />
        <p>Moves.Like@Jager.com</p>
      </div>
      <div className='Line'>
        <img src={PhoneIcon} alt='Phone' />
        <p>1-663-389-0909</p>
      </div>
    </div>
  );
};

export default Contact;
