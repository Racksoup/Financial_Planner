import React from 'react';
import './Advice.scss';

const Advice = () => {
  return (
    <div className='Advice' id='advice'>
      <div className='Container'>
        <h3>What can an Advisor do for me?</h3>
        <div className='Grid'>
          <Item
            title='Personalized Plan'
            points={['Identify your financial goals and create a plan to achieve them.']}
          />
          <Item
            title='Investment Advice'
            points={['Choose investments that align with your goals and risk tolerance.']}
          />
          <Item
            title='Retirement Planning'
            points={[
              ' Create a retirement plan that takes into account your current financial situation and your goals for the future.',
            ]}
          />
          <Item
            title='Tax Planning'
            points={['Minimize your tax liability by identifying tax-saving strategies.']}
          />
          <Item
            title='Estate Planning'
            points={[
              'Create an estate plan that ensures your assets are distributed according to your wishes.',
            ]}
          />
          <Item
            title='Risk Managment'
            points={[
              'Identify and manage potential risks to your financial security, such as disability, illness, or death.',
            ]}
          />
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
        {points.map((x) => (
          <div className='PointLine'>
            <div className='Point'></div>
            <p>{x}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advice;
