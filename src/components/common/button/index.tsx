import React from 'react';
import './styles.scss';
import { IButton } from './interface';

const Button = (props: IButton) => {
  const { name, onClick, disabled, isLoading } = props;
  return (
    <div id="adarsh-button">
      {disabled && <div className="disabled">{name}</div>}
      {isLoading && <div className="loading">Sending...</div>}
      {!disabled && !isLoading && (
        <button className="button" onClick={onClick}>
          {name}
        </button>
      )}
    </div>
  );
};

export default Button;
