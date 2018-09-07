import React from 'react';

const Checkbox = (props) => {
  const {containerClass} = props;
  return (
    <div className='inputContainer inputContainerRow'>
      <input
        name={props.name}
        type='checkbox'
        onChange={props.onChange}
        checked={props.value}
        className={'checkbox'}/>
      <label className={'checkbox-label'} htmlFor={props.name}>{props.label}</label>
    </div>
  );
};

export default Checkbox;
