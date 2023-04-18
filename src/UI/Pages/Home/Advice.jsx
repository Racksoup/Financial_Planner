import React from 'react';
import './Advice.scss';

const Advice = () => {
  return (
    <div className='Advice' id='advice'>
      <div className='Container'>
        <h3>What can an Advisor do for me?</h3>
        <div className='Grid'>
          <Item title='Personalized Plan' points={['ff', 'dd', 'xx']} />
          <Item title='Investment Advice' points={['ff', 'dd', 'xx']} />
          <Item title='Retirement Planning' points={['ff', 'dd', 'xx']} />
          <Item title='Tax Planning' points={['ff', 'dd', 'xx']} />
          <Item title='Estate Planning' points={['ff', 'dd', 'xx']} />
          <Item title='Risk Managment' points={['ff', 'dd', 'xx']} />
        </div>
      </div>
    </div>
  );
};

const Item = ({ title, points }) => {
  return (
    <div className='Item'>
      <h6>{title}</h6>
      <div className='Points'>
        <div className='PointLine'>
          <div className='Point'></div>
          <p>{points[0]}</p>
        </div>
        <div className='PointLine'>
          <div className='Point'></div>
          <p>{points[1]}</p>
        </div>
        <div className='PointLine'>
          <div className='Point'></div>
          <p>{points[2]}</p>
        </div>
      </div>
    </div>
  );
};

export default Advice;
