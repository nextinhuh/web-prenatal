import React, { useCallback } from 'react';
import { IoIosLogOut, IoIosArrowBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

import { Container, LogoContent, UserAvatar } from './style';
import logoImg from '../../assets/logo.png';

import { useAuth } from '../../hooks/auth';

interface HeaderProps {
  navBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({ navBack = false }) => {
  const { userStatus, signOut } = useAuth();
  const history = useHistory();

  const handleNavBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <Container>
      {navBack && (
        <IoIosArrowBack size={35} color="#503d77" onClick={handleNavBack} />
      )}

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
