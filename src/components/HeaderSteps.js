import React from 'react';
import HeaderStep from './HeaderStep';

const HeaderSteps = ({ currentStep }) => (
  <div className='steps'>
    <HeaderStep step={1} active={currentStep === 1} />
    <hr />
    <HeaderStep step={2} active={currentStep === 2} />
    <hr />
    <HeaderStep step={3} active={currentStep === 3} />
  </div>
);

export default HeaderSteps;
