import React from 'react';
import './styles.scss';
import { IButton } from './interface';

const Button = (props: IButton) => {
  const { name, onClick, disabled, isLoading, type, icon } = props;
  return (
    <div id="adarsh-button">
      {disabled && <div className="disabled">{name}</div>}
      {isLoading && <div className="loading">Sending...</div>}
      {!disabled && !isLoading && type !== 'tertiary' && (
        <button className="button" onClick={onClick}>
          {name}
        </button>
      )}
      {type === 'tertiary' && (
        <button className="button tertiary" onClick={onClick}>
          {icon}
        </button>
      )}
    </div>
  );
};

export default Button;
