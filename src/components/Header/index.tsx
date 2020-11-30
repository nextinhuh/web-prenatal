import React from 'react';
import { IoIosLogOut } from 'react-icons/io';

import { Container, LogoContent, UserAvatar } from './style';
import logoImg from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <LogoContent>
        <p>Cegonha</p>
        <img src={logoImg} alt="" />
      </LogoContent>

      <UserAvatar>
        <img
          src="https://avatars0.githubusercontent.com/u/50875570?s=460&u=fe14fc8cb776233600522328f1ea1406f895f44a&v=4"
          alt=""
        />

        <p>Olá, Nome do usuário</p>
      </UserAvatar>

      <IoIosLogOut size={35} color="#503d77" />
    </Container>
  );
};

export default Header;
