import React from 'react';
import './styles.scss';
import { IButton } from './interface';

const Button = (props: IButton) => {
  const { name, onClick, type } = props;
  return (
    <div id="adarsh-button">
      <button className="button" onClick={onClick} type={type}>
        {name}
      </button>
    </div>
  );
};

export default Button;
