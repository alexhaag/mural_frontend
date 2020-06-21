import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
// como eu nao tenho variaves para a interface eu uso o type

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container {...rest}>{children}</Container>
);

export default Button;
