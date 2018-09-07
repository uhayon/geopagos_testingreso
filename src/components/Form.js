import React from 'react';
import FormStepOne from './FormStepOne';
import FormStepTwo from './FormStepTwo';
import FormStepThree from './FormStepThree';
import FormFooter from './FormFooter';

const Form = ({values, onFieldChange, onPressBack, onPressNext}) => {
  const { currentStep } = values;
  let form;
  switch (currentStep) {
    case 1:
      form = (<FormStepOne values={values} onFieldChange={onFieldChange} />);
      break;
    case 2:
      form = (<FormStepTwo values={values} onFieldChange={onFieldChange} />);
      break;
    case 3:
      form = (<FormStepThree values={values} onFieldChange={onFieldChange} />);
      break;
    default:
      return (<div>Paso incorrecto</div>);
  }

  return (
    <div>
      {form}
      <FormFooter
        currentStep={currentStep}
        onPressBack={onPressBack}
        onPressNext={onPressNext} />
    </div>
  );
};

export default Form;
