import React from 'react';

const Input = (props) => {
  const {containerClass} = props;
  return (<div className={'inputContainer ' + (containerClass ? containerClass : '')}>
    <label htmlFor={props.name}>{props.label}</label>
    <input
      className={props.className}
      name={props.name}
      onChange={props.onChange}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value} />
    <p className='errorMessage'>{props.errorState ? props.errorMessage : ''}</p>
  </div>);
};

export default Input;
