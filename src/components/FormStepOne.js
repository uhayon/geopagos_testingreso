import React from 'react';
import Input from './Input';

const FormStepOne = ({values, onFieldChange}) => (
  <div>
    <div className='form-row'>
      <Input
        name={'fullName'}
        label={'Nombre completo'}
        placeholder={'Ej: Juan Pérez'}
        type={'text'}
        value={values.fullName}
        onChange={onFieldChange}
        className={values.fullNameErrorState ? 'error' : ''}
        errorState={values.fullNameErrorState}
        errorMessage={'Debe ingresar al menos 2 palabras'}
        containerClass={'w-100'} />
    </div>
    <div className='form-row'>
      <Input
        name={'cuil'}
        label={'N° de CUIL'}
        placeholder={'Ej: 23-45678901-2'}
        type={'text'}
        value={values.cuil}
        onChange={onFieldChange}
        className={values.cuilErrorState ? 'error' : ''}
        errorState={values.cuilErrorState}
        errorMessage={'Debe ingresar 11 dígitos'}
        containerClass={'w-100'} />
    </div>
  </div>
);

export default FormStepOne;
