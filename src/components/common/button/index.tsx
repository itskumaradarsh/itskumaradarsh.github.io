import React from 'react';
import './styles.scss';
import { IButton } from './interface';

const Button = (props: IButton) => {
  const { name, onClick } = props;
  return (
    <div id="adarsh-button">
      <div className="button" onClick={onClick}>
        {name}
      </div>
    </div>
  );
};

export default Button;
