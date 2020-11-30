import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
  width?: string;
  height?: string;
}

const Input: React.FC<InputProps> = ({
  icon: Icon,
  width,
  height,
  ...rest
}) => (
  <Container width={width} height={height}>
    {Icon && <Icon size={20} color="#76348D" />}
    <input {...rest} />
  </Container>
);

export default Input;
