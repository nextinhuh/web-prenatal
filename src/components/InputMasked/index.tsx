import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import MaskedInput from 'react-text-mask';

import { Container } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
  width?: string;
  height?: string;
  mask: any;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  icon: Icon,
  width,
  height,
  mask,
  placeholder,
  name,
  id,
  ...rest
}) => (
  <Container width={width} height={height}>
    {Icon && <Icon size={20} color="#76348D" />}
    <MaskedInput
      name={name}
      mask={mask}
      id={id}
      placeholder={placeholder}
      placeholderChar={'\u2000'}
      {...rest}
    />
  </Container>
);

export default Input;
