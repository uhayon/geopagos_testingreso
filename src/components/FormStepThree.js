import React from 'react';
import Input from './Input';
import Checkbox from './Checkbox';

const FormStepThree = ({values, onFieldChange}) => (
  <div>
    <div className='form-row'>
      <Input
        name={'mail'}
        label={'E-Mail'}
        placeholder={'Ingresá tu dirección de correo'}
        type={'text'}
        value={values.mail}
        onChange={onFieldChange}
        className={values.mailErrorState ? 'error' : ''}
        errorState={values.mailErrorState}
        errorMessage={'Debe ingresar una dirección de correo válida'}
        containerClass={'w-100'} />
    </div>
    <div className='form-row'>
      <Input
        name={'password'}
        label={'Contraseña'}
        placeholder={'Debe ser alfanumérica de al menos 8 caracteres'}
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={onFieldChange}
        className={values.passwordErrorState ? 'error' : ''}
        errorState={values.passwordErrorState}
        errorMessage={'Debe ser alfanumérica de al menos 8 caracteres'}
        containerClass={'w-100'} />
    </div>
    <div className='form-row'>
      <Checkbox
        name={'showPassword'}
        label={'Mostrar contraseña'}
        value={values.showPassword}
        onChange={onFieldChange}
        containerClass={'w-100'} />
    </div>
  </div>
);

export default FormStepThree;
