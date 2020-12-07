import React, { useEffect, useState } from 'react';
import { IoIosLogOut } from 'react-icons/io';
import firebase from 'firebase';
import 'firebase/firestore';

import { Container, LogoContent, UserAvatar } from './style';
import logoImg from '../../assets/logo.png';

interface User {
  name: string | undefined | null;
  photoUrl: string | undefined | null;
}

const Header: React.FC = () => {
  const [userInfo, setUserInfo] = useState<User>({} as User);

  useEffect(() => {
    const user = {
      name: firebase.auth().currentUser?.displayName,
      photoUrl: firebase.auth().currentUser?.photoURL,
    };
    setUserInfo(user);
  }, []);

  return (
    <Container>
      <LogoContent>
        <p>Cegonha</p>
        <img src={logoImg} alt="" />
      </LogoContent>

      <UserAvatar>
        <img src={userInfo.photoUrl ? userInfo.photoUrl : ''} alt="" />

        <p>
          Olá,
          {` ${userInfo.name}`}
        </p>
      </UserAvatar>

      <IoIosLogOut size={35} color="#503d77" />
    </Container>
  );
};

export default Header;
