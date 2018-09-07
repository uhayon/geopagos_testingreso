import React from 'react';
import Button from './Button';

const FormFooter = ({currentStep, onPressBack, onPressNext}) => (
  <div className='footer'>
    { currentStep !== 1 ?
      <Button
      className={'btn btn-primary-inverse'}
      onClick={onPressBack}
      value={'Atrás'} /> : <div></div>}
      <Button
        className={'btn btn-primary'}
        onClick={onPressNext}
        value={currentStep === 3 ? 'Finalizar' : 'Siguiente'} />
  </div>
);

export default FormFooter;
