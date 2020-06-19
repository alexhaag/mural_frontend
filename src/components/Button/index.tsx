import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
// como eu nao tenho variaves para a interface eu uso o type

const Button: React.FC<ButtonProps> = () => (
  <button type="button">teste</button>
);

export default Button;
