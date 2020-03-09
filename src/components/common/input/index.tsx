import React from 'react';
import './styles.scss';
import { IInputProps } from './interface';

const Input = (props: IInputProps) => {
  const { placeholder, onChange, type, isRequired, value } = props;

  return (
    <div id="adarsh-input">
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        required={isRequired}
        value={value}
      />
    </div>
  );
};

export default Input;
