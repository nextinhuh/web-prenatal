import React from 'react';
import { IoIosLogOut } from 'react-icons/io';

import { Container, LogoContent, UserAvatar } from './style';
import logoImg from '../../assets/logo.png';

import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
  const { userStatus, signOut } = useAuth();

  return (
    <Container>
      <LogoContent>
        <p>Cegonha</p>
        <img src={logoImg} alt="" />
      </LogoContent>

      <UserAvatar>
        <img src={userStatus.photoUrl ? userStatus.photoUrl : ''} alt="" />

        <p>
          Olá,
          {` ${userStatus.name}`}
        </p>
      </UserAvatar>

      <IoIosLogOut size={35} color="#503d77" onClick={signOut} />
    </Container>
  );
};

export default Header;
