import React from 'react';

const HeaderStep = ({ step, active }) => (
  <div className={'step' + (active ? ' active' : '')}>
    {step}
  </div>
);

export default HeaderStep;
