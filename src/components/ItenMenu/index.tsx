import React from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, Navigate } from './style';

interface ItenMenuProps {
  icon: React.ComponentType<IconBaseProps>;
  title: string;
  backgroudnColor: string;
  navigate: string;
}

const ItenMenu: React.FC<ItenMenuProps> = ({
  icon: Icon,
  title,
  backgroudnColor,
  navigate,
}) => {
  return (
    <Navigate to={navigate}>
      <Container backgroundColor={backgroudnColor}>
        {Icon && <Icon size={50} color="#503D77" />}
        <p>{title}</p>
      </Container>
    </Navigate>
  );
};

export default ItenMenu;
