import React from 'react';
import BusinessMan from '../../../Assets/Images/BusinessMan.jpg';
import Client from '../../../Assets/Images/Client.jpg';
import './Profile.scss';

const Profile = ({ linkToRef }) => {
  return (
    <div className='Profile' id='profile'>
      <div className='Container'>
        <h3>Profile</h3>
        <div className='Container-1'>
          <div className='Container-2'>
            <img className='Profile-img' src={BusinessMan} alt='BusinessMan' />
          </div>
          {Math.min(window.screen.width, window.innerWidth) > 1000 && (
            <div className='Divider'></div>
          )}
          <div
            className={`Container-2 ${
              Math.min(window.screen.width, window.innerWidth) < 1001 && 'Container-2-Small'
            }`}
          >
            <h6 style={{ marginTop: '0' }}>Awards</h6>
            <p>CNBC Financial Advisor Council Certificate of Honors</p>
            <p>RBC Regional Alumni Financial Planner Award</p>
            <h6>History</h6>
            <p>8 Years Working with RBC</p>
            <p>Certified Financial Planner (CFP)</p>
            <p className='Quote'>
              "Financial planning is not about being rich; it's about taking control of your
              finances, setting goals, and making the most of the resources you have to achieve
              them."
            </p>
            <div className='Testimonial'>
              <img className='Testimonial-img' src={Client} alt='BusinessMan' />
              <div className='Inner'>
                <div className='Top'>
                  <p>Sarah Peter</p>
                  <p>03/11/2023</p>
                </div>
                <div className='Bottom'>
                  "I am so grateful to have found my financial planner. Their expertise and guidance
                  have been invaluable in helping me navigate my financial journey. They took the
                  time to understand my unique financial goals and developed a customized plan that
                  has put me on a path towards financial success. Their professionalism, knowledge,
                  and personalized approach have given me the confidence and peace of mind I needed
                  to make informed decisions about my money. I highly recommend their services to
                  anyone looking to secure their financial future."
                </div>
              </div>
            </div>
            <button
              className='Button-1'
              onClick={() => {
                linkToRef('contact');
              }}
            >
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
