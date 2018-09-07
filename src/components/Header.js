import React from 'react';
import HeaderSteps from './HeaderSteps';

const Header = ({ currentStep }) => (
  <div className='header'>
    <h1>Registro</h1>
    <HeaderSteps currentStep={currentStep} />
  </div>
);

export default Header;
