import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div className='Contact' id='contact'>
      <div className='Container'>
        <h3>Contact</h3>
        <div className='Container-1'>
          <div className='Form'>
            <div className='Line'>
              <p>Name:</p>
              <input type='text' />
            </div>
            <div className='Line'>
              <p>Email:</p>
              <input type='text' />
            </div>
            <div className='BoxLine'>
              <p>Message:</p>
              <textarea type='text' />
            </div>
            <button className='Button-2'>SEND MESSAGE</button>
          </div>
          <div className='Info'>
            <p className='Text'>ZZBakes@Bakers.com</p>
            <p className='Text'>1-613-843-1132</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
