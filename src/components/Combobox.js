import React from 'react';

const Combobox = (props) => {
  const {containerClass} = props;
  const options = props.options.map(option => (
    <option value={option.id} key={option.id} disabled={option.id === '0'}>{option.name}</option>
  ));

  return (<div className={'inputContainer ' + (containerClass ? containerClass : '')}>
    <label htmlFor={props.name}>{props.label}</label>
    <select
      value={props.value}
      className={props.className}
      name={props.name}
      onChange={props.onChange}
      disabled={props.disabled} >
      {options}
    </select>
    <p className='errorMessage'>{props.errorState ? props.errorMessage : ''}</p>
  </div>);
};

export default Combobox;
